module.exports = {
  content: [
    "./src/**/*.{js,jsx,,ts,tsx}",
  ],
  theme: {
    screens: {
      'mobile': '300px',

      'tablet': '470px',
      // => @media (min-width: 640px) { ... }

      'laptop': '1024px',
      // => @media (min-width: 1024px) { ... }

      'desktop': '1280px',
      // => @media (min-width: 1280px) { ... }
    },
    extend: {
      colors: {
        'SosTagBlue' : '#19224F',
        'SosTagYellow' : '#FFCE40',
        'SosTagYellowLight' : '#FFE7A0',
        'SosTagRed' : '#EC3E55',
        'SosTagRedLight' : '#F69FAB',
        'SosTagGrey' : '#DEDEDE',
      },
      backgroundSize: {
        '30%' : '30%',
      }
      // keyframes: {
      //   switchOff: {
      //     '0%': { transform: 'translate(-100%, -50%)', left: 'calc(100% - 3px)'},
      //     '100%': { transform: 'translate(0, -50%)', left: '3px', backgroundColor: 'var(--SosTagGrey)'},
      //   }
      // },
      // animation: {
      //   switchOff: 'switchOff .5s ease-in-out forwards',
      // }
    },
  },
  plugins: [],
}