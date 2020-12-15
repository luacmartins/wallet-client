import NumberFormat from 'react-number-format'
import Select from '../../inputs/Select'
import Text from '../../inputs/Text'
import Date from '../../inputs/Date'
import Button from '../../shared/Button'

const AddTransaction = () => {
   return (
      <>
         <NumberFormat
            name="below"
            displayType={'input'}
            thousandSeparator={true}
            decimalScale={2}
            fixedDecimalScale={2}
            prefix={'$'}
            defaultValue={0}
            className="bg-transparent text-center text-4xl font-semibold w-full mb-12"
         />
         <Select data={[{ text: 'Debit', value: 'debit' }, { text: 'Income', value: 'credit' }]} />
         <Text />
         <Date />
         <Select data={[{ text: 'Accommodation', value: 'accommodation' }, { text: 'Transportation', value: 'transportation' }]} />
         <Button className="mt-6">Add</Button>
      </>
   );
}

export default AddTransaction;