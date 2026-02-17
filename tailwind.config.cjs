/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#1F73C9',
          50: '#EFF6FF',
          100: '#DBECFF',
          200: '#B7D9FF',
          300: '#86BEFF',
          400: '#4C9CFF',
          500: '#1F73C9',
          600: '#155A9C',
          700: '#0F4476'
        },
        surface: {
          DEFAULT: '#F5F8FC'
        },
        ink: {
          DEFAULT: '#111827'
        }
      },
      boxShadow: {
        soft: '0 12px 30px rgba(17,24,39,0.06)',
        card: '0 10px 26px rgba(17,24,39,0.08)'
      },
      borderRadius: {
        xl2: '20px'
      }
    }
  },
  plugins: []
};
