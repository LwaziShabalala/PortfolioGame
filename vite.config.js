import { defineConfig } from "vite";

export default defineConfig({
    base: "/PortfolioGame",
    build: {
        minify: "terser",
    },
});