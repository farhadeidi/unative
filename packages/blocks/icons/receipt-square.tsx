import { useContext } from "react";
import { Path, Svg } from "unative/lib/svg";
import { cn } from "unative/lib/utils";
import { TextClassContext } from "unative/ui/text";

import { iconDefaultOptions } from "../icons-configuration";
import type { IconProps, IconVariants } from "../types/icons-type";

const ReceiptSquareBold = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M16.19 2H7.81C4.17 2 2 4.17 2 7.81V16.18C2 19.83 4.17 22 7.81 22H16.18C19.82 22 21.99 19.83 21.99 16.19V7.81C22 4.17 19.83 2 16.19 2ZM17 15.71C17 17.28 16.14 17.65 15.1 16.53C14.62 16.02 13.88 16.06 13.46 16.62L12.87 17.41C12.4 18.04 11.62 18.04 11.15 17.41L10.55 16.61C10.13 16.05 9.39 16.01 8.91 16.52C7.86 17.64 7 17.27 7 15.71V9.08C7 6.71 7.56 6.12 9.78 6.12H14.22C16.44 6.12 17 6.71 17 9.08V15.71Z"
        fill="currentColor"
      />
    </Svg>
  );
};

const ReceiptSquareBroken = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M2 12.94V15C2 20 4 22 9 22H15C20 22 22 20 22 15V9C22 4 20 2 15 2H9C4 2 2 4 2 9"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M16.9998 13.0401V15.7001C16.9998 17.2701 16.1398 17.6401 15.0998 16.5201C14.6198 16.0101 13.8797 16.0501 13.4597 16.6101L12.8597 17.4101C12.3897 18.0401 11.6098 18.0401 11.1398 17.4101L10.5497 16.6201C10.1297 16.0601 9.38976 16.0201 8.90976 16.5301C7.85976 17.6501 7.00977 17.2801 7.00977 15.7101V9.08012C7.00977 6.71012 7.56976 6.12012 9.78976 6.12012H14.2298C16.4498 6.12012 17.0098 6.71012 17.0098 9.08012"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

const ReceiptSquareBulk = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M8.90024 16.5299C9.38024 16.0099 10.1203 16.0499 10.5403 16.6199L11.1403 17.4199C11.6103 18.0499 12.3902 18.0499 12.8602 17.4199L13.4503 16.6299C13.8703 16.0699 14.6102 16.0299 15.0902 16.5399C16.1402 17.6599 16.9902 17.2899 16.9902 15.7199V9.08988C16.9902 6.71988 16.4302 6.12988 14.2102 6.12988H9.77023C7.55023 6.12988 6.99023 6.71988 6.99023 9.08988V15.7199C7.00023 17.2699 7.86024 17.6399 8.90024 16.5299Z"
        fill="currentColor"
      />
      <Path
        opacity="0.4"
        d="M16.1898 2H7.81976C4.17976 2 2.00977 4.17 2.00977 7.81V16.18C2.00977 19.82 4.17976 21.99 7.81976 21.99H16.1898C19.8298 21.99 21.9998 19.82 21.9998 16.18V7.81C21.9998 4.17 19.8298 2 16.1898 2Z"
        fill="currentColor"
      />
    </Svg>
  );
};

const ReceiptSquareLinear = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M9 22H15C20 22 22 20 22 15V9C22 4 20 2 15 2H9C4 2 2 4 2 9V15C2 20 4 22 9 22Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M8.89999 16.5299C9.37999 16.0099 10.12 16.0499 10.54 16.6199L11.14 17.4199C11.61 18.0499 12.39 18.0499 12.86 17.4199L13.45 16.6299C13.87 16.0699 14.61 16.0299 15.09 16.5399C16.14 17.6599 16.99 17.2899 16.99 15.7199V9.08987C16.99 6.71987 16.43 6.12988 14.21 6.12988H9.76999C7.54999 6.12988 6.98999 6.71987 6.98999 9.08987V15.7199C6.99999 17.2699 7.85999 17.6399 8.89999 16.5299Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

