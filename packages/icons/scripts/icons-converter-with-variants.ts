/// <reference types="node" />

import fs from "fs";
import path from "path";
import prettier from "prettier";
import { capitalize, toCamelCase } from "remeda";
import { getComponentName, getVariantName } from "./helpers";

/**
 * @param {string} srcDir - Source directory.
 * @param {string} distDir - Source directory.
 */

// Parse command-line arguments
const args = process.argv.slice(2);

if (args.length < 2) {
  console.error("Usage: node script.js <srcDir> <distDir>");
  process.exit(1);
}

const iconsFolder = path.resolve(args[0]);
const outputFolder = path.resolve(args[1]);

// Options
const options = {
  replaceAllColors: false, // Replace all colors with currentColor
  specificColors: ["#292D32"], // Specific colors to replace if replaceAllColors is false
};

// Ensure output folder exists
if (!fs.existsSync(outputFolder)) {
  fs.mkdirSync(outputFolder, { recursive: true });
}

// Replace colors in SVG content
const replaceColorWithCurrentColor = (svgContent: string): string => {
  if (options.replaceAllColors) {
    return svgContent.replace(/#([0-9A-Fa-f]{6})/g, "currentColor");
  }
  const colorRegex = new RegExp(
    options.specificColors.map((color) => color.replace(/#/g, "\\#")).join("|"),
    "g",
  );
  return svgContent.replace(colorRegex, "currentColor");
};

// Convert attributes to JSX-friendly format
const toJSXAttribute = (attr: string): string => toCamelCase(attr);

// Convert SVG content to JSX
const convertSvgToJsx = (
  svgContent: string,
): { jsx: string; usesG: boolean } => {
  const contentWithReplacedColors = replaceColorWithCurrentColor(svgContent);
  const usesG = /<g[^>]*>/i.test(contentWithReplacedColors); // Check if <G> is used

  const jsx = contentWithReplacedColors
    .replace(/<svg[^>]*>/, "") // Remove <svg> tag
    .replace(/<\/svg>/, "") // Remove </svg> tag
    .replace(/<([a-zA-Z-]+)/g, (_, tag) => {
      return `<${capitalize(toCamelCase(tag))}`; // Convert tag names
    })
    .replace(/<\/([a-zA-Z-]+)/g, (_, tag) => {
      return `</${capitalize(toCamelCase(tag))}`; // Convert closing tags
    })
    .replace(/([a-z-]+)=/g, (_, attr) => `${toJSXAttribute(attr)}=`); // Convert attributes to JSX

  return { jsx, usesG };
};

// Generate the variant component
const generateVariantComponent = (
  iconName: string,
  variant: string,
  svgContent: string,
): { component: string; usesG: boolean } => {
  const componentName = getVariantName(iconName, variant);
  const { jsx, usesG } = convertSvgToJsx(svgContent);

  const component = `
const ${componentName} = ({ size = 24, ...props }: IconProps) => {
  return (
    <Svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      {...props}
    >
      ${jsx}
    </Svg>
  );
};
`;

  return { component, usesG };
};

// Generate the combined icon file
const generateIconFile = async (
  iconName: string,
  componentName: string,
  variants: string[],
) => {
  let imports = new Set([
    `import { useContext } from "react";`,
    `import { cn } from "unative/lib/utils";`,
    `import { Path, Svg } from "unative/ui/svg";`,
    `import { TextClassContext } from "unative/ui/text";`,
    "",
    `import type { IconProps, IconVariants } from "../icon-options";`,
    `import { defaultOptions } from "../icon-options";`,
  ]);

  const variantComponents: string[] = [];
  const variantMappings: string[] = [];
  let usesG = false;

  for (const variant of variants) {
    const variantPath = path.join(iconsFolder, variant, `${iconName}.svg`);
    if (fs.existsSync(variantPath)) {
      const svgContent = fs.readFileSync(variantPath, "utf-8");
      const { component, usesG: variantUsesG } = generateVariantComponent(
        componentName,
        variant,
        svgContent,
      );
      variantComponents.push(component);
      variantMappings.push(
        `${variant}: ${getVariantName(componentName, variant)}`,
      );
      if (variantUsesG) usesG = true; // Check if any variant uses <G>
    }
  }

  if (usesG) {
    const importsArray = Array.from(imports);
    importsArray[2] = `import { G, Path, Svg } from "unative/ui/svg";`; // Modify the first line
    imports = new Set(importsArray); // Recreate the set
  }

  if (variantMappings.length === 0) {
    console.log(`Skipping ${iconName}: No variants found.`);
    return;
  }

  const variantsObject = `const variants: IconVariants = {\n  ${variantMappings.join(",\n  ")}\n};`;

  const finalExport = `
export const ${getComponentName(componentName)}Icon = ({
  variant = defaultOptions.variant,
  className,
  ...props
}: IconProps) => {
  const textClasses = useContext(TextClassContext);
  const Component = variants[variant];
  return <Component className={cn(textClasses, className)} {...props} />;
};

export default ${getComponentName(componentName)}Icon;
`;

  const fileContent = `${Array.from(imports).join("\n")}\n\n${variantComponents.join(
    "\n",
  )}\n\n${variantsObject}\n\n${finalExport}`;
  const formattedCode = await prettier.format(fileContent, {
    parser: "typescript",
  });

  const outputFilePath = path.join(outputFolder, `${iconName}.tsx`);
  fs.writeFileSync(outputFilePath, formattedCode, "utf-8");
  console.log(`Generated combined file: ${outputFilePath}`);
};

// Main function to process all icons
const processIcons = () => {
  const variants = fs
    .readdirSync(iconsFolder)
    .filter((item) => fs.statSync(path.join(iconsFolder, item)).isDirectory());

  const sampleVariantFolder = path.join(iconsFolder, variants[0]);
  const iconFiles = fs
    .readdirSync(sampleVariantFolder)
    .filter((file) => file.endsWith(".svg"))
    .map((file) => path.basename(file, ".svg"));

  iconFiles.forEach((baseIconName) => {
    const hasAllVariants = variants.every((variant) =>
      fs.existsSync(path.join(iconsFolder, variant, `${baseIconName}.svg`)),
    );

    if (!hasAllVariants) {
      console.log(`Skipping ${baseIconName}: Missing files in some variants.`);
      return;
    }

    generateIconFile(baseIconName, getComponentName(baseIconName), variants);
  });
};

processIcons();
