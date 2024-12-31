import { View, Text } from "react-native";
import { isNative } from "unative";

export default function HomeScreen() {
  return (
    <View className="flex-1 flex flex-col justify-center items-center">
      <Text>Unative</Text>
      <Text>{isNative ? "Native" : "Web"}</Text>
    </View>
  );
}
