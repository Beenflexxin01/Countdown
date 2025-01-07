/** @type {import('tailwindcss').Config} */
// eslint-disable-next-line import/no-anonymous-default-export
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    fontFamily: {
      sans: 'sans-seriff, monospace',
    },
    extend: {
      height: {
        screen: '100dvh',
      },
    },
    screens: {
      mobileL: '425px',
      mobileM: '375px',
      mobileS: '320px',

      tablet: '768px',

      laptop: '1024px',

      desktop: '1280px',
    },

    height: {
      '100vh': '100vh',
      100: '100%',
      20: '20%',
      30: '30%',
      50: '50%',
      '30vh': '30vh',
      '20vh': '20vh',
      '15vh': '15vh',
      '5vh': '5vh',
      '50vh': '50vh',
    },
    fontSize: {
      '1rem': '1rem',
      '1.2rem': '1.2rem',
      '1.4rem': '1.4rem',
      '1.5rem': '1.5rem',
      '1.8rem': '1.8rem',
      '2rem': '2rem',
      '2.5rem': '2.5rem',
      '3rem': '3rem',
      '3.5rem': '3.5rem',
      '4rem': '4rem',
    },

    width: {
      '100vw': '100vw',
      100: '100%',
      80: '80%',
      95: '95%',
      50: '50%',
      '30vw': '30vw',
      '20vw': '20vw',
      '50vw': '50vw',
      '80vw': '80vw',
    },

    borderRadius: {
      none: '0',
      sm: '0.5rem',
      DEFAULT: '0.25rem',
      DEFAULT: '4px',
      md: '0.375rem',
      lg: '9rem',
      full: '9999px',
      large: '12px',
    },

    blur: {
      xs: '0.5px',
    },

    brightness: {
      25: '.25',
      40: '.45',
      50: '.85',
      175: '175',
    },
  },
  plugins: [],
};
