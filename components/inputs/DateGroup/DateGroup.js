const DateGroup = ({ value, setValue }) => {
   const handleStartDateChange = (e) => {
      if (e.target.value === '') {
         const state = { ...value }
         delete state['startDate']
         setValue(state)
      } else {
         setValue({ ...value, startDate: e.target.value })
      }
   }

   const handleEndDateChange = (e) => {
      if (e.target.value === '') {
         const state = { ...value }
         delete state['endDate']
         setValue(state)
      } else {
         setValue({ ...value, endDate: e.target.value })
      }
   }

   return (
      <>
         <header className="text-sm mb-2">Date</header>
         <div className="divide-x divide-theme-gray-600 border border-theme-gray-600 bg-white rounded-lg flex items-center h-16">
            <div className="px-3 w-1/2 h-ful flex flex-col justify-center">
               <label className="text-sm text-theme-gray-700 w-full" htmlFor="from">From</label>
               <input value={value['startDate'] || ''} onChange={handleStartDateChange} name='startDate' type="date" />
            </div>
            <div className="px-3 w-1/2 h-full flex flex-col justify-center">
               <label className="text-sm text-theme-gray-700 w-full" htmlFor="to">To</label>
               <input value={value['endDate'] || ''} onChange={handleEndDateChange} name='endDate' type="date" />
            </div>
         </div>
      </>
   );
}

export default DateGroup;