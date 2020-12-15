import NumberFormat from 'react-number-format'
import Select from '../../inputs/Select'
import Text from '../../inputs/Text'
import Date from '../../inputs/Date'
import Button from '../../shared/Button'

const EditTransaction = ({ data }) => {
   return (
      <div className={`flex flex-col items-center`}>
         <span className="text-sm text-theme-gray-700 font-normal">{data.account}</span>
         <NumberFormat
            name="amount"
            value={data.amount / 100}
            displayType={'text'}
            thousandSeparator={true}
            decimalScale={2}
            fixedDecimalScale={true}
            prefix={'$'}
            defaultValue={0}
            className="bg-transparent text-center text-4xl font-semibold w-full my-2"
         />
         <span className="">{data.description.user || data.description.original}</span>
         <span className="font-normal text-sm">{data.date.user || data.date.original}</span>
         <div className="flex flex-col gap-y-2 w-full mt-8">
            <Text label={'inside'} labelText={'Description'} value={data.description.user || data.description.original} />
            <Date label={'inside'} labelText={'Date'} value={data.date.user || data.date.original} />
            <Select label={'inside'} labelText={'Category'} value={data.category} data={[{ text: 'Accommodation', value: 'accommodation' }, { text: 'Transportation', value: 'transportation' }]} />
            <span className="font-normal text-sm text-theme-gray-700 mt-2">Appears on your statement as {data.description.original}, {data.date.original}</span>
            <div className="flex justify-center">
               <Button className="mt-6">Done</Button>
            </div>
         </div>
      </div>
   );
}

export default EditTransaction;