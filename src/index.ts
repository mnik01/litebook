#!/usr/bin/env node
import fs from "fs-extra";
import { runCli } from "./cli.js";

const main = async () => {
  runCli();
  // Write name to package.json
  const pkgJson = fs.readJSONSync("package.json");
  pkgJson.scripts = {
    ...pkgJson.scripts,
    litebook: "vite serve .litebook",
    "litebook:build": "vite build .litebook",
  };
  fs.writeJSONSync("package.json", pkgJson, {
    spaces: 2,
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
