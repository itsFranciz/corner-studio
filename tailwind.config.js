// tailwind.config.js
module.exports = {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
     
      fontFamily: {
        quicksand: ['Quicksand', 'sans-serif'],
        rubik: ['Rubik', 'sans-serif'],
      },
      fontSize: {
        'h1': ['48px', '1.2'], // 48px size with 1.2 line height
        'h2': ['32px', '1.2'],
        'h3': ['24px', '1.2'],
        'h4': ['16px', '1.2'],
        'h5': ['14px', '1.2'],
        'h6': ['12px', '1.2'],
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
