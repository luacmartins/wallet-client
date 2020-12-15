const Layout = ({ children }) => {
   return (
      <div className="flex flex-col bg-theme-gray-100 text-theme-gray-900 font-semibold min-h-screen w-screen absolute">
         {children}
      </div>
   );
}

export default Layout;