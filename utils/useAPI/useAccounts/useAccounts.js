import { mutate } from 'swr'
import { fetcher } from '../config'
import useAlert from '../../useAlert'

// Functions to update local data cache with SWR
const updateLocalAccount = (id, data) => {
   mutate('/api/accounts', current => {
      const accounts = current.data[data.type]
      const updatedAccounts = accounts.map(item => item._id === id ? { ...item, ...data } : item)
      return {
         ...current,
         data: {
            ...current.data,
            [data.type]: updatedAccounts
         }
      }
   }, false)
}

const deleteLocalAccount = (account) => {
   mutate('/api/accounts', current => {
      // find account
      const data = {}
      Object.keys(current.data).forEach(key => {
         const filter = current.data[key].filter(x => x.item !== account.item)
         if (filter.length) data[key] = filter
      })
      return {
         ...current,
         data
      }
   }, false)
}


// Accounts hook
const useAccounts = () => {
   const { alert, flash } = useAlert()

   const editAccount = (id, data) => {
      fetcher.patch(`/api/accounts/${id}`, data)
         .then(() => {
            updateLocalAccount(id, data)
            flash({ type: 'success', message: 'Account updated' })
         })
         .catch(() => flash({ type: 'error', message: 'There was an error updating your account. Please try again later.' }))
   }

   const deleteAccount = (account) => {
      fetcher.delete(`/api/accounts/${account._id}`).then(() => {
         deleteLocalAccount(account)
      })
   }

   return { alert, editAccount, deleteAccount }
}



export default useAccounts

