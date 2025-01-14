import React from "react";

import { ThemeOptions } from "@/components/theme-options";
import { TmdbTrendingMovies } from "@/components/tmdb-trending-movies";
import { TmdbTrendingPeople } from "@/components/tmdb-trending-people";
import { Box } from "@/components/ui/box";

export default function HomeScreen() {
  return (
    <React.Fragment>
      <Box className="flex-1">
        <TmdbTrendingPeople />
        <TmdbTrendingMovies />
        <ThemeOptions />
      </Box>
    </React.Fragment>
  );
}
