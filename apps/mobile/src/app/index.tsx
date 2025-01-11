import React from "react";
import { Link } from "expo-router";
import { ScrollView } from "react-native";
import { Box, Button, Text } from "unative/components/ui";
import { PlatformDemo } from "unative/widgets/platform-demo";
import { ThemeSwitch } from "unative/widgets/theme-switch";

import { navigationLinks } from "@/navigation-links";

export default function HomeScreen() {
  return (
    <ScrollView>
      <Box className="flex flex-1 flex-col gap-4 p-4">
        <ThemeSwitch />
        <PlatformDemo />

        <Box className="flex flex-col gap-4">
          {navigationLinks.map((parent) => {
            return (
              <Box key={parent.label}>
                <Text className="mb-1 font-bold text-muted-foreground">
                  {parent.label}
                </Text>
                <Box>
                  {parent.items?.map((item) => {
                    return (
                      <React.Fragment key={item.href as string}>
                        <Link href={item.href} asChild>
                          <Button
                            variant="unstyled"
                            className="justify-start px-4 py-2 hover:bg-secondary"
                          >
                            <Text className="">{item.label}</Text>
                          </Button>
                        </Link>
                      </React.Fragment>
                    );
                  })}
                </Box>
              </Box>
            );
          })}
        </Box>
      </Box>
    </ScrollView>
  );
}
