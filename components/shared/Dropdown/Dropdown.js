import Link from 'next/link'
import { useAuth } from '../../../utils/useAPI'
import useOverlay from '../../../utils/useOverlay'
import { ChevronDown, ChevronUp } from '../../icons'

const links = [
   { name: 'Settings', href: '/user/settings' },
]

const Dropdown = () => {
   const { username, logout } = useAuth()
   const { isVisible, openOverlay, closeOverlay } = useOverlay()

   return (
      <>
         <div onMouseEnter={openOverlay} onMouseLeave={closeOverlay} className="relative">
            <div className={`${isVisible && 'text-theme-gray-900'} flex items-center py-5 pl-6 cursor-pointer`}>
               <span>{username}</span>
               {isVisible ?
                  <ChevronUp className="h-4 w-4 ml-2" />
                  :
                  <ChevronDown className="h-4 w-4 ml-2" />
               }
            </div>
            {isVisible && <div className="origin-top-right absolute right-0 flex flex-col w-40 bg-white rounded px-6 py-4 shadow">
               {links.map(link => (
                  <Link key={link.href} href={link.href}>
                     <a className="hover:text-theme-gray-900 py-2">{link.name}</a>
                  </Link>
               ))}
               <button onClick={logout} className="font-semibold text-left hover:text-theme-gray-900 py-2">Log out</button>
            </div>}
         </div>
      </>
   );
}

export default Dropdown;