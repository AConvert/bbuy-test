import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <main >
      <Link className='bg-black text-white p-2 text-xl
      ' href={'/bbuy'}>Access Bbuy</Link>
    </main>
  )
}
