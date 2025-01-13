import React from "react";
import { Box } from "unative/components/ui";

import { TmdbTopics } from "@/components/tmdb-topics";
import { TypographyPreview } from "@/components/typography-preview";

export default function HomeScreen() {
  return (
    <React.Fragment>
      <Box>
        <TmdbTopics />
        <TypographyPreview />
      </Box>
    </React.Fragment>
  );
}
