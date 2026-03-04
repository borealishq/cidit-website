import { defineConfig } from "astro/config";
import react from "@astrojs/react";
import tailwindcss from "@tailwindcss/vite";

import db from "@astrojs/db";

// https://astro.build/config
export default defineConfig({
    integrations: [react(), db()],
    vite: {
        plugins: [tailwindcss()],
    },
    site: "https://cidit.website.io",
    base: process.env.NODE_ENV === "production" ? "/cidit-website" : "/",
});