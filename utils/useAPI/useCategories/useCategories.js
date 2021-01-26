import { mutate } from 'swr'
import { fetcher } from '../config'
import useAlert from '../../useAlert'

// Functions to update local data cache with SWR
const addLocalCategory = (data) => {
   mutate('/api/category', current => ({
      ...current,
      data: [
         ...current.data,
         data
      ]
   }))
}

const editLocalCategory = (id, data) => {
   mutate('/api/category', current => {
      const newData = current.data.map(item => {
         return item._id === id ? { ...item, ...data } : item
      })
      return {
         ...current,
         data: newData
      }
   }, false)
}

const deleteLocalCategory = (id) => {
   mutate('/api/category', current => {
      const data = current.data.filter(item => item._id !== id)
      return {
         ...current,
         data
      }
   }, false)
}

// Hook
const useCategories = () => {
   const { alert, flash } = useAlert()

   const addCategory = async (data) => {
      fetcher.post('/api/category', data)
         .then(() => addLocalCategory(data))
         .catch(() => flash({ type: 'error', message: 'There was an error adding to your categories. Please try again' }))
   }

   const editCategory = async (id, data) => {
      fetcher.patch(`/api/category/${id}`, data)
         .then(() => editLocalCategory(id, data))
         .catch(() => flash({ type: 'error', message: 'There was an error editing your category. Please try again' }))
   }

   const deleteCategory = async (id) => {
      fetcher.delete(`/api/category/${id}`)
         .then(() => deleteLocalCategory(id))
         .catch(() => flash({ type: 'error', message: 'There was an error deleting your category. Please try again' }))
   }

   return { alert, addCategory, editCategory, deleteCategory }
}

export default useCategories