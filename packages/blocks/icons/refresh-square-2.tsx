import { Path, Svg } from "unative/lib/svg";
import { cn } from "unative/lib/utils";

import type { IconProps, IconVariants } from "../types/icons-type";

const RefreshSquare2Bold = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M16.19 2H7.81C4.17 2 2 4.17 2 7.81V16.18C2 19.83 4.17 22 7.81 22H16.18C19.82 22 21.99 19.83 21.99 16.19V7.81C22 4.17 19.83 2 16.19 2ZM5.25 11.89C5.28 10.13 5.98 8.47 7.22 7.23C8.5 5.95 10.2 5.25 12 5.25C13.8 5.25 15.5 5.95 16.77 7.23C16.8 7.26 16.83 7.3 16.86 7.34V6.48C16.86 6.07 17.2 5.73 17.61 5.73C18.02 5.73 18.36 6.07 18.36 6.48V9.13C18.36 9.54 18.02 9.88 17.61 9.88H14.96C14.55 9.88 14.21 9.54 14.21 9.13C14.21 8.72 14.55 8.38 14.96 8.38H15.79C15.76 8.35 15.74 8.32 15.71 8.29C14.72 7.3 13.4 6.75 12 6.75C10.6 6.75 9.28 7.3 8.29 8.29C7.32 9.26 6.78 10.55 6.76 11.92C6.75 12.32 6.41 12.65 6 12.65H5.99C5.58 12.65 5.25 12.3 5.25 11.89ZM16.77 16.77C15.5 18.04 13.8 18.75 12 18.75C10.2 18.75 8.5 18.05 7.23 16.77C7.2 16.74 7.17 16.7 7.14 16.66V17.51C7.14 17.92 6.8 18.26 6.39 18.26C5.98 18.26 5.64 17.92 5.64 17.51V14.86C5.64 14.45 5.98 14.11 6.39 14.11H9.04C9.45 14.11 9.79 14.45 9.79 14.86C9.79 15.27 9.45 15.61 9.04 15.61H8.21C8.24 15.64 8.26 15.67 8.29 15.7C9.28 16.69 10.6 17.24 12 17.24C13.4 17.24 14.72 16.69 15.71 15.7C16.69 14.72 17.24 13.41 17.24 12.01C17.24 11.6 17.58 11.26 17.99 11.26C18.4 11.26 18.74 11.6 18.74 12.01C18.74 13.82 18.04 15.51 16.77 16.77Z"
        fill="currentColor"
      />
    </Svg>
  );
};

const RefreshSquare2Broken = ({
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
        d="M17.5 12C17.5 15.04 15.04 17.5 12 17.5C8.96 17.5 7.10999 14.44 7.10999 14.44M7.10999 14.44H9.59M7.10999 14.44V17.19M6.5 12C6.5 8.96 8.94 6.5 12 6.5C15.67 6.5 17.5 9.56 17.5 9.56M17.5 9.56V6.81M17.5 9.56H15.06"
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

const RefreshSquare2Bulk = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M18.0004 11.27C17.5804 11.27 17.2504 11.6 17.2504 12.02C17.2404 13.42 16.7004 14.73 15.7204 15.71C14.7304 16.7 13.4104 17.25 12.0104 17.25C10.6104 17.25 9.29038 16.7 8.30038 15.71C8.27038 15.68 8.2504 15.65 8.2204 15.62H9.05038C9.46038 15.62 9.80038 15.28 9.80038 14.87C9.80038 14.46 9.46038 14.12 9.05038 14.12H6.40039C5.99039 14.12 5.65039 14.46 5.65039 14.87V17.52C5.65039 17.93 5.99039 18.27 6.40039 18.27C6.81039 18.27 7.15039 17.93 7.15039 17.52V16.67C7.18039 16.7 7.21039 16.74 7.24039 16.78C8.51039 18.05 10.2104 18.76 12.0104 18.76C13.8104 18.76 15.5104 18.06 16.7804 16.78C18.0404 15.52 18.7404 13.83 18.7504 12.03C18.7504 11.61 18.4104 11.28 18.0004 11.27Z"
        fill="currentColor"
      />
      <Path
        d="M6.00022 12.65C6.41022 12.65 6.74022 12.32 6.75022 11.91C6.77022 10.54 7.32022 9.25 8.28022 8.28C9.27022 7.29 10.5902 6.74 11.9902 6.74C13.3902 6.74 14.7102 7.29 15.7002 8.28C15.7302 8.31 15.7502 8.34 15.7802 8.37H14.9502C14.5402 8.37 14.2002 8.71 14.2002 9.12C14.2002 9.53 14.5402 9.87 14.9502 9.87H17.6002C18.0102 9.87 18.3502 9.53 18.3502 9.12V6.48C18.3502 6.07 18.0102 5.73 17.6002 5.73C17.1902 5.73 16.8502 6.07 16.8502 6.48V7.34C16.8202 7.31 16.7902 7.27 16.7602 7.23C15.4902 5.96 13.7902 5.25 11.9902 5.25C10.1902 5.25 8.49022 5.95 7.22022 7.23C5.97022 8.47 5.27022 10.13 5.25022 11.89C5.24022 12.3 5.57021 12.64 5.99021 12.65C6.00021 12.65 6.00022 12.65 6.00022 12.65Z"
        fill="currentColor"
      />
    </Svg>
  );
};

const RefreshSquare2Linear = ({
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
        d="M17.5 12C17.5 15.04 15.04 17.5 12 17.5C8.96 17.5 7.10999 14.44 7.10999 14.44M7.10999 14.44H9.59M7.10999 14.44V17.19M6.5 12C6.5 8.96 8.94 6.5 12 6.5C15.67 6.5 17.5 9.56 17.5 9.56M17.5 9.56V6.81M17.5 9.56H15.06"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

const RefreshSquare2Outline = ({
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
        d="M17.5 12C17.5 15.04 15.04 17.5 12 17.5C8.96 17.5 7.10999 14.44 7.10999 14.44M7.10999 14.44H9.59M7.10999 14.44V17.19M6.5 12C6.5 8.96 8.94 6.5 12 6.5C15.67 6.5 17.5 9.56 17.5 9.56M17.5 9.56V6.81M17.5 9.56H15.06"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

const RefreshSquare2Twotone = ({
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
        opacity="0.4"
        d="M17.5 12C17.5 15.04 15.04 17.5 12 17.5C8.96 17.5 7.10999 14.44 7.10999 14.44M7.10999 14.44H9.59M7.10999 14.44V17.19M6.5 12C6.5 8.96 8.94 6.5 12 6.5C15.67 6.5 17.5 9.56 17.5 9.56M17.5 9.56V6.81M17.5 9.56H15.06"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

const variants: IconVariants = {
  bold: RefreshSquare2Bold,
  broken: RefreshSquare2Broken,
  bulk: RefreshSquare2Bulk,
  linear: RefreshSquare2Linear,
  outline: RefreshSquare2Outline,
  twotone: RefreshSquare2Twotone,
};

export const RefreshSquare2Icon = ({
  variant = "linear",
  ...props
}: IconProps) => {
  const Component = variants[variant];
  return <Component {...props} />;
};