const ReceiptSquareOutline = ({
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
        d="M15 22.75H9C3.57 22.75 1.25 20.43 1.25 15V9C1.25 3.57 3.57 1.25 9 1.25H15C20.43 1.25 22.75 3.57 22.75 9V15C22.75 20.43 20.43 22.75 15 22.75ZM9 2.75C4.39 2.75 2.75 4.39 2.75 9V15C2.75 19.61 4.39 21.25 9 21.25H15C19.61 21.25 21.25 19.61 21.25 15V9C21.25 4.39 19.61 2.75 15 2.75H9Z"
        fill="currentColor"
      />
      <Path
        d="M12 18.6299C11.44 18.6299 10.91 18.3499 10.54 17.8599L9.94 17.0599C9.87 16.9699 9.79001 16.9199 9.70001 16.9099C9.61001 16.9099 9.53001 16.9499 9.45001 17.0299L8.89999 16.5199L9.45001 17.0299C8.48001 18.0699 7.68999 17.9699 7.29999 17.8199C6.90999 17.6599 6.25 17.1799 6.25 15.6999V9.06987C6.25 6.28987 7.14 5.35986 9.78 5.35986H14.23C16.87 5.35986 17.76 6.29987 17.76 9.06987V15.6999C17.76 17.1799 17.1 17.6699 16.71 17.8199C16.33 17.9699 15.54 18.0699 14.56 17.0299C14.48 16.9499 14.39 16.9099 14.3 16.9099C14.21 16.9099 14.13 16.9699 14.06 17.0599L13.47 17.8499C13.09 18.3499 12.56 18.6299 12 18.6299ZM9.69 15.4099C9.72 15.4099 9.75 15.4099 9.78 15.4099C10.31 15.4399 10.8 15.7099 11.13 16.1599L11.73 16.9599C11.9 17.1799 12.09 17.1799 12.25 16.9599L12.84 16.1699C13.17 15.7199 13.67 15.4499 14.2 15.4199C14.72 15.3799 15.25 15.6099 15.63 16.0199C15.91 16.3199 16.09 16.3999 16.16 16.4199C16.15 16.3699 16.24 16.1699 16.24 15.7099V9.07986C16.24 7.02986 15.93 6.86986 14.21 6.86986H9.76001C8.04001 6.86986 7.73001 7.02986 7.73001 9.07986V15.7099C7.73001 16.1699 7.82001 16.3699 7.85001 16.4299C7.88001 16.3899 8.05999 16.3099 8.32999 16.0099C8.32999 15.9999 8.34001 15.9999 8.35001 15.9899C8.72001 15.6299 9.2 15.4099 9.69 15.4099Z"
        fill="currentColor"
      />
    </Svg>
  );
};

const ReceiptSquareTwotone = ({
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
        d="M9 22H15C20 22 22 20 22 15V9C22 4 20 2 15 2H9C4 2 2 4 2 9V15C2 20 4 22 9 22Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        opacity="0.4"
        d="M8.90024 16.5299C9.38024 16.0099 10.1203 16.0499 10.5403 16.6199L11.1403 17.4199C11.6103 18.0499 12.3902 18.0499 12.8602 17.4199L13.4503 16.6299C13.8703 16.0699 14.6102 16.0299 15.0902 16.5399C16.1402 17.6599 16.9902 17.2899 16.9902 15.7199V9.08987C16.9902 6.71987 16.4302 6.12988 14.2102 6.12988H9.77023C7.55023 6.12988 6.99023 6.71987 6.99023 9.08987V15.7199C7.00023 17.2699 7.86024 17.6399 8.90024 16.5299Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

const variants: IconVariants = {
  bold: ReceiptSquareBold,
  broken: ReceiptSquareBroken,
  bulk: ReceiptSquareBulk,
  linear: ReceiptSquareLinear,
  outline: ReceiptSquareOutline,
  twotone: ReceiptSquareTwotone,
};

export const ReceiptSquareIcon = ({
  variant = iconDefaultOptions.variant,
  className,
  ...props
}: IconProps) => {
  const textClasses = useContext(TextClassContext);
  const Component = variants[variant];
  return <Component className={cn(textClasses, className)} {...props} />;
};
