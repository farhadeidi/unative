import fs from "fs";
import path from "path";

/**
 * @param rootDir
 * @param oldName
 * @param newName
 */
function renameFilesInSubdirectories(
  rootDir: string,
  oldName: string,
  newName: string,
) {
  function traverseAndRename(directory: string) {
    fs.readdir(directory, { withFileTypes: true }, (err, files) => {
      if (err) {
        console.error(`Reading error ${directory}:`, err);
        return;
      }

      files.forEach((file) => {
        const fullPath = path.join(directory, file.name);

        if (file.isDirectory()) {
          traverseAndRename(fullPath);
        } else if (file.name === oldName) {
          const newPath = path.join(directory, newName);
          fs.rename(fullPath, newPath, (err) => {
            if (err) {
              console.error(`Error renaming ${fullPath}:`, err);
            } else {
              console.log(`✅ Renamed ${fullPath} → ${newPath}`);
            }
          });
        }
      });
    });
  }

  traverseAndRename(rootDir);
}

const rootFolder = "./raw-files/iconsax";
const oldFileName = "timer-1.svg";
const newFileName = "stopwatch.svg";

renameFilesInSubdirectories(rootFolder, oldFileName, newFileName);
