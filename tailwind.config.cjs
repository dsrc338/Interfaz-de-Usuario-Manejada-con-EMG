/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      text: {
        size: "100%",
      },
    },
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
    },
    extend: {
      colors: {
        primary: "var(--color-primary)",
        secondary: "var(--color-secondary)",
        // ...
      },
    },

    fontFamily: {
      display: ["Gilroy", "sans-serif"],
      body: ["Graphik", "sans-serif"],
    },
    borderWidth: {
      default: "1px",
      0: "0",
      2: "2px",
      4: "4px",
    },

    extend: {
      colors: {
        cyan: "#9cdbff",
      },
      spacing: {
        96: "24rem",
        128: "32rem",
      },
    },
  },
  plugins: [],
};
