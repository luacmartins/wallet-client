import NumberFormat from 'react-number-format'

const SpendTooltip = ({ payload, total }) => {
   let category, amount, percent, fill

   if (payload[0]) {
      ({ category, amount, fill } = payload[0].payload)
      percent = Math.round(amount / total * 100)
   }

   return (
      <div className="w-screen md:w-80 lg:w-112 xl:w-128 flex flex-col justify-center items-center text-theme-gray-700 bg-theme-gray-100 md:text-lg lg:text-xl">
         <span className="text-sm md:text-lg lg:text-xl">You've spent</span>
         <span className="text-3xl md:text-4xl lg:text-5xl text-theme-gray-900 font-bold">
            <NumberFormat
               value={amount}
               displayType={'text'}
               thousandSeparator={true}
               prefix={'$'}
               fixedDecimalScale={2}
               decimalScale={2}
            />
         </span>
         <div>
            <span>in </span>
            <span style={{ color: fill }}>{category}</span>
            <span> this month.</span>
         </div>
         <div>
            <span>That's </span>
            <span style={{ color: fill }}>{percent}%</span>
            <span> of your total spending.</span>
         </div>
      </div>
   );
}

export default SpendTooltip;