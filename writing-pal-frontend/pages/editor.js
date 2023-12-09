import React, { useState } from 'react';

const Editor = () => {
  const [text, setText] = useState('');
  const [correctedText, setCorrectedText] = useState('');
  const [correction, setCorrection] = useState([{
    text: null, firstpos: 0, lastpos: 0
  }])

  const handleChange = (event) => {
    setText(event.target.value);
  };
    
  const handleSubmit = async () => {
    const response = await fetch('http://127.0.0.1:5000/correction', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ "text": text }),
    });

    const data = await response.json();
    setCorrectedText(data.corrected_text); 
  
    let diff1 = text.split(/(?<=[.!?])\s*/);
    let diff2 = correctedText.split(/(?<=[.!?])\s*/);
    
    const errors = [];
    const inputBox = document.getElementById('inputbox');
    
    // // Loop through each sentence in diff1 and compare it with the corresponding sentence in diff2
    // for (let i = 0; i < diff1.length; i++) {
    //   const rawSentence = diff1[i];
    //   const correctedSentence = diff2[i];
  
    //   if (rawSentence != correctedSentence){
    //     // Check if the raw sentence contains an error
    //     const errorIndex = text.indexOf(rawSentence);
    //     if (errorIndex !== -1) {
    //       // Calculate the position of the error to display the suggestion bubble
    //       const range = document.createRange();
    //       range.selectNodeContents(inputBox);
    //       const textNode = range.startContainer;
    //       range.setStart(textNode, errorIndex);
    //       range.setEnd(textNode, errorIndex + rawSentence.length); // Length of the word "your"
    //       const rect = range.getBoundingClientRect();
    
    //       const errorData = {
    //         top: rect.top + window.scrollY,
    //         left: rect.left + window.scrollX,
    //         correctedSentence: correctedSentence
    //       };
  
    //       errors.push(errorData);
    //     }
    //   }
    // }
    // setErrorPositions(errors);
    // setShowSuggestion(errors.length > 0);

  };


 

  return (
    <>
    <div className="flex flex-col items-center justify-center h-screen">
      <textarea
        id='inputbox'
        className="w-96 h-64 p-4 text-lg border-2 border-gray-300 rounded-lg shadow focus:outline-none resize-none"
        placeholder="Start typing..."
        value={text}
        onChange={handleChange}
      ></textarea>
      <button className="p-2 mt-4 bg-blue-500 text-white rounded" onClick={handleSubmit}>
        Submit
      </button>
      <div className="w-96 h-64 p-4 text-lg border-2 border-gray-300 rounded-lg shadow focus:outline-none resize-none">
        {correctedText}
      </div>
    </div>
    </>  
  );
};

export default Editor;