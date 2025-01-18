import React from "react";
import { Showcase } from "@unative/blocks";
import { Box } from "@unative/universal/ui";

import { ThemeOptions } from "@/components/theme-options";
import { TmdbTrendingPeople } from "@/components/tmdb-trending-people";

export default function HomeScreen() {
  return (
    <Box className="flex-1">
      <TmdbTrendingPeople />
      <Box className="p-4">
        <Showcase />
      </Box>
      <ThemeOptions />
    </Box>
  );
}
