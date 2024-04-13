// vite.config.js
import { resolve } from "path";
import { defineConfig } from "vite";

export default defineConfig({
	build: {
		rollupOptions: {
			input: {
				main: resolve(__dirname, "index.html"),
				features: resolve(__dirname, "features/index.html"),
				pricing: resolve(__dirname, "pricing/index.html"),
				stories: resolve(__dirname, "stories/index.html"),
			},
		},
	},
});
