import React from "react";
import { Box, Button, Text } from "unative/components/ui";

import { ThemeOptions } from "@/components/theme-options";
import { TmdbTrendingMovies } from "@/components/tmdb-trending-movies";

export default function HomeScreen() {
  return (
    <React.Fragment>
      <Box className="flex-1">
        <Box className="gap-2 p-4">
          <Button variant="default">
            <Text>Details</Text>
          </Button>
          <Button variant="primary">
            <Text>Details</Text>
          </Button>
          <Button variant="secondary">
            <Text>Details</Text>
          </Button>
          <Button variant="destructive">
            <Text>Details</Text>
          </Button>
          <Button variant="positive">
            <Text>Details</Text>
          </Button>
        </Box>
        <TmdbTrendingMovies />
        <ThemeOptions />
      </Box>
    </React.Fragment>
  );
}
