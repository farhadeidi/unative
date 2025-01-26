import fs from "fs";
import path from "path";
import prettier from "prettier";
import { toCamelCase, toKebabCase, capitalize } from "remeda";

const iconsFolder = path.resolve(__dirname, "../raw-icons");
const outputFolder = path.resolve(__dirname, "../packages/blocks/icons");

const options = {
  replaceAllColors: false,
  specificColors: ["#292D32"],
};

if (!fs.existsSync(outputFolder)) {
  fs.mkdirSync(outputFolder, { recursive: true });
}

const replaceColorWithCurrentColor = (svgContent: string): string => {
  if (options.replaceAllColors) {
    return svgContent.replace(/#([0-9A-Fa-f]{6})/g, "currentColor");
  } else {
    const colorRegex = new RegExp(
      options.specificColors
        .map((color) => color.replace(/#/g, "\\#"))
        .join("|"),
      "g"
    );
    return svgContent.replace(colorRegex, "currentColor");
  }
};

const toJSXAttribute = (attr: string): string => toCamelCase(attr);

const convertSvgToJsx = (svgContent: string): string => {
  const contentWithReplacedColors = replaceColorWithCurrentColor(svgContent);

  return contentWithReplacedColors
    .replace(/<svg[^>]*>/, "")
    .replace(/<\/svg>/, "")
    .replace(
      /<([a-zA-Z-]+)/g,
      (match, tag) => `<${capitalize(toCamelCase(tag))}`
    )
    .replace(/([a-z-]+)=/g, (match, attr) => `${toJSXAttribute(attr)}=`);
};

const generateIconCode = async (
  iconName: string,
  svgContent: string
): Promise<string> => {
  const componentName = `${iconName.charAt(0).toUpperCase()}${iconName.slice(1)}Icon`;
  const jsxContent = convertSvgToJsx(svgContent);

  const code = `
import { useContext } from "react";
import type { SvgProps } from "unative/lib/svg";
import { Path, Svg } from "unative/lib/svg";
import { cn } from "unative/lib/utils";
import { TextClassContext } from "unative/ui/text";

export const ${componentName} = ({
  size = 24,
  className,
  ...props
}: SvgProps & { size?: number }) => {
  const textClasses = useContext(TextClassContext);
  return (
    <Svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      className={cn("text-foreground", textClasses, className)}
      {...props}
    >
      ${jsxContent}
    </Svg>
  );
};
`;

  return prettier.format(code, { parser: "typescript" });
};

function prependIfStartsWithNumber(input, prefix) {
  return input.replace(/^(\d)/, `${prefix}$1`);
}

function processFolder(sourceFolder: string, targetFolder: string) {
  fs.readdirSync(sourceFolder).forEach(async (item) => {
    const sourcePath = path.join(sourceFolder, item);
    const targetPath = path.join(targetFolder, item);

    if (fs.statSync(sourcePath).isDirectory()) {
      if (!fs.existsSync(targetPath)) {
        fs.mkdirSync(targetPath, { recursive: true });
      }
      processFolder(sourcePath, targetPath);
    } else if (item.endsWith(".svg")) {
      let iconName = path.basename(item, ".svg");
      iconName = iconName.replaceAll("&", "-");
      iconName = prependIfStartsWithNumber(iconName, "i-");
      iconName = toCamelCase(iconName);

      const fileName = `${toKebabCase(iconName)}-icon`;
      const svgContent = fs.readFileSync(sourcePath, "utf-8");

      const iconCode = await generateIconCode(iconName, svgContent);

      const outputFilePath = path.join(targetFolder, `${fileName}.tsx`);
      fs.writeFileSync(outputFilePath, iconCode, "utf-8");
      console.log(`Generated ${outputFilePath}`);
    }
  });
}

processFolder(iconsFolder, outputFolder);
