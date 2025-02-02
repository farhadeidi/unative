import { HtmlHTMLAttributes } from "react";
import { highlight } from "sugar-high";
import { cn } from "unative/lib";
import { Box } from "unative/ui/box";
import { ScrollArea, ScrollBar } from "unative/ui/scroll-area";
import FileIcon from "@unative/icons/iconsax/document-1";

import CopyCodeButton from "@/components/code-copy-button";

export type CodeProps = HtmlHTMLAttributes<HTMLDivElement> & {
  title?: string;
};

export const Code = ({ children, className, title, ...props }: CodeProps) => {
  const html = highlight(children as string);
  const isCodeBlock = className?.includes("language-");

  if (!isCodeBlock) {
    return (
      <code className={className} {...props}>
        {children}
      </code>
    );
  }

  return (
    <Box className="dark mt-4">
      {!!title && (
        <span className="flex flex-row items-center gap-1 pb-1">
          <FileIcon size={20} variant="bold" />
          <div className="text-sm font-bold">{title}</div>
        </span>
      )}

      <ScrollArea
        className="rounded-lg bg-neutral-900 p-4 text-sm leading-[22px]"
        type="always"
        maxHeight={410}
      >
        <code
          className={cn("pr-12", className)}
          {...props}
          dangerouslySetInnerHTML={{ __html: html }}
        />
        <CopyCodeButton
          code={children as string}
          className="absolute right-5 top-3"
        />
        <ScrollBar orientation="vertical" thumbClassName="bg-white" />
        <ScrollBar orientation="horizontal" thumbClassName="bg-white" />
      </ScrollArea>
    </Box>
  );
};
