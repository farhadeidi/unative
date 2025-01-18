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
  cn,
  Text,
} from "@unative/universal";

import { StyledAlertDialog } from "./styled-alert-dialog";
import { SwitchWithLabel } from "./switch-with-label";

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

            <SwitchWithLabel
              label="Strictly Necessary"
              description="These cookies are essential in order to use the website and use its features."
              isChecked={isChecked}
              onCheckedChange={setIsChecked}
            />

            <SwitchWithLabel
              label="Functional Cookies"
              description="These cookies allow the website to provide personalized functionality."
              isChecked={isChecked}
              onCheckedChange={setIsChecked}
            />
            <StyledAlertDialog />
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
