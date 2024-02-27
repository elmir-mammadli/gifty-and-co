module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        'poppins': ['Poppins', 'sans-serif'],
        'oswald': ['Oswald', 'sans-serif']
      },
      screens: {
        sm: '640px',
        md: '868px',
        lg: '1024px',
        xl: '1280px',
        rD: '1360px',
        '2rD': '1440px',
        xxl: '1600px',
        '3xl': '1920px'
      }
    },
  },
  plugins: [],
}