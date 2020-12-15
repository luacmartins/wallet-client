import { useState } from 'react'
import Logo from '../../icons/Logo'
import Password from '../../inputs/Password'
import Button from '../../shared/Button'
import Alert from '../../shared/Alert'

const ResetPassword = () => {
   const [password, setPassword] = useState('')
   const [confirmPassword, setConfirmPassword] = useState('')
   const [passwordError, setPasswordError] = useState(false)
   const [confirmPasswordError, setConfirmPasswordError] = useState(false)
   const [isLoading, setIsLoading] = useState(false)
   const [alert, setAlert] = useState('')

   const handleSubmit = () => {
      setIsLoading(true)
      setAlert('Sorry! Your email or password do not match our records. Please verify your information and try again.')
      console.log('Log in!')
   }

   return (
      <>
         <div className="w-64 md:w-80 mx-auto">
            <div className="mb-8 text-center">
               <Logo className="w-16 mx-auto" />
               <header className="text-theme-yellow-500 text-2xl">Wallet</header>
            </div>
            <Password value={password} setValue={setPassword} error={passwordError} setError={setPasswordError} className="mt-2" placeholder={'New password'} />
            <Password value={confirmPassword} setValue={setConfirmPassword} error={confirmPasswordError} setError={setConfirmPasswordError} className="mt-2" placeholder={'Confirm new password'} />
            <Button
               className="block mt-4 mx-auto"
               onClick={handleSubmit}
               isLoading={isLoading}
               disabled={passwordError || confirmPasswordError || !password || !confirmPassword || isLoading}
            >
               Reset
            </Button>
         </div>
         <Alert message={alert} setMessage={setAlert} />
      </>
   );
}

export default ResetPassword;