import React from "react";
import { FlatList, Image } from "react-native";
import { Box, Button, Text } from "unative/components/ui";
import { Card } from "unative/components/ui/card";
import { FilterTabs } from "unative/components/ui/filter-tabs";
import { H4, P } from "unative/components/ui/typography";
import { api } from "@repo/shared-api";
import { useQuery } from "@tanstack/react-query";

export const TmdbTrendingMovies = () => {
  const [value, setValue] = React.useState("all");

  const genresQuery = useQuery({
    ...api.tmdb.queries.genreMovieListOptions(),
  });

  const dataQuery = useQuery({
    ...api.tmdb.queries.discoverMovieOptions({
      query: {
        with_genres: value === "all" ? undefined : value,
        sort_by: "popularity.desc",
        region: "US",
      },
    }),
  });

  return (
    <Box>
      <Box className="py-2">
        <FilterTabs
          data={[
            {
              label: "All Genres",
              value: "all",
            },
            ...(genresQuery.data?.genres?.map((el) => {
              return {
                label: el.name!,
                value: el.id!.toString(),
              };
            }) ?? []),
          ]}
          value={value}
          onChange={setValue}
        />
      </Box>

      <FlatList
        data={dataQuery.data?.results ?? []}
        keyExtractor={(el) => el.id!.toString()}
        contentContainerClassName="p-2"
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => {
          return (
            <Box className="pb-4">
              <Card className="flex flex-row gap-4 p-4">
                <Image
                  source={{
                    uri: api.tmdb.helpers.getImageUrl(item.poster_path, {
                      type: "poster",
                      size: "w500",
                    }),
                  }}
                  style={{
                    width: 100,
                    aspectRatio: 2 / 3,
                  }}
                  className="rounded-lg"
                  resizeMode="contain"
                />
                <Box className="flex-1 flex-col gap-2">
                  <H4>{item.title}</H4>
                  <Box className="bg-muted p-4">
                    <P numberOfLines={2} className="text-muted-foreground">
                      {item.overview}
                    </P>
                  </Box>
                  <P numberOfLines={2}>{item.vote_average}</P>
                  <P numberOfLines={2}>{item.vote_count}</P>
                  <P numberOfLines={2}>{item.genre_ids?.join(", ")}</P>
                  <P numberOfLines={2}>{item.original_language}</P>
                  <P numberOfLines={2}>{item.release_date}</P>
                  <Button variant="default">
                    <Text>Details</Text>
                  </Button>
                </Box>
              </Card>
            </Box>
          );
        }}
      />
    </Box>
  );
};
