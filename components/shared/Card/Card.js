const Card = ({ children, className, ...props }) => {
   return (
      <div {...props} className={`bg-white rounded-lg shadow-theme overflow-hidden ${className}`}>
         {children}
      </div>
   );
}

export default Card;