import { fetcher } from '../config'

const useTransactions = () => {
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
   }

   return { editTransaction }
}

export default useTransactions