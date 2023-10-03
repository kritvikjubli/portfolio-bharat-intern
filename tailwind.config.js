/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*"],

  darkMode:'class',
  
  theme: {
    container:{
      center:true,
      padding:{
        DEFAULT:'1rem',
        sm:'2rem',
        md:'3rem',
        lg:'4rem',
      }
    },
    extend: {
      colors:{
        primary:'#00ADB5',
        black:'#222831',
        gray:'#3393E46',
        white:'#EEEEEE'
      }
    },
  },
  plugins: [],
}

