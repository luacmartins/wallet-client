const Alert = ({ data: { type, message }, variant }) => {
   if (variant === 'no-bg') return <div className="text-green-700 font-normal text-sm">{message}</div>
   return (
      message && <div
         className={`
            ${type === 'error' ? 'bg-red-300 text-red-700' : ''}
            ${type === 'success' ? 'bg-green-300 text-green-700' : ''}
            ${type === 'warning' ? 'bg-blue-200 text-blue-700' : ''} 
            ${variant === 'no-bg' ? 'bg-white' : ''}
            rounded font-normal text-sm p-2 mb-4
         `}>
         {message}
      </div>
   );
}

export default Alert;