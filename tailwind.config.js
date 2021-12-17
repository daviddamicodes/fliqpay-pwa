module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      width: {
        '470': '470px',
        'mobile': '540px',
      },
      colors: {
        'gray-1': '#F2F2F2',
        'gray-bg': '#fbfbfb',
        'light-blue': '#4406EC',
        'mid-blue': '#4305EB',
        'green-1': '#6FAE75',
      },
      screens: {
        'xxs': '470px',
        'mx-sm': {'max': '470px'}
      },
      fontSize: {
        '1xs': '.65rem',
      },
      maxWidth: {
        '470': '470px',
      },
      minWidth: {
        '3/12': '25%'
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    require('postcss-import'),
    require('tailwindcss'),
    require('autoprefixer'),],
}
