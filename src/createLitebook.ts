import fs from "fs-extra";
import { templates } from "./templates.js";

export const createLitebook = () => {
  fs.mkdirSync(".litebook");
  fs.writeFileSync(".litebook/index.html", templates.indexHtml);
  fs.writeFileSync(".litebook/index.tsx", templates.indexTsx);
  fs.writeFileSync(".litebook/vite.config.ts", templates.viteConfigTs);
  fs.writeFileSync(".litebook/tsconfig.json", templates.tsconfigJson);
};
