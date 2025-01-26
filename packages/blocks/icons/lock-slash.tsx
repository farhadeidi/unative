import { useContext } from "react";
import { Path, Svg } from "unative/lib/svg";
import { cn } from "unative/lib/utils";
import { TextClassContext } from "unative/ui/text";

import type { IconProps, IconVariants } from "../types/icons-type";

const LockSlashBold = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M13.6308 15.7195C13.6308 16.6195 12.9008 17.3495 12.0008 17.3495C11.3608 17.3495 10.8108 16.9795 10.5508 16.4495L12.7308 14.2695C13.2608 14.5295 13.6308 15.0795 13.6308 15.7195Z"
        fill="currentColor"
      />
      <Path
        d="M21.7711 2.23C21.4711 1.93 20.9811 1.93 20.6811 2.23L17.8711 5.04C17.1011 3.02 15.1311 2 12.0011 2C6.37109 2 5.72109 5.58 5.72109 8.28V9.53C5.73109 9.53 5.74109 9.53 5.75109 9.53C2.92109 9.87 2.00109 11.28 2.00109 14.79V16.65C2.00109 18.25 2.19109 19.41 2.67109 20.24L2.22109 20.69C1.92109 20.99 1.92109 21.48 2.22109 21.78C2.38109 21.92 2.57109 22 2.77109 22C2.97109 22 3.16109 21.92 3.31109 21.77L21.7711 3.31C22.0811 3.01 22.0811 2.53 21.7711 2.23ZM7.35109 9.44C7.27109 9.44 7.20109 9.44 7.12109 9.44V8.28C7.12109 5.35 7.95109 3.4 12.0011 3.4C15.4011 3.4 16.4711 4.7 16.7711 6.15L13.4811 9.44H7.35109Z"
        fill="currentColor"
      />
      <Path
        d="M22.0005 14.789V16.649C22.0005 20.749 20.7505 21.999 16.6505 21.999H7.41054C6.52054 21.999 6.08054 20.919 6.71054 20.289L9.53054 17.469C9.60054 17.569 9.68054 17.659 9.76054 17.749C10.4605 18.509 11.5005 18.909 12.6505 18.669C12.7405 18.649 12.8305 18.629 12.9205 18.589C13.0105 18.569 13.0905 18.539 13.1705 18.499C13.3705 18.429 13.5605 18.319 13.7405 18.189C13.8105 18.149 13.8705 18.099 13.9205 18.049C14.0705 17.929 14.2105 17.789 14.3305 17.639C14.3805 17.589 14.4305 17.529 14.4705 17.459C14.6005 17.279 14.7105 17.089 14.7805 16.889C14.8205 16.809 14.8505 16.729 14.8705 16.639C14.9105 16.549 14.9305 16.459 14.9505 16.369C15.1905 15.219 14.7905 14.179 14.0305 13.479C13.9505 13.399 13.8505 13.319 13.7505 13.249L16.8705 10.129C16.9205 10.079 16.9605 10.039 17.0105 9.999C17.4105 9.669 17.9205 9.509 18.4305 9.549C18.5205 9.559 18.6205 9.569 18.7105 9.589C18.8805 9.619 19.0505 9.659 19.2105 9.699C19.3705 9.739 19.5205 9.789 19.6705 9.839C19.9605 9.949 20.2105 10.079 20.4405 10.229C20.6705 10.379 20.8605 10.559 21.0405 10.769C21.1305 10.879 21.2205 10.999 21.2905 11.129C21.3605 11.239 21.4205 11.359 21.4805 11.489C21.5405 11.619 21.5905 11.759 21.6405 11.899C21.7005 12.069 21.7505 12.259 21.7905 12.459C21.8305 12.599 21.8505 12.749 21.8805 12.909C21.9005 13.059 21.9205 13.219 21.9405 13.389C21.9805 13.809 22.0005 14.279 22.0005 14.789Z"
        fill="currentColor"
      />
    </Svg>
  );
};

