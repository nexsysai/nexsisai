/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: { sans: ["Poppins", "sans-serif"] },
      animation: {
        marquee: 'marquee 20s linear infinite',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-100%)' },
        }
      },
      colors: {
        primary: {
          DEFAULT: "#1090CB", // Primary color
          light: "#ffffff", // Lighter shade
          dark: "#1E1E1E", // Darker shade
          gray:"#94a3b8"
        },
      },
    },
  },
  plugins: [],
};
