import { useContext } from "react";
import { Path, Svg } from "unative/lib/svg";
import { cn } from "unative/lib/utils";
import { TextClassContext } from "unative/ui/text";

import type { IconProps, IconVariants } from "../types/icons-type";

const ComponentBold = ({ size = 24, className, ...props }: IconProps) => {
  return (
    <Svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      className={cn("text-foreground", className)}
      {...props}
    >
      <Path
        d="M20.9498 14.55L14.5598 20.94C13.1598 22.34 10.8598 22.34 9.44977 20.94L3.05977 14.55C1.65977 13.15 1.65977 10.85 3.05977 9.44L9.44977 3.05C10.8498 1.65 13.1498 1.65 14.5598 3.05L20.9498 9.44C22.3498 10.85 22.3498 13.15 20.9498 14.55Z"
        fill="currentColor"
      />
    </Svg>
  );
};

const ComponentBroken = ({ size = 24, className, ...props }: IconProps) => {
  return (
    <Svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      className={cn("text-foreground", className)}
      {...props}
    >
      <Path
        d="M6.73976 18.24L3.05977 14.56C1.65977 13.16 1.65977 10.86 3.05977 9.45002L9.44978 3.06001C10.8498 1.66001 13.1498 1.66001 14.5598 3.06001L20.9498 9.45002C22.3498 10.85 22.3498 13.15 20.9498 14.56L14.5598 20.95C13.1598 22.35 10.8598 22.35 9.44978 20.95"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

const ComponentBulk = ({ size = 24, className, ...props }: IconProps) => {
  return (
    <Svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      className={cn("text-foreground", className)}
      {...props}
    >
      <Path
        d="M20.9498 14.55L14.5598 20.94C13.1598 22.34 10.8598 22.34 9.44978 20.94L3.05977 14.55C1.65977 13.15 1.65977 10.85 3.05977 9.44001L9.44978 3.05C10.8498 1.65 13.1498 1.65 14.5598 3.05L20.9498 9.44001C22.3498 10.85 22.3498 13.15 20.9498 14.55Z"
        fill="currentColor"
      />
    </Svg>
  );
};

const ComponentLinear = ({ size = 24, className, ...props }: IconProps) => {
  return (
    <Svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      className={cn("text-foreground", className)}
      {...props}
    >
      <Path
        d="M20.95 14.55L14.56 20.94C13.16 22.34 10.86 22.34 9.45002 20.94L3.06001 14.55C1.66001 13.15 1.66001 10.85 3.06001 9.44001L9.45002 3.05C10.85 1.65 13.15 1.65 14.56 3.05L20.95 9.44001C22.35 10.85 22.35 13.15 20.95 14.55Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

const ComponentOutline = ({ size = 24, className, ...props }: IconProps) => {
  return (
    <Svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      className={cn("text-foreground", className)}
      {...props}
    >
      <Path
        d="M11.9998 22.75C10.8298 22.75 9.73977 22.3 8.91977 21.48L2.52975 15.09C1.70975 14.27 1.25977 13.17 1.25977 12.01C1.25977 10.85 1.70975 9.74999 2.52975 8.92999L8.91977 2.53998C9.73977 1.71998 10.8398 1.27002 11.9998 1.27002C13.1598 1.27002 14.2597 1.71998 15.0797 2.53998L21.4698 8.92999C22.2898 9.74999 22.7397 10.85 22.7397 12.01C22.7397 13.17 22.2898 14.27 21.4698 15.09L15.0797 21.48C14.2597 22.3 13.1698 22.75 11.9998 22.75ZM11.9998 2.75C11.2298 2.75 10.5098 3.05002 9.97977 3.58002L3.58975 9.96997C3.04975 10.51 2.75977 11.23 2.75977 11.99C2.75977 12.75 3.05975 13.48 3.58975 14.01L9.97977 20.4C11.0498 21.47 12.9497 21.47 14.0197 20.4L20.4098 14.01C20.9498 13.47 21.2397 12.76 21.2397 11.99C21.2397 11.22 20.9398 10.5 20.4098 9.96997L14.0197 3.58002C13.4897 3.05002 12.7698 2.75 11.9998 2.75Z"
        fill="currentColor"
      />
    </Svg>
  );
};

const ComponentTwotone = ({ size = 24, className, ...props }: IconProps) => {
  return (
    <Svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      className={cn("text-foreground", className)}
      {...props}
    >
      <Path
        d="M20.9498 14.55L14.5598 20.94C13.1598 22.34 10.8598 22.34 9.44978 20.94L3.05977 14.55C1.65977 13.15 1.65977 10.85 3.05977 9.44001L9.44978 3.05C10.8498 1.65 13.1498 1.65 14.5598 3.05L20.9498 9.44001C22.3498 10.85 22.3498 13.15 20.9498 14.55Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

const variants: IconVariants = {
  bold: ComponentBold,
  broken: ComponentBroken,
  bulk: ComponentBulk,
  linear: ComponentLinear,
  outline: ComponentOutline,
  twotone: ComponentTwotone,
};

export const ComponentIcon = ({
  variant = "linear",
  className,
  ...props
}: IconProps) => {
  const textClasses = useContext(TextClassContext);
  const Component = variants[variant];
  return <Component className={cn(textClasses, className)} {...props} />;
};
