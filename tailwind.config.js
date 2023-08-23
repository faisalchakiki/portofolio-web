/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        gray: "#D8D8D8",
        primary: "#21243D",
        purple: "#502DC2",
      },
      backgroundImage: {
        'bg-ig': "url('/assets/img/bg-ig.jpeg')",
      },
      screens: {
        'bigHp': '440px',
        // => @media (min-width: 992px) { ... }
      },
    },
    fontFamily: {
      gloock: ["Gloock", "serif"],
      heebo: ["Heebo", "sans-serif"],
      inter: ["Inter", "sans-serif"],
    },
  },
  plugins: [require("daisyui")],
  darkMode: ['class', '[data-mode="dark"]'],
};
