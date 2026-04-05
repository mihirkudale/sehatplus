/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#587c6b',
          light: '#6d8f7e',
          dark: '#3d5c4d',
        },
        background: '#FAF9F6',
        muted: '#f3f4f6',
        charcoal: '#3A332B',
      },
      fontFamily: {
        serif: ['"Instrument Serif"', 'serif'],
        sans: ['"DM Sans"', 'sans-serif'],
      },
      borderRadius: {
        'xl': '12px',
        '2xl': '1rem',
        '3xl': '1.5rem',
      }
    },
  },
  plugins: [],
}
