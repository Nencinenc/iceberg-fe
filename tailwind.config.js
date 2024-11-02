/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,ts,jsx,tsx}", "./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primaryBlue: "#003054",
        startBlue: "#0f0c29",
        midBlue: "#302b63",
        endBlue: "#24243e",
      },
    },
  },
  plugins: [],
};
