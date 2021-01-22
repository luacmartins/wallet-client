import Head from 'next/head'
import { Layout } from '../components/shared'
import { Login } from '../components/forms'

export default function Index() {
   return (
      <>
         <Head>
            <title>Wallet - Login</title>
            <link rel="icon" href="/icons/favicon.svg" />
         </Head>
         <Layout>
            <main className="flex-1 mt-12 md:mt-32">
               <Login />
            </main>
         </Layout>
      </>
   )
}
