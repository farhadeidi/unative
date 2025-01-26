import { useContext } from "react";
import { Path, Svg } from "unative/lib/svg";
import { cn } from "unative/lib/utils";
import { TextClassContext } from "unative/ui/text";

import { iconDefaultOptions } from "../icons-configuration";
import type { IconProps, IconVariants } from "../types/icons-type";

const SizeBold = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M21.9707 5.5V9.5C21.9707 11.2615 20.6712 12.7232 18.9692 12.9649C18.6958 13.0038 18.4707 12.7761 18.4707 12.5V12.25C18.4707 8.53 15.4507 5.5 11.7207 5.5H11.4707C11.1946 5.5 10.9669 5.27486 11.0061 5.0015C11.2488 3.30678 12.7099 2 14.4707 2H18.4707C20.4107 2 21.9707 3.57 21.9707 5.5Z"
        fill="currentColor"
      />
      <Path
        d="M11.7207 7H10.9707H6.9707C4.2107 7 1.9707 9.24 1.9707 12V17C1.9707 19.76 4.2107 22 6.9707 22H11.9707C14.7307 22 16.9707 19.76 16.9707 17V13V12.25C16.9707 9.35 14.6207 7 11.7207 7Z"
        fill="currentColor"
      />
    </Svg>
  );
};

const SizeBroken = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M21.9707 5.85V9.15C21.9707 11.9 20.8707 13 18.1207 13H16.9707V12.25C16.9707 8.5 15.4707 7 11.7207 7H10.9707V5.85C10.9707 3.1 12.0707 2 14.8207 2H18.1207C20.8707 2 21.9707 3.1 21.9707 5.85Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M1.9707 12.25C1.9707 8.5 3.4707 7 7.2207 7H11.7207C15.4707 7 16.9707 8.5 16.9707 12.25V16.75C16.9707 20.5 15.4707 22 11.7207 22H7.2207C3.4707 22 1.9707 20.5 1.9707 16.75V16.01"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

const SizeBulk = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M21.9707 5.5V9.5C21.9707 11.43 20.4007 13 18.4707 13H16.9707V12.25C16.9707 9.35 14.6207 7 11.7207 7H10.9707V5.5C10.9707 3.57 12.5407 2 14.4707 2H18.4707C20.4107 2 21.9707 3.57 21.9707 5.5Z"
        fill="currentColor"
      />
      <Path
        opacity="0.4"
        d="M11.7207 7H10.9707H6.9707C4.2107 7 1.9707 9.24 1.9707 12V17C1.9707 19.76 4.2107 22 6.9707 22H11.9707C14.7307 22 16.9707 19.76 16.9707 17V13V12.25C16.9707 9.35 14.6207 7 11.7207 7Z"
        fill="currentColor"
      />
    </Svg>
  );
};

const SizeLinear = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M16.97 12.25V16.75C16.97 20.5 15.47 22 11.72 22H7.22C3.47 22 1.97 20.5 1.97 16.75V12.25C1.97 8.5 3.47 7 7.22 7H11.72C15.47 7 16.97 8.5 16.97 12.25Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M21.97 5.85V9.15C21.97 11.9 20.87 13 18.12 13H16.97V12.25C16.97 8.5 15.47 7 11.72 7H10.97V5.85C10.97 3.1 12.07 2 14.82 2H18.12C20.87 2 21.97 3.1 21.97 5.85Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

const SizeOutline = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M11.7207 22.75H7.2207C3.0707 22.75 1.2207 20.9 1.2207 16.75V12.25C1.2207 8.1 3.0707 6.25 7.2207 6.25H11.7207C15.8707 6.25 17.7207 8.1 17.7207 12.25V16.75C17.7207 20.9 15.8707 22.75 11.7207 22.75ZM7.2207 7.75C3.9007 7.75 2.7207 8.93 2.7207 12.25V16.75C2.7207 20.07 3.9007 21.25 7.2207 21.25H11.7207C15.0407 21.25 16.2207 20.07 16.2207 16.75V12.25C16.2207 8.93 15.0407 7.75 11.7207 7.75H7.2207Z"
        fill="currentColor"
      />
      <Path
        d="M18.1207 13.75H16.9707C16.5607 13.75 16.2207 13.41 16.2207 13V12.25C16.2207 8.93 15.0407 7.75 11.7207 7.75H10.9707C10.5607 7.75 10.2207 7.41 10.2207 7V5.85C10.2207 2.67 11.6407 1.25 14.8207 1.25H18.1207C21.3007 1.25 22.7207 2.67 22.7207 5.85V9.15C22.7207 12.33 21.3007 13.75 18.1207 13.75ZM17.7207 12.25H18.1207C20.4707 12.25 21.2207 11.5 21.2207 9.15V5.85C21.2207 3.5 20.4707 2.75 18.1207 2.75H14.8207C12.4707 2.75 11.7207 3.5 11.7207 5.85V6.25C15.8707 6.25 17.7207 8.1 17.7207 12.25Z"
        fill="currentColor"
      />
    </Svg>
  );
};

const SizeTwotone = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M16.9707 12.25V16.75C16.9707 20.5 15.4707 22 11.7207 22H7.2207C3.4707 22 1.9707 20.5 1.9707 16.75V12.25C1.9707 8.5 3.4707 7 7.2207 7H11.7207C15.4707 7 16.9707 8.5 16.9707 12.25Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        opacity="0.4"
        d="M21.9707 5.85V9.15C21.9707 11.9 20.8707 13 18.1207 13H16.9707V12.25C16.9707 8.5 15.4707 7 11.7207 7H10.9707V5.85C10.9707 3.1 12.0707 2 14.8207 2H18.1207C20.8707 2 21.9707 3.1 21.9707 5.85Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

const variants: IconVariants = {
  bold: SizeBold,
  broken: SizeBroken,
  bulk: SizeBulk,
  linear: SizeLinear,
  outline: SizeOutline,
  twotone: SizeTwotone,
};

export const SizeIcon = ({
  variant = iconDefaultOptions.variant,
  className,
  ...props
}: IconProps) => {
  const textClasses = useContext(TextClassContext);
  const Component = variants[variant];
  return <Component className={cn(textClasses, className)} {...props} />;
};
