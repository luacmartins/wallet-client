import { Cookies } from 'react-cookie'
import axios from 'axios'

const cookies = new Cookies()
const token = cookies.get('token')

const fetcher = axios.create({
   baseURL: `${process.env.NEXT_PUBLIC_SERVER_URL}`
})

if (token) {
   fetcher.defaults.headers.common['Authorization'] = token
}


export default fetcher