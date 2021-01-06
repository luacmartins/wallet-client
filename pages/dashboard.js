// import libraries
import { useState, useEffect } from 'react'
import qs from 'qs'
import Head from 'next/head'
import fetcher from '../utils/fetcher'
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
import Main from '../components/shared/Main'

export default function DashboardPage() {
   const [data, setData] = useState('')
   const [period, setPeriod] = useState('3M')

   useEffect(() => {
      const query = qs.stringify({ period }, { indices: false, arrayFormat: 'comma', addQueryPrefix: true })
      fetcher.get(`/api/dashboard/${query}`)
         .then(res => {
            setData(res.data)
         })
         .catch()
   }, [period])

   // 282 is the height offset of the other elements on the screen (header, navbar, etc)
   const height = useHeight(282)

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
            <Main data={data} empty={data && data.accounts.length === 0} message={'Your summary will be displayed here once we fetch data for your accounts.'}>
               {data && data.accounts.length > 0 && <>
                  <NetWorthIntro data={data.networth.summary} />
                  <div style={{ height: `${height}px` }} className="w-full">
                     <NetWorthChart data={data.networth.series} />
                  </div>
                  <Timeframe data={data.networth.timeframe} period={period} setPeriod={setPeriod} />
                  <div className="mt-12 md:flex md:w-180 lg:w-240 md:mx-auto md:mt-16">
                     <div className="hidden md:flex md:flex-1">
                        <TransactionsList data={data.transactions} />
                     </div>
                     <div className="md:w-80 lg:w-96 md:ml-8">
                        <AccountsOverview data={data.accounts} />
                     </div>
                  </div>
               </>
               }
            </Main>
            <Footer />
            <MobileNavBar />
         </Layout>
      </>
   )
}

