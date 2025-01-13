import React from "react";
import { FlatList, Image } from "react-native";
import { Box, Text } from "unative/components/ui";
import { api } from "@repo/shared-api";
import { useQuery } from "@tanstack/react-query";

export const MoviesList = () => {
  const { data } = useQuery({
    ...api.tmdb.queries.trendingMoviesOptions({
      path: {
        time_window: "week",
      },
    }),
  });

  return (
    <FlatList
      data={data?.results ?? []}
      keyExtractor={(el) => el.id!.toString()}
      contentContainerClassName="p-2"
      renderItem={({ item }) => {
        return (
          <Box className="pb-4">
            <Box className="flex-1 flex-row gap-2 rounded bg-secondary p-2">
              <Image
                source={{
                  uri: api.tmdb.helpers.getImageUrl(item.poster_path, {
                    type: "poster",
                    size: "w500",
                  }),
                }}
                style={{
                  width: 120,
                  aspectRatio: 2 / 3,
                }}
                className="rounded-lg"
                resizeMode="contain"
              />
              <Box className="flex-1">
                <Text>{item.title}</Text>
              </Box>
            </Box>
          </Box>
        );
      }}
    />
  );
};
