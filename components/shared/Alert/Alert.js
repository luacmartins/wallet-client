const Alert = ({ data: { type, message } }) => {
   return (
      message && <div
         className={`
            ${type === 'error' && 'bg-red-300 text-red-700'}
            ${type === 'success' && 'bg-green-300 text-green-700'}
            ${type === 'warning' && 'bg-blue-200 text-blue-700'}
            rounded font-normal text-sm p-2 mb-4
         `}>
         {message}
      </div>
   );
}

export default Alert;