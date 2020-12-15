const OvertimeIntro = ({ data }) => {
   return (
      <div className="text-theme-gray-700 flex flex-col items-center mt-3">
         <div>{data.change > 0 ? 'Up' : 'Down'} </div>
         <div className="text-3xl text-theme-gray-900">{Math.abs(data.change)}%</div>
         <div>
            <span> in </span>
            <span>{data.time} {data.unit}.</span>
         </div>
      </div>
   );
}

export default OvertimeIntro;