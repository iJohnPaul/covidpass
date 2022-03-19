module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'media',
  theme: {
    extend: {
      colors: {
        'linkedin-blue': {
          DEFAULT: '#0B66C2',
          '50': '#8CC2F8',
          '100': '#79B8F7',
          '200': '#52A3F5',
          '300': '#2C8FF3',
          '400': '#0D7AE9',
          '500': '#0B66C2',
          '600': '#084A8D',
          '700': '#052E58',
          '800': '#021223',
          '900': '#000000'
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
