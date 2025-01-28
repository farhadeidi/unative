import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "unative/ui/card";
import { Text } from "unative/ui/text";
import { AddIcon } from "@unative/icons/iconsax/add";

const Home = () => {
  return (
    <div className="p-4">
      <Text>Hello World</Text>
      <div className="grid grid-cols-3">
        <Card>
          <CardHeader>
            <AddIcon />
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
