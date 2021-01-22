import Head from 'next/head'
import { Layout } from '../../components/shared'
import { SignUp } from '../../components/forms'

export default function SignUpPage() {
   return (
      <>
         <Head>
            <title>Wallet - Sign up</title>
            <link rel="icon" href="/icons/favicon.svg" />
         </Head>
         <Layout>
            <main className="flex-1 mt-12 md:mt-32">
               <SignUp />
            </main>
         </Layout>
      </>
   )
}
