import { useCallback, useEffect } from 'react'
import { usePlaidLink } from 'react-plaid-link'
import fetcher from '../../utils/fetcher'

const PlaidLinkAccount = ({ item, token, update = false }) => {
   const onSuccess = useCallback((token) => {
      if (!update) {
         fetcher.post('/api/get-access-token', { token })
      } else {
         fetcher.post('/api/update-item', { item })
      }
   }, [])

   const config = {
      token,
      onSuccess,
   }

   const { open, ready, error } = usePlaidLink(config)

   useEffect(() => {
      if (!ready) {
         return
      }
      open()
   }, [ready, open])

   return <></>
};

export default PlaidLinkAccount