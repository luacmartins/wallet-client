import Spinner from '../../icons/Spinner'

const ButtonDelete = ({ children, onClick, isLoading, className, ...props }) => {
   return (
      <button
         className={`border border-red-600 text-red-600 py-2 w-32 rounded-full font-semibold text-lg hover:border-red-700 hover:text-red-700 disabled:cursor-not-allowed focus:outline-none focus:shadow-outline ${className || ''}`}
         onClick={onClick}
         {...props}
      >
         {isLoading ? <Spinner className='animate-spin' /> : children}
      </button>
   );
}

export default ButtonDelete;