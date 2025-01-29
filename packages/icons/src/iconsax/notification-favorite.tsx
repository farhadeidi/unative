import { useContext } from "react";
import { cn } from "unative/lib/utils";
import { Path, Svg } from "unative/ui/svg";
import { TextClassContext } from "unative/ui/text";

import type { IconProps, IconVariants } from "../icon-options";
import { defaultOptions } from "../icon-options";

const NotificationFavoriteBold = ({
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
        d="M19 8C20.6569 8 22 6.65685 22 5C22 3.34315 20.6569 2 19 2C17.3431 2 16 3.34315 16 5C16 6.65685 17.3431 8 19 8Z"
        fill="currentColor"
      />
      <Path
        d="M19.8 9.42C19.77 9.43 19.74 9.43 19.71 9.44C19.63 9.45 19.56 9.46 19.47 9.47C19.32 9.49 19.16 9.5 19 9.5C18.57 9.5 18.16 9.44 17.77 9.32C17.6 9.28 17.44 9.23 17.29 9.16C17.14 9.1 16.98 9.02 16.84 8.94C16.09 8.53 15.47 7.91 15.06 7.16C14.98 7.02 14.9 6.86 14.84 6.71C14.77 6.56 14.72 6.4 14.68 6.23C14.56 5.84 14.5 5.43 14.5 5C14.5 4.84 14.51 4.68 14.53 4.53C14.54 4.44 14.55 4.37 14.56 4.29C14.57 4.26 14.57 4.23 14.58 4.2C14.7 3.58 14.24 3 13.6 3H7.52C7.38 3 7.24 3.01 7.11 3.02C6.99 3.03 6.88 3.04 6.76 3.06C6.64 3.07 6.52 3.09 6.41 3.11C4 3.46 2.46 4.99 2.11 7.41C2.09 7.52 2.07 7.64 2.06 7.76C2.04 7.88 2.03 7.99 2.02 8.11C2.01 8.24 2 8.38 2 8.52V16.48C2 16.62 2.01 16.76 2.02 16.89C2.03 17.01 2.04 17.12 2.06 17.24C2.07 17.36 2.09 17.48 2.11 17.59C2.46 20.01 4 21.54 6.41 21.89C6.52 21.91 6.64 21.93 6.76 21.94C6.88 21.96 6.99 21.97 7.11 21.98C7.24 21.99 7.38 22 7.52 22H15.48C15.62 22 15.76 21.99 15.89 21.98C16.01 21.97 16.12 21.96 16.24 21.94C16.36 21.93 16.48 21.91 16.59 21.89C19 21.54 20.54 20.01 20.89 17.59C20.91 17.48 20.93 17.36 20.94 17.24C20.96 17.12 20.97 17.01 20.98 16.89C20.99 16.76 21 16.62 21 16.48V10.4C21 9.76 20.42 9.3 19.8 9.42ZM12.28 15.25C11.75 16.92 9.93 17.82 9.3 17.82C8.66 17.82 6.87 16.94 6.33 15.25H6.32C5.97 14.14 6.37 12.69 7.64 12.28C8.22 12.09 8.84 12.2 9.29 12.55C9.74 12.2 10.37 12.09 10.96 12.28C12.23 12.69 12.63 14.14 12.28 15.25Z"
        fill="currentColor"
      />
    </Svg>
  );
};

