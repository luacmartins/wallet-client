import Link from 'next/link'
import { useForm } from 'react-hook-form'
import { useAuth } from '../../../utils/useAPI'
import useValidation from '../../../utils/useValidation'
import Logo from '../../icons/Logo'
import Button from '../../shared/Button'
import Alert from '../../shared/Alert'
import Input from '../../inputs/Input'

const ForgotPassword = () => {
   const { register, errors, handleSubmit, formState: { isSubmitting } } = useForm()
   const validation = useValidation()
   const { alert, forgotPassword } = useAuth()

   return (
      <div className="w-64 md:w-80 mx-auto">
         <div className="mb-8 text-center">
            <Logo className="w-16 mx-auto" />
            <header className="text-theme-yellow-500 text-2xl">Wallet</header>
         </div>
         <header>Enter your email to reset your password</header>

         <form onSubmit={handleSubmit(forgotPassword)} className="mt-4" noValidate>
            <Alert data={alert} />
            <Input type={'email'} name={'email'} placeholder={'Email'} error={errors} register={register(validation.email)} />
            <Button type={'submit'} className="block mt-4 mx-auto" isLoading={isSubmitting}>Send</Button>
         </form>

         <div className="text-center mt-8">
            <span className="font-thin">Go to</span>
            <Link href="/">
               <a className="text-theme-yellow-500 underline ml-1 hover:text-theme-yellow-700">Login</a>
            </Link>
         </div>
      </div>
   );
}

export default ForgotPassword;