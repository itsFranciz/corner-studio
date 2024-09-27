// tailwind.config.js
module.exports = {
  content: [
    "./node_modules/flowbite/**/*.js",
    './index.html',
    './src/**/*.{vue,js,ts,jsx,tsx}'
  ],

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
        "sunglow" : "#FFD166",
        "crayola": "#EF476F"
      },
      container:{
        padding: "2rem",
        center: true,
      },
      screens:{
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: '1280px',
        xt: '1536px'
      },
      textShadow: {
        sm: '6px 4px var(--tw-shadow-color)'
      },
    },
  },

  variants: {
    extend: {},
  },

  plugins: [
    require('flowbite/plugin'),

    function ({ addUtilities }) {
      addUtilities({
        '.text-stroke': {
          '-webkit-text-stroke': '7px #183238',
          'paint-order': 'stroke fill',
        },
        '.max-w-60-ch': {
        'max-width': '67ch'
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
