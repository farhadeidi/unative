import Link from "next/link";
import { Box } from "unative/ui/box";
import { Button } from "unative/ui/button";
import { Text } from "unative/ui/text";
import { H1, H3, P } from "unative/ui/typography";

import { appConstants } from "@/app.constants";

export default function Home() {
  return (
    <Box className="flex flex-1 flex-col items-center justify-center gap-4">
      <Box className="w-full max-w-lg text-center">
        <H1>{appConstants.META_TITLE}</H1>
        <H3>{appConstants.META_DESCRIPTION}</H3>
        <P>
          Whether you're building a mobile app or a web project,{" "}
          <strong>Unative</strong> provides a single, unified library that
          ensures consistency, performance, and simplicity across platforms.
        </P>
      </Box>

      <Box>
        <Link passHref href="/docs">
          <Button variant="default" size="lg">
            <Text>Documents</Text>
          </Button>
        </Link>
      </Box>
    </Box>
  );
}
