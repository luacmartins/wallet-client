import { useData, useCategories } from '../../../utils/useAPI'
import AddCategory from '../AddCategory'
import EditCategory from '../EditCategory'
import { Alert, Card, Spinner } from '../../shared'
import useWidth from '../../../utils/useWidth'

const Categories = () => {
   const { alert, addCategory, editCategory, deleteCategory } = useCategories()
   const { data, isLoading } = useData('/api/category')
   const isMobile = useWidth() < 768

   if (isLoading) return <Spinner />
   return (
      <>
         <Alert data={alert} />

         <Card className="w-11/12 sm:w-full mx-auto sm:mx-0 mt-2 mb-6 py-2">
            <div className="divide-theme-gray-600 divide-y">
               {data.map(category => (
                  <div key={category.name} className="flex flex-col">
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
