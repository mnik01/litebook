#!/usr/bin/env node

// src/index.ts
import fs from "fs-extra";

// src/cli.ts
import { Command } from "commander";
var DEFAULT_APP_NAME = "litebook";
var runCli = () => {
  const program = new Command().name(DEFAULT_APP_NAME);
  program.description("A CLI for initializing litebook in your project").addHelpText(
    "afterAll",
    `
 Litebook initialized. Use npm run litebook to start dev server. And npm run litebook:build to build it 
`
  );
};

// src/index.ts
var main = async () => {
  runCli();
  const pkgJson = fs.readJSONSync("package.json");
  pkgJson.scripts = {
    ...pkgJson.scripts,
    litebook: "vite serve .litebook",
    "litebook:build": "vite build .litebook"
  };
  fs.writeJSONSync("package.json", pkgJson, {
    spaces: 2
  });
  process.exit(0);
};
main().catch((err) => {
  process.stderr.write("Aborting installation...");
  if (err instanceof Error) {
    process.stderr.write(JSON.stringify(err));
  } else {
    process.stderr.write(
      "An unknown error has occurred. Please open an issue on github with the below:"
    );
    process.stdout.write(err);
  }
  process.exit(1);
});
//# sourceMappingURL=index.js.map