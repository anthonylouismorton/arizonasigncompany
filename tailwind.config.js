/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundColor: {
        'custom-color': '#eee',
        'before-yellow': '#ffb612'
      },
      textColor: {
        'header-yellow': '#ffb612'
      }
    },
  },
  plugins: [],
}
