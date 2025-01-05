import { ScrollView } from "react-native";
import { Box, Text, Button } from "unative/components/ui";
import { ThemeSwitch } from "unative/widgets/theme-switch";
import { PlatformDemo } from "unative/widgets/platform-demo";

export default function HomeScreen() {
  return (
    <ScrollView>
      <Box className="flex-1 flex flex-col gap-4 p-4">
        <Text className="text-destructive text-3xl">Unative</Text>
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
