import { useState } from 'react'

export default function useAlert() {
   const [alert, setAlert] = useState({ type: '', message: '' })

   const flash = (alert) => {
      setAlert(alert)
      setTimeout(() => setAlert({ type: '', message: '' }), 3000)
   }

   return { alert, flash }
}
