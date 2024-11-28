// @ts-check
import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";

import sitemap from "@astrojs/sitemap";
import node from '@astrojs/node';

// https://astro.build/config
export default defineConfig({
    site: "https://crobf.vercel.app",
    integrations: [mdx(), sitemap()],
    vite: {
        css: {
            preprocessorOptions: {
                sass: {
                    api: "modern-compiler",
                },
                scss: {
                    api: "modern-compiler",
                },
            },
        },
    },
    output: "server",
    adapter: node({
        mode: "standalone"
    })
});
