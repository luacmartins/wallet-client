const Timeframe = ({ data, period, setPeriod }) => {
   return (
      <div className="flex w-full justify-between px-6 items-center mt-4 mb-4 text-sm md:w-80 lg:w-96 md:mx-auto cursor-pointer">
         {data.map(item => (
            <div key={item.label} onClick={() => setPeriod(item.label)} className={`${period === item.label && 'bg-theme-gray-900 text-white'} rounded-full w-10 h-10 flex items-center justify-center`}>{item.label}</div>
         ))}
      </div>
   );
}

export default Timeframe;