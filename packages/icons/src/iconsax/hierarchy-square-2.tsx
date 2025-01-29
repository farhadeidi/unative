import { useContext } from "react";
import { cn } from "unative/lib/utils";
import { G, Path, Svg } from "unative/ui/svg";
import { TextClassContext } from "unative/ui/text";

import type { IconProps, IconVariants } from "../icon-options";
import { defaultOptions } from "../icon-options";

const HierarchySquare2Bold = ({
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
        d="M16.19 2H7.81C4.17 2 2 4.17 2 7.81V16.18C2 19.83 4.17 22 7.81 22H16.18C19.82 22 21.99 19.83 21.99 16.19V7.81C22 4.17 19.83 2 16.19 2ZM16.2 18.25C15.07 18.25 14.15 17.33 14.15 16.2C14.15 15.54 14.47 14.96 14.96 14.58C14.54 13.48 13.49 12.72 12.31 12.76L10.25 12.77H10.24C9.63 12.77 9.05 12.59 8.56 12.28V14.3C9.32 14.6 9.86 15.34 9.86 16.2C9.86 17.33 8.94 18.25 7.81 18.25C6.68 18.25 5.76 17.33 5.76 16.2C5.76 15.33 6.3 14.6 7.06 14.3V9.95C6.3 9.6 5.76 8.84 5.76 7.95C5.76 6.74 6.75 5.75 7.96 5.75C9.17 5.75 10.16 6.74 10.16 7.95C10.16 8.93 9.51 9.75 8.62 10.04C8.82 10.77 9.48 11.28 10.24 11.28C10.24 11.28 10.24 11.28 10.25 11.28L12.31 11.27C12.32 11.27 12.32 11.27 12.33 11.27C14.17 11.27 15.82 12.44 16.42 14.18C17.45 14.29 18.26 15.15 18.26 16.21C18.25 17.33 17.33 18.25 16.2 18.25Z"
        fill="currentColor"
      />
    </Svg>
  );
};

