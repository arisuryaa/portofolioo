/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        background: "#F9FBFA",
        secondary: "#e3e57c",
        primary: "#000646",
        button: "#12D188",
        contact: "#35389D",
      },
      fontFamily: {
        body: ["poppins"],
      },
      spacing: {
        wt: "10px", // Sesuaikan dengan tinggi dan lebar yang Anda inginkan
      },
    },
  },
  darkMode: "class",

  plugins: [],
};
