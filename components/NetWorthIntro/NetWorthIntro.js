import NumberFormat from 'react-number-format'
import { useAuth } from '../../utils/AuthProvider'

const NetWorthIntro = ({ data }) => {
   const { user } = useAuth()
   return (
      <div className="flex flex-col items-center">
         <span className="text-sm">Hello {user}, your net worth is</span>
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