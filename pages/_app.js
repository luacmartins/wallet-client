import '../styles/index.css'
import { AuthProvider } from '../utils/AuthProvider'

function MyApp({ Component, pageProps }) {
   return (
      <AuthProvider>
         <Component {...pageProps} />
      </AuthProvider>
   )
}

export default MyApp
