import { useContext } from "react";
import { Path, Svg } from "unative/lib/svg";
import { cn } from "unative/lib/utils";
import { TextClassContext } from "unative/ui/text";

import type { IconProps, IconVariants } from "../types/icons-type";

const MessageTickBold = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M5 13.5C2.79 13.5 1 15.29 1 17.5C1 18.25 1.21 18.96 1.58 19.56C2.27 20.72 3.54 21.5 5 21.5C6.46 21.5 7.73 20.72 8.42 19.56C8.79 18.96 9 18.25 9 17.5C9 15.29 7.21 13.5 5 13.5ZM6.97 17.17L4.84 19.14C4.7 19.27 4.51 19.34 4.33 19.34C4.14 19.34 3.95 19.27 3.8 19.12L2.81 18.13C2.52 17.84 2.52 17.36 2.81 17.07C3.1 16.78 3.58 16.78 3.87 17.07L4.35 17.55L5.95 16.07C6.25 15.79 6.73 15.81 7.01 16.11C7.29 16.41 7.27 16.89 6.97 17.17Z"
        fill="currentColor"
      />
      <Path
        d="M17.25 2.42969H7.75C4.9 2.42969 3 4.32969 3 7.17969V11.6397C3 11.9897 3.36 12.2397 3.7 12.1497C4.12 12.0497 4.55 11.9997 5 11.9997C7.86 11.9997 10.22 14.3197 10.48 17.1297C10.5 17.4097 10.73 17.6297 11 17.6297H11.55L15.78 20.4497C16.4 20.8697 17.25 20.4097 17.25 19.6497V17.6297C18.67 17.6297 19.86 17.1497 20.69 16.3297C21.52 15.4897 22 14.2997 22 12.8797V7.17969C22 4.32969 20.1 2.42969 17.25 2.42969ZM15.83 10.8097H9.17C8.78 10.8097 8.46 10.4897 8.46 10.0997C8.46 9.69969 8.78 9.37969 9.17 9.37969H15.83C16.22 9.37969 16.54 9.69969 16.54 10.0997C16.54 10.4897 16.22 10.8097 15.83 10.8097Z"
        fill="currentColor"
      />
    </Svg>
  );
};

const MessageTickBroken = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M9 17.5C9 18.25 8.79001 18.96 8.42001 19.56C8.21001 19.92 7.94 20.24 7.63 20.5C6.93 21.13 6.01 21.5 5 21.5C3.54 21.5 2.26999 20.72 1.57999 19.56C1.20999 18.96 1 18.25 1 17.5C1 16.24 1.58 15.11 2.5 14.38C3.19 13.83 4.06 13.5 5 13.5C7.21 13.5 9 15.29 9 17.5Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M3.43945 17.5L4.42944 18.49L6.55945 16.52"
        stroke="currentColor"
        strokeWidth="1.5"
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

const MessageTickBulk = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M5 13.5C2.79 13.5 1 15.29 1 17.5C1 18.25 1.20999 18.96 1.57999 19.56C2.26999 20.72 3.54 21.5 5 21.5C6.46 21.5 7.73001 20.72 8.42001 19.56C8.79001 18.96 9 18.25 9 17.5C9 15.29 7.21 13.5 5 13.5ZM6.97 17.17L4.84 19.14C4.7 19.27 4.50999 19.34 4.32999 19.34C4.13999 19.34 3.94999 19.27 3.79999 19.12L2.81 18.13C2.52 17.84 2.52 17.36 2.81 17.07C3.1 16.78 3.58 16.78 3.87 17.07L4.35001 17.55L5.95001 16.07C6.25001 15.79 6.73001 15.81 7.01001 16.11C7.29001 16.41 7.27 16.89 6.97 17.17Z"
        fill="currentColor"
      />
    </Svg>
  );
};

const MessageTickLinear = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M9 17.5C9 18.25 8.79001 18.96 8.42001 19.56C8.21001 19.92 7.94 20.24 7.63 20.5C6.93 21.13 6.01 21.5 5 21.5C3.54 21.5 2.26999 20.72 1.57999 19.56C1.20999 18.96 1 18.25 1 17.5C1 16.24 1.58 15.11 2.5 14.38C3.19 13.83 4.06 13.5 5 13.5C7.21 13.5 9 15.29 9 17.5Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M3.44 17.5L4.42999 18.49L6.56 16.52"
        stroke="currentColor"
        strokeWidth="1.5"
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

