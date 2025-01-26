import React from "react";
import { ScrollView } from "react-native";
import { Box } from "unative/ui/box";
import { HomeLinearIcon, HomeSolidIcon } from "@unative/blocks/icons/home-icon";
import { ThemeSwitchWithSegmentedControl } from "@unative/blocks/widgets/theme-switch-with-segmented-control";

import { ShopCollections } from "@/components/shop-collections";
import { ShopProductsHorizontalCarousel } from "@/components/shop-products-horizontal-carousel";

export default function HomeScreen() {
  return (
    <Box className="flex-1">
      <ScrollView>
        <HomeLinearIcon size={48} className="text-red-500" />
        <HomeSolidIcon size={48} className="text-primary" />
        <Box className="gap-4">
          <ShopCollections />
          <Box className="gap-4">
            <ShopProductsHorizontalCarousel
              label="Latest Products"
              from={0}
              to={4}
            />

            <ShopProductsHorizontalCarousel
              label="Latest Products"
              from={5}
              to={10}
            />
          </Box>
        </Box>
      </ScrollView>
      <Box className="pb-safe">
        <Box className="p-4">
          <ThemeSwitchWithSegmentedControl />
        </Box>
      </Box>
    </Box>
  );
}
