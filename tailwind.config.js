/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      customFont: ['"Roboto"', "sans-serif"],
    },
    extend: {},
  },
  plugins: [],
};

// "BlinkMacSystemFont",
//         "Segoe UI",
//         "Roboto",
//         "Oxygen",
//         "Ubuntu",
//         "Cantarell",
//         "Open Sans",
//         "Helvetica Neue",
//         "sans-serif",