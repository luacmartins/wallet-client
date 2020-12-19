import { useState, useEffect } from 'react'
import Head from 'next/head'
import qs from 'qs'
import fetcher from '../utils/fetcher'
import Layout from '../components/shared/Layout'
import NavBar from '../components/desktop/NavBar'
import MobileHeader from '../components/mobile/Header'
import MobileNavBar from '../components/mobile/NavBar'
import TransactionsList from '../components/TransactionsList'
import Footer from '../components/desktop/Footer'
import Search from '../components/inputs/Search'
import ResetFilters from '../components/ResetFilters'
import FiltersModal from '../components/mobile/FilterModal'
import Filters from '../components/FiltersList'

import AddTransactionModal from '../components/mobile/AddTransactionModal'
import AddTransaction from '../components/desktop/AddTransaction'
import AddCircle from '../components/icons/AddCircle'

export default function AccountsPage() {
   const [isVisible, setIsVisible] = useState(false)
   const [data, setData] = useState({ 'pending': [], 'posted': [] })
   const [filters, setFilters] = useState([])

   useEffect(() => {
      const query = qs.stringify(filters, { indices: false, arrayFormat: 'comma', addQueryPrefix: true })

      fetcher.get(`/api/transactions/${query}`)
         .then(res => setData(res.data))
         .catch(e => console.log(e))
   }, [filters])

   const handleAdd = () => {
      console.log('adding new transaction')
   }

   return (
      <>
         <Head>
            <title>Wallet - Transactions</title>
            <link rel="icon" href="/icons/favicon.svg" />
         </Head>
         <Layout>
            <NavBar />
            <MobileHeader
               title={'Transactions'}
               // right={<AddTransactionModal onClick={handleAdd} />}
               left={<FiltersModal value={filters} setValue={setFilters} />}
            />
            <main className="flex-1 mt-4 mb-12">
               <div className="md:w-180 lg:w-240 md:mx-auto md:mt-8">
                  <div className="mx-4 mb-4 md:hidden">
                     <Search />
                     {filters && <ResetFilters setValue={setFilters} />}
                  </div>
                  <div className="flex md:gap-x-10 lg:gap-x-12">
                     <div className="hidden md:flex md:flex-col gap-y-6 md:w-64">
                        <Search />
                        <Filters value={filters} setValue={setFilters} />
                     </div>
                     <div className="w-full md:flex-1">
                        <div className="hidden md:flex md:justify-between md:items-center">
                           {filters && <ResetFilters setValue={setFilters} />}
                           {/* <button onClick={() => setIsVisible(!isVisible)} className="flex relative items-center gap-x-1 font-semibold hover:text-theme-gray-800">
                              <AddCircle />
                              <span>Add transaction</span>
                           </button> */}
                        </div>
                        {/* {isVisible && <AddTransaction close={() => setIsVisible(!isVisible)} />} */}
                        {data && <TransactionsList data={data} handleAdd={handleAdd} />}
                     </div>
                  </div>
               </div>
            </main>
            <Footer />
            <MobileNavBar />
         </Layout>
      </>
   )
}