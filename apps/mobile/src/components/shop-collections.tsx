import { FlatList, Image } from "react-native";
import { Box } from "unative/ui/box";
import { Card } from "unative/ui/card";
import { Text } from "unative/ui/text";

import mock from "@/data/collections.json";

export const ShopCollections = () => {
  const data = [...mock.data.collections.edges.slice(0, 6)];

  return (
    <Box className="">
      <FlatList
        data={data}
        keyExtractor={(el) => el.node.id.toString()}
        horizontal
        ItemSeparatorComponent={() => <Box className="w-2" />}
        contentContainerClassName="p-4"
        showsHorizontalScrollIndicator={false}
        renderItem={({ item }) => {
          return (
            <Box key={item.node.id} className="w-32">
              <Card>
                <Image
                  source={{ uri: item.node.image.url }}
                  style={{
                    aspectRatio: 4 / 3,
                  }}
                />
                <Box className="p-2">
                  <Text className="">{item.node.title}</Text>
                </Box>
              </Card>
            </Box>
          );
        }}
      />
      {/* {data.map((product) => {
        return (
          <Box key={product.node.id} className="w-1/3">
            <Card>
              <Image
                source={{ uri: product.node.image.url }}
                style={{
                  aspectRatio: 4 / 3,
                }}
              />
              <Box className="p-2">
                <Text className="">{product.node.title}</Text>
              </Box>
            </Card>
          </Box>
        );
      })} */}
    </Box>
  );
};
