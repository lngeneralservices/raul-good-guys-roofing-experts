// tailwind.config.ts
import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#2C3E50",
        secondary: "#F2F4F7",
        accent: "#B8924B",
        background: "#FFFFFF",
        surface: "#F9FAFB",
        foreground: "#34495E",
        muted: "#62757F",
      },
      fontFamily: {
        heading: ["Playfair Display", "sans-serif"],
        body: ["Merriweather", "sans-serif"],
      },
      borderRadius: {
        DEFAULT: "0.5rem",
      },
      maxWidth: {
        page: "1024px",
      },
    },
  },
  plugins: [],
};

export default config;