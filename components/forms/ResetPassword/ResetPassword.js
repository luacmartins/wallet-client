import Logo from '../../icons/Logo'
import { useForm } from 'react-hook-form'
import { useAuth } from '../../../utils/useAPI'
import useValidation from '../../../utils/useValidation'
import Button from '../../shared/Button'
import Alert from '../../shared/Alert'

const ResetPassword = () => {
   const { register, errors, handleSubmit, getValues, formState: { isSubmitting } } = useForm()
   const validation = useValidation()
   const { alert, resetPassword } = useAuth()

   return (
      <div className="w-64 md:w-80 mx-auto">
         <div className="mb-8 text-center">
            <Logo className="w-16 mx-auto" />
            <header className="text-theme-yellow-500 text-2xl">Wallet</header>
         </div>

         <form onSubmit={handleSubmit(resetPassword)} className="grid gap-y-2" noValidate>
            <Alert data={alert} />
            <Input type={'password'} name={'newPassword'} placeholder={'New password'} error={errors} register={register(validation.password)} />
            <Input type={'password'} name={'confirmPassword'} placeholder={'Confirm new password'} error={errors} register={register(validation.confirm(getValues, 'newPassword'))} />
            <Button className="block mt-4 mx-auto" type={'submit'} isLoading={isSubmitting}>Done</Button>
         </form>
      </div>
   );
}

export default ResetPassword;