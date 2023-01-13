module.exports = {
  content: ['index.html', './src/**/*.{js,jsx,ts,tsx,vue,html}'],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: '3rem',
        sm: '5rem',
        md: '6rem',
        lg: '7rem',
        xl: '8rem',
        '2xl': '9rem'
      }
    },
    extend: {
      fontFamily: {
        cursive: ['Lobster']
      },
      colors: {
        primary: '#9496ff'
      }
    }
  },
  plugins: []
}
