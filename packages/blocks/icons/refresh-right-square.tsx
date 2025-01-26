import { useContext } from "react";
import { G, Path, Svg } from "unative/lib/svg";
import { cn } from "unative/lib/utils";
import { TextClassContext } from "unative/ui/text";

import { iconDefaultOptions } from "../icons-configuration";
import type { IconProps, IconVariants } from "../types/icons-type";

const RefreshRightSquareBold = ({
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
        d="M16.19 2H7.81C4.17 2 2 4.17 2 7.81V16.18C2 19.83 4.17 22 7.81 22H16.18C19.82 22 21.99 19.83 21.99 16.19V7.81C22 4.17 19.83 2 16.19 2ZM12 18.01C8.83 18.01 6.25 15.43 6.25 12.26C6.25 9.09 8.83 6.51 12 6.51C12.14 6.51 12.29 6.53 12.43 6.54L12.15 6.22C11.88 5.91 11.91 5.43 12.22 5.16C12.53 4.89 13.01 4.92 13.28 5.23L14.95 7.14C14.96 7.15 14.96 7.16 14.97 7.17C14.98 7.18 14.99 7.18 14.99 7.19C15.01 7.22 15.02 7.26 15.04 7.3C15.06 7.35 15.09 7.39 15.1 7.44C15.11 7.49 15.11 7.53 15.12 7.58C15.12 7.63 15.13 7.67 15.13 7.72C15.13 7.77 15.11 7.81 15.09 7.86C15.07 7.91 15.06 7.96 15.04 8C15.02 8.04 14.98 8.08 14.95 8.12C14.92 8.15 14.91 8.19 14.88 8.21C14.87 8.22 14.86 8.22 14.85 8.23C14.84 8.24 14.84 8.25 14.83 8.25L12.89 9.67C12.76 9.77 12.6 9.81 12.45 9.81C12.22 9.81 11.99 9.7 11.84 9.5C11.6 9.17 11.67 8.7 12 8.45L12.56 8.04C12.37 8.03 12.19 8.01 12 8.01C9.66 8.01 7.75 9.92 7.75 12.26C7.75 14.6 9.66 16.51 12 16.51C14.34 16.51 16.25 14.6 16.25 12.26C16.25 11.41 16 10.6 15.54 9.9C15.31 9.56 15.4 9.09 15.75 8.86C16.09 8.63 16.56 8.72 16.79 9.07C17.42 10.02 17.76 11.12 17.76 12.26C17.75 15.44 15.17 18.01 12 18.01Z"
        fill="currentColor"
      />
    </Svg>
  );
};

