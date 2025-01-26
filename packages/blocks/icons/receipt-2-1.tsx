import { useContext } from "react";
import { Path, Svg } from "unative/lib/svg";
import { cn } from "unative/lib/utils";
import { TextClassContext } from "unative/ui/text";

import { iconDefaultOptions } from "../icons-configuration";
import type { IconProps, IconVariants } from "../types/icons-type";

const Receipt21Bold = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M15.78 2H8.22C4.44 2 3.5 3.01 3.5 7.04V18.3C3.5 20.96 4.96 21.59 6.73 19.69L6.74 19.68C7.56 18.81 8.81 18.88 9.52 19.83L10.53 21.18C11.34 22.25 12.65 22.25 13.46 21.18L14.47 19.83C15.19 18.87 16.44 18.8 17.26 19.68C19.04 21.58 20.49 20.95 20.49 18.29V7.04C20.5 3.01 19.56 2 15.78 2ZM7.78 12C7.23 12 6.78 11.55 6.78 11C6.78 10.45 7.23 10 7.78 10C8.33 10 8.78 10.45 8.78 11C8.78 11.55 8.33 12 7.78 12ZM7.78 8C7.23 8 6.78 7.55 6.78 7C6.78 6.45 7.23 6 7.78 6C8.33 6 8.78 6.45 8.78 7C8.78 7.55 8.33 8 7.78 8ZM16.23 11.75H10.73C10.32 11.75 9.98 11.41 9.98 11C9.98 10.59 10.32 10.25 10.73 10.25H16.23C16.64 10.25 16.98 10.59 16.98 11C16.98 11.41 16.64 11.75 16.23 11.75ZM16.23 7.75H10.73C10.32 7.75 9.98 7.41 9.98 7C9.98 6.59 10.32 6.25 10.73 6.25H16.23C16.64 6.25 16.98 6.59 16.98 7C16.98 7.41 16.64 7.75 16.23 7.75Z"
        fill="currentColor"
      />
    </Svg>
  );
};

const Receipt21Broken = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M20.5 7.04C20.5 3.01 19.56 2 15.78 2H8.22C4.44 2 3.5 3.01 3.5 7.04V18.3C3.5 20.96 4.96 21.59 6.73 19.69L6.74 19.68C7.56 18.81 8.81 18.88 9.52 19.83L10.53 21.18C11.34 22.25 12.65 22.25 13.46 21.18L14.47 19.83C15.19 18.87 16.44 18.8 17.26 19.68C19.04 21.58 20.49 20.95 20.49 18.29V11"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M10.7305 11H16.2305"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M10.7305 7H16.2305"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M8.09412 11H8.1031"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M8.09412 7H8.1031"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

const Receipt21Bulk = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M6.73 19.7C7.55 18.82 8.8 18.89 9.52 19.85L10.53 21.2C11.34 22.27 12.65 22.27 13.46 21.2L14.47 19.85C15.19 18.89 16.44 18.82 17.26 19.7C19.04 21.6 20.49 20.97 20.49 18.31V7.04C20.5 3.01 19.56 2 15.78 2H8.22C4.44 2 3.5 3.01 3.5 7.04V18.3C3.5 20.97 4.96 21.59 6.73 19.7Z"
        fill="currentColor"
      />
      <Path
        d="M16.2305 11.75H10.7305C10.3205 11.75 9.98047 11.41 9.98047 11C9.98047 10.59 10.3205 10.25 10.7305 10.25H16.2305C16.6405 10.25 16.9805 10.59 16.9805 11C16.9805 11.41 16.6405 11.75 16.2305 11.75Z"
        fill="currentColor"
      />
      <Path
        d="M16.2305 7.75H10.7305C10.3205 7.75 9.98047 7.41 9.98047 7C9.98047 6.59 10.3205 6.25 10.7305 6.25H16.2305C16.6405 6.25 16.9805 6.59 16.9805 7C16.9805 7.41 16.6405 7.75 16.2305 7.75Z"
        fill="currentColor"
      />
      <Path
        d="M7.7793 8C7.2293 8 6.7793 7.55 6.7793 7C6.7793 6.45 7.2293 6 7.7793 6C8.3293 6 8.7793 6.45 8.7793 7C8.7793 7.55 8.3293 8 7.7793 8Z"
        fill="currentColor"
      />
      <Path
        d="M7.7793 12C7.2293 12 6.7793 11.55 6.7793 11C6.7793 10.45 7.2293 10 7.7793 10C8.3293 10 8.7793 10.45 8.7793 11C8.7793 11.55 8.3293 12 7.7793 12Z"
        fill="currentColor"
      />
    </Svg>
  );
};

