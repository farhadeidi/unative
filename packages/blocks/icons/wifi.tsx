import { useContext } from "react";
import { Path, Svg } from "unative/lib/svg";
import { cn } from "unative/lib/utils";
import { TextClassContext } from "unative/ui/text";

import { iconDefaultOptions } from "../icons-configuration";
import type { IconProps, IconVariants } from "../types/icons-type";

const WifiBold = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M19.0909 12.5884C18.9309 12.5884 18.7709 12.5384 18.6309 12.4284C14.6009 9.31844 9.39091 9.31844 5.36091 12.4284C5.03091 12.6784 4.56091 12.6184 4.31091 12.2984C4.06091 11.9684 4.12091 11.4984 4.44091 11.2484C9.03091 7.69844 14.9609 7.69844 19.5409 11.2484C19.8709 11.4984 19.9309 11.9684 19.6709 12.2984C19.5409 12.4884 19.3209 12.5884 19.0909 12.5884Z"
        fill="currentColor"
      />
      <Path
        d="M22 9.10844C21.84 9.10844 21.68 9.05844 21.54 8.94844C15.74 4.46844 8.25001 4.46844 2.46001 8.94844C2.13001 9.19844 1.66001 9.13844 1.41001 8.81844C1.15001 8.49844 1.21001 8.01844 1.54001 7.76844C7.89001 2.85844 16.1 2.85844 22.46 7.76844C22.79 8.01844 22.85 8.48844 22.59 8.81844C22.45 9.00844 22.22 9.10844 22 9.10844Z"
        fill="currentColor"
      />
      <Path
        d="M17.2096 16.2413C17.0496 16.2413 16.8896 16.1913 16.7496 16.0813C13.8696 13.8513 10.1396 13.8513 7.24958 16.0813C6.91958 16.3313 6.44958 16.2713 6.19958 15.9513C5.94958 15.6213 6.00958 15.1513 6.32958 14.9013C9.76958 12.2413 14.2196 12.2413 17.6596 14.9013C17.9896 15.1513 18.0496 15.6213 17.7896 15.9513C17.6496 16.1413 17.4296 16.2413 17.2096 16.2413Z"
        fill="currentColor"
      />
      <Path
        d="M14.5992 19.9005C14.4392 19.9005 14.2792 19.8505 14.1392 19.7405C12.8392 18.7305 11.1492 18.7305 9.84919 19.7405C9.51919 19.9905 9.04919 19.9305 8.79919 19.6105C8.54919 19.2805 8.60919 18.8105 8.92919 18.5605C10.7892 17.1205 13.1892 17.1205 15.0492 18.5605C15.3792 18.8105 15.4392 19.2805 15.1792 19.6105C15.0492 19.7905 14.8292 19.9005 14.5992 19.9005Z"
        fill="currentColor"
      />
    </Svg>
  );
};

const WifiBroken = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M16.3105 10.21C17.2805 10.61 18.2105 11.15 19.0905 11.83"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M4.91016 11.8399C7.35016 9.94991 10.2101 9.1399 13.0101 9.3999"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M8.35938 5.28001C12.9894 4.18001 17.9094 5.2 21.9994 8.36"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M2 8.36002C2.94 7.64002 3.91999 7.02002 4.92999 6.52002"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M6.78906 15.4902C9.93906 13.0502 14.0491 13.0502 17.1991 15.4902"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M9.40039 19.1501C10.9804 17.9301 13.0304 17.9301 14.6104 19.1501"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

const WifiBulk = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M19.0909 12.5899C18.9309 12.5899 18.7709 12.5399 18.6309 12.4299C14.6009 9.3199 9.39091 9.3199 5.36091 12.4299C5.03091 12.6799 4.56091 12.6199 4.31091 12.2999C4.06091 11.9699 4.12091 11.4999 4.44091 11.2499C9.03091 7.6999 14.9609 7.6999 19.5409 11.2499C19.8709 11.4999 19.9309 11.9699 19.6709 12.2999C19.5409 12.4899 19.3209 12.5899 19.0909 12.5899Z"
        fill="currentColor"
      />
      <Path
        d="M22.0005 9.1099C21.8405 9.1099 21.6805 9.0599 21.5405 8.94989C15.7405 4.46989 8.25052 4.46989 2.46053 8.94989C2.13053 9.19989 1.66052 9.13991 1.41052 8.81991C1.16052 8.48991 1.22051 8.0199 1.54051 7.7699C7.89051 2.8599 16.1005 2.8599 22.4605 7.7699C22.7905 8.0199 22.8505 8.48991 22.5905 8.81991C22.4505 9.00991 22.2205 9.1099 22.0005 9.1099Z"
        fill="currentColor"
      />
      <Path
        d="M17.2096 16.24C17.0496 16.24 16.8896 16.19 16.7496 16.08C13.8696 13.85 10.1396 13.85 7.24958 16.08C6.91958 16.33 6.44958 16.27 6.19958 15.95C5.94958 15.62 6.00958 15.15 6.32958 14.9C9.76958 12.24 14.2196 12.24 17.6596 14.9C17.9896 15.15 18.0496 15.62 17.7896 15.95C17.6496 16.14 17.4296 16.24 17.2096 16.24Z"
        fill="currentColor"
      />
      <Path
        opacity="0.4"
        d="M14.5992 19.9C14.4392 19.9 14.2792 19.85 14.1392 19.74C12.8392 18.73 11.1492 18.73 9.8492 19.74C9.5192 19.99 9.04919 19.93 8.79919 19.61C8.54919 19.28 8.60918 18.81 8.92918 18.56C10.7892 17.12 13.1892 17.12 15.0492 18.56C15.3792 18.81 15.4392 19.28 15.1792 19.61C15.0492 19.79 14.8292 19.9 14.5992 19.9Z"
        fill="currentColor"
      />
    </Svg>
  );
};

