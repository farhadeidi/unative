import React from "react";
import { Tabs } from "expo-router";
import { cn } from "unative/lib/utils";
import { Text } from "unative/ui/text";
import HomeIcon from "@unative/icons/iconsax/home";
import SettingsIcon from "@unative/icons/iconsax/setting";

import { HapticTab } from "@/components/HapticTab";

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarButton: HapticTab,
        tabBarLabel: ({ children, focused }) => {
          return (
            <Text
              className={cn(
                "text-[11px] font-bold text-muted-foreground",
                focused ? "text-primary" : "",
              )}
            >
              {children}
            </Text>
          );
        },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          tabBarIcon: ({ focused }) => (
            <HomeIcon variant={focused ? "bold" : "linear"} />
          ),
        }}
      />
      <Tabs.Screen
        name="settings"
        options={{
          title: "Settings",
          tabBarIcon: ({ focused }) => (
            <SettingsIcon variant={focused ? "bold" : "linear"} />
          ),
        }}
      />
    </Tabs>
  );
}
