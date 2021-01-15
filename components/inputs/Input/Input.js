import { useRef } from 'react'

const Text = ({ type, name, pattern, labelStyle, labelText, background, className, data, setData, ...props }) => {
   const inputEl = useRef(null)

   const handleClick = () => {
      inputEl.current.focus()
   }

   const handleOnChange = (e) => {
      setData({ ...data, fields: { [e.target.name]: e.target.value } })
      if (!data[e.target.name] || pattern.test(data[e.target.name].toLowerCase())) {
         setData({ ...data, error: { [e.target.name]: 'Invalid information' } })
      }
   }

   const handleOnBlur = () => {
      if (!data[name] || !pattern.test(data[name].toLowerCase())) {
         setData({ ...data, error: { [name]: 'Invalid field' } })
      } else {
         delete data.error[name]
         setData(data)
      }
   }

   return (
      <>
         <div onClick={handleClick}
            className={
               `flex flex-col relative border rounded h-12 bg-white px-3 w-full font-semibold 
               ${labelStyle === 'inside' && 'h-16 py-2'}
               ${data.error[name] ? 'border-red-600 text-red-600' : 'border-theme-gray-600'}
               ${background || ''}
               ${className || ''}`
            }>
            <label
               className={
                  `${labelStyle === 'inside' && 'text-sm px-1'}
                  ${labelStyle === 'floating' && 'absolute text-sm transform -translate-y-3 bg-white px-1'}
                  ${background || ''}
                  ${data.error[name] ? 'text-red-600' : 'text-theme-gray-700'}`
               }
               htmlFor={name}
            >
               {labelText}
            </label>
            <input
               ref={inputEl}
               type={type}
               name={name}
               className={`h-12 px-1 outline-none font-semibold placeholder-theme-gray-700 capitalize ${background || ''}`}
               value={data[name]}
               onChange={handleOnChange}
               onBlur={handleOnBlur}
               {...props}
            />
         </div>
      </>
   );
}

export default Text;