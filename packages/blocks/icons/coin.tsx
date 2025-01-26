import { useContext } from "react";
import { Path, Svg } from "unative/lib/svg";
import { cn } from "unative/lib/utils";
import { TextClassContext } from "unative/ui/text";

import { iconDefaultOptions } from "../icons-configuration";
import type { IconProps, IconVariants } from "../types/icons-type";

const CoinBold = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M12 22.7484C8 22.7484 4.75 19.8784 4.75 16.3484V12.6484C4.75 12.2384 5.09 11.8984 5.5 11.8984C5.91 11.8984 6.25 12.2384 6.25 12.6484C6.25 15.2684 8.72 17.2484 12 17.2484C15.28 17.2484 17.75 15.2684 17.75 12.6484C17.75 12.2384 18.09 11.8984 18.5 11.8984C18.91 11.8984 19.25 12.2384 19.25 12.6484V16.3484C19.25 19.8784 16 22.7484 12 22.7484ZM6.25 16.4584C6.32 19.1084 8.87 21.2484 12 21.2484C15.13 21.2484 17.68 19.1084 17.75 16.4584C16.45 17.8684 14.39 18.7484 12 18.7484C9.61 18.7484 7.56 17.8684 6.25 16.4584Z"
        fill="currentColor"
      />
      <Path
        d="M12 13.75C9.24 13.75 6.75999 12.51 5.54999 10.51C5.02999 9.66 4.75 8.67 4.75 7.65C4.75 5.93 5.52 4.31 6.91 3.09C8.27 1.9 10.08 1.25 12 1.25C13.92 1.25 15.72 1.9 17.09 3.08C18.48 4.31 19.25 5.93 19.25 7.65C19.25 8.67 18.97 9.65 18.45 10.51C17.24 12.51 14.76 13.75 12 13.75ZM12 2.75C10.44 2.75 8.98001 3.27 7.89001 4.23C6.83001 5.15 6.25 6.37 6.25 7.65C6.25 8.4 6.44999 9.1 6.82999 9.73C7.77999 11.29 9.76 12.25 12 12.25C14.24 12.25 16.22 11.28 17.17 9.73C17.56 9.1 17.75 8.4 17.75 7.65C17.75 6.37 17.17 5.15 16.1 4.21C15.01 3.27 13.56 2.75 12 2.75Z"
        fill="currentColor"
      />
      <Path
        d="M12 18.75C7.87 18.75 4.75 16.13 4.75 12.65V7.65C4.75 4.12 8 1.25 12 1.25C13.92 1.25 15.72 1.9 17.09 3.08C18.48 4.31 19.25 5.93 19.25 7.65V12.65C19.25 16.13 16.13 18.75 12 18.75ZM12 2.75C8.83 2.75 6.25 4.95 6.25 7.65V12.65C6.25 15.27 8.72 17.25 12 17.25C15.28 17.25 17.75 15.27 17.75 12.65V7.65C17.75 6.37 17.17 5.15 16.1 4.21C15.01 3.27 13.56 2.75 12 2.75Z"
        fill="currentColor"
      />
    </Svg>
  );
};

const CoinBroken = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M12 21.9999C15.59 21.9999 18.5 19.4699 18.5 16.3499V12.6499C18.5 15.7699 15.59 17.9999 12 17.9999C8.41 17.9999 5.5 15.7699 5.5 12.6499V16.3499C5.5 18.0599 6.37 19.5899 7.75 20.6199"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M18.5 7.65C18.5 8.56 18.25 9.4 17.81 10.12C16.74 11.88 14.54 13 12 13C9.46 13 7.26 11.88 6.19 10.12C5.75 9.4 5.5 8.56 5.5 7.65C5.5 6.09 6.22999 4.68 7.39999 3.66C8.57999 2.63 10.2 2 12 2C13.8 2 15.42 2.63 16.6 3.65C17.77 4.68 18.5 6.09 18.5 7.65Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M18.5 7.65V12.65C18.5 15.77 15.59 18 12 18C8.41 18 5.5 15.77 5.5 12.65V7.65C5.5 4.53 8.41 2 12 2C13.8 2 15.42 2.63 16.6 3.65C17.77 4.68 18.5 6.09 18.5 7.65Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

