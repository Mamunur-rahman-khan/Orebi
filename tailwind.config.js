/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      maxWidth: {
        'headerContainer': '1444px',
      },
      fontFamily: {
        'dm': ['DM Sans'],
      },
      colors: {
        'menuText': '#767676',
        'menuTextHov': '#262626',
        'categoryBg': '#F5F5F3',
        'infoText': '#6D6D6D',
        'bgFooter': '#F5F5F3',
        'bgBorderRight': '#979797',
      },
      width: {
        'logoW': '30%',
        'menuW': '70%',
      },
      backgroundImage: {
        'banneerBg': "url('/src/assets/banner.png')",
      },
    },
  },
  plugins: [],
}

