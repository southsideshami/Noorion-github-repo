import Head from 'next/head'
import Navbar from '../components/Navbar'

export default function Home() {
  return (
    <div className="bg-white dark:bg-[#2A2C41] min-h-screen text-gray-900 dark:text-white">
      <Head>
        <title>Noorion</title>
      </Head>
      <Navbar />
      <main className="p-6">
        <h1 className="text-3xl font-serif text-[#FDBF50]">Welcome to Noorion</h1>
        <p className="mt-2">This is a prototype for a spiritually centered social platform.</p>
      </main>
    </div>
  )
}
