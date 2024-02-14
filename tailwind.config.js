/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}",],
  theme: {
    extend: {},
    width:{
      '50p':'50%',
      '80p':'80%',
      '100p':'100%',
      '90p':'90%',
      '30':'30px'
    },
    height:{
      '100p':'100%',
      "80v":"80vh",
      '10p':'50px',
      '50p':'50%',
      '100v':'100vh'
      ,'90v':'90vh',
      '87v':'87vh'
    }
  },
  plugins: [],
}

