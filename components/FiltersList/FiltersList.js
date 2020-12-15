import { useState } from 'react'
import Checkbox from '../inputs/Checkbox'
import Card from '../shared/Card'
import AmountPicker from '../inputs/AmountGroup'
import DatePicker from '../inputs/DateGroup'

const list = [{
   name: 'Account type',
   options: [
      { label: 'Cash', name: 'cash' },
      { label: 'Credit Card', name: 'credit' },
      { label: 'Investment', name: 'investment' },
   ]
}, {
   name: 'Account',
   options: [
      { label: 'Bank of America', name: 'account-id-1234' },
      { label: 'TD Bank', name: 'account-id-12341234' },
      { label: 'Barclays', name: 'account-id-123543' },
   ]
}]

const FiltersList = () => {
   const [filters, setFilters] = useState([])

   const handleClick = (e) => {
      // if (!e.target.checked) {
      //    setFilters([...filters, e.target.name])
      // } else {
      //    const newState = filters.filter(item => item !== e.target.name)
      //    setFilters(newState)
      // }
   }

   return (
      <div className="w-full">
         {list.map(item => (
            <div key={item.name}>
               <header className="text-sm">{item.name}</header>
               <Card className="divide-y divide-theme-gray-600 mt-2 mb-6">
                  {item.options.map(option => (
                     <div key={option.name} className="px-4 py-2">
                        <Checkbox name={option.name} label={option.label} handleClick={handleClick} />
                     </div>
                  ))}
               </Card>
            </div>
         ))}

         {/* date picker */}
         <div className="mb-6">
            <DatePicker />
         </div>

         {/* amount picker */}
         <AmountPicker />
      </div>
   );
}

export default FiltersList;