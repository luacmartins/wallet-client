import { useState, useEffect } from 'react'
import moment from 'moment'
import Amount from '../../inputs/Amount'

const Tooltip = ({ coordinate: { x, y }, payload }) => {
   const [pos, setPos] = useState(null)
   let formattedDate, amount, date

   if (payload[0]) {
      ({ date, amount } = payload[0].payload)
      formattedDate = moment(date).format('MMM D, YYYY')
   }

   useEffect(() => {
      let xPos
      const $width = window.innerWidth

      if (x < 72) xPos = 72
      else if (x > $width - 72) xPos = $width - 72
      else xPos = x
      setPos(xPos)
   }, [x])

   return (
      <div className="bg-theme-gray-100 w-screen overflow-hidden h-32 flex items-center">
         <div style={{ left: pos }} className="absolute bottom-0 mb-2 w-24 transform -translate-x-12 flex flex-col items-center">
            <div className="text-xs font-normal">{formattedDate}</div>
            <div className="text-xl">
               <Amount value={amount} />
            </div>
         </div>
      </div>
   );
}

export default Tooltip;