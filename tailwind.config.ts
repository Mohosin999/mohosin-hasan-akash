import type { Config } from "tailwindcss";
import plugin from "tailwindcss/plugin";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        background: {
          DEFAULT: "#0a0a0a",
          light: "#ffffff",
        },
        surface: {
          DEFAULT: "#161616",
          light: "#f4f4f5",
        },
        border: {
          DEFAULT: "#262626",
          light: "#e4e4e7",
        },
        primary: {
          DEFAULT: "#ededed",
          light: "#18181b",
        },
        secondary: {
          DEFAULT: "#a1a1a1",
          light: "#52525b",
        },
        accent: {
          DEFAULT: "#22d3ee",
          alt: "#3b82f6",
        },
      },
      fontFamily: {
        sans: ["var(--font-geist-sans)", "Inter", "system-ui", "sans-serif"],
        mono: ["var(--font-geist-mono)", "JetBrains Mono", "ui-monospace", "monospace"],
      },
      maxWidth: {
        content: "72rem",
      },
    },
  },
  plugins: [
    plugin(function ({ addVariant }) {
      addVariant("light", ".light &");
    }),
  ],
};
export default config;
