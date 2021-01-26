import { Cookies } from 'react-cookie'
import axios from 'axios'

const getHeaders = (req) => {
   const cookies = new Cookies()

   const token = cookies.get('token');
   if (token) {
      req.headers['Authorization'] = token;
   }
   return req;
}

const error = (error) => {
   Promise.reject(error)
}

const fetcher = axios.create({ baseURL: `${process.env.NEXT_PUBLIC_SERVER_URL}` })
fetcher.interceptors.request.use(req => getHeaders(req), (e) => error(e))

const swrFetcher = url => fetcher.get(url).then(res => {
   const data = {
      totalPages: res.headers['x-total-pages'],
      data: res.data
   }
   return data
})

export { fetcher, swrFetcher }