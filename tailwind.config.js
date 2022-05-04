module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./public/**/*.{js,ts,jsx,tsx, jpg, svg, png}",

    "./Components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      sm: "480px",
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

// const defaultTheme = require("tailwindcss/defaultTheme");

// module.exports = {
//   content: [
//     "./src/pages/**/*.{js,ts,jsx,tsx}",
//     "./src/components/**/*.{js,ts,jsx,tsx}",
//   ],
//   theme: {
//     extend: {
//       fontFamily: {
//         sans: ["Inter", ...defaultTheme.fontFamily.sans],
//       },
//     },
//   },
//   variants: {
//     extend: {},
//   },
//   // eslint-disable-next-line global-require
//   plugins: [require("@tailwindcss/typography"), require("@tailwindcss/forms")],
// };
