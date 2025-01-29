import { useContext } from "react";
import { cn } from "unative/lib/utils";
import { Path, Svg } from "unative/ui/svg";
import { TextClassContext } from "unative/ui/text";

import type { IconProps, IconVariants } from "../icon-options";
import { defaultOptions } from "../icon-options";

const NoteFavoriteBold = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M7.75 3.5V2C7.75 1.59 7.41 1.25 7 1.25C6.59 1.25 6.25 1.59 6.25 2V3.56C6.5 3.53 6.73 3.5 7 3.5H7.75Z"
        fill="currentColor"
      />
      <Path
        d="M15.75 3.56V2C15.75 1.59 15.41 1.25 15 1.25C14.59 1.25 14.25 1.59 14.25 2V3.5H15C15.27 3.5 15.5 3.53 15.75 3.56Z"
        fill="currentColor"
      />
      <Path
        d="M21.29 14.97C20.52 14.36 19.55 14 18.5 14C17.45 14 16.46 14.37 15.69 14.99C14.65 15.81 14 17.09 14 18.5C14 19.34 14.24 20.15 14.65 20.81C14.97 21.33 15.38 21.79 15.87 22.14C16.61 22.68 17.51 23 18.5 23C19.64 23 20.67 22.58 21.46 21.88C21.81 21.59 22.11 21.23 22.35 20.82C22.76 20.15 23 19.34 23 18.5C23 17.07 22.33 15.79 21.29 14.97ZM18.5 20.64C18.5 19.46 17.54 18.5 16.36 18.5C17.54 18.5 18.5 17.54 18.5 16.36C18.5 17.54 19.46 18.5 20.64 18.5C19.46 18.5 18.5 19.46 18.5 20.64Z"
        fill="currentColor"
      />
      <Path
        d="M15.75 3.56V5C15.75 5.41 15.41 5.75 15 5.75C14.59 5.75 14.25 5.41 14.25 5V3.5H7.75V5C7.75 5.41 7.41 5.75 7 5.75C6.59 5.75 6.25 5.41 6.25 5V3.56C3.3 3.83 2 5.73 2 8.5V17C2 20 3.5 22 7 22H11.13C11.89 22 12.4 21.15 12.21 20.41C12.07 19.87 12 19.31 12 18.75C12 16.67 12.93 14.75 14.54 13.48C15.71 12.53 17.21 12 18.75 12H18.79C19.42 12 20 11.54 20 10.91V8.5C20 5.73 18.7 3.83 15.75 3.56ZM9 16.75H7C6.59 16.75 6.25 16.41 6.25 16C6.25 15.59 6.59 15.25 7 15.25H9C9.41 15.25 9.75 15.59 9.75 16C9.75 16.41 9.41 16.75 9 16.75ZM12 11.75H7C6.59 11.75 6.25 11.41 6.25 11C6.25 10.59 6.59 10.25 7 10.25H12C12.41 10.25 12.75 10.59 12.75 11C12.75 11.41 12.41 11.75 12 11.75Z"
        fill="currentColor"
      />
    </Svg>
  );
};

const NoteFavoriteBroken = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M8 2V5"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M16 2V5"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M3 8.5C3 5.5 4.5 3.5 8 3.5H16C19.5 3.5 21 5.5 21 8.5V13.63C20.11 12.92 18.98 12.5 17.75 12.5C16.52 12.5 15.37 12.93 14.47 13.66C13.26 14.61 12.5 16.1 12.5 17.75C12.5 18.73 12.78 19.67 13.26 20.45C13.63 21.06 14.11 21.59 14.68 22H8C4.5 22 3 20 3 17V12.57"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M7 11H13"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M7 16H9.62"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M23 17.75C23 18.73 22.72 19.67 22.24 20.45C21.96 20.93 21.61 21.35 21.2 21.69C20.28 22.51 19.08 23 17.75 23C16.6 23 15.54 22.63 14.68 22C14.11 21.59 13.63 21.06 13.26 20.45C12.78 19.67 12.5 18.73 12.5 17.75C12.5 16.1 13.26 14.61 14.47 13.66C15.37 12.93 16.52 12.5 17.75 12.5C18.98 12.5 20.11 12.92 21 13.63C22.22 14.59 23 16.08 23 17.75Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M17.75 20.25C17.75 18.87 18.87 17.75 20.25 17.75C18.87 17.75 17.75 16.63 17.75 15.25C17.75 16.63 16.63 17.75 15.25 17.75C16.63 17.75 17.75 18.87 17.75 20.25Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

