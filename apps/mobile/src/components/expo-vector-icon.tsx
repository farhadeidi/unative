import { useContext } from "react";
import { cssInterop } from "nativewind";
import { cn } from "unative/lib/utils";
import { TextClassContext } from "unative/ui/text/native";
import Ionicons from "@expo/vector-icons/Ionicons";

export type ExpoVectorIconProps = React.ComponentProps<typeof Ionicons>;
export type ExpoVectorIconName = ExpoVectorIconProps["name"];

cssInterop(Ionicons, {
  className: {
    target: "style",
  },
});

export const ExpoVectorIcon = ({
  className,
  size = 24,
  ...props
}: ExpoVectorIconProps) => {
  const textClass = useContext(TextClassContext);

  return (
    <Ionicons
      className={cn("text-foreground", textClass, className)}
      size={size}
      {...props}
    />
  );
};
