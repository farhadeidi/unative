import { useContext } from "react";
import { cn } from "unative/lib/utils";
import { G, Path, Svg } from "unative/ui/svg";
import { TextClassContext } from "unative/ui/text";

import type { IconProps, IconVariants } from "../icon-options";
import { defaultOptions } from "../icon-options";

const HierarchySquare3Bold = ({
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
        d="M16.19 2H7.81C4.17 2 2 4.17 2 7.81V16.18C2 19.83 4.17 22 7.81 22H16.18C19.82 22 21.99 19.83 21.99 16.19V7.81C22 4.17 19.83 2 16.19 2ZM16.41 9.83C15.8 11.57 14.16 12.74 12.32 12.74C12.31 12.74 12.31 12.74 12.3 12.74L10.24 12.73C10.24 12.73 10.24 12.73 10.23 12.73C9.47 12.73 8.81 13.24 8.61 13.97C9.5 14.25 10.15 15.08 10.15 16.06C10.15 17.27 9.16 18.26 7.95 18.26C6.74 18.26 5.75 17.27 5.75 16.06C5.75 15.17 6.29 14.4 7.05 14.06V9.7C6.29 9.4 5.75 8.66 5.75 7.8C5.75 6.67 6.67 5.75 7.8 5.75C8.93 5.75 9.85 6.67 9.85 7.8C9.85 8.67 9.31 9.4 8.55 9.7V11.72C9.04 11.41 9.62 11.23 10.23 11.23H10.24L12.3 11.24C13.48 11.28 14.53 10.52 14.95 9.42C14.46 9.04 14.14 8.46 14.14 7.8C14.14 6.67 15.06 5.75 16.19 5.75C17.32 5.75 18.24 6.67 18.24 7.8C18.25 8.86 17.44 9.72 16.41 9.83Z"
        fill="currentColor"
      />
    </Svg>
  );
};

