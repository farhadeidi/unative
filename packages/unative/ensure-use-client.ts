import * as fs from "fs";
import * as path from "path";

/**
 * Ensures that the 'use client' directive is preserved in output files.
 * Scans all files in the source directory and checks if they start with 'use client'.
 * If so, it adds the directive to the beginning of the corresponding output file.
 *
 * @param srcDir - The source directory containing the original files.
 * @param distDir - The output directory where the compiled files are located.
 */
function ensureUseClientInOutput(srcDir: string, distDir: string): void {
  const srcFiles = scanFiles(srcDir, /\.(js|jsx|ts|tsx)$/); // Find all matching files

  srcFiles.forEach((srcFile) => {
    const relativePath = path.relative(srcDir, srcFile); // Get the relative path
    const distFile = path.join(
      distDir,
      relativePath.replace(/\.(ts|tsx)$/, ".js"),
    ); // Map to output file

    if (fs.existsSync(distFile)) {
      const srcContent = fs.readFileSync(srcFile, "utf-8");
      const distContent = fs.readFileSync(distFile, "utf-8");

      // Check if the source file starts with 'use client'
      if (
        srcContent.startsWith('"use client";') ||
        srcContent.startsWith("'use client';")
      ) {
        // Add 'use client' to the output file if it doesn't already exist
        if (
          !distContent.startsWith('"use client";') &&
          !distContent.startsWith("'use client';")
        ) {
          console.log(`Adding \"use client\" to ${distFile}`);
          const updatedContent = `"use client";\n${distContent}`;
          fs.writeFileSync(distFile, updatedContent, "utf-8");
        }
      }
    }
  });
}

/**
 * Scans a directory recursively and retrieves all files matching a specific pattern.
 *
 * @param dir - The directory to scan.
 * @param pattern - The regular expression pattern to match file names.
 * @returns An array of file paths matching the pattern.
 */
function scanFiles(dir: string, pattern: RegExp): string[] {
  let results: string[] = [];
  const files = fs.readdirSync(dir);

  files.forEach((file) => {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);

    if (stat.isDirectory()) {
      results = results.concat(scanFiles(filePath, pattern)); // Recurse into subdirectories
    } else if (pattern.test(filePath)) {
      results.push(filePath); // Add matching files
    }
  });

  return results;
}

// Example usage
const srcDir = path.resolve("src");
const distDir = path.resolve("dist");
ensureUseClientInOutput(srcDir, distDir);
