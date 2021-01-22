import moment from 'moment'
import { useTransactions } from '../../../utils/useAPI'
import useOverlay from '../../../utils/useOverlay'
import Amount from '../../inputs/Amount'
import Modal from '../../shared/Modal'
import EditTransaction from '../EditTransaction'

const Transaction = ({ item, className, disabled, categories, ...props }) => {
   const { ref, isVisible, toggle, close } = useOverlay()
   const { editTransaction } = useTransactions()

   const submit = (id, data) => {
      editTransaction(id, data)
      close()
   }

   return (
      <div ref={ref}>
         <div onClick={toggle} className={`flex py-2 items-center md:px-2 md:py-4 ${className || ''} ${!disabled && 'cursor-pointer md:py-4 md:px-6'}`} {...props}>
            <div className="flex flex-col w-8 items-center leading-tight mr-2">
               <span className="md:text-lg">{moment(item.date.user, 'YYYYMMDD').format('D')}</span>
               <span className="text-xs font-normal md:text-base">{moment(item.date.user, 'YYYYMMDD').format('MMM')}</span>
            </div>
            <div className="flex flex-col flex-1 w-32 md:w-48 text-sm md:text-lg mr-4 md:mx-4 md:leading-tight">
               <span className="capitalize truncate">{item.description.user.toLowerCase()}</span>
               <span className="font-normal text-theme-gray-700 text-xs md:text-sm">{item.category}</span>
            </div>
            <Amount defaultValue={item.amount} className="text-right md:font-bold md:text-lg" />
         </div>
         {isVisible && !disabled && <EditTransaction data={item} categories={categories} submit={submit} />}
         {!disabled && <Modal
            isVisible={isVisible}
            setIsVisible={close}
            title={'Transactions'}
         >
            <div className="mx-4 mt-10 mb-12">
               <EditTransaction data={item} categories={categories} submit={submit} />
            </div>
         </Modal>}
      </div>
   );
}

export default Transaction;