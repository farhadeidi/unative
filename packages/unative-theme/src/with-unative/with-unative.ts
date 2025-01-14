import fs from "fs";
import path from "path";

import { utils } from "./with-unative-utils";

const defaultCssPath = "./global.css";
const defaultOutputDir = "./src/lib/unative";

export type WithUnativeOptions = {
  css?: string;
  outputDir?: string;
};

const handlerFunction = async (options: WithUnativeOptions) => {
  const projectRoot = process.cwd();
  const config = {
    css: options.css || defaultCssPath,
    outputDir: options.outputDir || defaultOutputDir,
  };

  const cssFilePath = path.join(projectRoot, config.css);
  const outputDir = path.join(projectRoot, config.outputDir);
  const cssContent = await utils.getFileDataAsString({
    filePath: cssFilePath,
  });
  const themeVariables = utils.getThemeVariablesJsonString({
    cssFileContent: cssContent,
  });
  const themesFileString = utils.getThemesFileStringToWrite({
    themeVariables,
  });
  await utils.writeFileContent({
    filePath: path.join(outputDir, "themes.ts"),
    content: themesFileString,
  });
  console.log("Themes file generated successfully");
};

export async function withUnative(
  config: any,
  options: WithUnativeOptions = {} as WithUnativeOptions,
): Promise<any> {
  await handlerFunction(options);
  if (process.env.NODE_ENV === "development") {
    watchForChanges(options);
  }
  return config;
}

const watchForChanges = (config: WithUnativeOptions) => {
  fs.watch(config.css || defaultCssPath, () => {
    handlerFunction(config);
  });
};
