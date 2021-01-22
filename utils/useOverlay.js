import { useState, useEffect, useRef } from 'react'

const useOverlay = () => {
   const [isVisible, setIsVisible] = useState(false)
   const ref = useRef(null)

   useEffect(() => {
      const handleClickOutside = (e) => {
         if (ref && !ref.current?.contains(e.target)) {
            setIsVisible(false)
            document.getElementsByTagName('body')[0].classList.remove('overflow-hidden')
         }
      }
      document.addEventListener('mousedown', handleClickOutside)

      return () => {
         document.removeEventListener('mousedown', handleClickOutside)
      }
   }, [])

   const close = () => {
      setIsVisible(false)
      document.getElementsByTagName('body')[0].classList.remove('overflow-hidden')
   }

   const open = () => {
      setIsVisible(true)
      document.getElementsByTagName('body')[0].classList.add('overflow-hidden')
   }

   const toggle = () => {
      setIsVisible(!isVisible)
      document.getElementsByTagName('body')[0].classList.toggle('overflow-hidden')
   }

   return { ref, isVisible, close, open, toggle }
}

export default useOverlay