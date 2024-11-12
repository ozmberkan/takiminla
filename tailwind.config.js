/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        inter: ["Inter", "sans-serif"],
        nunito: ["Nunito", "sans-serif"],
        spartan: ["League Spartan", "sans-serif"],
      },
      colors: {
        primary: "#2dc552",
        primaryDark: "#0B3B17",
        darkBg: "#161618",
      },
      dropShadow: {
        "3xl": "0 35px 35px rgba(0, 0, 0, 0.25)",
        "4xl": [
          "0 35px 35px rgba(0, 0, 0, 0.25)",
          "0 45px 65px rgba(0, 0, 0, 0.15)",
        ],
      },
      backgroundImage: {
        mainBg: "url('/src/assets/homePage.svg')",
        authBg: "url('/src/assets/authPage.svg')",
      },
    },
  },
  plugins: [],
};
