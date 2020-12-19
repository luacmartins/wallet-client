import { useState } from 'react'
import NumberFormat from 'react-number-format'
import moment from 'moment'
import Select from '../../inputs/Select'
import Text from '../../inputs/Text'
import Date from '../../inputs/Date'
import Button from '../../shared/Button'

const EditTransaction = ({ data, categories, submit }) => {
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
      let editedAmount = 2
      typeof amount === 'string' ? editedAmount = Number(amount.replace('$', '')) : editedAmount = amount
      const payload = {
         date: {
            original: data.date.original,
            user: date
         },
         description: {
            original: data.description.original,
            user: description
         },
         amount: editedAmount,
         category
      }
      submit(data._id, payload)
   }

   return (
      <div className={`flex flex-col items-center`}>
         <span className="text-sm text-theme-gray-700 font-normal">{data.account}</span>
         <NumberFormat
            name="amount"
            value={amount}
            displayType={'text'}
            thousandSeparator={true}
            decimalScale={2}
            fixedDecimalScale={true}
            prefix={'$'}
            defaultValue={0}
            className="bg-transparent text-center text-4xl font-semibold w-full my-2"
         />
         <span className="capitalize">{description.toLowerCase()}</span>
         <span className="font-normal text-sm">{moment(date).format('MMM D, YYYY')}</span>
         <div className="flex flex-col gap-y-2 w-full mt-8">
            <Text labelText={'Description'} label={'inside'} value={description.toLowerCase()} setValue={setDescription} error={descriptionError} setError={setDescriptionError} />
            <Date labelText={'Date'} label={'inside'} value={date} setValue={setDate} error={dateError} setError={setDateError} />
            <Select labelText={'Category'} label={'inside'} value={category} data={categoryList} setValue={setCategory} error={categoryError} setError={setCategoryError} />
            <span className="font-normal text-sm text-theme-gray-700 mt-2">Appears on your {data.account} statement as {data.description.original} on {moment(data.date.original).format('MMM D, YYYY')}</span>
            <div className="flex justify-center">
               <Button onClick={handleSubmit} className="mt-6">Done</Button>
            </div>
         </div>
      </div>
   );
}

export default EditTransaction;