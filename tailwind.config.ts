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
        world: "url('/background-world.jpeg')",
      },
      backgroundColor: {
        "gradient-unicorn": "var(--gradient-unicorn)",
      },
      fontFamily: {
        "miriam-libre": "var(--font-miriam-libre)",
      },
      screens: {
        xxs: "460px",
      },
      colors: {
        "primary-orange": "#ff761c",
        green: "#2bad0a",
      },
    },
  },
  plugins: [],
};
export default config;
