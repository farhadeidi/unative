import { useContext } from "react";
import { cn } from "unative/lib/utils";
import { G, Path, Svg } from "unative/ui/svg";
import { TextClassContext } from "unative/ui/text";

import type { IconProps, IconVariants } from "../icon-options";
import { defaultOptions } from "../icon-options";

const Coin1Bold = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M21.9199 16.7486C21.5899 19.4086 19.4099 21.5886 16.7499 21.9186C15.1399 22.1186 13.6399 21.6786 12.4699 20.8186C11.7999 20.3286 11.9599 19.2886 12.7599 19.0486C15.7699 18.1386 18.1399 15.7586 19.0599 12.7486C19.2999 11.9586 20.3399 11.7986 20.8299 12.4586C21.6799 13.6386 22.1199 15.1386 21.9199 16.7486Z"
        fill="currentColor"
      />
      <Path
        d="M9.99 2C5.58 2 2 5.58 2 9.99C2 14.4 5.58 17.98 9.99 17.98C14.4 17.98 17.98 14.4 17.98 9.99C17.97 5.58 14.4 2 9.99 2ZM9.05 8.87L11.46 9.71C12.33 10.02 12.75 10.63 12.75 11.57C12.75 12.65 11.89 13.54 10.84 13.54H10.75V13.59C10.75 14 10.41 14.34 10 14.34C9.59 14.34 9.25 14 9.25 13.59V13.53C8.14 13.48 7.25 12.55 7.25 11.39C7.25 10.98 7.59 10.64 8 10.64C8.41 10.64 8.75 10.98 8.75 11.39C8.75 11.75 9.01 12.04 9.33 12.04H10.83C11.06 12.04 11.24 11.83 11.24 11.57C11.24 11.22 11.18 11.2 10.95 11.12L8.54 10.28C7.68 9.98 7.25 9.37 7.25 8.42C7.25 7.34 8.11 6.45 9.16 6.45H9.25V6.41C9.25 6 9.59 5.66 10 5.66C10.41 5.66 10.75 6 10.75 6.41V6.47C11.86 6.52 12.75 7.45 12.75 8.61C12.75 9.02 12.41 9.36 12 9.36C11.59 9.36 11.25 9.02 11.25 8.61C11.25 8.25 10.99 7.96 10.67 7.96H9.17C8.94 7.96 8.76 8.17 8.76 8.43C8.75 8.77 8.81 8.79 9.05 8.87Z"
        fill="currentColor"
      />
    </Svg>
  );
};

const Coin1Broken = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M8 11.4C8 12.17 8.6 12.8 9.33 12.8H10.83C11.47 12.8 11.99 12.25 11.99 11.58C11.99 10.85 11.67 10.59 11.2 10.42L8.8 9.57995C8.32 9.40995 8 9.14995 8 8.41995C8 7.74995 8.52 7.19995 9.16 7.19995H10.66C11.4 7.20995 12 7.82995 12 8.59995"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M10 12.8501V13.5901"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M10 6.40991V7.18991"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M6.07 3.02C7.23 2.37 8.56 2 9.99 2C14.4 2 17.98 5.58 17.98 9.99C17.98 14.4 14.4 17.98 9.99 17.98C5.58 17.98 2 14.4 2 9.99C2 8.76 2.28 7.59 2.78 6.55"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M12.9805 19.88C13.8805 21.15 15.3505 21.98 17.0305 21.98C19.7605 21.98 21.9805 19.76 21.9805 17.03C21.9805 15.37 21.1605 13.9 19.9105 13"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

const Coin1Bulk = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M9.99 17.98C14.4028 17.98 17.98 14.4028 17.98 9.99C17.98 5.57724 14.4028 2 9.99 2C5.57724 2 2 5.57724 2 9.99C2 14.4028 5.57724 17.98 9.99 17.98Z"
        fill="currentColor"
      />
      <Path
        d="M21.9701 15.9901C21.9701 19.2901 19.2901 21.9701 15.9901 21.9701C13.9501 21.9701 12.1601 20.9501 11.0801 19.4001C15.4401 18.9101 18.9101 15.4401 19.4001 11.0801C20.9501 12.1601 21.9701 13.9501 21.9701 15.9901Z"
        fill="currentColor"
      />
      <Path
        d="M11.45 9.71016L9.05 8.87016C8.81 8.79016 8.76 8.77016 8.76 8.42016C8.76 8.16016 8.94 7.95016 9.17 7.95016H10.67C10.99 7.95016 11.25 8.24016 11.25 8.60016C11.25 9.01016 11.59 9.35016 12 9.35016C12.41 9.35016 12.75 9.01016 12.75 8.60016C12.75 7.45016 11.86 6.51016 10.75 6.46016V6.41016C10.75 6.00016 10.41 5.66016 10 5.66016C9.59 5.66016 9.25 5.99016 9.25 6.41016V6.46016H9.16C8.11 6.46016 7.25 7.34016 7.25 8.43016C7.25 9.38016 7.67 9.99016 8.54 10.2902L10.95 11.1302C11.19 11.2102 11.24 11.2302 11.24 11.5802C11.24 11.8402 11.06 12.0502 10.83 12.0502H9.33C9.01 12.0502 8.75 11.7602 8.75 11.4002C8.75 10.9902 8.41 10.6502 8 10.6502C7.59 10.6502 7.25 10.9902 7.25 11.4002C7.25 12.5502 8.14 13.4902 9.25 13.5402V13.6002C9.25 14.0102 9.59 14.3502 10 14.3502C10.41 14.3502 10.75 14.0102 10.75 13.6002V13.5502H10.84C11.89 13.5502 12.75 12.6702 12.75 11.5802C12.75 10.6302 12.32 10.0202 11.45 9.71016Z"
        fill="currentColor"
      />
    </Svg>
  );
};

