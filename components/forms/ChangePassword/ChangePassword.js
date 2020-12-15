import { useState } from 'react'
import axios from 'axios'
import { useAuth } from '../../../utils/AuthProvider'
import Password from '../../inputs/Password'
import Button from '../../shared/Button'
import Alert from '../../shared/Alert'

const ChangePassword = () => {
   const [currentPassword, setCurrentPassword] = useState('')
   const [newPassword, setNewPassword] = useState('')
   const [confirmPassword, setConfirmPassword] = useState('')
   const [currentPasswordError, setCurrentPasswordError] = useState(false)
   const [newPasswordError, setNewPasswordError] = useState(false)
   const [confirmPasswordError, setConfirmPasswordError] = useState(false)
   const [isLoading, setIsLoading] = useState(false)
   const [alert, setAlert] = useState({ type: '', message: '' })

   const { token } = useAuth()

   const handleSubmit = () => {
      if (confirmPassword !== newPassword) {
         setConfirmPasswordError(true)
         setAlert({ type: 'error', message: 'Your new password does not match. Please verify and try again.' })
         return
      }
      setIsLoading(true)

      axios.patch(
         `${process.env.NEXT_PUBLIC_SERVER_URL}/api/change-password`,
         {
            currentPassword,
            newPassword
         },
         { headers: { 'Authorization': token } }
      ).then(res => {
         setAlert({ type: 'success', message: 'Your password was successfully changed!' })
         setCurrentPassword('')
         setNewPassword('')
         setConfirmPassword('')
         setIsLoading(false)
      })
         .catch(e => {
            setAlert({ type: 'error', message: e.response.data.error })
            setCurrentPassword('')
            setNewPassword('')
            setConfirmPassword('')
            setIsLoading(false)
         })
   }

   return (
      <>
         <form className="w-64 mt-12 sm:mt-0 md:w-96 mx-auto">
            <Password value={currentPassword} setValue={setCurrentPassword} error={currentPasswordError} setError={setCurrentPasswordError} className="mt-2" placeholder={'Current password'} />
            <Password value={newPassword} setValue={setNewPassword} error={newPasswordError} setError={setNewPasswordError} className="mt-2" placeholder={'New password'} />
            <Password value={confirmPassword} setValue={setConfirmPassword} error={confirmPasswordError} setError={setConfirmPasswordError} className="mt-2" placeholder={'Confirm new password'} />
            <Button
               className="block mt-4 mx-auto"
               onClick={handleSubmit}
               isLoading={isLoading}
               disabled={newPasswordError || confirmPasswordError || !newPassword || !confirmPassword || isLoading}
            >
               Done
            </Button>
         </form>
         <Alert message={alert.message} setMessage={setAlert} type={alert.type} />
      </>
   );
}

export default ChangePassword;