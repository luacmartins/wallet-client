import { useAuth } from '../../utils/useAPI'
import Card from '../shared/Card'
import ChevronRight from '../icons/ChevronRight'

const Settings = ({ links, setStep, ...props }) => {
   const { logout } = useAuth()

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
            <div onClick={logout} className="px-4 py-2">Log out</div>
         </Card>
      </div>
   );
}

export default Settings;