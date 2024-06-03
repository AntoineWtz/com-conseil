module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  theme: {
    extend: {
      fontFamily: {
        lato: ['Lato', 'sans-serif'],
        cardo: ['Cardo', 'serif'],
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
