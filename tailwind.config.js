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
          text:'black',
          soft: '#418FBF',
          back: '#F0F7FF',
          button:'#eec3e8',
        },
      },
      fontFamily : {
        opensans:["'Open Sans'", "sans-serif"],
        roboto:["'Roboto Condensed'", "sans-serif"]
      },
    },
  },
  plugins: [],
}