const Receipt21Linear = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M6.73 19.7C7.55 18.82 8.8 18.89 9.52 19.85L10.53 21.2C11.34 22.27 12.65 22.27 13.46 21.2L14.47 19.85C15.19 18.89 16.44 18.82 17.26 19.7C19.04 21.6 20.49 20.97 20.49 18.31V7.04C20.5 3.01 19.56 2 15.78 2H8.22C4.44 2 3.5 3.01 3.5 7.04V18.3C3.5 20.97 4.96 21.59 6.73 19.7Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M8.09607 11H8.10505"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M10.8984 11H16.3984"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M8.09607 7H8.10505"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M10.8984 7H16.3984"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

const Receipt21Outline = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M12 22.75C11.22 22.75 10.46 22.35 9.94 21.65L8.93 20.3C8.72 20.02 8.44 19.86 8.14 19.84C7.84 19.83 7.54 19.96 7.3 20.21L6.73 19.7L7.28 20.21C5.84 21.75 4.73 21.63 4.2 21.42C3.66 21.21 2.75 20.52 2.75 18.3V7.04C2.75 2.6 4.03 1.25 8.22 1.25H15.78C19.97 1.25 21.25 2.6 21.25 7.04V18.3C21.25 20.51 20.34 21.2 19.8 21.42C19.27 21.63 18.17 21.75 16.72 20.21C16.48 19.95 16.18 19.81 15.87 19.84C15.57 19.86 15.28 20.02 15.07 20.3L14.06 21.65C13.54 22.35 12.78 22.75 12 22.75ZM8.08 18.33C8.12 18.33 8.17 18.33 8.21 18.33C8.95 18.37 9.65 18.76 10.12 19.39L11.13 20.74C11.62 21.39 12.37 21.39 12.86 20.74L13.87 19.39C14.35 18.76 15.04 18.37 15.79 18.33C16.53 18.29 17.27 18.6 17.81 19.18C18.57 19.99 19.06 20.09 19.24 20.02C19.48 19.92 19.74 19.34 19.74 18.3V7.04C19.74 3.43 19.11 2.75 15.77 2.75H8.22C4.88 2.75 4.25 3.43 4.25 7.04V18.3C4.25 19.35 4.51 19.93 4.75 20.02C4.92 20.09 5.42 19.99 6.18 19.18C6.72 18.63 7.39 18.33 8.08 18.33Z"
        fill="currentColor"
      />
      <Path
        d="M16.2305 11.75H10.7305C10.3205 11.75 9.98047 11.41 9.98047 11C9.98047 10.59 10.3205 10.25 10.7305 10.25H16.2305C16.6405 10.25 16.9805 10.59 16.9805 11C16.9805 11.41 16.6405 11.75 16.2305 11.75Z"
        fill="currentColor"
      />
      <Path
        d="M16.2305 7.75H10.7305C10.3205 7.75 9.98047 7.41 9.98047 7C9.98047 6.59 10.3205 6.25 10.7305 6.25H16.2305C16.6405 6.25 16.9805 6.59 16.9805 7C16.9805 7.41 16.6405 7.75 16.2305 7.75Z"
        fill="currentColor"
      />
      <Path
        d="M7.7793 8C7.2293 8 6.7793 7.55 6.7793 7C6.7793 6.45 7.2293 6 7.7793 6C8.3293 6 8.7793 6.45 8.7793 7C8.7793 7.55 8.3293 8 7.7793 8Z"
        fill="currentColor"
      />
      <Path
        d="M7.7793 12C7.2293 12 6.7793 11.55 6.7793 11C6.7793 10.45 7.2293 10 7.7793 10C8.3293 10 8.7793 10.45 8.7793 11C8.7793 11.55 8.3293 12 7.7793 12Z"
        fill="currentColor"
      />
    </Svg>
  );
};

const Receipt21Twotone = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M6.73 19.7C7.55 18.82 8.8 18.89 9.52 19.85L10.53 21.2C11.34 22.27 12.65 22.27 13.46 21.2L14.47 19.85C15.19 18.89 16.44 18.82 17.26 19.7C19.04 21.6 20.49 20.97 20.49 18.31V7.04C20.5 3.01 19.56 2 15.78 2H8.22C4.44 2 3.5 3.01 3.5 7.04V18.3C3.5 20.97 4.96 21.59 6.73 19.7Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        opacity="0.4"
        d="M8.09607 11H8.10505"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        opacity="0.4"
        d="M10.8984 11H16.3984"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        opacity="0.4"
        d="M8.09607 7H8.10505"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        opacity="0.4"
        d="M10.8984 7H16.3984"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

const variants: IconVariants = {
  bold: Receipt21Bold,
  broken: Receipt21Broken,
  bulk: Receipt21Bulk,
  linear: Receipt21Linear,
  outline: Receipt21Outline,
  twotone: Receipt21Twotone,
};

export const Receipt21Icon = ({
  variant = iconDefaultOptions.variant,
  className,
  ...props
}: IconProps) => {
  const textClasses = useContext(TextClassContext);
  const Component = variants[variant];
  return <Component className={cn(textClasses, className)} {...props} />;
};
