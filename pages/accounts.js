import { useState } from 'react'
import Head from 'next/head'
import useAPI from '../utils/useAPI'
import Layout from '../components/shared/Layout'
import NavBar from '../components/desktop/NavBar'
import MobileHeader from '../components/mobile/Header'
import MobileNavBar from '../components/mobile/NavBar'
import AccountsList from '../components/AccountsList'
import Footer from '../components/desktop/Footer'
import AddAccount from '../components/AddAccount'
import Main from '../components/shared/Main'

export default function AccountsPage() {
   const [edit, setEdit] = useState('')
   const { data, isLoading, error } = useAPI('/api/accounts')

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
            <Main data={data} empty={data && Object.keys(data).length === 0} message={'You have no accounts linked to your profile. Add an account to start seeing your data.'}>
               <AccountsList data={data} setData={setEdit} />
            </Main>
            <Footer />
            <MobileNavBar />
         </Layout>
      </>
   )
}