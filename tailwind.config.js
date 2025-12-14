/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        background: "#0A0F1F",
        accent: "#00FF7F",
        text: "#FFFFFF",
        muted: "rgba(255,255,255,0.7)",
      },
      fontFamily: {
        main: ['"IBM Plex Sans Arabic"', "sans-serif"],
      },
    },
  },
  plugins: [],
};
