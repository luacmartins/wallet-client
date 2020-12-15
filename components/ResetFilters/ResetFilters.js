const ResetFilters = () => {
   const handleClick = () => {
      console.log('reset filters')
   }

   return (
      <div className="text-theme-yellow-500 font-normal text-sm mt-2 md:mt-0">
         <span>Filtering transactions. </span>
         <button onClick={handleClick} className="underline font-semibold">Reset filters</button>
      </div>
   );
}

export default ResetFilters;