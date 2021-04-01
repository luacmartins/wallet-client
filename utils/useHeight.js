import { useState, useEffect } from 'react'

const useHeight = offset => {
  const [height, setHeight] = useState(0)

  useEffect(() => {
    const $width = window.innerWidth

    const getHeight = () => {
      let $height = window.innerHeight
      if ($height < 900) setHeight($height - offset)
      else setHeight(600)
    }
    getHeight()
    if ($width >= 768) window.addEventListener('resize', getHeight)

    return () => {
      if ($width >= 768) window.removeEventListener('resize', getHeight)
    }
  }, [])

  return height
}

export default useHeight
