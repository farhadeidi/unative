import React from "react";
import { ScrollView } from "react-native";
import { Box } from "unative/ui/box";
import { Button } from "unative/ui/button";
import { Home2Icon as HomeBoldIcon } from "@unative/blocks/icons/bold";
import { Home2Icon as HomeIcon } from "@unative/blocks/icons/linear";
import { ThemeSwitchWithSegmentedControl } from "@unative/blocks/widgets/theme-switch-with-segmented-control";

import { ShopCollections } from "@/components/shop-collections";
import { ShopProductsHorizontalCarousel } from "@/components/shop-products-horizontal-carousel";

export default function HomeScreen() {
  return (
    <Box className="flex-1">
      <ScrollView>
        <HomeIcon size={48} className="text-primary" />
        <HomeBoldIcon size={48} className="text-primary" />
        <Button>
          <HomeBoldIcon />
        </Button>
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
