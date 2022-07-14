const {
  fontFamily,
} = require("tailwindcss/defaultTheme");
const familyBase = "-apple-system,BlinkMacSystemFont,Segoe UI,Helvetica,Arial,sans-serif,Apple Color Emoji,Segoe UI Emoji";
module.exports = {
  mode: "jit",
  purge: [
    "./src/components/**/*.{js,ts,jsx,tsx}",
    "./src/pages/**/*.{js,ts,jsx,tsx}",
  ],
  fontFamily: {
    ...fontFamily,
    base: familyBase,
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      maxWidth: {
        5: "1.25rem",
        10: "2.5rem",
        20: "5rem",
        40: "10rem",
      },
    },
  },  
  variants: {
    extend: {
      backgroundColor: ["even", "odd"],
      borderWidth: ["last", "focus"],
      margin: ["last", "first"],
      padding: ["last", "first"],
    },
  },
  plugins: [require("tailwindcss-rtl")],
};
