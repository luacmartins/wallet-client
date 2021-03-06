import { ChevronDown } from '../../icons'

const Select = ({ name, register, label, variant, className, error, data, ...props }) => {
   return (
      <>
         <div
            className={
               `flex flex-col relative border rounded bg-white px-3 w-full font-semibold py-2
               ${variant === 'inside' ? 'h-16' : 'h-12'}
               ${variant === 'floating' ? 'mt-2' : ''}
               ${error[name] ? 'border-red-600 text-red-600' : 'border-theme-gray-600'}
               ${className || ''}`
            }
         >
            <label
               htmlFor={name}
               className={
                  `${variant === 'inside' ? 'text-sm px-1 ' : ''}
                  ${variant === 'floating' ? 'absolute text-sm transform -translate-y-5 bg-white px-1' : ''}
                  ${error[name] ? 'text-red-600' : 'text-theme-gray-700'}
                  ${className || ''}`
               }
            >
               {label}
            </label>
            <ChevronDown
               className={
                  `h-4 w-4 absolute right-0 mr-3
                  ${variant === 'inside' ? 'mt-6' : 'mt-2'}`
               }
            />
            <select
               ref={register}
               name={name}
               className={`h-12 px-1 outline-none font-semibold placeholder-theme-gray-700 appearance-none ${className}`}
               {...props}
            >

               {data.map(item => (
                  <option key={item.value} value={item.value}>{item.text}</option>
               ))}
            </select>
         </div>
      </>
   )
}

export default Select