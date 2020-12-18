import { useState } from 'react'
import fetcher from '../../../utils/fetcher'
import moment from 'moment'
import Date from '../../inputs/Date'
import Text from '../../inputs/Text'
import Select from '../../inputs/Select'
import Button from '../../shared/Button'
import Amount from '../../inputs/Amount'

const EditTransaction = ({ data, categories }) => {
   // const date = data.date.user || data.date.original
   const originalDate = moment(data.date.original).format('MMM, D YYYY')
   // const description = data.description.user || data.description.original
   const categoryList = categories.map(el => ({ text: el.name, value: el.name }))

   const [date, setDate] = useState(data.date.user || data.date.original)
   const [dateError, setDateError] = useState(false)
   const [description, setDescription] = useState(data.description.user || data.description.original)
   const [descriptionError, setDescriptionError] = useState(false)
   const [amount, setAmount] = useState(data.amount)
   const [amountError, setAmountError] = useState('')
   const [category, setCategory] = useState(data.category)
   const [categoryError, setCategoryError] = useState('')

   const handleSubmit = () => {
      const payload = {
         date: {
            original: data.date.original,
            user: date
         },
         description: {
            original: data.description.original,
            user: description
         },
         amount: Number(amount.replace('$', '')),
         category
      }
      fetcher.patch(`/api/transactions/${data._id}`, payload)
   }

   return (
      <>
         <div className="hidden md:flex flex-col border-t border-theme-gray-600 bg-theme-gray-200 py-6 px-6">
            <div className="grid grid-cols-4 grid-rows-2 gap-4 ">
               <Date labelText={'Date'} label={'floating'} background={'bg-theme-gray-200'} value={date} setValue={setDate} error={dateError} setError={setDateError} />
               <div className="col-span-3">
                  <Text labelText={'Description'} label={'floating'} background={'bg-theme-gray-200'} value={description.toLowerCase()} setValue={setDescription} error={descriptionError} setError={setDescriptionError} />
               </div>
               <Amount labelText={'Amount'} label={'floating'} background={'bg-theme-gray-200'} value={amount} setValue={setAmount} error={amountError} setError={setAmountError} />
               <div className="col-span-2">
                  <Select labelText={'Category'} label={'floating'} data={categoryList} background={'bg-theme-gray-200'} value={category} setValue={setCategory} error={categoryError} setError={setCategoryError} />
               </div>
               <Button onClick={handleSubmit} className="w-full">Done</Button>
            </div>
            <div className="flex flex-col w-full mt-4 font-normal text-sm leading-tight">
               <span>Appears on your {data.account} statement as {data.description.original} on {originalDate}</span>
            </div>
         </div>
      </>
   );
}

export default EditTransaction;