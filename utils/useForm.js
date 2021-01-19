import { useState, useReducer } from 'react'

const formReducer = (state, action) => {
   switch (action.type) {
      case 'CHANGE':
         const newState = {
            data: {
               ...state.data,
               [action.payload.name]: action.payload.value,
            },
            error: {
               ...state.error,
               [action.payload.name]: action.payload.isInvalid
            }
         }
         const hasMissingField = !Object.values(newState.data).every(field => field)
         const hasError = Object.values(newState.error).some(error => error)
         const disabled = hasMissingField || hasError

         return { ...newState, disabled }

      case 'RESET':
         return { data: {}, error: {}, disabled: true }
      default:
         return
   }
}

const useForm = () => {
   const [state, dispatch] = useReducer(formReducer, { data: {}, error: {}, disabled: true })
   const [isSubmitting, setIsSubmitting] = useState(false)

   const handleChange = (e, pattern) => {
      const isCheckbox = e.target.type === 'checkbox'

      dispatch({
         type: 'CHANGE',
         payload: {
            name: e.target.name,
            value: isCheckbox ? e.target.checked : e.target.value,
            isInvalid: pattern ? !pattern.test(e.target.value) : false
         }
      })
   }

   const reset = () => {
      dispatch({ type: 'RESET' })
   }

   const handleSubmit = async (onSubmit) => {
      setIsSubmitting(true)
      await onSubmit()
         .then(() => {
            reset()
         })
         .catch((e) => {
            console.log(e)
         })
      setIsSubmitting(false)
   }

   return { data: state.data, error: state.error, disabled: state.disabled, handleChange, reset, handleSubmit }
}


export default useForm