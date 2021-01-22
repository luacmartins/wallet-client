import Link from 'next/link'
import { useForm } from 'react-hook-form'
import { useAuth } from '../../../utils/useAPI'
import useValidation from '../../../utils/useValidation'
import { Logo } from '../../icons'
import { Button, Alert } from '../../shared'
import Input from '../../inputs/Input'

const Login = () => {
   const { register, errors, handleSubmit, formState: { isSubmitting } } = useForm()
   const validation = useValidation()
   const { alert, loginUser, loginGuest } = useAuth()

   return (
      <div className="w-64 md:w-80 mx-auto">
         <div className="mb-8 text-center">
            <Logo className="w-16 mx-auto" />
            <header className="text-theme-yellow-500 text-2xl">Wallet</header>
         </div>

         <form onSubmit={handleSubmit(loginUser)} className="grid gap-y-2" noValidate>
            <Alert data={alert} />
            <Input type={'email'} name={'email'} placeholder={'Email'} error={errors} register={register(validation.email)} />
            <Input type={'password'} name={'password'} placeholder={'Password'} error={errors} register={register(validation.password)} />
            <Link href="/user/forgot-password">
               <a className="font-thin text-sm underline">Forgot your password?</a>
            </Link>
            <Button className="block mt-4 mx-auto" isLoading={isSubmitting} type={'submit'}>Login</Button>
         </form>

         <div className="text-center mt-8">
            <span className="font-thin">Don't have an account?</span>
            <Link href="/user/sign-up">
               <a className="text-theme-yellow-500 underline ml-1 hover:text-theme-yellow-700">Sign up</a>
            </Link>
            <span className="font-thin block my-2">or</span>
            <button onClick={loginGuest} className="text-theme-yellow-500 underline ml-1 font-semibold hover:text-theme-yellow-700">
               View as guest
               </button>
         </div>
      </div>
   )
}

export default Login;