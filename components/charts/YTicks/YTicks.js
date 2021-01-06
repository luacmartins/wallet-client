const YTicks = ({ x, y, payload }) => {
   function round(value, precision) {
      var multiplier = Math.pow(10, precision || 0);
      return Math.round(value * multiplier) / multiplier;
   }

   return (
      <foreignObject x={x - 116} y={y}
         width='100'
         height='100%'
         overflow='visible'
      >
         <div
            xmlns='http://www.w3.org/1999/xhtml'
            className="absolute right-0 bg-white opacity-75 font-thin rounded-full text-center
                  px-1 py-1 text-sm w-16
                  md:w-24  md:px-4 md:font-semibold ">
            {
               Math.abs(payload.value) > 1000000 ? `$${payload.value / 1000000}M`
                  :
                  Math.abs(payload.value) > 1000 ? `$${round(payload.value / 1000, 1)}k`
                     :
                     `$${Math.round(payload.value)}`
            }
         </div>
      </foreignObject>

   )
}

export default YTicks;