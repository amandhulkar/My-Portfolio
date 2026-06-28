/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: '#0F172A',
        primary: '#3B82F6',
        secondary: '#6366F1',
        card: '#1E293B',
        accent: '#38BDF8',
        textPrimary: '#FFFFFF',
      },
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
        inter: ['Inter', 'sans-serif'],
        sora: ['Sora', 'sans-serif'],
      },
      boxShadow: {
        glass: '0 8px 32px 0 rgba(3, 7, 18, 0.37)',
        'glass-hover': '0 8px 32px 0 rgba(59, 130, 246, 0.15)',
      },
      backdropBlur: {
        glass: '12px',
      }
    },
  },
  plugins: [],
}
