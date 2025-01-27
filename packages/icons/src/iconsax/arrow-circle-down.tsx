import { useContext } from "react";
import { Path, Svg } from "unative/lib/svg";
import { cn } from "unative/lib/utils";
import { TextClassContext } from "unative/ui/text";

import type { IconProps, IconVariants } from "../icon-options";
import { defaultOptions } from "../icon-options";

const ArrowCircleDownBold = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M12 2C6.49 2 2 6.49 2 12C2 17.51 6.49 22 12 22C17.51 22 22 17.51 22 12C22 6.49 17.51 2 12 2ZM16.06 11.27L12.53 14.8C12.38 14.95 12.19 15.02 12 15.02C11.81 15.02 11.62 14.95 11.47 14.8L7.94 11.27C7.65 10.98 7.65 10.5 7.94 10.21C8.23 9.92 8.71 9.92 9 10.21L12 13.21L15 10.21C15.29 9.92 15.77 9.92 16.06 10.21C16.35 10.5 16.35 10.97 16.06 11.27Z"
        fill="currentColor"
      />
    </Svg>
  );
};

const ArrowCircleDownBroken = ({
  size = 24,
  className,
  ...props
}: IconProps) => {
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
        d="M4.87 4.99C3.09 6.79 2 9.27 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2C11.31 2 10.64 2.07 9.98 2.2"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M8.4707 10.74L12.0007 14.26L15.5307 10.74"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

const ArrowCircleDownBulk = ({ size = 24, className, ...props }: IconProps) => {
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
        opacity="0.4"
        d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
        fill="currentColor"
      />
      <Path
        d="M12.0002 15.0099C11.8102 15.0099 11.6202 14.9399 11.4702 14.7899L7.94016 11.2599C7.65016 10.9699 7.65016 10.4899 7.94016 10.1999C8.23016 9.90992 8.71016 9.90992 9.00016 10.1999L12.0002 13.1999L15.0002 10.1999C15.2902 9.90992 15.7702 9.90992 16.0602 10.1999C16.3502 10.4899 16.3502 10.9699 16.0602 11.2599L12.5302 14.7899C12.3802 14.9399 12.1902 15.0099 12.0002 15.0099Z"
        fill="currentColor"
      />
    </Svg>
  );
};

const ArrowCircleDownLinear = ({
  size = 24,
  className,
  ...props
}: IconProps) => {
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
        d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M8.46997 10.74L12 14.26L15.53 10.74"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

const ArrowCircleDownOutline = ({
  size = 24,
  className,
  ...props
}: IconProps) => {
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
        d="M12 22.75C6.07 22.75 1.25 17.93 1.25 12C1.25 6.07 6.07 1.25 12 1.25C17.93 1.25 22.75 6.07 22.75 12C22.75 17.93 17.93 22.75 12 22.75ZM12 2.75C6.9 2.75 2.75 6.9 2.75 12C2.75 17.1 6.9 21.25 12 21.25C17.1 21.25 21.25 17.1 21.25 12C21.25 6.9 17.1 2.75 12 2.75Z"
        fill="currentColor"
      />
      <Path
        d="M12.0002 15.0099C11.8102 15.0099 11.6202 14.9399 11.4702 14.7899L7.94016 11.2599C7.65016 10.9699 7.65016 10.4899 7.94016 10.1999C8.23016 9.90992 8.71016 9.90992 9.00016 10.1999L12.0002 13.1999L15.0002 10.1999C15.2902 9.90992 15.7702 9.90992 16.0602 10.1999C16.3502 10.4899 16.3502 10.9699 16.0602 11.2599L12.5302 14.7899C12.3802 14.9399 12.1902 15.0099 12.0002 15.0099Z"
        fill="currentColor"
      />
    </Svg>
  );
};

const ArrowCircleDownTwotone = ({
  size = 24,
  className,
  ...props
}: IconProps) => {
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
        d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        opacity="0.4"
        d="M8.4707 10.7402L12.0007 14.2602L15.5307 10.7402"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

const variants: IconVariants = {
  bold: ArrowCircleDownBold,
  broken: ArrowCircleDownBroken,
  bulk: ArrowCircleDownBulk,
  linear: ArrowCircleDownLinear,
  outline: ArrowCircleDownOutline,
  twotone: ArrowCircleDownTwotone,
};

export const ArrowCircleDownIcon = ({
  variant = defaultOptions.variant,
  className,
  ...props
}: IconProps) => {
  const textClasses = useContext(TextClassContext);
  const Component = variants[variant];
  return <Component className={cn(textClasses, className)} {...props} />;
};
