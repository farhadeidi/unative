import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "unative/ui/card";

const Home = () => {
  return (
    <div className="p-4">
      <div className="grid grid-cols-3">
        <Card>
          <CardHeader>
            <CardTitle>Switch</CardTitle>
            <CardDescription>This is description</CardDescription>
          </CardHeader>
          <CardContent>123</CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Home;
