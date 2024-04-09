module.exports = {
  mode: "jit",
  content: ["./src/**/**/*.{js,ts,jsx,tsx,html,mdx}", "./src/**/*.{js,ts,jsx,tsx,html,mdx}"],
  darkMode: "class",
  theme: {
    screens: { md: { max: "1050px" }, sm: { max: "550px" } },
    extend: {
      colors: {
        gray: { 100: "#f7f7f7", 200: "#f0f0f0", 400: "#b8b8b8", 600: "#767676", 700: "#5d5e60" },
        white: { A700: "#ffffff" },
        indigo: { 400: "#5e69c6" },
        black: { 900: "#1a0a02" },
        deep_orange: { 50: "#ffece2", 700: "#dc5b19", 900: "#cc2610" },
        green: { A700: "#00a441" },
        teal: { 50: "#d7ffe6" },
        red: { 100: "#f3d7d7" },
        amber: { A700: "#f1ae11" },
      },
      boxShadow: {},
      fontFamily: { encodesansexpanded: "Encode Sans Expanded", montserrat: "Montserrat" },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
