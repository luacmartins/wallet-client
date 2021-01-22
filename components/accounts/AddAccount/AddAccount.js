import PlaidLinkAccount from '../PlaidLinkAccount'
import { useLink } from '../../../utils/useAPI'
import { Add, AddCircle } from '../../icons'
import { Button } from '../../shared'

const AddAccount = ({ type }) => {
   const { token, getToken } = useLink()

   if (type === 'button') return (
      <>
         <Button onClick={getToken} className="w-64 flex items-center justify-center">
            <AddCircle className="mr-1" />
            <span>Add new account</span>
         </Button>
         {token && <PlaidLinkAccount token={token} />}
      </>
   )

   return (
      <>
         <button onClick={getToken} className="flex self-end mb-2">
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