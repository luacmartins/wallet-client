import NumberFormat from 'react-number-format'

const AmountGroup = ({ value, setValue }) => {
   const handleMinAmountChange = (e) => {
      const amount = Number(e.target.value.replace('$', '').replace(',', ''))
      if (e.target.value === '' || isNaN(amount)) {
         const state = { ...value }
         delete state['minAmount']
         setValue(state)
      } else {
         setValue({ ...value, minAmount: amount })
      }
   }

   const handleMaxAmountChange = (e) => {
      const amount = Number(e.target.value.replace('$', '').replace(',', ''))
      if (e.target.value === '' || isNaN(amount)) {
         const state = { ...value }
         delete state['maxAmount']
         setValue(state)
      } else {
         setValue({ ...value, maxAmount: amount })
      }
   }

   return (
      <>
         <header className="text-sm mb-2">Amount</header>
         <div className="divide-x divide-theme-gray-600 border border-theme-gray-600 bg-white rounded-lg overflow-hidden flex items-center h-16">
            <div className="px-3 w-1/2 h-full flex flex-col justify-center">
               <label className="text-sm text-theme-gray-700 w-full" htmlFor="above">Above</label>
               <NumberFormat
                  name="above"
                  value={value['minAmount'] === undefined ? '' : value['minAmount']}
                  onChange={handleMinAmountChange}
                  displayType={'input'}
                  thousandSeparator={true}
                  prefix={'$'}
                  className="placeholder-theme-gray-900"
               />
            </div>
            <div className="px-3 w-1/2 h-full flex flex-col justify-center">
               <label className="text-sm text-theme-gray-700 w-full" htmlFor="below">Below</label>
               <NumberFormat
                  name="below"
                  value={value['maxAmount'] === undefined ? '' : value['maxAmount']}
                  onChange={handleMaxAmountChange}
                  displayType={'input'}
                  thousandSeparator={true}
                  prefix={'$'}
                  className="placeholder-theme-gray-900"
               />
            </div>
         </div>
      </>
   );
}

export default AmountGroup;