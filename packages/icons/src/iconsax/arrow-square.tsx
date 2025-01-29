import { useContext } from "react";
import { cn } from "unative/lib/utils";
import { G, Path, Svg } from "unative/ui/svg";
import { TextClassContext } from "unative/ui/text";

import type { IconProps, IconVariants } from "../icon-options";
import { defaultOptions } from "../icon-options";

const ArrowSquareBold = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M16.19 2H7.81C4.17 2 2 4.17 2 7.81V16.18C2 19.83 4.17 22 7.81 22H16.18C19.82 22 21.99 19.83 21.99 16.19V7.81C22 4.17 19.83 2 16.19 2ZM19.35 8.84C19.31 8.93 19.26 9.01 19.19 9.08L17.39 10.88C17.24 11.03 17.05 11.1 16.86 11.1C16.67 11.1 16.48 11.03 16.33 10.88C16.04 10.59 16.04 10.11 16.33 9.82L16.85 9.3H16.7C14.6 9.3 12.88 11.01 12.88 13.11V15.07V17.24C12.88 17.65 12.54 17.99 12.13 17.99C11.72 17.99 11.38 17.65 11.38 17.24V15.07V13.11C11.38 11.01 9.67 9.3 7.57 9.3H7.15L7.67 9.82C7.96 10.11 7.96 10.59 7.67 10.88C7.52 11.03 7.33 11.1 7.14 11.1C6.95 11.1 6.76 11.03 6.61 10.88L4.81 9.08C4.52 8.79 4.52 8.31 4.81 8.02L6.61 6.22C6.9 5.93 7.38 5.93 7.67 6.22C7.96 6.51 7.96 6.99 7.67 7.28L7.15 7.8H7.58C9.53 7.8 11.22 8.87 12.14 10.44C13.06 8.87 14.75 7.8 16.71 7.8H16.86L16.34 7.28C16.05 6.99 16.05 6.51 16.34 6.22C16.63 5.93 17.11 5.93 17.4 6.22L19.2 8.02C19.27 8.09 19.32 8.17 19.36 8.26C19.43 8.45 19.43 8.66 19.35 8.84Z"
        fill="currentColor"
      />
    </Svg>
  );
};

const ArrowSquareBroken = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M12.1406 15.0701V13.11C12.1406 10.59 14.1806 8.54004 16.7106 8.54004H18.6706"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M5.61914 8.55005H7.57916C10.0992 8.55005 12.1492 10.59 12.1492 13.12V13.7701V17.25"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M7.13983 6.75L5.33984 8.55L7.13983 10.35"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M16.8594 6.75L18.6594 8.55L16.8594 10.35"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M2 9C2 4 4 2 9 2H15C20 2 22 4 22 9V15C22 20 20 22 15 22H9C4 22 2 20 2 15V13.02"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

const ArrowSquareBulk = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M16.1898 2H7.81976C4.17976 2 2.00977 4.17 2.00977 7.81V16.18C2.00977 19.82 4.17976 21.99 7.81976 21.99H16.1898C19.8298 21.99 21.9998 19.82 21.9998 16.18V7.81C21.9998 4.17 19.8298 2 16.1898 2Z"
        fill="currentColor"
      />
      <Path
        d="M19.3495 8.2702C19.3095 8.1802 19.2595 8.1002 19.1895 8.0302L17.3896 6.2302C17.0996 5.9402 16.6196 5.9402 16.3296 6.2302C16.0396 6.5202 16.0396 7.00019 16.3296 7.29019L16.8495 7.8102H16.6996C14.7496 7.8102 13.0595 8.8802 12.1295 10.4502C11.2095 8.8802 9.51955 7.8102 7.56955 7.8102H7.13956L7.65952 7.29019C7.94952 7.00019 7.94952 6.5202 7.65952 6.2302C7.36952 5.9402 6.88952 5.9402 6.59952 6.2302L4.79953 8.0302C4.50953 8.3202 4.50953 8.8002 4.79953 9.0902L6.59952 10.8902C6.74952 11.0402 6.93955 11.1102 7.12955 11.1102C7.31955 11.1102 7.50952 11.0402 7.65952 10.8902C7.94952 10.6002 7.94952 10.1202 7.65952 9.8302L7.13956 9.3102H7.55954C9.65954 9.3102 11.3695 11.0202 11.3695 13.1202V15.0802V17.2502C11.3695 17.6602 11.7095 18.0002 12.1195 18.0002C12.5295 18.0002 12.8695 17.6602 12.8695 17.2502V15.0802V13.1202C12.8695 11.0202 14.5795 9.3102 16.6895 9.3102H16.8396L16.3196 9.8302C16.0296 10.1202 16.0296 10.6002 16.3196 10.8902C16.4696 11.0402 16.6595 11.1102 16.8495 11.1102C17.0395 11.1102 17.2295 11.0402 17.3795 10.8902L19.1795 9.0902C19.2495 9.0202 19.2996 8.94021 19.3396 8.85021C19.4296 8.66021 19.4295 8.4502 19.3495 8.2702Z"
        fill="currentColor"
      />
    </Svg>
  );
};

