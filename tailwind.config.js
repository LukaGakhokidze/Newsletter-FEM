/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      primary: "hsl(4, 100%, 67%)",
      dark_slate_grey: " hsl(234, 29%, 20%)",
      charcoal_grey: "hsl(235, 18%, 26%)",
      grey: "hsl(231, 7%, 60%)",
      white: "hsl(0, 0%, 100%)",
    },
    fontFamily: {
      primary: ["Roboto", "sans-serif"],
    },
    fontWeight: {
      bold: 700,
      regular: 400,
    },
    screens: {
      desktop: "1200px",
    },
    boxShadow: {
      custom: "0px 16px 32px 0px",
    },

    extend: {
      fontSize: {
        xs1: "12px",
      },
    },
  },

  plugins: [],
};
