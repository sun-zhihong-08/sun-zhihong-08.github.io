import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: {
          DEFAULT: "#0A0A0F",
          elevated: "#111118",
          card: "#12121A",
        },
        border: {
          DEFAULT: "#1A1A2E",
          light: "#2A2A40",
        },
        text: {
          DEFAULT: "#FFFFFF",
          secondary: "#A0A0B0",
          muted: "#6B6B7B",
        },
        accent: {
          DEFAULT: "#3B82F6",
          light: "#60A5FA",
          glow: "rgba(59,130,246,0.25)",
        },
      },
      fontFamily: {
        sans: [
          "-apple-system",
          "BlinkMacSystemFont",
          "Segoe UI",
          "Inter",
          "PingFang SC",
          "Hiragino Sans GB",
          "Microsoft YaHei",
          "sans-serif",
        ],
      },
      borderRadius: {
        DEFAULT: "16px",
        sm: "8px",
      },
      transitionTimingFunction: {
        smooth: "cubic-bezier(0.22, 1, 0.36, 1)",
      },
    },
  },
  plugins: [],
} satisfies Config;
