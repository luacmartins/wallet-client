import fetcher from '../../utils/fetcher'
import { useRouter } from 'next/router'
import { Cookies } from 'react-cookie'
import Card from '../shared/Card'
import ChevronRight from '../icons/ChevronRight'

const cookies = new Cookies()

const Settings = ({ links, setStep, ...props }) => {
   const router = useRouter()

   const handleLogout = () => {
      fetcher.get('/api/logout')
         .then(res => {
            cookies.remove('token')
            cookies.remove('user')
            router.push('/')
         })
         .catch(e => console.log(e))
   }

   return (
      <div {...props}>
         <Card className="w-11/12 md:w-full mx-auto mt-2">
            <div className="flex flex-col divide-y divide-theme-gray-600">
               {links.map(link => (
                  <div onClick={() => setStep(link.step)} key={link.name} className="flex items-center justify-between px-4 py-2 hover:cursor-pointer hover:bg-theme-gray-200">
                     <span>{link.name}</span>
                     <ChevronRight className="h-4 w-4" />
                  </div>
               ))}
            </div>
         </Card>
         <Card className="md:hidden w-11/12 mx-auto mt-6 hover:cursor-pointer hover:bg-theme-gray-200">
            <div onClick={handleLogout} className="px-4 py-2">Log out</div>
         </Card>
      </div>
   );
}

export default Settings;