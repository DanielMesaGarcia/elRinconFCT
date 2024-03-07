/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js, jsx, ts, tsx}"],

  theme: {
    fontFamily: {
      'fira': ['Fira Sans', 'sans-serif'],
      'gemunu': ['Gemunu Libre', 'sans-serif'],
    },
    fontSize: {
      sm: "0.5rem",
      base: "0.75rem",
      xl: "1rem",
      "2xl": "1.25rem",
      "3xl": "1.75rem",
      "4xl": "3.5rem",
    },
    colors: {
      white: "ffffff",
      grey: "#f5f5f5",
      darkGrey: "#373737",
      red: "#ffc2c2",
      orange: "#ffeac2",
      pink: "#ffc2f5",
      blue: "#c2fbff",
      purple: "#e4c2ff",
      green: "#e0ffc2",
      yellow: "#f8efa6",
      transparent: "transparent",
    },
    width: {
      844: "844px",
      669: "669px",
      534: "534px",
      390: "390px",
      388: "388px",
      350: "350px",
    },
    height: {
      844: "844px",
      669: "669px",
      534: "534px",
      390: "390px",
      388: "388px",
      350: "350px",
    },

    extend: {
      spacing: {
        6: "6px",
        10: "10px",
        18: "18px",
        20: "20px",
        30: "30px",
        40: "40px",
      },
    },
  },

  plugins: [],
};
