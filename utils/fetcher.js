import { Cookies } from 'react-cookie'
import axios from 'axios'

const cookies = new Cookies()
const token = cookies.get('token')

const fetcher = axios.create({
   baseURL: `${process.env.NEXT_PUBLIC_SERVER_URL}`
})

fetcher.interceptors.request.use(
   config => {
      const token = cookies.get('token');
      if (token) {
         config.headers['Authorization'] = token;
      }
      return config;
   },
   error => {
      Promise.reject(error)
   })

export default fetcher