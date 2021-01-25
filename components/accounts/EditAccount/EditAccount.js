import { useForm } from 'react-hook-form'
import { useLink, useAccounts } from '../../../utils/useAPI'
import useValidation from '../../../utils/useValidation'
import useWidth from '../../../utils/useWidth'
import PlaidLinkAccount from '../PlaidLinkAccount'
import { Button, Alert } from '../../shared'
import { Input, Select, Amount } from '../../inputs'
import { Warning } from '../../icons'

const types = [
   { value: 'Cash', text: 'Cash' },
   { value: 'Credit_cards', text: 'Credit card' },
   { value: 'Investments', text: 'Investment' },
   { value: 'Loans', text: 'Loan' },
   { value: 'Other_assets', text: 'Other asset' }
]

const EditAccount = ({ data, open }) => {
   const { register, errors, handleSubmit, formState: { isSubmitting } } = useForm()
   const validation = useValidation()
   const { alert, editAccount } = useAccounts()
   const { token, updateItem } = useLink()
   const isMobile = useWidth() < 768

   return (
      <>
         <Alert data={alert} />
         {/* Account header info */}
         <div className="flex flex-col items-center">
            <span className="text-lg text-center">{data.nickname}</span>
            <span className="text-xs font-light text-center w-56 md:w-80">{data.name}</span>
            <Amount value={data.balance} className={'font-bold text-center text-4xl mt-4'} />
         </div>

         {/* Item needs to be updated message */}
         {data.needsUpdate && <div className="flex items-center mt-4 md:mt-8 md:mb-12 w-72 md:w-80 mx-auto font-thin text-red-600">
            <Warning className="w-20 h-20 mr-4" />
            <span>We've encountered an error with this account. To fix it, please update your login credentials below.</span>
            <div className="flex flex-col items-center mt-8">
               <button onClick={() => updateItem(data.item)} className="text-theme-yellow-500 underline font-semibold" href="/">Update login credentials</button>
            </div>
         </div>}

         {/* Account edit form */}
         <form key={data._id} onSubmit={handleSubmit((payload) => editAccount(data._id, payload))} className="w-72 md:w-80 mx-auto mt-8 grid gap-y-2">
            <Input type={'text'} name={'nickname'} label={'Account nickname'} defaultValue={data.nickname || ''} variant={isMobile ? 'inside' : 'floating'} error={errors} register={register(validation.text)} />
            <div className="mt-2">
               <Select name={'type'} label={'Account type'} data={types} defaultValue={data.type || 'Cash'} variant={isMobile ? 'inside' : 'floating'} error={errors} register={register()} />
            </div>
            <div className="mt-8 flex justify-center">
               <Button isLoading={isSubmitting} >Done</Button>
            </div>

            {/* Delete account */}
            <div className="mt-16 flex flex-col items-center">
               <button type={'button'} onClick={open} className="text-red-600 underline font-semibold hover:text-red-700">Delete account</button>
               <span className="font-light text-sm text-center">All accounts from this institution will be affected.</span>
            </div>
         </form>

         {/* Open Plaid Link */}
         {token && <PlaidLinkAccount item={data.item} token={token} update={true} />}
      </>
   );
}

export default EditAccount;