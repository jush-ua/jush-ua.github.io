import { cp, mkdir, rm, stat } from "node:fs/promises";
import { dirname, join, relative, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const root = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const output = join(root, "dist");
// Clean only this repository's fixed build directory, never an input or arbitrary path.
if (relative(root, output) !== "dist") throw new Error("Unexpected build path");
const files = ["index.html", "styles.css", "script.js", "assets", ".nojekyll"];
for (const name of files) await stat(join(root, name));
await rm(output, { recursive: true, force: true });
await mkdir(output, { recursive: true });
for (const name of files) await cp(join(root, name), join(output, name), { recursive: true });
console.log("Built dist/: HTML, CSS, JavaScript, assets, and .nojekyll only.");
