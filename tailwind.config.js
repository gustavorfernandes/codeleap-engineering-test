/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        roboto: "Roboto, sans-serif",
      },      
      colors: {
        neutral: {
          100: "#DDDDDD",
          200: "#CCCCCC",
          300: "#999999",
          400: "#777777",
        },
      },
    },
  },
  plugins: [
    require("tailwind-scrollbar"),
  ],
}