const WifiLinear = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M4.91003 11.84C9.21003 8.51998 14.8 8.51998 19.1 11.84"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M2 8.35998C8.06 3.67998 15.94 3.67998 22 8.35998"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M6.79004 15.49C9.94004 13.05 14.05 13.05 17.2 15.49"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M9.40002 19.15C10.98 17.93 13.03 17.93 14.61 19.15"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

const WifiOutline = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M19.0909 12.5899C18.9309 12.5899 18.7709 12.5399 18.6309 12.4299C14.6009 9.3199 9.39091 9.3199 5.36091 12.4299C5.03091 12.6799 4.56091 12.6199 4.31091 12.2999C4.06091 11.9699 4.12091 11.4999 4.44091 11.2499C9.03091 7.6999 14.9609 7.6999 19.5409 11.2499C19.8709 11.4999 19.9309 11.9699 19.6709 12.2999C19.5409 12.4899 19.3209 12.5899 19.0909 12.5899Z"
        fill="currentColor"
      />
      <Path
        d="M22.0005 9.1099C21.8405 9.1099 21.6805 9.05993 21.5405 8.94993C15.7405 4.46993 8.25052 4.46993 2.46053 8.94993C2.13053 9.19993 1.66052 9.13992 1.41052 8.81992C1.16052 8.48992 1.22051 8.0199 1.54051 7.7699C7.89051 2.8599 16.1005 2.8599 22.4605 7.7699C22.7905 8.0199 22.8505 8.48992 22.5905 8.81992C22.4505 9.00992 22.2205 9.1099 22.0005 9.1099Z"
        fill="currentColor"
      />
      <Path
        d="M17.2096 16.24C17.0496 16.24 16.8896 16.19 16.7496 16.08C13.8696 13.85 10.1396 13.85 7.24958 16.08C6.91958 16.33 6.44958 16.27 6.19958 15.95C5.94958 15.62 6.00958 15.15 6.32958 14.9C9.76958 12.24 14.2196 12.24 17.6596 14.9C17.9896 15.15 18.0496 15.62 17.7896 15.95C17.6496 16.14 17.4296 16.24 17.2096 16.24Z"
        fill="currentColor"
      />
      <Path
        d="M14.5992 19.9C14.4392 19.9 14.2792 19.85 14.1392 19.74C12.8392 18.73 11.1492 18.73 9.8492 19.74C9.5192 19.99 9.04919 19.93 8.79919 19.61C8.54919 19.28 8.60918 18.81 8.92918 18.56C10.7892 17.12 13.1892 17.12 15.0492 18.56C15.3792 18.81 15.4392 19.28 15.1792 19.61C15.0492 19.79 14.8292 19.9 14.5992 19.9Z"
        fill="currentColor"
      />
    </Svg>
  );
};

const WifiTwotone = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M4.91016 11.8401C9.21016 8.5201 14.8002 8.5201 19.1002 11.8401"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M2 8.3601C8.06 3.6801 15.94 3.6801 22 8.3601"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M6.78906 15.4902C9.93906 13.0502 14.0491 13.0502 17.1991 15.4902"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        opacity="0.4"
        d="M9.40039 19.1499C10.9804 17.9299 13.0304 17.9299 14.6104 19.1499"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

const variants: IconVariants = {
  bold: WifiBold,
  broken: WifiBroken,
  bulk: WifiBulk,
  linear: WifiLinear,
  outline: WifiOutline,
  twotone: WifiTwotone,
};

export const WifiIcon = ({
  variant = iconDefaultOptions.variant,
  className,
  ...props
}: IconProps) => {
  const textClasses = useContext(TextClassContext);
  const Component = variants[variant];
  return <Component className={cn(textClasses, className)} {...props} />;
};
