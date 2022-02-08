const defaultTheme = require('tailwindcss/defaultTheme')
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      spacing: {
        /* Custom units in addition to existing */
        '4.5': '1.125rem', // 18px
        '3.75': '0.9375rem',  
        '6.5': '1.635rem',  
        '13': '3.25rem',  // 52px
        '17': '4.25rem',  // 70px
        '21': '5.275rem',  // 84px
        '22': '5.5rem',  // 88px
      },
      /* Custom font css settings, used by appending eg: font-rooto */
      fontFamily: {
        roboto: [
          'Roboto',
          ...defaultTheme.fontFamily.sans,
        ],
        helvetica: [
          'Helvetica Neue',
          ...defaultTheme.fontFamily.sans,
        ],
      }
    }
  },
  plugins: [],
}