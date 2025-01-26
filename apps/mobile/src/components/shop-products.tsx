import { Image } from "react-native";
import { Box } from "unative/ui/box";
import { Text } from "unative/ui/text";

import mock from "@/data/products.json";

export const ShopProducts = ({}) => {
  return (
    <Box>
      {mock.data.products.edges.map((product) => {
        return (
          <Box key={product.node.id}>
            <Image
              source={{ uri: product.node.featuredImage.url }}
              width={100}
              height={100}
            />
            <Text>{product.node.title}</Text>
          </Box>
        );
      })}
    </Box>
  );
};
