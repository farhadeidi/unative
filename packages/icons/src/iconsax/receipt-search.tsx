import { useContext } from "react";
import { cn } from "unative/lib/utils";
import { Path, Svg } from "unative/ui/svg";
import { TextClassContext } from "unative/ui/text";

import type { IconProps, IconVariants } from "../icon-options";
import { defaultOptions } from "../icon-options";

const ReceiptSearchBold = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M15.78 2H8.22C4.44 2 3.5 3.01 3.5 7.04V18.3C3.5 20.96 4.96 21.59 6.73 19.69L6.74 19.68C7.56 18.81 8.81 18.88 9.52 19.83L10.53 21.18C11.34 22.25 12.65 22.25 13.46 21.18L14.47 19.83C15.19 18.87 16.44 18.8 17.26 19.68C19.04 21.58 20.49 20.95 20.49 18.29V7.04C20.5 3.01 19.56 2 15.78 2ZM15.66 14.53C15.51 14.68 15.32 14.75 15.13 14.75C14.94 14.75 14.75 14.68 14.6 14.53L13.86 13.79C13.28 14.17 12.58 14.4 11.83 14.4C9.79 14.4 8.13 12.74 8.13 10.7C8.13 8.66 9.78 7 11.83 7C13.88 7 15.53 8.66 15.53 10.7C15.53 11.45 15.3 12.15 14.92 12.73L15.66 13.47C15.95 13.76 15.95 14.24 15.66 14.53Z"
        fill="currentColor"
      />
    </Svg>
  );
};

const ReceiptSearchBroken = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M3.5 11V18.3C3.5 20.96 4.96001 21.59 6.73001 19.69L6.73999 19.68C7.55999 18.81 8.80999 18.88 9.51999 19.83L10.53 21.18"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M20.5 11.3V7.04001C20.5 3.01001 19.56 2 15.78 2H8.22C4.44 2 3.5 3.01001 3.5 7.04001"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M18.2 21.4C19.9673 21.4 21.4 19.9673 21.4 18.2C21.4 16.4327 19.9673 15 18.2 15C16.4327 15 15 16.4327 15 18.2C15 19.9673 16.4327 21.4 18.2 21.4Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M22 22L21 21"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M8 7H16"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M9 11H15"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

const ReceiptSearchBulk = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M6.73026 19.6998C7.55026 18.8198 8.80023 18.8898 9.52023 19.8498L10.5302 21.1998C11.3402 22.2698 12.6502 22.2698 13.4602 21.1998L14.4702 19.8498C15.1902 18.8898 16.4403 18.8198 17.2603 19.6998C19.0403 21.5998 20.4902 20.9698 20.4902 18.3098V7.04974C20.4902 3.01974 19.5502 2.00977 15.7702 2.00977H8.21024C4.43024 2.00977 3.49023 3.01974 3.49023 7.04974V18.3098C3.50023 20.9698 4.96026 21.5898 6.73026 19.6998Z"
        fill="currentColor"
      />
      <Path
        d="M15.6609 13.47L14.9209 12.73C15.3009 12.15 15.5309 11.45 15.5309 10.7C15.5309 8.66001 13.8708 7 11.8308 7C9.79084 7 8.13086 8.66001 8.13086 10.7C8.13086 12.74 9.79084 14.4 11.8308 14.4C12.5808 14.4 13.2808 14.17 13.8608 13.79L14.6009 14.53C14.7509 14.68 14.9409 14.75 15.1309 14.75C15.3209 14.75 15.5109 14.68 15.6609 14.53C15.9509 14.24 15.9509 13.76 15.6609 13.47Z"
        fill="currentColor"
      />
    </Svg>
  );
};

const ReceiptSearchLinear = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M20.5 11.3V7.04001C20.5 3.01001 19.56 2 15.78 2H8.22C4.44 2 3.5 3.01001 3.5 7.04001V18.3C3.5 20.96 4.96001 21.59 6.73001 19.69L6.73999 19.68C7.55999 18.81 8.80999 18.88 9.51999 19.83L10.53 21.18"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M18.2 21.4C19.9673 21.4 21.4 19.9673 21.4 18.2C21.4 16.4327 19.9673 15 18.2 15C16.4327 15 15 16.4327 15 18.2C15 19.9673 16.4327 21.4 18.2 21.4Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M22 22L21 21"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M8 7H16"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M9 11H15"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

