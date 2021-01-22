import useSWR from 'swr'
import { swrFetcher } from '../config'

export const useFilters = () => {
   const getFilters = () => {
      const { data, error } = useSWR('/api/filters', swrFetcher)
      if (error) flash({ type: 'error', message: 'There was an error loading your filters. Please try again later.' })

      return {
         list: data?.data || [],
         isLoading: !error && !data,
      }
   }

   return { getFilters }
}

export default useFilters