/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Noirs et blancs
        blanc: "#ffffff",
        lightgray: "#F6F6F6",
        gray: "#F8F8F8",
        darkgray: "#9D9CA3",
        black: "#282626",

        /* Couleurs */
        darkblue: "#42558E",
        blue: "#6FA8BF",
        green: "#BEF264",
        lightgreen: "#E5F5AF",
        beige: "#D9C7B8",
        marron: "#A68776",
      },

      fontFamily: {
        poppins: "Poppins, sans-serif",
      },
      boxShadow: {
        'drop2': '0 10px 48px rgba(30, 28, 46, 0.08)',
        'drop-shadow' : '0px 24px 48px rgba(30, 28, 46, 0.08)',
      }
    },
  },
  plugins: [],
};
