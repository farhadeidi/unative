import React from "react";
import {
  Box,
  BoxProps,
  Button,
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
  Text,
} from "@unative/universal";

import { cn } from "../../lib/utils";

export type ShowcaseProps = BoxProps & {};
export const Showcase = ({ className, children, ...props }: ShowcaseProps) => {
  return (
    <Box className={cn("flex flex-row", className)} {...props}>
      <Card className="w-full max-w-lg">
        <CardHeader>
          <CardTitle>Cookie Settings</CardTitle>
          <CardDescription>Manage Settings</CardDescription>
        </CardHeader>
        <CardContent>
          <Text>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima
            laboriosam soluta itaque, provident quos maiores sit pariatur
            tempore reprehenderit molestias excepturi quibusdam doloribus optio
            ea. Quo blanditiis quis laudantium nulla?
          </Text>
        </CardContent>
        <CardFooter>
          <Button variant="primary">
            <Text>Save Changes</Text>
          </Button>
        </CardFooter>
      </Card>
    </Box>
  );
};
