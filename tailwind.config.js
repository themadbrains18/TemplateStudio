/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      xsm: '575px',
      sm: '640px',
      md: '768px',
      xmd: '991px',
      lg: '1024px',
      xl: '1200px',
    },
    extend: {
      colors: {
        'primary': '#AD54F2',
        'primary-100': '#BA6EF4',
        'primary-200': '#C687F6',
        'primary-300': '#D2A1F8',
        'primary-400': '#DEBBFA',
        'primary-500': '#E8CFFB',
        'primary-600': '#EFDDFC',
        'primary-700': '#F5EAFD',
        'primary-800': '#FBF6FE',
        'primary-900': '#FDFCFF',

        'secondary': '#7854F7',
        'secondary-dark': '#9E88B2',

        // 'text-main': 'linear-gradient(128.7deg, #7854F7 -287.43%, #110833 100%)',
        'light-text': '#5D5775',
        'main-text': '#110833',
        'dark-text': '#282046',

        'back-white': '#FAFAFA',
        'back-black': '#0D0C0D',
        'icon-bg':'#FFF6FF',

        'divider-main': '#F2EEFE',
        'divider-light': '#EFEEF1',

        'link-main': '#1496F5',

        'dark-blue': '#8a43c2'
      },

      fontFamily: {
        'open-sans': ['Open Sans', 'sans-serif'],
        'inter': ['Inter', 'sans-serif'],
      },
      backgroundImage: {
        'hero-bg-mob': "url('../public/images/herobgmob.png')",
        'hero-bg': "url('../public/images/heroBigBg.png')",
        'footer-texture': "url('/public/footer-texture.png')",
        'pdp-banner': "url('../public/images/pdpBanner.png')",
      },
      boxShadow: {
        'btnShadow': '0px 8px 20px rgba(120, 84, 247, 0.06)',
      }

    },
  },



  plugins: [],
}

