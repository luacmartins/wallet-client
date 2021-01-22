import { useState, useEffect, useRef } from 'react'

const useOverlay = () => {
   const [isVisible, setIsVisible] = useState(false)
   const ref = useRef(null)

   useEffect(() => {
      const handleClickOutside = (e) => {
         if (ref && !ref.current?.contains(e.target)) {
            setIsVisible(false)
         }
      }
      document.addEventListener('mousedown', handleClickOutside)

      return () => {
         document.removeEventListener('mousedown', handleClickOutside)
      }
   }, [])

   const close = () => {
      setIsVisible(false)
   }

   const open = () => {
      setIsVisible(true)
   }

   const toggle = () => {
      setIsVisible(!isVisible)
   }

   return { ref, isVisible, close, open, toggle }
}

export default useOverlay