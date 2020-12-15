import { useState } from 'react'

const Timeframe = ({ timeframe, setData }) => {
   const [isActive, setIsActive] = useState(timeframe[0].label)

   const handleClick = (label) => {
      setIsActive(label)
      setData()
   }

   return (
      <div className="flex w-full justify-between px-6 items-center mt-4 mb-4 text-sm md:w-80 lg:w-96 md:mx-auto cursor-pointer">
         {timeframe.map(item => (
            <div key={item.label} onClick={() => handleClick(item.label)} className={`${isActive === item.label && 'bg-theme-gray-900 text-white'} rounded-full w-10 h-10 flex items-center justify-center`}>{item.label}</div>
         ))}
      </div>
   );
}

export default Timeframe;