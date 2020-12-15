import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import YTicks from '../YTicks'
import CustomTooltip from '../Tooltip'

const NetWorth = ({ data }) => {
   const dataMin = data.reduce((min, item) => {
      if (!min) min = item.amount
      return Math.min(min, item.amount)
   }, null)

   const dataMax = data.reduce((max, item) => {
      if (!max) max = item.amount
      return Math.max(max, item.amount)
   }, null)

   const range = dataMax - dataMin
   const scale = dataMin - range / 5
   const minDomain = scale < 0 ? 0 : scale

   return (
      <>
         <ResponsiveContainer>
            <AreaChart
               data={data}
               margin={{
                  top: 16, right: 0, left: 0, bottom: 8,
               }}
            >
               <defs>
                  <linearGradient id="chartArea" x1="0" y1="0" x2="0" y2="1">
                     <stop offset="5%" stopColor="#fab131" stopOpacity={0.8} />
                     <stop offset="95%" stopColor="#fab131" stopOpacity={0} />
                  </linearGradient>
               </defs>
               <Tooltip
                  cursor={{ stroke: '#efa618', strokeWidth: 2, strokeDasharray: '6' }}
                  allowEscapeViewBox={{ x: false, y: true }}
                  position={{ y: -120 }}
                  content={<CustomTooltip />}
               />
               <Area
                  type="monotone"
                  dataKey="amount"
                  stroke="#efa618"
                  strokeWidth={2}
                  fill="url(#chartArea)"
                  activeDot={{ stroke: '#efa618', fill: '#fff', strokeWidth: 2, r: 6 }}
               />
               <YAxis
                  dataKey={'amount'}
                  orientation={'right'}
                  tickCount={3}
                  axisLine={false}
                  tickLine={false}
                  tick={<YTicks />}
                  width={0.0001}
                  domain={[minDomain, 'dataMax']}
                  ticks={[
                     dataMin + range / 5,
                     dataMin + range / 2,
                     dataMin + range * 4 / 5
                  ]}
                  interval={0}
               />
            </AreaChart>
         </ResponsiveContainer>

      </>
   );
}

export default NetWorth;