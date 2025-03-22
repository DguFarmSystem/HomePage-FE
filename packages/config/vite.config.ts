import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
// import path from "path";

export default defineConfig({
  plugins: [react()],
  // resolve: {
  //   alias: {
  //     "@config": path.resolve(__dirname, "../config"),
  //     "@utils": path.resolve(__dirname, "../utils"),
  //     "@shared": path.resolve(__dirname, "../shared"),
  //   },
  // }
});
