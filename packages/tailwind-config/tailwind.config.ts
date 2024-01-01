import type { Config } from "tailwindcss";

// We want each package to be responsible for its own content.
const config: Omit<Config, "content" | "theme" | "plugins"> = {
  theme: {
    extend: {
      fontFamily: {
        sans: ['Poppins', 'sans-serif']
      },
      // Generate color palettes with https://www.tints.dev
      colors: {
        primary: {
          50: "#EBF9EF",
          100: "#D4F2DC",
          200: "#9DE2AF",
          300: "#56CD76",
          400: "#32A852",
          500: "#2E994A",
          600: "#2A8D45",
          700: "#247A3B",
          800: "#1E6632",
          900: "#154722",
          950: "#0D2B15"
        },
      },
      strokeWidth: {
        '3': '3px'
      }
    },
  },
  plugins: [],
};
export default config;