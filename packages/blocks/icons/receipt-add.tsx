import { useContext } from "react";
import { G, Path, Svg } from "unative/lib/svg";
import { cn } from "unative/lib/utils";
import { TextClassContext } from "unative/ui/text";

import type { IconProps, IconVariants } from "../types/icons-type";

const ReceiptAddBold = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M18.01 2V3.5C18.67 3.5 19.3 3.77 19.76 4.22C20.24 4.71 20.5 5.34 20.5 6V8.42C20.5 9.16 20.17 9.5 19.42 9.5H17.5V4.01C17.5 3.73 17.73 3.5 18.01 3.5V2ZM18.01 2C16.9 2 16 2.9 16 4.01V11H19.42C21 11 22 10 22 8.42V6C22 4.9 21.55 3.9 20.83 3.17C20.1 2.45 19.11 2.01 18.01 2C18.02 2 18.01 2 18.01 2Z"
        fill="currentColor"
      />
      <Path
        d="M7 2H6C3 2 2 3.79 2 6V7V21C2 21.83 2.94 22.3 3.6 21.8L5.31 20.52C5.71 20.22 6.27 20.26 6.63 20.62L8.29 22.29C8.68 22.68 9.32 22.68 9.71 22.29L11.39 20.61C11.74 20.26 12.3 20.22 12.69 20.52L14.4 21.8C15.06 22.29 16 21.82 16 21V4C16 2.9 16.9 2 18 2H7ZM11.75 10.75H9.75V12.75C9.75 13.16 9.41 13.5 9 13.5C8.59 13.5 8.25 13.16 8.25 12.75V10.75H6.25C5.84 10.75 5.5 10.41 5.5 10C5.5 9.59 5.84 9.25 6.25 9.25H8.25V7.25C8.25 6.84 8.59 6.5 9 6.5C9.41 6.5 9.75 6.84 9.75 7.25V9.25H11.75C12.16 9.25 12.5 9.59 12.5 10C12.5 10.41 12.16 10.75 11.75 10.75Z"
        fill="currentColor"
      />
    </Svg>
  );
};

const ReceiptAddBroken = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M22 6V8.42C22 10 21 11 19.42 11H16V4.01C16 2.9 16.91 2 18.02 2C19.11 2.01 20.11 2.45 20.83 3.17C21.55 3.9 22 4.9 22 6Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M11.1602 10H11.7502"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M6.25 10H8.64999"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M9 12.75V7.25"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M2 11V21C2 21.83 2.94001 22.3 3.60001 21.8L5.31 20.52C5.71 20.22 6.27 20.26 6.63 20.62L8.28999 22.29C8.67999 22.68 9.32001 22.68 9.71001 22.29L11.39 20.61C11.74 20.26 12.3 20.22 12.69 20.52L14.4 21.8C15.06 22.29 16 21.82 16 21V4C16 2.9 16.9 2 18 2H7H6C3 2 2 3.79 2 6V7"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

const ReceiptAddBulk = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M22 6V8.42C22 10 21 11 19.42 11H16V4.01C16 2.9 16.91 2 18.02 2C19.11 2.01 20.11 2.45 20.83 3.17C21.55 3.9 22 4.9 22 6Z"
        fill="currentColor"
      />
      <Path
        opacity="0.4"
        d="M2 7V21C2 21.83 2.94001 22.3 3.60001 21.8L5.31 20.52C5.71 20.22 6.27 20.26 6.63 20.62L8.28999 22.29C8.67999 22.68 9.32001 22.68 9.71001 22.29L11.39 20.61C11.74 20.26 12.3 20.22 12.69 20.52L14.4 21.8C15.06 22.29 16 21.82 16 21V4C16 2.9 16.9 2 18 2H7H6C3 2 2 3.79 2 6V7Z"
        fill="currentColor"
      />
      <Path
        d="M11.75 9.25H9.75V7.25C9.75 6.84 9.41 6.5 9 6.5C8.59 6.5 8.25 6.84 8.25 7.25V9.25H6.25C5.84 9.25 5.5 9.59 5.5 10C5.5 10.41 5.84 10.75 6.25 10.75H8.25V12.75C8.25 13.16 8.59 13.5 9 13.5C9.41 13.5 9.75 13.16 9.75 12.75V10.75H11.75C12.16 10.75 12.5 10.41 12.5 10C12.5 9.59 12.16 9.25 11.75 9.25Z"
        fill="currentColor"
      />
    </Svg>
  );
};

const ReceiptAddLinear = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M22 6V8.42C22 10 21 11 19.42 11H16V4.01C16 2.9 16.91 2 18.02 2C19.11 2.01 20.11 2.45 20.83 3.17C21.55 3.9 22 4.9 22 6Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M2 7V21C2 21.83 2.94001 22.3 3.60001 21.8L5.31 20.52C5.71 20.22 6.27 20.26 6.63 20.62L8.28999 22.29C8.67999 22.68 9.32001 22.68 9.71001 22.29L11.39 20.61C11.74 20.26 12.3 20.22 12.69 20.52L14.4 21.8C15.06 22.29 16 21.82 16 21V4C16 2.9 16.9 2 18 2H7H6C3 2 2 3.79 2 6V7Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M6.25 10H11.75"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M9 12.75V7.25"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

