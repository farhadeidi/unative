import React from "react";
import fs from "fs";
import matter from "gray-matter";
import path from "path";

type Metadata = {
  title: string;
  publishedAt: string;
  excerpt?: string;
  image?: string;
  keywords?: string[];
  tags?: string[];
};

// export function getAllDocs() {
//   return getMDXData(path.join(process.cwd(), "src", "content"));
// }

export function formatDate(date: string, includeRelative = false) {
  const currentDate = new Date();
  if (!date.includes("T")) {
    date = `${date}T00:00:00`;
  }
  const targetDate = new Date(date);

  const yearsAgo = currentDate.getFullYear() - targetDate.getFullYear();
  const monthsAgo = currentDate.getMonth() - targetDate.getMonth();
  const daysAgo = currentDate.getDate() - targetDate.getDate();

  let formattedDate = "";

  if (yearsAgo > 0) {
    formattedDate = `${yearsAgo}y ago`;
  } else if (monthsAgo > 0) {
    formattedDate = `${monthsAgo}mo ago`;
  } else if (daysAgo > 0) {
    formattedDate = `${daysAgo}d ago`;
  } else {
    formattedDate = "Today";
  }

  const fullDate = targetDate.toLocaleString("en-us", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });

  if (!includeRelative) {
    return fullDate;
  }

  return `${fullDate} (${formattedDate})`;
}

type TableCell = {
  text: string;
  align: "left" | "center" | "right" | "default";
};

type TableRow = TableCell[];
type TableData = TableRow[];

const extractTableData = (props: React.ComponentProps<"table">): TableData => {
  const tableElement = React.createElement("table", props);

  if (!tableElement.props.children) return [];

  const tableSections = React.Children.toArray(tableElement.props.children);

  const rows = tableSections.flatMap((section) => {
    if (!React.isValidElement(section)) return [];

    return React.Children.toArray(section.props.children).filter(
      (child) => React.isValidElement(child) && child.type === "tr",
    );
  });

  return rows.map((row) => {
    if (!React.isValidElement(row)) return [];

    const cells = React.Children.toArray(row.props.children).filter(
      (cell) =>
        React.isValidElement(cell) &&
        (cell.type === "td" || cell.type === "th"),
    );

    return cells.map((cell) => {
      if (!React.isValidElement(cell)) return { text: "", align: "default" };

      const textAlign = cell.props.style?.textAlign || "default";

      return {
        text: (cell.props.children as string).trim(),
        align: ["left", "center", "right"].includes(textAlign)
          ? textAlign
          : "default",
      };
    });
  });
};

const getSlugString = (children: React.ReactNode) => {
  if (typeof children !== "string") {
    return "";
  }

  return children
    .toString()
    .toLowerCase()
    .trim() // Remove whitespace from both ends of a string
    .replace(/\s+/g, "-") // Replace spaces with -
    .replace(/&/g, "-and-") // Replace & with 'and'
    .replace(/[^\w\\-]+/g, "") // Remove all non-word characters except for -
    .replace(/\\-\\-+/g, "-"); // Replace multiple - with single -
};

export type Heading = {
  level: number;
  text: string;
  id: string;
};

/**
 * Extracts headings (H1 to H6) from the given MDX or Markdown content and generates IDs.
 * @param content - The MDX or Markdown content as a string.
 * @returns An array of Heading objects with level, text, and id.
 */
function extractHeadingsWithIds(content: string): Heading[] {
  const headingPattern = /^(#{1,6})\s(.+)/gm;
  const headings: Heading[] = [];

  let match: RegExpExecArray | null;
  while ((match = headingPattern.exec(content)) !== null) {
    const level = match[1].length;
    const text = match[2].trim();
    const id = text
      .toLowerCase()
      .replace(/\s+/g, "-") // Replace spaces with hyphens
      .replace(/[^\w\\-]/g, ""); // Remove special characters

    headings.push({ level, text, id });
  }

  return headings;
}

const isFileExists = (filePath: string) => {
  return fs.existsSync(filePath);
};

const removeFileExtension = (value: string) => {
  return value.replace(/(?:\/?index)?\.(md|mdx)$/i, "");
};

const getRouterSlugsArrayByPath = (value: string) => {
  return value.split("/");
};
const getPathByRouterSlugsArray = (value: string[]) => {
  return value.join("/");
};

const getMDXDataByPath = async ({
  baseDir,
  routerSlugsArray,
}: {
  baseDir: string;
  routerSlugsArray: string[];
}) => {
  let filePath = path.join(
    baseDir,
    getPathByRouterSlugsArray(routerSlugsArray),
  );
  if (!filePath.endsWith(".mdx")) {
    const filePathWithFormat = filePath + ".mdx";
    const isExists = isFileExists(filePathWithFormat);
    if (isExists) {
      filePath = filePathWithFormat;
    } else {
      const filePathWithIndex = filePath + "/index.mdx";
      const isExists = isFileExists(filePathWithIndex);
      filePath = isExists ? filePathWithIndex : filePath;
    }
  }
  const rawContent = fs.readFileSync(filePath, "utf8");
  const res = matter(rawContent);

  return {
    slug: removeFileExtension(getPathByRouterSlugsArray(routerSlugsArray)),
    routerSlug: routerSlugsArray.map((el) => removeFileExtension(el)),
    title: res.data.title,
    content: res.content,
    metadata: res.data as Metadata,
  };
};

const getMDXDataBySlug = async ({
  routerSlugsArray,
  type,
}: {
  routerSlugsArray: string[];
  type: "docs";
}) => {
  const baseDir = path.join(process.cwd(), "src", "content", type);
  const res = getMDXDataByPath({ baseDir, routerSlugsArray });
  return res;
};

const getFirstPart = (str: string) => {
  const match = str.match(/^[^\\/]+/);
  return match ? match[0] : "";
};

type MdxRoute = {
  slug: string;
  routerSlug: string[];
  title: string;
  metadata: Metadata;
  type: string;
  content?: string;
};

const getAllContentRoutes = async ({
  baseDir,
  withContents,
  type,
}: {
  baseDir: string;
  withContents?: boolean;
  type: "docs";
}) => {
  const folderPath = path.join(process.cwd(), baseDir);
  const allFiles = fs.readdirSync(folderPath, { recursive: true });

  const routes: MdxRoute[] = [];

  await allFiles.forEach(async (filePath) => {
    if (typeof filePath !== "string") return;
    if (!filePath.endsWith(".mdx")) return;
    const { content, metadata, slug, title, routerSlug } =
      await getMDXDataByPath({
        baseDir,
        routerSlugsArray: getRouterSlugsArrayByPath(filePath),
      });

    const resultType = getFirstPart(slug);
    if (resultType !== type) return;
    if (routerSlug.length > 0 && routerSlug[0] === type) {
      routerSlug.shift();
    }

    const mdxRoute: MdxRoute = {
      type: resultType,
      slug: slug,
      routerSlug: routerSlug,
      title: title,
      metadata: metadata,
    };

    if (withContents) {
      mdxRoute.content = content;
    }

    routes.push(mdxRoute);
  });

  return routes;
};

export const mdxUtils = {
  formatDate,
  extractTableData,
  getSlugString,
  extractHeadingsWithIds,
  getMDXDataByPath,
  getMDXDataBySlug,
  getAllContentRoutes,
};

// const start = async () => {
//   // const res = await getMDXDataBySlug({
//   //   slug: ["setup"],
//   //   type: "docs",
//   // });
//   // console.log("dev => res", res);

//   const routes = await getAllContentRoutes({ baseDir: "src/content" });
//   console.log("dev => routes", routes);
// };
// start();
