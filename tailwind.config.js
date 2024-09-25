// tailwind.config.js
module.exports = {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        Quicksand: ['Quicksand', 'sans-serif'],
        Rubik: ['Rubik', 'sans-serif'],
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
