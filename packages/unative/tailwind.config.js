/* eslint-disable no-undef */
import { theme } from "../../default-tailwind-options";
/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: { ...theme },
  plugins: [],
};
