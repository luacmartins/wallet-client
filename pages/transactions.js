import Head from 'next/head'
import { useState } from 'react'
import { useData } from '../utils/useAPI'
import {
  TransactionsList,
  ResetFilters,
  FiltersList,
  FilterModal,
} from '../components/transactions'
import {
  Layout,
  NavBar,
  MobileHeader,
  MobileNavBar,
  Footer,
  Pagination,
  Suspense,
} from '../components/shared'
import { Search } from '../components/inputs'

export default function TransactionsPage() {
  const [page, setPage] = useState(1)
  const [filters, setFilters] = useState({})

  const { data, totalPages, isLoading: isLoadingData, error } = useData('/api/transactions', {
    ...filters,
    page,
  })
  const { data: categories, isLoading: isLoadingCategories } = useData('/api/category')
  const { data: list, isLoading: isLoadingFilters } = useData('/api/filters')
  const isLoading = isLoadingData || isLoadingCategories || isLoadingFilters
  const hasNoData = !data || (data && Object.keys(data).length === 0)
  const hasFilters = Object.keys(filters).length !== 0

  return (
    <>
      <Head>
        <title>Wallet - Transactions</title>
        <link rel='icon' href='/icons/favicon.svg' />
      </Head>
      <Layout>
        <NavBar />
        <MobileHeader
          title={'Transactions'}
          left={<FilterModal list={list} value={filters} setValue={setFilters} />}
        />

        {error || isLoadingCategories || isLoadingFilters ? (
          <Suspense error={error} isLoading={isLoading} />
        ) : (
          <main className='flex flex-col flex-1 mt-4 mb-12 md:mt-12'>
            <div className='md:w-180 lg:w-240 md:mx-auto md:mt-8'>
              <div className='mx-4 mb-4 md:hidden'>
                <Search value={filters} setValue={setFilters} />
                {hasFilters && <ResetFilters setValue={setFilters} />}
              </div>
              <div className='flex md:space-x-10 lg:space-x-12'>
                <div className='hidden space-y-6 md:flex md:flex-col md:w-64'>
                  <Search value={filters} setValue={setFilters} />
                  <FiltersList list={list} value={filters} setValue={setFilters} />
                </div>
                <div className='w-full md:flex-1'>
                  <div className='hidden md:flex md:justify-between md:items-center'>
                    {hasFilters && <ResetFilters setValue={setFilters} />}
                  </div>
                  {!data ? (
                    <Suspense error={error} isLoading={isLoading} />
                  ) : (
                    <TransactionsList
                      data={data}
                      categories={categories}
                      params={{ filters, page }}
                    />
                  )}
                  {totalPages > 1 && (
                    <Pagination value={page} setValue={setPage} totalPages={totalPages} />
                  )}
                </div>
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
