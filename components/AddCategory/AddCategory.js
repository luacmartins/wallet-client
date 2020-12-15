import { useState, useEffect, useRef } from 'react'
import AddCircle from '../icons/AddCircle'

const AddCategory = ({ subcategory = true, parent, handleAdd }) => {
   const inputEl = useRef(null)
   const wrapperEl = useRef(null)

   const [isAdding, setIsAdding] = useState(false)
   const [newCategory, setNewCategory] = useState('')

   const handleClick = () => {
      setIsAdding(true)
   }

   const handleCancel = () => {
      setIsAdding(false)
      setNewCategory('')
   }

   const handleAddCategory = async () => {
      const data = { name: newCategory, parent }
      handleAdd(data)
      setIsAdding(false)
      setNewCategory('')
   }

   useEffect(() => {
      const handleClickOutside = (e) => {
         if (wrapperEl && !wrapperEl.current.contains(e.target)) {
            handleCancel()
         }
      }
      document.addEventListener('mousedown', handleClickOutside)

      return () => {
         document.removeEventListener('mousedown', handleClickOutside)
      }
   }, [])

   useEffect(() => {
      if (isAdding) inputEl.current.focus()
   }, [isAdding])

   return (
      <div ref={wrapperEl}>
         <div className={`${!isAdding && 'hidden'} w-full px-1 py-1 border-b border-theme-gray-600`} >
            <input ref={inputEl} value={newCategory} onChange={(e) => setNewCategory(e.target.value)} type="text" className='capitalize w-full py-1 px-3 text-theme-gray-800' />
         </div>
         <div>
            {
               !isAdding ?
                  <button onClick={handleClick} className="flex items-center px-4 py-2 font-semibold w-full">
                     <AddCircle className="h-4 w-4" />
                     <span className="ml-1">
                        {subcategory ? 'Add subcategory' : 'Add category'}
                     </span>
                  </button>
                  :
                  <div>
                     <button onClick={handleCancel} className="px-4 py-2 w-1/2 font-semibold hover:text-black">Cancel</button>
                     <button onClick={handleAddCategory} className="px-4 py-2 w-1/2 bg-theme-yellow-500 text-white font-semibold hover:bg-theme-yellow-700">Add</button>
                  </div>
            }
         </div>
      </div>
   );
}

export default AddCategory;