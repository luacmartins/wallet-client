const Input = ({ type, name, pattern, placeholder, register, label, variant, className, error, ...props }) => {
   return (
      <div
         className={
            `flex flex-col relative border rounded bg-white px-3 w-full font-semibold py-2
               ${variant === 'inside' ? 'h-16' : 'h-12'}
               ${error[name] ? 'border-red-600 text-red-600' : 'border-theme-gray-600'}
               ${className || ''}`
         }
      >
         <label
            htmlFor={name}
            className={
               `${variant === 'inside' ? 'text-sm px-1 ' : ''}
                  ${variant === 'floating' ? 'absolute text-sm transform -translate-y-5 bg-white px-1' : ''}
                  ${error[name] ? 'text-red-600' : 'text-theme-gray-700'}`
            }
         >
            {label}
         </label>
         <input
            ref={register}
            type={type}
            name={name}
            placeholder={placeholder}
            autoComplete={'off'}
            {...props}
            className={'h-12 px-1 outline-none font-semibold placeholder-theme-gray-700 capitalize'}
         />
      </div>
   )
}

export default Input;