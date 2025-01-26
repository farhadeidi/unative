import { useContext } from "react";
import { Path, Svg } from "unative/lib/svg";
import { cn } from "unative/lib/utils";
import { TextClassContext } from "unative/ui/text";

import type { IconProps, IconVariants } from "../types/icons-type";

const Lock1Bold = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M18.75 8V10.1C18.31 10.04 17.81 10.01 17.25 10V8C17.25 4.85 16.36 2.75 12 2.75C7.64 2.75 6.75 4.85 6.75 8V10C6.19 10.01 5.69 10.04 5.25 10.1V8C5.25 5.1 5.95 1.25 12 1.25C18.05 1.25 18.75 5.1 18.75 8Z"
        fill="currentColor"
      />
      <Path
        d="M18.75 10.1C18.31 10.04 17.81 10.01 17.25 10H6.75C6.19 10.01 5.69 10.04 5.25 10.1C2.7 10.41 2 11.66 2 15V17C2 21 3 22 7 22H17C21 22 22 21 22 17V15C22 11.66 21.3 10.41 18.75 10.1ZM8.71 16.71C8.52 16.89 8.26 17 8 17C7.87 17 7.74 16.97 7.62 16.92C7.49 16.87 7.39 16.8 7.29 16.71C7.11 16.52 7 16.26 7 16C7 15.87 7.03 15.74 7.08 15.62C7.13 15.5 7.2 15.39 7.29 15.29C7.39 15.2 7.49 15.13 7.62 15.08C7.99 14.92 8.43 15.01 8.71 15.29C8.8 15.39 8.87 15.5 8.92 15.62C8.97 15.74 9 15.87 9 16C9 16.26 8.89 16.52 8.71 16.71ZM12.92 16.38C12.87 16.5 12.8 16.61 12.71 16.71C12.52 16.89 12.26 17 12 17C11.73 17 11.48 16.89 11.29 16.71C11.2 16.61 11.13 16.5 11.08 16.38C11.03 16.26 11 16.13 11 16C11 15.73 11.11 15.48 11.29 15.29C11.66 14.92 12.33 14.92 12.71 15.29C12.89 15.48 13 15.73 13 16C13 16.13 12.97 16.26 12.92 16.38ZM16.71 16.71C16.52 16.89 16.26 17 16 17C15.74 17 15.48 16.89 15.29 16.71C15.11 16.52 15 16.27 15 16C15 15.73 15.11 15.48 15.29 15.29C15.67 14.92 16.34 14.92 16.71 15.29C16.75 15.34 16.79 15.39 16.83 15.45C16.87 15.5 16.9 15.56 16.92 15.62C16.95 15.68 16.97 15.74 16.98 15.8C16.99 15.87 17 15.94 17 16C17 16.26 16.89 16.52 16.71 16.71Z"
        fill="currentColor"
      />
    </Svg>
  );
};

const Lock1Broken = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M6 10V8C6 4.69 7 2 12 2C17 2 18 4.69 18 8V10"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M9.5 16C9.5 17.38 10.62 18.5 12 18.5C13.38 18.5 14.5 17.38 14.5 16C14.5 14.62 13.38 13.5 12 13.5"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M22 17V15C22 11 21 10 17 10H7C3 10 2 11 2 15V17C2 21 3 22 7 22H17C18.76 22 19.94 21.81 20.71 21.25"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

const Lock1Bulk = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M11.9991 17.3501C12.8994 17.3501 13.6291 16.6203 13.6291 15.7201C13.6291 14.8199 12.8994 14.0901 11.9991 14.0901C11.0989 14.0901 10.3691 14.8199 10.3691 15.7201C10.3691 16.6203 11.0989 17.3501 11.9991 17.3501Z"
        fill="currentColor"
      />
      <Path
        d="M16.65 9.43994H7.35C3.25 9.43994 2 10.6899 2 14.7899V16.6499C2 20.7499 3.25 21.9999 7.35 21.9999H16.65C20.75 21.9999 22 20.7499 22 16.6499V14.7899C22 10.6899 20.75 9.43994 16.65 9.43994ZM12 18.7399C10.33 18.7399 8.98 17.3799 8.98 15.7199C8.98 14.0599 10.33 12.6999 12 12.6999C13.67 12.6999 15.02 14.0599 15.02 15.7199C15.02 17.3799 13.67 18.7399 12 18.7399Z"
        fill="currentColor"
      />
      <Path
        opacity="0.4"
        d="M7.1207 9.45V8.28C7.1207 5.35 7.9507 3.4 12.0007 3.4C16.0507 3.4 16.8807 5.35 16.8807 8.28V9.45C17.3907 9.46 17.8507 9.48 18.2807 9.54V8.28C18.2807 5.58 17.6307 2 12.0007 2C6.3707 2 5.7207 5.58 5.7207 8.28V9.53C6.1407 9.48 6.6107 9.45 7.1207 9.45Z"
        fill="currentColor"
      />
    </Svg>
  );
};

const Lock1Linear = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M6 10V8C6 4.69 7 2 12 2C17 2 18 4.69 18 8V10"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M12 18.5C13.3807 18.5 14.5 17.3807 14.5 16C14.5 14.6193 13.3807 13.5 12 13.5C10.6193 13.5 9.5 14.6193 9.5 16C9.5 17.3807 10.6193 18.5 12 18.5Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M17 22H7C3 22 2 21 2 17V15C2 11 3 10 7 10H17C21 10 22 11 22 15V17C22 21 21 22 17 22Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

