/** @type {import('tailwindcss').Config} */

import lineClamp from "@tailwindcss/line-clamp";

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "1440px",
    },
    extend: {
      fontFamily: {
        sans: ["Barlow Semi Condensed", "sans-serif"],
      },
    },
  },
  plugins: [lineClamp],
};
