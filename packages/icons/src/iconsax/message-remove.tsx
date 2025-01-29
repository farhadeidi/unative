import { useContext } from "react";
import { cn } from "unative/lib/utils";
import { Path, Svg } from "unative/ui/svg";
import { TextClassContext } from "unative/ui/text";

import type { IconProps, IconVariants } from "../icon-options";
import { defaultOptions } from "../icon-options";

const MessageRemoveBold = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M7.97 14.83C7.25 14.01 6.18 13.5 5 13.5C2.79 13.5 1 15.29 1 17.5C1 18.25 1.21 18.96 1.58 19.56C1.78 19.9 2.04 20.21 2.34 20.47C3.04 21.11 3.97 21.5 5 21.5C6.46 21.5 7.73 20.72 8.42 19.56C8.79 18.96 9 18.25 9 17.5C9 16.48 8.61 15.54 7.97 14.83ZM6.6 19.08C6.45 19.23 6.26 19.3 6.07 19.3C5.88 19.3 5.69 19.23 5.54 19.08L5.01 18.55L4.46 19.1C4.31 19.25 4.12 19.32 3.93 19.32C3.74 19.32 3.55 19.25 3.4 19.1C3.11 18.81 3.11 18.33 3.4 18.04L3.95 17.49L3.42 16.96C3.13 16.67 3.13 16.19 3.42 15.9C3.71 15.61 4.19 15.61 4.48 15.9L5.01 16.43L5.51 15.93C5.8 15.64 6.28 15.64 6.57 15.93C6.86 16.22 6.86 16.7 6.57 16.99L6.07 17.49L6.6 18.02C6.89 18.31 6.89 18.78 6.6 19.08Z"
        fill="currentColor"
      />
      <Path
        d="M17.25 2.42969H7.75C4.9 2.42969 3 4.32969 3 7.17969V11.6397C3 11.9897 3.36 12.2397 3.7 12.1497C4.12 12.0497 4.55 11.9997 5 11.9997C7.86 11.9997 10.22 14.3197 10.48 17.1297C10.5 17.4097 10.73 17.6297 11 17.6297H11.55L15.78 20.4497C16.4 20.8697 17.25 20.4097 17.25 19.6497V17.6297C18.67 17.6297 19.86 17.1497 20.69 16.3297C21.52 15.4897 22 14.2997 22 12.8797V7.17969C22 4.32969 20.1 2.42969 17.25 2.42969ZM15.83 10.8097H9.17C8.78 10.8097 8.46 10.4897 8.46 10.0997C8.46 9.69969 8.78 9.37969 9.17 9.37969H15.83C16.22 9.37969 16.54 9.69969 16.54 10.0997C16.54 10.4897 16.22 10.8097 15.83 10.8097Z"
        fill="currentColor"
      />
    </Svg>
  );
};

const MessageRemoveBroken = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M9 17.5C9 17.82 8.96 18.13 8.88 18.43C8.79 18.83 8.63001 19.22 8.42001 19.56C7.73001 20.72 6.46 21.5 5 21.5C3.97 21.5 3.04 21.11 2.34 20.47C2.04 20.21 1.77999 19.9 1.57999 19.56C1.20999 18.96 1 18.25 1 17.5C1 16.42 1.43 15.43 2.13 14.71C2.86 13.96 3.88 13.5 5 13.5C6.18 13.5 7.25 14.01 7.97 14.83C8.61 15.54 9 16.48 9 17.5Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M6.06921 18.5399L3.94922 16.4299"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M6.04968 16.46L3.92969 18.5699"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M8.5 10.5H15.5"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M22 11.5399V13.4299C22 14.9299 21.5 16.1799 20.62 17.0599C19.75 17.9299 18.5 18.4299 17 18.4299V20.5599C17 21.3599 16.11 21.84 15.45 21.4L11 18.4299H8.88C8.96 18.1299 9 17.8199 9 17.4999C9 16.4799 8.61 15.54 7.97 14.83C7.25 14.01 6.18 13.4999 5 13.4999C3.88 13.4999 2.86 13.96 2.13 14.71C2.04 14.31 2 13.8799 2 13.4299V7.42993C2 4.42993 4 2.42993 7 2.42993H17C20 2.42993 22 4.42993 22 7.42993"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

