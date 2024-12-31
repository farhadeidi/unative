import path from "path";
import { cosmiconfig } from "cosmiconfig";
import { metroUtils } from "./metro-utils";
import { UnativeConfig } from "../../types";
import { defaultConfig } from "../../theme/common/default-config";

export type WithUnativeOptions = {
  inputConfig: string;
};

const loadConfig = async (
  moduleName: string,
  configPath: string | undefined = undefined
): Promise<{
  config: UnativeConfig;
  projectRoot: string;
  filePath: string;
} | null> => {
  const explorer = cosmiconfig(moduleName);

  try {
    const result = configPath
      ? await explorer.load(configPath)
      : await explorer.search();

    if (result) {
      return {
        config: { ...defaultConfig, ...result.config } as UnativeConfig,
        projectRoot: path.dirname(result.filepath),
        filePath: result.filepath,
      };
    } else {
      console.error("No config found.");
      return null;
    }
  } catch (error) {
    console.error("Error loading config:", error);
    return null;
  }
};

const handlerFunction = async ({ inputConfig }: WithUnativeOptions) => {
  const result = await loadConfig(
    "unative",
    inputConfig ? path.resolve(inputConfig) : undefined
  );
  if (!result) return;

  const { config, projectRoot } = result;
  const cssFilePath = path.join(projectRoot, config.cssFilePath);
  const outputDir = path.join(projectRoot, config.outputDir);
  const cssContent = await metroUtils.getFileDataAsString({
    filePath: cssFilePath,
  });

  const themeVariables = metroUtils.getThemeVariablesJsonString({
    cssFileContent: cssContent,
  });

  const themesFileString = metroUtils.getThemesFileStringToWrite({
    themeVariables,
  });

  await metroUtils.writeFileContent({
    filePath: path.join(outputDir, "themes.ts"),
    content: themesFileString,
  });
};

export async function withUnative(
  config: any,
  { inputConfig }: WithUnativeOptions = {} as WithUnativeOptions
): Promise<any> {
  await handlerFunction({ inputConfig });

  return config;
}
