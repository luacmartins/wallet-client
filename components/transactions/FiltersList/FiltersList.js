import { Checkbox, AmountGroup, DateGroup } from '../../inputs'
import Card from '../../shared/Card'

const FiltersList = ({ list, value, setValue }) => {
   const handleClick = (e, field) => {
      const filter = { ...value }

      if (!e.target.checked) {
         if (filter[field]) filter[field].push(e.target.name)
         else filter[field] = [e.target.name]
         setValue(filter)
      } else {
         if (filter[field].length > 1) {
            const newArr = filter[field].filter(x => x !== e.target.name)
            filter[field] = newArr
            setValue(filter)
         }
         else {
            delete filter[field]
            setValue(filter)
         }
      }
   }

   const handleAll = (e, i) => {
      const filter = { ...value }
      if (e.target.checked) {
         delete filter[list[i].field]
         setValue(filter)
      } else {
         filter[list[i].field] = list[i].options.map(x => x.name)
         setValue(filter)
      }
   }

   return (
      <div className="w-full">
         {/* date picker */}
         <div className="mb-6">
            <DateGroup value={value} setValue={setValue} />
         </div>

         {/* amount picker */}
         <div className="mb-6">
            <AmountGroup value={value} setValue={setValue} />
         </div>

         {list?.map((item, i) => (
            <div key={item.name}>
               <header className="text-sm">{item.name}</header>
               <Card className="divide-y divide-theme-gray-600 mt-2 mb-6">
                  <div className="px-4 py-2">
                     <Checkbox
                        name={item.name}
                        label={'All'}
                        onChange={(e) => handleAll(e, i)}
                        checked={!value || !value[item.field]}
                     />
                  </div>
                  {item.options.map(option => (
                     <div key={option.name} className="px-4 py-2">
                        <Checkbox
                           name={option.name}
                           label={option.label}
                           onChange={(e) => handleClick(e, item.field)}
                           checked={!value || !value[item.field] || !value[item.field].includes(option.name)}
                        />
                     </div>
                  ))}
               </Card>
            </div>
         ))}
      </div>
   );
}

export default FiltersList;