const HierarchySquare3Broken = ({
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
        d="M7.80078 13.8001V9.6001"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M7.95001 18.0001C9.02697 18.0001 9.90002 17.127 9.90002 16.0501C9.90002 14.9731 9.02697 14.1001 7.95001 14.1001C6.87306 14.1001 6 14.9731 6 16.0501C6 17.127 6.87306 18.0001 7.95001 18.0001Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M7.79999 9.60001C8.7941 9.60001 9.59998 8.7941 9.59998 7.79999C9.59998 6.80588 8.7941 6 7.79999 6C6.80588 6 6 6.80588 6 7.79999C6 8.7941 6.80588 9.60001 7.79999 9.60001Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M16.2004 9.60001C17.1945 9.60001 18.0004 8.7941 18.0004 7.79999C18.0004 6.80588 17.1945 6 16.2004 6C15.2063 6 14.4004 6.80588 14.4004 7.79999C14.4004 8.7941 15.2063 9.60001 16.2004 9.60001Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M7.88086 13.8001C8.15086 12.7501 9.11084 11.9701 10.2408 11.9801L12.3008 11.9901C13.8708 12.0001 15.2109 10.9901 15.7009 9.58008"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

const HierarchySquare3Bulk = ({
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
        d="M16.1898 21.9998H7.81976C4.17976 21.9998 2.00977 19.8298 2.00977 16.1898V7.81976C2.00977 4.17976 4.17976 2.00977 7.81976 2.00977H16.1898C19.8298 2.00977 21.9998 4.17976 21.9998 7.81976V16.1898C21.9998 19.8298 19.8298 21.9998 16.1898 21.9998Z"
        fill="currentColor"
      />
      <Path
        d="M16.41 9.83002C15.8 11.57 14.16 12.74 12.32 12.74C12.31 12.74 12.31 12.74 12.3 12.74L10.24 12.73C10.24 12.73 10.24 12.73 10.23 12.73C9.46998 12.73 8.80999 13.24 8.60999 13.97C9.49999 14.25 10.15 15.08 10.15 16.06C10.15 17.27 9.16001 18.26 7.95001 18.26C6.74001 18.26 5.75 17.27 5.75 16.06C5.75 15.17 6.28999 14.4 7.04999 14.06V9.72003C6.28999 9.42003 5.75 8.68004 5.75 7.82004C5.75 6.69004 6.66999 5.77002 7.79999 5.77002C8.92999 5.77002 9.84998 6.69004 9.84998 7.82004C9.84998 8.69004 9.30999 9.42003 8.54999 9.72003V11.74C9.03999 11.43 9.61998 11.25 10.23 11.25H10.24L12.3 11.26C13.48 11.3 14.53 10.54 14.95 9.44003C14.46 9.06003 14.14 8.48004 14.14 7.82004C14.14 6.69004 15.06 5.77002 16.19 5.77002C17.32 5.77002 18.24 6.69004 18.24 7.82004C18.25 8.86004 17.44 9.72002 16.41 9.83002Z"
        fill="currentColor"
      />
    </Svg>
  );
};

const HierarchySquare3Linear = ({
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
        d="M7.80005 13.8001V9.6001"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M7.95001 18.0001C9.02697 18.0001 9.90002 17.127 9.90002 16.0501C9.90002 14.9731 9.02697 14.1001 7.95001 14.1001C6.87306 14.1001 6 14.9731 6 16.0501C6 17.127 6.87306 18.0001 7.95001 18.0001Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M7.79999 9.60001C8.7941 9.60001 9.59998 8.7941 9.59998 7.79999C9.59998 6.80588 8.7941 6 7.79999 6C6.80588 6 6 6.80588 6 7.79999C6 8.7941 6.80588 9.60001 7.79999 9.60001Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M16.2 9.60001C17.1941 9.60001 18 8.7941 18 7.79999C18 6.80588 17.1941 6 16.2 6C15.2059 6 14.4 6.80588 14.4 7.79999C14.4 8.7941 15.2059 9.60001 16.2 9.60001Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M7.88 13.8001C8.15 12.7501 9.10999 11.9701 10.24 11.9801L12.3 11.9901C13.87 12.0001 15.21 10.9901 15.7 9.58008"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M9 2H15C20 2 22 4 22 9V15C22 20 20 22 15 22H9C4 22 2 20 2 15V9C2 4 4 2 9 2Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

const HierarchySquare3Outline = ({
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
        d="M7.80078 14.5501C7.39078 14.5501 7.05078 14.2101 7.05078 13.8001V9.6001C7.05078 9.1901 7.39078 8.8501 7.80078 8.8501C8.21078 8.8501 8.55078 9.1901 8.55078 9.6001V13.8001C8.55078 14.2101 8.21078 14.5501 7.80078 14.5501Z"
        fill="currentColor"
      />
      <Path
        d="M7.95001 18.7501C6.46001 18.7501 5.25 17.5401 5.25 16.0501C5.25 14.5601 6.46001 13.3501 7.95001 13.3501C9.44001 13.3501 10.65 14.5601 10.65 16.0501C10.65 17.5401 9.44001 18.7501 7.95001 18.7501ZM7.95001 14.8501C7.29001 14.8501 6.75 15.3901 6.75 16.0501C6.75 16.7101 7.29001 17.2501 7.95001 17.2501C8.61001 17.2501 9.15002 16.7101 9.15002 16.0501C9.15002 15.3901 8.61001 14.8501 7.95001 14.8501Z"
        fill="currentColor"
      />
      <Path
        d="M7.79999 10.35C6.38999 10.35 5.25 9.20999 5.25 7.79999C5.25 6.38999 6.38999 5.25 7.79999 5.25C9.20999 5.25 10.35 6.38999 10.35 7.79999C10.35 9.20999 9.20999 10.35 7.79999 10.35ZM7.79999 6.75C7.21999 6.75 6.75 7.21999 6.75 7.79999C6.75 8.37999 7.21999 8.85001 7.79999 8.85001C8.37999 8.85001 8.84998 8.37999 8.84998 7.79999C8.84998 7.21999 8.37999 6.75 7.79999 6.75Z"
        fill="currentColor"
      />
      <Path
        d="M16.2004 10.35C14.7904 10.35 13.6504 9.20999 13.6504 7.79999C13.6504 6.38999 14.7904 5.25 16.2004 5.25C17.6104 5.25 18.7504 6.38999 18.7504 7.79999C18.7504 9.20999 17.6104 10.35 16.2004 10.35ZM16.2004 6.75C15.6204 6.75 15.1504 7.21999 15.1504 7.79999C15.1504 8.37999 15.6204 8.85001 16.2004 8.85001C16.7804 8.85001 17.2504 8.37999 17.2504 7.79999C17.2504 7.21999 16.7804 6.75 16.2004 6.75Z"
        fill="currentColor"
      />
      <Path
        d="M7.8796 14.5501C7.8196 14.5501 7.7496 14.5401 7.6896 14.5301C7.2896 14.4301 7.04962 14.0201 7.14962 13.6201C7.50962 12.2101 8.77958 11.2401 10.2296 11.2401H10.2396L12.2996 11.2501H12.3096C13.5196 11.2501 14.5896 10.4901 14.9896 9.35014C15.1296 8.96014 15.5596 8.75015 15.9396 8.89015C16.3296 9.03015 16.5396 9.45014 16.3996 9.85014C15.7896 11.6001 14.1496 12.7701 12.2896 12.7601L10.2296 12.7501C10.2296 12.7501 10.2296 12.7501 10.2196 12.7501C9.44957 12.7501 8.77962 13.2701 8.58962 14.0101C8.51962 14.3301 8.2096 14.5501 7.8796 14.5501Z"
        fill="currentColor"
      />
      <Path
        d="M15 22.75H9C3.57 22.75 1.25 20.43 1.25 15V9C1.25 3.57 3.57 1.25 9 1.25H15C20.43 1.25 22.75 3.57 22.75 9V15C22.75 20.43 20.43 22.75 15 22.75ZM9 2.75C4.39 2.75 2.75 4.39 2.75 9V15C2.75 19.61 4.39 21.25 9 21.25H15C19.61 21.25 21.25 19.61 21.25 15V9C21.25 4.39 19.61 2.75 15 2.75H9Z"
        fill="currentColor"
      />
    </Svg>
  );
};

const HierarchySquare3Twotone = ({
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
          d="M7.80078 13.8001V9.6001"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <Path
          d="M7.95001 18.0001C9.02697 18.0001 9.90002 17.127 9.90002 16.0501C9.90002 14.9731 9.02697 14.1001 7.95001 14.1001C6.87306 14.1001 6 14.9731 6 16.0501C6 17.127 6.87306 18.0001 7.95001 18.0001Z"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <Path
          d="M7.79999 9.60001C8.7941 9.60001 9.59998 8.7941 9.59998 7.79999C9.59998 6.80588 8.7941 6 7.79999 6C6.80588 6 6 6.80588 6 7.79999C6 8.7941 6.80588 9.60001 7.79999 9.60001Z"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <Path
          d="M16.2004 9.60001C17.1945 9.60001 18.0004 8.7941 18.0004 7.79999C18.0004 6.80588 17.1945 6 16.2004 6C15.2063 6 14.4004 6.80588 14.4004 7.79999C14.4004 8.7941 15.2063 9.60001 16.2004 9.60001Z"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <Path
          d="M7.87891 13.8001C8.14891 12.7501 9.10889 11.9701 10.2389 11.9801L12.2989 11.9901C13.8689 12.0001 15.2089 10.9901 15.6989 9.58008"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </G>
      <Path
        d="M9 2H15C20 2 22 4 22 9V15C22 20 20 22 15 22H9C4 22 2 20 2 15V9C2 4 4 2 9 2Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

const variants: IconVariants = {
  bold: HierarchySquare3Bold,
  broken: HierarchySquare3Broken,
  bulk: HierarchySquare3Bulk,
  linear: HierarchySquare3Linear,
  outline: HierarchySquare3Outline,
  twotone: HierarchySquare3Twotone,
};

export const HierarchySquare3Icon = ({
  variant = defaultOptions.variant,
  className,
  ...props
}: IconProps) => {
  const textClasses = useContext(TextClassContext);
  const Component = variants[variant];
  return <Component className={cn(textClasses, className)} {...props} />;
};

export default HierarchySquare3Icon;