const MessageRemoveBulk = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M22 7.43018V13.4302C22 14.9302 21.5 16.1802 20.62 17.0602C19.75 17.9302 18.5 18.4302 17 18.4302V20.5602C17 21.3602 16.11 21.8402 15.45 21.4002L11 18.4302H8.88C8.96 18.1302 9 17.8202 9 17.5002C9 16.4802 8.61 15.5402 7.97 14.8302C7.25 14.0102 6.18 13.5002 5 13.5002C3.88 13.5002 2.86 13.9602 2.13 14.7102C2.04 14.3102 2 13.8802 2 13.4302V7.43018C2 4.43018 4 2.43018 7 2.43018H17C20 2.43018 22 4.43018 22 7.43018Z"
        fill="currentColor"
      />
      <Path
        d="M15.5 11.25H8.5C8.09 11.25 7.75 10.91 7.75 10.5C7.75 10.09 8.09 9.75 8.5 9.75H15.5C15.91 9.75 16.25 10.09 16.25 10.5C16.25 10.91 15.91 11.25 15.5 11.25Z"
        fill="currentColor"
      />
      <Path
        d="M7.97 14.83C7.25 14.01 6.18 13.5 5 13.5C2.79 13.5 1 15.29 1 17.5C1 18.25 1.20999 18.96 1.57999 19.56C1.77999 19.9 2.04 20.21 2.34 20.47C3.04 21.11 3.97 21.5 5 21.5C6.46 21.5 7.73001 20.72 8.42001 19.56C8.79001 18.96 9 18.25 9 17.5C9 16.48 8.61 15.54 7.97 14.83ZM6.60001 19.08C6.45001 19.23 6.26001 19.3 6.07001 19.3C5.88001 19.3 5.69001 19.23 5.54001 19.08L5.01001 18.55L4.45999 19.1C4.30999 19.25 4.11999 19.32 3.92999 19.32C3.73999 19.32 3.54999 19.25 3.39999 19.1C3.10999 18.81 3.10999 18.33 3.39999 18.04L3.95001 17.49L3.42001 16.96C3.13001 16.67 3.13001 16.19 3.42001 15.9C3.71001 15.61 4.19001 15.61 4.48001 15.9L5.01001 16.43L5.51001 15.93C5.80001 15.64 6.28001 15.64 6.57001 15.93C6.86001 16.22 6.86001 16.7 6.57001 16.99L6.07001 17.49L6.60001 18.02C6.89001 18.31 6.89001 18.78 6.60001 19.08Z"
        fill="currentColor"
      />
    </Svg>
  );
};

const MessageRemoveLinear = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M22 7.42993V13.4299C22 14.9299 21.5 16.1799 20.62 17.0599C19.75 17.9299 18.5 18.4299 17 18.4299V20.5599C17 21.3599 16.11 21.84 15.45 21.4L11 18.4299H8.88C8.96 18.1299 9 17.8199 9 17.4999C9 16.4799 8.61 15.54 7.97 14.83C7.25 14.01 6.18 13.4999 5 13.4999C3.88 13.4999 2.86 13.96 2.13 14.71C2.04 14.31 2 13.8799 2 13.4299V7.42993C2 4.42993 4 2.42993 7 2.42993H17C20 2.42993 22 4.42993 22 7.42993Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M9 17.5C9 17.82 8.96 18.13 8.88 18.43C8.79 18.83 8.63001 19.22 8.42001 19.56C7.73001 20.72 6.46 21.5 5 21.5C3.97 21.5 3.04 21.11 2.34 20.47C2.04 20.21 1.77999 19.9 1.57999 19.56C1.20999 18.96 1 18.25 1 17.5C1 16.42 1.43 15.43 2.13 14.71C2.86 13.96 3.88 13.5 5 13.5C6.18 13.5 7.25 14.01 7.97 14.83C8.61 15.54 9 16.48 9 17.5Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M6.06995 18.5399L3.94995 16.4299"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M6.04993 16.46L3.92993 18.5699"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M8.5 10.5H15.5"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

