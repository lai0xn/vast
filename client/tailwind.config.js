/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'burpl': '#4318ff',
        'bluu': '#1b2559',
        'clay': '#a3aed0',
        'clay-light': '#a9afe4',
        'pale': '#F4F7FE',
        'error': '#db5252',
        'success': '#1bb876',
      },
      fontFamily: {
        'sans': ['DM Sans', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

