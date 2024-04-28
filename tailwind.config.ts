import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      container:{
        padding:'20px',
        screens:{
          xl: '1440px',
          lg:"1200px",
          md:"1024px",
          sm:"768px",
          xs:"640px"
        }
      },
      colors: {
        primary:"#1FBA4A",
        secondary:"#0A0A0A",
        greyBg:"#F6F8FA",
        inputB:"rgb(31, 186, 74)",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
export default config;
