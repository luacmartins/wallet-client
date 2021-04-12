import Head from 'next/head'
import { useState, useEffect } from 'react'
import { useData } from '../utils/useAPI'
import useHeight from '../utils/useHeight'
import {
  MonthlySpend,
  Timeframe,
  MonthlySpendIntro,
  AverageSpending,
  OvertimeSpending,
  OvertimeIntro,
} from '../components/charts'
import { Layout, NavBar, MobileHeader, MobileNavBar, Footer, Suspense } from '../components/shared'

const colors = ['#fab131', '#5FB2FF', '#4462FF', '#FF7777', '#19B200', '#B900BD']

export default function TrendsPage() {
  const [monthlyPeriod, setMonthlyPeriod] = useState('MTD')
  const [overtimePeriod, setOvertimePeriod] = useState('6M')
  const [tempData, setTempData] = useState()

  const { data, isLoading, error } = useData('/api/trends', { monthlyPeriod, overtimePeriod })
  const hasNoData = !tempData || (tempData && Object.keys(tempData).length === 0)

  useEffect(() => {
    if (data) setTempData(data)
  }, [data])

  // 309 is the height in pixel of the other components that are on screen,
  // it is used as an offset to make the page full screen
  // -30 is the relative offset between the monthly spend chart and the overtime chart,
  // since it has less components on screen
  const height = useHeight(309)
  const overtimeHeight = height - 30

  return (
    <>
      <Head>
        <title>Wallet - Trends</title>
        <link rel='icon' href='/icons/favicon.svg' />
      </Head>
      <Layout>
        <NavBar />
        <MobileHeader title={'Trends'} />

        {error || !tempData || hasNoData ? (
          <Suspense error={error} isLoading={!tempData} />
        ) : (
          <main className='flex flex-col flex-1 mt-4 mb-12 md:mt-12'>
            <div className='md:flex md:justify-center'>
              <div className='flex items-center md:w-80 lg:w-112 xl:w-128'>
                <MonthlySpendIntro data={tempData.monthly.summary} period={monthlyPeriod} />
              </div>
              <div className='md:w-80 lg:w-112 xl:w-128 lg:mb-4'>
                <div
                  style={{ height }}
                  className='w-screen max-h-90 md:max-h-full md:w-full md:chart-h-80 lg:chart-h-96 xl:chart-h-112'
                >
                  <MonthlySpend
                    colors={colors}
                    data={tempData.monthly.series}
                    period={monthlyPeriod}
                  />
                </div>
                <Timeframe
                  data={tempData.monthly.timeframe}
                  period={monthlyPeriod}
                  setPeriod={setMonthlyPeriod}
                />
              </div>
            </div>
            <div className='md:bg-theme-beige-500 md:py-8 lg:py-12 md:my-4'>
              <AverageSpending data={tempData.average} />
            </div>
            <div className='md:mt-16'>
              <header className='mx-6 mb-6 text-xl md:hidden'>Overtime spending</header>
              <header className='justify-center hidden mx-6 mb-12 md:flex md:text-2xl xl:text-3xl'>
                ...and here is your spending over time
              </header>
              <OvertimeIntro data={tempData.overtime.summary} />
              <div style={{ height: overtimeHeight }} className='w-screen md:h-80'>
                <OvertimeSpending colors={colors} data={tempData.overtime.series} />
              </div>
              <Timeframe
                data={tempData.overtime.timeframe}
                period={overtimePeriod}
                setPeriod={setOvertimePeriod}
              />
            </div>
          </main>
        )}
        <Footer />
        <MobileNavBar />
      </Layout>
    </>
  )
}
