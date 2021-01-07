import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer } from 'recharts'
import SpendTooltip from '../SpendTooltip'
import useWidth from '../../../utils/useWidth'

const MonthlySpend = ({ colors, data, period }) => {
   const total = data.reduce((sum, item) => sum += item.amount, 0)
   let styles = {}

   // x positon = - element width
   // y position = (block height - element height) / 2
   const width = useWidth()
   if (width > 1279) styles = { x: -512, y: 187 }
   else if (width > 1023) styles = { x: -448, y: 155 }
   else if (width > 767) styles = { x: -320, y: 129 }
   else styles = { x: 0, y: -114 }

   return (
      <ResponsiveContainer>
         <PieChart>
            <Pie data={data} dataKey="amount" nameKey="category" cx="50%" cy="50%" innerRadius={'45%'} outerRadius={'85%'} fill="#8884d8">
               {
                  data.map((entry, index) => <Cell key={`cell-${index}`} fill={colors[index % colors.length]} />)
               }
            </Pie>
            <Tooltip
               position={styles}
               content={<SpendTooltip total={total} period={period} />}
            />
         </PieChart>
      </ResponsiveContainer>
   );
}

export default MonthlySpend;