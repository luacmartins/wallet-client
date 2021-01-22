import { useState } from 'react'
import { fetcher } from '../config'
import useAlert from '../../useAlert'

const useLink = () => {
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

export default useLink