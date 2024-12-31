import { exec } from "child_process";

exec(`find . -name 'node_modules' -type d -prune -exec rm -rf '{}' +`);
exec(`find . -name '.next' -type d -prune -exec rm -rf '{}' +`);
exec(`find . -name '.turbo' -type d -prune -exec rm -rf '{}' +`);
exec(`find . -name 'dist' -type d -prune -exec rm -rf '{}' +`);
exec(`find . -name '.expo' -type d -prune -exec rm -rf '{}' +`);
