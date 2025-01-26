import { useContext } from "react";
import { G, Path, Svg } from "unative/lib/svg";
import { cn } from "unative/lib/utils";
import { TextClassContext } from "unative/ui/text";

import { iconDefaultOptions } from "../icons-configuration";
import type { IconProps, IconVariants } from "../types/icons-type";

const MoneyReciveBold = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M18.8086 6.25047H20.1686C19.9786 5.98047 19.7786 5.73047 19.5686 5.48047L18.8086 6.25047Z"
        fill="currentColor"
      />
      <Path
        d="M18.52 4.42031C18.27 4.21031 18.02 4.01031 17.75 3.82031V5.18031L18.52 4.42031Z"
        fill="currentColor"
      />
      <Path
        d="M19.5795 5.48141L22.5295 2.53141C22.8195 2.24141 22.8195 1.76141 22.5295 1.47141C22.2395 1.18141 21.7595 1.18141 21.4695 1.47141L18.5195 4.42141C18.8995 4.75141 19.2495 5.11141 19.5795 5.48141Z"
        fill="currentColor"
      />
      <Path
        d="M17.7517 3C17.7517 2.59 17.4117 2.25 17.0017 2.25C16.6017 2.25 16.2817 2.57 16.2617 2.96C16.7817 3.21 17.2817 3.49 17.7517 3.82V3Z"
        fill="currentColor"
      />
      <Path
        d="M21.7519 7C21.7519 6.59 21.4119 6.25 21.0019 6.25H20.1719C20.5019 6.72 20.7919 7.22 21.0319 7.74C21.4319 7.72 21.7519 7.4 21.7519 7Z"
        fill="currentColor"
      />
      <Path
        d="M12.75 14.7508H13.05C13.44 14.7508 13.75 14.4008 13.75 13.9708C13.75 13.4308 13.6 13.3508 13.26 13.2308L12.75 13.0508V14.7508Z"
        fill="currentColor"
      />
      <Path
        d="M21.04 7.74C21.03 7.74 21.02 7.75 21 7.75H17C16.9 7.75 16.81 7.73 16.71 7.69C16.53 7.61 16.38 7.47 16.3 7.28C16.27 7.19 16.25 7.1 16.25 7V3C16.25 2.99 16.26 2.98 16.26 2.96C14.96 2.35 13.52 2 12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 10.48 21.65 9.04 21.04 7.74ZM13.75 11.82C14.39 12.04 15.25 12.51 15.25 13.98C15.25 15.23 14.26 16.26 13.05 16.26H12.75V16.51C12.75 16.92 12.41 17.26 12 17.26C11.59 17.26 11.25 16.92 11.25 16.51V16.26H11.17C9.84 16.26 8.75 15.14 8.75 13.76C8.75 13.34 9.09 13 9.5 13C9.91 13 10.25 13.34 10.25 13.75C10.25 14.3 10.66 14.75 11.17 14.75H11.25V12.53L10.25 12.18C9.61 11.96 8.75 11.49 8.75 10.02C8.75 8.77 9.74 7.74 10.95 7.74H11.25V7.5C11.25 7.09 11.59 6.75 12 6.75C12.41 6.75 12.75 7.09 12.75 7.5V7.75H12.83C14.16 7.75 15.25 8.87 15.25 10.25C15.25 10.66 14.91 11 14.5 11C14.09 11 13.75 10.66 13.75 10.25C13.75 9.7 13.34 9.25 12.83 9.25H12.75V11.47L13.75 11.82Z"
        fill="currentColor"
      />
      <Path
        d="M10.25 10.03C10.25 10.57 10.4 10.65 10.74 10.77L11.25 10.95V9.25H10.95C10.57 9.25 10.25 9.6 10.25 10.03Z"
        fill="currentColor"
      />
    </Svg>
  );
};

const MoneyReciveBroken = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M9.5 13.75C9.5 14.72 10.25 15.5 11.17 15.5H13.05C13.85 15.5 14.5 14.82 14.5 13.97C14.5 13.06 14.1 12.73 13.51 12.52L10.5 11.47C9.91 11.26 9.51001 10.94 9.51001 10.02C9.51001 9.17999 10.16 8.48999 10.96 8.48999H12.84C13.76 8.48999 14.51 9.26999 14.51 10.24"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M12 7.5V16.5"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M17 3V7H21"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M22 2L17 7"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M12 2C6.48 2 2 6.48 2 12C2 15.94 4.28001 19.35 7.60001 20.98"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M22 12C22 17.52 17.52 22 12 22"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

