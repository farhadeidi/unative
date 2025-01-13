import React from "react";
import { FlatList } from "react-native";
import { Box, Center, Text } from "unative/components/ui";
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "unative/components/ui/avatar";
import { api } from "@repo/shared-api";
import { useQuery } from "@tanstack/react-query";

export const TmdbTrendingPeople = () => {
  const { data } = useQuery({
    ...api.tmdb.queries.trendingPeopleOptions({
      path: {
        time_window: "week",
      },
    }),
  });

  return (
    <Box className="py-4">
      <FlatList
        data={data?.results ?? []}
        horizontal
        keyExtractor={(el) => el.id!.toString()}
        showsHorizontalScrollIndicator={false}
        renderItem={({ item }) => {
          return (
            <Box className="w-32">
              <Center>
                <Avatar alt={item.original_name || ""} className="size-24">
                  <AvatarImage
                    source={{
                      uri: api.tmdb.helpers.getImageUrl(item.profile_path, {
                        type: "profile",
                        size: "w185",
                      }),
                    }}
                  />
                  <AvatarFallback>
                    <Text>{item.original_name!.slice(0, 2)}</Text>
                  </AvatarFallback>
                </Avatar>
              </Center>
              <Text numberOfLines={2} className="text-center font-medium">
                {item.name}
              </Text>
            </Box>
          );
        }}
      />
    </Box>
  );
};
