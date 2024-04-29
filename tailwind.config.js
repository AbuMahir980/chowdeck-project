const flowbite = require("flowbite-react/tailwind");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    flowbite.content(),
  ],
  theme: {
    extend: {

      fontFamily: {
       "plusJakarta": ["Plus Jakarta Sans", "sans-serif"]
      },
      backgroundImage:{
        'bgImage':"url('/src/assets/customersImg/customerHerobg.svg')"
      } 
    }
      backgroundImage:{
        'hero': "url('/src/assets/vendors/hero.svg')",
      }
    },
  },
  plugins: [
    flowbite.plugin(),
  ],
}