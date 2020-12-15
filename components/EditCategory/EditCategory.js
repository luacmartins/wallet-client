import { useState, useEffect, useRef } from 'react'

const EditCategory = ({ category, parent, handleEdit, handleDelete }) => {
   const wrapperEl = useRef(null)
   const [name, setName] = useState(category.name)
   const [isEditing, setIsEditing] = useState(false)
   const [isDeleting, setIsDeleting] = useState(false)

   const handleBlur = () => {
      const update = { name }
      handleEdit(category._id, update)
   }

   const handleDeleteCategory = () => {
      handleDelete(category._id)
      setIsDeleting(false)
      setIsEditing(false)
   }

   const handleCancel = () => {
      setIsDeleting(false)
      setIsEditing(false)
   }

   // fix event listner to include scroll / tabbing through items for focus
   useEffect(() => {
      const handleClickOutside = (e) => {
         if (wrapperEl && !wrapperEl.current.contains(e.target)) {
            setIsEditing(false)
            setIsDeleting(false)
         }
      }
      document.addEventListener('mousedown', handleClickOutside)

      return () => {
         document.removeEventListener('mousedown', handleClickOutside)
      }
   })


   return (
      <>
         <div ref={wrapperEl} onFocus={() => setIsEditing(true)} className='flex items-center w-full h-10' >
            <div className='flex-1 pl-2 pr-2 py-1'>
               <label className="hidden" htmlFor="category">Category</label>
               <input value={name} onChange={(e) => setName(e.target.value)} onBlur={handleBlur} type="text" name="category" className={`${!parent ? 'pl-2 font-semibold' : 'pl-4'} capitalize w-full py-1 px-3 text-theme-gray-900`} />
            </div>
            {isEditing && <button onClick={() => setIsDeleting(true)} className='flex items-center text-red-600  font-normal h-full px-2 hover:text-red-700'>Delete</button>}

            {/* Delete confirmation */}
            {isDeleting &&
               <>
                  <div className="fixed bottom-0 sm:bottom-1/2 sm:left-1/2 sm:transform sm:-translate-x-1/2 sm:w-96 sm:rounded-lg left-0 w-full bg-white text-theme-gray-900 px-5 py-4 z-10 sm:z-20">
                     <p className="text-base">Do you really want to delete this category?</p>
                     <p className="text-xs font-normal">All transactions associated with it will be uncategorized.</p>
                     <div className="flex justify-around mt-4 sm:mt-6 sm:mx-8">
                        <button onClick={handleDeleteCategory} className="bg-red-600 rounded-full px-4 py-2 text-white w-32 focus:outline-none focus:shadow-outline hover:bg-red-700">Delete</button>
                        <button onClick={handleCancel} className="border border-theme-gray-900 rounded-full px-4 py-2 w-32 focus:outline-none focus:shadow-outline hover:border-black hover:text-black">Cancel</button>
                     </div>
                  </div>
               </>
            }
         </div>
         {isDeleting && <div className="hidden sm:flex fixed inset-0 bg-theme-gray-700 opacity-75 sm:z-10"></div>}
      </>
   );
}

export default EditCategory;