const LockSlashBroken = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M10.0195 17.52C10.4795 18.11 11.1995 18.5 11.9995 18.5C13.3795 18.5 14.4995 17.38 14.4995 16C14.4995 15.43 14.3095 14.9 13.9895 14.48"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M20.69 21.26C19.93 21.81 18.75 22 17 22H7C6.64 22 6.31 21.99 6 21.97"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M2.82 20.8C2.21 20.04 2 18.83 2 17V15C2 11 3 10 7 10H17C17.36 10 17.69 10.01 18 10.03C21.17 10.21 22 11.36 22 15V17"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M6 10V8C6 4.69 7 2 12 2C16.15 2 17.54 3.38 17.9 5.56"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M22 2L2 22"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

const LockSlashBulk = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M13.6308 15.72C13.6308 16.62 12.9008 17.35 12.0008 17.35C11.3608 17.35 10.8108 16.98 10.5508 16.45L12.7308 14.27C13.2608 14.53 13.6308 15.08 13.6308 15.72Z"
        fill="currentColor"
      />
      <Path
        opacity="0.4"
        d="M7.35 9.43994C3.25 9.43994 2 10.6899 2 14.7899V16.6499C2 18.6999 2.31 20.0399 3.14 20.8599L9.1 14.8999C9.38 13.8899 10.17 13.0999 11.18 12.8199L14.56 9.43994H7.35Z"
        fill="currentColor"
      />
      <Path
        d="M18.1307 5.87L16.8707 7.13C16.8307 5.35 16.1607 3.4 12.0007 3.4C7.9507 3.4 7.1207 5.35 7.1207 8.28V9.45C6.6107 9.45 6.1407 9.48 5.7207 9.53V8.28C5.7207 5.58 6.3707 2 12.0007 2C15.5407 2 17.6007 3.3 18.1307 5.87Z"
        fill="currentColor"
      />
      <Path
        opacity="0.4"
        d="M21.9999 14.79V16.65C21.9999 20.75 20.7499 22 16.6499 22H7.34992C6.50992 22 5.77992 21.95 5.16992 21.83L9.52992 17.47C10.0899 18.24 10.9799 18.74 11.9999 18.74C13.6699 18.74 15.0199 17.39 15.0199 15.72C15.0199 14.7 14.5199 13.81 13.7499 13.25L17.5399 9.45996C20.9299 9.64996 21.9999 11 21.9999 14.79Z"
        fill="currentColor"
      />
      <Path
        d="M21.7709 2.22988C21.4709 1.92988 20.9809 1.92988 20.6809 2.22988L2.23086 20.6899C1.93086 20.9899 1.93086 21.4799 2.23086 21.7799C2.38086 21.9199 2.57086 21.9999 2.77086 21.9999C2.97086 21.9999 3.16086 21.9199 3.31086 21.7699L21.7709 3.30988C22.0809 3.00988 22.0809 2.52988 21.7709 2.22988Z"
        fill="currentColor"
      />
    </Svg>
  );
};

const LockSlashLinear = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M10.02 17.52C10.48 18.11 11.2 18.5 12 18.5C13.38 18.5 14.5 17.38 14.5 16C14.5 15.43 14.31 14.9 13.99 14.48"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M2.82 20.8C2.21 20.04 2 18.83 2 17V15C2 11 3 10 7 10H17C17.36 10 17.69 10.01 18 10.03C21.17 10.21 22 11.36 22 15V17C22 21 21 22 17 22H7C6.64 22 6.31 21.99 6 21.97"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M6 10V8C6 4.69 7 2 12 2C16.15 2 17.54 3.38 17.9 5.56"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M22 2L2 22"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

