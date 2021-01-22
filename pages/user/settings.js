import Head from 'next/head'
import { Layout, NavBar, Profile, Footer } from '../../components/shared'

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