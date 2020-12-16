import { useState, useEffect } from 'react'
import NumberFormat from 'react-number-format'
import { useAuth } from '../../utils/AuthProvider'

const NetWorthIntro = ({ data }) => {
   const { user } = useAuth()
   const [username, setUsername] = useState('')

   useEffect(() => {
      setUsername(user)
   }, [user])

   return (
      <div className="flex flex-col items-center">
         <span className="text-sm">Hello {username}, your net worth is</span>
         <span className="text-3xl font-bold">
            <NumberFormat value={data.amount / 100} displayType={'text'} thousandSeparator={true} prefix={'$'} />
         </span>
         <span className="text-sm text-theme-gray-700">
            {data.change > 0 ? 'Up ' : 'Down '}
            <NumberFormat value={data.change / 100} displayType={'text'} thousandSeparator={true} prefix={'$'} />
         </span>
      </div>
   );
}

export default NetWorthIntro;