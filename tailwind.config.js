/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",

  ],
  theme: {
    extend: {
      colors:{
        primary: '#58C4DC',
        dark: {
          hard :"#283542",
          soft: '#24ACF2',
        }
      },
      fontFamily : {
        opensans:["'Open Sans'", "sans-serif"],
        roboto:["'Roboto Condensed'", "sans-serif"]
      }
    },
  },
  plugins: [],
}

