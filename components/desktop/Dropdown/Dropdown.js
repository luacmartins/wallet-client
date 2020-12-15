import { useState, useEffect } from 'react'
import axios from 'axios'
import { useRouter } from 'next/router'
import { Cookies } from 'react-cookie'
import { useAuth } from '../../../utils/AuthProvider'
import Link from 'next/link'
import ChevronDown from '../../icons/ChevronDown'
import ChevronUp from '../../icons/ChevronUp'

const links = [
   { name: 'Settings', href: '/settings' },
]

const cookies = new Cookies()

const Dropdown = () => {
   const { user, token } = useAuth()

   const [isVisible, setIsVisible] = useState(false)
   const [username, setUsername] = useState('')

   useEffect(() => {
      setUsername(user)
   }, [user])

   const router = useRouter()

   const handleMouseEnter = () => {
      setIsVisible(true)
   }

   const handleMouseLeave = () => {
      setIsVisible(false)
   }

   const handleLogout = () => {
      axios.get(`${process.env.NEXT_PUBLIC_SERVER_URL}/api/logout`, { headers: { 'Authorization': token } })
         .then(res => {
            cookies.remove('token')
            cookies.remove('user')
            router.push('/')
         })
         .catch(e => console.log(e))
   }

   return (
      <>
         <div onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} className="relative">
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
               <button onClick={handleLogout} className="font-semibold text-left hover:text-theme-gray-900 py-2">Log out</button>
            </div>}
         </div>
      </>
   );
}

export default Dropdown;