const LockSlashOutline = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M11.9996 19.25C10.9796 19.25 10.0396 18.79 9.41956 17.98C9.16956 17.65 9.22957 17.18 9.55957 16.93C9.88957 16.68 10.3596 16.74 10.6096 17.07C10.9396 17.51 11.4496 17.75 11.9996 17.75C12.9596 17.75 13.7496 16.96 13.7496 16C13.7496 15.61 13.6296 15.24 13.3896 14.94C13.1396 14.61 13.1996 14.14 13.5296 13.89C13.8596 13.64 14.3296 13.7 14.5796 14.03C15.0196 14.6 15.2496 15.28 15.2496 16C15.2496 17.79 13.7896 19.25 11.9996 19.25Z"
        fill="currentColor"
      />
      <Path
        d="M17 22.75H7C6.63 22.75 6.28 22.74 5.95 22.72C5.54 22.7 5.22 22.34 5.24 21.93C5.26 21.52 5.61 21.22 6.03 21.22C6.33 21.24 6.65 21.24 6.99 21.24H16.99C20.56 21.24 21.24 20.56 21.24 16.99V14.99C21.24 11.48 20.5 10.91 17.95 10.76C17.65 10.74 17.33 10.74 16.99 10.74H7C3.43 10.74 2.75 11.42 2.75 14.99V16.99C2.75 18.73 2.95 19.76 3.41 20.32C3.67 20.64 3.62 21.12 3.29 21.37C2.97 21.63 2.5 21.58 2.24 21.25C1.54 20.4 1.25 19.16 1.25 17V15C1.25 10.59 2.59 9.25 7 9.25H17C17.37 9.25 17.72 9.26 18.04 9.28C22 9.5 22.75 11.46 22.75 15V17C22.75 21.41 21.41 22.75 17 22.75Z"
        fill="currentColor"
      />
      <Path
        d="M6 10.75C5.59 10.75 5.25 10.41 5.25 10V8C5.25 5.1 5.95 1.25 12 1.25C16.07 1.25 18.18 2.58 18.64 5.44C18.71 5.85 18.43 6.23 18.02 6.3C17.61 6.37 17.23 6.09 17.16 5.68C16.91 4.16 16.12 2.75 12 2.75C7.64 2.75 6.75 4.85 6.75 8V10C6.75 10.41 6.41 10.75 6 10.75Z"
        fill="currentColor"
      />
      <Path
        d="M1.99945 22.7499C1.80945 22.7499 1.61945 22.6799 1.46945 22.5299C1.17945 22.2399 1.17945 21.7599 1.46945 21.4699L21.4695 1.46994C21.7595 1.17994 22.2395 1.17994 22.5295 1.46994C22.8195 1.75994 22.8195 2.23994 22.5295 2.52994L2.52945 22.5299C2.37945 22.6799 2.18945 22.7499 1.99945 22.7499Z"
        fill="currentColor"
      />
    </Svg>
  );
};

const LockSlashTwotone = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M10.0195 17.52C10.4795 18.11 11.1995 18.5 11.9995 18.5C13.3795 18.5 14.4995 17.38 14.4995 16C14.4995 15.43 14.3095 14.9 13.9895 14.48"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M2.82 20.8C2.21 20.04 2 18.83 2 17V15C2 11 3 10 7 10H17C17.36 10 17.69 10.01 18 10.03C21.17 10.21 22 11.36 22 15V17C22 21 21 22 17 22H7C6.64 22 6.31 21.99 6 21.97"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        opacity="0.4"
        d="M6 10V8C6 4.69 7 2 12 2C16.15 2 17.54 3.38 17.9 5.56"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M22 2L2 22"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

const variants: IconVariants = {
  bold: LockSlashBold,
  broken: LockSlashBroken,
  bulk: LockSlashBulk,
  linear: LockSlashLinear,
  outline: LockSlashOutline,
  twotone: LockSlashTwotone,
};

export const LockSlashIcon = ({
  variant = "linear",
  className,
  ...props
}: IconProps) => {
  const textClasses = useContext(TextClassContext);
  const Component = variants[variant];
  return <Component className={cn(textClasses, className)} {...props} />;
};
