import { cn } from "unative/lib/utils";
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
import { TextInput } from "unative/ui/text-input";

export function LoginForm({
  className,
  ...props
}: React.ComponentPropsWithoutRef<"div">) {
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
          <form>
            <Box className="flex flex-col gap-6">
              <Box className="grid gap-2">
                <Label htmlFor="email">Email</Label>
                <TextInput
                  id="email"
                  type="email"
                  placeholder="m@example.com"
                  required
                />
              </Box>
              <Box className="grid gap-2">
                <Box className="flex items-center">
                  <Label htmlFor="password">Password</Label>
                  <a
                    href="#"
                    className="ml-auto inline-block text-sm underline-offset-4 hover:underline"
                  >
                    Forgot your password?
                  </a>
                </Box>
                <TextInput id="password" type="password" required />
              </Box>
              <Button type="submit" className="w-full">
                Login
              </Button>
              <Button variant="outline" className="w-full">
                Login with Google
              </Button>
            </Box>
            <Box className="mt-4 text-center text-sm">
              Don&apos;t have an account?{" "}
              <a href="#" className="underline underline-offset-4">
                Sign up
              </a>
            </Box>
          </form>
        </CardContent>
      </Card>
    </Box>
  );
}
