/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    extend: {
      backgroundImage: {
        "hero-pattern": "url('/images/pattern-light-bg.svg')",
        "footer-texture": "url('/images/pattern-dark-bg.svg')",
      },
      colors: {
        neutral900: "var(--neutral900-color)",
        neutral700: "var(--neutral700-color)",
        neutral200: "var(--neutral200-color)",
        neutral100: "var(--neutral100-color)",
        neutral0: "var(--neutral0-color)",

        salmon500: "var(--light-salmon500-color)",
        salmon100: "var(--light-salmon100-color)",
        salmon50: "var(--light-salmon50-color)",
      },
      fontSize: {
        base: "var(--font-size-base)",
      },
    },
    fontFamily: {
      inter: ["Inter", "system-ui"],
      martian: ["Martian Mono", "system-ui"],
    },
  },
  plugins: [],
};
