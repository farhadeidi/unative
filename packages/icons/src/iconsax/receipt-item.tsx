import { useContext } from "react";
import { cn } from "unative/lib/utils";
import { Path, Svg } from "unative/ui/svg";
import { TextClassContext } from "unative/ui/text";

import type { IconProps, IconVariants } from "../icon-options";
import { defaultOptions } from "../icon-options";

const ReceiptItemBold = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M7 2H6C3 2 2 3.79 2 6V7V21C2 21.83 2.94 22.3 3.6 21.8L5.31 20.52C5.71 20.22 6.27 20.26 6.63 20.62L8.29 22.29C8.68 22.68 9.32 22.68 9.71 22.29L11.39 20.61C11.74 20.26 12.3 20.22 12.69 20.52L14.4 21.8C15.06 22.29 16 21.82 16 21V4C16 2.9 16.9 2 18 2H7ZM5.97 14.01C5.42 14.01 4.97 13.56 4.97 13.01C4.97 12.46 5.42 12.01 5.97 12.01C6.52 12.01 6.97 12.46 6.97 13.01C6.97 13.56 6.52 14.01 5.97 14.01ZM5.97 10.01C5.42 10.01 4.97 9.56 4.97 9.01C4.97 8.46 5.42 8.01 5.97 8.01C6.52 8.01 6.97 8.46 6.97 9.01C6.97 9.56 6.52 10.01 5.97 10.01ZM12 13.76H9C8.59 13.76 8.25 13.42 8.25 13.01C8.25 12.6 8.59 12.26 9 12.26H12C12.41 12.26 12.75 12.6 12.75 13.01C12.75 13.42 12.41 13.76 12 13.76ZM12 9.76H9C8.59 9.76 8.25 9.42 8.25 9.01C8.25 8.6 8.59 8.26 9 8.26H12C12.41 8.26 12.75 8.6 12.75 9.01C12.75 9.42 12.41 9.76 12 9.76Z"
        fill="currentColor"
      />
      <Path
        d="M18.01 2V3.5C18.67 3.5 19.3 3.77 19.76 4.22C20.24 4.71 20.5 5.34 20.5 6V8.42C20.5 9.16 20.17 9.5 19.42 9.5H17.5V4.01C17.5 3.73 17.73 3.5 18.01 3.5V2ZM18.01 2C16.9 2 16 2.9 16 4.01V11H19.42C21 11 22 10 22 8.42V6C22 4.9 21.55 3.9 20.83 3.17C20.1 2.45 19.11 2.01 18.01 2C18.02 2 18.01 2 18.01 2Z"
        fill="currentColor"
      />
    </Svg>
  );
};

const ReceiptItemBroken = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M9 13.0098H12"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M9 9.00977H12"
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
        d="M5.99609 13H6.00508"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M5.99451 9H6.00349"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

const ReceiptItemBulk = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M12 12.2598H9C8.59 12.2598 8.25 12.5998 8.25 13.0098C8.25 13.4198 8.59 13.7598 9 13.7598H12C12.41 13.7598 12.75 13.4198 12.75 13.0098C12.75 12.5998 12.41 12.2598 12 12.2598Z"
        fill="currentColor"
      />
      <Path
        d="M9 9.75977H12C12.41 9.75977 12.75 9.41977 12.75 9.00977C12.75 8.59977 12.41 8.25977 12 8.25977H9C8.59 8.25977 8.25 8.59977 8.25 9.00977C8.25 9.41977 8.59 9.75977 9 9.75977Z"
        fill="currentColor"
      />
      <Path
        d="M5.9707 8.00977C5.4107 8.00977 4.9707 8.45977 4.9707 9.00977C4.9707 9.55977 5.4207 10.0098 5.9707 10.0098C6.5207 10.0098 6.9707 9.55977 6.9707 9.00977C6.9707 8.45977 6.5207 8.00977 5.9707 8.00977Z"
        fill="currentColor"
      />
      <Path
        d="M5.9707 12.0098C5.4107 12.0098 4.9707 12.4598 4.9707 13.0098C4.9707 13.5598 5.4207 14.0098 5.9707 14.0098C6.5207 14.0098 6.9707 13.5598 6.9707 13.0098C6.9707 12.4598 6.5207 12.0098 5.9707 12.0098Z"
        fill="currentColor"
      />
    </Svg>
  );
};

