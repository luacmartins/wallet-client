import Transaction from '../Transaction'
import Card from '../../shared/Card'

const TransactionsList = ({ data, categories, params }) => {
   const list = categories?.map(el => ({ text: el.name, value: el.name }))

   return (
      <div className="mx-4 md:mx-0 md:w-full">
         {/* pending transations */}
         <div className="mb-6">
            <header className="text-xl">Pending</header>
            <div className="divide-theme-gray-600 divide-y opacity-50">
               {data.pending.length === 0 && <div className="font-normal">No pending transactions.</div>}
               {data.pending.length > 0 && data.pending.map((item, i) => (
                  <Transaction key={i} item={item} params={params} disabled />
               ))}
            </div>
         </div>

         {/* posted transations */}
         <header className="text-xl">Past</header>
         {data.posted.length === 0 && <div className="font-normal opacity-50">No past transactions.</div>}
         {data.posted.length > 0 && <Card className="px-4 md:px-0 py-2 md:py-0 mt-2">
            <div className="divide-theme-gray-600 divide-y">
               {data.posted.map((item, i) => (
                  <Transaction key={i} item={item} params={params} categories={list} />
               ))}
            </div>
         </Card>}
      </div>
   );
}

export default TransactionsList;