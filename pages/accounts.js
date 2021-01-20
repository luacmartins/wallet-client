import { useState } from 'react'
import Head from 'next/head'
import { useData } from '../utils/useAPI'
import Layout from '../components/shared/Layout'
import NavBar from '../components/desktop/NavBar'
import MobileHeader from '../components/mobile/Header'
import MobileNavBar from '../components/mobile/NavBar'
import AccountsList from '../components/AccountsList'
import Footer from '../components/desktop/Footer'
import AddAccount from '../components/AddAccount'
import Suspense from '../components/shared/Suspense'

export default function AccountsPage() {
   const [edit, setEdit] = useState('')
   const { data, isLoading, error } = useData('/api/accounts')
   const hasNoData = !data || (data && Object.keys(data).length === 0)

   return (
      <>
         <Head>
            <title>Wallet - Accounts</title>
            <link rel="icon" href="/icons/favicon.svg" />
         </Head>
         <Layout>
            <NavBar />
            <MobileHeader
               title={'Accounts'}
               right={<AddAccount />}
            />

            {error || isLoading || hasNoData ?
               <Suspense error={error} isLoading={isLoading} />
               :
               <main className="flex flex-col flex-1 mt-4 mb-12 md:mt-12">
                  <AccountsList data={data} setData={setEdit} />
               </main>
            }

            <Footer />
            <MobileNavBar />
         </Layout>
      </>
   )
}