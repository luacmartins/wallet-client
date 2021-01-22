import { useForm } from 'react-hook-form'
import { useAuth } from '../../../utils/useAPI'
import useValidation from '../../../utils/useValidation'
import { Button, Alert } from '../../shared'
import Input from '../../inputs/Input'

const ChangePassword = () => {
   const { register, errors, handleSubmit, getValues, formState: { isSubmitting } } = useForm()
   const validation = useValidation()
   const { alert, updatePassword } = useAuth()

   return (
      <form onSubmit={handleSubmit(updatePassword)} className="w-64 mt-12 sm:mt-0 md:w-96 mx-auto grid gap-y-2" noValidate>
         <Alert data={alert} />
         <Input type={'password'} name={'currentPassword'} placeholder={'Current password'} error={errors} register={register(validation.password)} />
         <Input type={'password'} name={'newPassword'} placeholder={'New password'} error={errors} register={register(validation.password)} />
         <Input type={'password'} name={'confirmPassword'} placeholder={'Confirm new password'} error={errors}
            register={register(validation.confirm(getValues, 'newPassword'))}
         />
         <Button className="block mt-4 mx-auto" type={'submit'} isLoading={isSubmitting}>Done</Button>
      </form>
   );
}

export default ChangePassword;