/** @type {import('tailwindcss').Config} */
module.exports = {
     content: [
    "./src/**/*.{html,js}", // يبحث في جميع ملفات HTML و JavaScript داخل مجلد src
    "./index.html",          // يشمل ملف index.html إن وجد
  ],

  theme: {
    extend: {
      backgroundImage : {
        'custom-pattern': "url('/images/bg.svg')",
        'back-pattern': "url('/images/bg2.jpg')",
        'another-pattern': "url('/path-to-another-image.jpg')",
      },
      colors: {
        customGreen: {
          light : '#9EDF9C',
          default: '#16423C',
          dark: '#0B1C1E',
          fulldark:'#0B1C1E'

        },
        customGray: {
          light : '#6A9C89',
          default: '#4D4D4D',
        

        },
        

        fontFamily: {
          inter: ['Inter', 'sans-serif'], 
        },
        
      },
    },
  },
  plugins: [],
}
