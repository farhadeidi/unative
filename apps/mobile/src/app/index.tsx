import React from "react";
import { Box } from "@unative/universal";
import { Showcase } from "@unative/universal/blocks";

import { ThemeOptions } from "@/components/theme-options";
import { TmdbTrendingMovies } from "@/components/tmdb-trending-movies";
import { TmdbTrendingPeople } from "@/components/tmdb-trending-people";

export default function HomeScreen() {
  return (
    <React.Fragment>
      <Box className="flex-1">
        <Showcase />
        <TmdbTrendingPeople />
        <TmdbTrendingMovies />
        <ThemeOptions />
      </Box>
    </React.Fragment>
  );
}
