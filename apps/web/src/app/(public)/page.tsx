import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "unative/ui/card";
import { HomeIcon } from "@unative/blocks/icons";

const Home = () => {
  return (
    <div className="p-4">
      <div className="grid grid-cols-3">
        <Card>
          <CardHeader>
            <CardTitle>Switch</CardTitle>
            <CardDescription>This is description</CardDescription>
          </CardHeader>
          <CardContent>
            <HomeIcon />
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Home;
