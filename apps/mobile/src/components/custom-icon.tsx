import { useContext } from "react";
import type { LucideProps } from "lucide-react-native";
import { cn } from "unative/lib/utils";
import { TextClassContext } from "unative/ui/text/native";

import * as icons from "../lib/icons/native";

export type CustomIconName = keyof typeof icons;

export type CustomIconProps = LucideProps & {
  name: CustomIconName;
};

export const CustomIcon = ({ className, ...props }: CustomIconProps) => {
  const textClass = useContext(TextClassContext);
  const IconComponent = icons[props.name];

  return (
    <IconComponent
      strokeWidth={1.5}
      className={cn("text-foreground", textClass, className)}
      {...props}
    />
  );
};
