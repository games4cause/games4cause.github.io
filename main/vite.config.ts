import { defineConfig } from "vite";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  base: "/games4cause.github.io/",
  plugins: [tailwindcss()],
});
