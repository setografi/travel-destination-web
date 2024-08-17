/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        bluePrimary: "hsl(214, 57%, 51%)",
        whiteText: "hsl(0, 0%, 100%)",
      },
      fontFamily: {
        lexendDeca: ["Lexend Deca", "sans-serif"],
        ibmPlexmono: ["IBM Plex Mono", "monospace"],
      },
    },
  },
  plugins: [],
};
