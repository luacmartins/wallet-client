export default function useValidation() {
   return {
      name: {
         required: 'Please provide your name.',
         pattern: {
            value: /\w+/,
            message: 'Please provide a valid name.'
         }
      },
      email: {
         required: 'Please provide your email address.',
         pattern: {
            value: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
            message: 'Please provide a valid email.'
         }
      },
      password: {
         required: 'Please provide your new password.',
         pattern: {
            value: /^(((?=.*[a-z])(?=.*[A-Z]))|((?=.*[a-z])(?=.*[0-9]))|((?=.*[A-Z])(?=.*[0-9])))(?=.{6,})/,
            message: 'Please provide a password that is at least 6 characters in length and contains both letters and numbers.'
         }
      },
      confirm: (getValues, fieldName) => ({
         required: 'Please fill in this field.',
         validate: {
            passwordMatch: value => {
               return value === getValues()[fieldName] || 'Please make sure this field matches the previous one!'
            }
         }
      })
   }
}