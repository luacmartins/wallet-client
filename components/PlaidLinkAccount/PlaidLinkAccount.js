import { useCallback, useEffect } from 'react'
import { usePlaidLink } from 'react-plaid-link'
import fetcher from '../../utils/fetcher'

const PlaidLinkAccount = ({ token }) => {
   const onSuccess = useCallback((token) => {
      fetcher.post('/api/get-access-token', { token })
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