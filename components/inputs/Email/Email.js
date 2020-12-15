const Email = ({ value, setValue, error, setError, className, ...props }) => {
   // regex to test for email pattern
   const pattern = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

   const handleOnChange = (e) => {
      setValue(e.target.value)
      if (value && pattern.test(value.toLowerCase())) {
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
         <label className="hidden" htmlFor="email">Email</label>
         <input
            type="email"
            name="email"
            placeholder="Email"
            className={`border rounded h-12 px-4 w-full placeholder-theme-gray-700 font-semibold ${className || ''} ${error ? 'border-red-600 text-red-600' : 'border-theme-gray-600'}`}
            value={value}
            onChange={handleOnChange}
            onBlur={handleOnBlur}
            {...props}
         />
      </>
   );
}

export default Email;