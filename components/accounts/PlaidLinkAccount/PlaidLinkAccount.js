import { useCallback, useEffect } from 'react'
import { usePlaidLink } from 'react-plaid-link'
import { useLink } from '../../../utils/useAPI'

const PlaidLinkAccount = ({ item, token, update = false }) => {
   const { exchangeToken } = useLink()
   const onSuccess = useCallback((token) => exchangeToken(token, item, update), [])

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