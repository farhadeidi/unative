import React from "react";
import { Showcase } from "@unative/universal/blocks";
import { Box } from "@unative/universal/ui";

import { ThemeOptions } from "@/components/theme-options";
import { TmdbTrendingMovies } from "@/components/tmdb-trending-movies";
import { TmdbTrendingPeople } from "@/components/tmdb-trending-people";

export default function HomeScreen() {
  return (
    <React.Fragment>
      <Box className="flex-1">
        <Box className="p-4">
          <Showcase />
        </Box>
        <TmdbTrendingPeople />
        <TmdbTrendingMovies />
        <ThemeOptions />
      </Box>
    </React.Fragment>
  );
}
