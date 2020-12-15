import { useRef } from 'react'
import NumberFormat from 'react-number-format'

const Amount = ({ value, labelText, label, setValue, error, setError, background, className, ...props }) => {
   const inputEl = useRef(null)

   const handleClick = () => {
      inputEl.current.focus()
   }

   const handleOnChange = (e) => {
      setValue(e.target.value)
      if (!value) {
         setError(false)
      }
   }

   const handleOnBlur = () => {
      if (!value) {
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
               ${className || ''} `
            }>
            <label
               className={
                  `${label === 'inside' && 'text-sm px-1'}
                  ${label === 'floating' && 'absolute text-sm transform -translate-y-3 bg-white px-1'}
                  ${background || ''}
                  ${error ? 'text-red-600' : 'text-theme-gray-700'}`
               }
               htmlFor="amount"
            >
               {labelText}
            </label>
            <NumberFormat
               name="amount"
               value={value}
               displayType={'input'}
               thousandSeparator={true}
               decimalScale={2}
               fixedDecimalScale={2}
               prefix={'$'}
               className={`h-12 px-1 outline-none font-semibold placeholder-theme-gray-700 ${background || ''}`}
            />
         </div>
      </>
   );
}

export default Amount;