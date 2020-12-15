import Link from 'next/link'
import ActiveLink from '../../shared/ActiveLink'
import Logo from '../../icons/Logo'
import Dropdown from '../Dropdown'

const links = [
   { name: 'Home', href: '/dashboard' },
   { name: 'Accounts', href: '/accounts' },
   { name: 'Transactions', href: '/transactions' },
   { name: 'Trends', href: '/trends' },
]

const NavBar = () => {
   return (
      <nav className="hidden md:flex sticky top-0 z-10 items-center justify-between bg-white border-b border-theme-gray-600 w-full h-16 text-theme-gray-700 px-6">
         {/* right side of navbar */}
         <div className="flex items-center">
            <Link href='/dashboard'>
               <a>
                  <Logo className='h-10 w-10 mr-4 md:mr-8' />
               </a>
            </Link>
            {links.map(link => (
               <ActiveLink key={link.href} href={link.href}>
                  <a className="mx-2 px-1 md:px-2 py-4 hover:text-theme-gray-900">{link.name}</a>
               </ActiveLink>
            ))}
         </div>
         {/* left side of navbar */}
         <div>
            <Dropdown />
         </div>
      </nav>
   );
}

export default NavBar;