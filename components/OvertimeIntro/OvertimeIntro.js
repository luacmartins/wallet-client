import Amount from '../inputs/Amount'
import moment from 'moment'

const OvertimeIntro = ({ data }) => {
   return (
      <div className="text-theme-gray-700 flex flex-col items-center mt-3">
         <div>{data.change > 0 ? 'Up' : 'Down'}</div>
         <div className="text-3xl text-theme-gray-900">
            <Amount value={Math.abs(data.change)} />
         </div>
         <div>
            <span>per month since {moment(data.startDate).format('MMM, YYYY')}</span>
         </div>
      </div>
   );
}

export default OvertimeIntro;