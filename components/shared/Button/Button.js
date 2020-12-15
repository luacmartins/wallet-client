import Spinner from '../../icons/Spinner'

const Button = ({ children, onClick, isLoading, className, ...props }) => {
   return (
      <button
         className={`bg-theme-yellow-500 py-2 w-32 rounded-full text-white font-semibold text-lg hover:bg-theme-yellow-700 disabled:cursor-not-allowed disabled:opacity-50 disabled:bg-theme-yellow-500 focus:outline-none focus:shadow-outline ${className || ''}`}
         onClick={onClick}
         {...props}
      >
         {isLoading ? <Spinner className='animate-spin' /> : children}
      </button>
   );
}

export default Button;