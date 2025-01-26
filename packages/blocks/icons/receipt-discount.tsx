import { Path, Svg } from "unative/lib/svg";
import { cn } from "unative/lib/utils";

import type { IconProps, IconVariants } from "../types/icons-type";

const ReceiptDiscountBold = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M7 2H6C3 2 2 3.79 2 6V7V21C2 21.83 2.94 22.3 3.6 21.8L5.31 20.52C5.71 20.22 6.27 20.26 6.63 20.62L8.29 22.29C8.68 22.68 9.32 22.68 9.71 22.29L11.39 20.61C11.74 20.26 12.3 20.22 12.69 20.52L14.4 21.8C15.06 22.29 16 21.82 16 21V4C16 2.9 16.9 2 18 2H7ZM6.57 8.03C7.12 8.03 7.57 8.48 7.57 9.03C7.57 9.58 7.12 10.03 6.57 10.03C6.02 10.03 5.57 9.58 5.57 9.03C5.57 8.48 6.02 8.03 6.57 8.03ZM11.43 14.08C10.87 14.08 10.43 13.63 10.43 13.08C10.43 12.53 10.88 12.08 11.43 12.08C11.98 12.08 12.43 12.53 12.43 13.08C12.43 13.63 11.98 14.08 11.43 14.08ZM12.26 8.8L6.8 14.26C6.65 14.41 6.46 14.48 6.27 14.48C6.08 14.48 5.89 14.41 5.74 14.26C5.45 13.97 5.45 13.49 5.74 13.2L11.2 7.74C11.49 7.45 11.97 7.45 12.26 7.74C12.55 8.03 12.55 8.51 12.26 8.8Z"
        fill="currentColor"
      />
      <Path
        d="M18.01 2V3.5C18.67 3.5 19.3 3.77 19.76 4.22C20.24 4.71 20.5 5.34 20.5 6V8.42C20.5 9.16 20.17 9.5 19.42 9.5H17.5V4.01C17.5 3.73 17.73 3.5 18.01 3.5V2ZM18.01 2C16.9 2 16 2.9 16 4.01V11H19.42C21 11 22 10 22 8.42V6C22 4.9 21.55 3.9 20.83 3.17C20.1 2.45 19.11 2.01 18.01 2C18.02 2 18.01 2 18.01 2Z"
        fill="currentColor"
      />
    </Svg>
  );
};

const ReceiptDiscountBroken = ({
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
        d="M22 6V8.42C22 10 21 11 19.42 11H16V4.01C16 2.9 16.91 2 18.02 2C19.11 2.01 20.11 2.45 20.83 3.17C21.55 3.9 22 4.9 22 6Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M10.9707 9.03002L11.7307 8.27002"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M6.26953 13.73L8.48953 11.51L8.99953 11"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M2 11V21C2 21.83 2.94 22.3 3.6 21.8L5.31 20.52C5.71 20.22 6.27 20.26 6.63 20.62L8.29 22.29C8.68 22.68 9.32 22.68 9.71 22.29L11.39 20.61C11.74 20.26 12.3 20.22 12.69 20.52L14.4 21.8C15.06 22.29 16 21.82 16 21V4C16 2.9 16.9 2 18 2H7H6C3 2 2 3.79 2 6V7"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M11.9242 13.5H11.9332"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M6.19373 8.5H6.20271"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

const ReceiptDiscountBulk = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M22 6.00008V8.42008C22 10.0001 21 11.0001 19.42 11.0001H16V4.01008C16 2.90008 16.91 1.99008 18.02 2.00008C19.11 2.01008 20.11 2.45008 20.83 3.17008C21.55 3.90008 22 4.90008 22 6.00008Z"
        fill="currentColor"
      />
      <Path
        opacity="0.4"
        d="M2 7V21C2 21.83 2.94 22.3 3.6 21.8L5.31 20.52C5.71 20.22 6.27 20.26 6.63 20.62L8.29 22.29C8.68 22.68 9.32 22.68 9.71 22.29L11.39 20.61C11.74 20.26 12.3 20.22 12.69 20.52L14.4 21.8C15.06 22.29 16 21.82 16 21V4C16 2.9 16.9 2 18 2H7H6C3 2 2 3.79 2 6V7Z"
        fill="currentColor"
      />
      <Path
        d="M11.4316 12.0801C10.8816 12.0801 10.4316 12.5301 10.4316 13.0801C10.4316 13.6301 10.8816 14.0801 11.4316 14.0801C11.9816 14.0801 12.4316 13.6301 12.4316 13.0801C12.4316 12.5301 11.9816 12.0801 11.4316 12.0801Z"
        fill="currentColor"
      />
      <Path
        d="M6.57031 10.0298C7.13031 10.0298 7.57031 9.57979 7.57031 9.02979C7.57031 8.47979 7.12031 8.02979 6.57031 8.02979C6.02031 8.02979 5.57031 8.47979 5.57031 9.02979C5.57031 9.57979 6.02031 10.0298 6.57031 10.0298Z"
        fill="currentColor"
      />
      <Path
        d="M12.2609 7.73996C11.9709 7.44996 11.4909 7.44996 11.2009 7.73996L5.74094 13.2C5.45094 13.49 5.45094 13.97 5.74094 14.26C5.89094 14.41 6.08094 14.48 6.27094 14.48C6.46094 14.48 6.65094 14.41 6.80094 14.26L12.2609 8.79996C12.5509 8.50996 12.5509 8.02996 12.2609 7.73996Z"
        fill="currentColor"
      />
    </Svg>
  );
};

