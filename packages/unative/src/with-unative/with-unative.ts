import path from "path";

import { utils } from "./with-unative-utils";

export type WithUnativeOptions = {
  css?: string;
  outputDir?: string;
};

const handlerFunction = async (options: WithUnativeOptions) => {
  const projectRoot = process.cwd();
  const config = {
    css: options.css || "./global.css",
    outputDir: options.outputDir || "./src/lib/unative",
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
};

export async function withUnative(
  config: any,
  options: WithUnativeOptions = {} as WithUnativeOptions,
): Promise<any> {
  await handlerFunction(options);

  return config;
}
