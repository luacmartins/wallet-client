const DeleteAccount = ({ close, deleteCategory }) => {
   return (
      <>
         <div className="fixed bottom-0 sm:bottom-1/2 sm:left-1/2 sm:transform sm:-translate-x-1/2 sm:w-96 sm:rounded-lg left-0 w-full bg-white text-theme-gray-900 px-5 py-4 z-50">
            <p className="text-base">Do you really want to delete this category?</p>
            <p className="text-xs font-normal">All transactions associated with this category will be uncategorized.</p>
            <div className="flex justify-around mt-4 sm:mt-6 sm:mx-8">
               <button onClick={deleteCategory} className="bg-red-600 rounded-full px-4 py-2 text-white w-32 focus:outline-none focus:shadow-outline hover:bg-red-700">Delete</button>
               <button onClick={close} className="border border-theme-gray-900 rounded-full px-4 py-2 w-32 focus:outline-none focus:shadow-outline hover:border-black hover:text-black">Cancel</button>
            </div>
         </div>
         <div onClick={close} className="flex fixed inset-0 bg-theme-gray-700 opacity-75 z-40"></div>
      </>
   )
}

export default DeleteAccount;