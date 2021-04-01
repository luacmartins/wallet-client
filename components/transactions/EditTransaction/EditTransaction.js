import moment from 'moment'
import { useForm } from 'react-hook-form'
import useWidth from '../../../utils/useWidth'
import useValidation from '../../../utils/useValidation'
import { Select, Amount, Input } from '../../inputs'
import Button from '../../shared/Button'

const EditTransaction = ({ data, categories, submit }) => {
  const {
    register,
    errors,
    handleSubmit,
    formState: { isSubmitting },
    control,
  } = useForm()
  const validation = useValidation()
  const date = moment(data.date.original).format('MMM, D YYYY')
  const isMobile = useWidth() < 768 ? true : false
  const variant = isMobile ? 'inside' : 'floating'
  const theme = isMobile ? '' : 'bg-theme-gray-200'

  return (
    <>
      <div className='flex flex-col px-6 md:border-t md:border-theme-gray-600 md:bg-theme-gray-200 md:py-6'>
        {/* Header for mobile only */}
        <div className='flex flex-col items-center md:hidden'>
          <span className='text-sm font-normal text-center text-theme-gray-700'>
            {data.account}
          </span>
          <Amount
            defaultValue={data.amount}
            className='w-full my-2 text-4xl font-semibold text-center bg-transparent'
          />
          <span className='text-center capitalize'>{data.description.user.toLowerCase()}</span>
          <span className='text-sm font-normal'>
            {moment(data.date.user).format('MMM D, YYYY')}
          </span>
        </div>

        <form
          onSubmit={handleSubmit(form => submit(data._id, form))}
          className='flex flex-col w-full mt-8 md:gap-y-2 md:mt-0 md:grid md:grid-cols-5 md:grid-rows-2 lg:grid-cols-4 md:gap-4 '
        >
          <div className='md:col-span-2 lg:col-span-1'>
            <Input
              type={'date'}
              name={'date'}
              label={'Date'}
              defaultValue={data.date.user}
              variant={variant}
              error={errors}
              register={register()}
              className={theme}
            />
          </div>
          <div className='col-span-3 my-2 md:my-0 lg:col-span-3'>
            <Input
              type={'text'}
              name={'description'}
              label={'Description'}
              defaultValue={data.description.user}
              variant={variant}
              error={errors}
              register={register(validation.text)}
              className={theme}
            />
          </div>
          <div className='md:col-span-2 lg:col-span-1'>
            <Amount
              type={'input'}
              name={'amount'}
              label={'Amount'}
              variant={variant}
              defaultValue={data.amount}
              error={errors}
              control={control}
              className={`hidden md:flex ${theme}`}
            />
          </div>
          <div className='col-span-3 md:col-span-3 lg:col-span-2'>
            <Select
              name={'category'}
              label={'Category'}
              data={categories}
              defaultValue={data.category}
              variant={variant}
              error={errors}
              register={register()}
              className={theme}
            />
          </div>
          <input
            ref={register()}
            type='text'
            name={'originalDate'}
            defaultValue={data.date.original}
            className='hidden'
          />
          <input
            ref={register()}
            type='text'
            name={'originalDescription'}
            defaultValue={data.description.original}
            className='hidden'
          />
          <Button className='w-full col-span-5 mt-6 lg:col-span-1' isLoading={isSubmitting}>
            Done
          </Button>
        </form>
        <div className='flex flex-col w-full mt-4 text-sm font-normal leading-tight'>
          <span>
            Appears on your {data.account} statement as {data.description.original} on {date}
          </span>
        </div>
      </div>
    </>
  )
}

export default EditTransaction
