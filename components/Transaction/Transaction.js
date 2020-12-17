import { useState } from 'react'
import moment from 'moment'
import NumberFormat from 'react-number-format'
import Modal from '../mobile/Modal'
import EditTransaction from '../mobile/EditTransaction'
import EditTransactionDesktop from '../desktop/EditTransaction'

const Transaction = ({ item, className, disabled, ...props }) => {
   const description = item.description.user || item.description.original
   const date = item.date.user || item.date.original

   const [isVisible, setIsVisible] = useState(false)

   const handleClose = () => {
      setIsVisible(false)
   }
   return (
      <>
         <div onClick={() => setIsVisible(!isVisible)} className={`flex py-2 items-center md:px-2 md:py-4 ${className || ''} ${!disabled && 'cursor-pointer md:py-4 md:px-6'}`} {...props}>
            <div className="flex flex-col w-8 items-center leading-tight mr-2">
               <span className="md:text-lg">{moment(date, 'YYYYMMDD').format('D')}</span>
               <span className="text-xs font-normal md:text-base">{moment(date, 'YYYYMMDD').format('MMM')}</span>
            </div>
            <div className="flex flex-col flex-1 w-32 md:w-48 text-sm md:text-lg mr-4 md:mx-4 md:leading-tight">
               <span className="capitalize truncate">{description.toLowerCase()}</span>
               <span className="font-normal text-theme-gray-700 text-xs md:text-sm">{item.category}</span>
            </div>
            <NumberFormat
               value={item.amount}
               displayType={'text'}
               thousandSeparator={true}
               prefix={'$'}
               decimalScale={2}
               fixedDecimalScale={true}
               className="md:text-lg"
            />
         </div>
         {isVisible && !disabled && <EditTransactionDesktop data={item} />}
         {!disabled && <Modal
            isVisible={isVisible}
            setIsVisible={handleClose}
            title={'Transactions'}
         >
            <div className="mx-4 mt-10 mb-12">
               <EditTransaction data={item} />
            </div>
         </Modal>}
      </>
   );
}

export default Transaction;