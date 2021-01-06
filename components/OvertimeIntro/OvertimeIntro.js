import NumberFormat from 'react-number-format'
import moment from 'moment'

const OvertimeIntro = ({ data }) => {
   return (
      <div className="text-theme-gray-700 flex flex-col items-center mt-3">
         <div>{data.change > 0 ? 'Up' : 'Down'}</div>
         <div className="text-3xl text-theme-gray-900">
            <NumberFormat
               value={Math.abs(data.change)}
               displayType={'text'}
               thousandSeparator={true}
               prefix={'$'}
               decimalScale={2}
               fixedDecimalScale={2}
            />
         </div>
         <div>
            <span>per month since {moment(data.startDate).format('MMM, YYYY')}</span>
         </div>
      </div>
   );
}

export default OvertimeIntro;