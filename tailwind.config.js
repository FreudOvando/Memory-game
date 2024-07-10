/** @type {import('tailwindcss').Config} */
export default {

  darkMode: 'class',

  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        Roboto: ['Roboto']
      },
      backgroundImage: {
        'custom-gradient': 'linear-gradient(90deg, rgba(131,58,180,1) 0%, rgba(29,191,253,1) 50%, rgba(252,176,69,1) 100%)',
      },
    },
    },
  plugins: [],
}

