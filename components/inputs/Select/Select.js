import { useRef } from 'react'

const Select = ({ data, value, setValue, error, setError, label, labelText, background, className }) => {
   const selectEl = useRef(null)

   const handleClick = () => {
      selectEl.current.focus()
   }

   return (
      <div onClick={handleClick}
         className={
            `flex flex-col relative border rounded h-12 bg-white px-3 w-full font-semibold 
               ${label === 'inside' && 'h-16 py-2'}
               ${error ? 'border-red-600 text-red-600' : 'border-theme-gray-600'}
               ${background || ''}
               ${className || ''} `
         }>
         <label
            className={
               `${label === 'inside' && 'text-sm px-1'}
                  ${label === 'floating' && 'absolute text-sm transform -translate-y-3 bg-white px-1'}
                  ${background || ''}
                  ${error ? 'text-red-600' : 'text-theme-gray-700'}`
            }
            htmlFor="name"
         >
            {labelText}
         </label>
         <select
            ref={selectEl}
            value={value}
            onChange={(e) => setValue(e.target.value)}
            name='type'
            className={` h-12 outline-none font-semibold placeholder-theme-gray-700 ${background || ''}`}
         >
            {data.map(item => (
               <option key={item.value} value={item.value}>{item.text}</option>
            ))}
         </select>
      </div>
   );
}

export default Select;