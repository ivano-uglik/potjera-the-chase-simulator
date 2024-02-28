/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {
      keyframes: {
        "wiggle-left": {
          "0%, 100%": { transform: "translate(0px)" },
          "50%": { transform: "translate(-10px)" },
        },
        "wiggle-right": {
          "0%, 100%": { transform: "translate(0px)" },
          "50%": { transform: "translate(10px)" },
        },
      },
      animation: {
        "wiggle-left": "wiggle-left 2s infinite",
        "wiggle-right": "wiggle-right 2s infinite",
      },
    },
  },
  plugins: [],
};
