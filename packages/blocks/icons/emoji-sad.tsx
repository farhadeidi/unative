import { useContext } from "react";
import { Path, Svg } from "unative/lib/svg";
import { cn } from "unative/lib/utils";
import { TextClassContext } from "unative/ui/text";

import { iconDefaultOptions } from "../icons-configuration";
import type { IconProps, IconVariants } from "../types/icons-type";

const EmojiSadBold = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M16.19 2H7.81C4.17 2 2 4.17 2 7.81V16.18C2 19.83 4.17 22 7.81 22H16.18C19.82 22 21.99 19.83 21.99 16.19V7.81C22 4.17 19.83 2 16.19 2ZM6.47 9.28C6.18 8.99 6.18 8.51 6.47 8.22C7.76 6.93 9.87 6.93 11.17 8.22C11.46 8.51 11.46 8.99 11.17 9.28C11.02 9.43 10.83 9.5 10.64 9.5C10.45 9.5 10.26 9.43 10.11 9.28C9.4 8.57 8.24 8.57 7.53 9.28C7.24 9.58 6.76 9.58 6.47 9.28ZM15.6 18.08H8.4C7.7 18.08 7.13 17.51 7.13 16.8C7.13 14.11 9.32 11.92 12.01 11.92C14.7 11.92 16.89 14.11 16.89 16.8C16.88 17.5 16.3 18.08 15.6 18.08ZM17.53 9.28C17.24 9.57 16.76 9.57 16.47 9.28C15.76 8.57 14.6 8.57 13.89 9.28C13.74 9.43 13.55 9.5 13.36 9.5C13.17 9.5 12.98 9.43 12.83 9.28C12.54 8.99 12.54 8.51 12.83 8.22C14.12 6.93 16.23 6.93 17.53 8.22C17.82 8.52 17.82 8.99 17.53 9.28Z"
        fill="currentColor"
      />
    </Svg>
  );
};

const EmojiSadBroken = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M2 13V15C2 20 4 22 9 22H15C20 22 22 20 22 15V9C22 4 20 2 15 2H9C4 2 2 4 2 9"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M7 8.75C8 7.75 9.63 7.75 10.64 8.75"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M13.3594 8.75C14.3594 7.75 15.9894 7.75 16.9994 8.75"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M8.4 17.7H15.6C16.1 17.7 16.5 17.3 16.5 16.8C16.5 14.31 14.49 12.3 12 12.3C9.51 12.3 7.5 14.31 7.5 16.8C7.5 17.3 7.9 17.7 8.4 17.7Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

const EmojiSadBulk = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M16.19 2H7.81C4.17 2 2 4.17 2 7.81V16.18C2 19.83 4.17 22 7.81 22H16.18C19.82 22 21.99 19.83 21.99 16.19V7.81C22 4.17 19.83 2 16.19 2Z"
        fill="currentColor"
      />
      <Path
        d="M10.6395 9.49994C10.4495 9.49994 10.2595 9.42994 10.1095 9.27994C9.39945 8.56994 8.23945 8.56994 7.52945 9.27994C7.23945 9.56994 6.75945 9.56994 6.46945 9.27994C6.17945 8.98994 6.17945 8.50994 6.46945 8.21994C7.75945 6.92994 9.86945 6.92994 11.1695 8.21994C11.4595 8.50994 11.4595 8.98994 11.1695 9.27994C11.0195 9.42994 10.8295 9.49994 10.6395 9.49994Z"
        fill="currentColor"
      />
      <Path
        d="M13.3608 9.49994C13.1708 9.49994 12.9808 9.42994 12.8308 9.27994C12.5408 8.98994 12.5408 8.50994 12.8308 8.21994C14.1208 6.92994 16.2308 6.92994 17.5308 8.21994C17.8208 8.50994 17.8208 8.98994 17.5308 9.27994C17.2408 9.56994 16.7608 9.56994 16.4708 9.27994C15.7608 8.56994 14.6008 8.56994 13.8908 9.27994C13.7508 9.42994 13.5608 9.49994 13.3608 9.49994Z"
        fill="currentColor"
      />
      <Path
        d="M11.9991 11.9199C9.30914 11.9199 7.11914 14.1099 7.11914 16.7999C7.11914 17.4999 7.68914 18.0799 8.38914 18.0799H15.5891C16.2891 18.0799 16.8591 17.5099 16.8591 16.7999C16.8791 14.1099 14.6891 11.9199 11.9991 11.9199Z"
        fill="currentColor"
      />
    </Svg>
  );
};

