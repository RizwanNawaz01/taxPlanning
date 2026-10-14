/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./app/components/**/*.{js,vue,ts}",
    "./app/layouts/**/*.vue",
    "./app/pages/**/*.vue",
    "./app/plugins/**/*.{js,ts}",
    "./app/app.vue",
    "./app/error.vue",
  ],
  theme: {
    screens: {
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
      '2xl': '1440px',
    },
    extend: {
      colors: {
        primary: '#071721',
        secondary: '#152238',
        dark: {
          DEFAULT: '#0B121A',
          card: '#0C151E',
          header: '#1E2E45',
          footer: '#0B121A',
          overlay: '#0B162C'
        },
        surface: {
          DEFAULT: '#F8F9FA',
          light: '#FBFBFB',
          muted: '#F4F4F4',
          subtle: '#F4F5F6'
        },
        lime: {
          400: '#B6FC4E',
          500: '#A4E346',
          accent: '#8EE62B'
        },
        whatsapp: '#25D366'
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'sans-serif'],
      },
      container: {
        center: true,
        padding: '1.5rem',
        screens: {
          sm: '640px',
          md: '768px',
          lg: '1024px',
          xl: '1280px',
          '2xl': '1440px',
        },
      }
    },
  },
  plugins: [],
}
