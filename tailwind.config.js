/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'ypora-green': '#065f46',
        'ypora-black': '#111827',
        'ypora-red':   '#ef4444',
      },
    },
  },
  plugins: [],
}