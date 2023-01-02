/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      sans: ["Roboto Flex", "sans-serif"],
      mono: ["Source Code Pro", "monospace"],
    },
    extend: {
      fontFamily: {
        helvetica: ["Helvetica Neue", "sans-serif"],
      },
      backgroundImage: {
        banner: "url('/img/bg-pic.jpg')",
      },
      // animation: {
      //   "pulse-slow": "pulse 3s linear infinite",
      // },
    },
  },
  plugins: [],
};
