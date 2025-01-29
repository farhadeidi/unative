import { Box } from "unative/ui/box";
import { Text } from "unative/ui/text";
import { Button } from "unative/ui/button";

export default function Home() {
  return (
    <Box className="min-h-screen bg-background flex justify-center items-center flex-col">
      <Button variant="secondary">
        <Text>Click Me 3</Text>
      </Button>
    </Box>
  );
}
