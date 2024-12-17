/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        asap: ["Asap Variable", "sans-serif"],
        montserrat: ["Montserrat Variable", "sans-serif"],
      },
      colors: {
        azul: "#001e62",
        morado: "#6e2b62",
        rojo: "#a50034",
        amarillo: "#ffc845",
        crema: "#fcd299",
        gris: "#dde5ed",
      },
    },
  },
  plugins: [],
};
