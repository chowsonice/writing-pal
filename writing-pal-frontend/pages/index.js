import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <div>
      <h1>Welcome to My Course App</h1>
      <Link href='/editor'>
        Editor
      </Link>
    </div>
  );
}
