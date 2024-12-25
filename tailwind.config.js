/* eslint-disable no-undef */
/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  themes: ["light", "dark"],
  theme: {
    extend: {
      colors: {
        logoBlue: "#080652",
        signInColor: "#f5f4f9",
      },
    },
  },
  plugins: [require("daisyui")],
};