const MessageRemoveOutline = ({
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
        d="M15.9998 22.3199C15.6598 22.3199 15.3298 22.22 15.0398 22.03L10.7798 19.1899H8.88977C8.65977 19.1899 8.43974 19.08 8.29974 18.9C8.15974 18.71 8.10977 18.4699 8.16977 18.2499C8.22977 18.0099 8.25977 17.7699 8.25977 17.5099C8.25977 16.7099 7.95977 15.94 7.41977 15.34C6.80977 14.65 5.93977 14.2599 5.00977 14.2599C4.11977 14.2599 3.28975 14.6099 2.67975 15.2399C2.48975 15.4399 2.19976 15.5199 1.93976 15.4399C1.67976 15.3599 1.46976 15.1499 1.40976 14.8799C1.30976 14.4399 1.25977 13.9599 1.25977 13.4399V7.43994C1.25977 3.99994 3.56977 1.68994 7.00977 1.68994H17.0098C20.4498 1.68994 22.7598 3.99994 22.7598 7.43994V13.4399C22.7598 15.1099 22.2098 16.5499 21.1598 17.5999C20.2798 18.4799 19.1098 19.01 17.7598 19.15V20.5699C17.7598 21.2199 17.3997 21.8099 16.8297 22.1199C16.5597 22.2499 16.2798 22.3199 15.9998 22.3199ZM9.74976 17.6799H10.9998C11.1498 17.6799 11.2898 17.7199 11.4198 17.8099L15.8698 20.78C15.9698 20.85 16.0698 20.8199 16.1198 20.7899C16.1698 20.7599 16.2598 20.6999 16.2598 20.5599V18.4299C16.2598 18.0199 16.5998 17.6799 17.0098 17.6799C18.2798 17.6799 19.3498 17.28 20.0998 16.53C20.8598 15.77 21.2598 14.6999 21.2598 13.4299V7.42993C21.2598 4.84993 19.5898 3.17993 17.0098 3.17993H7.00977C4.42977 3.17993 2.75977 4.84993 2.75977 7.42993V13.3099C3.43977 12.9399 4.20977 12.7499 5.00977 12.7499C6.36977 12.7499 7.65976 13.33 8.53976 14.33C9.31976 15.2 9.75977 16.3299 9.75977 17.4999C9.74977 17.5599 9.74976 17.6199 9.74976 17.6799Z"
        fill="currentColor"
      />
      <Path
        d="M5 22.25C3.82 22.25 2.69999 21.81 1.82999 21.02C1.47999 20.72 1.16999 20.35 0.929993 19.94C0.489993 19.22 0.25 18.37 0.25 17.5C0.25 16.25 0.729996 15.08 1.59 14.19C2.49 13.26 3.7 12.75 5 12.75C6.36 12.75 7.65 13.33 8.53 14.33C9.31 15.2 9.75 16.33 9.75 17.5C9.75 17.88 9.70001 18.26 9.60001 18.62C9.50001 19.07 9.30999 19.54 9.04999 19.95C8.21999 21.37 6.66 22.25 5 22.25ZM5 14.25C4.11 14.25 3.28001 14.6 2.67001 15.23C2.08001 15.84 1.75 16.64 1.75 17.5C1.75 18.09 1.91 18.67 2.22 19.17C2.38 19.45 2.58999 19.7 2.82999 19.91C3.42999 20.46 4.2 20.76 5 20.76C6.15 20.76 7.19 20.17 7.78 19.19C7.96 18.91 8.07999 18.6 8.14999 18.28C8.21999 18.02 8.25 17.77 8.25 17.51C8.25 16.71 7.95 15.94 7.41 15.34C6.81 14.64 5.93 14.25 5 14.25Z"
        fill="currentColor"
      />
      <Path
        d="M6.07041 19.2901C5.88041 19.2901 5.69041 19.2201 5.54041 19.0701L3.43039 16.9601C3.14039 16.6701 3.14039 16.1901 3.43039 15.9001C3.72039 15.6101 4.20039 15.6101 4.49039 15.9001L6.6004 18.0101C6.8904 18.3001 6.8904 18.7801 6.6004 19.0701C6.4504 19.2201 6.26041 19.2901 6.07041 19.2901Z"
        fill="currentColor"
      />
      <Path
        d="M3.93109 19.3199C3.74109 19.3199 3.55109 19.2499 3.40109 19.0999C3.11109 18.8099 3.11109 18.3299 3.40109 18.0399L5.51111 15.9299C5.80111 15.6399 6.28111 15.6399 6.57111 15.9299C6.86111 16.2199 6.86111 16.6999 6.57111 16.9899L4.46109 19.0999C4.31109 19.2499 4.12109 19.3199 3.93109 19.3199Z"
        fill="currentColor"
      />
      <Path
        d="M15.5 11.25H8.5C8.09 11.25 7.75 10.91 7.75 10.5C7.75 10.09 8.09 9.75 8.5 9.75H15.5C15.91 9.75 16.25 10.09 16.25 10.5C16.25 10.91 15.91 11.25 15.5 11.25Z"
        fill="currentColor"
      />
    </Svg>
  );
};

