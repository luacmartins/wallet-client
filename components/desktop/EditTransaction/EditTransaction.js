import moment from 'moment'
import Date from '../../inputs/Date'
import Text from '../../inputs/Text'
import Select from '../../inputs/Select'
import Button from '../../shared/Button'
import Amount from '../../inputs/Amount'

const EditTransaction = ({ data }) => {
   const date = data.date.user || data.date.original
   const originalDate = moment(data.date.original).format('MMM, D YYYY')
   const description = data.description.user || data.description.original

   return (
      <>
         <div className="hidden md:flex flex-col bg-theme-gray-200 py-6 px-6">
            <div className="grid grid-cols-4 grid-rows-2 gap-4 ">
               <Date labelText={'Date'} label={'floating'} background={'bg-theme-gray-200'} value={date} />
               <div className="col-span-2">
                  <Text labelText={'Description'} label={'floating'} background={'bg-theme-gray-200'} value={description.toLowerCase()} />
               </div>
               <Amount labelText={'Amount'} label={'floating'} background={'bg-theme-gray-200'} value={data.amount} />
               <Select labelText={'Type'} label={'floating'} data={[]} background={'bg-theme-gray-200'} data={[{ text: 'Debit', value: 'debit' }, { text: 'Credit', value: 'credit' }]} />
               <div className="col-span-2">
                  <Select labelText={'Category'} label={'floating'} data={[]} background={'bg-theme-gray-200'} value={data.category} data={[{ text: 'Accommodation', value: 'accommodation' }, { text: 'Transportation', value: 'transportation' }]} />
               </div>
               <Button className="w-full">Done</Button>
            </div>
            <div className="flex flex-col w-full mt-4 font-normal text-sm leading-tight">
               <span>Appears on your {data.account} statement as {data.description.original} on {originalDate}</span>
            </div>
         </div>
      </>
   );
}

export default EditTransaction;