module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./public/**/*.{js,ts,jsx,tsx, jpg, svg, png}",

    "./Components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      sm: "360px",
      md: "768px",
      lg: "976px",
      xl: "1440px",
    },
    extend: {
      fontFamily: {
        dance: "'Dance', serif",
      },
    },
    plugins: [],
  },
};