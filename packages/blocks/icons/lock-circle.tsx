import { useContext } from "react";
import { G, Path, Svg } from "unative/lib/svg";
import { cn } from "unative/lib/utils";
import { TextClassContext } from "unative/ui/text";

import { iconDefaultOptions } from "../icons-configuration";
import type { IconProps, IconVariants } from "../types/icons-type";

const LockCircleBold = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M12 7.75C10.11 7.75 9.75 8.54 9.75 10V10.62H14.25V10C14.25 8.54 13.89 7.75 12 7.75Z"
        fill="currentColor"
      />
      <Path
        d="M11.9984 15.0984C12.606 15.0984 13.0984 14.606 13.0984 13.9984C13.0984 13.3909 12.606 12.8984 11.9984 12.8984C11.3909 12.8984 10.8984 13.3909 10.8984 13.9984C10.8984 14.606 11.3909 15.0984 11.9984 15.0984Z"
        fill="currentColor"
      />
      <Path
        d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM17.38 14.5C17.38 16.7 16.7 17.38 14.5 17.38H9.5C7.3 17.38 6.62 16.7 6.62 14.5V13.5C6.62 11.79 7.03 11 8.25 10.73V10C8.25 9.07 8.25 6.25 12 6.25C15.75 6.25 15.75 9.07 15.75 10V10.73C16.97 11 17.38 11.79 17.38 13.5V14.5Z"
        fill="currentColor"
      />
    </Svg>
  );
};

const LockCircleBroken = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M9 11V10C9 8.34 9.5 7 12 7C14.5 7 15 8.34 15 10V11"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M12.0004 14.6C12.3317 14.6 12.6003 14.3314 12.6003 14C12.6003 13.6687 12.3317 13.4 12.0004 13.4C11.669 13.4 11.4004 13.6687 11.4004 14C11.4004 14.3314 11.669 14.6 12.0004 14.6Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M14.5 17H9.5C7.5 17 7 16.5 7 14.5V13.5C7 11.5 7.5 11 9.5 11H14.5C16.5 11 17 11.5 17 13.5V14.5C17 16.5 16.5 17 14.5 17Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M4 6C2.75 7.67 2 9.75 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2C10.57 2 9.19997 2.30001 7.96997 2.85001"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

const LockCircleBulk = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
        fill="currentColor"
      />
      <Path
        d="M15.7491 10.73V10C15.7491 9.07 15.7491 6.25 11.9991 6.25C8.24915 6.25 8.24915 9.07 8.24915 10V10.73C7.02915 11 6.61914 11.79 6.61914 13.5V14.5C6.61914 16.7 7.29915 17.38 9.49915 17.38H14.4991C16.6991 17.38 17.3792 16.7 17.3792 14.5V13.5C17.3792 11.79 16.9691 11 15.7491 10.73ZM11.9991 15.1C11.3891 15.1 10.8992 14.61 10.8992 14C10.8992 13.39 11.3891 12.9 11.9991 12.9C12.6091 12.9 13.0991 13.39 13.0991 14C13.0991 14.61 12.6091 15.1 11.9991 15.1ZM14.2491 10.62H9.74915V10C9.74915 8.54 10.1091 7.75 11.9991 7.75C13.8891 7.75 14.2491 8.54 14.2491 10V10.62Z"
        fill="currentColor"
      />
    </Svg>
  );
};

const LockCircleLinear = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M9 11V10C9 8.34 9.5 7 12 7C14.5 7 15 8.34 15 10V11"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M12 14.6C12.3314 14.6 12.6 14.3314 12.6 14C12.6 13.6687 12.3314 13.4 12 13.4C11.6686 13.4 11.4 13.6687 11.4 14C11.4 14.3314 11.6686 14.6 12 14.6Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M14.5 17H9.5C7.5 17 7 16.5 7 14.5V13.5C7 11.5 7.5 11 9.5 11H14.5C16.5 11 17 11.5 17 13.5V14.5C17 16.5 16.5 17 14.5 17Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