const CoinBulk = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M18.5 12.6499V16.3499C18.5 19.4699 15.59 21.9999 12 21.9999C8.41 21.9999 5.5 19.4699 5.5 16.3499V12.6499C5.5 15.7699 8.41 17.9999 12 17.9999C15.59 17.9999 18.5 15.7699 18.5 12.6499Z"
        fill="currentColor"
      />
      <Path
        opacity="0.4"
        d="M18.5 7.6499V12.6499C18.5 15.7699 15.59 17.9999 12 17.9999C8.41 17.9999 5.5 15.7699 5.5 12.6499V7.6499C5.5 8.5599 5.75 9.3999 6.19 10.1199C7.26 11.8799 9.46 12.9999 12 12.9999C14.54 12.9999 16.74 11.8799 17.81 10.1199C18.25 9.3999 18.5 8.5599 18.5 7.6499Z"
        fill="currentColor"
      />
      <Path
        d="M18.5 7.65C18.5 8.56 18.25 9.4 17.81 10.12C16.74 11.88 14.54 13 12 13C9.46 13 7.26 11.88 6.19 10.12C5.75 9.4 5.5 8.56 5.5 7.65C5.5 4.53 8.41 2 12 2C13.8 2 15.42 2.63 16.6 3.65C17.77 4.68 18.5 6.09 18.5 7.65Z"
        fill="currentColor"
      />
    </Svg>
  );
};

const CoinLinear = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M18.5 12.6499V16.3499C18.5 19.4699 15.59 21.9999 12 21.9999C8.41 21.9999 5.5 19.4699 5.5 16.3499V12.6499C5.5 15.7699 8.41 17.9999 12 17.9999C15.59 17.9999 18.5 15.7699 18.5 12.6499Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M18.5 7.65C18.5 8.56 18.25 9.4 17.81 10.12C16.74 11.88 14.54 13 12 13C9.46 13 7.26 11.88 6.19 10.12C5.75 9.4 5.5 8.56 5.5 7.65C5.5 6.09 6.22999 4.68 7.39999 3.66C8.57999 2.63 10.2 2 12 2C13.8 2 15.42 2.63 16.6 3.65C17.77 4.68 18.5 6.09 18.5 7.65Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M18.5 7.65V12.65C18.5 15.77 15.59 18 12 18C8.41 18 5.5 15.77 5.5 12.65V7.65C5.5 4.53 8.41 2 12 2C13.8 2 15.42 2.63 16.6 3.65C17.77 4.68 18.5 6.09 18.5 7.65Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

