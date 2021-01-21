import moment from 'moment'
import { useForm } from 'react-hook-form'
import useWidth from '../../utils/useWidth'
import useValidation from '../../utils/useValidation'
import Select from '../inputs/Select'
import Button from '../shared/Button'
import Amount from '../inputs/Amount'
import Input from '../inputs/Input'

const EditTransaction = ({ data, categories, submit }) => {
   const { register, errors, handleSubmit, formState: { isSubmitting }, control } = useForm()
   const validation = useValidation()
   const date = moment(data.date.original).format('MMM, D YYYY')
   const isMobile = useWidth() < 768 ? true : false
   const variant = isMobile ? 'inside' : 'floating'
   const theme = isMobile ? '' : 'bg-theme-gray-200'

   return (
      <>
         <div className="flex flex-col md:border-t md:border-theme-gray-600 md:bg-theme-gray-200 md:py-6 px-6">

            {/* Header for mobile only */}
            <div className="md:hidden flex flex-col items-center">
               <span className="text-sm text-theme-gray-700 font-normal">{data.account}</span>
               <Amount defaultValue={data.amount} className="bg-transparent text-center text-4xl font-semibold w-full my-2" />
               <span className="capitalize">{data.description.user.toLowerCase()}</span>
               <span className="font-normal text-sm">{moment(date).format('MMM D, YYYY')}</span>
            </div>

            <form onSubmit={handleSubmit((form) => submit(data._id, form))} className="flex flex-col gap-y-2 w-full mt-8 md:mt-0 md:grid md:grid-cols-5 md:grid-rows-2 lg:grid-cols-4 md:gap-4 ">
               <Input type={'date'} name={'date'} label={'Date'} defaultValue={data.date.user} variant={variant} error={errors} register={register()} className={theme} />
               <div className="col-span-3 lg:col-span-3">
                  <Input type={'text'} name={'description'} label={'Description'} defaultValue={data.description.user} variant={variant} error={errors} register={register(validation.text)} className={theme} />
               </div>
               <Amount type={'input'} name={'amount'} label={'Amount'} variant={variant} defaultValue={data.amount} error={errors} control={control} className={`hidden md:flex ${theme}`} />
               <div className="col-span-3 lg:col-span-2">
                  <Select name={'category'} label={'Category'} data={categories} defaultValue={data.category} variant={variant} error={errors} register={register()} className={theme} />
               </div>
               <input ref={register()} type="text" name={'originalDate'} defaultValue={data.date.original} className="hidden" />
               <input ref={register()} type="text" name={'originalDescription'} defaultValue={data.description.original} className="hidden" />
               <Button className="w-full col-span-5 lg:col-span-1 mt-2" isLoading={isSubmitting}>Done</Button>
            </form>
            <div className="flex flex-col w-full mt-4 font-normal text-sm leading-tight">
               <span>Appears on your {data.account} statement as {data.description.original} on {date}</span>
            </div>
         </div>
      </>
   );
}

export default EditTransaction;