const LockCircleOutline = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M15 11.75C14.59 11.75 14.25 11.41 14.25 11V10C14.25 8.54 13.89 7.75 12 7.75C10.11 7.75 9.75 8.54 9.75 10V11C9.75 11.41 9.41 11.75 9 11.75C8.59 11.75 8.25 11.41 8.25 11V10C8.25 9.07 8.25 6.25 12 6.25C15.75 6.25 15.75 9.07 15.75 10V11C15.75 11.41 15.41 11.75 15 11.75Z"
        fill="currentColor"
      />
      <Path
        d="M12.0004 15.3499C11.2604 15.3499 10.6504 14.7399 10.6504 13.9999C10.6504 13.2599 11.2604 12.6499 12.0004 12.6499C12.7404 12.6499 13.3503 13.2599 13.3503 13.9999C13.3503 14.7399 12.7404 15.3499 12.0004 15.3499ZM12.0004 13.8499C11.9204 13.8499 11.8503 13.9199 11.8503 13.9999C11.8503 14.1699 12.1504 14.1699 12.1504 13.9999C12.1504 13.9199 12.0804 13.8499 12.0004 13.8499Z"
        fill="currentColor"
      />
      <Path
        d="M14.5 17.75H9.5C7.1 17.75 6.25 16.9 6.25 14.5V13.5C6.25 11.1 7.1 10.25 9.5 10.25H14.5C16.9 10.25 17.75 11.1 17.75 13.5V14.5C17.75 16.9 16.9 17.75 14.5 17.75ZM9.5 11.75C7.91 11.75 7.75 11.91 7.75 13.5V14.5C7.75 16.09 7.91 16.25 9.5 16.25H14.5C16.09 16.25 16.25 16.09 16.25 14.5V13.5C16.25 11.91 16.09 11.75 14.5 11.75H9.5Z"
        fill="currentColor"
      />
      <Path
        d="M12 22.75C6.07 22.75 1.25 17.93 1.25 12C1.25 6.07 6.07 1.25 12 1.25C17.93 1.25 22.75 6.07 22.75 12C22.75 17.93 17.93 22.75 12 22.75ZM12 2.75C6.9 2.75 2.75 6.9 2.75 12C2.75 17.1 6.9 21.25 12 21.25C17.1 21.25 21.25 17.1 21.25 12C21.25 6.9 17.1 2.75 12 2.75Z"
        fill="currentColor"
      />
    </Svg>
  );
};

const LockCircleTwotone = ({ size = 24, className, ...props }: IconProps) => {
  return (
    <Svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      className={cn("text-foreground", className)}
      {...props}
    >
      <G opacity="0.4">
        <Path
          d="M9 11V10C9 8.34 9.5 7 12 7C14.5 7 15 8.34 15 10V11"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <Path
          d="M12.0004 14.5999C12.3317 14.5999 12.6003 14.3313 12.6003 13.9999C12.6003 13.6685 12.3317 13.3999 12.0004 13.3999C11.669 13.3999 11.4004 13.6685 11.4004 13.9999C11.4004 14.3313 11.669 14.5999 12.0004 14.5999Z"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <Path
          d="M14.5 17H9.5C7.5 17 7 16.5 7 14.5V13.5C7 11.5 7.5 11 9.5 11H14.5C16.5 11 17 11.5 17 13.5V14.5C17 16.5 16.5 17 14.5 17Z"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </G>
      <Path
        d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

const variants: IconVariants = {
  bold: LockCircleBold,
  broken: LockCircleBroken,
  bulk: LockCircleBulk,
  linear: LockCircleLinear,
  outline: LockCircleOutline,
  twotone: LockCircleTwotone,
};

export const LockCircleIcon = ({
  variant = iconDefaultOptions.variant,
  className,
  ...props
}: IconProps) => {
  const textClasses = useContext(TextClassContext);
  const Component = variants[variant];
  return <Component className={cn(textClasses, className)} {...props} />;
};
