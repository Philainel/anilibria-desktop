/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          primary: "#D44D5C",
          light: "#F5E9E2",
          dark: "#03000A",
          semidark: "#131217"
        },
      },
      fontFamily: {
        sans: ['Roboto', 'sans-serif'],
        lines: ['Flow Circular']
      }
    },
  },
  plugins: [],
};
