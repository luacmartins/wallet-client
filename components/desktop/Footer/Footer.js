import moment from 'moment'

const Footer = () => {
   return (
      <footer className="hidden md:flex mt-20 justify-center items-center h-16 bg-theme-beige-900 w-full  text-white font-normal">
         <span>Wallet - {moment().format('YYYY')}</span>
      </footer>
   );
}

export default Footer;