const NoteFavoriteBulk = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M7 5.75C6.59 5.75 6.25 5.41 6.25 5V2C6.25 1.59 6.59 1.25 7 1.25C7.41 1.25 7.75 1.59 7.75 2V5C7.75 5.41 7.41 5.75 7 5.75Z"
        fill="currentColor"
      />
      <Path
        d="M15 5.75C14.59 5.75 14.25 5.41 14.25 5V2C14.25 1.59 14.59 1.25 15 1.25C15.41 1.25 15.75 1.59 15.75 2V5C15.75 5.41 15.41 5.75 15 5.75Z"
        fill="currentColor"
      />
      <Path
        opacity="0.4"
        d="M20 8.5V17C20 20 18.5 22 15 22H7C3.5 22 2 20 2 17V8.5C2 5.5 3.5 3.5 7 3.5H15C18.5 3.5 20 5.5 20 8.5Z"
        fill="currentColor"
      />
      <Path
        d="M13 11.75H7C6.59 11.75 6.25 11.41 6.25 11C6.25 10.59 6.59 10.25 7 10.25H13C13.41 10.25 13.75 10.59 13.75 11C13.75 11.41 13.41 11.75 13 11.75Z"
        fill="currentColor"
      />
      <Path
        d="M10 16.75H7C6.59 16.75 6.25 16.41 6.25 16C6.25 15.59 6.59 15.25 7 15.25H10C10.41 15.25 10.75 15.59 10.75 16C10.75 16.41 10.41 16.75 10 16.75Z"
        fill="currentColor"
      />
      <Path
        d="M21 13.63C20.11 12.92 18.98 12.5 17.75 12.5C16.52 12.5 15.37 12.93 14.47 13.66C13.26 14.61 12.5 16.1 12.5 17.75C12.5 18.73 12.78 19.67 13.26 20.45C13.63 21.06 14.11 21.59 14.68 22C15.54 22.63 16.6 23 17.75 23C19.08 23 20.28 22.51 21.2 21.69C21.61 21.35 21.96 20.93 22.24 20.45C22.72 19.67 23 18.73 23 17.75C23 16.08 22.22 14.59 21 13.63ZM17.75 20.25C17.75 18.87 16.63 17.75 15.25 17.75C16.63 17.75 17.75 16.63 17.75 15.25C17.75 16.63 18.87 17.75 20.25 17.75C18.87 17.75 17.75 18.87 17.75 20.25Z"
        fill="currentColor"
      />
    </Svg>
  );
};

const NoteFavoriteLinear = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M8 2V5"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M16 2V5"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M21 8.5V13.63C20.11 12.92 18.98 12.5 17.75 12.5C16.52 12.5 15.37 12.93 14.47 13.66C13.26 14.61 12.5 16.1 12.5 17.75C12.5 18.73 12.78 19.67 13.26 20.45C13.63 21.06 14.11 21.59 14.68 22H8C4.5 22 3 20 3 17V8.5C3 5.5 4.5 3.5 8 3.5H16C19.5 3.5 21 5.5 21 8.5Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M7 11H13"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M7 16H9.62"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M23 17.75C23 18.73 22.72 19.67 22.24 20.45C21.96 20.93 21.61 21.35 21.2 21.69C20.28 22.51 19.08 23 17.75 23C16.6 23 15.54 22.63 14.68 22C14.11 21.59 13.63 21.06 13.26 20.45C12.78 19.67 12.5 18.73 12.5 17.75C12.5 16.1 13.26 14.61 14.47 13.66C15.37 12.93 16.52 12.5 17.75 12.5C18.98 12.5 20.11 12.92 21 13.63C22.22 14.59 23 16.08 23 17.75Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M17.75 20.25C17.75 18.87 18.87 17.75 20.25 17.75C18.87 17.75 17.75 16.63 17.75 15.25C17.75 16.63 16.63 17.75 15.25 17.75C16.63 17.75 17.75 18.87 17.75 20.25Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

