import { View } from "react-native";
import { isNative, Box, Text, Button } from "unative";

export default function HomeScreen() {
  return (
    <View className="flex-1 flex flex-col justify-center items-center">
      <Text className="text-destructive text-3xl">Unative</Text>
      <Text>{isNative ? "Native" : "Web"}</Text>
      <Button
        variant="destructive"
        onPress={() => {
          console.log("Button Pressed");
        }}
      >
        <Text>Button Example</Text>
      </Button>
    </View>
  );
}
