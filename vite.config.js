import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  base: "/FoodAppwithReact/", // Replace 'your-repository-name' with your actual repo name
});
