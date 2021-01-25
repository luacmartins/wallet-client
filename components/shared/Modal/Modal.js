import Header from '../MobileHeader'
import Close from '../../icons/Close'

const Modal = ({ isVisible, close, left, title, children }) => {
   return (
      <div className={`${isVisible ? 'fixed' : 'hidden'} md:hidden inset-0 w-screen overflow-scroll bg-theme-gray-100 z-50`}>
         <Header sticky={true} left={left} title={title} right={<Close className="hover:cursor-pointer" onClick={close} />} />
         <main>
            {children}
         </main>
      </div>
   );
}

export default Modal;