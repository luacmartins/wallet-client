import { useCategories } from '../../utils/useAPI'
import Alert from '../shared/Alert'
import Card from '../shared/Card'
import AddCategory from '../AddCategory'
import EditCategory from '../EditCategory'
import Spinner from '../shared/Spinner'

const Categories = () => {
   const { alert, getCategories, addCategory, editCategory, deleteCategory } = useCategories()
   const { categories, isLoading } = getCategories()

   if (isLoading) return <Spinner />
   return (
      <>
         <Alert data={alert} />

         {
            categories.map(category => (
               !category.parent && <Card key={category.name} className="w-11/12 sm:w-full mx-auto sm:mx-0 mt-2 mb-6">
                  <div className="flex flex-col divide-y divide-theme-gray-600">
                     <EditCategory key={category.id} category={category} handleEdit={editCategory} handleDelete={deleteCategory} />
                     {categories.map(child => (
                        child.parent === category._id && <EditCategory key={child._id} category={child} parent={category._id} handleEdit={editCategory} handleDelete={deleteCategory} />
                     ))}
                     <div className="text-theme-gray-700">
                        <AddCategory parent={category._id} handleAdd={addCategory} />
                     </div>
                  </div>
               </Card>
            ))
         }

         <Card className="w-11/12 sm:w-full mx-auto sm:mx-0 mt-2 mb-20 md:mb-12">
            <AddCategory subcategory={false} handleAdd={addCategory} />
         </Card>
      </>
   );
}

export default Categories;
