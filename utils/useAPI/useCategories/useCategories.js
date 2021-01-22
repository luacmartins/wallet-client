import useSWR from 'swr'
import { fetcher, swrFetcher } from '../config'
import useAlert from '../../useAlert'

const useCategories = () => {
   const { alert, flash } = useAlert()

   const getCategories = () => {
      const { data, error } = useSWR('/api/category', swrFetcher)
      if (error) flash({ type: 'error', message: 'There was an error loading your categories. Please try again later.' })

      return {
         categories: data?.data || [],
         isLoading: !error && !data,
      }
   }

   const addCategory = async (data) => {
      fetcher.post('/api/category', data).catch(() => flash({ type: 'error', message: 'There was an error adding to your categories. Please try again' }))
   }

   const editCategory = async (id, data) => {
      fetcher.patch(`/api/category/${id}`, data).catch(() => flash({ type: 'error', message: 'There was an error editing your category. Please try again' }))
   }

   const deleteCategory = async (id) => {
      fetcher.delete(`/api/category/${id}`).catch(() => flash({ type: 'error', message: 'There was an error deleting your category. Please try again' }))
   }

   return { alert, getCategories, addCategory, editCategory, deleteCategory }
}

export default useCategories