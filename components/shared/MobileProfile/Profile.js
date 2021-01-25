import { useState } from 'react'
import { User, ChevronLeft } from '../../icons'
import { Modal, SettingList } from '../../shared'
import ChangePassword from '../../forms/ChangePassword'
import { Categories } from '../../categories'
import useOverlay from '../../../utils/useOverlay'

const links = [
   { name: 'Change password', step: 'Password' },
   { name: 'Categories', step: 'Categories' }
]
const Profile = () => {
   const [step, setStep] = useState('')
   const { isVisible, open, close } = useOverlay()

   const handleClose = () => {
      close()
      setStep('')
   }

   return (
      <>
         <User className='hover:cursor-pointer' onClick={open} />
         <Modal
            isVisible={isVisible}
            close={handleClose}
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