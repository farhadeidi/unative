import { useContext } from "react";
import { Path, Svg } from "unative/lib/svg";
import { cn } from "unative/lib/utils";
import { TextClassContext } from "unative/ui/text";

import type { IconProps, IconVariants } from "../icon-options";
import { defaultOptions } from "../icon-options";

const StopBold = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M20.36 7.78L4.54 17.28C3.93 17.65 3.11 17.28 3.03 16.57C3.01 16.38 3 16.19 3 16V8C3 5 5 3 8 3H16C19 3 20.23 4.54 20.81 6.65C20.93 7.09 20.74 7.55 20.36 7.78Z"
        fill="currentColor"
      />
      <Path
        d="M20.9994 11.09V16C20.9994 19 18.9994 21 15.9994 21H7.99942C7.07942 21 6.20942 20.75 5.46942 20.31C4.82942 19.94 4.86942 19 5.49942 18.62L19.4794 10.23C20.1494 9.83001 20.9994 10.31 20.9994 11.09Z"
        fill="currentColor"
      />
    </Svg>
  );
};

const StopBroken = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M3 9.3C3 4.8 4.8 3 9.3 3H14.7C19.2 3 21 4.8 21 9.3V14.7C21 19.2 19.2 21 14.7 21H9.3C4.8 21 3 19.2 3 14.7V13.99"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

const StopBulk = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M20.9 7.66L20.12 8.13L19.63 8.43L18.7 8.98L4.76 17.34L4.67 17.39L4.14 17.71L3.53 18.08C3.17 17.19 3 16.07 3 14.7V9.3C3 4.8 4.8 3 9.3 3H14.7C18.61 3 20.48 4.36 20.9 7.66Z"
        fill="currentColor"
      />
      <Path
        opacity="0.4"
        d="M21.0005 9.2002V14.7002C21.0005 19.2002 19.2005 21.0002 14.7005 21.0002H9.30047C6.86047 21.0002 5.21047 20.4702 4.23047 19.2602L4.53047 19.0802L5.14047 18.7102L5.67047 18.3902L5.76047 18.3402L19.7005 9.9802L20.6305 9.4302L21.0005 9.2002Z"
        fill="currentColor"
      />
    </Svg>
  );
};

const StopLinear = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M9.3 21H14.7C19.2 21 21 19.2 21 14.7V9.3C21 4.8 19.2 3 14.7 3H9.3C4.8 3 3 4.8 3 9.3V14.7C3 19.2 4.8 21 9.3 21Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

const StopOutline = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M14.7 21.75H9.3C4.36 21.75 2.25 19.64 2.25 14.7V9.3C2.25 4.36 4.36 2.25 9.3 2.25H14.7C19.64 2.25 21.75 4.36 21.75 9.3V14.7C21.75 19.64 19.64 21.75 14.7 21.75ZM9.3 3.75C5.2 3.75 3.75 5.2 3.75 9.3V14.7C3.75 18.8 5.2 20.25 9.3 20.25H14.7C18.8 20.25 20.25 18.8 20.25 14.7V9.3C20.25 5.2 18.8 3.75 14.7 3.75H9.3Z"
        fill="currentColor"
      />
    </Svg>
  );
};

const StopTwotone = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M9.3 21H14.7C19.2 21 21 19.2 21 14.7V9.3C21 4.8 19.2 3 14.7 3H9.3C4.8 3 3 4.8 3 9.3V14.7C3 19.2 4.8 21 9.3 21Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

const variants: IconVariants = {
  bold: StopBold,
  broken: StopBroken,
  bulk: StopBulk,
  linear: StopLinear,
  outline: StopOutline,
  twotone: StopTwotone,
};

export const StopIcon = ({
  variant = defaultOptions.variant,
  className,
  ...props
}: IconProps) => {
  const textClasses = useContext(TextClassContext);
  const Component = variants[variant];
  return <Component className={cn(textClasses, className)} {...props} />;
};
