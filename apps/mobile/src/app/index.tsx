import { ScrollView } from "react-native";
import { Box, Button, Text } from "unative/components/ui";
import { PlatformDemo } from "unative/widgets/platform-demo";
import { ThemeSwitch } from "unative/widgets/theme-switch";

export default function HomeScreen() {
  return (
    <ScrollView>
      <Box className="flex flex-1 flex-col gap-4 p-4">
        <Text className="text-3xl text-destructive">Unative</Text>
        <Button
          variant="primary"
          onPress={() => {
            console.log("Button Pressed");
          }}
        >
          <Text>Press Me</Text>
        </Button>
        <ThemeSwitch />
        <PlatformDemo />
      </Box>
    </ScrollView>
  );
}
