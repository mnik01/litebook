import fs from "fs-extra";
import glob from "glob";
import { stdout } from "process";
import { templates } from "./templates.js";

export const createLitebook = () => {
  let storiesInUsersProject: string[] = [];

  glob("**/*.stories.tsx", {}, function (_, files) {
    stdout.write(files.join("\n"));
    storiesInUsersProject = [...files];
  });

  fs.mkdirSync(".litebook");
  fs.writeFileSync(".litebook/index.html", templates["index.html"]);
  fs.writeFileSync(".litebook/index.tsx", templates["index.tsx"]);
  fs.writeFileSync(".litebook/tsconfig.json", templates["tsconfig.json"]);
  fs.writeFileSync(".litebook/public/logo.svg", templates["public/logo.svg"]);
  fs.writeFileSync(
    ".litebook/vite.config.ts",
    templates["vite.config.ts"](storiesInUsersProject)
  );

  console.log(`storiesInUsersProject: ${storiesInUsersProject}`);
  // Stories
  fs.mkdirSync(".litebook/stories");
  storiesInUsersProject.forEach(async (st) => {
    fs.writeFileSync(
      `.litebook/stories/${st}/iframe.tsx`,
      templates["stories/Component/iframe.tsx"](st)
    );
  });
};
