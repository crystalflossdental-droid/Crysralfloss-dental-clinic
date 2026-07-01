/** @type {import('tailwindcss').Config} */
import tailwindcssLineClamp from '@tailwindcss/line-clamp';

export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#f0f9ff',  // Sky-50
          100: '#e0f2fe', // Sky-100 (Light Blue)
          200: '#bae6fd', // Sky-200
          300: '#7dd3fc', // Sky-300
          400: '#38bdf8', // Sky-400
          500: '#0ea5e9', // Sky-500 (Vibrant Blue)
          600: '#0284c7', // Sky-600 (Modern Blue Primary)
          700: '#0369a1', // Sky-700
          800: '#075985', // Sky-800
          900: '#0c4a6e', // Sky-900 (Deep Navy)
        },
        secondary: {
          50: '#f8fafc',
          100: '#f1f5f9',
          200: '#e2e8f0',
          300: '#cbd5e1',
          400: '#94a3b8',
          500: '#64748b',
          600: '#475569',
          700: '#334155',
          800: '#1e293b',
          900: '#0f172a',
        },
        accent: {
          50: '#f5f3ff',
          100: '#ede9fe',
          200: '#ddd6fe',
          300: '#c4b5fd',
          400: '#a78bfa',
          500: '#8b5cf6',
          600: '#7c3aed', // Accent Purple
          700: '#6d28d9',
          800: '#5b21b6',
          900: '#483E7C',
        },
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        heading: ['Poppins', 'sans-serif'],
      },
      boxShadow: {
        'soft': '0 4px 6px -1px rgba(0, 0, 0, 0.05), 0 2px 4px -1px rgba(0, 0, 0, 0.03)',
        'hover': '0 12px 20px -3px rgba(2, 132, 199, 0.08), 0 4px 6px -2px rgba(2, 132, 199, 0.04)',
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
    },
  },
  plugins: [tailwindcssLineClamp],
};