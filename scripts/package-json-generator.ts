import * as fs from "fs";
import * as path from "path";

function removeFileExtension(filename): string {
  return filename.replace(/^(.+?)(\.[^.]*$|$)/, "$1");
}

const getExports = ({
  filePath,
  fileName,
  advanceOptions,
}: {
  filePath: string;
  fileName: string;
  advanceOptions: {
    enabled: boolean;
    hasWebFile: boolean;
    hasNativeFile: boolean;
  };
}) => {
  if (!advanceOptions.enabled) {
    return {
      types: `${filePath}/${fileName}.d.ts`,
      require: `${filePath}/${fileName}.cjs`,
      import: `${filePath}/${fileName}.js`,
      default: `${filePath}/${fileName}.js`,
    };
  }

  const nativeFileName = advanceOptions.hasNativeFile ? "native" : "index";
  const webFileName = advanceOptions.hasWebFile ? "web" : "index";

  return {
    "react-native": {
      types: `${filePath}/${nativeFileName}.d.ts`,
      default: `${filePath}/${nativeFileName}.js`,
    },
    "react-server": {
      types: `${filePath}/${webFileName}.d.ts`,
      default: `${filePath}/${webFileName}.js`,
    },
    require: {
      types: `${filePath}/${webFileName}.d.ts`,
      default: `${filePath}/${webFileName}.js`,
    },
    import: {
      types: `${filePath}/${webFileName}.d.ts`,
      default: `${filePath}/${webFileName}.js`,
    },
    default: {
      types: `${filePath}/${webFileName}.d.ts`,
      default: `${filePath}/${webFileName}.js`,
    },
  };
};

function generateExports(
  dirPath: string,
  withSimpleMode = false
): Record<string, unknown> {
  const exports: Record<string, unknown> = {};

  function processDirectory(currentPath: string) {
    const items = fs.readdirSync(currentPath, { withFileTypes: true });

    // sort items. if has index file, index file should be the first
    items.sort((a, b) => {
      if (a.name === "index.ts" || a.name === "index.tsx") {
        return -1;
      }
      if (b.name === "index.ts" || b.name === "index.tsx") {
        return 1;
      }
      return 0;
    });

    let relativePath = path.relative("./src", currentPath).replace(/\\/g, "/");
    relativePath = relativePath === "" ? "." : `./${relativePath}`;

    const hasWebFileInDir = items.some(
      (el) => removeFileExtension(el.name) === "web"
    );
    const hasNativeFileInDir = items.some(
      (el) => removeFileExtension(el.name) === "native"
    );

    const hasIndexFile = items.some(
      (el) => removeFileExtension(el.name) === "index"
    );

    if (!hasIndexFile && hasWebFileInDir && hasNativeFileInDir) {
      exports[`${relativePath}`] = getExports({
        filePath: `${relativePath}`,
        fileName: "index",
        advanceOptions: {
          enabled: true,
          hasWebFile: hasWebFileInDir,
          hasNativeFile: hasNativeFileInDir,
        },
      });
    }

    items.forEach((item) => {
      if (item.isFile()) {
        const itemName = removeFileExtension(item.name);
        const isAdvancedOptionEnabled =
          itemName.endsWith("index") && (hasWebFileInDir || hasNativeFileInDir);

        if (withSimpleMode) {
          exports[
            `${relativePath}${itemName === "index" ? "" : `/${itemName}`}`
          ] = `${relativePath}/${itemName}.js`;
        } else {
          exports[
            `${relativePath}${itemName === "index" ? "" : `/${itemName}`}`
          ] = getExports({
            filePath: `${relativePath}`,
            fileName: itemName,
            advanceOptions: {
              enabled: isAdvancedOptionEnabled,
              hasWebFile: hasWebFileInDir,
              hasNativeFile: hasNativeFileInDir,
            },
          });
        }
      }
    });
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
  withSimpleExports: boolean,
  noExportsEdit: boolean
) {
  try {
    // Read the existing package.json
    const packageJson = JSON.parse(fs.readFileSync(packageJsonPath, "utf-8"));

    const newExports = noExportsEdit
      ? packageJson.exports
      : generateExports(srcDir, withSimpleExports);

    // Replace the exports section with the new exports
    packageJson.exports = newExports;
    delete packageJson.devDependencies;
    delete packageJson.scripts;

    const peerDependencies = packageJson.peerDependencies || {};
    const peerDependenciesMeta = packageJson.peerDependenciesMeta || {};

    const requiredPeerDependencies = [
      "react",
      "tailwindcss",
      "clsx",
      "tailwind-merge",
      "tailwind-variants",
    ];
    Object.keys(peerDependencies).forEach((dep) => {
      if (!requiredPeerDependencies.includes(dep)) {
        peerDependenciesMeta[dep] = { optional: true };
      }
    });

    const outputDir = path.dirname(outputPath);
    if (!fs.existsSync(outputDir)) {
      fs.mkdirSync(outputDir, { recursive: true });
    }
    // Write the updated package.json to the output path
    packageJson.devDependencies = {};
    packageJson.peerDependenciesMeta = peerDependenciesMeta || {};
    fs.writeFileSync(outputPath, JSON.stringify(packageJson, null, 2));

    console.log(`Updated package.json saved to ${outputPath}`);
  } catch (error) {
    console.log("dev => error", error);
  }
  // Generate the new exports
}

/**
 * @param {string} srcDir - Source directory.
 * @param {string} srcDirPackage - Source directory.
 * @param {string} distDirPackage - Destination directory.
 */
// Parse command-line arguments
const args = process.argv.slice(2);

if (args.length < 3) {
  console.error(
    "Usage: node script.js <srcDir> <srcDirPackage> <distDirPackage>"
  );
  process.exit(1);
}

const srcDir = path.resolve(args[0]);
const srcDirPackage = path.resolve(args[1]);
const distDirPackage = path.resolve(args[2]);
const withSimpleExports = args.includes("--simple");
const noExportsEdit = args.includes("--no-exports-edit");

updatePackageJson(
  srcDir,
  srcDirPackage,
  distDirPackage,
  withSimpleExports,
  noExportsEdit
);