const MessageRemoveTwotone = ({
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
        opacity="0.4"
        d="M22 7.43018V13.4302C22 14.9302 21.5 16.1802 20.62 17.0602C19.75 17.9302 18.5 18.4302 17 18.4302V20.5602C17 21.3602 16.11 21.8402 15.45 21.4002L11 18.4302H8.88C8.96 18.1302 9 17.8202 9 17.5002C9 16.4802 8.61 15.5402 7.97 14.8302C7.25 14.0102 6.18 13.5002 5 13.5002C3.88 13.5002 2.86 13.9602 2.13 14.7102C2.04 14.3102 2 13.8802 2 13.4302V7.43018C2 4.43018 4 2.43018 7 2.43018H17C20 2.43018 22 4.43018 22 7.43018Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M9 17.5C9 17.82 8.96 18.13 8.88 18.43C8.79 18.83 8.63001 19.22 8.42001 19.56C7.73001 20.72 6.46 21.5 5 21.5C3.97 21.5 3.04 21.11 2.34 20.47C2.04 20.21 1.77999 19.9 1.57999 19.56C1.20999 18.96 1 18.25 1 17.5C1 16.42 1.43 15.43 2.13 14.71C2.86 13.96 3.88 13.5 5 13.5C6.18 13.5 7.25 14.01 7.97 14.83C8.61 15.54 9 16.48 9 17.5Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M6.06921 18.5402L3.94922 16.4302"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M6.04968 16.46L3.92969 18.5699"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M8.5 10.5H15.5"
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
  bold: MessageRemoveBold,
  broken: MessageRemoveBroken,
  bulk: MessageRemoveBulk,
  linear: MessageRemoveLinear,
  outline: MessageRemoveOutline,
  twotone: MessageRemoveTwotone,
};

export const MessageRemoveIcon = ({
  variant = defaultOptions.variant,
  className,
  ...props
}: IconProps) => {
  const textClasses = useContext(TextClassContext);
  const Component = variants[variant];
  return <Component className={cn(textClasses, className)} {...props} />;
};

export default MessageRemoveIcon;
