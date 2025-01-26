import { useContext } from "react";
import { Path, Svg } from "unative/lib/svg";
import { cn } from "unative/lib/utils";
import { TextClassContext } from "unative/ui/text";

import { iconDefaultOptions } from "../icons-configuration";
import type { IconProps, IconVariants } from "../types/icons-type";

const GhostBold = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M12 2C6.5 2 2 6.58 2 12.18V20.07C2 21.33 2.75 21.67 3.67 20.83L4.67 19.92C5.04 19.58 5.64 19.58 6.01 19.92L8.01 21.75C8.38 22.09 8.98 22.09 9.35 21.75L11.35 19.92C11.72 19.58 12.32 19.58 12.69 19.92L14.69 21.75C15.06 22.09 15.66 22.09 16.03 21.75L18.03 19.92C18.4 19.58 19 19.58 19.37 19.92L20.37 20.83C21.29 21.67 22.04 21.33 22.04 20.07V12.18C22 6.58 17.5 2 12 2ZM12 6.62C13.31 6.62 14.38 7.69 14.38 9C14.38 10.31 13.31 11.38 12 11.38C10.69 11.38 9.62 10.31 9.62 9C9.62 7.69 10.69 6.62 12 6.62ZM16.45 14.6C15.14 15.58 13.57 16.07 12 16.07C10.43 16.07 8.86 15.58 7.55 14.6C7.22 14.35 7.15 13.88 7.4 13.55C7.65 13.22 8.12 13.15 8.45 13.4C10.54 14.97 13.46 14.97 15.55 13.4C15.88 13.15 16.35 13.22 16.6 13.55C16.85 13.88 16.78 14.35 16.45 14.6Z"
        fill="currentColor"
      />
    </Svg>
  );
};

const GhostBroken = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M2 16.07V20.08C2 21.34 2.74998 21.68 3.66998 20.84L4.66998 19.93C5.03998 19.59 5.64001 19.59 6.01001 19.93L8.01001 21.76C8.38001 22.1 8.97998 22.1 9.34998 21.76L11.35 19.93C11.72 19.59 12.32 19.59 12.69 19.93L14.69 21.76C15.06 22.1 15.66 22.1 16.03 21.76L18.03 19.93C18.4 19.59 19 19.59 19.37 19.93L20.37 20.84C21.29 21.68 22.04 21.34 22.04 20.08V12.19C22.04 6.59 17.54 2.01001 12.04 2.01001C6.53998 2.01001 2.03998 6.59 2.03998 12.19"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M8 14C10.37 15.78 13.63 15.78 16 14"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M12 11C13.1046 11 14 10.1046 14 9C14 7.89543 13.1046 7 12 7C10.8954 7 10 7.89543 10 9C10 10.1046 10.8954 11 12 11Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

const GhostBulk = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M22 20.07V12.18C22 6.57999 17.5 2 12 2C6.5 2 2 6.57999 2 12.18V20.07C2 21.33 2.74998 21.67 3.66998 20.83L4.66998 19.92C5.03998 19.58 5.64001 19.58 6.01001 19.92L8.01001 21.75C8.38001 22.09 8.97998 22.09 9.34998 21.75L11.35 19.92C11.72 19.58 12.32 19.58 12.69 19.92L14.69 21.75C15.06 22.09 15.66 22.09 16.03 21.75L18.03 19.92C18.4 19.58 19 19.58 19.37 19.92L20.37 20.83C21.25 21.67 22 21.33 22 20.07Z"
        fill="currentColor"
      />
      <Path
        d="M12.0003 16.07C10.4303 16.07 8.86025 15.58 7.55025 14.6C7.22025 14.35 7.15029 13.88 7.40029 13.55C7.65029 13.22 8.12027 13.15 8.45027 13.4C10.5403 14.97 13.4602 14.97 15.5502 13.4C15.8802 13.15 16.3502 13.22 16.6002 13.55C16.8502 13.88 16.7803 14.35 16.4503 14.6C15.1403 15.58 13.5703 16.07 12.0003 16.07Z"
        fill="currentColor"
      />
      <Path
        d="M11.9991 11.3801C13.3136 11.3801 14.3792 10.3146 14.3792 9.00012C14.3792 7.68568 13.3136 6.62012 11.9991 6.62012C10.6847 6.62012 9.61914 7.68568 9.61914 9.00012C9.61914 10.3146 10.6847 11.3801 11.9991 11.3801Z"
        fill="currentColor"
      />
    </Svg>
  );
};

const GhostLinear = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M22 20.07V12.18C22 6.57999 17.5 2 12 2C6.5 2 2 6.57999 2 12.18V20.07C2 21.33 2.74998 21.67 3.66998 20.83L4.66998 19.92C5.03998 19.58 5.64001 19.58 6.01001 19.92L8.01001 21.75C8.38001 22.09 8.97998 22.09 9.34998 21.75L11.35 19.92C11.72 19.58 12.32 19.58 12.69 19.92L14.69 21.75C15.06 22.09 15.66 22.09 16.03 21.75L18.03 19.92C18.4 19.58 19 19.58 19.37 19.92L20.37 20.83C21.25 21.67 22 21.33 22 20.07Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M8 14C10.37 15.78 13.63 15.78 16 14"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M12 11C13.1046 11 14 10.1046 14 9C14 7.89543 13.1046 7 12 7C10.8954 7 10 7.89543 10 9C10 10.1046 10.8954 11 12 11Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

