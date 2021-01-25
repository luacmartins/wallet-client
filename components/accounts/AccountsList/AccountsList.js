import { useState, useEffect } from 'react'
import { EditAccount, AddAccount, DeleteAccount } from '../../accounts'
import { useAccounts } from '../../../utils/useAPI'
import useWidth from '../../../utils/useWidth'
import { Warning } from '../../icons'
import { Amount } from '../../inputs'
import { Card, Modal } from '../../shared'
import useOverlay from '../../../utils/useOverlay'

const AccountsList = ({ data }) => {
   const [account, setAccount] = useState('')
   const [active, setActive] = useState('')
   const { isVisible, open, close, closeOverlay } = useOverlay()
   const { isVisible: isModalVisible, open: openModal, close: closeModal } = useOverlay()
   const isMobile = useWidth() < 768

   // const
   const { deleteAccount } = useAccounts()

   useEffect(() => {
      const initialState = Object.keys(data).length > 0 && data[Object.keys(data)[0]][0] || ''
      setAccount(initialState)
      setActive(initialState._id)
   }, [data])

   const handleClick = (accountData, isMobile) => {
      setActive(accountData._id)
      setAccount(accountData)
      if (isMobile) openModal()
   }

   return (
      <>
         <div className="md:mt-8 md:flex md:w-full md:px-4 lg:w-240 lg:mx-auto">
            <div className="md:w-80 lg:w-96">
               {Object.keys(data).map((key, i) => (
                  <div key={i} className="mx-4 mb-8">
                     <header className="text-xl mb-2">{key.replace('_', ' ')}</header>
                     {data[key].map((account) => (
                        <Card key={account._id} onClick={() => handleClick(account, isMobile)} className={`${account._id === active ? 'md:border md:border-theme-gray-700' : 'hover:border-theme-gray-200 hover:bg-theme-gray-200'} py-1 mb-2 cursor-pointer border border-white`}>
                           <div className="flex items-center h-12 px-6">
                              <span className="flex-1 whitespace-no-wrap truncate mr-4">{account.nickname}</span>
                              <span>
                                 <Amount defaultValue={account.balance} />
                              </span>
                              {account.needsUpdate && <Warning className="text-red-600 ml-2" />}
                           </div>
                        </Card>
                     ))}
                  </div>
               ))}
            </div>
            <div className="hidden md:sticky md:top-28 md:flex md:flex-col md:ml-4 lg:ml-8 md:flex-1 md:h-full ">
               <AddAccount />
               <Card className="px-4 py-8 md:py-16 w-full" >
                  <EditAccount data={account} open={open} />
               </Card>
            </div>
         </div>

         {/* Delete confirmation modal */}
         {isVisible && <DeleteAccount close={close} deleteAccount={() => deleteAccount(active)} />}

         <Modal
            isVisible={isModalVisible}
            close={closeModal}
            title={'Accounts'}
         >
            {account &&
               <div className="mx-8 mt-6">
                  <EditAccount data={account} open={open} />
                  {isVisible && <DeleteAccount close={closeOverlay} deleteAccount={() => deleteAccount(active)} />}
               </div>}
         </Modal>
      </>
   );
}

export default AccountsList;