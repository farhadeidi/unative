import { ScrollView } from "react-native";
import { capitalize } from "remeda";
import { Box } from "unative/ui/box";
import { Button, ButtonProps } from "unative/ui/button";
import { Text } from "unative/ui/text";

import { PageWrapper } from "@/components/page-wrapper";

const buttonVariants: ButtonProps[] = [
  // {
  //   variant: "primary",
  // },
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
  // {
  //   variant: "destructive-outline",
  // },
  // {
  //   variant: "destructive-link",
  // },
  {
    variant: "link",
  },
  // {
  //   variant: "positive",
  // },
  {
    variant: "ghost",
  },
];

const buttons: { label: string; items: ButtonProps[] }[] = [
  {
    label: "Buttons",
    items: buttonVariants,
  },
  {
    label: "Size: SM",
    items: buttonVariants.map((el) => ({ ...el, size: "sm" })),
  },
  {
    label: "Size: LG",
    items: buttonVariants.map((el) => ({ ...el, size: "lg" })),
  },
  // {
  //   label: "Size: XL",
  //   items: buttonVariants.map((el) => ({ ...el, size: "xl" })),
  // },
];

const ButtonsDemoPage = () => {
  return (
    <PageWrapper title="Button">
      <ScrollView>
        <Box className="flex flex-col items-start gap-2 p-4">
          {buttons.map((parent) => (
            <Box key={parent.label} className="flex flex-col gap-1">
              <Box>
                <Text>{parent.label}</Text>
              </Box>
              <Box className="flex flex-col flex-wrap items-start gap-2">
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
        </Box>
      </ScrollView>
    </PageWrapper>
  );
};

export default ButtonsDemoPage;
