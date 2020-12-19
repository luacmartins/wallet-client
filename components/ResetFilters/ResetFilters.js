const ResetFilters = ({ setValue }) => {
   return (
      <div className="text-theme-yellow-500 font-normal text-sm mt-2 md:mt-0 md:mb-4">
         <span>Filtering transactions. </span>
         <button onClick={() => setValue('')} className="underline font-semibold">Reset filters</button>
      </div>
   );
}

export default ResetFilters;