const MoneyReciveBulk = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M18.8105 6.24998H20.1706C19.9806 5.97998 19.7806 5.72998 19.5706 5.47998L18.8105 6.24998Z"
        fill="currentColor"
      />
      <Path
        opacity="0.4"
        d="M18.52 4.41982C18.27 4.20982 18.02 4.00982 17.75 3.81982V5.17982L18.52 4.41982Z"
        fill="currentColor"
      />
      <Path
        opacity="0.4"
        d="M17 7.75C16.9 7.75 16.81 7.73 16.71 7.69C16.53 7.61 16.38 7.47 16.3 7.28C16.26 7.19 16.24 7.09 16.24 6.99V2.99C16.24 2.98 16.25 2.97 16.25 2.95C14.96 2.35 13.52 2 12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 10.48 21.65 9.04 21.04 7.74C21.03 7.74 21.02 7.75 21 7.75H17Z"
        fill="currentColor"
      />
      <Path
        d="M19.5795 5.47994L22.5295 2.52994C22.8195 2.23994 22.8195 1.75994 22.5295 1.46994C22.2395 1.17994 21.7595 1.17994 21.4695 1.46994L18.5195 4.41994C18.8995 4.74994 19.2495 5.10994 19.5795 5.47994Z"
        fill="currentColor"
      />
      <Path
        d="M17.7498 3C17.7498 2.59 17.4098 2.25 16.9998 2.25C16.5998 2.25 16.2798 2.57 16.2598 2.96C16.7798 3.21 17.2798 3.49 17.7498 3.82V3Z"
        fill="currentColor"
      />
      <Path
        d="M21.7499 7C21.7499 6.59 21.4099 6.25 20.9999 6.25H20.1699C20.4999 6.72 20.7899 7.22 21.0299 7.74C21.4299 7.72 21.7499 7.4 21.7499 7Z"
        fill="currentColor"
      />
      <Path
        d="M13.75 11.82L12.75 11.47V9.25H12.83C13.34 9.25 13.75 9.7 13.75 10.25C13.75 10.66 14.09 11 14.5 11C14.91 11 15.25 10.66 15.25 10.25C15.25 8.87 14.17 7.75 12.83 7.75H12.75V7.5C12.75 7.09 12.41 6.75 12 6.75C11.59 6.75 11.25 7.09 11.25 7.5V7.75H10.95C9.74001 7.75 8.75 8.77 8.75 10.03C8.75 11.49 9.6 11.96 10.25 12.19L11.25 12.54V14.76H11.17C10.66 14.76 10.25 14.31 10.25 13.76C10.25 13.35 9.91 13.01 9.5 13.01C9.09 13.01 8.75 13.35 8.75 13.76C8.75 15.14 9.83001 16.26 11.17 16.26H11.25V16.51C11.25 16.92 11.59 17.26 12 17.26C12.41 17.26 12.75 16.92 12.75 16.51V16.26H13.05C14.26 16.26 15.25 15.24 15.25 13.98C15.25 12.51 14.4 12.04 13.75 11.82ZM10.74 10.76C10.4 10.64 10.25 10.57 10.25 10.02C10.25 9.59 10.57 9.24 10.95 9.24H11.25V10.93L10.74 10.76ZM13.05 14.75H12.75V13.06L13.26 13.24C13.6 13.36 13.75 13.43 13.75 13.98C13.75 14.4 13.43 14.75 13.05 14.75Z"
        fill="currentColor"
      />
    </Svg>
  );
};

const MoneyReciveLinear = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M9.5 13.75C9.5 14.72 10.25 15.5 11.17 15.5H13.05C13.85 15.5 14.5 14.82 14.5 13.97C14.5 13.06 14.1 12.73 13.51 12.52L10.5 11.47C9.91 11.26 9.51001 10.94 9.51001 10.02C9.51001 9.17999 10.16 8.48999 10.96 8.48999H12.84C13.76 8.48999 14.51 9.26999 14.51 10.24"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M12 7.5V16.5"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M22 12C22 17.52 17.52 22 12 22C6.48 22 2 17.52 2 12C2 6.48 6.48 2 12 2"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M17 3V7H21"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M22 2L17 7"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

