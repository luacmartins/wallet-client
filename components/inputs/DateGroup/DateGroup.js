const DateGroup = () => {

   return (
      <>
         <header className="text-sm mb-2">Date</header>
         <div className="divide-x divide-theme-gray-600 border border-theme-gray-600 bg-white rounded-lg flex items-center h-16">
            <div className="px-4 w-1/2 h-ful flex flex-col justify-center">
               <label className="text-sm text-theme-gray-700 w-full" htmlFor="from">From</label>
               <input type="date" />
            </div>
            <div className="px-4 w-1/2 h-full flex flex-col justify-center">
               <label className="text-sm text-theme-gray-700 w-full" htmlFor="to">To</label>
               <input type="date" />
            </div>
         </div>
      </>
   );
}

export default DateGroup;