import { ThemeSwitch } from "@/components/theme-switch";
import { ScrollView } from "react-native";
import { libraryEnvironment } from "unative";
import { Box, Text, Button } from "unative/ui";

export default function HomeScreen() {
  // const { theme } = useTheme();

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
        {/* <Text>{JSON.stringify(theme, null, 2)}</Text> */}
      </Box>
    </ScrollView>
  );
}
