import { useState } from 'react'
import SettingList from '../../SettingList'
import ChangePassword from '../../forms/ChangePassword'
import Categories from '../../Categories'

const links = [
   { name: 'Change password', step: 'Password' },
   { name: 'Categories', step: 'Categories' }
]
const Profile = () => {
   const [step, setStep] = useState('Password')

   return (
      <div className="hidden sm:flex sm:w-156 md:w-180 lg:w-240 sm:mx-auto sm:mt-12">
         <div className="w-64">
            <SettingList links={links} setStep={setStep} />
         </div>
         <div className="ml-6 lg:ml-12 flex-1">
            {step === 'Password' && <ChangePassword />}
            {step === 'Categories' && <Categories />}
         </div>
      </div>
   );
}

export default Profile;