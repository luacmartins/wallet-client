import { useState } from 'react'
import { User, ChevronLeft } from '../../icons'
import { Modal, SettingList } from '../../shared'
import ChangePassword from '../../forms/ChangePassword'
import { Categories } from '../../categories'

const links = [
   { name: 'Change password', step: 'Password' },
   { name: 'Categories', step: 'Categories' }
]
const Profile = () => {
   const [isVisible, setIsVisible] = useState(false)
   const [step, setStep] = useState('')

   const handleClose = () => {
      setIsVisible(false)
      setStep('')
   }

   return (
      <>
         <User className='hover:cursor-pointer' onClick={() => setIsVisible(true)} />
         <Modal
            isVisible={isVisible}
            setIsVisible={handleClose}
            title={`Profile ${step && `- ${step}`}`}
            left={step && <ChevronLeft onClick={() => setStep('')} />}
         >
            {!step && <SettingList links={links} setStep={setStep} />}
            {step === 'Password' && <ChangePassword />}
            {step === 'Categories' && <Categories />}
         </Modal>
      </>
   );
}

export default Profile;