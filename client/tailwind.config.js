/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "@Crayola": "#5C7AFF",
        "@Chef": "#4A8FE7",
        "@SkyBlue": "#59D2FE",
        "@FlourescentCyan": "#44E5E7",
        "@Aquamarine": "#73FBD3",
      },
      screens: {
        mobile: { min: "281px", max: "1028px" },
        desktop: { min: "1029px" },
      },
    },
  },
  plugins: [],
};
