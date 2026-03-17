/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#0B0710",
        card: "#1A1025",
        accent: {
          light: "#8A2BE2",
          dark: "#6A0DAD",
        },
        primary: "#FFFFFF",
        secondary: "#D1D5DB",
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
