import { useState, useEffect } from 'react'
import NumberFormat from 'react-number-format'
import Card from '../shared/Card'
import Modal from '../mobile/Modal'
import EditAccount from '../forms/EditAccount'
import AddAccount from '../AddAccount'

const AccountsList = ({ data }) => {
   const [isVisible, setIsVisible] = useState(false)
   const [account, setAccount] = useState('')
   const [active, setActive] = useState('')

   useEffect(() => {
      const initialState = data && data[Object.keys(data)[0]][0] || ''
      setAccount(initialState)
      setActive(initialState._id)
   }, [data])


   const handleClick = (accountData) => {
      setIsVisible(true)
      setActive(accountData._id)
      setAccount(accountData)
   }

   if (data.length === 0) return (
      <Card>
         <AddAccount autoInit={true} />
      </Card>
   )

   return (
      <>
         <div className="md:mt-8 md:flex md:w-full md:px-4 lg:w-240 lg:mx-auto">
            <div className="md:w-80 lg:w-96">
               {Object.keys(data).map((key, i) => (
                  <div key={i} className="mx-4 mb-8">
                     <header className="text-xl mb-2">{key.replace('_', ' ')}</header>
                     {data[key].map((account) => (
                        <Card key={account._id} onClick={() => handleClick(account)} className={`${account._id === active ? 'border border-theme-gray-700' : 'hover:border-theme-gray-200 hover:bg-theme-gray-200'} py-1 mb-2 cursor-pointer border border-white`}>
                           <div className="flex items-center h-12 px-6">
                              <span className="flex-1 whitespace-no-wrap truncate mr-4">{account.nickname}</span>
                              <span>
                                 <NumberFormat value={account.balance} displayType={'text'} thousandSeparator={true} prefix={'$'} decimalScale={2} fixedDecimalScale={true} />
                              </span>
                           </div>
                        </Card>
                     ))}
                  </div>
               ))}
            </div>
            <div className="hidden md:sticky md:top-28 md:flex md:flex-col md:ml-4 lg:ml-8 md:flex-1 md:h-full ">
               <AddAccount />
               <Card className="px-4 py-8 md:py-12 w-full">
                  <EditAccount data={account} />
               </Card>
            </div>
         </div>

         <Modal
            isVisible={isVisible}
            setIsVisible={setIsVisible}
            title={'Accounts'}
         >
            {account &&
               <div className="mx-8 mt-6">
                  <EditAccount data={account} />
               </div>}
         </Modal>
      </>
   );
}

export default AccountsList;