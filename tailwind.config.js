/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'customBlue': '#BEE4F1',
        'customWhite': '#FBFCFE',
        'customGray': '#D6DCE2',
        'customBlue-1': '#57A6B9',
      },
    },
  },
  plugins: [],
}
