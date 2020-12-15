import { useState } from 'react'
import FilterIcon from '../../icons/Filter'
import Modal from '../Modal'
import FiltersList from '../../FiltersList'

const FilterModal = () => {
   const [isVisible, setIsVisible] = useState(false)

   const handleClose = () => {
      setIsVisible(false)
   }

   return (
      <>
         <FilterIcon onClick={() => setIsVisible(true)} />
         <Modal
            isVisible={isVisible}
            setIsVisible={handleClose}
            title={'Filters'}
         >
            <div className="mx-4 mt-4 mb-12">
               <FiltersList />
            </div>
         </Modal>
      </>
   );
}

export default FilterModal;