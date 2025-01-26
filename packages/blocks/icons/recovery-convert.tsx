import { useContext } from "react";
import { Path, Svg } from "unative/lib/svg";
import { cn } from "unative/lib/utils";
import { TextClassContext } from "unative/ui/text";

import { iconDefaultOptions } from "../icons-configuration";
import type { IconProps, IconVariants } from "../types/icons-type";

const RecoveryConvertBold = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M15.0002 22.7483C14.7302 22.7483 14.4802 22.5983 14.3502 22.3683C14.2202 22.1283 14.2202 21.8483 14.3602 21.6083L15.4102 19.8583C15.6202 19.4983 16.0902 19.3883 16.4402 19.5983C16.8002 19.8083 16.9102 20.2683 16.7002 20.6283L16.4302 21.0783C19.1902 20.4283 21.2602 17.9483 21.2602 14.9883C21.2602 14.5783 21.6002 14.2383 22.0102 14.2383C22.4202 14.2383 22.7602 14.5783 22.7602 14.9883C22.7502 19.2683 19.2702 22.7483 15.0002 22.7483Z"
        fill="currentColor"
      />
      <Path
        d="M2 9.75C1.59 9.75 1.25 9.41 1.25 9C1.25 4.73 4.73 1.25 9 1.25C9.27 1.25 9.52 1.4 9.65 1.63C9.78 1.87 9.78 2.15 9.64 2.39L8.59 4.14C8.38 4.49 7.92 4.61 7.56 4.39C7.21 4.18 7.09 3.72 7.31 3.36L7.58 2.91C4.81 3.56 2.75 6.04 2.75 9C2.75 9.41 2.41 9.75 2 9.75Z"
        fill="currentColor"
      />
      <Path
        d="M14.8 12.6292V15.5692C14.8 18.0192 13.82 18.9992 11.37 18.9992H8.43C5.98 18.9992 5 18.0192 5 15.5692V12.6292C5 10.1792 5.98 9.19922 8.43 9.19922H11.37C13.82 9.19922 14.8 10.1792 14.8 12.6292Z"
        fill="currentColor"
      />
      <Path
        d="M15.5709 5H12.6309C10.2209 5 9.24094 5.96 9.21094 8.32H11.3709C14.3109 8.32 15.6709 9.69 15.6709 12.62V14.78C18.0409 14.75 18.9909 13.77 18.9909 11.36V8.43C19.0009 5.98 18.0209 5 15.5709 5Z"
        fill="currentColor"
      />
    </Svg>
  );
};

const RecoveryConvertBroken = ({
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
        d="M5.5293 15.9799C5.6993 17.7699 6.6393 18.4999 8.6893 18.4999H11.4193C13.6993 18.4999 14.6093 17.5899 14.6093 15.3099V12.5799C14.6093 10.3099 13.6993 9.3999 11.4193 9.3999H8.6893C6.6193 9.3999 5.6793 10.1499 5.5293 11.9999"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M18.5004 8.68V11.41C18.5004 13.69 17.5904 14.6 15.3104 14.6H14.6004V12.58C14.6004 10.31 13.6904 9.4 11.4104 9.4H9.40039V8.68C9.40039 6.4 10.3104 5.5 12.5904 5.5H15.3204C17.5904 5.5 18.5004 6.41 18.5004 8.68Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M22 15C22 18.87 18.87 22 15 22L16.05 20.25"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M2 9C2 5.13 5.13 2 9 2L7.95 3.75"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

const RecoveryConvertBulk = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M15.0002 22.7502C14.7302 22.7502 14.4802 22.6002 14.3502 22.3702C14.2202 22.1302 14.2202 21.8502 14.3602 21.6102L15.4102 19.8602C15.6202 19.5002 16.0902 19.3902 16.4402 19.6002C16.8002 19.8102 16.9102 20.2702 16.7002 20.6302L16.4302 21.0802C19.1902 20.4302 21.2602 17.9502 21.2602 14.9902C21.2602 14.5802 21.6002 14.2402 22.0102 14.2402C22.4202 14.2402 22.7602 14.5802 22.7602 14.9902C22.7502 19.2702 19.2702 22.7502 15.0002 22.7502Z"
        fill="currentColor"
      />
      <Path
        d="M2 9.75C1.59 9.75 1.25 9.41 1.25 9C1.25 4.73 4.73 1.25 9 1.25C9.27 1.25 9.52 1.4 9.65 1.63C9.78 1.87 9.78 2.15 9.64 2.39L8.59 4.14C8.38 4.49 7.92 4.61 7.56 4.39C7.21 4.18 7.09 3.72 7.31 3.36L7.58 2.91C4.81 3.56 2.75 6.04 2.75 9C2.75 9.41 2.41 9.75 2 9.75Z"
        fill="currentColor"
      />
      <Path
        opacity="0.4"
        d="M14.8 12.6302V15.5702C14.8 18.0202 13.82 19.0002 11.37 19.0002H8.43C5.98 19.0002 5 18.0202 5 15.5702V12.6302C5 10.1802 5.98 9.2002 8.43 9.2002H11.37C13.82 9.2002 14.8 10.1802 14.8 12.6302Z"
        fill="currentColor"
      />
      <Path
        opacity="0.4"
        d="M15.5709 5H12.6309C10.2209 5 9.24094 5.96 9.21094 8.32H11.3709C14.3109 8.32 15.6709 9.69 15.6709 12.62V14.78C18.0409 14.75 18.9909 13.77 18.9909 11.36V8.43C19.0009 5.98 18.0209 5 15.5709 5Z"
        fill="currentColor"
      />
    </Svg>
  );
};

