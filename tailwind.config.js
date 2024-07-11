/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/*.{html,js}"],
  theme: {
    extend: {
      fontFamily:{
        poppins:"Poppins",
        roboto: "Roboto Slab",
      },

      colors:{
        primary: "#9fba1a",
        secondary: "#232323",
        tertiary: "#8ba216",
        light: "#ffffff",
      },
      backgroundImage:{
        team:"linear-gradient(rgba(0,0,0,0.9), rgba(0,0,0,0.6)), url('../img/lawn-768316_1920.jpg')",
      }
    },
  },
  plugins: [],
}

