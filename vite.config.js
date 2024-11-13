import { resolve } from "node:path";

import { defineConfig } from "vite";

import vue from "@vitejs/plugin-vue";
import path from "vite-tsconfig-paths";

export default defineConfig({
  plugins: [path(), vue()],
  resolve: {
    alias: {
      "@": resolve(__dirname, "src"),
    },
  },
});
