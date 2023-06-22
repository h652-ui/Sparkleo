/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        mColor: '#0d99ff'
      },
    },
    fontFamily: {
      'poppins': ['Poppins'],
   }
  },
  plugins: [],
}