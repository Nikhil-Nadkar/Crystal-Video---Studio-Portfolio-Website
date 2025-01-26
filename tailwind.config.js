/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      Roboto: ["Roboto"],
    },

    fontWeight: {
      regular: 400,
      medium: 500,
      bold: 700,
      extrabold: 900,
    },
    extend: {
      colors: {},

      fontFamily: {
        sans: ["Roboto", "sans-serif"],
      },

      colors: {
        customBg: "#F6F7F8",
      },
    },
  },
  plugins: [],
};
