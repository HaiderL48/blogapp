/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#58C4DC",
        dark: {
          hard: "rgba(0,0,0,.4)",
          text: "black",
          soft: "#418FBF",
          back: "#E6F2FF",
          light: "#F0F7FF",
          button: "black",
        },
        text: {
          dark: "black",
          soft: "white",
        },
      },
      fontFamily: {
        opensans: ["'Open Sans'", "sans-serif"],
        roboto: ["'Roboto Condensed'", "sans-serif"],
      },
    },
  },
  plugins: [],
};
