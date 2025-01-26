import React from "react";
import { cn } from "unative/lib/utils";
import type { BoxProps } from "unative/ui/box";
import { Box } from "unative/ui/box";
import { Button } from "unative/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "unative/ui/card";
import { Label } from "unative/ui/label";
import { Text } from "unative/ui/text";
import { TextInput } from "unative/ui/text-input";

export function LoginForm({ className, ...props }: BoxProps) {
  return (
    <Box className={cn("flex flex-col gap-6", className)} {...props}>
      <Card>
        <CardHeader>
          <CardTitle className="text-2xl">Login</CardTitle>
          <CardDescription>
            Enter your email below to login to your account
          </CardDescription>
        </CardHeader>
        <CardContent>
          <React.Fragment>
            <Box className="flex flex-col gap-6">
              <Box className="grid gap-2">
                <Label htmlFor="email">Email</Label>
                <TextInput
                  id="email"
                  // type="email"
                  placeholder="m@example.com"
                  // required
                />
              </Box>
              <Box className="grid gap-2">
                <Box className="flex flex-row items-center">
                  <Label htmlFor="password">Password</Label>
                  <Button
                    // href="#"
                    variant="link"
                    size="sm"
                    className="ml-auto inline-block text-sm underline-offset-4 hover:underline"
                  >
                    <Text>Forgot your password?</Text>
                  </Button>
                </Box>
                <TextInput id="password" />
              </Box>
              <Button className="w-full">
                <Text>Login</Text>
              </Button>
              <Button variant="outline" className="w-full">
                <Text>Login with Google</Text>
              </Button>
            </Box>
            <Box className="mt-4 text-center text-sm">
              <Text className="text-center">Don&apos;t have an account? </Text>
              <Button className="underline underline-offset-4" variant="link">
                <Text>Sign up</Text>
              </Button>
            </Box>
          </React.Fragment>
        </CardContent>
      </Card>
    </Box>
  );
}