const ReceiptDiscountLinear = ({
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
        d="M22 6V8.42C22 10 21 11 19.42 11H16V4.01C16 2.9 16.91 2 18.02 2C19.11 2.01 20.11 2.45 20.83 3.17C21.55 3.9 22 4.9 22 6Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M2 7V21C2 21.83 2.94 22.3 3.6 21.8L5.31 20.52C5.71 20.22 6.27 20.26 6.63 20.62L8.29 22.29C8.68 22.68 9.32 22.68 9.71 22.29L11.39 20.61C11.74 20.26 12.3 20.22 12.69 20.52L14.4 21.8C15.06 22.29 16 21.82 16 21V4C16 2.9 16.9 2 18 2H7H6C3 2 2 3.79 2 6V7Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M6.27002 13.73L11.73 8.27002"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M11.9247 13.5H11.9337"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M6.1947 8.5H6.20368"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

const ReceiptDiscountOutline = ({
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
        d="M19.42 11.75H16C15.59 11.75 15.25 11.41 15.25 11V4.01C15.25 3.27 15.54 2.58 16.06 2.06C16.58 1.54 17.27 1.25 18.01 1.25H18.02C19.27 1.26 20.45 1.75 21.35 2.64C22.25 3.55 22.74 4.75 22.74 6V8.42C22.75 10.41 21.41 11.75 19.42 11.75ZM16.75 10.25H19.42C20.58 10.25 21.25 9.58 21.25 8.42V6C21.25 5.14 20.91 4.32 20.3 3.7C19.69 3.1 18.87 2.76 18.02 2.75C18.02 2.75 18.02 2.75 18.01 2.75C17.68 2.75 17.36 2.88 17.12 3.12C16.88 3.36 16.75 3.67 16.75 4.01V10.25Z"
        fill="currentColor"
      />
      <Path
        d="M8.99977 23.33C8.52977 23.33 8.08977 23.15 7.75977 22.81L6.09977 21.14C6.00977 21.05 5.86977 21.04 5.76977 21.12L4.05977 22.4C3.52977 22.8 2.82977 22.87 2.22977 22.57C1.62977 22.27 1.25977 21.67 1.25977 21V6C1.25977 2.98 2.98977 1.25 6.00977 1.25H18.0098C18.4198 1.25 18.7598 1.59 18.7598 2C18.7598 2.41 18.4198 2.75 18.0098 2.75C17.3198 2.75 16.7598 3.31 16.7598 4V21C16.7598 21.67 16.3898 22.27 15.7898 22.57C15.1898 22.87 14.4898 22.81 13.9598 22.41L12.2498 21.13C12.1498 21.05 12.0098 21.07 11.9298 21.15L10.2498 22.83C9.90977 23.15 9.46977 23.33 8.99977 23.33ZM5.90977 19.57C6.36977 19.57 6.81977 19.74 7.15977 20.09L8.81977 21.76C8.87977 21.82 8.95977 21.83 8.99977 21.83C9.03977 21.83 9.11977 21.82 9.17977 21.76L10.8598 20.08C11.4798 19.46 12.4598 19.4 13.1498 19.93L14.8498 21.2C14.9598 21.28 15.0598 21.25 15.1098 21.22C15.1598 21.19 15.2498 21.13 15.2498 21V4C15.2498 3.55 15.3598 3.12 15.5498 2.75H5.99977C3.77977 2.75 2.74977 3.78 2.74977 6V21C2.74977 21.14 2.83977 21.2 2.88977 21.23C2.94977 21.26 3.04977 21.28 3.14977 21.2L4.85977 19.92C5.16977 19.69 5.53977 19.57 5.90977 19.57Z"
        fill="currentColor"
      />
      <Path
        d="M11.4297 14.0801C10.8697 14.0801 10.4297 13.6301 10.4297 13.0801C10.4297 12.5301 10.8797 12.0801 11.4297 12.0801C11.9797 12.0801 12.4297 12.5301 12.4297 13.0801C12.4297 13.6301 11.9797 14.0801 11.4297 14.0801Z"
        fill="currentColor"
      />
      <Path
        d="M6.57031 10.0303C6.01031 10.0303 5.57031 9.58027 5.57031 9.03027C5.57031 8.48027 6.02031 8.03027 6.57031 8.03027C7.12031 8.03027 7.57031 8.48027 7.57031 9.03027C7.57031 9.58027 7.12031 10.0303 6.57031 10.0303Z"
        fill="currentColor"
      />
      <Path
        d="M6.27094 14.48C6.08094 14.48 5.89094 14.41 5.74094 14.26C5.45094 13.97 5.45094 13.49 5.74094 13.2L11.2009 7.73996C11.4909 7.44996 11.9709 7.44996 12.2609 7.73996C12.5509 8.02996 12.5509 8.50996 12.2609 8.79996L6.80094 14.26C6.66094 14.4 6.46094 14.48 6.27094 14.48Z"
        fill="currentColor"
      />
    </Svg>
  );
};

const ReceiptDiscountTwotone = ({
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
        d="M22 6V8.42C22 10 21 11 19.42 11H16V4.01C16 2.9 16.91 2 18.02 2C19.11 2.01 20.11 2.45 20.83 3.17C21.55 3.9 22 4.9 22 6Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M2 7V21C2 21.83 2.94 22.3 3.6 21.8L5.31 20.52C5.71 20.22 6.27 20.26 6.63 20.62L8.29 22.29C8.68 22.68 9.32 22.68 9.71 22.29L11.39 20.61C11.74 20.26 12.3 20.22 12.69 20.52L14.4 21.8C15.06 22.29 16 21.82 16 21V4C16 2.9 16.9 2 18 2H7H6C3 2 2 3.79 2 6V7Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        opacity="0.4"
        d="M6.26953 13.73L11.7295 8.27002"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        opacity="0.4"
        d="M11.9242 13.5H11.9332"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        opacity="0.4"
        d="M6.19373 8.5H6.20271"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

const variants: IconVariants = {
  bold: ReceiptDiscountBold,
  broken: ReceiptDiscountBroken,
  bulk: ReceiptDiscountBulk,
  linear: ReceiptDiscountLinear,
  outline: ReceiptDiscountOutline,
  twotone: ReceiptDiscountTwotone,
};

export const ReceiptDiscountIcon = ({
  variant = "linear",
  ...props
}: IconProps) => {
  const Component = variants[variant];
  return <Component {...props} />;
};
