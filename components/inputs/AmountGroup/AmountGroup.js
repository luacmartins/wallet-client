import NumberFormat from 'react-number-format'

const AmountGroup = () => {
   return (
      <>
         <header className="text-sm mb-2">Amount</header>
         <div className="divide-x divide-theme-gray-600 border border-theme-gray-600 bg-white rounded-lg overflow-hidden flex items-center h-16">
            <div className="px-4 w-1/2 h-ful flex flex-col justify-center">
               <label className="text-sm text-theme-gray-700 w-full" htmlFor="above">Above</label>
               <NumberFormat
                  name="above"
                  displayType={'input'}
                  placeholder={'$0.00'}
                  thousandSeparator={true}
                  decimalScale={2}
                  fixedDecimalScale={2}
                  prefix={'$'}
                  className="placeholder-theme-gray-900"
               />
            </div>
            <div className="px-4 w-1/2 h-full flex flex-col justify-center">
               <label className="text-sm text-theme-gray-700 w-full" htmlFor="below">Below</label>
               <NumberFormat
                  name="below"
                  displayType={'input'}
                  thousandSeparator={true}
                  decimalScale={2}
                  placeholder={'$0.00'}
                  fixedDecimalScale={2}
                  prefix={'$'}
                  className="placeholder-theme-gray-900"
               />
            </div>
         </div>
      </>
   );
}

export default AmountGroup;