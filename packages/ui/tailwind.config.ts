import type { Config } from "tailwindcss";
import sharedConfig from "@repo/tailwind-config";

const config: Pick<Config, "prefix" | "presets" | "content" | "plugins"> = {
  content: ["./src/*.{vue,js,ts,jsx,tsx}",],
  presets: [sharedConfig],
  plugins: [
    include("@tailwindcss/forms"),
  ]
};

export default config;