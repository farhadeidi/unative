import { useContext } from "react";
import { Path, Svg } from "unative/lib/svg";
import { cn } from "unative/lib/utils";
import { TextClassContext } from "unative/ui/text";

import type { IconProps, IconVariants } from "../types/icons-type";

const TextBoldBold = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M13.75 12.75H12.25H8.5V16.74C8.5 17.02 8.73 17.25 9.01 17.25H13.75C14.99 17.25 16 16.24 16 15C16 13.76 14.99 12.75 13.75 12.75Z"
        fill="currentColor"
      />
      <Path
        d="M14.5 9C14.5 7.76 13.49 6.75 12.25 6.75H9.01C8.73 6.75 8.5 6.98 8.5 7.26V11.25H12.25C13.49 11.25 14.5 10.24 14.5 9Z"
        fill="currentColor"
      />
      <Path
        d="M20.95 4.13C20.66 3.71 20.29 3.34 19.87 3.05C18.92 2.36 17.68 2 16.19 2H7.81C7.61 2 7.41 2.01 7.22 2.03C3.94 2.24 2 4.37 2 7.81V16.19C2 17.68 2.36 18.92 3.05 19.87C3.34 20.29 3.71 20.66 4.13 20.95C4.95 21.55 5.99 21.9 7.22 21.98C7.41 21.99 7.61 22 7.81 22H16.19C19.83 22 22 19.83 22 16.19V7.81C22 6.32 21.64 5.08 20.95 4.13ZM13.75 18.75H9.01C7.9 18.75 7 17.85 7 16.74V12V7.26C7 6.15 7.9 5.25 9.01 5.25H12.25C14.32 5.25 16 6.93 16 9C16 9.96 15.63 10.83 15.03 11.49C16.46 12.02 17.5 13.38 17.5 15C17.5 17.07 15.82 18.75 13.75 18.75Z"
        fill="currentColor"
      />
    </Svg>
  );
};

const TextBoldBroken = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M4.88086 4.5C4.88086 3.4 5.78086 2.5 6.88086 2.5H12.0009C14.6209 2.5 16.7509 4.63 16.7509 7.25C16.7509 9.87 14.6209 12 12.0009 12H4.88086V4.5Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M4.88086 13.98V12H14.3809C17.0009 12 19.1309 14.13 19.1309 16.75C19.1309 19.37 17.0009 21.5 14.3809 21.5H6.88086C5.78086 21.5 4.88086 20.6 4.88086 19.5V17.96"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

const TextBoldBulk = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M22 7.81V16.19C22 19.83 19.83 22 16.19 22H7.81C7.61 22 7.41 21.99 7.22 21.98C5.99 21.9 4.95 21.55 4.13 20.95C3.71 20.66 3.34 20.29 3.05 19.87C2.36 18.92 2 17.68 2 16.19V7.81C2 4.37 3.94 2.24 7.22 2.03C7.41 2.01 7.61 2 7.81 2H16.19C17.68 2 18.92 2.36 19.87 3.05C20.29 3.34 20.66 3.71 20.95 4.13C21.64 5.08 22 6.32 22 7.81Z"
        fill="currentColor"
      />
      <Path
        d="M15.03 11.49C15.63 10.83 16 9.96 16 9C16 6.93 14.32 5.25 12.25 5.25H9.01C7.9 5.25 7 6.15 7 7.26V16.74C7 17.85 7.9 18.75 9.01 18.75H13.75C15.82 18.75 17.5 17.07 17.5 15C17.5 13.38 16.47 12.02 15.03 11.49ZM8.5 7.26C8.5 6.98 8.73 6.75 9.01 6.75H12.25C13.49 6.75 14.5 7.76 14.5 9C14.5 10.24 13.49 11.25 12.25 11.25H8.5V7.26ZM13.75 17.25H9.01C8.73 17.25 8.5 17.02 8.5 16.74V12.75H13.75C14.99 12.75 16 13.76 16 15C16 16.24 14.99 17.25 13.75 17.25Z"
        fill="currentColor"
      />
    </Svg>
  );
};

const TextBoldLinear = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M4.87988 4.5C4.87988 3.4 5.77988 2.5 6.87988 2.5H11.9999C14.6199 2.5 16.7499 4.63 16.7499 7.25C16.7499 9.87 14.6199 12 11.9999 12H4.87988V4.5Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M4.87988 12H14.3799C16.9999 12 19.1299 14.13 19.1299 16.75C19.1299 19.37 16.9999 21.5 14.3799 21.5H6.87988C5.77988 21.5 4.87988 20.6 4.87988 19.5V12V12Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

const TextBoldOutline = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M12.0009 12.75H4.88086C4.47086 12.75 4.13086 12.41 4.13086 12V4.5C4.13086 2.98 5.36086 1.75 6.88086 1.75H12.0009C15.0309 1.75 17.5009 4.22 17.5009 7.25C17.5009 10.28 15.0309 12.75 12.0009 12.75ZM5.62086 11.25H12.0009C14.2109 11.25 16.0009 9.46 16.0009 7.25C16.0009 5.04 14.2109 3.25 12.0009 3.25H6.88086C6.19086 3.25 5.63086 3.81 5.63086 4.5V11.25H5.62086Z"
        fill="currentColor"
      />
      <Path
        d="M14.3809 22.25H6.88086C5.36086 22.25 4.13086 21.02 4.13086 19.5V12C4.13086 11.59 4.47086 11.25 4.88086 11.25H14.3809C17.4109 11.25 19.8809 13.72 19.8809 16.75C19.8809 19.78 17.4109 22.25 14.3809 22.25ZM5.62086 12.75V19.5C5.62086 20.19 6.18086 20.75 6.87086 20.75H14.3709C16.5809 20.75 18.3709 18.96 18.3709 16.75C18.3709 14.54 16.5809 12.75 14.3709 12.75H5.62086Z"
        fill="currentColor"
      />
    </Svg>
  );
};

const TextBoldTwotone = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M4.88086 4.5C4.88086 3.4 5.78086 2.5 6.88086 2.5H12.0009C14.6209 2.5 16.7509 4.63 16.7509 7.25C16.7509 9.87 14.6209 12 12.0009 12H4.88086V4.5Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M4.88086 12H14.3809C17.0009 12 19.1309 14.13 19.1309 16.75C19.1309 19.37 17.0009 21.5 14.3809 21.5H6.88086C5.78086 21.5 4.88086 20.6 4.88086 19.5V12V12Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

const variants: IconVariants = {
  bold: TextBoldBold,
  broken: TextBoldBroken,
  bulk: TextBoldBulk,
  linear: TextBoldLinear,
  outline: TextBoldOutline,
  twotone: TextBoldTwotone,
};

export const TextBoldIcon = ({
  variant = "linear",
  className,
  ...props
}: IconProps) => {
  const textClasses = useContext(TextClassContext);
  const Component = variants[variant];
  return <Component className={cn(textClasses, className)} {...props} />;
};
