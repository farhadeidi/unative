import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "unative/ui/card";
import { Text } from "unative/ui/text";
import {} from "unative/ui/alert";
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

// "./ui/*": {
//   "react-native": {
//     "types": "./ui/*/native.d.ts",
//     "default": "./ui/*/native.js"
//   },
//   "react-server": {
//     "types": "./ui/*/web.d.ts",
//     "default": "./ui/*/web.js"
//   },
//   "require": {
//     "types": "./ui/*/web.d.ts",
//     "default": "./ui/*/web.js"
//   },
//   "import": {
//     "types": "./ui/*/web.d.ts",
//     "default": "./ui/*/web.js"
//   },
//   "default": {
//     "types": "./ui/*/web.d.ts",
//     "default": "./ui/*/web.js"
//   }
// },
// "./ui/*/native": {
//   "types": "./ui/*/native.d.ts",
//   "require": "./ui/*/native.cjs",
//   "import": "./ui/*/native.js",
//   "default": "./ui/*/native.js"
// },
// "./ui/*/web": {
//   "types": "./ui/*/web.d.ts",
//   "require": "./ui/*/web.cjs",
//   "import": "./ui/*/web.js",
//   "default": "./ui/*/web.js"
// }
