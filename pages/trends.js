import Head from 'next/head'
import Layout from '../components/shared/Layout'
import NavBar from '../components/desktop/NavBar'
import MobileHeader from '../components/mobile/Header'
import MobileNavBar from '../components/mobile/NavBar'
import MonthlySpendChart from '../components/charts/MonthlySpend'
import Footer from '../components/desktop/Footer'
import Timeframe from '../components/charts/Timeframe'
import MonthlySpendIntro from '../components/MonthlySpendIntro'
import AverageSpending from '../components/AverageSpending'
import OvertimeSpending from '../components/charts/OvertimeSpending'
import OvertimeIntro from '../components/OvertimeIntro'

import useHeight from '../utils/useHeight'

const colors = ['#fab131', '#5FB2FF', '#4462FF', '#FF7777', '#19B200', '#B900BD']
import data from '../data/trendsData'

export default function TrendsPage() {
   // 309 is the height in pixel of the other components that are on screen, 
   // it is used as an offset to make the page full screen
   const height = useHeight(309)
   // 15 is the relative offset between the monthly spend chart and the overtime chart,
   // since it has less components on screen
   const overtimeHeight = height + 15

   return (
      <>
         <Head>
            <title>Wallet - Trends</title>
            <link rel="icon" href="/icons/favicon.svg" />
         </Head>
         <Layout>
            <NavBar />
            <MobileHeader
               title={'Trends'}
            />
            <main className="flex-1 mt-4 md:mt-12">
               <div className="md:flex md:justify-center">
                  <div className="md:w-80 lg:w-112 xl:w-128 flex items-center">
                     <MonthlySpendIntro data={data.monthly.summary} />
                  </div>
                  <div className="md:w-80 lg:w-112 xl:w-128 lg:mb-4">
                     <div
                        style={{ height }}
                        className="w-screen md:w-full md:chart-h-80 lg:chart-h-96 xl:chart-h-112">
                        <MonthlySpendChart colors={colors} data={data.monthly.series} />
                     </div>
                     <Timeframe timeframe={data.monthly.timeframe} setData={() => { }} />
                  </div>
               </div>
               <div className="md:bg-theme-beige-500 md:py-8 lg:py-12 md:my-4">
                  <AverageSpending data={data.average} />
               </div>
               <div className="md:mt-16">
                  <header className="text-xl mx-6 mb-6 md:hidden">Overtime spending</header>
                  <header className="hidden md:flex mx-6 mb-6 justify-center md:text-2xl xl:text-3xl">...and here is your spending overtime</header>
                  <OvertimeIntro data={data.overtime.summary} />
                  <div style={{ height: overtimeHeight }} className='w-screen md:h-80'>
                     <OvertimeSpending colors={colors} data={data.overtime.series} />
                  </div>
                  <Timeframe timeframe={data.overtime.timeframe} setData={() => { }} />
               </div>
            </main>
            <Footer />
            <MobileNavBar />
         </Layout>
      </>
   )
}