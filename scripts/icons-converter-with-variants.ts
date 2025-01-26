import fs from "fs";
import path from "path";
import prettier from "prettier";
import { toCamelCase, capitalize } from "remeda";

const getComponentName = (value: string) => {
  return capitalize(toCamelCase(value));
};

const getVariantName = (iconName: string, variant: string) => {
  return `${getComponentName(iconName)}${capitalize(variant)}`;
};

function prependIfStartsWithNumber(input, prefix) {
  return input.replace(/^(\d)/, `${prefix}$1`);
}

// Paths
const iconsFolder = path.resolve(__dirname, "../raw-files/iconsax");
const outputFolder = path.resolve(__dirname, "../packages/blocks/icons");

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
    "g"
  );
  return svgContent.replace(colorRegex, "currentColor");
};

// Convert attributes to JSX-friendly format
const toJSXAttribute = (attr: string): string => toCamelCase(attr);

// Convert SVG content to JSX
const convertSvgToJsx = (
  svgContent: string
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
  svgContent: string
): { component: string; usesG: boolean } => {
  const componentName = getVariantName(iconName, variant);
  const { jsx, usesG } = convertSvgToJsx(svgContent);

  const component = `
const ${componentName} = ({ size = 24, className, ...props }: IconProps) => {
  return (
    <Svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      className={cn("text-foreground", className)}
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
  variants: string[]
) => {
  let imports = new Set([
    `import { useContext } from "react";`,
    `import { Path, Svg } from "unative/lib/svg";`,
    `import { cn } from "unative/lib/utils";`,
    `import { TextClassContext } from "unative/ui/text";`,
    "",
    `import { iconDefaultOptions } from "../icons-configuration";`,
    `import type { IconProps, IconVariants } from "../types/icons-type";`,
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
        svgContent
      );
      variantComponents.push(component);
      variantMappings.push(
        `${variant}: ${getVariantName(componentName, variant)}`
      );
      if (variantUsesG) usesG = true; // Check if any variant uses <G>
    }
  }

  if (usesG) {
    let importsArray = Array.from(imports);
    importsArray[1] = `import { G, Path, Svg } from "unative/lib/svg";`; // Modify the first line
    imports = new Set(importsArray); // Recreate the set
  }

  if (variantMappings.length === 0) {
    console.log(`Skipping ${iconName}: No variants found.`);
    return;
  }

  const variantsObject = `const variants: IconVariants = {\n  ${variantMappings.join(",\n  ")}\n};`;

  const finalExport = `
export const ${getComponentName(componentName)}Icon = ({
  variant = iconDefaultOptions.variant,
  className,
  ...props
}: IconProps) => {
  const textClasses = useContext(TextClassContext);
  const Component = variants[variant];
  return <Component className={cn(textClasses, className)} {...props} />;
};
`;

  const fileContent = `${Array.from(imports).join("\n")}\n\n${variantComponents.join(
    "\n"
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
      fs.existsSync(path.join(iconsFolder, variant, `${baseIconName}.svg`))
    );

    if (!hasAllVariants) {
      console.log(`Skipping ${baseIconName}: Missing files in some variants.`);
      return;
    }

    let componentName = baseIconName;
    componentName = componentName.replaceAll("&", "-");
    componentName = prependIfStartsWithNumber(componentName, "i-");
    componentName = toCamelCase(componentName);

    generateIconFile(baseIconName, getComponentName(componentName), variants);
  });
};

processIcons();
