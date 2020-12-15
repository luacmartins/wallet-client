import ActiveLink from '../../shared/ActiveLink'
import Home from '../../icons/Home'
import CreditCard from '../../icons/CreditCard'
import Transactions from '../../icons/Transactions'
import Trends from '../../icons/Trends'

const links = [
   { name: 'Home', href: '/dashboard', icon: Home },
   { name: 'Accounts', href: '/accounts', icon: CreditCard },
   { name: 'Transactions', href: '/transactions', icon: Transactions },
   { name: 'Trends', href: '/trends', icon: Trends },
]

const NavBar = () => {
   return (
      <div className="sticky md:hidden flex justify-between bg-white bottom-0 w-screen py-2 px-4 mx-auto border-t border-theme-gray-600">
         {links.map(link => {
            const Icon = link.icon
            return (
               <ActiveLink key={link.href} href={link.href} >
                  <a className="flex flex-col items-center font-thin text-xs">
                     {<Icon className="h-6 w-6" />}
                     {link.name}
                  </a>
               </ActiveLink>
            )
         })}
      </div>
   );
}

export default NavBar;