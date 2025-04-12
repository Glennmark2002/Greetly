/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        brick: {
          '0%, 80%, 100%': { transform: 'scaleY(0.4)' },
          '40%': { transform: 'scaleY(1)' },
        },
      },
      animation: {
        brick: 'brick 1.2s infinite ease-in-out',
      },
    },
  },
  plugins: [require('daisyui')],
}