const RecoveryConvertLinear = ({
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
        d="M13.6 11.5799V14.3099C13.6 16.5899 12.69 17.4999 10.41 17.4999H7.69C5.42 17.4999 4.5 16.5899 4.5 14.3099V11.5799C4.5 9.3099 5.41 8.3999 7.69 8.3999H10.42C12.69 8.3999 13.6 9.3099 13.6 11.5799Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M17.5 7.68V10.41C17.5 12.69 16.59 13.6 14.31 13.6H13.6V11.58C13.6 9.31 12.69 8.4 10.41 8.4H8.39999V7.68C8.39999 5.4 9.30999 4.5 11.59 4.5H14.32C16.59 4.5 17.5 5.41 17.5 7.68Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M21 14C21 17.87 17.87 21 14 21L15.05 19.25"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M1 8C1 4.13 4.13 1 8 1L6.95 2.75"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

const RecoveryConvertOutline = ({
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
        d="M11.42 19.2499H8.69C6 19.2499 4.75 17.9999 4.75 15.3099V12.5799C4.75 9.8999 6 8.6499 8.69 8.6499H11.42C14.1 8.6499 15.36 9.8999 15.36 12.5899V15.3199C15.35 17.9999 14.1 19.2499 11.42 19.2499ZM8.69 10.1499C6.82 10.1499 6.25 10.7199 6.25 12.5899V15.3199C6.25 17.1899 6.82 17.7599 8.69 17.7599H11.42C13.29 17.7599 13.86 17.1899 13.86 15.3199V12.5899C13.86 10.7199 13.29 10.1499 11.42 10.1499H8.69Z"
        fill="currentColor"
      />
      <Path
        d="M15.3104 15.35H14.6004C14.1904 15.35 13.8504 15.01 13.8504 14.6V12.58C13.8504 10.71 13.2804 10.14 11.4104 10.14H9.40039C8.99039 10.14 8.65039 9.8 8.65039 9.39V8.69C8.65039 6.01 9.90039 4.75 12.5904 4.75H15.3204C18.0004 4.75 19.2604 6 19.2604 8.69V11.42C19.2504 14.1 18.0004 15.35 15.3104 15.35ZM10.1504 8.65H11.4204C14.1004 8.65 15.3604 9.9 15.3604 12.59V13.86C17.2004 13.85 17.7604 13.28 17.7604 11.42V8.69C17.7604 6.82 17.1904 6.25 15.3204 6.25H12.5904C10.7304 6.25 10.1604 6.81 10.1504 8.65Z"
        fill="currentColor"
      />
      <Path
        d="M15.0002 22.7502C14.7302 22.7502 14.4802 22.6002 14.3502 22.3702C14.2202 22.1302 14.2202 21.8502 14.3602 21.6102L15.4102 19.8602C15.6202 19.5002 16.0802 19.3902 16.4402 19.6002C16.8002 19.8102 16.9102 20.2702 16.7002 20.6302L16.4302 21.0802C19.1902 20.4302 21.2602 17.9502 21.2602 14.9902C21.2602 14.5802 21.6002 14.2402 22.0102 14.2402C22.4202 14.2402 22.7602 14.5802 22.7602 14.9902C22.7502 19.2702 19.2702 22.7502 15.0002 22.7502Z"
        fill="currentColor"
      />
      <Path
        d="M2 9.75C1.59 9.75 1.25 9.41 1.25 9C1.25 4.73 4.73 1.25 9 1.25C9.27 1.25 9.52 1.4 9.65 1.63C9.78 1.87 9.78 2.15 9.64 2.39L8.59 4.14C8.38 4.49 7.92 4.61 7.56 4.39C7.21 4.18 7.09 3.72 7.31 3.36L7.58 2.91C4.81 3.56 2.75 6.04 2.75 9C2.75 9.41 2.41 9.75 2 9.75Z"
        fill="currentColor"
      />
    </Svg>
  );
};

const RecoveryConvertTwotone = ({
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
        d="M13.6 11.5799V14.3099C13.6 16.5899 12.69 17.4999 10.41 17.4999H7.69C5.42 17.4999 4.5 16.5899 4.5 14.3099V11.5799C4.5 9.3099 5.41 8.3999 7.69 8.3999H10.42C12.69 8.3999 13.6 9.3099 13.6 11.5799Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M17.5004 7.68V10.41C17.5004 12.69 16.5904 13.6 14.3104 13.6H13.6004V11.58C13.6004 9.31 12.6904 8.4 10.4104 8.4H8.40039V7.68C8.40039 5.4 9.31039 4.5 11.5904 4.5H14.3204C16.5904 4.5 17.5004 5.41 17.5004 7.68Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        opacity="0.4"
        d="M21 14C21 17.87 17.87 21 14 21L15.05 19.25"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        opacity="0.4"
        d="M1 8C1 4.13 4.13 1 8 1L6.95 2.75"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

const variants: IconVariants = {
  bold: RecoveryConvertBold,
  broken: RecoveryConvertBroken,
  bulk: RecoveryConvertBulk,
  linear: RecoveryConvertLinear,
  outline: RecoveryConvertOutline,
  twotone: RecoveryConvertTwotone,
};

export const RecoveryConvertIcon = ({
  variant = iconDefaultOptions.variant,
  className,
  ...props
}: IconProps) => {
  const textClasses = useContext(TextClassContext);
  const Component = variants[variant];
  return <Component className={cn(textClasses, className)} {...props} />;
};
