import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        // --- ADDED THESE TO FIX THE CSS ERRORS ---
        border: "var(--border)",
        input: "var(--input)",
        ring: "var(--ring)",
        background: "var(--background)",
        foreground: "var(--foreground)",
        // -----------------------------------------

        "primary-fixed-dim": "#c1cab3",
        "on-secondary": "#ffffff",
        "surface": "#fbf9f4",
        "inverse-on-surface": "#f2f1ec",
        "inverse-surface": "#30312e",
        "on-primary": "#ffffff",
        "on-background": "#1b1c19",
        "tertiary-container": "#827261",
        "secondary-container": "#fecdae",
        "tertiary-fixed": "#f4dfcb",
        // background: "#fbf9f4", // Commented out to use the variable above
        "secondary": "#7a573e",
        "secondary-fixed-dim": "#ecbd9e",
        "on-tertiary-fixed-variant": "#524436",
        "tertiary": "#68594a",
        "outline-variant": "#c6c7be",
        "surface-tint": "#59614e",
        "on-error": "#ffffff",
        "on-tertiary-container": "#fffbff",
        "surface-container-highest": "#e4e2dd",
        "error-container": "#ffdad6",
        "surface-dim": "#dbdad5",
        "surface-variant": "#e4e2dd",
        "on-surface": "#1b1c19",
        "on-tertiary": "#ffffff",
        "surface-container": "#f0eee9",
        "outline": "#767870",
        "on-secondary-fixed": "#2e1503",
        "surface-container-low": "#f5f3ee",
        "secondary-fixed": "#ffdcc6",
        "error": "#ba1a1a",
        "on-secondary-container": "#79553d",
        "on-primary-container": "#f9ffec",
        "on-secondary-fixed-variant": "#603f28",
        "on-tertiary-fixed": "#241a0e",
        "primary": "#565f4c",
        "surface-container-high": "#eae8e3",
        "primary-fixed": "#dde6ce",
        "surface-bright": "#fbf9f4",
        "primary-container": "#6f7863",
        "on-primary-fixed": "#161e0f",
        "inverse-primary": "#c1cab3",
        "tertiary-fixed-dim": "#d7c3b0",
        "surface-container-lowest": "#ffffff",
        "on-error-container": "#93000a",
        "on-surface-variant": "#454840",
        "on-primary-fixed-variant": "#414938"
      },
      fontFamily: {
        serif: ["var(--font-noto-serif)"],
        sans: ["var(--font-plus-jakarta-sans)"],
        headline: ["var(--font-noto-serif)"],
        body: ["var(--font-plus-jakarta-sans)"],
        label: ["var(--font-plus-jakarta-sans)"]
      }
    },
  },
  plugins: [],
};
export default config;