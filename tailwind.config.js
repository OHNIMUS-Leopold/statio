/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      "colors": {
        // Noirs et blancs
        "white": "#ffffff",
        "lightgray": "#F6F6F6",
        "gray": "#F8F8F8",
        "darkgray": "#9D9CA3",
        "black": "#282626",

        /* Couleurs */
        "darkblue": "#42558E",
        "blue": "#6FA8BF",
        "green": "#BEF264",
        "lightgreen": "#E5F5AF",
        "beige": "#D9C7B8",
        "marron": "#A68776",
      },

      // "fontFamily": {
      //   "Poppins": "Poppins, sans-serif",
      //   "Noto Sans KR": "Noto Sans KR, sans-serif"
      // }
    },
  },
  plugins: [],
}

