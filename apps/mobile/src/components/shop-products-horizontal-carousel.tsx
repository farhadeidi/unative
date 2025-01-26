import { FlatList, Image } from "react-native";
import { Box } from "unative/ui/box";
import { Card } from "unative/ui/card";
import { Text } from "unative/ui/text";
import { H4 } from "unative/ui/typography";

import mock from "@/data/products.json";

export type ShopProductsHorizontalCarouselProps = {
  from: number;
  to: number;
  label?: string;
};
export const ShopProductsHorizontalCarousel = ({
  from = 0,
  to = 6,
  label,
}: ShopProductsHorizontalCarouselProps) => {
  const data = [...mock.data.products.edges.slice(from, to)];

  return (
    <Box>
      {!!label && <H4 className="px-4">{label}</H4>}

      <FlatList
        data={data}
        keyExtractor={(el) => el.node.id.toString()}
        contentContainerClassName="px-4 py-2"
        horizontal
        ItemSeparatorComponent={() => <Box className="w-4" />}
        showsHorizontalScrollIndicator={false}
        renderItem={({ item }) => {
          const price = `${item.node.variants.edges?.[0]?.node.price.amount} ${item.node.variants.edges?.[0]?.node.price.currencyCode}`;
          return (
            <Box key={item.node.id} className="w-48">
              <Card>
                <Box className="p-0">
                  <Image
                    source={{ uri: item.node.featuredImage.url }}
                    className="aspect-square rounded-lg"
                  />
                </Box>
                <Box className="p-2">
                  <Text className="font-bold" numberOfLines={1}>
                    {item.node.title}
                  </Text>
                  <Text className="text-muted-foreground">{price}</Text>
                </Box>
              </Card>
            </Box>
          );
        }}
      />
    </Box>
  );
};