const EmojiSadLinear = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M7 8.75C8 7.75 9.63 7.75 10.64 8.75"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M13.36 8.75C14.36 7.75 15.99 7.75 17 8.75"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M8.4 17.7H15.6C16.1 17.7 16.5 17.3 16.5 16.8C16.5 14.31 14.49 12.3 12 12.3C9.51 12.3 7.5 14.31 7.5 16.8C7.5 17.3 7.9 17.7 8.4 17.7Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

const EmojiSadOutline = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M10.6395 9.49994C10.4495 9.49994 10.2595 9.42994 10.1095 9.27994C9.39945 8.56994 8.23945 8.56994 7.52945 9.27994C7.23945 9.56994 6.75945 9.56994 6.46945 9.27994C6.17945 8.98994 6.17945 8.50994 6.46945 8.21994C7.75945 6.92994 9.86945 6.92994 11.1695 8.21994C11.4595 8.50994 11.4595 8.98994 11.1695 9.27994C11.0195 9.42994 10.8295 9.49994 10.6395 9.49994Z"
        fill="currentColor"
      />
      <Path
        d="M13.3608 9.49994C13.1708 9.49994 12.9808 9.42994 12.8308 9.27994C12.5408 8.98994 12.5408 8.50994 12.8308 8.21994C14.1208 6.92994 16.2308 6.92994 17.5308 8.21994C17.8208 8.50994 17.8208 8.98994 17.5308 9.27994C17.2408 9.56994 16.7608 9.56994 16.4708 9.27994C15.7608 8.56994 14.6008 8.56994 13.8908 9.27994C13.7508 9.42994 13.5608 9.49994 13.3608 9.49994Z"
        fill="currentColor"
      />
      <Path
        d="M15.6 18.45H8.4C7.49 18.45 6.75 17.71 6.75 16.8C6.75 13.91 9.1 11.55 12 11.55C14.9 11.55 17.25 13.91 17.25 16.8C17.25 17.71 16.51 18.45 15.6 18.45ZM12 13.05C9.93 13.05 8.25 14.73 8.25 16.8C8.25 16.88 8.32 16.95 8.4 16.95H15.6C15.68 16.95 15.75 16.88 15.75 16.8C15.75 14.73 14.07 13.05 12 13.05Z"
        fill="currentColor"
      />
    </Svg>
  );
};

const EmojiSadTwotone = ({ size = 24, className, ...props }: IconProps) => {
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
        opacity="0.34"
        d="M7 8.75C8 7.75 9.63 7.75 10.64 8.75"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        opacity="0.34"
        d="M13.3594 8.75C14.3594 7.75 15.9894 7.75 16.9994 8.75"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        opacity="0.34"
        d="M8.4 17.6998H15.6C16.1 17.6998 16.5 17.2998 16.5 16.7998C16.5 14.3098 14.49 12.2998 12 12.2998C9.51 12.2998 7.5 14.3098 7.5 16.7998C7.5 17.2998 7.9 17.6998 8.4 17.6998Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

const variants: IconVariants = {
  bold: EmojiSadBold,
  broken: EmojiSadBroken,
  bulk: EmojiSadBulk,
  linear: EmojiSadLinear,
  outline: EmojiSadOutline,
  twotone: EmojiSadTwotone,
};

export const EmojiSadIcon = ({
  variant = iconDefaultOptions.variant,
  className,
  ...props
}: IconProps) => {
  const textClasses = useContext(TextClassContext);
  const Component = variants[variant];
  return <Component className={cn(textClasses, className)} {...props} />;
};