const GhostOutline = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M15.3303 22.75C14.9103 22.75 14.4803 22.6 14.1503 22.3L12.1503 20.47C12.0703 20.4 11.9103 20.4 11.8203 20.47L9.83026 22.3C9.17026 22.91 8.14022 22.9 7.48022 22.3L5.48022 20.47C5.40022 20.4 5.24027 20.4 5.15027 20.47L4.16022 21.38C3.25022 22.21 2.53024 22.08 2.18024 21.92C1.83024 21.76 1.24023 21.32 1.24023 20.07V12.18C1.24023 6.14999 6.06023 1.25 11.9902 1.25C17.9202 1.25 22.7402 6.14999 22.7402 12.18V20.07C22.7402 21.32 22.1502 21.77 21.8002 21.92C21.4502 22.07 20.7303 22.21 19.8203 21.38L18.8203 20.47C18.7403 20.4 18.5802 20.4 18.5002 20.47L16.5002 22.3C16.1802 22.6 15.7603 22.75 15.3303 22.75ZM12.0002 18.91C12.4202 18.91 12.8502 19.06 13.1702 19.36L15.1702 21.19C15.2502 21.26 15.4102 21.26 15.4902 21.19L17.4902 19.36C18.1502 18.76 19.1803 18.76 19.8403 19.36L20.8403 20.27C21.0103 20.42 21.1202 20.49 21.1902 20.51C21.2202 20.44 21.2502 20.3 21.2502 20.06V12.17C21.2502 6.97001 17.1002 2.73999 12.0002 2.73999C6.90024 2.73999 2.75024 6.97001 2.75024 12.17V20.06C2.75024 20.3 2.79024 20.44 2.81024 20.51C2.88024 20.48 3.00022 20.42 3.16022 20.27L4.16022 19.36C4.82022 18.76 5.85025 18.76 6.51025 19.36L8.51025 21.19C8.59025 21.26 8.75026 21.26 8.83026 21.19L10.8303 19.36C11.1503 19.06 11.5802 18.91 12.0002 18.91Z"
        fill="currentColor"
      />
      <Path
        d="M12.0003 16.07C10.4303 16.07 8.86025 15.58 7.55025 14.6C7.22025 14.35 7.15029 13.88 7.40029 13.55C7.65029 13.22 8.12027 13.15 8.45027 13.4C10.5403 14.97 13.4602 14.97 15.5502 13.4C15.8802 13.15 16.3502 13.22 16.6002 13.55C16.8502 13.88 16.7803 14.35 16.4503 14.6C15.1403 15.58 13.5703 16.07 12.0003 16.07Z"
        fill="currentColor"
      />
      <Path
        d="M12 11.75C10.48 11.75 9.25 10.52 9.25 9C9.25 7.48 10.48 6.25 12 6.25C13.52 6.25 14.75 7.48 14.75 9C14.75 10.52 13.52 11.75 12 11.75ZM12 7.75C11.31 7.75 10.75 8.31 10.75 9C10.75 9.69 11.31 10.25 12 10.25C12.69 10.25 13.25 9.69 13.25 9C13.25 8.31 12.69 7.75 12 7.75Z"
        fill="currentColor"
      />
    </Svg>
  );
};

const GhostTwotone = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M22 20.07V12.18C22 6.57999 17.5 2 12 2C6.5 2 2 6.57999 2 12.18V20.07C2 21.33 2.74998 21.67 3.66998 20.83L4.66998 19.92C5.03998 19.58 5.64001 19.58 6.01001 19.92L8.01001 21.75C8.38001 22.09 8.97998 22.09 9.34998 21.75L11.35 19.92C11.72 19.58 12.32 19.58 12.69 19.92L14.69 21.75C15.06 22.09 15.66 22.09 16.03 21.75L18.03 19.92C18.4 19.58 19 19.58 19.37 19.92L20.37 20.83C21.25 21.67 22 21.33 22 20.07Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        opacity="0.4"
        d="M8 14C10.37 15.78 13.63 15.78 16 14"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        opacity="0.4"
        d="M12 11C13.1046 11 14 10.1046 14 9C14 7.89543 13.1046 7 12 7C10.8954 7 10 7.89543 10 9C10 10.1046 10.8954 11 12 11Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

const variants: IconVariants = {
  bold: GhostBold,
  broken: GhostBroken,
  bulk: GhostBulk,
  linear: GhostLinear,
  outline: GhostOutline,
  twotone: GhostTwotone,
};

export const GhostIcon = ({
  variant = iconDefaultOptions.variant,
  className,
  ...props
}: IconProps) => {
  const textClasses = useContext(TextClassContext);
  const Component = variants[variant];
  return <Component className={cn(textClasses, className)} {...props} />;
};
