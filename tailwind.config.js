module.exports = {
  content: [
    './Components/**/*.{js,ts,jsx,tsx}',
    './app/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    screens: {
      // NOTE: sm is set to 360px (non-standard) to target small phones early.
      // Tailwind's default is 640px. Keep this in mind when using sm: prefixes.
      sm: '360px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    extend: {
      fontFamily: {
        dance: ['"Dancing Script"', 'serif'],
      },
    },
  },
  plugins: [],
};
