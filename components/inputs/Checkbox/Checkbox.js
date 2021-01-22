const Checkbox = ({ name, label, register, onChange, checked }) => {
   return (
      <div className="flex items-center justify-between">
         <label htmlFor={name}>{label}</label>
         <input ref={register} type="checkbox" name={name} className="form-checkbox text-theme-yellow-500 h-5 w-5 hover:cursor-pointer" checked={checked} onChange={onChange} />
      </div>
   );
}

export default Checkbox;