import React from "react";
import { Box } from "unative/components/ui";
import { FilterTabs } from "unative/components/ui/filter-tabs";
import { api } from "@repo/shared-api";
import { useQuery } from "@tanstack/react-query";

export const TmdbTopics = () => {
  const [value, setValue] = React.useState("14");
  const { data } = useQuery({
    ...api.tmdb.queries.genreMovieListOptions(),
  });

  return (
    <Box className="py-4">
      <FilterTabs
        data={
          data?.genres?.map((el) => {
            return {
              label: el.name!,
              value: el.id!.toString(),
            };
          }) ?? []
        }
        value={value}
        onChange={setValue}
      />
    </Box>
  );
};
