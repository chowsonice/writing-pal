from flask import Flask, request, jsonify
from flask_cors import CORS
from transformers import pipeline

app = Flask(__name__)
CORS(app)

corrector = pipeline(
   'text2text-generation',
   'pszemraj/flan-t5-large-grammar-synthesis',
)

@app.route('/correction', methods=['POST', 'OPTIONS'])
def correct_text():
   if request.method == 'OPTIONS':
        response = app.make_default_options_response()
        response.headers['Access-Control-Allow-Headers'] = 'Content-Type'
        response.headers['Access-Control-Allow-Methods'] = 'POST'
        return response
   raw_text = request.json['text']
   results = corrector(raw_text)
   print("Received")
   return jsonify(corrected_text=results[0]['generated_text'])

if __name__ == '__main__':
   app.run(debug=True)
