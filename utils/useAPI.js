import { useState } from 'react'
import useSWR from 'swr'
import qs from 'qs'
import { Cookies } from 'react-cookie'
import { useRouter } from 'next/router'
import axiosConfig from './fetcher'

const fetcher = url => axiosConfig.get(url).then(res => {
   const data = {
      totalPages: res.headers['x-total-pages'],
      data: res.data
   }
   return data
})

export const useData = (endpoint, params) => {
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
   const cookies = new Cookies()
   const router = useRouter()

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

   const loginUser = (data) => {
      axiosConfig.post('/api/login', data)
         .then(res => {
            cookies.set('token', res.data.token)
            cookies.set('user', res.data.user)
            router.push('/dashboard')
         }).catch(() => {
            setAlert({ type: 'error', message: 'Invalid credentials. Please try again.' })
            setTimeout(() => { setAlert({ type: '', message: '' }) }, 3000)
         })
   }

   const loginGuest = () => {
      axiosConfig.post('/api/login', { email: 'guest@example.com', password: '1234abcd' })
         .then(res => {
            cookies.set('token', res.data.token)
            cookies.set('user', res.data.user)
            router.push('/dashboard')
         }).catch(() => {
            setAlert({ type: 'error', message: 'There was a problem loggin in. Please try again later.' })
            setTimeout(() => { setAlert({ type: '', message: '' }) }, 3000)
         })
   }

   const signUp = (data) => {
      axiosConfig.post('/api/signup', data).then(res => {
         cookies.set('token', res.data.token)
         cookies.set('user', res.data.user)
         router.push('/dashboard')
      }).catch(e => {
         console.log(e)
         setAlert({ type: 'error', message: 'Unable to sign up. Please try again later.' })
         setTimeout(() => { setAlert({ type: '', message: '' }) }, 3000)
      })
   }

   const forgotPassword = (data) => {
      // validate data
      // send request to API
      // if success redirect to dashboard
      // if error, display error
      console.log(data)
   }

   const resetPassword = (data) => {
      console.log(data)
   }

   return { alert, updatePassword, loginUser, loginGuest, signUp, forgotPassword, resetPassword }
}