const Input = ({ type, name, pattern, label, variant, background, className, value, error, onChange, ...props }) => {
   if (variant === 'inside') return (
      <>
         <div
            className={`flex flex-col relative border rounded h-16 bg-white px-3 w-full font-semibold py-2
         ${error[name] ? 'border-red-600 text-red-600' : 'border-theme-gray-600'}
         ${background || ''}
         ${className || ''}`
            }>
            <label className={`text-sm px-1 ${background || ''} ${error[name] ? 'text-red-600' : 'text-theme-gray-700'}`} htmlFor={name}>
               {label}
            </label>
            <input
               type={type}
               name={name}
               className={`h-12 px-1 outline-none font-semibold placeholder-theme-gray-700 capitalize ${background || ''}`}
               value={value[name] || ''}
               onChange={(e) => onChange(e, pattern)}
               autoComplete={'off'}
               {...props}
            />
         </div>
      </>)

   if (variant === 'floating') return (
      <>
         <div
            className={`flex flex-col relative border rounded h-12 bg-white px-3 w-full font-semibold
      ${error[name] ? 'border-red-600 text-red-600' : 'border-theme-gray-600'}
      ${background || ''}
      ${className || ''}`
            }>
            <label className={`absolute text-sm transform -translate-y-3 bg-white px-1 ${background || ''} ${error[name] ? 'text-red-600' : 'text-theme-gray-700'}`} htmlFor={name}>
               {label}
            </label>
            <input
               type={type}
               name={name}
               className={`h-12 px-1 outline-none font-semibold placeholder-theme-gray-700 capitalize ${background || ''}`}
               value={value[name] || ''}
               onChange={(e) => onChange(e, pattern)}
               {...props}
            />
         </div>
      </>)




   return (
      <>
         <div
            className={
               `flex flex-col relative border rounded h-12 bg-white px-3 w-full font-semibold 
               ${error[name] ? 'border-red-600 text-red-600' : 'border-theme-gray-600'}
               ${background || ''}
               ${className || ''}`
            }>
            <label
               className={`
                  ${background || ''}
                  ${error[name] ? 'text-red-600' : 'text-theme-gray-700'}`
               }
               htmlFor={name}
            >
               {label}
            </label>
            <input
               type={type}
               name={name}
               className={`h-12 px-1 outline-none font-semibold placeholder-theme-gray-700 capitalize ${background || ''}`}
               value={value[name] || ''}
               onChange={(e) => onChange(e, pattern)}
               {...props}
            />
         </div>
      </>
   );
}

export default Input;