import fs from "fs";
import path from "path";

const folders = [
  path.resolve(__dirname, "../raw-files/iconsax/bold"),
  path.resolve(__dirname, "../raw-files/iconsax/broken"),
  path.resolve(__dirname, "../raw-files/iconsax/bulk"),
  path.resolve(__dirname, "../raw-files/iconsax/linear"),
  path.resolve(__dirname, "../raw-files/iconsax/outline"),
  path.resolve(__dirname, "../raw-files/iconsax/twotone"),
];

const compareFolders = (folders: string[]) => {
  const fileMap: Record<string, Set<string>> = {};

  folders.forEach((folder) => {
    if (!fs.existsSync(folder)) {
      console.log(`Folder not found: ${folder}`);
      return;
    }

    const files = fs
      .readdirSync(folder)
      .filter((file) => fs.lstatSync(path.join(folder, file)).isFile());
    fileMap[folder] = new Set(files);
  });

  const allFiles = Array.from(
    new Set(Object.values(fileMap).flatMap((set) => Array.from(set)))
  );

  console.log(
    "File".padEnd(50) + folders.map((f) => path.basename(f).padEnd(10)).join("")
  );
  console.log("-".repeat(50 + folders.length * 10));

  allFiles.forEach((file) => {
    const row = [file.padEnd(50)];
    folders.forEach((folder) => {
      const exists = fileMap[folder]?.has(file) ? "✅" : "❌";
      row.push(exists.padEnd(10));
    });
    console.log(row.join(""));
  });
};

compareFolders(folders);