const RefreshRightSquareBroken = ({
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
        d="M13.67 7.51001C13.17 7.36001 12.62 7.26001 12 7.26001C9.24 7.26001 7 9.50001 7 12.26C7 15.02 9.24 17.26 12 17.26C14.76 17.26 17 15.02 17 12.26C17 11.23 16.69 10.28 16.16 9.48001"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M14.3807 7.64999L12.7207 5.73999"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M14.3795 7.6499L12.4395 9.0699"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M2 14V15C2 20 4 22 9 22H15C20 22 22 20 22 15V9C22 4 20 2 15 2H9C4 2 2 4 2 9"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

const RefreshRightSquareBulk = ({
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
        opacity="0.4"
        d="M16.19 2H7.82001C4.17001 2 2 4.17 2 7.81V16.18C2 19.82 4.17 21.99 7.81 21.99H16.18C19.82 21.99 21.99 19.82 21.99 16.18V7.81C22 4.17 19.83 2 16.19 2Z"
        fill="currentColor"
      />
      <Path
        d="M16.78 9.07011C16.55 8.72011 16.08 8.63011 15.74 8.86011C15.4 9.09011 15.3 9.56011 15.53 9.90011C16 10.6001 16.24 11.4201 16.24 12.2601C16.24 14.6001 14.33 16.5101 11.99 16.5101C9.65001 16.5101 7.74001 14.6001 7.74001 12.2601C7.74001 9.92011 9.65001 8.01011 11.99 8.01011C12.18 8.01011 12.36 8.03011 12.55 8.05011L12 8.46011C11.67 8.70011 11.59 9.17011 11.84 9.51011C11.99 9.71011 12.22 9.82011 12.45 9.82011C12.6 9.82011 12.76 9.77011 12.89 9.68011L14.83 8.26011C14.84 8.25011 14.84 8.24011 14.85 8.24011C14.86 8.23011 14.87 8.23011 14.88 8.22011C14.91 8.19011 14.93 8.16011 14.95 8.13011C14.98 8.09011 15.02 8.06011 15.04 8.01011C15.06 7.97011 15.07 7.92011 15.09 7.88011C15.1 7.83011 15.12 7.79011 15.13 7.74011C15.14 7.69011 15.13 7.65011 15.12 7.60011C15.12 7.55011 15.12 7.51011 15.1 7.46011C15.09 7.41011 15.06 7.37011 15.04 7.32011C15.02 7.29011 15.02 7.25011 14.99 7.21011C14.98 7.20011 14.97 7.20011 14.97 7.19011C14.96 7.18011 14.96 7.17011 14.95 7.16011L13.28 5.25011C13.01 4.94011 12.53 4.90011 12.22 5.18011C11.91 5.45011 11.88 5.93011 12.15 6.24011L12.43 6.56011C12.29 6.55011 12.15 6.53011 12 6.53011C8.83 6.53011 6.25 9.11011 6.25 12.2801C6.25 15.4501 8.83 18.0301 12 18.0301C15.17 18.0301 17.75 15.4501 17.75 12.2801C17.75 11.1201 17.42 10.0201 16.78 9.07011Z"
        fill="currentColor"
      />
    </Svg>
  );
};

const RefreshRightSquareLinear = ({
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
        d="M9 22H15C20 22 22 20 22 15V9C22 4 20 2 15 2H9C4 2 2 4 2 9V15C2 20 4 22 9 22Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M13.67 7.51001C13.17 7.36001 12.62 7.26001 12 7.26001C9.24 7.26001 7 9.50001 7 12.26C7 15.02 9.24 17.26 12 17.26C14.76 17.26 17 15.02 17 12.26C17 11.23 16.69 10.28 16.16 9.48001"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M14.38 7.64999L12.72 5.73999"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M14.3799 7.6499L12.4399 9.0699"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

const RefreshRightSquareOutline = ({
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
        d="M15 22.75H9C3.57 22.75 1.25 20.43 1.25 15V9C1.25 3.57 3.57 1.25 9 1.25H15C20.43 1.25 22.75 3.57 22.75 9V15C22.75 20.43 20.43 22.75 15 22.75ZM9 2.75C4.39 2.75 2.75 4.39 2.75 9V15C2.75 19.61 4.39 21.25 9 21.25H15C19.61 21.25 21.25 19.61 21.25 15V9C21.25 4.39 19.61 2.75 15 2.75H9Z"
        fill="currentColor"
      />
      <Path
        d="M12 18.0098C8.83 18.0098 6.25 15.4298 6.25 12.2598C6.25 9.08977 8.83 6.50977 12 6.50977C12.64 6.50977 13.28 6.59976 13.89 6.78976C14.29 6.90976 14.51 7.32977 14.39 7.72977C14.27 8.12977 13.85 8.34977 13.45 8.22977C12.99 8.08977 12.5 8.01976 12 8.01976C9.66 8.01976 7.75 9.92976 7.75 12.2698C7.75 14.6098 9.66 16.5198 12 16.5198C14.34 16.5198 16.25 14.6098 16.25 12.2698C16.25 11.4198 16 10.6098 15.54 9.90977C15.31 9.56977 15.4 9.09977 15.75 8.86977C16.09 8.63977 16.56 8.72977 16.79 9.07977C17.42 10.0298 17.76 11.1298 17.76 12.2698C17.75 15.4398 15.17 18.0098 12 18.0098Z"
        fill="currentColor"
      />
      <Path
        d="M14.3811 8.39996C14.1711 8.39996 13.9611 8.30996 13.8111 8.13996L12.1411 6.22996C11.8711 5.91996 11.9012 5.43995 12.2112 5.16995C12.5212 4.89995 13.0011 4.92995 13.2711 5.23995L14.9411 7.14996C15.2111 7.45996 15.1811 7.93996 14.8711 8.20996C14.7311 8.33996 14.5611 8.39996 14.3811 8.39996Z"
        fill="currentColor"
      />
      <Path
        d="M12.4399 9.81986C12.2099 9.81986 11.9799 9.70986 11.8299 9.50986C11.5899 9.17986 11.6599 8.70986 11.9899 8.45986L13.9299 7.03986C14.2599 6.79986 14.7299 6.86986 14.9799 7.19986C15.2199 7.52986 15.1499 7.99986 14.8199 8.24986L12.8799 9.66986C12.7499 9.76986 12.5899 9.81986 12.4399 9.81986Z"
        fill="currentColor"
      />
    </Svg>
  );
};

const RefreshRightSquareTwotone = ({
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
        d="M9 22H15C20 22 22 20 22 15V9C22 4 20 2 15 2H9C4 2 2 4 2 9V15C2 20 4 22 9 22Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <G opacity="0.4">
        <Path
          d="M13.67 7.51025C13.17 7.36025 12.62 7.26025 12 7.26025C9.24 7.26025 7 9.50025 7 12.2603C7 15.0203 9.24 17.2603 12 17.2603C14.76 17.2603 17 15.0203 17 12.2603C17 11.2303 16.69 10.2803 16.16 9.48026"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <Path
          d="M14.3807 7.65024L12.7207 5.74023"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <Path
          d="M14.3795 7.65039L12.4395 9.07039"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </G>
    </Svg>
  );
};

const variants: IconVariants = {
  bold: RefreshRightSquareBold,
  broken: RefreshRightSquareBroken,
  bulk: RefreshRightSquareBulk,
  linear: RefreshRightSquareLinear,
  outline: RefreshRightSquareOutline,
  twotone: RefreshRightSquareTwotone,
};

export const RefreshRightSquareIcon = ({
  variant = iconDefaultOptions.variant,
  className,
  ...props
}: IconProps) => {
  const textClasses = useContext(TextClassContext);
  const Component = variants[variant];
  return <Component className={cn(textClasses, className)} {...props} />;
};
