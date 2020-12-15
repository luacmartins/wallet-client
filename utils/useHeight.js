import { useState, useEffect } from 'react'

const useHeight = (offset) => {
   const [height, setHeight] = useState(0)
   useEffect(() => {
      const getHeight = () => {
         let $height = window.innerHeight
         if ($height < 813) setHeight($height - offset)
         else setHeight(600)
      }
      getHeight()
      window.addEventListener('resize', getHeight)

      return () => {
         window.removeEventListener('resize', getHeight)
      }
   }, [])

   return height
}

export default useHeight