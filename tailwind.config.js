/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      spacing: {
        128: "32rem",
        144: "36rem",
      },
      borderRadius: {
        "4xl": "2rem",
      },
      fontSize: {
        large: "5.052rem",
      },
      fontFamily: {
        block: ["Anton", "sans-serif"],
        sans: ["Graphik", "sans-serif"],
        spline: ["Spline Sans Mono", "monospace"],
      },
      colors: {
        black: "#000000",
        darkPurple: "#150050",
        medPurple: "#3F0071",
        lightPurple: "#610094",
        creme: "#FCFDF2",
      },
      backgroundImage: {
        "pack-train": "url('../public/layered-peaks.png')",
        steps: "url('../public/stacked-steps.png')",
        blob: "url('../public/blob-bg.png')",
      },
    },
  },
  plugins: [require("tailwind-scrollbar")],
};
