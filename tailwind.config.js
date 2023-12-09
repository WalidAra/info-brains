/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      gridTemplateRows: {
        auto1fr: "auto 1fr",
      },
      fontSize: {
        "4xl": "3.75rem",
        "5xl": "3rem",
      },
      colors: {
        primary: "#0c1120",
        secondary: "#17a8e6",
        third: "#1f293a",
        four: "#1f293a",
      },
    },
  },
  plugins: [],
};