const Coin1Linear = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M8 11.4C8 12.17 8.6 12.8 9.33 12.8H10.83C11.47 12.8 11.99 12.25 11.99 11.58C11.99 10.85 11.67 10.59 11.2 10.42L8.8 9.57995C8.32 9.40995 8 9.14995 8 8.41995C8 7.74995 8.52 7.19995 9.16 7.19995H10.66C11.4 7.20995 12 7.82995 12 8.59995"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M10 12.8501V13.5901"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M10 6.40991V7.18991"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M9.99 17.98C14.4028 17.98 17.98 14.4028 17.98 9.99C17.98 5.57724 14.4028 2 9.99 2C5.57724 2 2 5.57724 2 9.99C2 14.4028 5.57724 17.98 9.99 17.98Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M12.98 19.88C13.88 21.15 15.35 21.98 17.03 21.98C19.76 21.98 21.98 19.76 21.98 17.03C21.98 15.37 21.16 13.9 19.91 13"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

const Coin1Outline = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M12 22.7499C8 22.7499 4.75 19.8799 4.75 16.3499V12.6499C4.75 12.2399 5.09 11.8999 5.5 11.8999C5.91 11.8999 6.25 12.2399 6.25 12.6499C6.25 15.2699 8.72 17.2499 12 17.2499C15.28 17.2499 17.75 15.2699 17.75 12.6499C17.75 12.2399 18.09 11.8999 18.5 11.8999C18.91 11.8999 19.25 12.2399 19.25 12.6499V16.3499C19.25 19.8799 16 22.7499 12 22.7499ZM6.25 16.4599C6.32 19.1099 8.87 21.2499 12 21.2499C15.13 21.2499 17.68 19.1099 17.75 16.4599C16.45 17.8699 14.39 18.7499 12 18.7499C9.61 18.7499 7.56 17.8699 6.25 16.4599Z"
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

const Coin1Twotone = ({ size = 24, className, ...props }: IconProps) => {
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
          d="M8 11.4002C8 12.1702 8.6 12.8002 9.33 12.8002H10.83C11.47 12.8002 11.99 12.2502 11.99 11.5802C11.99 10.8502 11.67 10.5902 11.2 10.4202L8.8 9.5802C8.32 9.4102 8 9.1502 8 8.4202C8 7.7502 8.52 7.2002 9.16 7.2002H10.66C11.4 7.2102 12 7.8302 12 8.6002"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <Path
          d="M10 12.8496V13.5896"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <Path
          d="M10 6.41016V7.19016"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </G>
      <Path
        d="M9.99 17.98C14.4028 17.98 17.98 14.4028 17.98 9.99C17.98 5.57724 14.4028 2 9.99 2C5.57724 2 2 5.57724 2 9.99C2 14.4028 5.57724 17.98 9.99 17.98Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        opacity="0.4"
        d="M12.9805 19.88C13.8805 21.15 15.3505 21.98 17.0305 21.98C19.7605 21.98 21.9805 19.76 21.9805 17.03C21.9805 15.37 21.1605 13.9 19.9105 13"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

const variants: IconVariants = {
  bold: Coin1Bold,
  broken: Coin1Broken,
  bulk: Coin1Bulk,
  linear: Coin1Linear,
  outline: Coin1Outline,
  twotone: Coin1Twotone,
};

export const Coin1Icon = ({
  variant = defaultOptions.variant,
  className,
  ...props
}: IconProps) => {
  const textClasses = useContext(TextClassContext);
  const Component = variants[variant];
  return <Component className={cn(textClasses, className)} {...props} />;
};

export default Coin1Icon;
