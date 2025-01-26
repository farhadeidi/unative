import { useContext } from "react";
import { Path, Svg } from "unative/lib/svg";
import { cn } from "unative/lib/utils";
import { TextClassContext } from "unative/ui/text";

import type { IconProps, IconVariants } from "../types/icons-type";

const MoreBold = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M16.19 2H7.81C4.17 2 2 4.17 2 7.81V16.18C2 19.83 4.17 22 7.81 22H16.18C19.82 22 21.99 19.83 21.99 16.19V7.81C22 4.17 19.83 2 16.19 2ZM7 13.31C6.28 13.31 5.69 12.72 5.69 12C5.69 11.28 6.28 10.69 7 10.69C7.72 10.69 8.31 11.28 8.31 12C8.31 12.72 7.72 13.31 7 13.31ZM12 13.31C11.28 13.31 10.69 12.72 10.69 12C10.69 11.28 11.28 10.69 12 10.69C12.72 10.69 13.31 11.28 13.31 12C13.31 12.72 12.72 13.31 12 13.31ZM17 13.31C16.28 13.31 15.69 12.72 15.69 12C15.69 11.28 16.28 10.69 17 10.69C17.72 10.69 18.31 11.28 18.31 12C18.31 12.72 17.72 13.31 17 13.31Z"
        fill="currentColor"
      />
    </Svg>
  );
};

const MoreBroken = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M5 10C3.9 10 3 10.9 3 12C3 13.1 3.9 14 5 14C6.1 14 7 13.1 7 12C7 10.9 6.1 10 5 10Z"
        stroke="currentColor"
        strokeWidth="1.5"
      />
      <Path
        d="M19 10C17.9 10 17 10.9 17 12C17 13.1 17.9 14 19 14C20.1 14 21 13.1 21 12C21 10.9 20.1 10 19 10Z"
        stroke="currentColor"
        strokeWidth="1.5"
      />
      <Path
        d="M10 12C10 13.1 10.9 14 12 14C13.1 14 14 13.1 14 12C14 10.9 13.1 10 12 10"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

const MoreBulk = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M11.9995 10.6899C11.2795 10.6899 10.6895 11.2799 10.6895 11.9999C10.6895 12.7199 11.2795 13.3099 11.9995 13.3099C12.7195 13.3099 13.3095 12.7199 13.3095 11.9999C13.3095 11.2799 12.7195 10.6899 11.9995 10.6899Z"
        fill="currentColor"
      />
      <Path
        d="M6.99945 10.6899C6.27945 10.6899 5.68945 11.2799 5.68945 11.9999C5.68945 12.7199 6.27945 13.3099 6.99945 13.3099C7.71945 13.3099 8.30945 12.7199 8.30945 11.9999C8.30945 11.2799 7.71945 10.6899 6.99945 10.6899Z"
        fill="currentColor"
      />
      <Path
        d="M16.9995 10.6899C16.2795 10.6899 15.6895 11.2799 15.6895 11.9999C15.6895 12.7199 16.2795 13.3099 16.9995 13.3099C17.7195 13.3099 18.3095 12.7199 18.3095 11.9999C18.3095 11.2799 17.7195 10.6899 16.9995 10.6899Z"
        fill="currentColor"
      />
    </Svg>
  );
};

const MoreLinear = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M5 10C3.9 10 3 10.9 3 12C3 13.1 3.9 14 5 14C6.1 14 7 13.1 7 12C7 10.9 6.1 10 5 10Z"
        stroke="currentColor"
        strokeWidth="1.5"
      />
      <Path
        d="M19 10C17.9 10 17 10.9 17 12C17 13.1 17.9 14 19 14C20.1 14 21 13.1 21 12C21 10.9 20.1 10 19 10Z"
        stroke="currentColor"
        strokeWidth="1.5"
      />
      <Path
        d="M12 10C10.9 10 10 10.9 10 12C10 13.1 10.9 14 12 14C13.1 14 14 13.1 14 12C14 10.9 13.1 10 12 10Z"
        stroke="currentColor"
        strokeWidth="1.5"
      />
    </Svg>
  );
};

const MoreOutline = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M5 14.75C3.48 14.75 2.25 13.52 2.25 12C2.25 10.48 3.48 9.25 5 9.25C6.52 9.25 7.75 10.48 7.75 12C7.75 13.52 6.52 14.75 5 14.75ZM5 10.75C4.31 10.75 3.75 11.31 3.75 12C3.75 12.69 4.31 13.25 5 13.25C5.69 13.25 6.25 12.69 6.25 12C6.25 11.31 5.69 10.75 5 10.75Z"
        fill="currentColor"
      />
      <Path
        d="M19 14.75C17.48 14.75 16.25 13.52 16.25 12C16.25 10.48 17.48 9.25 19 9.25C20.52 9.25 21.75 10.48 21.75 12C21.75 13.52 20.52 14.75 19 14.75ZM19 10.75C18.31 10.75 17.75 11.31 17.75 12C17.75 12.69 18.31 13.25 19 13.25C19.69 13.25 20.25 12.69 20.25 12C20.25 11.31 19.69 10.75 19 10.75Z"
        fill="currentColor"
      />
      <Path
        d="M12 14.75C10.48 14.75 9.25 13.52 9.25 12C9.25 10.48 10.48 9.25 12 9.25C13.52 9.25 14.75 10.48 14.75 12C14.75 13.52 13.52 14.75 12 14.75ZM12 10.75C11.31 10.75 10.75 11.31 10.75 12C10.75 12.69 11.31 13.25 12 13.25C12.69 13.25 13.25 12.69 13.25 12C13.25 11.31 12.69 10.75 12 10.75Z"
        fill="currentColor"
      />
    </Svg>
  );
};

const MoreTwotone = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M5 10C3.9 10 3 10.9 3 12C3 13.1 3.9 14 5 14C6.1 14 7 13.1 7 12C7 10.9 6.1 10 5 10Z"
        stroke="currentColor"
        strokeWidth="1.5"
      />
      <Path
        d="M19 10C17.9 10 17 10.9 17 12C17 13.1 17.9 14 19 14C20.1 14 21 13.1 21 12C21 10.9 20.1 10 19 10Z"
        stroke="currentColor"
        strokeWidth="1.5"
      />
      <Path
        opacity="0.4"
        d="M12 10C10.9 10 10 10.9 10 12C10 13.1 10.9 14 12 14C13.1 14 14 13.1 14 12C14 10.9 13.1 10 12 10Z"
        stroke="currentColor"
        strokeWidth="1.5"
      />
    </Svg>
  );
};

const variants: IconVariants = {
  bold: MoreBold,
  broken: MoreBroken,
  bulk: MoreBulk,
  linear: MoreLinear,
  outline: MoreOutline,
  twotone: MoreTwotone,
};

export const MoreIcon = ({
  variant = "linear",
  className,
  ...props
}: IconProps) => {
  const textClasses = useContext(TextClassContext);
  const Component = variants[variant];
  return <Component className={cn(textClasses, className)} {...props} />;
};
