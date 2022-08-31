/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.tsx"],
  theme: {
    extend: {
      colors: {
        semitransparent: "rgba(255, 255, 255, 0.5)",
      }
    },
  },
};
