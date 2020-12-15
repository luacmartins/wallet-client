import { useState, useEffect } from 'react'
import fetcher from '../../utils/fetcher'
import Card from '../shared/Card'
import AddCategory from '../AddCategory'
import EditCategory from '../EditCategory'

const Categories = () => {
   const [categories, setCategories] = useState([])

   const getData = async () => {
      fetcher.get('/api/category')
         .then(res => setCategories(res.data))
         .catch(e => console.log(e))
   }

   useEffect(() => {
      getData()
   }, [])

   const handleAdd = async (data) => {
      await fetcher.post('/api/category', data)
      await getData()
   }

   const handleEdit = async (id, update) => {
      await fetcher.patch(`/api/category/${id}`, update)
      await getData()
   }

   const handleDelete = async (id) => {
      await fetcher.delete(`/api/category/${id}`)
      await getData()
   }

   return (
      <>
         {
            categories.map(category => (
               !category.parent && <Card key={category.name} className="w-11/12 sm:w-full mx-auto sm:mx-0 mt-2 mb-6">
                  <div className="flex flex-col divide-y divide-theme-gray-600">
                     <EditCategory key={category.id} category={category} handleEdit={handleEdit} handleDelete={handleDelete} />
                     {categories.map(child => (
                        child.parent === category._id && <EditCategory key={child._id} category={child} parent={category._id} handleEdit={handleEdit} handleDelete={handleDelete} />
                     ))}
                     <div className="text-theme-gray-700">
                        <AddCategory parent={category._id} handleAdd={handleAdd} />
                     </div>
                  </div>
               </Card>
            ))
         }
         <Card className="w-11/12 sm:w-full mx-auto sm:mx-0 mt-2 mb-20 md:mb-12">
            <AddCategory subcategory={false} handleAdd={handleAdd} />
         </Card>
      </>
   );
}

export default Categories;
