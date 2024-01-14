/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      dropShadow: {
        'mondewhite': [
          '5px 5px rgba(219, 234, 254, 0.4)',
          '10px 10px rgba(219, 234, 254, 0.3)',
          '15px 15px rgba(219, 234, 254, 0.2)',
          '20px 20px rgba(219, 234, 254, 0.1)',
          '25px 25px rgba(219, 234, 254, 0.05)'
        ],
        'mondeblue': [
          '5px 5px rgba(30, 64, 175, 0.4)',
          '10px 10px rgba(30, 64, 175, 0.3)',
          '15px 15px rgba(30, 64, 175, 0.2)',
          '20px 20px rgba(30, 64, 175, 0.1)',
          '25px 25px rgba(30, 64, 175, 0.05)'
        ],
        'stamp': '5px 5px 0px 0px rgba(109,40,217)'
      }
    },
  },
  plugins: [],
}
