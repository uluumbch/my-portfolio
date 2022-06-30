/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "body-primary": "#F9F2ED",
        "color-accent": "#3AB0FF",
        "body-dark-mode": "#040508",
        "gray-dark-mode": "#383C48",
      },
      screens: {
        "3xl": "1600px",
      },
    },
  },

  plugins: [],
};
