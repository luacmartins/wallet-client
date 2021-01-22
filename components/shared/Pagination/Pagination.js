const Pagination = ({ value, setValue, totalPages }) => {
   const neighbor = 1
   const display = 4

   let start, end, hasLeftSpill = false, hasRightSpill = false

   if (totalPages <= display + 1) {
      start = 1
      end = totalPages - 1
   } else if (value < display) {
      hasRightSpill = true
      start = 1
      end = start + display - 1
   } else if (value > totalPages - display + 1) {
      hasLeftSpill = true
      start = totalPages - display
      end = totalPages - 1
   } else {
      hasLeftSpill = true
      hasRightSpill = true
      start = value - neighbor - 1
      end = value + neighbor
   }

   const pages = [...Array(totalPages + 1).keys()].slice(1).slice(start, end)

   return (
      <div className="w-full flex justify-center mt-6 text-lg ">
         <span
            onClick={() => setValue(1)}
            className={
               `${value === 1 ? 'text-theme-yellow-500' : ''}
                     w-4 mx-2 text-center hover:cursor-pointer hover:text-theme-yellow-500`
            }>
            1
         </span>
         {hasLeftSpill && <span className="mx-2">...</span>}
         {pages.map(page => (
            <span
               key={page}
               onClick={() => setValue(page)}
               className={
                  `${page === value ? 'text-theme-yellow-500' : ''}
                     w-4 mx-2 text-center hover:cursor-pointer hover:text-theme-yellow-500`
               }>
               {page}
            </span>
         ))}
         {hasRightSpill && <span className="mx-2">...</span>}
         <span
            onClick={() => setValue(totalPages)}
            className={
               `${value === totalPages ? 'text-theme-yellow-500' : ''}
                     w-4 mx-2 text-center hover:cursor-pointer hover:text-theme-yellow-500`
            }>
            {totalPages}
         </span>

      </div>
   );
}

export default Pagination;