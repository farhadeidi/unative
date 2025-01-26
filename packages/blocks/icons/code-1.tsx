import { Path, Svg } from "unative/lib/svg";
import { cn } from "unative/lib/utils";

import type { IconProps, IconVariants } from "../types/icons-type";

const Code1Bold = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M16.19 2H7.81C4.17 2 2 4.17 2 7.81V16.18C2 19.83 4.17 22 7.81 22H16.18C19.82 22 21.99 19.83 21.99 16.19V7.81C22 4.17 19.83 2 16.19 2ZM9.94 13.27C9.26 14.29 8.32 15.12 7.22 15.67C7.12 15.72 7 15.75 6.89 15.75C6.61 15.75 6.35 15.6 6.22 15.34C6.03 14.97 6.18 14.52 6.56 14.33C7.43 13.9 8.17 13.24 8.7 12.44C8.88 12.17 8.88 11.83 8.7 11.56C8.16 10.76 7.42 10.1 6.56 9.67C6.18 9.49 6.03 9.04 6.22 8.66C6.4 8.29 6.85 8.14 7.22 8.33C8.32 8.88 9.26 9.71 9.94 10.73C10.46 11.5 10.46 12.5 9.94 13.27ZM17 15.75H13C12.59 15.75 12.25 15.41 12.25 15C12.25 14.59 12.59 14.25 13 14.25H17C17.41 14.25 17.75 14.59 17.75 15C17.75 15.41 17.41 15.75 17 15.75Z"
        fill="currentColor"
      />
    </Svg>
  );
};

const Code1Broken = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M6.89062 9C7.87063 9.49 8.71062 10.23 9.32062 11.15C9.67062 11.67 9.67062 12.34 9.32062 12.86C8.71062 13.77 7.87063 14.51 6.89062 15"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M2 13.04V15C2 20 4 22 9 22H15C20 22 22 20 22 15V9C22 4 20 2 15 2H9C4 2 2 4 2 9"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M13 15H17"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

const Code1Bulk = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M22 8V16.19C22 19.83 19.83 22 16.19 22H7.81C4.17 22 2 19.83 2 16.19V8.01L22 8Z"
        fill="currentColor"
      />
      <Path
        d="M9.00094 17.7499C8.89094 17.7499 8.77094 17.7199 8.67094 17.6699C7.90094 17.2799 7.24094 16.6999 6.76094 15.9799C6.36094 15.3799 6.36094 14.6099 6.76094 14.0099C7.24094 13.2899 7.90094 12.7099 8.67094 12.3299C9.04094 12.1399 9.49094 12.2999 9.68094 12.6699C9.87094 13.0399 9.72094 13.4899 9.34094 13.6799C8.80094 13.9499 8.34094 14.3599 8.01094 14.8599C7.95094 14.9499 7.95094 15.0699 8.01094 15.1699C8.34094 15.6699 8.80094 16.0799 9.34094 16.3499C9.71094 16.5399 9.86094 16.9899 9.68094 17.3599C9.54094 17.5999 9.27094 17.7499 9.00094 17.7499Z"
        fill="currentColor"
      />
      <Path
        d="M15.2092 17.7499C14.9292 17.7499 14.6692 17.5999 14.5392 17.3399C14.3492 16.9699 14.4992 16.5199 14.8792 16.3299C15.4192 16.0599 15.8792 15.6499 16.2092 15.1499C16.2692 15.0599 16.2692 14.9399 16.2092 14.8399C15.8792 14.3399 15.4192 13.9299 14.8792 13.6599C14.5092 13.4699 14.3592 13.0199 14.5392 12.6499C14.7292 12.2799 15.1792 12.1299 15.5492 12.3099C16.3192 12.6999 16.9792 13.2799 17.4592 13.9999C17.8592 14.5999 17.8592 15.3699 17.4592 15.9699C16.9792 16.6899 16.3192 17.2699 15.5492 17.6499C15.4292 17.7199 15.3192 17.7499 15.2092 17.7499Z"
        fill="currentColor"
      />
      <Path
        d="M22 7.81V8L2 8.01V7.81C2 4.17 4.17 2 7.81 2H16.19C19.83 2 22 4.17 22 7.81Z"
        fill="currentColor"
      />
    </Svg>
  );
};

