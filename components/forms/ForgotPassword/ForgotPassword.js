import { useState } from 'react'
import Link from 'next/link'
import Logo from '../../icons/Logo'
import Email from '../../inputs/Email'
import Button from '../../shared/Button'
import Alert from '../../shared/Alert'

const ForgotPassword = () => {
   const [email, setEmail] = useState('')
   const [emailError, setEmailError] = useState(false)
   const [message, setMessage] = useState(false)
   const [isLoading, setIsLoading] = useState(false)
   const [alert, setAlert] = useState('')

   const handleSubmit = () => {
      setIsLoading(true)
      setAlert('Please check your email for instructions to reset your password.')
      // validate data
      // send request to API
      // if success redirect to dashboard
      // if error, display error
      console.log('Log in!')
   }

   return (
      <>
         <div className="w-64 md:w-80 mx-auto">
            <div className="mb-8 text-center">
               <Logo className="w-16 mx-auto" />
               <header className="text-theme-yellow-500 text-2xl">Wallet</header>
            </div>
            <header>Enter your email to reset your password</header>
            <Email value={email} setValue={setEmail} error={emailError} setError={setEmailError} className="mt-6" />
            <Button
               className="block mt-4 mx-auto"
               onClick={handleSubmit}
               isLoading={isLoading}
               disabled={emailError || !email || isLoading}
            >
               Send
         </Button>
            <div className="text-center mt-8">
               <span className="font-thin">Go to</span>
               <Link href="/">
                  <a className="text-theme-yellow-500 underline ml-1 hover:text-theme-yellow-700">Login</a>
               </Link>
            </div>
         </div>
         <Alert type={'warning'} message={alert} setMessage={setAlert} time={6000} />
      </>
   );
}

export default ForgotPassword;