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
import Pagination from '../components/Pagination'
import Main from '../components/shared/Main'

export default function TransactionsPage() {
   const [data, setData] = useState()
   const [totalPages, setTotalPages] = useState('')
   const [page, setPage] = useState(1)
   const [filters, setFilters] = useState({})

   useEffect(() => {
      const query = qs.stringify({ ...filters, page }, { indices: false, arrayFormat: 'comma', addQueryPrefix: true })

      fetcher.get(`/api/transactions/${query}`)
         .then(res => {
            setTotalPages(parseInt(res.headers['x-total-pages']))
            setData(res.data)
         })
         .catch(e => console.log(e))
   }, [filters, page])

   const handleAdd = () => {
      console.log('adding new transaction')
   }

   const isEmpty = Object.keys(filters).length === 0

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
               left={<FiltersModal value={filters} setValue={setFilters} />}
            />
            <Main data={data} message={'You have no transactions. Add more accounts to see your transactions.'}>
               <div className="md:w-180 lg:w-240 md:mx-auto md:mt-8">
                  <div className="mx-4 mb-4 md:hidden">
                     <Search value={filters} setValue={setFilters} />
                     {!isEmpty && <ResetFilters setValue={setFilters} />}
                  </div>
                  <div className="flex md:gap-x-10 lg:gap-x-12">
                     <div className="hidden md:flex md:flex-col gap-y-6 md:w-64">
                        <Search value={filters} setValue={setFilters} />
                        <Filters value={filters} setValue={setFilters} />
                     </div>
                     <div className="w-full md:flex-1">
                        <div className="hidden md:flex md:justify-between md:items-center">
                           {!isEmpty && <ResetFilters setValue={setFilters} />}
                        </div>
                        {data && <TransactionsList data={data} handleAdd={handleAdd} />}
                        {totalPages > 1 && <Pagination value={page} setValue={setPage} totalPages={totalPages} />}
                     </div>
                  </div>
               </div>
            </Main>
            <Footer />
            <MobileNavBar />
         </Layout>
      </>
   )
}