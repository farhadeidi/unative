import { useContext } from "react";
import { Path, Svg } from "unative/lib/svg";
import { cn } from "unative/lib/utils";
import { TextClassContext } from "unative/ui/text";

import { iconDefaultOptions } from "../icons-configuration";
import type { IconProps, IconVariants } from "../types/icons-type";

const CopyrightBold = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM12.24 15.25C13.02 15.25 13.79 14.96 14.38 14.44C14.69 14.17 15.17 14.2 15.44 14.51C15.71 14.82 15.68 15.3 15.37 15.57C14.5 16.34 13.39 16.76 12.24 16.76C9.62 16.76 7.49 14.63 7.49 12.01C7.49 9.39 9.62 7.26 12.24 7.26C13.39 7.26 14.51 7.68 15.37 8.45C15.68 8.72 15.71 9.2 15.44 9.51C15.16 9.82 14.69 9.85 14.38 9.58C13.79 9.06 13.03 8.77 12.24 8.77C10.45 8.77 8.99 10.23 8.99 12.02C8.99 13.81 10.45 15.25 12.24 15.25Z"
        fill="currentColor"
      />
    </Svg>
  );
};

const CopyrightBroken = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M14.8802 15C14.1702 15.62 13.2502 16 12.2402 16C10.0302 16 8.24023 14.21 8.24023 12C8.24023 9.79 10.0302 8 12.2402 8C13.2502 8 14.1702 8.38 14.8802 9"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M4 6C2.75 7.67 2 9.75 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2C10.57 2 9.19997 2.29998 7.96997 2.84998"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

const CopyrightBulk = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M12 22C6.48 22 2 17.52 2 12C2 6.48 6.48 2 12 2C17.52 2 22 6.48 22 12C22 17.52 17.52 22 12 22Z"
        fill="currentColor"
      />
      <Path
        d="M12.2402 16.75C9.62023 16.75 7.49023 14.62 7.49023 12C7.49023 9.38 9.62023 7.25 12.2402 7.25C13.3902 7.25 14.5102 7.67 15.3702 8.44C15.6802 8.71 15.7102 9.19 15.4402 9.5C15.1602 9.81 14.6902 9.84001 14.3802 9.57001C13.7902 9.05001 13.0302 8.76001 12.2402 8.76001C10.4502 8.76001 8.99023 10.22 8.99023 12.01C8.99023 13.8 10.4502 15.26 12.2402 15.26C13.0202 15.26 13.7902 14.97 14.3802 14.45C14.6902 14.18 15.1702 14.21 15.4402 14.52C15.7102 14.83 15.6802 15.31 15.3702 15.58C14.5002 16.33 13.3902 16.75 12.2402 16.75Z"
        fill="currentColor"
      />
    </Svg>
  );
};

const CopyrightLinear = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M12 22C6.48 22 2 17.52 2 12C2 6.48 6.48 2 12 2C17.52 2 22 6.48 22 12C22 17.52 17.52 22 12 22Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M14.88 15C14.17 15.62 13.25 16 12.24 16C10.03 16 8.23999 14.21 8.23999 12C8.23999 9.79 10.03 8 12.24 8C13.25 8 14.17 8.38 14.88 9"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

const CopyrightOutline = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M12.2402 16.75C9.62023 16.75 7.49023 14.62 7.49023 12C7.49023 9.38 9.62023 7.25 12.2402 7.25C13.3902 7.25 14.5102 7.67 15.3702 8.44C15.6802 8.71 15.7102 9.19 15.4402 9.5C15.1702 9.81 14.6902 9.84001 14.3802 9.57001C13.7902 9.05001 13.0302 8.76001 12.2402 8.76001C10.4502 8.76001 8.99023 10.22 8.99023 12.01C8.99023 13.8 10.4502 15.26 12.2402 15.26C13.0202 15.26 13.7902 14.97 14.3802 14.45C14.6902 14.18 15.1702 14.21 15.4402 14.52C15.7102 14.83 15.6802 15.31 15.3702 15.58C14.5002 16.33 13.3902 16.75 12.2402 16.75Z"
        fill="currentColor"
      />
    </Svg>
  );
};

const CopyrightTwotone = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M12 22C6.48 22 2 17.52 2 12C2 6.48 6.48 2 12 2C17.52 2 22 6.48 22 12C22 17.52 17.52 22 12 22Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        opacity="0.4"
        d="M14.8802 15C14.1702 15.62 13.2502 16 12.2402 16C10.0302 16 8.24023 14.21 8.24023 12C8.24023 9.79 10.0302 8 12.2402 8C13.2502 8 14.1702 8.38 14.8802 9"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

const variants: IconVariants = {
  bold: CopyrightBold,
  broken: CopyrightBroken,
  bulk: CopyrightBulk,
  linear: CopyrightLinear,
  outline: CopyrightOutline,
  twotone: CopyrightTwotone,
};

export const CopyrightIcon = ({
  variant = iconDefaultOptions.variant,
  className,
  ...props
}: IconProps) => {
  const textClasses = useContext(TextClassContext);
  const Component = variants[variant];
  return <Component className={cn(textClasses, className)} {...props} />;
};
