import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import YTicks from '../YTicks'
import OvertimeTooltip from '../OvertimeTooltip'

const OvertimeSpending = ({ colors, data }) => {
   const { categories, series } = data
   const dataMax = categories.map(category => (
      series.reduce((max, item) => {
         if (!max) max = item[category]
         return Math.max(max, item[category])
      }, null)
   ))
      .reduce((sum, item) => sum += item, 0)

   return (
      <>
         <ResponsiveContainer>
            <AreaChart
               data={series}
               margin={{
                  top: 16, right: 0, left: 0, bottom: 0,
               }}
            >
               <defs>
                  {categories.map((item, i) => (
                     <linearGradient key={i} id={`color-${i}`} x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor={colors[i % colors.length]} stopOpacity={0.8} />
                        <stop offset="95%" stopColor={colors[i % colors.length]} stopOpacity={0} />
                     </linearGradient>
                  ))}
               </defs>
               <Tooltip
                  cursor={{ stroke: '#909090', strokeWidth: 2, strokeDasharray: '6' }}
                  allowEscapeViewBox={{ x: false, y: true }}
                  position={{ y: -120 }}
                  content={<OvertimeTooltip />}
               />
               {categories.map((item, i) => (
                  <Area
                     key={i}
                     type="monotone"
                     dataKey={item}
                     stroke={colors[i % colors.length]}
                     strokeWidth={2}
                     stackId="1"
                     fill={`url(#color-${i})`}
                     activeDot={{ stroke: colors[i % colors.length], fill: '#fff', strokeWidth: 2, r: 6 }}
                  />
               ))}
               <YAxis
                  dataKey={'Accommodation'}
                  orientation={'right'}
                  tickCount={3}
                  axisLine={false}
                  tickLine={false}
                  tick={<YTicks />}
                  width={0.0001}
                  domain={[0, dataMax]}
                  ticks={[
                     dataMax / 5,
                     dataMax / 2,
                     dataMax * 4 / 5
                  ]}
                  interval={0}
               />
            </AreaChart>
         </ResponsiveContainer>
      </>
   );
}

export default OvertimeSpending;