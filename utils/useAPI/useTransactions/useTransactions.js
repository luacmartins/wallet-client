import { mutate } from 'swr'
import qs from 'qs'
import { fetcher } from '../config'

// Functions to update local data cache with SWR
const editLocalTransactions = (id, payload, params) => {
   const query = qs.stringify(params, { indices: false, arrayFormat: 'comma', addQueryPrefix: true })
   mutate(`/api/transactions/${query}`, current => {
      const newData = current.data.posted.map(item => {
         return item._id === id ?
            {
               ...item, ...payload
            }
            : item
      })
      return {
         ...current,
         data: {
            pending: current.data.pending,
            posted: newData
         }
      }
   }, false)
}

const useTransactions = (params) => {
   const editTransaction = (id, data) => {
      let editedAmount
      typeof data.amount === 'string' ? editedAmount = Number(data.amount.replace('$', '')) : editedAmount = data.amount
      const payload = {
         date: {
            original: data.originalDate,
            user: data.date
         },
         description: {
            original: data.originalDescription,
            user: data.description
         },
         amount: editedAmount,
         category: data.category
      }
      fetcher.patch(`/api/transactions/${id}`, payload)
         .then(() => editLocalTransactions(id, payload, params))
   }

   return { editTransaction }
}

export default useTransactions