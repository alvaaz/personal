module.exports = {
  purge: ['./src/**/*.ts', './src/**/*.tsx'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Darker Grotesque', '-apple-system', 'BlinkMacSystemFont', 'sans-serif']
      },
      colors: {
        red: {
          lighter: '#f5e3d7',
          default: '#ae3433',
          dark: '#951B1A'
        }
      },
      inset: {
        6: '1.5rem'
      }
    }
  },
  variants: {},
  plugins: []
}