const Code1Linear = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M6.89001 9C7.87001 9.49 8.71001 10.23 9.32001 11.15C9.67001 11.67 9.67001 12.34 9.32001 12.86C8.71001 13.77 7.87001 14.51 6.89001 15"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M13 15H17"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M9 22H15C20 22 22 20 22 15V9C22 4 20 2 15 2H9C4 2 2 4 2 9V15C2 20 4 22 9 22Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

const Code1Outline = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M9.00094 17.7499C8.89094 17.7499 8.77094 17.7199 8.67094 17.6699C7.90094 17.2799 7.24094 16.6999 6.76094 15.9799C6.36094 15.3799 6.36094 14.6099 6.76094 14.0099C7.24094 13.2899 7.90094 12.7099 8.67094 12.3299C9.04094 12.1399 9.49094 12.2999 9.68094 12.6699C9.87094 13.0399 9.72094 13.4899 9.34094 13.6799C8.80094 13.9499 8.34094 14.3599 8.01094 14.8599C7.95094 14.9499 7.95094 15.0699 8.01094 15.1699C8.34094 15.6699 8.80094 16.0799 9.34094 16.3499C9.71094 16.5399 9.86094 16.9899 9.68094 17.3599C9.54094 17.5999 9.27094 17.7499 9.00094 17.7499Z"
        fill="currentColor"
      />
      <Path
        d="M15.2092 17.7499C14.9292 17.7499 14.6692 17.5999 14.5392 17.3399C14.3492 16.9699 14.4992 16.5199 14.8792 16.3299C15.4192 16.0599 15.8792 15.6499 16.2092 15.1499C16.2692 15.0599 16.2692 14.9399 16.2092 14.8399C15.8792 14.3399 15.4192 13.9299 14.8792 13.6599C14.5092 13.4699 14.3592 13.0199 14.5392 12.6499C14.7292 12.2799 15.1792 12.1299 15.5492 12.3099C16.3192 12.6999 16.9792 13.2799 17.4592 13.9999C17.8592 14.5999 17.8592 15.3699 17.4592 15.9699C16.9792 16.6899 16.3192 17.2699 15.5492 17.6499C15.4292 17.7199 15.3192 17.7499 15.2092 17.7499Z"
        fill="currentColor"
      />
      <Path
        d="M15 22.75H9C3.57 22.75 1.25 20.43 1.25 15V9C1.25 3.57 3.57 1.25 9 1.25H15C20.43 1.25 22.75 3.57 22.75 9V15C22.75 20.43 20.43 22.75 15 22.75ZM9 2.75C4.39 2.75 2.75 4.39 2.75 9V15C2.75 19.61 4.39 21.25 9 21.25H15C19.61 21.25 21.25 19.61 21.25 15V9C21.25 4.39 19.61 2.75 15 2.75H9Z"
        fill="currentColor"
      />
      <Path
        d="M2.23047 8.76C1.82047 8.76 1.48047 8.42 1.48047 8.01C1.48047 7.6 1.81047 7.26 2.23047 7.26L21.4505 7.25C21.8605 7.25 22.2005 7.59 22.2005 8C22.2005 8.41 21.8705 8.75 21.4505 8.75L2.23047 8.76Z"
        fill="currentColor"
      />
    </Svg>
  );
};

const Code1Twotone = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M6.89062 9C7.87063 9.49 8.71062 10.23 9.32062 11.15C9.67062 11.67 9.67062 12.34 9.32062 12.86C8.71062 13.77 7.87063 14.51 6.89062 15"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        opacity="0.4"
        d="M13 15H17"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M9 22H15C20 22 22 20 22 15V9C22 4 20 2 15 2H9C4 2 2 4 2 9V15C2 20 4 22 9 22Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

const variants: IconVariants = {
  bold: Code1Bold,
  broken: Code1Broken,
  bulk: Code1Bulk,
  linear: Code1Linear,
  outline: Code1Outline,
  twotone: Code1Twotone,
};

export const Code1Icon = ({ variant = "linear", ...props }: IconProps) => {
  const Component = variants[variant];
  return <Component {...props} />;
};
