import NumberFormat from 'react-number-format'

const AmountGroup = ({ value, setValue }) => {
   const handleChange = (e) => {
      const amount = Number(e.target.value.replace('$', '').replace(',', ''))
      if (e.target.value === '' || isNaN(amount)) {
         const state = { ...value }
         delete state[e.target.name]
         setValue(state)
      } else {
         setValue({ ...value, [e.target.name]: amount })
      }
   }

   return (
      <>
         <header className="text-sm mb-2">Amount</header>
         <div className="divide-x divide-theme-gray-600 border border-theme-gray-600 bg-white rounded-lg overflow-hidden flex items-center h-16">
            <div className="px-3 w-1/2 h-full flex flex-col justify-center">
               <label className="text-sm text-theme-gray-700 w-full" htmlFor="above">Min</label>
               <NumberFormat
                  name={'minAmount'}
                  value={value?.minAmount}
                  onChange={handleChange}
                  displayType={'input'}
                  thousandSeparator={true}
                  decimalScale={2}
                  prefix={'$'}
                  className="placeholder-theme-gray-900"
               />
            </div>
            <div className="px-3 w-1/2 h-full flex flex-col justify-center">
               <label className="text-sm text-theme-gray-700 w-full" htmlFor="below">Max</label>
               <NumberFormat
                  name="maxAmount"
                  value={value?.maxAmount}
                  onChange={handleChange}
                  displayType={'input'}
                  thousandSeparator={true}
                  prefix={'$'}
                  decimalScale={2}
                  className="placeholder-theme-gray-900"
               />
            </div>
         </div>
      </>
   );
}

export default AmountGroup;