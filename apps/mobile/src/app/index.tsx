import React from "react";
import { ScrollView } from "react-native";
import { Box } from "unative/ui/box";
import { ThemeSwitch } from "@unative/blocks/widgets/theme-switch";

import { TmdbTrendingPeople } from "@/components/tmdb-trending-people";

export default function HomeScreen() {
  return (
    <Box className="flex-1">
      <ScrollView>
        <TmdbTrendingPeople />
        <Box className="p-4">{/* <LoginForm /> */}</Box>
      </ScrollView>
      <ThemeSwitch />
    </Box>
  );
}
