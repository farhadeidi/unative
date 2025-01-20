import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { View, type ViewProps } from "react-native";
import { useTheme } from "@react-navigation/native";

import { cn } from "@/lib/utils";

import type { IconProps } from "../../lib/icons/native";
import { Text } from "../text";

const alertVariants = cva(
  "relative bg-background w-full rounded-lg border border-border p-4 shadow shadow-foreground/10",
  {
    variants: {
      variant: {
        default: "",
        destructive: "border-destructive",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  },
);

const Alert = React.forwardRef<
  React.ElementRef<typeof View>,
  ViewProps &
    VariantProps<typeof alertVariants> & {
      icon: React.FC<IconProps>;
      iconSize?: number;
      iconClassName?: string;
    }
>(
  (
    {
      className,
      variant,
      children,
      icon: Icon,
      iconSize = 16,
      iconClassName,
      ...props
    },
    ref,
  ) => {
    const { colors } = useTheme();
    return (
      <View
        ref={ref}
        role="alert"
        className={alertVariants({ variant, className })}
        {...props}
      >
        <View className="absolute left-3.5 top-4 -translate-y-0.5">
          <Icon
            size={iconSize}
            color={
              variant === "destructive" ? colors.notification : colors.text
            }
          />
        </View>
        {children}
      </View>
    );
  },
);
Alert.displayName = "Alert";

const AlertTitle = React.forwardRef<
  React.ElementRef<typeof Text>,
  React.ComponentPropsWithoutRef<typeof Text>
>(({ className, ...props }, ref) => (
  <Text
    ref={ref}
    className={cn(
      "mb-1 pl-7 text-base font-medium leading-none tracking-tight text-foreground",
      className,
    )}
    {...props}
  />
));
AlertTitle.displayName = "AlertTitle";

const AlertDescription = React.forwardRef<
  React.ElementRef<typeof Text>,
  React.ComponentPropsWithoutRef<typeof Text>
>(({ className, ...props }, ref) => (
  <Text
    ref={ref}
    className={cn("pl-7 text-sm leading-relaxed text-foreground", className)}
    {...props}
  />
));
AlertDescription.displayName = "AlertDescription";

export { Alert, AlertDescription, AlertTitle };