const CoinOutline = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M10.84 13.5402H9.34C8.19 13.5402 7.26 12.5802 7.26 11.3902C7.26 10.9802 7.6 10.6402 8.01 10.6402C8.42 10.6402 8.76 10.9802 8.76 11.3902C8.76 11.7502 9.02 12.0402 9.34 12.0402H10.84C11.07 12.0402 11.25 11.8302 11.25 11.5702C11.25 11.2202 11.19 11.2002 10.96 11.1202L8.55 10.2802C7.68 9.9802 7.25 9.3702 7.25 8.4202C7.25 7.3402 8.11 6.4502 9.16 6.4502H10.66C11.81 6.4502 12.74 7.4102 12.74 8.6002C12.74 9.0102 12.4 9.3502 11.99 9.3502C11.58 9.3502 11.24 9.0102 11.24 8.6002C11.24 8.2402 10.98 7.9502 10.66 7.9502H9.16C8.93 7.9502 8.75 8.1602 8.75 8.4202C8.75 8.7702 8.81 8.7902 9.04 8.8702L11.45 9.7102C12.32 10.0202 12.74 10.6302 12.74 11.5702C12.75 12.6602 11.89 13.5402 10.84 13.5402Z"
        fill="currentColor"
      />
      <Path
        d="M10 14.3401C9.59 14.3401 9.25 14.0001 9.25 13.5901V12.8501C9.25 12.4401 9.59 12.1001 10 12.1001C10.41 12.1001 10.75 12.4401 10.75 12.8501V13.5901C10.75 14.0101 10.41 14.3401 10 14.3401Z"
        fill="currentColor"
      />
      <Path
        d="M10 7.94016C9.59 7.94016 9.25 7.60016 9.25 7.19016V6.41016C9.25 6.00016 9.59 5.66016 10 5.66016C10.41 5.66016 10.75 6.00016 10.75 6.41016V7.19016C10.75 7.60016 10.41 7.94016 10 7.94016Z"
        fill="currentColor"
      />
      <Path
        d="M9.99 18.7202C5.17 18.7202 1.25 14.8002 1.25 9.98023C1.25 5.16023 5.17 1.24023 9.99 1.24023C14.81 1.24023 18.73 5.16023 18.73 9.98023C18.73 14.8002 14.8 18.7202 9.99 18.7202ZM9.99 2.75023C6 2.75023 2.75 6.00023 2.75 9.99023C2.75 13.9802 6 17.2202 9.99 17.2202C13.98 17.2202 17.23 13.9702 17.23 9.98023C17.23 5.99023 13.98 2.75023 9.99 2.75023Z"
        fill="currentColor"
      />
      <Path
        d="M17.019 22.7198C15.169 22.7198 13.429 21.8198 12.359 20.2998C12.119 19.9598 12.199 19.4898 12.539 19.2498C12.879 19.0098 13.349 19.0898 13.589 19.4298C14.379 20.5498 15.659 21.2098 17.019 21.2098C19.339 21.2098 21.219 19.3298 21.219 17.0098C21.219 15.6598 20.559 14.3798 19.459 13.5898C19.119 13.3498 19.049 12.8798 19.289 12.5398C19.529 12.1998 19.999 12.1298 20.339 12.3698C21.829 13.4398 22.719 15.1698 22.719 17.0098C22.719 20.1698 20.169 22.7198 17.019 22.7198Z"
        fill="currentColor"
      />
    </Svg>
  );
};

const CoinTwotone = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M18.5 12.6499V16.3499C18.5 19.4699 15.59 21.9999 12 21.9999C8.41 21.9999 5.5 19.4699 5.5 16.3499V12.6499C5.5 15.7699 8.41 17.9999 12 17.9999C15.59 17.9999 18.5 15.7699 18.5 12.6499Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M18.5 7.65C18.5 8.56 18.25 9.4 17.81 10.12C16.74 11.88 14.54 13 12 13C9.46 13 7.26 11.88 6.19 10.12C5.75 9.4 5.5 8.56 5.5 7.65C5.5 6.09 6.22999 4.68 7.39999 3.66C8.57999 2.63 10.2 2 12 2C13.8 2 15.42 2.63 16.6 3.65C17.77 4.68 18.5 6.09 18.5 7.65Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M18.5 7.65V12.65C18.5 15.77 15.59 18 12 18C8.41 18 5.5 15.77 5.5 12.65V7.65C5.5 4.53 8.41 2 12 2C13.8 2 15.42 2.63 16.6 3.65C17.77 4.68 18.5 6.09 18.5 7.65Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

const variants: IconVariants = {
  bold: CoinBold,
  broken: CoinBroken,
  bulk: CoinBulk,
  linear: CoinLinear,
  outline: CoinOutline,
  twotone: CoinTwotone,
};

export const CoinIcon = ({
  variant = iconDefaultOptions.variant,
  className,
  ...props
}: IconProps) => {
  const textClasses = useContext(TextClassContext);
  const Component = variants[variant];
  return <Component className={cn(textClasses, className)} {...props} />;
};
