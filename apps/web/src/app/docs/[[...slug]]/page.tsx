import Link from "next/link";
import { notFound } from "next/navigation";
import { cn } from "unative/lib";
import { Alert, AlertDescription, AlertTitle } from "unative/ui/alert";
import { Button } from "unative/ui/button";
import { Card, CardContent } from "unative/ui/card";
import { ScrollArea } from "unative/ui/scroll-area";
import { Text } from "unative/ui/text";
import { H1 } from "unative/ui/typography";
import {
  ChevronLeftIcon,
  ChevronRightIcon,
  WarningHexIcon,
} from "@unative/icons";

import { getMetaData } from "@/lib/metadata-utils";
import { getDocumentNextAndPrevLinks } from "@/lib/navigation";
import { SimpleBreadcrumb } from "@/components/simple-breadcrumb";
import { appConstants } from "@/app.constants";
import { mdxUtils } from "@/app/docs/mdx-utils";
import { RenderMDX } from "@/app/docs/render-mdx";

export async function generateStaticParams() {
  const items = await mdxUtils.getAllContentRoutes({
    baseDir: "src/content",
    type: "docs",
  });
  return items.map((item) => ({
    slug: item.routerSlug,
  }));
}

const getDocBySlug = async (slug: string[]) => {
  const item = await mdxUtils.getMDXDataBySlug({
    routerSlugsArray: slug,
    type: "docs",
  });
  if (!item) {
    notFound();
  }
  const headings = mdxUtils.extractHeadingsWithIds(item.content);
  const navLinks = getDocumentNextAndPrevLinks({
    currentPath: `/${["docs", ...slug].join("/")}`,
  });

  return {
    content: item.content,
    metadata: item.metadata,
    slug: item.slug,
    headings,
    nextLink: navLinks.nextItem,
    prevLink: navLinks.prevItem,
  };
};

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: [] }>;
}) {
  const slug = (await params).slug;
  const doc = await getDocBySlug(slug);
  if (!doc) {
    return;
  }

  const meta = getMetaData({
    pathname: `/docs/${doc.slug}`,
    title: doc.metadata.title,
    description: doc.metadata.excerpt,
    publishedTime: doc.metadata.publishedAt,
  });

  return meta;
}

const DocPage = async ({ params }: { params: Promise<{ slug: string[] }> }) => {
  const slug = (await params).slug;
  const { content, metadata, headings, nextLink, prevLink } =
    await getDocBySlug(slug);

  return (
    <div className="flex flex-row items-start gap-6">
      <div className="flex-1">
        <div className="w-full max-w-2xl">
          <script
            type="application/ld+json"
            suppressHydrationWarning
            dangerouslySetInnerHTML={{
              __html: JSON.stringify({
                "@context": "https://schema.org",
                "@type": "BlogPosting",
                headline: metadata.title,
                datePublished: metadata.publishedAt,
                dateModified: metadata.publishedAt,
                description: metadata.excerpt,
                image: `/api/og`,
                url: `${appConstants.DOMAIN_FULL_URL}${`/docs/${slug.join("/")}`}`,
                author: {
                  "@type": "Person",
                  name: "Farhad Eidi",
                },
              }),
            }}
          />
          <SimpleBreadcrumb items={["docs", ...slug]} />
          <H1 className="title mb-12 text-2xl font-semibold tracking-tighter">
            {metadata.title}
          </H1>

          <Alert variant="destructive" className="mb-8 pl-10">
            <WarningHexIcon variant="bold" size={36} />
            <AlertTitle className="text-lg font-bold">Heads up!</AlertTitle>
            <AlertDescription>
              Unative.dev is currently undergoing active updates to provide
              comprehensive and accurate documentation.{" "}
              <strong className="bg-destructive/10">
                The current version is not final
              </strong>
              , and users should not rely on it as a complete reference.
            </AlertDescription>
          </Alert>
          <article>
            <RenderMDX source={content} />
          </article>
          <div className="my-12 flex flex-row gap-6">
            <div className="flex-1">
              {!!prevLink && (
                <Link passHref href={prevLink.href}>
                  <Button
                    className="flex min-h-16 w-full flex-row items-center justify-start gap-2 border border-border px-4"
                    variant="unstyled"
                  >
                    <ChevronLeftIcon />
                    <div className="flex-1 text-left">
                      <Text className="text-sm text-muted-foreground">
                        Prev
                      </Text>
                      <Text className="font-bold">{prevLink?.title}</Text>
                    </div>
                  </Button>
                </Link>
              )}
            </div>
            <div className="flex-1">
              {!!nextLink && (
                <Link passHref href={nextLink.href}>
                  <Button
                    className="flex min-h-16 w-full flex-row items-center justify-start gap-2 border border-border px-4"
                    variant="unstyled"
                  >
                    <div className="flex-1 text-right">
                      <Text className="text-sm text-muted-foreground">
                        Next
                      </Text>
                      <Text className="font-bold">{nextLink?.title}</Text>
                    </div>
                    <ChevronRightIcon />
                  </Button>
                </Link>
              )}
            </div>
          </div>
        </div>
      </div>
      <div className="sticky top-4 w-[280px]">
        <Card className="text-sm">
          <CardContent className="py-4 pr-2">
            <ScrollArea maxHeight={280} type="always">
              <div className="pr-4">
                {headings.map((item) => {
                  return (
                    <a
                      href={`#${item.id}`}
                      key={item.id}
                      className={cn(
                        "block py-1 hover:underline",
                        item.level < 3 ? "font-bold" : "",
                      )}
                      style={{
                        paddingLeft:
                          item.level <= 2 ? 0 : `${(item.level - 2) * 1}rem`,
                      }}
                    >
                      {item.text}
                    </a>
                  );
                })}
              </div>
            </ScrollArea>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default DocPage;
