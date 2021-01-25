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

   const toggle = () => {
      setIsVisible(!isVisible)
      isMobile && document.getElementsByTagName('body')[0].classList.toggle('overflow-hidden')
   }

   return { isVisible, close, closeOverlay, open, toggle }
}

export const useClickOutside = (ref, keep) => {
   const [isVisible, setIsVisible] = useState(false)

   const handleClick = (e) => {
      if (ref?.current?.contains(e.target)) {
         keep ? setIsVisible(true) : setIsVisible(!isVisible)
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