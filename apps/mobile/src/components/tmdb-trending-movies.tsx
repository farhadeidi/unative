import React from "react";
import { FlatList, Image } from "react-native";
import { Card } from "unative/components/ui/card";
import { FilterTabs } from "unative/components/ui/filter-tabs";
import { Pill } from "unative/components/ui/pill";
import { Skeleton } from "unative/components/ui/skeleton";
import { H4, P } from "unative/components/ui/typography";
import { api } from "@repo/shared-api";
import { useQuery } from "@tanstack/react-query";

import { CalendarDaysIcon, StarIcon } from "@/components/icons";
import { Box, HStack } from "@/components/ui/box";
import { Button } from "@/components/ui/button";
import { Text } from "@/components/ui/text";

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
        ListEmptyComponent={() => {
          return (
            <Box className="gap-2">
              {[...Array(5)].map((_, index) => {
                return (
                  <Skeleton key={index} className="h-[200px] rounded-card" />
                );
              })}
            </Box>
          );
        }}
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
                    width: 110,
                    aspectRatio: 2 / 3,
                  }}
                  className="rounded-lg"
                  resizeMode="contain"
                />
                <Box className="flex-1 flex-col gap-2">
                  <H4>{item.title}</H4>

                  <P numberOfLines={2} className="text-muted-foreground">
                    {item.overview}
                  </P>
                  <HStack className="gap-4">
                    <HStack className="items-center gap-1">
                      <StarIcon className="text-foreground" size={18} />
                      <P>{`${item.vote_average?.toFixed(2)}`}</P>
                    </HStack>

                    <HStack className="items-center gap-1">
                      <CalendarDaysIcon className="text-foreground" size={18} />
                      <P numberOfLines={2}>{item.release_date}</P>
                    </HStack>
                  </HStack>

                  <HStack>
                    {item.genre_ids?.map((genreId) => {
                      const genre = genresQuery.data?.genres?.find(
                        (el) => el.id === genreId,
                      );

                      if (!genre) return null;
                      return (
                        <Pill key={genreId} variant="default">
                          <Text>{genre.name}</Text>
                        </Pill>
                      );
                    })}
                  </HStack>
                  <Button variant="primary">
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
