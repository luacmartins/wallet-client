import Loupe from '../../icons/Loupe'

const Search = ({ value, setValue }) => {
   const handleChange = (e) => {
      if (e.target.value === '') {
         const state = { ...value }
         delete state['search']
         setValue(state)
      } else {
         setValue({ ...value, search: e.target.value })
      }
   }

   return (
      <div className="flex flex-col relative justify-center">
         <label htmlFor="" className="absolute px-2 text-theme-gray-700"><Loupe className="h-4" /></label>
         <input
            value={value['search']}
            onChange={handleChange}
            type="text"
            className="w-full rounded border border-theme-gray-600 h-10 font-semibold px-8 placeholder-theme-gray-700"
            placeholder={`Search transaction`}
         />
      </div>
   );
}

export default Search;