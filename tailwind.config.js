/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        "float-tilt": {
          "0%, 100%": { transform: "translateY(0) rotate(0deg)" },
          "25%": { transform: "translateY(-10px) rotate(-1.5deg)" },
          "50%": { transform: "translateY(-15px) rotate(1.5deg)" },
          "75%": { transform: "translateY(-10px) rotate(-1deg)" },
        },
      },
      animation: {
        "float-tilt": "float-tilt 6s ease-in-out infinite",
      },
    },
  },
  plugins: [],
}