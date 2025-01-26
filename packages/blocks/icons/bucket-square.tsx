import { G, Path, Svg } from "unative/lib/svg";
import { cn } from "unative/lib/utils";

import type { IconProps, IconVariants } from "../types/icons-type";

const BucketSquareBold = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M16.19 2H7.81C4.17 2 2 4.17 2 7.81V16.18C2 19.83 4.17 22 7.81 22H16.18C19.82 22 21.99 19.83 21.99 16.19V7.81C22 4.17 19.83 2 16.19 2ZM9.06 16.25L6.5 13.68C6.06 13.24 5.85 12.8 5.86 12.35C5.87 11.93 6.09 11.52 6.5 11.11L10.1 7.51L9.54 6.96C9.35 6.77 9.35 6.47 9.54 6.28C9.73 6.09 10.03 6.09 10.22 6.28L10.77 6.83L15.47 11.53C15.57 11.63 15.64 11.78 15.64 11.92C15.65 12.09 15.6 12.26 15.47 12.39L11.62 16.24C10.78 17.1 9.92 17.1 9.06 16.25ZM16.64 17.86C15.81 17.86 15.14 17.19 15.14 16.36C15.14 15.52 16.13 14.41 16.33 14.19C16.49 14.01 16.8 14.01 16.97 14.19C17.17 14.4 18.16 15.52 18.16 16.36C18.14 17.19 17.47 17.86 16.64 17.86Z"
        fill="currentColor"
      />
    </Svg>
  );
};

const BucketSquareBroken = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M8.93931 16.9301L6.1093 14.1C5.1693 13.16 5.1693 12.2101 6.1093 11.2701L10.8293 6.55005L16.0193 11.7401C16.2793 12.0001 16.2793 12.4201 16.0193 12.6801L11.7693 16.9301C10.8293 17.8701 9.87931 17.8701 8.93931 16.9301Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M9.87891 5.6001L10.8289 6.5401"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M5.43945 12.6401L16.1295 12.1702"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M17.3002 14.8101C17.3002 14.8101 15.9902 16.23 15.9902 17.1C15.9902 17.82 16.5802 18.41 17.3002 18.41C18.0202 18.41 18.6102 17.82 18.6102 17.1C18.6002 16.23 17.3002 14.8101 17.3002 14.8101Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M2 12.97V15C2 20 4 22 9 22H15C20 22 22 20 22 15V9C22 4 20 2 15 2H9C4 2 2 4 2 9"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

const BucketSquareBulk = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M15.6595 11.93C15.6495 11.79 15.5895 11.64 15.4895 11.54L10.7895 6.84001L10.2395 6.28996C10.0495 6.09996 9.74948 6.09996 9.55948 6.28996C9.36948 6.47996 9.36948 6.77995 9.55948 6.96995L10.1095 7.52L6.5095 11.12C6.0995 11.53 5.87948 11.95 5.86948 12.36C5.85948 12.8 6.0695 13.24 6.5095 13.69L9.07947 16.26C9.93947 17.11 10.7995 17.11 11.6495 16.26L15.4995 12.41C15.6095 12.27 15.6695 12.09 15.6595 11.93Z"
        fill="currentColor"
      />
      <Path
        d="M16.9589 14.1902C16.7989 14.0102 16.4889 14.0102 16.3189 14.1902C16.1189 14.4002 15.1289 15.5202 15.1289 16.3602C15.1289 17.1902 15.7989 17.8602 16.6289 17.8602C17.4589 17.8602 18.1289 17.1902 18.1289 16.3602C18.1389 15.5202 17.1589 14.4102 16.9589 14.1902Z"
        fill="currentColor"
      />
    </Svg>
  );
};

const BucketSquareLinear = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M8.94002 16.9301L6.11 14.1C5.17 13.16 5.17 12.2101 6.11 11.2701L10.83 6.55005L16.02 11.7401C16.28 12.0001 16.28 12.4201 16.02 12.6801L11.77 16.9301C10.83 17.8701 9.88002 17.8701 8.94002 16.9301Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M9.88 5.6001L10.83 6.5401"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M5.44 12.6401L16.13 12.1702"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M17.3 14.8101C17.3 14.8101 15.99 16.23 15.99 17.1C15.99 17.82 16.58 18.41 17.3 18.41C18.02 18.41 18.61 17.82 18.61 17.1C18.6 16.23 17.3 14.8101 17.3 14.8101Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M22 15V9C22 4 20 2 15 2H9C4 2 2 4 2 9V15C2 20 4 22 9 22H15C20 22 22 20 22 15Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