const NotificationFavoriteBroken = ({
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
        d="M19 2C17.34 2 16 3.34 16 5C16 6.66 17.34 8 19 8C20.66 8 22 6.66 22 5C22 4.64 21.94 4.3 21.82 3.99"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M6.81046 14.9299C6.46046 13.8299 6.87046 12.4599 8.03046 12.0899C8.64046 11.8899 9.39046 12.0599 9.82046 12.6499C10.2205 12.0399 11.0005 11.8999 11.6005 12.0899C12.7605 12.4599 13.1705 13.8299 12.8205 14.9299C12.2705 16.6799 10.3505 17.5899 9.82046 17.5899C9.28046 17.5799 7.38046 16.6899 6.81046 14.9299Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M2 14.97V15C2 20 4 22 9 22H15C20 22 22 20 22 15V10"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M14 2H9C4 2 2 4 2 9V11"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

const NotificationFavoriteBulk = ({
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
        d="M19 8C20.6569 8 22 6.65685 22 5C22 3.34315 20.6569 2 19 2C17.3431 2 16 3.34315 16 5C16 6.65685 17.3431 8 19 8Z"
        fill="currentColor"
      />
      <Path
        opacity="0.4"
        d="M19 9.5C16.52 9.5 14.5 7.48 14.5 5C14.5 4.28 14.69 3.61 14.99 3H7.52C4.07 3 2 5.06 2 8.52V16.47C2 19.94 4.07 22 7.52 22H15.47C18.93 22 20.99 19.94 20.99 16.48V9.01C20.39 9.31 19.72 9.5 19 9.5Z"
        fill="currentColor"
      />
      <Path
        d="M10.8997 12.3601C10.3297 12.1801 9.71974 12.2801 9.28974 12.6201C8.84974 12.2801 8.24974 12.1801 7.68974 12.3601C6.45974 12.7601 6.06974 14.1601 6.41974 15.2401C6.94974 16.8801 8.67974 17.7301 9.29974 17.7301C9.90974 17.7301 11.6697 16.8601 12.1797 15.2401C12.5297 14.1601 12.1297 12.7601 10.8997 12.3601Z"
        fill="currentColor"
      />
    </Svg>
  );
};

const NotificationFavoriteLinear = ({
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
        d="M19 8C20.6569 8 22 6.65685 22 5C22 3.34315 20.6569 2 19 2C17.3431 2 16 3.34315 16 5C16 6.65685 17.3431 8 19 8Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M14 2H9C4 2 2 4 2 9V15C2 20 4 22 9 22H15C20 22 22 20 22 15V10"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M6.80998 14.9299C6.45998 13.8299 6.86998 12.4599 8.02998 12.0899C8.63998 11.8899 9.38998 12.0599 9.81998 12.6499C10.22 12.0399 11 11.8999 11.6 12.0899C12.76 12.4599 13.17 13.8299 12.82 14.9299C12.27 16.6799 10.35 17.5899 9.81998 17.5899C9.27998 17.5799 7.37998 16.6899 6.80998 14.9299Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

const NotificationFavoriteOutline = ({
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
        d="M19 8.75C16.93 8.75 15.25 7.07 15.25 5C15.25 2.93 16.93 1.25 19 1.25C21.07 1.25 22.75 2.93 22.75 5C22.75 7.07 21.07 8.75 19 8.75ZM19 2.75C17.76 2.75 16.75 3.76 16.75 5C16.75 6.24 17.76 7.25 19 7.25C20.24 7.25 21.25 6.24 21.25 5C21.25 3.76 20.24 2.75 19 2.75Z"
        fill="currentColor"
      />
      <Path
        d="M15 22.75H9C3.57 22.75 1.25 20.43 1.25 15V9C1.25 3.57 3.57 1.25 9 1.25H14C14.41 1.25 14.75 1.59 14.75 2C14.75 2.41 14.41 2.75 14 2.75H9C4.39 2.75 2.75 4.39 2.75 9V15C2.75 19.61 4.39 21.25 9 21.25H15C19.61 21.25 21.25 19.61 21.25 15V10C21.25 9.59 21.59 9.25 22 9.25C22.41 9.25 22.75 9.59 22.75 10V15C22.75 20.43 20.43 22.75 15 22.75Z"
        fill="currentColor"
      />
      <Path
        d="M9.81041 18.3302C8.89041 18.3302 6.75041 17.2102 6.09041 15.1502C5.64041 13.7402 6.16041 11.8902 7.79041 11.3602C8.49041 11.1302 9.22041 11.2402 9.80041 11.6102C10.3704 11.2402 11.1204 11.1302 11.8204 11.3602C13.4504 11.8902 13.9804 13.7402 13.5204 15.1502C12.8704 17.2502 10.6304 18.3302 9.81041 18.3302ZM7.52041 14.7002C7.98041 16.1502 9.54041 16.8102 9.82041 16.8402C10.1404 16.8102 11.6704 16.0702 12.0904 14.7102C12.3204 13.9802 12.0904 13.0402 11.3604 12.8002C11.0504 12.7002 10.6304 12.7602 10.4304 13.0502C10.2904 13.2602 10.0704 13.3802 9.82041 13.3902C9.58041 13.3902 9.34041 13.2802 9.20041 13.0802C8.96041 12.7502 8.54041 12.7002 8.25041 12.8002C7.53041 13.0302 7.29041 13.9702 7.52041 14.7002Z"
        fill="currentColor"
      />
    </Svg>
  );
};

const NotificationFavoriteTwotone = ({
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
        d="M19 8C20.6569 8 22 6.65685 22 5C22 3.34315 20.6569 2 19 2C17.3431 2 16 3.34315 16 5C16 6.65685 17.3431 8 19 8Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M14 2H9C4 2 2 4 2 9V15C2 20 4 22 9 22H15C20 22 22 20 22 15V10"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        opacity="0.4"
        d="M6.81046 14.9299C6.46046 13.8299 6.87046 12.4599 8.03046 12.0899C8.64046 11.8899 9.39046 12.0599 9.82046 12.6499C10.2205 12.0399 11.0005 11.8999 11.6005 12.0899C12.7605 12.4599 13.1705 13.8299 12.8205 14.9299C12.2705 16.6799 10.3505 17.5899 9.82046 17.5899C9.28046 17.5799 7.38046 16.6899 6.81046 14.9299Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

const variants: IconVariants = {
  bold: NotificationFavoriteBold,
  broken: NotificationFavoriteBroken,
  bulk: NotificationFavoriteBulk,
  linear: NotificationFavoriteLinear,
  outline: NotificationFavoriteOutline,
  twotone: NotificationFavoriteTwotone,
};

export const NotificationFavoriteIcon = ({
  variant = defaultOptions.variant,
  className,
  ...props
}: IconProps) => {
  const textClasses = useContext(TextClassContext);
  const Component = variants[variant];
  return <Component className={cn(textClasses, className)} {...props} />;
};

export default NotificationFavoriteIcon;
