/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [require('daisyui')],
  daisyui: {
    themes: [
      {
        mytheme: {
          "primary": "#fbcfe8",
          "secondary": "#fda4af",
          "accent": "#86efac",
          "neutral": "#bbf7d0",
          "base-100": "#ffffff",
          "info": "#7dd3fc",
          "success": "#22c55e",
          "warning": "#fde047",
          "error": "#ef4444",
        },
      },
      // Other pre-defined themes can be added here
    ],
}
}
