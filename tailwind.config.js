/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: ['./src/*.vue', './src/**/*.{vue,js,ts,jsx,tsx}', './src/components/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: 'class',
  mode: 'jit',
  theme: {
    extend: {
      lineHeight: {
        'extra-loose': '2.5',
        20: '5rem',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
