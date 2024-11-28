import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        main: "#044e83", // Primary color
        sub: "#2eb6e8",  // Secondary color
      },
      screens: {
        xs: "500px",
        sm: "639px",
        md: "769px",
        lg: "1025px",
        "xl-lg": "1100px", 
        xl: "1350px",      
      },
      backgroundImage: {
        "bg-house": "url('/bg_house.jpg')", // Added for custom background image
      },
    },
  },
  plugins: [],
};

export default config;
