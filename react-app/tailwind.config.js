/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  prefix: "tw-", // Todas las clases requerirán tw-
  important: "#tailwind-container", // Solo afecta dentro de este contenedor
  theme: {
    extend: {},
  },
  plugins: [],
};