const ReceiptSearchOutline = ({
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
        d="M10.5396 21.94C10.3096 21.94 10.0895 21.84 9.93954 21.64L8.92953 20.29C8.71953 20.01 8.43956 19.85 8.13956 19.83C7.83956 19.81 7.53953 19.95 7.29953 20.2C5.84953 21.75 4.74954 21.62 4.21954 21.42C3.67954 21.21 2.76953 20.52 2.76953 18.3V7.04001C2.76953 2.60001 4.04953 1.25 8.23953 1.25H15.7896C19.9796 1.25 21.2596 2.60001 21.2596 7.04001V11.3C21.2596 11.71 20.9196 12.05 20.5096 12.05C20.0996 12.05 19.7596 11.71 19.7596 11.3V7.04001C19.7596 3.43001 19.1296 2.75 15.7896 2.75H8.23953C4.89953 2.75 4.26953 3.43001 4.26953 7.04001V18.3C4.26953 19.35 4.52953 19.93 4.76953 20.02C4.94953 20.09 5.43955 19.99 6.19955 19.18C6.74955 18.6 7.46954 18.29 8.21954 18.33C8.95954 18.37 9.65955 18.76 10.1295 19.39L11.1495 20.74C11.3995 21.07 11.3295 21.54 10.9995 21.79C10.8495 21.9 10.6896 21.94 10.5396 21.94Z"
        fill="currentColor"
      />
      <Path
        d="M18.2 22.15C16.02 22.15 14.25 20.38 14.25 18.2C14.25 16.02 16.02 14.25 18.2 14.25C20.38 14.25 22.15 16.02 22.15 18.2C22.15 20.38 20.38 22.15 18.2 22.15ZM18.2 15.75C16.85 15.75 15.75 16.85 15.75 18.2C15.75 19.55 16.85 20.65 18.2 20.65C19.55 20.65 20.65 19.55 20.65 18.2C20.65 16.85 19.55 15.75 18.2 15.75Z"
        fill="currentColor"
      />
      <Path
        d="M21.9995 22.7499C21.8095 22.7499 21.6195 22.6799 21.4695 22.5299L20.4695 21.5299C20.1795 21.2399 20.1795 20.7599 20.4695 20.4699C20.7595 20.1799 21.2395 20.1799 21.5295 20.4699L22.5295 21.4699C22.8195 21.7599 22.8195 22.2399 22.5295 22.5299C22.3795 22.6799 22.1895 22.7499 21.9995 22.7499Z"
        fill="currentColor"
      />
      <Path
        d="M16 7.75H8C7.59 7.75 7.25 7.41 7.25 7C7.25 6.59 7.59 6.25 8 6.25H16C16.41 6.25 16.75 6.59 16.75 7C16.75 7.41 16.41 7.75 16 7.75Z"
        fill="currentColor"
      />
      <Path
        d="M15 11.75H9C8.59 11.75 8.25 11.41 8.25 11C8.25 10.59 8.59 10.25 9 10.25H15C15.41 10.25 15.75 10.59 15.75 11C15.75 11.41 15.41 11.75 15 11.75Z"
        fill="currentColor"
      />
    </Svg>
  );
};

const ReceiptSearchTwotone = ({
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
        d="M20.5 11.3V7.04001C20.5 3.01001 19.56 2 15.78 2H8.22C4.44 2 3.5 3.01001 3.5 7.04001V18.3C3.5 20.96 4.96001 21.59 6.73001 19.69L6.73999 19.68C7.55999 18.81 8.80999 18.88 9.51999 19.83L10.53 21.18"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M18.2 21.4C19.9673 21.4 21.4 19.9673 21.4 18.2C21.4 16.4327 19.9673 15 18.2 15C16.4327 15 15 16.4327 15 18.2C15 19.9673 16.4327 21.4 18.2 21.4Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M22 22L21 21"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        opacity="0.4"
        d="M8 7H16"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        opacity="0.4"
        d="M9 11H15"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

const variants: IconVariants = {
  bold: ReceiptSearchBold,
  broken: ReceiptSearchBroken,
  bulk: ReceiptSearchBulk,
  linear: ReceiptSearchLinear,
  outline: ReceiptSearchOutline,
  twotone: ReceiptSearchTwotone,
};

export const ReceiptSearchIcon = ({
  variant = defaultOptions.variant,
  className,
  ...props
}: IconProps) => {
  const textClasses = useContext(TextClassContext);
  const Component = variants[variant];
  return <Component className={cn(textClasses, className)} {...props} />;
};

export default ReceiptSearchIcon;
