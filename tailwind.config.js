/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}",],
  darkMode:'class',
  theme: {
    screens:{
      'xx': {max: '1330px'},

      'app': {max: '1264px'},

      'xl': {max :'1094px'},  

      'lg': {max:'992px'},

      'md': {max:'768px'},

      'sm': {max:'640px'},  

      'sm1': {max:'575px'}, 

      'smm': {max:'320px'},


    },
    extend: {},
  },
  plugins: [],
}

