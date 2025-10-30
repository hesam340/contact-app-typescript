import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

import {paths} from "./src/core/constants/paths.ts"

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react({
      babel: {
        plugins: [["babel-plugin-react-compiler"]],
      },
    }),
    tailwindcss(),
  ],
  resolve: {
    alias: {
      "@": "/src",
      ...paths.reduce(
        (acc, cur) => ({
          ...acc,
          [cur]: `/${cur === "src" ? cur : "src/" + cur}`,
        }),
        {}
      ),
    },
  },
});
