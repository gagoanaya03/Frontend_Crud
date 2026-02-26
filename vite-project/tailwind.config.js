/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
      },
      colors: {
        dark: {
          300: '#4b5563',
          400: '#374151',
          500: '#2d3748',
          600: '#1e293b',
          700: '#1a202c',
          800: '#111827',
          900: '#0b0f19',
        },
        neon: {
          cyan: '#22d3ee',
        },
      },
      boxShadow: {
        neon: '0 0 12px rgba(34, 211, 238, 0.15)',
      },
    },
  },
  plugins: [],
}
