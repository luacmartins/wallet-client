import { useState } from 'react'
import useSWR from 'swr'
import qs from 'qs'
import { Cookies } from 'react-cookie'
import { useRouter } from 'next/router'
import { fetcher, swrFetcher } from './fetcher'
import useAlert from './useAlert'

// Use data hook
export const useData = (endpoint, params) => {
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

// Use Auth hook
export const useAuth = () => {
   const cookies = new Cookies()
   const router = useRouter()
   const { alert, flash } = useAlert()

   const updatePassword = (data) => {
      fetcher.patch('/api/change-password', data)
         .then(() => {
            flash({ type: 'success', message: 'Your password was successfully updated!' })
         })
         .catch(e => {
            flash({ type: 'error', message: 'Your current password is incorrect.' })
         })
   }

   const loginUser = (data) => {
      fetcher.post('/api/login', data)
         .then(res => {
            cookies.set('token', res.data.token)
            cookies.set('user', res.data.user)
            router.push('/dashboard')
         }).catch(() => {
            flash({ type: 'error', message: 'Invalid credentials. Please try again.' })
         })
   }

   const loginGuest = () => {
      fetcher.post('/api/login', { email: 'guest@example.com', password: '1234abcd' })
         .then(res => {
            cookies.set('token', res.data.token)
            cookies.set('user', res.data.user)
            router.push('/dashboard')
         }).catch(() => {
            flash({ type: 'error', message: 'There was a problem loggin in. Please try again later.' })
         })
   }

   const signUp = (data) => {
      fetcher.post('/api/signup', data).then(res => {
         cookies.set('token', res.data.token)
         cookies.set('user', res.data.user)
         router.push('/dashboard')
      }).catch(e => {
         flash({ type: 'error', message: 'Unable to sign up. Please try again later.' })
      })
   }

   const logout = () => {
      fetcher.get('/api/logout')
         .then(() => {
            cookies.remove('token')
            cookies.remove('user')
            router.push('/')
         })
         .catch(e => console.log(e))
   }

   const forgotPassword = (data) => {
      // fill rest of function
      console.log(data)
   }

   const resetPassword = (data) => {
      // fill rest of function
      console.log(data)
   }

   return { alert, updatePassword, loginUser, loginGuest, signUp, forgotPassword, resetPassword, logout }
}


// Use categories hook
export const useCategories = () => {
   const { alert, flash } = useAlert()

   const getCategories = () => {
      const { data, error } = useSWR('/api/category', swrFetcher)
      if (error) flash({ type: 'error', message: 'There was an error loading your categories. Please try again later.' })

      return {
         categories: data?.data || [],
         isLoading: !error && !data,
      }
   }

   const addCategory = async (data) => {
      fetcher.post('/api/category', data).catch(() => flash({ type: 'error', message: 'There was an error adding to your categories. Please try again' }))
   }

   const editCategory = async (id, data) => {
      fetcher.patch(`/api/category/${id}`, data).catch(() => flash({ type: 'error', message: 'There was an error editing your category. Please try again' }))
   }

   const deleteCategory = async (id) => {
      fetcher.delete(`/api/category/${id}`).catch(() => flash({ type: 'error', message: 'There was an error deleting your category. Please try again' }))
   }

   return { alert, getCategories, addCategory, editCategory, deleteCategory }
}

// Use Plaid Link hook
export const useLink = () => {
   const [token, setToken] = useState(null)
   const { alert, flash } = useAlert()

   const getToken = async () => {
      fetcher.get('/api/get-link-token')
         .then(res => setToken(res.data.link_token))
         .catch(() => flash({ type: 'error', message: 'There was a problem loading the page.' }))
   }

   const exchangeToken = (token, item, update) => {
      if (!update) {
         fetcher.post('/api/get-access-token', { token })
      } else {
         fetcher.post('/api/update-item', { item })
      }
   }

   const updateItem = (item) => {
      fetcher.post('/api/get-link-token', { item })
         .then(res => {
            setToken(res.data.link_token)
            flash({ type: 'success', message: 'Your account was successfully updated!' })
         })
         .catch(() => flash({ type: 'error', message: 'There was an error updating your account. Please try again.' }))
   }

   return { token, alert, getToken, exchangeToken, updateItem }
}

// Use Transactions hook
export const useTransactions = () => {
   const editTransaction = (id, data) => {
      fetcher.patch(`/api/transactions/${id}`, data)
   }

   return { editTransaction }
}

// Use Accounts hook
export const useAccounts = () => {
   const { alert, flash } = useAlert()

   const editAccount = (id, data) => {
      fetcher.patch(`/api/accounts/${id}`, data)
         .then(() => flash({ type: 'success', message: 'Account updated' }))
         .catch(() => flash({ type: 'error', message: 'There was an error updating your account. Please try again later.' }))
   }

   const deleteAccount = (id) => {
      fetcher.delete(`/api/accounts/${id}`)
   }

   return { alert, editAccount, deleteAccount }
}

// Use Filters hook
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