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

// Use data hook
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


// Use Auth hook
export const useAuth = () => {
   const [alert, setAlert] = useState({ type: '', message: '' })
   const cookies = new Cookies()
   const router = useRouter()

   const flash = (alert) => {
      setAlert(alert)
      setTimeout(() => setAlert({ type: '', message: '' }), 3000)
   }

   const updatePassword = (data) => {
      axiosConfig.patch('/api/change-password', data)
         .then(() => {
            flash({ type: 'success', message: 'Your password was successfully updated!' })
         })
         .catch(e => {
            flash({ type: 'error', message: 'Your current password is incorrect.' })
         })
   }

   const loginUser = (data) => {
      axiosConfig.post('/api/login', data)
         .then(res => {
            cookies.set('token', res.data.token)
            cookies.set('user', res.data.user)
            router.push('/dashboard')
         }).catch(() => {
            flash({ type: 'error', message: 'Invalid credentials. Please try again.' })
         })
   }

   const loginGuest = () => {
      axiosConfig.post('/api/login', { email: 'guest@example.com', password: '1234abcd' })
         .then(res => {
            cookies.set('token', res.data.token)
            cookies.set('user', res.data.user)
            router.push('/dashboard')
         }).catch(() => {
            flash({ type: 'error', message: 'There was a problem loggin in. Please try again later.' })
         })
   }

   const signUp = (data) => {
      axiosConfig.post('/api/signup', data).then(res => {
         cookies.set('token', res.data.token)
         cookies.set('user', res.data.user)
         router.push('/dashboard')
      }).catch(e => {
         flash({ type: 'error', message: 'Unable to sign up. Please try again later.' })
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
      // send request to API
      // if success redirect to dashboard
      // if error, display error
      console.log(data)
   }

   return { alert, updatePassword, loginUser, loginGuest, signUp, forgotPassword, resetPassword }
}


// Use categories hook
export const useCategories = () => {
   const [alert, setAlert] = useState({ type: '', message: '' })

   const flash = (alert) => {
      setAlert(alert)
      setTimeout(() => setAlert({ type: '', message: '' }), 3000)
   }

   const getCategories = () => {
      const { data, error } = useSWR('/api/category', fetcher)
      if (error) flash({ type: 'error', message: 'There was an error loading your categories. Please try again later.' })

      return {
         categories: data?.data,
         isLoading: !error && !data,
      }
   }

   const addCategory = async (data) => {
      axiosConfig.post('/api/category', data).catch(() => flash({ type: 'error', message: 'There was an error adding to your categories. Please try again' }))
   }

   const editCategory = async (id, data) => {
      axiosConfig.patch(`/api/category/${id}`, data).catch(() => flash({ type: 'error', message: 'There was an error editing your category. Please try again' }))
   }

   const deleteCategory = async (id) => {
      axiosConfig.delete(`/api/category/${id}`).catch(() => flash({ type: 'error', message: 'There was an error deleting your category. Please try again' }))
   }

   return { alert, getCategories, addCategory, editCategory, deleteCategory }
}