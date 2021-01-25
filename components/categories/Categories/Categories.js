import { useCategories } from '../../../utils/useAPI'
import { AddCategory, EditCategory } from '../../categories'
import { Alert, Card, Spinner } from '../../shared'
import useWidth from '../../../utils/useWidth'

const Categories = () => {
   const { alert, getCategories, addCategory, editCategory, deleteCategory } = useCategories()
   const { categories, isLoading } = getCategories()
   const isMobile = useWidth() < 768


   if (isLoading) return <Spinner />
   return (
      <>
         <Alert data={alert} />

         <Card className="w-11/12 sm:w-full mx-auto sm:mx-0 mt-2 mb-6 py-2">
            <div className="divide-theme-gray-600 divide-y">
               {categories.map(category => (
                  <div key={category._id} className="flex flex-col">
                     <EditCategory category={category} handleEdit={editCategory} handleDelete={deleteCategory} isMobile={isMobile} />
                  </div>
               ))}
            </div>
         </Card>

         <Card className="w-11/12 sm:w-full mx-auto sm:mx-0 mt-2 mb-20 md:mb-12">
            <AddCategory subcategory={false} handleAdd={addCategory} />
         </Card>
      </>
   );
}

export default Categories;
