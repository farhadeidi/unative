"use client";

import React, { useState } from "react";
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
  Label,
  Switch,
  Text,
} from "@unative/universal";

import { cn } from "../../lib/utils";

export type ShowcaseProps = BoxProps & {};
export const Showcase = ({ className, children, ...props }: ShowcaseProps) => {
  const [isChecked, setIsChecked] = useState(false);
  return (
    <Box className={cn("flex flex-row", className)} {...props}>
      <Card className="w-full max-w-lg">
        <CardHeader>
          <CardTitle>Cookie Settings</CardTitle>
          <CardDescription>Manage Settings</CardDescription>
        </CardHeader>
        <CardContent>
          <Box>
            <Text>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima
              laboriosam soluta itaque, provident quos maiores sit pariatur
              tempore reprehenderit molestias excepturi quibusdam doloribus
              optio ea. Quo blanditiis quis laudantium nulla?
            </Text>
            <Box className="my-4 flex flex-row gap-2 rounded-lg border border-border p-4">
              <Box className="flex-1">
                <Label htmlFor="my-checkbox">Mark as primary content</Label>
              </Box>
              <Switch
                id="my-checkbox"
                checked={isChecked}
                onCheckedChange={setIsChecked}
              />
            </Box>
          </Box>
        </CardContent>
        <CardFooter>
          <Button>
            <Text>Save Changes</Text>
          </Button>
        </CardFooter>
      </Card>
    </Box>
  );
};