const HierarchySquare2Broken = ({
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
        d="M2 13.02V15C2 20 4 22 9 22H15C20 22 22 20 22 15V9C22 4 20 2 15 2H9C4 2 2 4 2 9"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M7.80078 10.2V14.3999"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M7.95001 9.89999C9.02697 9.89999 9.90002 9.02697 9.90002 7.95001C9.90002 6.87306 9.02697 6 7.95001 6C6.87306 6 6 6.87306 6 7.95001C6 9.02697 6.87306 9.89999 7.95001 9.89999Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M7.79999 17.9999C8.7941 17.9999 9.59998 17.194 9.59998 16.1999C9.59998 15.2058 8.7941 14.3999 7.79999 14.3999C6.80588 14.3999 6 15.2058 6 16.1999C6 17.194 6.80588 17.9999 7.79999 17.9999Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M16.2004 17.9999C17.1945 17.9999 18.0004 17.194 18.0004 16.1999C18.0004 15.2058 17.1945 14.3999 16.2004 14.3999C15.2063 14.3999 14.4004 15.2058 14.4004 16.1999C14.4004 17.194 15.2063 17.9999 16.2004 17.9999Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M7.88086 10.2C8.15086 11.25 9.11084 12.0299 10.2408 12.0199L12.3008 12.0099C13.8708 11.9999 15.2109 13.01 15.7009 14.42"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

const HierarchySquare2Bulk = ({
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
        d="M16.1898 2H7.81976C4.17976 2 2.00977 4.17 2.00977 7.81V16.18C2.00977 19.82 4.17976 21.99 7.81976 21.99H16.1898C19.8298 21.99 21.9998 19.82 21.9998 16.18V7.81C21.9998 4.17 19.8298 2 16.1898 2Z"
        fill="currentColor"
      />
      <Path
        d="M16.41 14.1703C15.8 12.4303 14.16 11.2603 12.32 11.2603C12.31 11.2603 12.31 11.2603 12.3 11.2603L10.24 11.2702C10.24 11.2702 10.24 11.2702 10.23 11.2702C9.46998 11.2702 8.80999 10.7602 8.60999 10.0302C9.49999 9.75024 10.15 8.92025 10.15 7.94025C10.15 6.73025 9.16001 5.74023 7.95001 5.74023C6.74001 5.74023 5.75 6.73025 5.75 7.94025C5.75 8.83025 6.28999 9.60025 7.04999 9.94025V14.2802C6.28999 14.5802 5.75 15.3202 5.75 16.1802C5.75 17.3102 6.66999 18.2303 7.79999 18.2303C8.92999 18.2303 9.84998 17.3102 9.84998 16.1802C9.84998 15.3102 9.30999 14.5802 8.54999 14.2802V12.2603C9.03999 12.5703 9.61998 12.7502 10.23 12.7502H10.24L12.3 12.7402C13.48 12.7002 14.53 13.4602 14.95 14.5602C14.46 14.9402 14.14 15.5202 14.14 16.1802C14.14 17.3102 15.06 18.2303 16.19 18.2303C17.32 18.2303 18.24 17.3102 18.24 16.1802C18.25 15.1402 17.44 14.2803 16.41 14.1703Z"
        fill="currentColor"
      />
    </Svg>
  );
};

const HierarchySquare2Linear = ({
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
        d="M7.80005 10.2V14.3999"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M7.95001 9.89999C9.02697 9.89999 9.90002 9.02697 9.90002 7.95001C9.90002 6.87306 9.02697 6 7.95001 6C6.87306 6 6 6.87306 6 7.95001C6 9.02697 6.87306 9.89999 7.95001 9.89999Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M7.79999 17.9999C8.7941 17.9999 9.59998 17.194 9.59998 16.1999C9.59998 15.2058 8.7941 14.3999 7.79999 14.3999C6.80588 14.3999 6 15.2058 6 16.1999C6 17.194 6.80588 17.9999 7.79999 17.9999Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M16.2 17.9999C17.1941 17.9999 18 17.194 18 16.1999C18 15.2058 17.1941 14.3999 16.2 14.3999C15.2059 14.3999 14.4 15.2058 14.4 16.1999C14.4 17.194 15.2059 17.9999 16.2 17.9999Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M7.88 10.2C8.15 11.25 9.10999 12.0299 10.24 12.0199L12.3 12.0099C13.87 11.9999 15.21 13.01 15.7 14.42"
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

const HierarchySquare2Outline = ({
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
        d="M7.80078 15.1502C7.39078 15.1502 7.05078 14.8102 7.05078 14.4002V10.2002C7.05078 9.7902 7.39078 9.4502 7.80078 9.4502C8.21078 9.4502 8.55078 9.7902 8.55078 10.2002V14.4002C8.55078 14.8102 8.21078 15.1502 7.80078 15.1502Z"
        fill="currentColor"
      />
      <Path
        d="M7.95001 10.65C6.46001 10.65 5.25 9.44001 5.25 7.95001C5.25 6.46001 6.46001 5.25 7.95001 5.25C9.44001 5.25 10.65 6.46001 10.65 7.95001C10.65 9.44001 9.44001 10.65 7.95001 10.65ZM7.95001 6.75C7.29001 6.75 6.75 7.29001 6.75 7.95001C6.75 8.61001 7.29001 9.14999 7.95001 9.14999C8.61001 9.14999 9.15002 8.61001 9.15002 7.95001C9.15002 7.29001 8.61001 6.75 7.95001 6.75Z"
        fill="currentColor"
      />
      <Path
        d="M7.79999 18.7499C6.38999 18.7499 5.25 17.6099 5.25 16.1999C5.25 14.7899 6.38999 13.6499 7.79999 13.6499C9.20999 13.6499 10.35 14.7899 10.35 16.1999C10.35 17.6099 9.20999 18.7499 7.79999 18.7499ZM7.79999 15.1499C7.21999 15.1499 6.75 15.6199 6.75 16.1999C6.75 16.7799 7.21999 17.2499 7.79999 17.2499C8.37999 17.2499 8.84998 16.7799 8.84998 16.1999C8.84998 15.6199 8.37999 15.1499 7.79999 15.1499Z"
        fill="currentColor"
      />
      <Path
        d="M16.2004 18.7499C14.7904 18.7499 13.6504 17.6099 13.6504 16.1999C13.6504 14.7899 14.7904 13.6499 16.2004 13.6499C17.6104 13.6499 18.7504 14.7899 18.7504 16.1999C18.7504 17.6099 17.6104 18.7499 16.2004 18.7499ZM16.2004 15.1499C15.6204 15.1499 15.1504 15.6199 15.1504 16.1999C15.1504 16.7799 15.6204 17.2499 16.2004 17.2499C16.7804 17.2499 17.2504 16.7799 17.2504 16.1999C17.2504 15.6199 16.7804 15.1499 16.2004 15.1499Z"
        fill="currentColor"
      />
      <Path
        d="M15.6996 15.17C15.3896 15.17 15.0996 14.98 14.9896 14.67C14.5896 13.53 13.5196 12.77 12.3096 12.77H12.2996L10.2396 12.78H10.2296C8.77958 12.78 7.50962 11.8 7.14962 10.4C7.04962 9.99996 7.2896 9.58995 7.6896 9.48995C8.0796 9.38995 8.49957 9.62996 8.59957 10.03C8.78957 10.77 9.45958 11.29 10.2296 11.29C10.2296 11.29 10.2296 11.29 10.2396 11.29L12.2996 11.28C12.3096 11.28 12.3096 11.28 12.3196 11.28C14.1596 11.28 15.8096 12.45 16.4196 14.19C16.5596 14.58 16.3496 15.01 15.9596 15.15C15.8696 15.16 15.7796 15.17 15.6996 15.17Z"
        fill="currentColor"
      />
      <Path
        d="M15 22.75H9C3.57 22.75 1.25 20.43 1.25 15V9C1.25 3.57 3.57 1.25 9 1.25H15C20.43 1.25 22.75 3.57 22.75 9V15C22.75 20.43 20.43 22.75 15 22.75ZM9 2.75C4.39 2.75 2.75 4.39 2.75 9V15C2.75 19.61 4.39 21.25 9 21.25H15C19.61 21.25 21.25 19.61 21.25 15V9C21.25 4.39 19.61 2.75 15 2.75H9Z"
        fill="currentColor"
      />
    </Svg>
  );
};

const HierarchySquare2Twotone = ({
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
      <G opacity="0.4">
        <Path
          d="M7.80078 10.2002V14.4002"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <Path
          d="M7.95001 9.89999C9.02697 9.89999 9.90002 9.02697 9.90002 7.95001C9.90002 6.87306 9.02697 6 7.95001 6C6.87306 6 6 6.87306 6 7.95001C6 9.02697 6.87306 9.89999 7.95001 9.89999Z"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <Path
          d="M7.79999 17.9999C8.7941 17.9999 9.59998 17.194 9.59998 16.1999C9.59998 15.2058 8.7941 14.3999 7.79999 14.3999C6.80588 14.3999 6 15.2058 6 16.1999C6 17.194 6.80588 17.9999 7.79999 17.9999Z"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <Path
          d="M16.2004 17.9999C17.1945 17.9999 18.0004 17.194 18.0004 16.1999C18.0004 15.2058 17.1945 14.3999 16.2004 14.3999C15.2063 14.3999 14.4004 15.2058 14.4004 16.1999C14.4004 17.194 15.2063 17.9999 16.2004 17.9999Z"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <Path
          d="M7.87891 10.2002C8.14891 11.2502 9.10889 12.0302 10.2389 12.0202L12.2989 12.0102C13.8689 12.0002 15.2089 13.0102 15.6989 14.4202"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </G>
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
  bold: HierarchySquare2Bold,
  broken: HierarchySquare2Broken,
  bulk: HierarchySquare2Bulk,
  linear: HierarchySquare2Linear,
  outline: HierarchySquare2Outline,
  twotone: HierarchySquare2Twotone,
};

export const HierarchySquare2Icon = ({
  variant = defaultOptions.variant,
  className,
  ...props
}: IconProps) => {
  const textClasses = useContext(TextClassContext);
  const Component = variants[variant];
  return <Component className={cn(textClasses, className)} {...props} />;
};

export default HierarchySquare2Icon;
