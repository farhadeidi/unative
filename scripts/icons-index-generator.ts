import fs from "fs";
import path from "path";

const generateIndexFiles = (baseFolder: string) => {
  // Recursive function to process each folder
  const processFolder = (currentFolder: string) => {
    const items = fs.readdirSync(currentFolder);
    const exports: string[] = [];

    items.forEach((item) => {
      const fullPath = path.join(currentFolder, item);

      if (fs.statSync(fullPath).isDirectory()) {
        // If it's a folder, export it as a single line
        const relativeFolderPath = `./${item}`;
        exports.push(`export * from "${relativeFolderPath}";`);
        processFolder(fullPath); // Recursively process the sub-folder
      } else if (item.endsWith(".ts") || item.endsWith(".tsx")) {
        // If it's a file, export it
        const fileName = path.basename(item, path.extname(item));
        exports.push(`export * from "./${fileName}";`);
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

// Example usage
const baseFolder = path.resolve(__dirname, "../packages/blocks/icons");
generateIndexFiles(baseFolder);
