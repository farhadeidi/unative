import { useContext } from "react";
import { Path, Svg } from "unative/lib/svg";
import { cn } from "unative/lib/utils";
import { TextClassContext } from "unative/ui/text";

import { iconDefaultOptions } from "../icons-configuration";
import type { IconProps, IconVariants } from "../types/icons-type";

const RamBold = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M19.5 9C20.05 9 20.5 8.55 20.5 8V7C20.5 4 18.97 2 15.5 2H8.5C4.97 2 3.5 4 3.5 7V17C3.5 19.3139 4.37827 21.0255 6.39493 21.6836C6.69648 21.782 6.98895 21.5422 6.98783 21.2249L6.98 19C6.98 17.34 8.33 16 9.98 16H13.99C15.63 16 16.98 17.34 16.99 18.98L17.0057 21.227C17.0079 21.5435 17.3017 21.7801 17.6018 21.6794C19.5899 21.0126 20.5 19.3027 20.5 17V15.83C20.5 15.3 20.29 14.79 19.91 14.41L19.09 13.59C18.71 13.21 18.5 12.7 18.5 12.17V10C18.5 9.45 18.95 9 19.5 9ZM13.97 8.53H7.97C7.56 8.53 7.22 8.19 7.22 7.78C7.22 7.37 7.56 7.03 7.97 7.03H13.97C14.38 7.03 14.72 7.37 14.72 7.78C14.72 8.19 14.39 8.53 13.97 8.53Z"
        fill="currentColor"
      />
      <Path
        d="M16.0103 20.97C16.0159 21.5261 15.5666 21.98 15.0104 21.98H8.99374C8.44406 21.98 7.99743 21.5364 7.99376 20.9867L7.98047 19C7.98047 17.9 8.87047 17 9.98047 17H13.9905C15.0905 17 15.9805 17.89 15.9905 18.99L16.0103 20.97Z"
        fill="currentColor"
      />
    </Svg>
  );
};

const RamBroken = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M3.50023 11V17C3.50023 20 4.97023 22 8.50023 22H15.5002C18.9702 22 20.5002 20 20.5002 17V15.83C20.5002 15.3 20.2902 14.79 19.9102 14.42L19.0802 13.59C18.7002 13.21 18.4902 12.71 18.4902 12.18V10C18.4902 9.45 18.9402 9 19.4902 9C20.0402 9 20.4902 8.55 20.4902 8V7C20.4902 4 18.9602 2 15.4902 2H8.49023C4.96023 2 3.49023 4 3.49023 7"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M7.99047 21.97L7.98047 19C7.98047 17.89 8.87047 17 9.98047 17H13.9905C15.0905 17 15.9805 17.89 15.9905 18.99L16.0205 21.98"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M13.9707 7.78003H7.9707"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

const RamBulk = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M18.5 10V12.17C18.5 12.7 18.71 13.21 19.09 13.59L19.91 14.41C20.29 14.79 20.5 15.3 20.5 15.83V17C20.5 19.85 19.12 21.8 16.01 21.98L15.99 18.99C15.98 17.89 15.09 17 13.99 17H9.98C8.87 17 7.98 17.9 7.98 19L7.99 21.98C4.83 21.8 3.5 19.85 3.5 17V7C3.5 4 4.97 2 8.5 2H15.5C18.97 2 20.5 4 20.5 7V8C20.5 8.55 20.05 9 19.5 9C18.95 9 18.5 9.45 18.5 10Z"
        fill="currentColor"
      />
      <Path
        d="M16.0105 21.98C15.8505 21.99 15.6805 22 15.5005 22H8.50047C8.32047 22 8.15047 22 7.99047 21.98L7.98047 19C7.98047 17.9 8.87047 17 9.98047 17H13.9905C15.0905 17 15.9805 17.89 15.9905 18.99L16.0105 21.98Z"
        fill="currentColor"
      />
      <Path
        d="M13.9707 8.53003H7.9707C7.5607 8.53003 7.2207 8.19003 7.2207 7.78003C7.2207 7.37003 7.5607 7.03003 7.9707 7.03003H13.9707C14.3807 7.03003 14.7207 7.37003 14.7207 7.78003C14.7207 8.19003 14.3907 8.53003 13.9707 8.53003Z"
        fill="currentColor"
      />
    </Svg>
  );
};

