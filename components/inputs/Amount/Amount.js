import NumberFormat from 'react-number-format'
import { Controller } from 'react-hook-form'

const Amount = ({ type = 'text', name, label, variant, defaultValue, error, control, className, ...props }) => {
   if (type === 'input') return (
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
            <Controller
               name={name}
               control={control}
               defaultValue={defaultValue}
               as={
                  <NumberFormat
                     displayType={'input'}
                     thousandSeparator={true}
                     decimalScale={2}
                     fixedDecimalScale={true}
                     prefix={'$'}
                     className={`h-12 px-1 outline-none font-semibold placeholder-theme-gray-700 ${className}`}
                     {...props}
                  />
               } />
         </div>
      </>
   )

   return (
      <NumberFormat
         displayType={type}
         defaultValue={defaultValue}
         thousandSeparator={true}
         decimalScale={2}
         fixedDecimalScale={true}
         prefix={'$'}
         className={className}
         {...props}
      />
   )

}

export default Amount;