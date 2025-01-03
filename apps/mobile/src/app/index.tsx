import { ScrollView } from "react-native";
import { libraryEnvironment } from "unative";
import { Box, Text, Button } from "unative/ui/core";
import { ThemeSwitch } from "unative/ui/m/theme-switch";
import { PlatformDemo } from "unative/ui/m/platform-demo";

export default function HomeScreen() {
  return (
    <ScrollView>
      <Box className="flex-1 flex flex-col gap-4 p-4">
        <Text className="text-destructive text-3xl">Unative</Text>
        <Text>{libraryEnvironment === "native" ? "Native" : "Web"}</Text>
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
