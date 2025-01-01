import { ScrollView } from "react-native";
import { isNative, Box, Text, Button, useTheme } from "unative";

export default function HomeScreen() {
  const { theme } = useTheme();

  return (
    <ScrollView>
      <Box className="flex-1 flex flex-col gap-4 p-4">
        <Text className="text-destructive text-3xl">Unative</Text>
        <Text>{isNative ? "Native" : "Web"}</Text>
        <Button
          variant="positive"
          onPress={() => {
            console.log("Button Pressed");
          }}
        >
          <Text>Press Me</Text>
        </Button>
        <Text>{JSON.stringify(theme, null, 2)}</Text>
      </Box>
    </ScrollView>
  );
}
