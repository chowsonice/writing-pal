import Head from 'next/head'

export default function Layout({ children }) {
  return (
    <div>
      <Head>
        <title>Course App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header className="bg-blue-500 py-4">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl font-bold text-white">Course App</h1>
        </div>
      </header>

      <main>{children}</main>

      <footer className="bg-gray-200 py-4">
        <div className="container mx-auto px-4">
          <p className="text-center text-gray-600">© 2023 Course App. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}