import type { Config } from "tailwindcss";
const { nextui } = require("@nextui-org/react");

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./index.html",
    "./*.{js,ts,jsx,tsx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "var(--primary-color)", // Maps to --primary-color
        secondary: "var(--secondary-color)", // Maps to --secondary-color
        tertiary: "var(--tertiary-color)", // Maps to --tertiary-color
        quaternary: "var(--multi-color)", // Maps to --multi-color
        black: "var(--black)", // Maps to --black
        white: "var(--white)", // Maps to --white
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      backgroundColor: {
        "custom-bg": "#2b46801f", // Custom background color
      },
      container: {
        center: true,
        padding: {
          DEFAULT: "1rem",
          sm: "2rem",
          lg: "2rem",
          xl: "2rem",
          "2xl": "30px",
          "3xl": "3rem",
        },
        screens: {
          sm: "100%",
          md: "100%",
          lg: "1024px",
          xl: "1280px",
          "2xl": "1536px",
          "3xl": "1600px",
          // '4xl': '1920px',
        },
      },
      fontFamily: {
        gordita: ["Gordita", "sans-serif"], // Uses the Gordita font defined in @font-face
        spaceGrotesk: ["var(--Font-SpaceGrotesk)", "sans-serif"],
        poppins: ["var(--Font-Poppins)", "sans-serif"],
      },
      fontSize: {
        xs: ["0.75rem", { lineHeight: "1rem" }], // 12px
        sm: ["0.875rem", { lineHeight: "1.25rem" }], // 14px
        base: ["1rem", { lineHeight: "1.5rem" }], // 16px
        lg: ["1.125rem", { lineHeight: "1.75rem" }], // 18px
        xl: ["1.25rem", { lineHeight: "1.75rem" }], // 20px
        "2xl": ["1.5rem", { lineHeight: "2rem" }], // 24px
        "3xl": ["1.875rem", { lineHeight: "2.25rem" }], // 30px
        "4xl": ["2.25rem", { lineHeight: "2.5rem" }], // 36px
        "5xl": ["3rem", { lineHeight: "1" }], // 48px
        "6xl": ["3.75rem", { lineHeight: "1" }], // 60px
        "7xl": ["4.5rem", { lineHeight: "1" }], // 72px
        "8xl": ["6rem", { lineHeight: "1" }], // 96px
        "9xl": ["8rem", { lineHeight: "1" }], // 128px
        "custom-large": ["10rem", { lineHeight: "1" }], // Custom 160px
        "custom-small": ["0.625rem", { lineHeight: "1" }], // Custom 10px
      },
    },
  },
  darkMode: "class",
  plugins: [nextui()],
};

export default config;
