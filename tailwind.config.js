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
      '30p':'30px',
      '40p':'40%',
      '70p':'70%'
    },
    height:{
      '100p':'100%',
      "80v":"80vh",
      '10p':'50px',
      '50p':'50%',
      '100v':'100vh'
      ,'90v':'90vh',
      '87v':'87vh',
      '95v':'92vh'
    }
  },
  plugins: [],
}

