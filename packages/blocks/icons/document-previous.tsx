import { useContext } from "react";
import { G, Path, Svg } from "unative/lib/svg";
import { cn } from "unative/lib/utils";
import { TextClassContext } from "unative/ui/text";

import { iconDefaultOptions } from "../icons-configuration";
import type { IconProps, IconVariants } from "../types/icons-type";

const DocumentPreviousBold = ({
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
        d="M15.7997 2.21048C15.3897 1.80048 14.6797 2.08048 14.6797 2.65048V6.14048C14.6797 7.60048 15.9197 8.81048 17.4297 8.81048C18.3797 8.82048 19.6997 8.82048 20.8297 8.82048C21.3997 8.82048 21.6997 8.15048 21.2997 7.75048C19.8597 6.30048 17.2797 3.69048 15.7997 2.21048Z"
        fill="currentColor"
      />
      <Path
        d="M20.5 10.19H17.61C15.24 10.19 13.31 8.26 13.31 5.89V3C13.31 2.45 12.86 2 12.31 2H8.07C4.99 2 2.5 4 2.5 7.57V16.43C2.5 20 4.99 22 8.07 22H15.93C19.01 22 21.5 20 21.5 16.43V11.19C21.5 10.64 21.05 10.19 20.5 10.19ZM13 15.75H8.81L9.53 16.47C9.82 16.76 9.82 17.24 9.53 17.53C9.38 17.68 9.19 17.75 9 17.75C8.81 17.75 8.62 17.68 8.47 17.53L6.47 15.53C6.4 15.46 6.36 15.39 6.32 15.31C6.31 15.29 6.3 15.26 6.29 15.24C6.27 15.18 6.26 15.12 6.25 15.06C6.25 15.03 6.25 15.01 6.25 14.98C6.25 14.9 6.27 14.82 6.3 14.74C6.3 14.73 6.3 14.73 6.31 14.72C6.34 14.64 6.4 14.56 6.46 14.5C6.47 14.49 6.47 14.48 6.48 14.48L8.48 12.48C8.77 12.19 9.25 12.19 9.54 12.48C9.83 12.77 9.83 13.25 9.54 13.54L8.82 14.26H13C13.41 14.26 13.75 14.6 13.75 15.01C13.75 15.42 13.41 15.75 13 15.75Z"
        fill="currentColor"
      />
    </Svg>
  );
};

