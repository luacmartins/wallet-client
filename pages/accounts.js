import { useState, useEffect } from 'react'
import Head from 'next/head'
import fetcher from '../utils/fetcher'
import Layout from '../components/shared/Layout'
import NavBar from '../components/desktop/NavBar'
import MobileHeader from '../components/mobile/Header'
import MobileNavBar from '../components/mobile/NavBar'
import AccountsList from '../components/AccountsList'
import Footer from '../components/desktop/Footer'
import AddAccount from '../components/AddAccount'

export default function AccountsPage() {
   const [data, setData] = useState('')

   useEffect(() => {
      fetcher.get('/api/accounts')
         .then(res => {
            setData(res.data)
         })
         .catch()
   }, [])

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
            <main className="flex-1 mt-4">
               <AccountsList data={data} />
            </main>
            <Footer />
            <MobileNavBar />
         </Layout>
      </>
   )
}