import Spinner from '../Spinner'
import AddAccount from '../../AddAccount'

const Main = ({ data, message, children }) => {
   if (!data) return (
      <main className="flex flex-col flex-1 mt-4 mb-12 md:mt-12">
         <Spinner />
      </main>
   )

   else if (Object.keys(data).length < 1) return (
      <main className="flex flex-col flex-1 items-center justify-center">
         <span className="w-80 text:lg  md:w-96 font-thin md:text-xl text-center mb-12">{message}</span>
         <AddAccount type="button" />
      </main>
   )

   else return (
      <main className="flex flex-col flex-1 mt-4 mb-12 md:mt-12">
         {children}
      </main>
   );
}

export default Main;