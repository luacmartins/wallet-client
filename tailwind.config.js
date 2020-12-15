module.exports = {
   future: {
      // removeDeprecatedGapUtilities: true,
      // purgeLayersByDefault: true,
   },
   purge: [],
   theme: {
      extend: {
         colors: {
            'theme-gray-900': '#54575a',
            'theme-gray-800': '#6e7272',
            'theme-gray-700': '#909090',
            'theme-gray-600': '#E1E1E1',
            'theme-gray-200': '#F6F6F6',
            'theme-gray-100': '#f9f8f7',
            'theme-beige-900': '#ceb197',
            'theme-beige-500': '#F5F1ED',
            'theme-beige-100': '#FAF7F5',
            'theme-yellow-500': '#fab131',
            'theme-yellow-700': '#efa618'
         },
         boxShadow: {
            'theme': '0px 0px 10px rgba(0, 0, 0, 0.1)'
         },
         width: {
            80: '20rem',
            96: '24rem',
            112: '28rem',
            128: '32rem',
            156: '39rem',
            180: '45rem',
            240: '60rem',
         },
         height: {
            80: '20rem',
            88: '22rem',
            96: '24rem',
            128: '32rem',
            156: '39rem',
            180: '45rem',
            240: '60rem',
         },
         inset: {
            '28': '7rem',
            '1/2': '50%'
         }
      },
   },
   variants: {
      opacity: ['responsive', 'hover', 'focus', 'disabled'],
      cursor: ['responsive', 'hover', 'focus', 'disabled'],
      backgroundColor: ['responsive', 'hover', 'focus', 'disabled'],
   },
   plugins: [
      require('@tailwindcss/custom-forms'),
   ],
}
