/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          950: '#0d1117',
          900: '#161b22',
          800: '#21262d',
          700: '#30363d',
          600: '#484f58',
        },
        amber: {
          500: '#f59e0b',
          400: '#fbbf24',
          600: '#d97706',
        }
      },
    },
  },
  plugins: [],
}
