import { useState, useEffect } from 'react'
import NumberFormat from 'react-number-format'
import moment from 'moment'

const OvertimeTooltip = ({ coordinate: { x, y }, payload }) => {
   const [pos, setPos] = useState(null)

   let colors, categories, total, date, rest
   if (payload.length > 0) {
      ({ date, ...rest } = payload[0].payload)
      colors = Object.fromEntries(payload.map(item => ([item.name, item.color])))
      categories = Object.entries(rest).map(item => ({ category: item[0], amount: item[1] })).sort((a, b) => b.amount - a.amount)
      total = Object.values(rest).reduce((sum, item) => sum += item)
   }

   useEffect(() => {
      let xPos
      const $width = window.innerWidth
      if ($width < 767) xPos = 0
      else if (x < 320) xPos = 20
      else if (x > $width - 320) xPos = $width - 340
      else xPos = x - 160
      setPos(xPos)
   }, [x])

   return (
      <div className="w-screen flex justify-between items-center text-theme-gray-700 bg-theme-gray-100 h-32 overflow-hidden">
         <div style={{ left: pos }} className="absolute bottom-0 mb-2 w-full md:w-80 transform flex justify-center gap-x-6">
            <div className="flex flex-col justify-center items-center w-24">
               <span className="text-sm font-normal">{moment(date).format('MMM D, YYYY')}</span>
               <div className="text-theme-gray-900 text-xl">
                  <NumberFormat
                     value={total}
                     displayType={'text'}
                     thousandSeparator={true}
                     prefix={'$'}
                     fixedDecimalScale={true}
                     decimalScale={2}
                  />
               </div>
            </div>
            {categories && <div className="text-sm xl:text-base">
               {categories.map(item => (
                  <div key={item.category} style={{ color: colors[item.category] }} className="flex justify-between">
                     <span className="whitespace-no-wrap truncate flex-1">{item.category}</span>
                     <span className="ml-4">
                        <NumberFormat
                           value={item.amount}
                           displayType={'text'}
                           thousandSeparator={true}
                           prefix={'$'}
                           fixedDecimalScale={true}
                           decimalScale={0}
                        />
                     </span>
                  </div>
               ))}
            </div>}
         </div>

      </div>
   );
}

export default OvertimeTooltip;