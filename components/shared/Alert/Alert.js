import { useEffect } from 'react'

const Alert = ({ message, setMessage, time = 3000, type = 'error' }) => {
   useEffect(() => {
      const timeout = () => setTimeout(() => {
         message && setMessage('')
      }, time)

      timeout()

      return () => {
         clearTimeout(timeout)
      }
   }, [message])

   return (
      <div className={`${message ? 'fixed w-screen bottom-0 md:top-0 md:left-0' : 'hidden'} `}>
         <div
            className={`
            ${type === 'error' && 'bg-red-300 text-red-700'}
            ${type === 'success' && 'bg-green-300 text-green-700'}
            ${type === 'warning' && 'bg-blue-200 text-blue-700'}
            mb-2 mx-2 py-1 px-2 rounded font-normal text-sm
            md:mt-20 md:w-180 md:mx-auto md:py-2 md:px-4
         `}>
            {message}
         </div>
      </div>
   );
}

export default Alert;