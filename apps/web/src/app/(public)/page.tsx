import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "unative/ui/card";
import { Text } from "unative/ui/text";
import { Home1Icon } from "@unative/icons/iconsax";

const Home = () => {
  return (
    <div className="p-4">
      <Text>Hello World 6</Text>
      <Home1Icon />
      <div className="grid grid-cols-3">
        <Card>
          <CardHeader>
            <CardTitle>Switch</CardTitle>
            <CardDescription>This is description</CardDescription>
          </CardHeader>
          <CardContent></CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Home;
