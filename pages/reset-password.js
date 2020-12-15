import Head from 'next/head'
import Layout from '../components/shared/Layout'
import ResetPassword from '../components/forms/ResetPassword'

export default function ResetPasswordPage() {
   return (
      <>
         <Head>
            <title>Wallet - Reset Password</title>
            <link rel="icon" href="/icons/favicon.svg" />
         </Head>
         <Layout>
            <main className="flex-1 mt-12 md:mt-32">
               <ResetPassword />
            </main>
         </Layout>
      </>
   )
}
