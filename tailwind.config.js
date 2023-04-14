/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  mode: 'jit',
  theme: {
    extend: {
      colors: {
        primary: '#fd7102',
        secondary: '#212529',
        tertiary: '#c35a02',
        hover_bg: '#c46d2f',
        unique: '#001d23',
        dimWhite: 'rgba(255, 255, 255, 0.7)',
        dimBlue: '#F0CDE1',
      },
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
      },
    },
    screens: {
      xs: '480px',
      ss: '620px',
      sm: '768px',
      md: '1060px',
      lg: '1200px',
      xl: '1700px',
    },
  },
  plugins: [],
};
