/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        kong: "#FBD71E",
      },
      keyframes: {
        menuOpen: {
          "0%": { right: "-100vw" },
          "100%": { right: "0" },
        },
        menuClose: {
          "0%": { right: "0" },
          "100%": { right: "-100vw" },
        },
        fadeIn: {
          from: { opacity: 0 },
          to: { opacity: 1 },
        },
        fadeOut: {
          from: { opacity: 1 },
          to: { opacity: 0 },
        },
      },
      animation: {
        "menu-open": "menuOpen 300ms ease-in-out",
        "menu-close": "menuClose 300ms ease-in-out",
        "fade-out": "fadeOut 500ms ease-in-out",
        "fade-in": "fadeIn 500ms ease-in-out",
      },
      fontFamily: {
        roboto: "Roboto",
        poppins: "poppins",
      },
    },
  },
  plugins: [],
};
