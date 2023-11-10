import Link from 'next/link';
import {FiArrowLeft} from 'react-icons/fi'
import Card from '../../../components/uielements/Card';

export default function Home() {
  return (
    <>
      <main className='py-4'>
        <Link href="/" className='mb-8 inline-block text-sky-600 hover:text-black'>
          <FiArrowLeft className="inline-block mr-1 text-lg" />Back to Home
        </Link>
        <Card />
      </main>
    </>
  )
}