const NoteFavoriteOutline = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M8 5.75C7.59 5.75 7.25 5.41 7.25 5V2C7.25 1.59 7.59 1.25 8 1.25C8.41 1.25 8.75 1.59 8.75 2V5C8.75 5.41 8.41 5.75 8 5.75Z"
        fill="currentColor"
      />
      <Path
        d="M16 5.75C15.59 5.75 15.25 5.41 15.25 5V2C15.25 1.59 15.59 1.25 16 1.25C16.41 1.25 16.75 1.59 16.75 2V5C16.75 5.41 16.41 5.75 16 5.75Z"
        fill="currentColor"
      />
      <Path
        d="M14.68 22.75H8C4.35 22.75 2.25 20.65 2.25 17V8.5C2.25 4.85 4.35 2.75 8 2.75H16C19.65 2.75 21.75 4.85 21.75 8.5V13.63C21.75 13.92 21.58 14.18 21.33 14.31C21.07 14.43 20.76 14.4 20.54 14.22C18.96 12.96 16.53 12.96 14.95 14.25C13.87 15.1 13.26 16.37 13.26 17.76C13.26 18.58 13.48 19.38 13.91 20.07C14.24 20.61 14.65 21.06 15.13 21.4C15.39 21.59 15.51 21.93 15.41 22.24C15.29 22.54 15.01 22.75 14.68 22.75ZM8 4.25C5.14 4.25 3.75 5.64 3.75 8.5V17C3.75 19.86 5.14 21.25 8 21.25H12.89C12.79 21.12 12.7 20.98 12.62 20.84C12.05 19.92 11.75 18.85 11.75 17.75C11.75 15.9 12.57 14.2 14.01 13.07C15.72 11.68 18.25 11.38 20.25 12.3V8.5C20.25 5.64 18.86 4.25 16 4.25H8Z"
        fill="currentColor"
      />
      <Path
        d="M13 11.75H7C6.59 11.75 6.25 11.41 6.25 11C6.25 10.59 6.59 10.25 7 10.25H13C13.41 10.25 13.75 10.59 13.75 11C13.75 11.41 13.41 11.75 13 11.75Z"
        fill="currentColor"
      />
      <Path
        d="M9.62 16.75H7C6.59 16.75 6.25 16.41 6.25 16C6.25 15.59 6.59 15.25 7 15.25H9.62C10.03 15.25 10.37 15.59 10.37 16C10.37 16.41 10.04 16.75 9.62 16.75Z"
        fill="currentColor"
      />
      <Path
        d="M17.75 23.75C16.47 23.75 15.26 23.35 14.24 22.61C13.6 22.15 13.05 21.55 12.62 20.84C12.05 19.92 11.75 18.85 11.75 17.75C11.75 15.9 12.57 14.2 14.01 13.07C16.09 11.38 19.37 11.37 21.47 13.04C22.92 14.18 23.75 15.9 23.75 17.75C23.75 18.85 23.45 19.92 22.88 20.84C22.56 21.39 22.15 21.87 21.68 22.26C20.61 23.22 19.21 23.75 17.75 23.75ZM17.75 13.25C16.73 13.25 15.73 13.6 14.94 14.24C13.86 15.09 13.25 16.36 13.25 17.75C13.25 18.57 13.47 19.37 13.9 20.06C14.23 20.6 14.64 21.05 15.12 21.39C15.89 21.95 16.8 22.25 17.75 22.25C18.86 22.25 19.88 21.86 20.7 21.13C21.06 20.83 21.35 20.48 21.59 20.07C22.02 19.37 22.25 18.57 22.25 17.75C22.25 16.36 21.63 15.0799 20.54 14.2199C19.74 13.5799 18.78 13.25 17.75 13.25Z"
        fill="currentColor"
      />
      <Path
        d="M17.75 21C17.34 21 17 20.66 17 20.25C17 19.29 16.21 18.5 15.25 18.5C14.84 18.5 14.5 18.16 14.5 17.75C14.5 17.34 14.84 17 15.25 17C16.21 17 17 16.21 17 15.25C17 14.84 17.34 14.5 17.75 14.5C18.16 14.5 18.5 14.84 18.5 15.25C18.5 16.21 19.29 17 20.25 17C20.66 17 21 17.34 21 17.75C21 18.16 20.66 18.5 20.25 18.5C19.29 18.5 18.5 19.29 18.5 20.25C18.5 20.66 18.16 21 17.75 21ZM17.32 17.75C17.47 17.88 17.62 18.02 17.75 18.18C17.88 18.03 18.02 17.88 18.18 17.75C18.03 17.62 17.88 17.48 17.75 17.32C17.62 17.48 17.48 17.62 17.32 17.75Z"
        fill="currentColor"
      />
    </Svg>
  );
};

const NoteFavoriteTwotone = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M8 2V5"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M16 2V5"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M21 8.5V13.63C20.11 12.92 18.98 12.5 17.75 12.5C16.52 12.5 15.37 12.93 14.47 13.66C13.26 14.61 12.5 16.1 12.5 17.75C12.5 18.73 12.78 19.67 13.26 20.45C13.63 21.06 14.11 21.59 14.68 22H8C4.5 22 3 20 3 17V8.5C3 5.5 4.5 3.5 8 3.5H16C19.5 3.5 21 5.5 21 8.5Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        opacity="0.4"
        d="M7 11H13"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        opacity="0.4"
        d="M7 16H9.62"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M23 17.75C23 18.73 22.72 19.67 22.24 20.45C21.96 20.93 21.61 21.35 21.2 21.69C20.28 22.51 19.08 23 17.75 23C16.6 23 15.54 22.63 14.68 22C14.11 21.59 13.63 21.06 13.26 20.45C12.78 19.67 12.5 18.73 12.5 17.75C12.5 16.1 13.26 14.61 14.47 13.66C15.37 12.93 16.52 12.5 17.75 12.5C18.98 12.5 20.11 12.92 21 13.63C22.22 14.59 23 16.08 23 17.75Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        opacity="0.4"
        d="M17.75 20.25C17.75 18.87 18.87 17.75 20.25 17.75C18.87 17.75 17.75 16.63 17.75 15.25C17.75 16.63 16.63 17.75 15.25 17.75C16.63 17.75 17.75 18.87 17.75 20.25Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

const variants: IconVariants = {
  bold: NoteFavoriteBold,
  broken: NoteFavoriteBroken,
  bulk: NoteFavoriteBulk,
  linear: NoteFavoriteLinear,
  outline: NoteFavoriteOutline,
  twotone: NoteFavoriteTwotone,
};

export const NoteFavoriteIcon = ({
  variant = defaultOptions.variant,
  className,
  ...props
}: IconProps) => {
  const textClasses = useContext(TextClassContext);
  const Component = variants[variant];
  return <Component className={cn(textClasses, className)} {...props} />;
};

export default NoteFavoriteIcon;
