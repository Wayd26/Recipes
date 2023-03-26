/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'primary': ['IBM Plex Mono', 'monospace'],
        'secondary': ['Kumbh Sans', 'sans-serif'],
        'tertiary': ['Rubik Iso', 'cursive'],
      },
      colors: {
        primary: '#94ae89',
        secondary: '#A8BCA1',
        tertiary: '#D5FFD9',
      },
    },
  },
  plugins: [],
}
