import Spinner from '../Spinner'
import AddAccount from '../../AddAccount'

const Suspense = ({ error, isLoading }) => {
   if (error) return (
      <main className="flex flex-col flex-1 mt-4 mb-12 md:mt-12 items-center justify-center">
         <div className="flex flex-col items-center">
            <img src={'./error.png'} className="w-48 h-48 md:w-64 md:h-64" />
            <span className="text-xl md:text-2xl">Oops! You broke the bank!</span>
            <span className="md:text-lg">Come back soon.</span>
         </div>
      </main>
   )

   if (isLoading) return (
      <main className="flex flex-col flex-1 mt-4 mb-12 md:mt-12">
         <Spinner />
      </main>
   )

   return (
      <main className="flex flex-col flex-1 mt-4 mb-12 md:mt-12 items-center justify-center">
         <div className="flex flex-col items-center justify-center">
            <span className="text-xl md:text-2xl">No data to show yet.</span>
            <span className="mb-10 px-4 text-center font-normal md:text-lg">Try adding an account to see your data.</span>
            <AddAccount type={'button'} />
         </div>
      </main>
   )
}

export default Suspense;