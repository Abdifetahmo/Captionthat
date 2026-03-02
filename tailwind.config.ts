import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        background: "#0f0f0f",
        card: "#171717",
        border: "#2b2b2b"
      },
      boxShadow: {
        soft: "0 12px 40px rgba(0,0,0,0.35)"
      },
      keyframes: {
        fadeSlideIn: {
          "0%": { opacity: "0", transform: "translateY(8px)" },
          "100%": { opacity: "1", transform: "translateY(0)" }
        }
      },
      animation: {
        fadeSlideIn: "fadeSlideIn 280ms ease-out"
      }
    }
  },
  plugins: []
};

export default config;
