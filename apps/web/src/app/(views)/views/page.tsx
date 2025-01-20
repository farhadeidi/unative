import type { Metadata } from "next";
import { Box, Center } from "unative/ui/box";

import { LoginForm } from "@/components/blocks/login-form";

export const metadata: Metadata = {
  title: "DemoPage",
};

const DemoPage = () => {
  return (
    <Center className="flex-1">
      <Box className="w-full max-w-md">
        <LoginForm />
      </Box>
    </Center>
  );
};

export default DemoPage;