const DocumentPreviousBroken = ({
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
        d="M9.65 15H7L9 17"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M13 15H12"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M7 15L9 13"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M2 9C2 4 4 2 9 2H14"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M22 10V15C22 20 20 22 15 22H9C4 22 2 20 2 15V12.98"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M18 10C15 10 14 9 14 6V2L22 10"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

const DocumentPreviousBulk = ({
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
        d="M20.5 10.19H17.61C15.24 10.19 13.31 8.26 13.31 5.89V3C13.31 2.45 12.86 2 12.31 2H8.07C4.99 2 2.5 4 2.5 7.57V16.43C2.5 20 4.99 22 8.07 22H15.93C19.01 22 21.5 20 21.5 16.43V11.19C21.5 10.64 21.05 10.19 20.5 10.19Z"
        fill="currentColor"
      />
      <Path
        d="M15.7997 2.20999C15.3897 1.79999 14.6797 2.07999 14.6797 2.64999V6.13999C14.6797 7.59999 15.9197 8.80999 17.4297 8.80999C18.3797 8.81999 19.6997 8.81999 20.8297 8.81999C21.3997 8.81999 21.6997 8.14999 21.2997 7.74999C19.8597 6.29999 17.2797 3.68999 15.7997 2.20999Z"
        fill="currentColor"
      />
      <Path
        d="M13.0002 14.2499H8.81024L9.53023 13.5299C9.82023 13.2399 9.82023 12.7599 9.53023 12.4699C9.24023 12.1799 8.76023 12.1799 8.47023 12.4699L6.47023 14.4699C6.46023 14.4799 6.46023 14.4899 6.45023 14.4899C6.39023 14.5499 6.34023 14.6299 6.30023 14.7099C6.30023 14.7199 6.30023 14.7199 6.29023 14.7299C6.26023 14.8099 6.25023 14.8899 6.24023 14.9699C6.24023 14.9999 6.24023 15.0199 6.24023 15.0499C6.24023 15.1099 6.26023 15.1699 6.28023 15.2299C6.29023 15.2599 6.30023 15.2799 6.31023 15.2999C6.35023 15.3799 6.39023 15.4599 6.46023 15.5199L8.46023 17.5199C8.61023 17.6699 8.80023 17.7399 8.99023 17.7399C9.18023 17.7399 9.37023 17.6699 9.52024 17.5199C9.81024 17.2299 9.81024 16.7499 9.52024 16.4599L8.80023 15.7399H13.0002C13.4102 15.7399 13.7502 15.3999 13.7502 14.9899C13.7502 14.5799 13.4102 14.2499 13.0002 14.2499Z"
        fill="currentColor"
      />
    </Svg>
  );
};

const DocumentPreviousLinear = ({
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
        d="M13 15H7L9 17"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M7 15L9 13"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M22 10V15C22 20 20 22 15 22H9C4 22 2 20 2 15V9C2 4 4 2 9 2H14"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M22 10H18C15 10 14 9 14 6V2L18 6L22 10Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

const DocumentPreviousOutline = ({
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
        d="M9.00048 17.75C8.81048 17.75 8.62048 17.68 8.47048 17.53L6.47048 15.53C6.26048 15.32 6.19048 14.99 6.31048 14.71C6.43048 14.43 6.70048 14.25 7.00048 14.25H13.0005C13.4105 14.25 13.7505 14.59 13.7505 15C13.7505 15.41 13.4105 15.75 13.0005 15.75H8.81048L9.53048 16.47C9.82048 16.76 9.82048 17.24 9.53048 17.53C9.38048 17.68 9.19048 17.75 9.00048 17.75Z"
        fill="currentColor"
      />
      <Path
        d="M6.99945 15.7499C6.80945 15.7499 6.61945 15.6799 6.46945 15.5299C6.17945 15.2399 6.17945 14.7599 6.46945 14.4699L8.46945 12.4699C8.75945 12.1799 9.23945 12.1799 9.52945 12.4699C9.81945 12.7599 9.81945 13.2399 9.52945 13.5299L7.52945 15.5299C7.37945 15.6799 7.18945 15.7499 6.99945 15.7499Z"
        fill="currentColor"
      />
      <Path
        d="M15 22.75H9C3.57 22.75 1.25 20.43 1.25 15V9C1.25 3.57 3.57 1.25 9 1.25H14C14.41 1.25 14.75 1.59 14.75 2C14.75 2.41 14.41 2.75 14 2.75H9C4.39 2.75 2.75 4.39 2.75 9V15C2.75 19.61 4.39 21.25 9 21.25H15C19.61 21.25 21.25 19.61 21.25 15V10C21.25 9.59 21.59 9.25 22 9.25C22.41 9.25 22.75 9.59 22.75 10V15C22.75 20.43 20.43 22.75 15 22.75Z"
        fill="currentColor"
      />
      <Path
        d="M22 10.75H18C14.58 10.75 13.25 9.41999 13.25 5.99999V1.99999C13.25 1.69999 13.43 1.41999 13.71 1.30999C13.99 1.18999 14.31 1.25999 14.53 1.46999L22.53 9.46999C22.74 9.67999 22.81 10.01 22.69 10.29C22.57 10.57 22.3 10.75 22 10.75ZM14.75 3.80999V5.99999C14.75 8.57999 15.42 9.24999 18 9.24999H20.19L14.75 3.80999Z"
        fill="currentColor"
      />
    </Svg>
  );
};

const DocumentPreviousTwotone = ({
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
          d="M13 15H7L9 17"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <Path
          d="M7 15L9 13"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </G>
      <Path
        d="M22 10V15C22 20 20 22 15 22H9C4 22 2 20 2 15V9C2 4 4 2 9 2H14"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M22 10H18C15 10 14 9 14 6V2L18 6L22 10Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

const variants: IconVariants = {
  bold: DocumentPreviousBold,
  broken: DocumentPreviousBroken,
  bulk: DocumentPreviousBulk,
  linear: DocumentPreviousLinear,
  outline: DocumentPreviousOutline,
  twotone: DocumentPreviousTwotone,
};

export const DocumentPreviousIcon = ({
  variant = iconDefaultOptions.variant,
  className,
  ...props
}: IconProps) => {
  const textClasses = useContext(TextClassContext);
  const Component = variants[variant];
  return <Component className={cn(textClasses, className)} {...props} />;
};
