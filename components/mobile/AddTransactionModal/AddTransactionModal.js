import { useState } from 'react'
import Modal from '../Modal'
import Add from '../../icons/Add'
import AddTransation from '../../forms/AddTransaction'

const AddTransactionModal = ({ handleAdd }) => {
   const [isVisible, setIsVisible] = useState(false)

   const handleClose = () => {
      setIsVisible(false)
   }

   return (
      <>
         <Add onClick={() => setIsVisible(true)} />
         <Modal
            isVisible={isVisible}
            setIsVisible={handleClose}
            title={'Transactions'}
         >
            <div className="mx-4 mt-10 mb-12 flex flex-col gap-y-2 items-center">
               <AddTransation />
            </div>
         </Modal>
      </>
   );
}

export default AddTransactionModal;