const MoneyReciveOutline = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M13.05 16.2502H11.17C9.84001 16.2502 8.75 15.1302 8.75 13.7502C8.75 13.3402 9.09 13.0002 9.5 13.0002C9.91 13.0002 10.25 13.3402 10.25 13.7502C10.25 14.3002 10.66 14.7502 11.17 14.7502H13.05C13.44 14.7502 13.75 14.4002 13.75 13.9702C13.75 13.4302 13.6 13.3502 13.26 13.2302L10.25 12.1802C9.61 11.9602 8.75 11.4902 8.75 10.0202C8.75 8.77023 9.74001 7.74023 10.95 7.74023H12.83C14.16 7.74023 15.25 8.86023 15.25 10.2402C15.25 10.6502 14.91 10.9902 14.5 10.9902C14.09 10.9902 13.75 10.6502 13.75 10.2402C13.75 9.69023 13.34 9.24023 12.83 9.24023H10.95C10.56 9.24023 10.25 9.59023 10.25 10.0202C10.25 10.5602 10.4 10.6402 10.74 10.7602L13.75 11.8102C14.39 12.0302 15.25 12.5002 15.25 13.9702C15.25 15.2302 14.26 16.2502 13.05 16.2502Z"
        fill="currentColor"
      />
      <Path
        d="M12 17.25C11.59 17.25 11.25 16.91 11.25 16.5V7.5C11.25 7.09 11.59 6.75 12 6.75C12.41 6.75 12.75 7.09 12.75 7.5V16.5C12.75 16.91 12.41 17.25 12 17.25Z"
        fill="currentColor"
      />
      <Path
        d="M12 22.75C6.07 22.75 1.25 17.93 1.25 12C1.25 6.07 6.07 1.25 12 1.25C12.41 1.25 12.75 1.59 12.75 2C12.75 2.41 12.41 2.75 12 2.75C6.9 2.75 2.75 6.9 2.75 12C2.75 17.1 6.9 21.25 12 21.25C17.1 21.25 21.25 17.1 21.25 12C21.25 11.59 21.59 11.25 22 11.25C22.41 11.25 22.75 11.59 22.75 12C22.75 17.93 17.93 22.75 12 22.75Z"
        fill="currentColor"
      />
      <Path
        d="M21 7.75H17C16.59 7.75 16.25 7.41 16.25 7V3C16.25 2.59 16.59 2.25 17 2.25C17.41 2.25 17.75 2.59 17.75 3V6.25H21C21.41 6.25 21.75 6.59 21.75 7C21.75 7.41 21.41 7.75 21 7.75Z"
        fill="currentColor"
      />
      <Path
        d="M16.9995 7.74994C16.8095 7.74994 16.6195 7.67994 16.4695 7.52994C16.1795 7.23994 16.1795 6.75994 16.4695 6.46994L21.4695 1.46994C21.7595 1.17994 22.2395 1.17994 22.5295 1.46994C22.8195 1.75994 22.8195 2.23994 22.5295 2.52994L17.5295 7.52994C17.3795 7.67994 17.1895 7.74994 16.9995 7.74994Z"
        fill="currentColor"
      />
    </Svg>
  );
};

const MoneyReciveTwotone = ({ size = 24, className, ...props }: IconProps) => {
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
          d="M9.5 13.7502C9.5 14.7202 10.25 15.5002 11.17 15.5002H13.05C13.85 15.5002 14.5 14.8202 14.5 13.9702C14.5 13.0602 14.1 12.7302 13.51 12.5202L10.5 11.4702C9.91 11.2602 9.51001 10.9402 9.51001 10.0202C9.51001 9.18023 10.16 8.49023 10.96 8.49023H12.84C13.76 8.49023 14.51 9.27023 14.51 10.2402"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <Path
          d="M12 7.5V16.5"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </G>
      <Path
        d="M22 12C22 17.52 17.52 22 12 22C6.48 22 2 17.52 2 12C2 6.48 6.48 2 12 2"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M17 3V7H21"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M22 2L17 7"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

const variants: IconVariants = {
  bold: MoneyReciveBold,
  broken: MoneyReciveBroken,
  bulk: MoneyReciveBulk,
  linear: MoneyReciveLinear,
  outline: MoneyReciveOutline,
  twotone: MoneyReciveTwotone,
};

export const MoneyReciveIcon = ({
  variant = iconDefaultOptions.variant,
  className,
  ...props
}: IconProps) => {
  const textClasses = useContext(TextClassContext);
  const Component = variants[variant];
  return <Component className={cn(textClasses, className)} {...props} />;
};
