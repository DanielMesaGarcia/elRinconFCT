/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],

  theme: {
    fontFamily: {
      fira: ["Fira Sans", "sans-serif"],
      gemunu: ["Gemunu Libre", "sans-serif"],
    },

    fontSize: {
      sm: "0.5rem", // 8px
      base: "0.75rem", // 12px
      xl: "1rem", // 16px
      "2xl": "1.25rem", // 20px
      "3xl": "1.75rem", // 28px
      "4xl": "3.5rem", // 56px
    },

    colors: {
      white: "#ffffff",
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
      48: "48px",
      63: "63px",
      124: "124px",
      166: "166px",
      300:"300px",
      310: "310px",
      350: "350px",
      388: "388px",
      390: "390px",
      500: "500px",
      520: "520px",
      534: "534px",
      669: "669px",
      844: "844px",
    },

    minWidth: {
      48: "48px",
    },

    height: {
      40: "40px",
      60: "60px",
      350: "350px",
      388: "388px",
      390: "390px",
      534: "534px",
      669: "669px",
      844: "844px",
      900: "900px",
      960: "960px",
    },

    extend: {
      spacing: {
        4: "4px",
        6: "6px",
        8: "8px",
        10: "10px",
        12: "12px",
        16: "16px",
        18: "18px",
        20: "20px",
        30: "30px",
        32: "32px",
        40: "40px",
        50: "50px",
        60: "60px",
        80: "80px",
        85: "85px",
        90: "90px",
        100: "100px",
        110: "110px",
        120: "120px",
        158: "158px",
      },
    },
  },
  variants: {},
  plugins: [],
};
