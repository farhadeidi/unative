import { View } from "react-native";
import { isNative, Box, Text, Button } from "unative";

export default function HomeScreen() {
  return (
    <View className="flex-1 flex flex-col justify-center items-center">
      <Text>Unative</Text>
      <Text>{isNative ? "Native" : "Web"}</Text>
      <Box className="bg-red-500 p-4">
        <Text>Unative</Text>
        <Text>Unative</Text>
      </Box>
      <Button
        onPress={() => {
          console.log("Button Pressed");
        }}
      >
        <Text>Press Me</Text>
      </Button>
    </View>
  );
}
