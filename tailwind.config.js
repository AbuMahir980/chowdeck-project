const flowbite = require("flowbite-react/tailwind");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    flowbite.content(),
  ],
  theme: {
    extend: {
      backgroundImage:{
        'hero': "url('/src/assets/vendors/hero.svg')",
      }
    },
  },
  plugins: [
    flowbite.plugin(),
  ],
}