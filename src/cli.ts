import { Command } from "commander";
import path from "path";

const DEFAULT_APP_NAME = "litebook";

export const runCli = () => {
  const program = new Command().name(DEFAULT_APP_NAME);

  program
    .description("A CLI for initializing litebook in your project")
    .addHelpText(
      "afterAll",
      `\n Litebook initialized. Use npm run litebook to start dev server. And npm run litebook:build to build it \n`
    );

  return path.basename(path.resolve(process.cwd()));
};
