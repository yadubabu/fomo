/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,ts,tsx,jsx}"],
  theme: {
    extend: {
      letterSpacing: {
        tighter: '-.075em',
        tight: '-.05em',
        normal: '0',
        wide: '.05em',
        wider: '.1em',
        widest: '.25em',
      }
    },
  },
  plugins: [],
  variants:{
    extend:{
      display:['group-current']
    }
  }
}

