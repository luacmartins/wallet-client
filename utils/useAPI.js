import { useState } from 'react'
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
      data: data?.data,
      totalPages: parseInt(data?.totalPages),
      isLoading: !error && !data,
      error
   }
}

export const useAuth = () => {
   const [alert, setAlert] = useState({ type: '', message: '' })

   const updatePassword = (data) => {
      axiosConfig.patch('/api/change-password', data)
         .then(() => {
            setAlert({ type: 'success', message: 'Your password was successfully updated!' })
            setTimeout(() => { setAlert({ type: '', message: '' }) }, 3000)
         })
         .catch(e => {
            setAlert({ type: 'error', message: 'Your current password is incorrect.' })
            setTimeout(() => { setAlert({ type: '', message: '' }) }, 3000)
         })
   }

   return { alert, updatePassword }
}