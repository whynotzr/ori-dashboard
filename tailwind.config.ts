import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        obsidian: "#090b10",
        surface: "#12151f",
        accent: "#a855f7"
      }
    }
  },
  plugins: []
};

export default config;
