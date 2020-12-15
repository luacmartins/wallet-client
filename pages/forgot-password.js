import Head from 'next/head'
import Layout from '../components/shared/Layout'
import ForgotPassword from '../components/forms/ForgotPassword'

export default function ForgotPasswordPage() {
   return (
      <>
         <Head>
            <title>Wallet</title>
            <link rel="icon" href="/icons/favicon.svg" />
         </Head>
         <Layout>
            <main className="flex-1 mt-12 md:mt-32">
               <ForgotPassword />
            </main>
         </Layout>
      </>
   )
}
