const colors = require("tailwindcss/colors");

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#202225",
        secondary: "#5865f2",
        tan: {
          50: "#fbf8f1",
          100: "#f5eedf",
          200: "#e9dabf",
          300: "#dbbf96",
          400: "#d0a778",
          500: "#c1874e",
          600: "#b37243",
          700: "#955c39",
          800: "#784b34",
          900: "#623f2c",
          950: "#341f16",
        },

        gray: {
          900: "#202225",
          800: "#2f3136",
          700: "#36393f",
          600: "#4f545c",
          400: "#d4d7dc",
          300: "#e3e5e8",
          200: "#ebedef",
          100: "#f2f3f5",
        },
      },
    },
  },
  plugins: [],
};
