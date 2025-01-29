/// <reference types="node" />

import fs from "fs";
import path from "path";
import { getComponentName } from "./helpers";

const generateIndexFiles = (baseFolder: string) => {
  // Recursive function to process each folder
  const processFolder = (currentFolder: string) => {
    const items = fs.readdirSync(currentFolder);
    const exports: string[] = [];

    items.forEach((item) => {
      if (item === "index.ts") return;
      const fullPath = path.join(currentFolder, item);

      if (fs.statSync(fullPath).isDirectory()) {
        // If it's a folder, export it as a single line
        const relativeFolderPath = `./${item}`;
        exports.push(`export * from "${relativeFolderPath}";`);
        processFolder(fullPath); // Recursively process the sub-folder
      } else if (item.endsWith(".ts") || item.endsWith(".tsx")) {
        // If it's a file, export it
        const fileName = path.basename(item, path.extname(item));
        exports.push(
          `export { default as ${getComponentName(fileName)}Icon } from "./${fileName}";`,
        );
      }
    });

    // Write the index.ts file for the current folder
    const indexPath = path.join(currentFolder, "index.ts");
    fs.writeFileSync(indexPath, exports.join("\n"), "utf-8");
    console.log(`Generated: ${indexPath}`);
  };

  // Start processing from the base folder
  processFolder(baseFolder);
};

const args = process.argv.slice(2);
const baseFolder = path.resolve(args[0]);

generateIndexFiles(baseFolder);
