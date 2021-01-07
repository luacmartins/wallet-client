import NumberFormat from 'react-number-format'

const SpendTooltip = ({ payload, total, period }) => {
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
               fixedDecimalScale={true}
               decimalScale={2}
            />
         </span>
         <div>
            <span>in </span>
            <span style={{ color: fill }}>{category}</span>
            {period === 'MTD' && <span> so far this month.</span>}
            {period === '1M' && <span> in the past month.</span>}
            {period === '6M' && <span> in the past six months.</span>}
            {period === '1Y' && <span> in the past year.</span>}
            {period === 'YTD' && <span> so far this year.</span>}

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