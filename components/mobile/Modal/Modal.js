import Header from '../Header'
import Close from '../../icons/Close'

const Modal = ({ isVisible, setIsVisible, left, title, children }) => {
   return (
      <div className={`${isVisible ? 'fixed' : 'hidden'} md:hidden inset-0 w-screen overflow-scroll bg-theme-gray-100 z-50`}>
         <Header sticky={true} left={left} title={title} right={<Close className="hover:cursor-pointer" onClick={() => setIsVisible(false)} />} />
         <main>
            {children}
         </main>
      </div>
   );
}

export default Modal;