const ReceiptItemLinear = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M9 13.01H12"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M9 9.01001H12"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M5.99561 13H6.00459"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M5.99561 9H6.00459"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

const ReceiptItemOutline = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M9 23.33C8.53 23.33 8.09 23.15 7.76 22.81L6.1 21.14C6.01 21.05 5.87 21.04 5.77 21.12L4.05 22.4C3.52 22.8 2.82 22.87 2.22 22.57C1.62 22.27 1.25 21.67 1.25 21V6C1.25 2.98 2.98 1.25 6 1.25H18C18.41 1.25 18.75 1.59 18.75 2C18.75 2.41 18.41 2.75 18 2.75C17.31 2.75 16.75 3.31 16.75 4V21C16.75 21.67 16.38 22.27 15.78 22.57C15.18 22.87 14.48 22.81 13.95 22.41L12.24 21.13C12.14 21.05 12 21.07 11.92 21.15L10.24 22.83C9.91 23.15 9.47 23.33 9 23.33ZM5.91 19.57C6.37 19.57 6.82 19.74 7.16 20.09L8.82 21.76C8.88 21.82 8.96 21.83 9 21.83C9.04 21.83 9.12 21.82 9.18 21.76L10.86 20.08C11.48 19.46 12.46 19.4 13.15 19.93L14.85 21.2C14.96 21.28 15.06 21.25 15.11 21.22C15.16 21.19 15.25 21.13 15.25 21V4C15.25 3.55 15.36 3.12 15.55 2.75H6C3.78 2.75 2.75 3.78 2.75 6V21C2.75 21.14 2.84 21.2 2.89 21.23C2.95 21.26 3.05 21.28 3.15 21.2L4.86 19.92C5.17 19.69 5.54 19.57 5.91 19.57Z"
        fill="currentColor"
      />
      <Path
        d="M12 13.7598H9C8.59 13.7598 8.25 13.4198 8.25 13.0098C8.25 12.5998 8.59 12.2598 9 12.2598H12C12.41 12.2598 12.75 12.5998 12.75 13.0098C12.75 13.4198 12.41 13.7598 12 13.7598Z"
        fill="currentColor"
      />
      <Path
        d="M12 9.75977H9C8.59 9.75977 8.25 9.41977 8.25 9.00977C8.25 8.59977 8.59 8.25977 9 8.25977H12C12.41 8.25977 12.75 8.59977 12.75 9.00977C12.75 9.41977 12.41 9.75977 12 9.75977Z"
        fill="currentColor"
      />
      <Path
        d="M5.9707 10.0098C5.4207 10.0098 4.9707 9.55977 4.9707 9.00977C4.9707 8.45977 5.4207 8.00977 5.9707 8.00977C6.5207 8.00977 6.9707 8.45977 6.9707 9.00977C6.9707 9.55977 6.5207 10.0098 5.9707 10.0098Z"
        fill="currentColor"
      />
      <Path
        d="M5.9707 14.0098C5.4207 14.0098 4.9707 13.5598 4.9707 13.0098C4.9707 12.4598 5.4207 12.0098 5.9707 12.0098C6.5207 12.0098 6.9707 12.4598 6.9707 13.0098C6.9707 13.5598 6.5207 14.0098 5.9707 14.0098Z"
        fill="currentColor"
      />
    </Svg>
  );
};

const ReceiptItemTwotone = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M9 13.0098H12"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        opacity="0.4"
        d="M9 9.00977H12"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        opacity="0.4"
        d="M5.99609 13H6.00508"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        opacity="0.4"
        d="M5.99451 9H6.00349"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

const variants: IconVariants = {
  bold: ReceiptItemBold,
  broken: ReceiptItemBroken,
  bulk: ReceiptItemBulk,
  linear: ReceiptItemLinear,
  outline: ReceiptItemOutline,
  twotone: ReceiptItemTwotone,
};

export const ReceiptItemIcon = ({
  variant = defaultOptions.variant,
  className,
  ...props
}: IconProps) => {
  const textClasses = useContext(TextClassContext);
  const Component = variants[variant];
  return <Component className={cn(textClasses, className)} {...props} />;
};

export default ReceiptItemIcon;
