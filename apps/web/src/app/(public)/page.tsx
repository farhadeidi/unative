import React from "react";
import { capitalize } from "remeda";

import { Box } from "@/components/ui/box";
import { Button, ButtonProps } from "@/components/ui/button";
import { Text } from "@/components/ui/text";

const buttonVariants: ButtonProps[] = [
  {
    variant: "primary",
  },
  {
    variant: "default",
  },
  {
    variant: "secondary",
  },
  {
    variant: "outline",
  },
  {
    variant: "destructive",
  },
  {
    variant: "destructive-outline",
  },
  {
    variant: "destructive-link",
  },
  {
    variant: "link",
  },
  {
    variant: "positive",
  },
  {
    variant: "ghost",
  },
];

const buttons: { label: string; items: ButtonProps[] }[] = [
  {
    label: "Buttons",
    items: buttonVariants,
  },
  // {
  //   label: "Size: SM",
  //   items: buttonVariants.map((el) => ({ ...el, size: "sm" })),
  // },
  // {
  //   label: "Size: LG",
  //   items: buttonVariants.map((el) => ({ ...el, size: "lg" })),
  // },
  // {
  //   label: "Size: XL",
  //   items: buttonVariants.map((el) => ({ ...el, size: "xl" })),
  // },
];

const Home = () => {
  return (
    <div className="p-4">
      <div className="flex flex-col gap-4">
        {buttons.map((parent) => (
          <Box key={parent.label} className="flex flex-col gap-1">
            <Box>
              <Text>{parent.label}</Text>
            </Box>
            <Box className="flex flex-row flex-wrap gap-2">
              {parent.items.map((item, index) => {
                return (
                  <Button key={index} {...item}>
                    <Text>{capitalize(item.variant || "default")}</Text>
                  </Button>
                );
              })}
            </Box>
          </Box>
        ))}
      </div>
    </div>
  );
};

export default Home;
