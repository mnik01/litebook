import fs from "fs-extra";
import * as TF from "template-file";
import glob from "glob";

export const createLitebook = async () => {
  let storiesInUsersProject: string[] = [];

  glob("**/*.stories.tsx", {}, function (_, files) {
    storiesInUsersProject = [...files];
  });

  fs.mkdirSync(".litebook");
  fs.writeFileSync(
    ".litebook/index.html",
    await TF.renderFile("./templates/index.html", {})
  );
  fs.writeFileSync(
    ".litebook/index.tsx",
    await TF.renderFile("./templates/index.tsx", {})
  );
  fs.writeFileSync(
    ".litebook/tsconfig.json",
    await TF.renderFile("./templates/tsconfig.json", {})
  );
  fs.writeFileSync(
    ".litebook/public/logo.svg",
    await TF.renderFile("./templates/public/logo.svg", {})
  );
  fs.writeFileSync(
    ".litebook/vite.config.ts",
    await TF.renderFile("./templates/vite.config.ts", {
      stories: storiesInUsersProject.map((st) => ({
        lower: st.toLowerCase(),
        capitalize: st,
      })),
    })
  );

  // Stories
  fs.mkdirSync(".litebook/stories");
  storiesInUsersProject.forEach(async (st) => {
    fs.writeFileSync(
      `.litebook/stories/${st}/iframe.tsx`,
      await TF.renderFile(`./templates/stories/Component/iframe.tsx`, {
        name: st,
      })
    );
  });
};
