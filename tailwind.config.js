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
      colors:{
        "weather-primary" :"#00668A",
        "weather-secondary" : "#004E71",
        "mint-green": "#CBF3F0",
        "sea-blue": "#183238",
        "orange" : "#F79300",
        "papaya-whip" : "#FFEFE0",
        "cyan" : "#CBF3F0",
        "sunglow" : "#FFD166"
      },
      container:{
        padding: "2rem",
        center: true,
      },
      screens:{
        sm: "640px",
        md: "768px"
      },
      textShadow: {
        sm: '6px 4px var(--tw-shadow-color)',
        DEFAULT: '0 2px 4px var(--tw-shadow-color)',
        lg: '0 8px 16px var(--tw-shadow-color)',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    function ({ addUtilities }) {
      addUtilities({
        '.text-stroke': {
          '-webkit-text-stroke': '7px #183238',
          'paint-order': 'stroke fill',
        },
      });
    },
    function ({ matchUtilities, theme }) {
      matchUtilities(
        {
          'text-shadow': (value) => ({
            textShadow: value,
          }),
        },
        { values: theme('textShadow') }
      )
    },
  ],
}
