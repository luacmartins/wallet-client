import { useState, useRef } from 'react'
import useOverlay, { useClickOutside } from '../../../utils/useOverlay'
import DeleteCategory from '../DeleteCategory'


const EditCategory = ({ category, parent, handleEdit, handleDelete, isMobile }) => {
   const ref = useRef(null)
   const isEditing = useClickOutside(ref, true)
   const { isVisible, open, close, closeOverlay } = useOverlay()
   const [name, setName] = useState(category.name)

   const handleBlur = () => {
      const update = { name }
      handleEdit(category._id, update)
   }

   const handleDeleteCategory = () => {
      handleDelete(category._id)
      close()
      setIsEditing(false)
   }

   return (
      <>
         <div ref={ref} className='flex items-center w-full h-10' >
            <div className='flex-1 pl-2 pr-2 py-1'>
               <label className="hidden" htmlFor="category">Category</label>
               <input value={name} onChange={(e) => setName(e.target.value)} onBlur={handleBlur} type="text" name="category" className={`${!parent ? 'pl-2 font-semibold' : 'pl-4'} capitalize w-full py-1 px-3 text-theme-gray-900`} />
            </div>
            {isEditing && <button onClick={open} className='flex items-center text-red-600 font-normal h-full px-2 hover:text-red-700'>Delete</button>}
         </div>

         {/* Delete confirmation */}
         {isMobile && isVisible && <DeleteCategory close={closeOverlay} deleteCategory={handleDeleteCategory} />}
         {!isMobile && isVisible && <DeleteCategory close={close} deleteCategory={handleDeleteCategory} />}
      </>
   );
}

export default EditCategory;