const Lock1Outline = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M18 10.75C17.59 10.75 17.25 10.41 17.25 10V8C17.25 4.85 16.36 2.75 12 2.75C7.64 2.75 6.75 4.85 6.75 8V10C6.75 10.41 6.41 10.75 6 10.75C5.59 10.75 5.25 10.41 5.25 10V8C5.25 5.1 5.95 1.25 12 1.25C18.05 1.25 18.75 5.1 18.75 8V10C18.75 10.41 18.41 10.75 18 10.75Z"
        fill="currentColor"
      />
      <Path
        d="M17 22.75H7C2.59 22.75 1.25 21.41 1.25 17V15C1.25 10.59 2.59 9.25 7 9.25H17C21.41 9.25 22.75 10.59 22.75 15V17C22.75 21.41 21.41 22.75 17 22.75ZM7 10.75C3.42 10.75 2.75 11.43 2.75 15V17C2.75 20.57 3.42 21.25 7 21.25H17C20.58 21.25 21.25 20.57 21.25 17V15C21.25 11.43 20.58 10.75 17 10.75H7Z"
        fill="currentColor"
      />
      <Path
        d="M8 16.9999C7.87 16.9999 7.74 16.9699 7.62 16.9199C7.49 16.8699 7.39001 16.7999 7.29001 16.7099C7.11001 16.5199 7 16.2699 7 15.9999C7 15.8699 7.02999 15.7399 7.07999 15.6199C7.12999 15.4899 7.20001 15.3899 7.29001 15.2899C7.39001 15.1999 7.49 15.1299 7.62 15.0799C7.98 14.9199 8.42999 15.0099 8.70999 15.2899C8.79999 15.3899 8.87001 15.4999 8.92001 15.6199C8.97001 15.7399 9 15.8699 9 15.9999C9 16.2599 8.88999 16.5199 8.70999 16.7099C8.51999 16.8899 8.26 16.9999 8 16.9999Z"
        fill="currentColor"
      />
      <Path
        d="M12 16.9999C11.74 16.9999 11.48 16.8899 11.29 16.7099C11.11 16.5199 11 16.2699 11 15.9999C11 15.8699 11.02 15.7399 11.08 15.6199C11.13 15.4999 11.2 15.3899 11.29 15.2899C11.52 15.0599 11.87 14.9499 12.19 15.0199C12.26 15.0299 12.32 15.0499 12.38 15.0799C12.44 15.0999 12.5 15.1299 12.56 15.1699C12.61 15.1999 12.66 15.2499 12.71 15.2899C12.8 15.3899 12.87 15.4999 12.92 15.6199C12.97 15.7399 13 15.8699 13 15.9999C13 16.2699 12.89 16.5199 12.71 16.7099C12.66 16.7499 12.61 16.7899 12.56 16.8299C12.5 16.8699 12.44 16.8999 12.38 16.9199C12.32 16.9499 12.26 16.9699 12.19 16.9799C12.13 16.9899 12.06 16.9999 12 16.9999Z"
        fill="currentColor"
      />
      <Path
        d="M16 16.9999C15.73 16.9999 15.48 16.8899 15.29 16.7099C15.2 16.6099 15.13 16.4999 15.08 16.3799C15.03 16.2599 15 16.1299 15 15.9999C15 15.7399 15.11 15.4799 15.29 15.2899C15.34 15.2499 15.39 15.2099 15.44 15.1699C15.5 15.1299 15.56 15.0999 15.62 15.0799C15.68 15.0499 15.74 15.0299 15.8 15.0199C16.13 14.9499 16.47 15.0599 16.71 15.2899C16.89 15.4799 17 15.7299 17 15.9999C17 16.1299 16.97 16.2599 16.92 16.3799C16.87 16.5099 16.8 16.6099 16.71 16.7099C16.52 16.8899 16.26 16.9999 16 16.9999Z"
        fill="currentColor"
      />
    </Svg>
  );
};

const Lock1Twotone = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M6 10V8C6 4.69 7 2 12 2C17 2 18 4.69 18 8V10"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        opacity="0.4"
        d="M12 18.5C13.3807 18.5 14.5 17.3807 14.5 16C14.5 14.6193 13.3807 13.5 12 13.5C10.6193 13.5 9.5 14.6193 9.5 16C9.5 17.3807 10.6193 18.5 12 18.5Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M17 22H7C3 22 2 21 2 17V15C2 11 3 10 7 10H17C21 10 22 11 22 15V17C22 21 21 22 17 22Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

const variants: IconVariants = {
  bold: Lock1Bold,
  broken: Lock1Broken,
  bulk: Lock1Bulk,
  linear: Lock1Linear,
  outline: Lock1Outline,
  twotone: Lock1Twotone,
};

export const Lock1Icon = ({
  variant = "linear",
  className,
  ...props
}: IconProps) => {
  const textClasses = useContext(TextClassContext);
  const Component = variants[variant];
  return <Component className={cn(textClasses, className)} {...props} />;
};
