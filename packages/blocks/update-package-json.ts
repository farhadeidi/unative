/* eslint-disable @typescript-eslint/no-explicit-any */
import * as fs from "fs";
import * as path from "path";

/**
 * Recursively get all files and directories in a given path.
 * @param dirPath Path to the directory to scan
 * @param basePath Base path to calculate relative paths
 * @returns An array of relative paths
 */
const getAllEntries = (
  dirPath: string,
  basePath: string = dirPath,
): string[] => {
  const entries = fs.readdirSync(dirPath, { withFileTypes: true });
  let paths: string[] = [];

  for (const entry of entries) {
    const fullPath = path.join(dirPath, entry.name);
    const relativePath = path.relative(basePath, fullPath).replace(/\\/g, "/");

    if (entry.isDirectory()) {
      paths.push(relativePath); // Add folder
      paths = paths.concat(getAllEntries(fullPath, basePath)); // Recurse into folder
    } else if (entry.isFile()) {
      paths.push(relativePath); // Add file
    }
  }

  return paths;
};

/**
 * Update the "exports" field in package.json with files and directories from specified paths.
 * @param basePaths Array of base directories to scan
 */
const updatePackageFile = async (basePaths: string[]) => {
  const packageJsonPath = "./package.json";

  // Read and parse package.json
  const packageJson = JSON.parse(fs.readFileSync(packageJsonPath, "utf-8"));

  // Generate exports
  const exports: Record<string, string> = {};
  for (const basePath of basePaths) {
    const entries = getAllEntries(basePath);
    for (const entry of entries) {
      const exportPath = `./${path.join(basePath, entry).replace(/\\/g, "/")}`;

      if (/\/index\.[tj]sx?$/.test(exportPath)) {
        // Remove "/index" from the key but keep the full path in value
        const folderExportPath = exportPath.replace(/\/index\.[tj]sx?$/, "");
        exports[folderExportPath] = exportPath;
        continue;
      }

      // Key without extension, value with extension
      const key = exportPath.replace(/\.[tj]sx?$/, "");
      exports[key] = exportPath;
    }
  }

  exports["./icons"] = "./icons/index.ts";

  packageJson.exports = exports;

  const peerDependencies = packageJson.peerDependencies || {};
  const peerDependenciesMeta: any = {};

  const requiredPeerDependencies = ["react", "tailwindcss", "unative"];

  Object.keys(peerDependencies).forEach((dep) => {
    if (!requiredPeerDependencies.includes(dep)) {
      peerDependenciesMeta[dep] = { optional: true };
    }
  });

  packageJson.peerDependenciesMeta = peerDependenciesMeta;

  // Write updated package.json
  fs.writeFileSync(packageJsonPath, JSON.stringify(packageJson, null, 2));
  console.log("package.json updated successfully.");
};

// Example usage
const foldersToScan = ["widgets", "sections"]; // Replace with your folders
updatePackageFile(foldersToScan);
