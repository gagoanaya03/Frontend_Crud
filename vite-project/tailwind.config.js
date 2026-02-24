/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        dark: {
          900: '#0a0a0f',
          800: '#12121a',
          700: '#1a1a2e',
          600: '#22223a',
          500: '#2a2a40',
          400: '#3a3a55',
        },
        neon: {
          cyan: '#00f0ff',
          purple: '#bb44ff',
          pink: '#ff2d95',
          green: '#39ff14',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        neon: '0 0 15px rgba(0, 240, 255, 0.15)',
        'neon-lg': '0 0 30px rgba(0, 240, 255, 0.2)',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(-8px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
      animation: {
        fadeIn: 'fadeIn 0.3s ease-out',
      },
    },
  },
  plugins: [],
}
