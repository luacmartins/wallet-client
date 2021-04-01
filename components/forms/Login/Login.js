import Link from 'next/link'
import { useForm } from 'react-hook-form'
import { useAuth } from '../../../utils/useAPI'
import useValidation from '../../../utils/useValidation'
import { Logo } from '../../icons'
import { Button, Alert, Spinner } from '../../shared'
import Input from '../../inputs/Input'

const Login = () => {
  const {
    register,
    errors,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm()
  const validation = useValidation()
  const { alert, isLoading, loginUser, loginGuest } = useAuth()

  return (
    <div className='w-64 mx-auto md:w-80'>
      <div className='mb-8 text-center'>
        <Logo className='w-16 mx-auto' />
        <header className='text-2xl text-theme-yellow-500'>Wallet</header>
      </div>

      <form onSubmit={handleSubmit(loginUser)} className='grid gap-y-2' noValidate>
        <Alert data={alert} />
        <Input
          type={'email'}
          name={'email'}
          placeholder={'Email'}
          error={errors}
          register={register(validation.email)}
        />
        <Input
          type={'password'}
          name={'password'}
          placeholder={'Password'}
          error={errors}
          register={register(validation.password)}
        />
        <Link href='/user/forgot-password'>
          <a className='text-sm font-thin underline'>Forgot your password?</a>
        </Link>
        <Button className='block mx-auto mt-4' isLoading={isSubmitting} type={'submit'}>
          Login
        </Button>
      </form>

      <div className='mt-8 text-center'>
        <span className='font-thin'>Don't have an account?</span>
        <Link href='/user/sign-up'>
          <a className='ml-1 underline text-theme-yellow-500 hover:text-theme-yellow-700'>
            Sign up
          </a>
        </Link>
        <span className='block my-2 font-thin'>or</span>
        <button
          onClick={loginGuest}
          className='ml-1 font-semibold underline text-theme-yellow-500 hover:text-theme-yellow-700'
        >
          View as guest
        </button>
        {isLoading && <Spinner />}
      </div>
    </div>
  )
}

export default Login
