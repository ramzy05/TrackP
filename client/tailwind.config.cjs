/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js,ts,jsx,tsx}",
  ],
  theme: {
    screens:{
      sm:'480px',
      md:'768px',
      lg:'976px',
      xl:'1440px'
    },
    extend: {
      colors:{
        primary:'#30588C',
        primaryThin:'#667F9F',
        primaryLight:'#DCF2FF',
        accent:'#9655FF',
        accentLight:'#C19BFF',
        heading:'#1E3859',
        body:'#3C4247',
        bodyLight:'#74868C',
        bgColor:'#FBFBFE',
        white:'#fff',
        light:'#fff',
        error:'#FF4040',
        success:'#21C21E',
        warning:'#FFB053',
        cardColor0:'#557AFF',
        cardColor1:'#3CC0FE',
        cardColor2:'#FFA443',
        blurColor:'#D1D1D10F',
      }
    },
  },
  plugins: [],
}
