/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/*.{html,js}"],
  theme: {
    extend: {
      colors: {
      dsblue: '#0090D7',
      dslightblue: '#4BC3FE',
      dsgreen: '#3AC08F',
      dswhite: '#F9FFED',
      dsblack: '#2B2B2B',
      dsbluewhite: '#B9E7FE',
      dslightgreen: '#AAF1D7',
      
      },
      screens: {
      'phone': '360px',
      'tablet': '768px',
      'laptop': '1024px',
      'laptop-s': '1280px',
      'laptop-m': '1440px',
      'desktop-s': '1600px',
      'desktop-m': '1920px',
      },
       backgroundImage: {
        'background': "url('/imgs/dsbg.svg')",
         }
    },
  },
  plugins: [],
}

