import Head from 'next/head'
import Layout from '../components/shared/Layout'
import NavBar from '../components/desktop/NavBar'
import Profile from '../components/desktop/Profile'
import Footer from '../components/desktop/Footer'

// make this page desktop only
export default function SettingsPage() {
   return (
      <>
         <Head>
            <title>Wallet - Settings</title>
            <link rel="icon" href="/icons/favicon.svg" />
         </Head>
         <Layout>
            <NavBar />
            <main className="flex-1">
               <Profile />
            </main>
            <Footer />
         </Layout>
      </>
   )
}