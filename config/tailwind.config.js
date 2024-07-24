module.exports = {
  content: [
    './public/*.html',
    './app/helpers/**/*.rb',
    './app/javascript/**/*.js',
    './app/views/**/*.{erb,haml,html,slim}'
  ],
  theme: {
    extend: {
      fontFamily: {
        'manrope': ["Manrope", 'sans-serif'],
        'klasik': ["Klasik", 'sans-serif'],
      },
      colors: {
        sunset: '#F65B4E',
        twilight: '#29319F',
        morning: '#FFBA7C',
        fog: '#FFDEEF',
        eclipse: '#573353',
        screen: '#FFF3E9',
        calm: '#FDA759',
      },
    },
  },
  variants: {},
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
    require('@tailwindcss/container-queries'),
  ]
}
