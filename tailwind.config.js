/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          100: "#FDF7F4",
          200: "#F8E8DB",
          300: "#F2E0D0", // Warna awal
          400: "#E3CBB5",
          500: "#D9C8B4", // Warna interpolasi tengah
          600: "#C5B09F",
          700: "#A69580", // Warna akhir
          800: "#887768",
          900: "#64564B",
        },
        accent: {
          100: "#E3F2F9", // Lebih terang dari accent01
          200: "#C7E4F1",
          300: "#AAD7E8",
          400: "#8DC9E0",
          500: "#9AC7D9", // accent01
          600: "#77AEC6",
          700: "#578FA8",
          800: "#3D6F89",
          900: "#2B4F69",
        },
        accentii: {
          100: "#FBE7DF", // Lebih terang dari accent02
          200: "#F7C6B8",
          300: "#F2A692",
          400: "#ED856B",
          500: "#D96236", // accent02
          600: "#B14828",
          700: "#89361E",
          800: "#622514",
          900: "#3B1309",
        },
        neutral: {
          m: "#1C1C1C", // Untuk teks utama
          light: "#3D3D3D",
          lighter: "#676767",
          dark: "#121212",
        },
      },

      fontFamily: {
        nunito: ["Nunito", "serif"],
        merriweather: ["Merriweather Sans", "serif"],
      },
    },
  },
  plugins: [],
};