const RamLinear = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M3.5 7V17C3.5 20 4.97 22 8.5 22H15.5C18.97 22 20.5 20 20.5 17V15.83C20.5 15.3 20.29 14.79 19.91 14.42L19.08 13.59C18.7 13.21 18.49 12.71 18.49 12.18V10C18.49 9.45 18.94 9 19.49 9C20.04 9 20.49 8.55 20.49 8V7C20.49 4 18.96 2 15.49 2H8.49C4.97 2 3.5 4 3.5 7Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M7.98998 21.97L7.97998 19C7.97998 17.89 8.86998 17 9.97998 17H13.99C15.09 17 15.98 17.89 15.99 18.99L16.02 21.98"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M13.97 7.78003H7.96997"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

const RamOutline = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M15.5 22.75H8.5C4.79 22.75 2.75 20.71 2.75 17V7C2.75 3.29 4.79 1.25 8.5 1.25H15.5C19.15 1.25 21.25 3.35 21.25 7V8C21.25 8.96 20.46 9.75 19.5 9.75C19.36 9.75 19.25 9.86 19.25 10V12.17C19.25 12.5 19.38 12.82 19.62 13.05L20.45 13.88C20.97 14.4 21.26 15.09 21.26 15.82V17C21.25 20.65 19.15 22.75 15.5 22.75ZM8.5 2.75C5.64 2.75 4.25 4.14 4.25 7V17C4.25 19.86 5.64 21.25 8.5 21.25H15.5C18.32 21.25 19.75 19.82 19.75 17V15.83C19.75 15.5 19.62 15.18 19.38 14.95L18.55 14.12C18.03 13.6 17.74 12.91 17.74 12.18V10C17.74 9.04 18.53 8.25 19.49 8.25C19.63 8.25 19.74 8.14 19.74 8V7C19.74 4.18 18.31 2.75 15.49 2.75H8.5Z"
        fill="currentColor"
      />
      <Path
        d="M16.0105 22.72C15.6005 22.72 15.2605 22.39 15.2605 21.98L15.2305 18.99C15.2305 18.3 14.6605 17.75 13.9805 17.75H9.98047C9.65047 17.75 9.33047 17.88 9.09047 18.12C8.86047 18.35 8.73047 18.67 8.73047 19L8.74047 21.97C8.74047 22.38 8.41047 22.72 7.99047 22.72C7.58047 22.72 7.24047 22.39 7.24047 21.97L7.23047 19C7.23047 18.26 7.51047 17.57 8.03047 17.05C8.55047 16.53 9.24047 16.24 9.98047 16.24H13.9905C15.5005 16.24 16.7305 17.47 16.7405 18.97L16.7705 21.95C16.7705 22.38 16.4305 22.72 16.0105 22.72C16.0205 22.72 16.0105 22.72 16.0105 22.72Z"
        fill="currentColor"
      />
      <Path
        d="M13.9697 8.53003H7.96973C7.55973 8.53003 7.21973 8.19003 7.21973 7.78003C7.21973 7.37003 7.55973 7.03003 7.96973 7.03003H13.9697C14.3797 7.03003 14.7197 7.37003 14.7197 7.78003C14.7197 8.19003 14.3897 8.53003 13.9697 8.53003Z"
        fill="currentColor"
      />
    </Svg>
  );
};

const RamTwotone = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M3.5 7V17C3.5 20 4.97 22 8.5 22H15.5C18.97 22 20.5 20 20.5 17V15.83C20.5 15.3 20.29 14.79 19.91 14.42L19.08 13.59C18.7 13.21 18.49 12.71 18.49 12.18V10C18.49 9.45 18.94 9 19.49 9C20.04 9 20.49 8.55 20.49 8V7C20.49 4 18.96 2 15.49 2H8.49C4.97 2 3.5 4 3.5 7Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        opacity="0.4"
        d="M7.99047 21.97L7.98047 19C7.98047 17.89 8.87047 17 9.98047 17H13.9905C15.0905 17 15.9805 17.89 15.9905 18.99L16.0205 21.98"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        opacity="0.4"
        d="M13.9697 7.77979H7.96973"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

const variants: IconVariants = {
  bold: RamBold,
  broken: RamBroken,
  bulk: RamBulk,
  linear: RamLinear,
  outline: RamOutline,
  twotone: RamTwotone,
};

export const RamIcon = ({
  variant = iconDefaultOptions.variant,
  className,
  ...props
}: IconProps) => {
  const textClasses = useContext(TextClassContext);
  const Component = variants[variant];
  return <Component className={cn(textClasses, className)} {...props} />;
};
