import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        "kd-soft-pink": "#F8BDC4",
        "kd-lime": "#DEF6CA",
        "kd-yellow": "#FAD6A2",
        "kd-yellow-light": "#FCE7C5",
        "kd-hard-pink": "#c7386d",
        "kd-primary": "#002350",
        "kd-primary-light": "#D7EAE0",
        "kd-white": "#ffffff",
        "kd-blue": "#DFECF6",
        "kd-blue-bg": "#CFE3F2",
        "kd-blue-light": "#F4FCEE",
      },
    },
  },
  plugins: [],
};
export default config;
