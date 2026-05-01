import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// GitHub Pages (project site https://USER.github.io/REPO/): production assets need /<repo-name>/
// https://vite.dev/guide/build#public-base-path
export default defineConfig(({ command }) => ({
  base: command === "build" ? "/WebTRC/" : "/",
  plugins: [react()],
}));
