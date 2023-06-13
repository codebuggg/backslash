/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        blue: {
          950: '#0c3493',
        },
        green: {
          950: '#04f774',
        },
      }
    },
  },
  plugins: [],
}

