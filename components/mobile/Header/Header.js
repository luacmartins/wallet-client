const Header = ({ left, right, title, sticky = false }) => {
   return (
      <div className={`${sticky ? 'sticky top-0 bg-theme-gray-100' : ''} md:hidden flex items-center justify-between h-12 px-4 text-theme-gray-800 z-10`}>
         <div className="w-6 h-6">{left}</div>
         <div className="font-semibold">{title}</div>
         <div className="w-6 h-6">{right}</div>
      </div>
   );
}

export default Header;