const ReceiptAddOutline = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M19.42 11.75H16C15.59 11.75 15.25 11.41 15.25 11V4.01C15.25 3.27 15.54 2.58 16.06 2.06C16.58 1.54 17.27 1.25 18.01 1.25H18.02C19.27 1.26 20.45 1.75 21.35 2.64C22.25 3.55 22.74 4.75 22.74 6V8.42C22.75 10.41 21.41 11.75 19.42 11.75ZM16.75 10.25H19.42C20.58 10.25 21.25 9.58 21.25 8.42V6C21.25 5.14 20.91 4.32 20.3 3.7C19.69 3.1 18.87 2.76 18.02 2.75C18.02 2.75 18.02 2.75 18.01 2.75C17.68 2.75 17.36 2.88 17.12 3.12C16.88 3.36 16.75 3.67 16.75 4.01V10.25Z"
        fill="currentColor"
      />
      <Path
        d="M8.99977 23.33C8.52977 23.35 8.08977 23.15 7.75977 22.81L6.09978 21.14C6.00978 21.05 5.86978 21.04 5.76978 21.12L4.05977 22.4C3.52977 22.8 2.82977 22.87 2.22977 22.57C1.62977 22.27 1.25977 21.67 1.25977 21V6C1.25977 2.98 2.98977 1.25 6.00977 1.25H18.0098C18.4198 1.25 18.7598 1.59 18.7598 2C18.7598 2.41 18.4198 2.75 18.0098 2.75C17.3198 2.75 16.7598 3.31 16.7598 4V21C16.7598 21.67 16.3898 22.27 15.7898 22.57C15.1898 22.87 14.4898 22.81 13.9598 22.41L12.2498 21.13C12.1498 21.05 12.0098 21.07 11.9298 21.15L10.2498 22.83C9.90977 23.15 9.46977 23.33 8.99977 23.33ZM5.90977 19.57C6.36977 19.57 6.81977 19.74 7.15977 20.09L8.81978 21.76C8.87978 21.82 8.95977 21.83 8.99977 21.83C8.99977 21.81 9.11976 21.82 9.17976 21.76L10.8598 20.08C11.4798 19.46 12.4598 19.4 13.1498 19.93L14.8498 21.2C14.9598 21.28 15.0598 21.25 15.1098 21.22C15.1598 21.19 15.2498 21.13 15.2498 21V4C15.2498 3.55 15.3598 3.12 15.5498 2.75H5.99977C3.77977 2.75 2.74977 3.78 2.74977 6V21C2.74977 21.14 2.83977 21.2 2.88977 21.23C2.94977 21.26 3.04976 21.28 3.14977 21.2L4.85977 19.92C5.16977 19.69 5.53977 19.57 5.90977 19.57Z"
        fill="currentColor"
      />
      <Path
        d="M11.75 10.75H6.25C5.84 10.75 5.5 10.41 5.5 10C5.5 9.59 5.84 9.25 6.25 9.25H11.75C12.16 9.25 12.5 9.59 12.5 10C12.5 10.41 12.16 10.75 11.75 10.75Z"
        fill="currentColor"
      />
      <Path
        d="M9 13.5C8.59 13.5 8.25 13.16 8.25 12.75V7.25C8.25 6.84 8.59 6.5 9 6.5C9.41 6.5 9.75 6.84 9.75 7.25V12.75C9.75 13.16 9.41 13.5 9 13.5Z"
        fill="currentColor"
      />
    </Svg>
  );
};

const ReceiptAddTwotone = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M22 6V8.42C22 10 21 11 19.42 11H16V4.01C16 2.9 16.91 2 18.02 2C19.11 2.01 20.11 2.45 20.83 3.17C21.55 3.9 22 4.9 22 6Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M2 7V21C2 21.83 2.94001 22.3 3.60001 21.8L5.31 20.52C5.71 20.22 6.27 20.26 6.63 20.62L8.28999 22.29C8.67999 22.68 9.32001 22.68 9.71001 22.29L11.39 20.61C11.74 20.26 12.3 20.22 12.69 20.52L14.4 21.8C15.06 22.29 16 21.82 16 21V4C16 2.9 16.9 2 18 2H7H6C3 2 2 3.79 2 6V7Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <G opacity="0.4">
        <Path
          d="M6.25 10H11.75"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <Path
          d="M9 12.75V7.25"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </G>
    </Svg>
  );
};

const variants: IconVariants = {
  bold: ReceiptAddBold,
  broken: ReceiptAddBroken,
  bulk: ReceiptAddBulk,
  linear: ReceiptAddLinear,
  outline: ReceiptAddOutline,
  twotone: ReceiptAddTwotone,
};

export const ReceiptAddIcon = ({
  variant = "linear",
  className,
  ...props
}: IconProps) => {
  const textClasses = useContext(TextClassContext);
  const Component = variants[variant];
  return <Component className={cn(textClasses, className)} {...props} />;
};
