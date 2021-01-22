import { fetcher } from '../config'
import useAlert from '../../useAlert'

const useAccounts = () => {
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

export default useAccounts