/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          primary: "#D44D5C",
          light: "#F5E9E2",
          dark: "#0B0014",
        },
      },
    },
  },
  plugins: [],
};
