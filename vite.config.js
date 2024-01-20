import { defineConfig } from "vite";
export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: "./index.html",
        cards: "./cards.html", // Add this line
      },
    },
  },
});
