import React from "react";
import Link from "next/link";
import { MDXRemote, MDXRemoteProps } from "next-mdx-remote/rsc";
import rehypeMdxCodeProps from "rehype-mdx-code-props";
import remarkGfm from "remark-gfm";
import { Box } from "unative/ui/box";
import { Button } from "unative/ui/button";
import { H1, H2, H3, H4, P } from "unative/ui/typography";

import { Code as CodeComponent } from "@/components/code";
import { mdxUtils } from "@/app/docs/mdx-utils";

function CustomLink(props: React.ComponentProps<"a">) {
  const href = props.href;

  if (href?.startsWith("/")) {
    return (
      <Link href={href} className="text-link" {...props}>
        {props.children}
      </Link>
    );
  }

  if (href?.startsWith("#")) {
    return <a {...props} />;
  }

  return (
    <a
      target="_blank"
      rel="noopener noreferrer"
      className="font-bold text-link underline underline-offset-4 duration-200 hover:opacity-75"
      {...props}
    />
  );
}

function RoundedImage(props: React.ComponentPropsWithRef<"img">) {
  return <img alt={props.alt ?? "no-alt"} className="rounded-lg" {...props} />;
}

function Code(props: React.ComponentProps<"code">) {
  return <CodeComponent {...props} />;
  // const codeHTML = highlight(children as string);
  // return (
  //   <span
  //     className="bg-black p-4 rounded-lg my-2 block overflow-auto max-h-96"
  //     suppressHydrationWarning
  //   >
  //     <code
  //       dangerouslySetInnerHTML={{ __html: codeHTML }}
  //       suppressHydrationWarning
  //       {...props}
  //     />
  //   </span>
  // );
}

const components = {
  Button,
  h1: (props: React.ComponentProps<"h1">) => (
    <H1 id={mdxUtils.getSlugString(props.children)} {...props} />
  ),
  h2: (props: React.ComponentProps<"h2">) => (
    <H2
      id={mdxUtils.getSlugString(props.children)}
      className="mt-4"
      {...props}
    />
  ),
  h3: (props: React.ComponentProps<"h3">) => (
    <H3
      className="mt-8"
      id={mdxUtils.getSlugString(props.children)}
      {...props}
    />
  ),
  h4: (props: React.ComponentProps<"h4">) => (
    <H4
      className="mt-6"
      id={mdxUtils.getSlugString(props.children)}
      {...props}
    />
  ),
  Space: () => {
    return <Box className="h-12"></Box>;
  },

  UnderDevelopmentAlert: () => {
    return (
      <div>
        ## 🚧 **Documentation in Progress** Unative.dev is currently undergoing
        active updates to provide comprehensive and accurate documentation. The
        current version is not final, and users should not rely on it as a
        complete reference. Stay tuned for updates and improvements!
      </div>
    );
  },

  p: P,
  // p: ({ className, ...props }: React.ComponentProps<"p">) => {
  //   return <p className={cn("py-2 text-foreground", className)} {...props} />;
  // },

  Image: RoundedImage,
  a: CustomLink,
  code: Code,
};

export function RenderMDX({
  components: otherComponents,
  ...props
}: MDXRemoteProps) {
  return (
    <MDXRemote
      {...props}
      options={{
        mdxOptions: {
          remarkPlugins: [remarkGfm],
          rehypePlugins: [
            [
              rehypeMdxCodeProps,
              { tagName: "code", elementAttributeNameCase: "react" },
            ],
          ],
        },
      }}
      components={{ ...components, ...(otherComponents || {}) }}
    />
  );
}
