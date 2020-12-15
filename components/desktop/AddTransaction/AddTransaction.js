import Card from '../../shared/Card'
import Date from '../../inputs/Date'
import Text from '../../inputs/Text'
import Select from '../../inputs/Select'
import Button from '../../shared/Button'
import Amount from '../../inputs/Amount'
import Close from '../../icons/Close'

const AddTransaction = ({ close }) => {
   return (
      <>
         <Card className="p-4 mb-6">
            <header className="flex justify-between items-center">
               <span>Add transaction</span>
               <Close onClick={close} className="h-4 w-4 cursor-pointer" />
            </header>
            <div className="grid grid-cols-4 grid-rows-2 gap-4 mt-6">
               <Date labelText={'Date'} label={'floating'} />
               <div className="col-span-2">
                  <Text labelText={'Description'} label={'floating'} />
               </div>
               <Amount labelText={'Amount'} label={'floating'} />
               <Select labelText={'Type'} label={'floating'} data={[]} />
               <div className="col-span-2">
                  <Select labelText={'Category'} label={'floating'} data={[]} />
               </div>
               <Button className="w-full">Add</Button>
            </div>
         </Card>
      </>
   );
}

export default AddTransaction;