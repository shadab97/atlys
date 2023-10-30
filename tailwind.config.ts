import type { Config } from "tailwindcss";
const colors = require("tailwindcss/colors");

const config: Config = {
  content: [
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {},
    colors: {
      ...colors,
      bg_dark: "#13131A",
      bg_dark_light: "#27292D",
      blue: "#4996FF",
      grey_100: "#C5C7CA",
      grey_200: "#35373B",
      grey_300: "#7F8084",

      grey_500: "#6B6C70",
      grey_600: "#191920",
    },
  },
  plugins: [],
};
export default config;
