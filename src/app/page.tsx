import Head from 'next/head';
import Navbar from '../components/Navbar/Navbar'

import DashboardPage from './dashboard/page';


export default function Home() {
  return (
    <>
      <Head>
        <title>Myxellia</title>
      </Head>
      <main>
        <DashboardPage />
      </main>
    </>
  )

}