const MessageTickOutline = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M15.9998 22.3199C15.6598 22.3199 15.3298 22.22 15.0398 22.03L10.7798 19.1899H8.88977C8.65977 19.1899 8.43974 19.08 8.29974 18.9C8.15974 18.71 8.10977 18.4699 8.16977 18.2499C8.22977 18.0099 8.25977 17.7699 8.25977 17.5099C8.25977 16.7099 7.95977 15.94 7.41977 15.34C6.80977 14.65 5.93977 14.2599 5.00977 14.2599C4.11977 14.2599 3.29975 14.6099 2.67975 15.2399C2.48975 15.4399 2.19976 15.5099 1.93976 15.4399C1.67976 15.3599 1.46976 15.1499 1.40976 14.8799C1.30976 14.4399 1.25977 13.9599 1.25977 13.4399V7.43994C1.25977 3.99994 3.56977 1.68994 7.00977 1.68994H17.0098C20.4498 1.68994 22.7598 3.99994 22.7598 7.43994V13.4399C22.7598 15.1099 22.2098 16.5499 21.1598 17.5999C20.2798 18.4799 19.1098 19.01 17.7598 19.15V20.5699C17.7598 21.2199 17.3997 21.8099 16.8297 22.1199C16.5597 22.2499 16.2798 22.3199 15.9998 22.3199ZM9.74976 17.6799H10.9998C11.1498 17.6799 11.2898 17.7199 11.4198 17.8099L15.8698 20.78C15.9798 20.85 16.0698 20.8199 16.1198 20.7899C16.1698 20.7599 16.2598 20.6999 16.2598 20.5599V18.4299C16.2598 18.0199 16.5998 17.6799 17.0098 17.6799C18.2798 17.6799 19.3498 17.28 20.0998 16.53C20.8598 15.77 21.2598 14.6999 21.2598 13.4299V7.42993C21.2598 4.84993 19.5898 3.17993 17.0098 3.17993H7.00977C4.42977 3.17993 2.75977 4.84993 2.75977 7.42993V13.3099C3.43977 12.9399 4.20977 12.7499 5.00977 12.7499C6.36977 12.7499 7.65976 13.33 8.53976 14.33C9.31976 15.2 9.75977 16.3199 9.75977 17.4999C9.74977 17.5599 9.74976 17.6199 9.74976 17.6799Z"
        fill="currentColor"
      />
      <Path
        d="M5 22.25C3.34 22.25 1.78 21.37 0.940002 19.94C0.490002 19.22 0.25 18.37 0.25 17.5C0.25 16.04 0.899999 14.69 2.03 13.79C2.87 13.12 3.93 12.75 5 12.75C7.62 12.75 9.75 14.88 9.75 17.5C9.75 18.37 9.51 19.22 9.06 19.95C8.81 20.37 8.48999 20.75 8.10999 21.07C7.27999 21.83 6.17 22.25 5 22.25ZM5 14.25C4.26 14.25 3.56 14.5 2.97 14.97C2.2 15.58 1.75 16.51 1.75 17.5C1.75 18.09 1.91 18.67 2.22 19.17C2.8 20.15 3.87 20.75 5 20.75C5.79 20.75 6.55 20.46 7.13 19.94C7.39001 19.72 7.60999 19.46 7.76999 19.18C8.08999 18.67 8.25 18.09 8.25 17.5C8.25 15.71 6.79 14.25 5 14.25Z"
        fill="currentColor"
      />
      <Path
        d="M4.4289 19.2401C4.2389 19.2401 4.0489 19.1701 3.8989 19.0201L2.90891 18.0301C2.61891 17.7401 2.61891 17.26 2.90891 16.97C3.19891 16.68 3.6789 16.68 3.9689 16.97L4.44891 17.4501L6.04889 15.97C6.34889 15.69 6.82889 15.7101 7.10889 16.0101C7.38889 16.3101 7.36891 16.7901 7.06891 17.0701L4.93891 19.04C4.7889 19.17 4.6089 19.2401 4.4289 19.2401Z"
        fill="currentColor"
      />
      <Path
        d="M15.5 11.25H8.5C8.09 11.25 7.75 10.91 7.75 10.5C7.75 10.09 8.09 9.75 8.5 9.75H15.5C15.91 9.75 16.25 10.09 16.25 10.5C16.25 10.91 15.91 11.25 15.5 11.25Z"
        fill="currentColor"
      />
    </Svg>
  );
};

const MessageTickTwotone = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M9 17.5C9 18.25 8.79001 18.96 8.42001 19.56C8.21001 19.92 7.94 20.24 7.63 20.5C6.93 21.13 6.01 21.5 5 21.5C3.54 21.5 2.26999 20.72 1.57999 19.56C1.20999 18.96 1 18.25 1 17.5C1 16.24 1.58 15.11 2.5 14.38C3.19 13.83 4.06 13.5 5 13.5C7.21 13.5 9 15.29 9 17.5Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M3.43945 17.5L4.42944 18.49L6.55945 16.52"
        stroke="currentColor"
        strokeWidth="1.5"
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
  bold: MessageTickBold,
  broken: MessageTickBroken,
  bulk: MessageTickBulk,
  linear: MessageTickLinear,
  outline: MessageTickOutline,
  twotone: MessageTickTwotone,
};

export const MessageTickIcon = ({
  variant = "linear",
  className,
  ...props
}: IconProps) => {
  const textClasses = useContext(TextClassContext);
  const Component = variants[variant];
  return <Component className={cn(textClasses, className)} {...props} />;
};
