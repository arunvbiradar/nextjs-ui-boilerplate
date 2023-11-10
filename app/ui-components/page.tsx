import Link from 'next/link';
import {FiArrowLeft} from 'react-icons/fi'
import Card from './../../components/uielements/Card';
import Buttons from './../../components/uielements/Buttons';
import Typography from './../../components/uielements/Typography';

export default function Home() {
  return (
    <>
      <main className='py-4'>
        <Link href="/" className='mb-8 inline-block text-sky-600 hover:text-black'>
          <FiArrowLeft className="inline-block mr-1 text-lg" />Back to Home
        </Link>
        <Typography />
        <Buttons />
        <Card />
      </main>
    </>
  )
}
