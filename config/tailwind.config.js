const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: [
    './public/*.html',
    './app/helpers/**/*.rb',
    './app/javascript/**/*.js',
    './app/views/**/*',
  ],
  theme: {
    colors:{
      sunset: '#F65B4E',
      twilight: '#29319F',
      morning: '#FFBA7C',
      fog: '#FFDEEF',
      eclipse: '#573353',
    },
    extend: {
      fontFamily: {
        'manrope': ["Manrope", 'sans-serif'],
        'klasik': ["Klasik", 'sans-serif'],
      },

    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
    require('@tailwindcss/container-queries'),
  ]
}
