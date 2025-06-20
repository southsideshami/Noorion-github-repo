import Link from 'next/link'

export default function Navbar() {
  return (
    <nav className="bg-[#2A2C41] text-white p-4 flex justify-between">
      <div className="font-bold text-[#FDBF50] text-xl">Noorion</div>
      <div className="space-x-4">
        <Link href="/">Home</Link>
        <Link href="/auth">Login</Link>
      </div>
    </nav>
  )
}
