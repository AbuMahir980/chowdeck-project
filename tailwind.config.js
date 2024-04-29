

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
          fontFamily: {
       "plusJakarta": ["Plus Jakarta Sans", "sans-serif"]
      },
      backgroundImage:{
       'bgImage':"url('/src/assets/customersImg/customerHerobg.svg')",
        'hero': "url('/src/assets/vendors/hero.svg')"
      } 
    },
  },
  plugins: [],
}