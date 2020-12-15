const Password = ({ value, setValue, error, setError, className, ...props }) => {
   // pattern to test password requirements
   const pattern = /^(((?=.*[a-z])(?=.*[A-Z]))|((?=.*[a-z])(?=.*[0-9]))|((?=.*[A-Z])(?=.*[0-9])))(?=.{6,})/;

   const handleOnChange = (e) => {
      setValue(e.target.value)
      if (pattern.test(value)) {
         setError(false)
      }
   }

   const handleOnBlur = () => {
      if (!pattern.test(value)) {
         setError(true)
      } else {
         setError(false)
      }
   }

   return (
      <>
         <label className="hidden" htmlFor="password">Password</label>
         <input
            type="password"
            name="password"
            placeholder="Password"
            className={`border rounded h-12 px-4 w-full font-semibold placeholder-theme-gray-700 ${className || ''} ${error ? 'border-red-600 text-red-600' : 'border-theme-gray-600'}`}
            value={value}
            onChange={handleOnChange}
            onBlur={handleOnBlur}
            {...props}
         />
      </>
   );
}

export default Password;