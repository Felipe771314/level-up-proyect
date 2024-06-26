import { resolve } from "path";
import { defineConfig } from "vite";
import dts from "vite-plugin-dts";
import tsconfigPaths from 'vite-tsconfig-paths'

export default defineConfig({
  build: {
    lib: {
      entry: resolve(__dirname, "src/index.tsx"),
      name: "my-lib",
      fileName: "my-lib",
    },
    sourcemap: true
  },
  resolve: {
    alias: {
      "@": resolve(__dirname, './src')
    }
  },
  plugins: [dts({ outDir: "dist", include: ["src/"] }), tsconfigPaths()],
});
