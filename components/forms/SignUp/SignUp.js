import Link from 'next/link'
import { useForm } from 'react-hook-form'
import { useAuth } from '../../../utils/useAPI'
import useValidation from '../../../utils/useValidation'
import Logo from '../../icons/Logo'
import Button from '../../shared/Button'
import Alert from '../../shared/Alert'
import Input from '../../inputs/Input'

const SignUp = () => {
   const { register, errors, handleSubmit, formState: { isSubmitting } } = useForm()
   const validation = useValidation()
   const { alert, signUp } = useAuth()

   return (
      <>
         <div className="w-64 md:w-80 mx-auto">
            <div className="mb-8 text-center">
               <Logo className="w-16 mx-auto" />
               <header className="text-theme-yellow-500 text-2xl">Wallet</header>
            </div>

            <form onSubmit={handleSubmit(signUp)} className="grid gap-y-2" noValidate>
               <Alert data={alert} />
               <Input type={'text'} name={'name'} placeholder={'Name'} error={errors} register={register(validation.name)} />
               <Input type={'email'} name={'email'} placeholder={'Email'} error={errors} register={register(validation.email)} />
               <Input type={'password'} name={'password'} placeholder={'Password'} error={errors} register={register(validation.password)} />
               <Button className="block mt-4 mx-auto" type={'submit'} isLoading={isSubmitting}>Sign up</Button>
            </form>

            <div className="text-center mt-8">
               <span className="font-thin">Already have an account?</span>
               <Link href="/">
                  <a className="text-theme-yellow-500 underline ml-1 hover:text-theme-yellow-700">Login</a>
               </Link>
            </div>
         </div>

      </>
   );
}

export default SignUp;