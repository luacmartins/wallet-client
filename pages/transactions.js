import { useState } from 'react'
import Head from 'next/head'
import { useData } from '../utils/useAPI'
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
import Suspense from '../components/shared/Suspense'

export default function TransactionsPage() {
   const [page, setPage] = useState(1)
   const [filters, setFilters] = useState({})

   const { data, totalPages, isLoading, error } = useData('/api/transactions', { ...filters, page })
   const hasNoData = !data || (data && Object.keys(data).length === 0)
   const hasFilters = Object.keys(filters).length !== 0

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

            {error || isLoading || hasNoData ?
               <Suspense error={error} isLoading={isLoading} />
               :
               <main className="flex flex-col flex-1 mt-4 mb-12 md:mt-12">
                  <div className="md:w-180 lg:w-240 md:mx-auto md:mt-8">
                     <div className="mx-4 mb-4 md:hidden">
                        <Search value={filters} setValue={setFilters} />
                        {hasFilters && <ResetFilters setValue={setFilters} />}
                     </div>
                     <div className="flex md:gap-x-10 lg:gap-x-12">
                        <div className="hidden md:flex md:flex-col gap-y-6 md:w-64">
                           <Search value={filters} setValue={setFilters} />
                           <Filters value={filters} setValue={setFilters} />
                        </div>
                        <div className="w-full md:flex-1">
                           <div className="hidden md:flex md:justify-between md:items-center">
                              {hasFilters && <ResetFilters setValue={setFilters} />}
                           </div>
                           {data && <TransactionsList data={data} />}
                           {totalPages > 1 && <Pagination value={page} setValue={setPage} totalPages={totalPages} />}
                        </div>
                     </div>
                  </div>
               </main>
            }

            <Footer />
            <MobileNavBar />
         </Layout>
      </>
   )
}