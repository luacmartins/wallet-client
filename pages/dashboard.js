// import libraries
import { useEffect } from 'react'
import axios from 'axios'
import Head from 'next/head'
import { useAuth } from '../utils/AuthProvider'
import useHeight from '../utils/useHeight'

// import components
import Layout from '../components/shared/Layout'
import NetWorthIntro from '../components/NetWorthIntro'
import NavBar from '../components/desktop/NavBar'
import MobileHeader from '../components/mobile/Header'
import MobileNavBar from '../components/mobile/NavBar'
import Profile from '../components/mobile/Profile'
import AccountsOverview from '../components/AccountsOverview'
import Footer from '../components/desktop/Footer'
import TransactionsList from '../components/TransactionsList'
import NetWorthChart from '../components/charts/NetWorth'
import Timeframe from '../components/charts/Timeframe'


// import fake data
import data from '../data/dashboardData'

export default function DashboardPage() {
   const { token } = useAuth()

   // 282 is the height offset of the other elements on the screen (header, navbar, etc)
   const height = useHeight(282)

   useEffect(() => {
      // axios
      //    .get(`${process.env.NEXT_PUBLIC_SERVER_URL}/secure`, { headers: { 'Authorization': token } })
      //    .then(data => {
      //       console.log(data)
      //    }).catch(e => {
      //       console.log(e)
      //    })
   }, [])

   return (
      <>
         <Head>
            <title>Wallet - Dashboard</title>
            <link rel="icon" href="/icons/favicon.svg" />
         </Head>
         <Layout>
            <NavBar />
            <MobileHeader
               right={<Profile />}
            />
            <main className="flex-1 mt-4 mb-12 md:mt-12">
               <NetWorthIntro data={data.networth.summary} />
               <div style={{ height: `${height}px` }} className="w-full">
                  <NetWorthChart data={data.networth.series} />
               </div>
               <Timeframe timeframe={data.networth.timeframe} setData={() => { }} />
               <div className="mt-12 md:flex md:w-180 lg:w-240 md:mx-auto md:mt-16">
                  <div className="hidden md:flex md:flex-1">
                     <TransactionsList data={data.transactions} />
                  </div>
                  <div className="md:w-80 lg:w-96 md:ml-8">
                     <AccountsOverview data={data.accounts} />
                  </div>
               </div>
            </main>
            <Footer />
            <MobileNavBar />
         </Layout>
      </>
   )
}

