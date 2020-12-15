import NumberFormat from 'react-number-format'

const MonthlySpendIntro = ({ data }) => {
   return (
      <div className="w-screen md:w-full flex flex-col justify-center items-center text-theme-gray-700 md:text-lg lg:text-xl">
         <span className="text-sm md:text-lg lg:text-xl">You've spent</span>
         <span className="text-3xl md:text-4xl lg:text-5xl text-theme-gray-900 font-bold">
            <NumberFormat
               value={data.total}
               displayType={'text'}
               thousandSeparator={true}
               prefix={'$'}
               decimalScale={2}
               fixedDecimalScale={2}
            />
         </span>
         <div>
            <span>so far this month.</span>
         </div>
         <div>
            <span>That's </span>
            <span className="text-theme-gray-900 font-bold">{Math.abs(data.percent)}%</span>
            <span> {data.percent > 0 ? 'more' : 'less'} than usual.</span>
         </div>
      </div>
   );
}

export default MonthlySpendIntro;