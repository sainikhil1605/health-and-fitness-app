/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      backgroundImage: {
        hero: "url('../src/assets/images/hero-image.webp')",
        about: "url('../src/assets/images/about-image.webp')",
      },
      fontFamily: {
        display: ["OSWALD"],
        navbar: ["DMSans"],
      },
    },
  },
  plugins: [],
};
