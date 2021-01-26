import { useState, useEffect } from 'react'
import useWidth from './useWidth'

export default function useOverlay() {
   const [isVisible, setIsVisible] = useState(false)
   const isMobile = useWidth() < 768

   const close = () => {
      setIsVisible(false)
      document.getElementsByTagName('body')[0].classList.remove('overflow-hidden')
   }

   const open = () => {
      setIsVisible(true)
      document.getElementsByTagName('body')[0].classList.add('overflow-hidden')
   }

   const closeOverlay = () => {
      setIsVisible(false)
   }

   const openOverlay = () => {
      setIsVisible(true)
   }

   const toggle = () => {
      setIsVisible(!isVisible)
      isMobile && document.getElementsByTagName('body')[0].classList.toggle('overflow-hidden')
   }

   return { isVisible, close, closeOverlay, openOverlay, open, toggle }
}

export const useClickOutside = (ref, dropdown) => {
   const [isVisible, setIsVisible] = useState(false)

   const handleClick = (e) => {
      // if (dropdown?.current?.contains(e.target)) return

      if (dropdown?.current?.contains(e.target)) {
         setIsVisible(true)
      } else if (dropdown && ref?.current?.contains(e.target) && !dropdown?.current?.contains(e.target)) {
         setIsVisible(!isVisible)
      } else if (!dropdown && ref?.current?.contains(e.target)) {
         setIsVisible(true)
      } else {
         setIsVisible(false)
      }
   }

   useEffect(() => {
      document.addEventListener('mousedown', handleClick)

      return () => {
         document.removeEventListener('mousedown', handleClick)
      }
   })

   return isVisible
}