const ArrowSquareLinear = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M12.1401 15.0701V13.11C12.1401 10.59 14.1801 8.54004 16.7101 8.54004H18.6701"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M5.62012 8.55005H7.58014C10.1001 8.55005 12.1501 10.59 12.1501 13.12V13.7701V17.25"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M7.14008 6.75L5.34009 8.55L7.14008 10.35"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M16.8601 6.75L18.6601 8.55L16.8601 10.35"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M9 22H15C20 22 22 20 22 15V9C22 4 20 2 15 2H9C4 2 2 4 2 9V15C2 20 4 22 9 22Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

const ArrowSquareOutline = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M12.1406 15.8198C11.7306 15.8198 11.3906 15.4798 11.3906 15.0698V13.1098C11.3906 10.1798 13.7706 7.7998 16.7106 7.7998H18.6706C19.0806 7.7998 19.4206 8.1398 19.4206 8.5498C19.4206 8.9598 19.0806 9.2998 18.6706 9.2998H16.7106C14.6106 9.2998 12.8906 11.0098 12.8906 13.1098V15.0698C12.8906 15.4898 12.5506 15.8198 12.1406 15.8198Z"
        fill="currentColor"
      />
      <Path
        d="M12.1411 18.0001C11.7311 18.0001 11.3911 17.6601 11.3911 17.2501V13.1201C11.3911 11.0201 9.68112 9.31006 7.58112 9.31006H5.62109C5.21109 9.31006 4.87109 8.97006 4.87109 8.56006C4.87109 8.15006 5.21109 7.81006 5.62109 7.81006H7.58112C10.5111 7.81006 12.8911 10.1901 12.8911 13.1201V17.2501C12.8911 17.6601 12.5511 18.0001 12.1411 18.0001Z"
        fill="currentColor"
      />
      <Path
        d="M7.13931 11.0999C6.94931 11.0999 6.75928 11.0299 6.60928 10.8799L4.8093 9.07994C4.5193 8.78994 4.5193 8.30994 4.8093 8.01994L6.60928 6.21994C6.89928 5.92994 7.37928 5.92994 7.66928 6.21994C7.95928 6.50994 7.95928 6.98994 7.66928 7.27994L6.39932 8.54994L7.66928 9.81995C7.95928 10.1099 7.95928 10.5899 7.66928 10.8799C7.51928 11.0299 7.32931 11.0999 7.13931 11.0999Z"
        fill="currentColor"
      />
      <Path
        d="M16.8607 11.0999C16.6707 11.0999 16.4808 11.0299 16.3308 10.8799C16.0408 10.5899 16.0408 10.1099 16.3308 9.81995L17.6007 8.54994L16.3308 7.27994C16.0408 6.98994 16.0408 6.50994 16.3308 6.21994C16.6208 5.92994 17.1008 5.92994 17.3908 6.21994L19.1908 8.01994C19.4808 8.30994 19.4808 8.78994 19.1908 9.07994L17.3908 10.8799C17.2508 11.0299 17.0507 11.0999 16.8607 11.0999Z"
        fill="currentColor"
      />
      <Path
        d="M15 22.75H9C3.57 22.75 1.25 20.43 1.25 15V9C1.25 3.57 3.57 1.25 9 1.25H15C20.43 1.25 22.75 3.57 22.75 9V15C22.75 20.43 20.43 22.75 15 22.75ZM9 2.75C4.39 2.75 2.75 4.39 2.75 9V15C2.75 19.61 4.39 21.25 9 21.25H15C19.61 21.25 21.25 19.61 21.25 15V9C21.25 4.39 19.61 2.75 15 2.75H9Z"
        fill="currentColor"
      />
    </Svg>
  );
};

const ArrowSquareTwotone = ({ size = 24, className, ...props }: IconProps) => {
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
          d="M12.1406 15.0701V13.11C12.1406 10.59 14.1806 8.54004 16.7106 8.54004H18.6706"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <Path
          d="M5.62109 8.5498H7.58112C10.1011 8.5498 12.1511 10.5898 12.1511 13.1198V13.7698V17.2498"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <Path
          d="M7.13983 6.75L5.33984 8.55L7.13983 10.35"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <Path
          d="M16.8594 6.75L18.6594 8.55L16.8594 10.35"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </G>
      <Path
        d="M9 22H15C20 22 22 20 22 15V9C22 4 20 2 15 2H9C4 2 2 4 2 9V15C2 20 4 22 9 22Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

const variants: IconVariants = {
  bold: ArrowSquareBold,
  broken: ArrowSquareBroken,
  bulk: ArrowSquareBulk,
  linear: ArrowSquareLinear,
  outline: ArrowSquareOutline,
  twotone: ArrowSquareTwotone,
};

export const ArrowSquareIcon = ({
  variant = defaultOptions.variant,
  className,
  ...props
}: IconProps) => {
  const textClasses = useContext(TextClassContext);
  const Component = variants[variant];
  return <Component className={cn(textClasses, className)} {...props} />;
};

export default ArrowSquareIcon;
