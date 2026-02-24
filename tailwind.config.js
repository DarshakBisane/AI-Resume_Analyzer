/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        lafemina: ["LaFemina"],
        dmsans: ["'DM Sans'", "sans-serif"],
      },

      keyframes: {
        gradientMove: {
          "0%": { backgroundPosition: "0% 50%" },
          "100%": { backgroundPosition: "300% 50%" },
        },
        bounceScale: {
          "0%, 100%": { transform: "scale(1)" },
          "50%": { transform: "scale(1.3)" },
        },
      },

      animation: {
        gradientMove: "gradientMove 4s linear infinite",
        bounceScale: "bounceScale 1s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};