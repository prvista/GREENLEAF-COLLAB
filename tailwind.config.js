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
        green:"['rgba(94,240,49,0.8)', 'rgba(94,240,49,0.8)']",
        primary: "#9fba1a",
        secondary: "#232323",
        tertiary: "#8ba216",
        light: "#ffffff",
      },
      backgroundImage:{
        team:"linear-gradient(rgba(165, 184, 48,1),rgba(165, 184, 48,0.4)), url('../img/lawn-768316_1920.jpg')",
        about:"url('..img/page-title.jpg')",
      }
    },
  },
  plugins: [],
}

