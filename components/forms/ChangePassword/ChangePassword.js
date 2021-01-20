import { useForm } from 'react-hook-form'
import { useAuth } from '../../../utils/useAPI'
import pattern from '../../../utils/validations'
import Button from '../../shared/Button'
import Input from '../../inputs/Input'

const ChangePassword = () => {
   const { register, errors, handleSubmit, getValues, formState: { isSubmitting } } = useForm()
   const { alert, updatePassword } = useAuth()

   return (
      <>
         <form onSubmit={handleSubmit(updatePassword)} className="w-64 mt-12 sm:mt-0 md:w-96 mx-auto grid gap-y-2">
            {alert && <span className={`rounded font-normal text-sm ${alert.type === 'success' ? 'bg-green-300 text-green-700 mb-4 p-2' : alert.type === 'error' ? 'bg-red-300 text-red-700 mb-4 p-2' : ''}`}>{alert.message}</span>}
            <Input
               register={register({
                  required: 'Please provide your current password.',
                  pattern: {
                     value: pattern.password,
                     message: 'Your password does not contain the necessary characters.'
                  }
               })}
               type={'password'}
               name={'currentPassword'}
               placeholder={'Current password'}
               error={errors}
            />
            <Input
               register={register({
                  required: 'Please provide your new password.',
                  pattern: {
                     value: pattern.password,
                     message: 'Your password does not contain the necessary characters.'
                  }
               })}
               type={'password'}
               name={'newPassword'}
               placeholder={'New password'}
               error={errors}
            />
            <Input
               register={register({
                  required: 'Please re-enter your new password.',
                  validate: {
                     passwordMatch: value => (value === getValues().newPassword || 'Your passwords do not match!')
                  }
               })}
               type={'password'}
               name={'confirmPassword'}
               placeholder={'Confirm new password'}
               error={errors}
            />
            <Button
               className="block mt-4 mx-auto"
               type={'submit'}
               isLoading={isSubmitting}
            >
               Done
            </Button>
         </form>
      </>
   );
}

export default ChangePassword;