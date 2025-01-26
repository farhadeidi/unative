import { exec } from "child_process";
import chokidar from "chokidar";

let debounceTimeout: NodeJS.Timeout | null = null;

/**
 * Execute a command after a debounce delay.
 * @param command The command to execute
 * @param delay Debounce delay in milliseconds
 */
const runCommandWithDebounce = (command: string, delay: number): void => {
  if (debounceTimeout) clearTimeout(debounceTimeout); // Clear the previous timeout

  debounceTimeout = setTimeout(() => {
    exec(command, (error, stdout, stderr) => {
      if (error) {
        console.error(`Error executing command: ${error.message}`);
        return;
      }
      if (stdout) console.log(`Command output:\n${stdout}`);
      if (stderr) console.error(`Command error output:\n${stderr}`);
    });
  }, delay);
};

/**
 * Watch for changes in multiple directories and run a command after debounce.
 * @param folderPaths Array of folder paths to monitor
 * @param command The command to execute on changes
 * @param debounceDelay Delay in milliseconds for debounce
 */
const watchFoldersAndRunCommand = (
  folderPaths: string[],
  command: string,
  debounceDelay: number,
): void => {
  const watcher = chokidar.watch(folderPaths, {
    ignored: /(^|[\/\\])\../, // Ignore dotfiles
    persistent: true,
  });

  // Log changes and trigger the debounce
  watcher.on("all", (event, path) => {
    console.log(`Change detected: ${event} -> ${path}`);
    runCommandWithDebounce(command, debounceDelay);
  });

  console.log(`Watching for changes in: ${folderPaths.join(", ")}`);
};

// Example usage
const foldersToWatch = ["./widgets", "./sections"]; // Folders to monitor
const commandToRun = "npx tsx update-package-json.ts"; // Replace with your command
const debounceDelay = 1000; // Debounce delay in milliseconds
watchFoldersAndRunCommand(foldersToWatch, commandToRun, debounceDelay);
