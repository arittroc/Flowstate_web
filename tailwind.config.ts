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
        background: "var(--background)",
        foreground: "var(--foreground)",
        alabaster: "#FAFAFA",
        charcoal: "#1A1A1A",
      },
      fontFamily: {
        sans: ["var(--font-inter)", "sans-serif"],
        serif: ["var(--font-playfair)", "serif"],
      },
      animation: {
        "mesh-shift": "mesh 15s ease infinite alternate",
        "liquid-fill": "liquid 2s ease-in-out infinite",
        "liquid-shift": "liquidShift 4s ease infinite",
      },
      keyframes: {
        mesh: {
          "0%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
          "100%": { backgroundPosition: "0% 50%" },
        },
        liquid: {
          "0%": { transform: "translateY(100%)" },
          "50%": { transform: "translateY(0%)" },
          "100%": { transform: "translateY(100%)" },
        },
        liquidShift: {
          "0%, 100%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
        },
      },
    },
  },
  plugins: [],
};
export default config;
