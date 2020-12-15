import { useRef } from 'react'

const Text = ({ value, labelText, label, setValue, error, setError, background, className, ...props }) => {
   const inputEl = useRef(null)

   // name validation pattern
   const pattern = /\w+/

   const handleClick = () => {
      inputEl.current.focus()
   }

   const handleOnChange = (e) => {
      setValue(e.target.value)
      if (!value || pattern.test(value.toLowerCase())) {
         setError(false)
      }
   }

   const handleOnBlur = () => {
      if (!value || !pattern.test(value.toLowerCase())) {
         setError(true)
      } else {
         setError(false)
      }
   }

   return (
      <>
         <div onClick={handleClick}
            className={
               `flex flex-col relative border rounded h-12 bg-white px-3 w-full font-semibold 
               ${label === 'inside' && 'h-16 py-2'}
               ${error ? 'border-red-600 text-red-600' : 'border-theme-gray-600'}
               ${background || ''}
               ${className || ''}`
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
            <input
               ref={inputEl}
               type="text"
               name="name"
               className={`h-12 px-1 outline-none font-semibold placeholder-theme-gray-700 ${background || ''}`}
               value={value}
               onChange={handleOnChange}
               onBlur={handleOnBlur}
               {...props}
            />
         </div>
      </>
   );
}

export default Text;