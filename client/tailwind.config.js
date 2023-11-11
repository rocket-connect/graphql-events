/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        "graphql-border": "#E5E5E5",
        "graphql-pink": "#E03C95",
        "graphql-blue": "#2A3746",
        "graphql-text": "#202020",
      },
    },
  },
};
