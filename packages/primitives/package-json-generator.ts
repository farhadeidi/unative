import * as fs from "fs";
import * as path from "path";

function generateExports(dirPath: string): Record<string, any> {
  const exports: Record<string, any> = {};

  function processDirectory(currentPath: string) {
    const items = fs.readdirSync(currentPath, { withFileTypes: true });
    let hasIndexFile = false;

    items.forEach((item) => {
      if (item.isFile()) {
        if (item.name === "index.ts" || item.name === "index.tsx") {
          hasIndexFile = true;
        }
      }
    });

    let relativePath = path.relative("./src", currentPath).replace(/\\/g, "/");

    relativePath = relativePath === "" ? "." : `./${relativePath}`;

    if (hasIndexFile) {
      exports[relativePath] = {
        types: `${relativePath}/index.d.ts`,
        import: `${relativePath}/index.js`,
        default: `${relativePath}/index.js`,
      };
    }

    items.forEach((item) => {
      if (item.isDirectory()) {
        processDirectory(path.join(currentPath, item.name));
      }
    });
  }

  processDirectory(dirPath);

  return exports;
}

function updatePackageJson(
  srcDir: string,
  packageJsonPath: string,
  outputPath: string,
) {
  // Generate the new exports
  const newExports = generateExports(srcDir);

  // Read the existing package.json
  const packageJson = JSON.parse(fs.readFileSync(packageJsonPath, "utf-8"));

  // Replace the exports section with the new exports
  packageJson.exports = newExports;
  delete packageJson.devDependencies;
  delete packageJson.scripts;

  const peerDependencies = packageJson.peerDependencies || {};
  packageJson.peerDependenciesMeta = packageJson.peerDependenciesMeta || {};

  const requiredPeerDependencies = [
    "react",
    "tailwindcss",
    "clsx",
    "tailwind-merge",
    "tailwind-variants",
    "@unative/theme",
    "@unative/primitives",
  ];
  Object.keys(peerDependencies).forEach((dep) => {
    if (!requiredPeerDependencies.includes(dep)) {
      packageJson.peerDependenciesMeta[dep] = { optional: true };
    }
  });

  const outputDir = path.dirname(outputPath);
  if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
  }
  // Write the updated package.json to the output path
  fs.writeFileSync(outputPath, JSON.stringify(packageJson, null, 2));

  console.log(`Updated package.json saved to ${outputPath}`);
}

updatePackageJson("./src", "./package.json", "./dist/package.json");
