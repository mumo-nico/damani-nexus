/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'midnight-blue': '#191970',
        'gold': '#FFD700',
        'snow-white': '#FFFAFA',
      },
    },
  },
  plugins: [],
}
