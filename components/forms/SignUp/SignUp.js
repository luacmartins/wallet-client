import { useState } from 'react'
import fetcher from '../../../utils/fetcher'
import axios from 'axios'
import { useRouter } from 'next/router'
import { Cookies } from 'react-cookie'
import Link from 'next/link'
import Logo from '../../icons/Logo'
import Text from '../../inputs/Text'
import Email from '../../inputs/Email'
import Password from '../../inputs/Password'
import Button from '../../shared/Button'
import Alert from '../../shared/Alert'

const cookies = new Cookies()

const SignUp = () => {
   const [name, setName] = useState('')
   const [email, setEmail] = useState('')
   const [password, setPassword] = useState('')
   const [nameError, setNameError] = useState(false)
   const [emailError, setEmailError] = useState(false)
   const [passwordError, setPasswordError] = useState(false)
   const [isLoading, setIsLoading] = useState(false)
   const [alert, setAlert] = useState('')

   const router = useRouter()

   const handleSubmit = () => {
      setIsLoading(true)
      const payload = { name, email, password }
      fetcher.post('/api/signup')
      axios.post(`${process.env.NEXT_PUBLIC_SERVER_URL}/api/signup`, payload).then(res => {
         cookies.set('token', res.data.token)
         cookies.set('user', res.data.user)
         router.push('/dashboard')
         setIsLoading(false)
      }).catch(e => {
         setIsLoading(false)
         if (e.response) {
            setAlert(e.response.data.message)
         }
      })
   }

   return (
      <>
         <div className="w-64 md:w-80 mx-auto">
            <div className="mb-8 text-center">
               <Logo className="w-16 mx-auto" />
               <header className="text-theme-yellow-500 text-2xl">Wallet</header>
            </div>
            <Text value={name} setValue={setName} placeholder={'Name'} error={nameError} setError={setNameError} />
            <Email value={email} setValue={setEmail} error={emailError} setError={setEmailError} className="mt-2" />
            <Password value={password} setValue={setPassword} error={passwordError} setError={setPasswordError} className="mt-2" />
            <Button
               className="block mt-4 mx-auto"
               onClick={handleSubmit}
               isLoading={isLoading}
               disabled={emailError || passwordError || nameError || !name || !email || !password || isLoading}
            >
               Sign up
         </Button>
            <div className="text-center mt-8">
               <span className="font-thin">Already have an account?</span>
               <Link href="/">
                  <a className="text-theme-yellow-500 underline ml-1 hover:text-theme-yellow-700">Login</a>
               </Link>
            </div>
         </div>
         <Alert message={alert} setMessage={setAlert} />
      </>
   );
}

export default SignUp;