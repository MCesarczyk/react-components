/// <reference types="vitest" />
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import dts from "vite-plugin-dts";
import cssInjectedByJsPlugin from "vite-plugin-css-injected-by-js";
import path from "path";

export default defineConfig(({ command }) => {
  if (command === "serve") {
    return {
      plugins: [react()],
      root: path.resolve(__dirname, "src"),
      build: {
        outDir: path.resolve(__dirname, "dist"),
      },
    };
  } else {
    return {
      plugins: [react(), dts(), cssInjectedByJsPlugin()],
      build: {
        lib: {
          entry: path.resolve(__dirname, "index.ts"),
          name: "React-components",
          fileName: (format) => `index.${format}.js`,
        },
        rollupOptions: {
          input: path.resolve(__dirname, "index.ts"),
          external: ["react", "react-dom"],
          output: {
            globals: {
              react: "React",
              "react-dom": "ReactDOM",
            },
          },
        },
        sourcemap: true,
        emptyOutDir: true,
      },
    };
  }
});
