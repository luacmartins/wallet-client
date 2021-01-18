import useSWR from 'swr'
import qs from 'qs'
import axiosConfig from './fetcher'

const fetcher = url => axiosConfig.get(url).then(res => {
   const data = {
      totalPages: res.headers['x-total-pages'],
      data: res.data
   }
   return data
})

export default function useAPI(endpoint, params) {
   let url

   if (params) {
      const query = qs.stringify(params, { indices: false, arrayFormat: 'comma', addQueryPrefix: true })
      url = `${endpoint}/${query}`
   } else {
      url = endpoint
   }

   const { data, error } = useSWR(url, fetcher)

   return {
      data: data && data.data,
      totalPages: data && parseInt(data.totalPages),
      isLoading: !error && !data,
      error
   }
}