const BucketSquareOutline = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M10.3506 18.3902C9.67062 18.3902 9.02061 18.0802 8.40061 17.4602L5.57063 14.6302C4.33062 13.3902 4.33062 11.9702 5.57063 10.7402L10.2906 6.02023C10.5806 5.73023 11.0606 5.73023 11.3506 6.02023L16.5406 11.2102C16.8106 11.4802 16.9506 11.8302 16.9506 12.2102C16.9506 12.5902 16.8006 12.9502 16.5406 13.2102L12.2906 17.4602C11.6906 18.0802 11.0306 18.3902 10.3506 18.3902ZM10.8306 7.60019L6.64063 11.7902C6.32063 12.1102 6.15061 12.4103 6.15061 12.6803C6.15061 12.9403 6.31063 13.2402 6.64063 13.5702L9.47062 16.4002C10.1206 17.0502 10.5906 17.0502 11.2406 16.4002L15.4306 12.2102L10.8306 7.60019Z"
        fill="currentColor"
      />
      <Path
        d="M10.8301 7.29001C10.6401 7.29001 10.4501 7.22004 10.3001 7.07004L9.36008 6.13004C9.07008 5.84004 9.07008 5.36004 9.36008 5.07004C9.65008 4.78004 10.1301 4.78004 10.4201 5.07004L11.3601 6.01004C11.6501 6.30004 11.6501 6.78004 11.3601 7.07004C11.2101 7.22004 11.0201 7.29001 10.8301 7.29001Z"
        fill="currentColor"
      />
      <Path
        d="M5.44034 13.3902C5.04034 13.3902 4.71034 13.0803 4.69034 12.6703C4.67034 12.2603 4.99034 11.9102 5.41034 11.8902L16.0903 11.4202C16.5003 11.3802 16.8503 11.7202 16.8703 12.1402C16.8903 12.5502 16.5703 12.9003 16.1503 12.9203L5.47034 13.3902C5.46034 13.3902 5.45034 13.3902 5.44034 13.3902Z"
        fill="currentColor"
      />
      <Path
        d="M17.3002 19.1499C16.1702 19.1499 15.2402 18.2298 15.2402 17.0898C15.2402 16.0098 16.3902 14.6799 16.7402 14.2999C17.0202 13.9899 17.5602 13.9899 17.8402 14.2999C18.1902 14.6799 19.3402 16.0198 19.3402 17.0898C19.3502 18.2298 18.4302 19.1499 17.3002 19.1499ZM17.3002 15.9998C16.9902 16.4398 16.7402 16.8798 16.7402 17.0898C16.7402 17.3898 16.9902 17.6499 17.3002 17.6499C17.6102 17.6499 17.8602 17.3998 17.8602 17.0898C17.8502 16.8798 17.6102 16.4398 17.3002 15.9998Z"
        fill="currentColor"
      />
      <Path
        d="M15 22.75H9C3.57 22.75 1.25 20.43 1.25 15V9C1.25 3.57 3.57 1.25 9 1.25H15C20.43 1.25 22.75 3.57 22.75 9V15C22.75 20.43 20.43 22.75 15 22.75ZM9 2.75C4.39 2.75 2.75 4.39 2.75 9V15C2.75 19.61 4.39 21.25 9 21.25H15C19.61 21.25 21.25 19.61 21.25 15V9C21.25 4.39 19.61 2.75 15 2.75H9Z"
        fill="currentColor"
      />
    </Svg>
  );
};

const BucketSquareTwotone = ({ size = 24, className, ...props }: IconProps) => {
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
          d="M8.93931 16.9304L6.1093 14.1003C5.1693 13.1603 5.1693 12.2103 6.1093 11.2703L10.8293 6.55029L16.0193 11.7403C16.2793 12.0003 16.2793 12.4204 16.0193 12.6804L11.7693 16.9304C10.8293 17.8704 9.87931 17.8704 8.93931 16.9304Z"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeMiterlimit="10"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <Path
          d="M9.87891 5.6001L10.8289 6.5401"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeMiterlimit="10"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <Path
          d="M5.43945 12.6399L16.1295 12.1699"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeMiterlimit="10"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <Path
          d="M17.3002 14.8101C17.3002 14.8101 15.9902 16.23 15.9902 17.1C15.9902 17.82 16.5802 18.41 17.3002 18.41C18.0202 18.41 18.6102 17.82 18.6102 17.1C18.6002 16.23 17.3002 14.8101 17.3002 14.8101Z"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </G>
      <Path
        d="M22 15V9C22 4 20 2 15 2H9C4 2 2 4 2 9V15C2 20 4 22 9 22H15C20 22 22 20 22 15Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

const variants: IconVariants = {
  bold: BucketSquareBold,
  broken: BucketSquareBroken,
  bulk: BucketSquareBulk,
  linear: BucketSquareLinear,
  outline: BucketSquareOutline,
  twotone: BucketSquareTwotone,
};

export const BucketSquareIcon = ({
  variant = "linear",
  ...props
}: IconProps) => {
  const Component = variants[variant];
  return <Component {...props} />;
};
