import useSWR from 'swr'
import qs from 'qs'
import { swrFetcher } from '../config'

const useData = (endpoint, params) => {
   let url
   if (params) {
      const query = qs.stringify(params, { indices: false, arrayFormat: 'comma', addQueryPrefix: true })
      url = `${endpoint}/${query}`
   } else {
      url = endpoint
   }

   const { data, error } = useSWR(url, swrFetcher)

   return {
      data: data?.data,
      totalPages: parseInt(data?.totalPages),
      isLoading: !error && !data,
      error
   }
}

export default useData