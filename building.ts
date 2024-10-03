/*
    This piece of code has the sole purpose of minify and converting between TypeScript and native JS to run in the browser
*/

import { build, stop } from "@deps";

await build({
    entryPoints: ["./src/module/main.ts", "./src/module/style/*.css"],
    bundle: true,
    platform: "browser",
    minify: true,
    treeShaking: true,
    format: "esm",
    outbase: "./src/module",
    outdir: "./src/public/assets",
    outExtension: { ".js": ".mjs", ".css": ".css" },
});

await stop();
