import { useAuth } from '../../../utils/useAPI'
import Amount from '../../inputs/Amount'

const NetWorthIntro = ({ data }) => {
   const { username } = useAuth()

   return (
      <div className="flex flex-col items-center">
         <span className="text-sm">Hello {username}, your net worth is</span>
         <span className="text-3xl font-bold">
            <Amount value={data.amount} />
         </span>
         <span className="text-sm text-theme-gray-700">
            {data.change > 0 ? 'Up ' : 'Down '}
            <Amount value={data.change} />
         </span>
      </div>
   );
}

export default NetWorthIntro;