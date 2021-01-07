import { useState } from 'react'
import NumberFormat from 'react-number-format'
import Card from '../shared/Card'

const AverageSpending = ({ data }) => {
   const [scope, setScope] = useState('monthly')
   const list = data.sort((a, b) => b.monthly - a.monthly)

   return (
      <div className="mx-6 my-16 md:my-4 md:flex md:flex-col md:items-center">
         <header className="text-xl mb-6 md:hidden">Average spending</header>
         <header className="text-xl mb-6 hidden md:flex md:text-2xl xl:text-3xl md:mb-12">You average spending per category is...</header>
         <div className="flex flex-col items-center relative md:w-80 lg:w-112 xl:w-128">
            <Card className="px-4 pt-10 pb-4 w-full mt-5">
               {list.map(item => (
                  <div key={item.category} className="flex justify-between py-1 px-2 lg:text-xl">
                     <span>{item.category}</span>
                     <span>
                        <NumberFormat
                           value={scope === 'monthly' ? item.monthly : item.yearly}
                           displayType={'text'}
                           thousandSeparator={true}
                           prefix={'$'}
                           fixedDecimalScale={2}
                           decimalScale={2}
                        />
                     </span>
                  </div>
               ))}
            </Card>

            {/* Controls */}
            <div className='bg-theme-gray-600 rounded-full w-64 flex justify-between absolute top-0 lg:text-xl hover:cursor-pointer'>
               <div onClick={() => setScope('monthly')} className={`${scope === 'monthly' ? 'bg-theme-gray-900 rounded-full text-white' : ''} py-2 w-32 flex justify-center`}>
                  Monthly
            </div>
               <div onClick={() => setScope('yearly')} className={`${scope === 'yearly' ? 'bg-theme-gray-900 rounded-full text-white' : ''} py-2 w-32 flex justify-center`} >
                  Yearly
            </div>
            </div>
         </div>
      </div>
   );
}

export default AverageSpending;