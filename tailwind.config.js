/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      screens:{
        'md':'768px',
        'sk':{'min':'320px','max':'640px'},
        'jk':{'min':'640px','max':'768px'},
        'xs': '320px',
        'xl': '1280px',
        '2xl': '1536px',
      },
    },
  },
  plugins: [],
}