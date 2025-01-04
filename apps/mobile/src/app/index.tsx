import { ScrollView } from "react-native";
import { Box, Text, Button } from "unative/ui/elements";
import { ThemeSwitch } from "unative/ui/m/theme-switch";
import { PlatformDemo } from "unative/ui/m/platform-demo";

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
