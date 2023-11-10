import Image from 'next/image';
import { CiBatteryCharging } from "react-icons/ci";
import Typography from './../components/uielements/Typography';
import Buttons from './../components/uielements/Buttons';
import Link from 'next/link';

export default function Home() {
  return (
    <>
      <main className='py-4'>
        <h5 className='h5 text-xl'>Ui Components</h5>
          <ul className='flex flex-col gap-2 mt-3'>
            <li><Link href="/ui-components/typography">Typography</Link></li>
            <li><Link href="/ui-components/buttons">Buttons</Link></li>
            <li><Link href="/ui-components/cards">Cards</Link></li>
          </ul>
      </main>
    </>
  )
}
