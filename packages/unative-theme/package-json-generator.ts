import * as fs from "fs";
import * as path from "path";

function generateExports(_: string): Record<string, any> {
  return {
    ".": {
      types: "./index.d.ts",
      require: "./index.cjs",
      import: "./index.js",
      default: "./index.js",
    },
    "./with-unative": {
      types: "./with-unative/index.d.ts",
      require: "./with-unative/index.cjs",
      import: "./with-unative/index.js",
      default: "./with-unative/index.js",
    },
    "./provider/native": {
      types: "./provider/native.d.ts",
      require: "./provider/native.cjs",
      import: "./provider/native.js",
      default: "./provider/native.js",
    },
    "./provider/web": {
      types: "./provider/web.d.ts",
      require: "./provider/web.cjs",
      import: "./provider/web.js",
      default: "./provider/web.js",
    },
  };
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
