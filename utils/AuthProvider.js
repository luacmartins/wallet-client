import { createContext, useContext, useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import { Cookies } from 'react-cookie'
const AuthContext = createContext()
const cookies = new Cookies()

const publicRoutes = ['/', '/sign-up', '/forgot-password']

const AuthProvider = ({ children }) => {
   const router = useRouter()
   const token = cookies.get('token')
   const user = cookies.get('user')

   useEffect(() => {
      const handleRouteChange = (url) => {
         const token = cookies.get('token')
         if (!token && !publicRoutes.includes(url)) {
            router.push('/')
         } else if (token && publicRoutes.includes(url)) {
            router.push('/dashboard')
         }
      }

      // handle initial load
      if (!token && !publicRoutes.includes(router.pathname)) {
         router.push('/')
      } else if (token && publicRoutes.includes(router.pathname)) {
         router.push('/dashboard')
      }

      router.events.on('routeChangeStart', handleRouteChange)

      return () => {
         router.events.off('routeChangeStart', handleRouteChange)
      }
   }, [token])

   return (
      <AuthContext.Provider value={{ user, token }}>
         {children}
      </AuthContext.Provider>
   )
}

const useAuth = () => useContext(AuthContext)

export { AuthProvider, useAuth };