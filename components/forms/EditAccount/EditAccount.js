import { useEffect, useState } from 'react'
import NumberFormat from 'react-number-format'
import fetcher from '../../../utils/fetcher'
import Text from '../../inputs/Text'
import Select from '../../inputs/Select'
import Button from '../../shared/Button'
import Alert from '../../shared/Alert'

const types = [
   { value: 'Cash', text: 'Cash' },
   { value: 'Credit_cards', text: 'Credit card' },
   { value: 'Investments', text: 'Investment' },
   { value: 'Loans', text: 'Loan' },
   { value: 'Other_assets', text: 'Other asset' }
]

const EditAccount = ({ data }) => {
   const [nickname, setNickname] = useState('')
   const [nameError, setNameError] = useState(false)
   const [type, setType] = useState('')
   const [typeError, setTypeError] = useState(false)
   const [isNameLoading, setIsNameLoading] = useState(false)
   const [alert, setAlert] = useState('')

   useEffect(() => {
      setNickname(data.nickname || '')
      setType(data.type || 'Cash')
   }, [data])

   const handleSubmit = (e, id) => {
      e.preventDefault()
      setIsNameLoading(true)
      fetcher.patch(`/api/accounts/${id}`, { nickname, type })
         .then(res => setAlert('Account updated',))
         .catch(e => console.log(e.response.data.error))
      setIsNameLoading(false)
   }

   const handleDelete = (e, id) => {
      e.preventDefault()
      fetcher.delete(`/api/accounts/${id}`)
   }

   return (
      <>
         <div className="flex flex-col items-center">
            <span className="text-lg text-center">{data.nickname}</span>
            <span className="text-sm font-normal">{data.nickname}</span>
            <span className="mt-4 text-3xl">
               <NumberFormat value={data.balance} displayType={'text'} thousandSeparator={true} prefix={'$'} decimalScale={2} fixedDecimalScale={true} />
            </span>
         </div>
         <form className="w-72 md:w-80 mx-auto mt-8">
            <div className="md:hidden">
               <Text value={nickname} setValue={setNickname} error={nameError} setError={setNameError} label={'inside'} labelText={'Account nickname'} />
               <Select data={types} value={type} setValue={setType} error={typeError} setError={setTypeError} label={'inside'} labelText={'Account type'} className="mt-4" />
            </div>
            <div className="hidden md:block">
               <Text value={nickname} setValue={setNickname} error={nameError} setError={setNameError} label={'floating'} labelText={'Account nickname'} />
               <Select data={types} value={type} setValue={setType} error={typeError} setError={setTypeError} label={'floating'} labelText={'Account type'} className="mt-6" />
            </div>

            {/* <div className="flex flex-col items-center mt-8">
               <a className="text-theme-yellow-500 underline" href="/">Edit account credentials</a>
            </div> */}
            <div className="mt-10 flex flex-col items-center">
               <button onClick={(e) => handleDelete(e, data._id)} className="text-red-600 underline font-semibold hover:text-red-700">Delete account</button>
               <span className="font-thin text-xs">All accounts from this institution will be affected.</span>
               <Button
                  className="block mt-10"
                  onClick={(e) => handleSubmit(e, data._id)}
                  isLoading={isNameLoading}
               >
                  Done
            </Button>
            </div>
         </form>
         <Alert message={alert} setMessage={setAlert} />
      </>
   );
}

export default EditAccount;