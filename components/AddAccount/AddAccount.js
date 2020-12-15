import { useState, useEffect } from 'react'
import Add from '../icons/Add'
import AddCircle from '../icons/AddCircle'
import fetcher from '../../utils/fetcher'
import PlaidLinkAccount from '../PlaidLinkAccount'

const AddAccount = () => {
   const [token, setToken] = useState(null)

   const generateToken = async () => {
      fetcher.get('/api/get-link-token')
         .then(res => setToken(res.data.link_token))
         .catch(e => console.log(e))
   }

   return (
      <>
         <button onClick={generateToken} className="flex self-end mb-2">
            <Add className="md:hidden cursor-pointer" />
            <span className="hidden md:flex  items-center text-xl font-semibold hover:text-theme-gray-800">
               <AddCircle className="mr-1" />
               <span>Add new account</span>
            </span>
         </button>
         {token && <PlaidLinkAccount token={token} />}
      </>
   );
}

export default AddAccount;