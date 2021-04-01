import { useState, useEffect } from 'react'
import { Cookies } from 'react-cookie'
import { useRouter } from 'next/router'
import { fetcher } from '../config'
import useAlert from '../../useAlert'

const useAuth = () => {
  const cookies = new Cookies()
  const router = useRouter()
  const { alert, flash } = useAlert()

  const [username, setUsername] = useState('')
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    setUsername(cookies.get('user'))
  }, [])

  const updatePassword = data => {
    fetcher
      .patch('/api/change-password', data)
      .then(() => {
        flash({ type: 'success', message: 'Your password was successfully updated!' })
      })
      .catch(e => {
        flash({ type: 'error', message: 'Your current password is incorrect.' })
      })
  }

  const loginUser = data => {
    setIsLoading(true)
    fetcher
      .post('/api/login', data)
      .then(res => {
        cookies.set('token', res.data.token)
        cookies.set('user', res.data.user)
        setIsLoading(false)
        router.push('/dashboard')
      })
      .catch(() => {
        setIsLoading(false)
        flash({ type: 'error', message: 'Invalid credentials. Please try again.' })
      })
  }

  const loginGuest = () => {
    setIsLoading(true)
    fetcher
      .post('/api/login', { email: 'guest@example.com', password: '1234abcd' })
      .then(res => {
        cookies.set('token', res.data.token)
        cookies.set('user', res.data.user)
        setIsLoading(false)
        router.push('/dashboard')
      })
      .catch(() => {
        setIsLoading(false)
        flash({ type: 'error', message: 'There was a problem loggin in. Please try again later.' })
      })
  }

  const signUp = data => {
    fetcher
      .post('/api/signup', data)
      .then(res => {
        cookies.set('token', res.data.token)
        cookies.set('user', res.data.user)
        router.push('/dashboard')
      })
      .catch(e => {
        flash({ type: 'error', message: 'Unable to sign up. Please try again later.' })
      })
  }

  const logout = () => {
    fetcher
      .get('/api/logout')
      .then(() => {
        cookies.remove('token')
        cookies.remove('user')
        router.push('/')
      })
      .catch(e => console.log(e))
  }

  const forgotPassword = data => {
    // fill rest of function
    console.log(data)
  }

  const resetPassword = data => {
    // fill rest of function
    console.log(data)
  }

  return {
    username,
    alert,
    isLoading,
    updatePassword,
    loginUser,
    loginGuest,
    signUp,
    forgotPassword,
    resetPassword,
    logout,
  }
}

export default useAuth
