/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        tw_black: '#14171A', // Example color
        tw_darkgray: '#657786', // Another example color
        tw_lightgray:'#AAB8C2',
        tw_blue: '#1DA1F2',
        tw_extralightgray: '#E1E8ED',
        tw_white:'#FFFFFF',
        tw_green: '#00FF00',
      },
    },
  },
  plugins: [],
}