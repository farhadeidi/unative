import * as fs from "fs";
import * as path from "path";

const serverExports = ["./with-unative"];

function generateExports(dirPath: string): Record<string, any> {
  const exports: Record<string, any> = {};

  function processDirectory(currentPath: string) {
    const items = fs.readdirSync(currentPath, { withFileTypes: true });
    let hasWebFile = false;
    let hasIndexFile = false;
    let hasNativeFile = false;

    items.forEach((item) => {
      if (item.isFile()) {
        if (item.name === "web.ts" || item.name === "web.tsx") {
          hasWebFile = true;
        }
        if (item.name === "index.ts" || item.name === "index.tsx") {
          hasIndexFile = true;
        }
        if (item.name === "native.ts" || item.name === "native.tsx") {
          hasNativeFile = true;
        }
      }
    });

    let relativePath = path.relative("./src", currentPath).replace(/\\/g, "/");

    relativePath = relativePath === "" ? "." : `./${relativePath}`;
    if (hasIndexFile) {
      if (serverExports.includes(relativePath)) {
        exports[relativePath] = {
          types: `${relativePath}/index.d.ts`,
          require: `${relativePath}/index.cjs`,
          default: `${relativePath}/index.cjs`,
        };
      } else {
        exports[relativePath] = {
          "react-native": {
            types: `${relativePath}/index.d.ts`,
            default: `${relativePath}/index.js`,
          },
          "react-server": hasWebFile
            ? {
                types: `${relativePath}/web.d.ts`,
                default: `${relativePath}/web.js`,
              }
            : {
                types: `${relativePath}/index.d.ts`,
                default: `${relativePath}/index.js`,
              },
          require: hasWebFile
            ? {
                types: `${relativePath}/web.d.ts`,
                default: `${relativePath}/web.cjs`,
              }
            : {
                types: `${relativePath}/index.d.ts`,
                default: `${relativePath}/index.cjs`,
              },
          import: hasWebFile
            ? {
                types: `${relativePath}/web.d.ts`,
                default: `${relativePath}/web.js`,
              }
            : {
                types: `${relativePath}/index.d.ts`,
                default: `${relativePath}/index.js`,
              },
          default: hasWebFile
            ? {
                types: `${relativePath}/web.d.ts`,
                default: `${relativePath}/web.js`,
              }
            : {
                types: `${relativePath}/index.d.ts`,
                default: `${relativePath}/index.js`,
              },
        };
      }
    }

    if (hasWebFile && hasNativeFile) {
      exports[relativePath] = {
        "react-native": {
          types: `${relativePath}/native.d.ts`,
          default: `${relativePath}/native.js`,
        },
        "react-server": {
          types: `${relativePath}/web.d.ts`,
          default: `${relativePath}/web.js`,
        },
        require: {
          types: `${relativePath}/web.d.ts`,
          default: `${relativePath}/web.cjs`,
        },
        import: {
          types: `${relativePath}/web.d.ts`,
          default: `${relativePath}/web.js`,
        },
        default: {
          types: `${relativePath}/web.d.ts`,
          default: `${relativePath}/web.js`,
        },
      };
    }
    if (hasNativeFile) {
      exports[`${relativePath}/native`] = {
        types: `${relativePath}/native.d.ts`,
        default: `${relativePath}/native.js`,
      };
    }

    if (hasWebFile) {
      exports[`${relativePath}/web`] = {
        types: `${relativePath}/web.d.ts`,
        default: `${relativePath}/web.js`,
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
