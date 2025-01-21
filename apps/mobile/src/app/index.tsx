import React from "react";
import { ScrollView } from "react-native";
import { Box } from "unative/ui/box";

import { LoginForm } from "@/components/blocks/login-form";
import { ThemeOptions } from "@/components/theme-options";
import { TmdbTrendingPeople } from "@/components/tmdb-trending-people";

export default function HomeScreen() {
  return (
    <Box className="flex-1">
      <ScrollView>
        <TmdbTrendingPeople />
        <Box className="p-4">
          <LoginForm />
        </Box>
      </ScrollView>
      <ThemeOptions />
    </Box>
  );
}
