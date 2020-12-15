const Checkbox = ({ name, label, handleClick }) => {
   return (
      <div className="flex items-center justify-between">
         <label htmlFor={name}>{label}</label>
         <input type="checkbox" className="form-checkbox text-theme-yellow-500 h-5 w-5 hover:cursor-pointer" name={name} defaultChecked={true} onClick={handleClick} />
      </div>
   );
}

export default Checkbox;