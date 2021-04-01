import Head from 'next/head'
import { useState, useEffect } from 'react'
import { useData } from '../utils/useAPI'
import useHeight from '../utils/useHeight'

// import components
import { AccountsOverview } from '../components/accounts'
import { TransactionsList } from '../components/transactions'
import { NetWorthIntro, NetWorth, Timeframe } from '../components/charts'
import {
  Layout,
  NavBar,
  MobileNavBar,
  MobileHeader,
  MobileProfile,
  Suspense,
  Footer,
} from '../components/shared'

export default function DashboardPage() {
  const [period, setPeriod] = useState('3M')
  const [tempData, setTempData] = useState()
  const { data, error } = useData('/api/dashboard', { period })
  const { data: categories, isLoading: isLoadingCategories } = useData('/api/category')
  const isLoading = !tempData || isLoadingCategories
  const hasNoData = !tempData || (tempData && Object.keys(tempData).length === 0)

  useEffect(() => {
    if (data) setTempData(data)
  }, [data])

  // 282 is the height offset of the other elements on the screen (header, navbar, etc)
  const height = useHeight(282)

  return (
    <>
      <Head>
        <title>Wallet - Dashboard</title>
        <link rel='icon' href='/icons/favicon.svg' />
      </Head>
      <Layout>
        <NavBar />
        <MobileHeader right={<MobileProfile />} />

        {error || isLoading || hasNoData ? (
          <Suspense error={error} isLoading={isLoading} />
        ) : (
          <main className='flex flex-col flex-1 mt-4 mb-12 md:mt-12'>
            <NetWorthIntro data={tempData.networth.summary} />
            <div style={{ height: `${height}px` }} className='w-full'>
              <NetWorth data={tempData.networth.series} />
            </div>
            <Timeframe data={tempData.networth.timeframe} period={period} setPeriod={setPeriod} />
            <div className='mt-12 md:flex md:w-180 lg:w-240 md:mx-auto md:mt-16'>
              <div className='hidden md:flex md:flex-1'>
                <TransactionsList data={tempData.transactions} categories={categories} />
              </div>
              <div className='md:w-80 lg:w-96 md:ml-8'>
                <AccountsOverview data={tempData.accounts} />
              </div>
            </div>
          </main>
        )}
        <Footer />
        <MobileNavBar />
      </Layout>
    </>
  )
}
