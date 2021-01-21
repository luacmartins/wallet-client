import Card from '../shared/Card'
import Amount from '../inputs/Amount'

const AccountsOverview = ({ data }) => {
   return (
      <Card className="mx-4 md:mx-0 py-2">
         <div className="divide-y divide-theme-gray-600 px-6">
            {data.map(item => (
               <div key={item.type} className="flex justify-between items-center h-12">
                  <span>{item.type.replace('_', ' ')}</span>
                  <span>
                     <Amount defaultValue={item.balance} />
                  </span>
               </div>
            ))}
         </div>
      </Card>
   );
}

export default AccountsOverview;