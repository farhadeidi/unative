import { useContext } from "react";
import { Path, Svg } from "unative/lib/svg";
import { cn } from "unative/lib/utils";
import { TextClassContext } from "unative/ui/text";

import { iconDefaultOptions } from "../icons-configuration";
import type { IconProps, IconVariants } from "../types/icons-type";

const RankingBold = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M13.3 8.11032L14.62 10.7503C14.8 11.1103 15.28 11.4703 15.68 11.5303L18.07 11.9303C19.6 12.1903 19.96 13.2903 18.86 14.3903L17 16.2603C16.69 16.5703 16.51 17.1803 16.61 17.6203L17.14 19.9303C17.56 21.7503 16.59 22.4603 14.98 21.5103L12.74 20.1803C12.33 19.9403 11.67 19.9403 11.26 20.1803L9.00997 21.5003C7.39997 22.4503 6.42997 21.7403 6.84997 19.9203L7.37997 17.6103C7.47997 17.1803 7.29997 16.5703 6.98997 16.2503L5.13997 14.4003C4.03997 13.3003 4.39997 12.1903 5.92997 11.9403L8.31997 11.5403C8.71997 11.4703 9.19997 11.1203 9.37997 10.7603L10.7 8.12032C11.41 6.68032 12.59 6.68032 13.3 8.11032Z"
        fill="currentColor"
      />
      <Path
        d="M6 9.75C5.59 9.75 5.25 9.41 5.25 9V2C5.25 1.59 5.59 1.25 6 1.25C6.41 1.25 6.75 1.59 6.75 2V9C6.75 9.41 6.41 9.75 6 9.75Z"
        fill="currentColor"
      />
      <Path
        d="M18 9.75C17.59 9.75 17.25 9.41 17.25 9V2C17.25 1.59 17.59 1.25 18 1.25C18.41 1.25 18.75 1.59 18.75 2V9C18.75 9.41 18.41 9.75 18 9.75Z"
        fill="currentColor"
      />
      <Path
        d="M12 4.75C11.59 4.75 11.25 4.41 11.25 4V2C11.25 1.59 11.59 1.25 12 1.25C12.41 1.25 12.75 1.59 12.75 2V4C12.75 4.41 12.41 4.75 12 4.75Z"
        fill="currentColor"
      />
    </Svg>
  );
};

const RankingBroken = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M16.0597 21.91C15.7497 21.87 15.3897 21.74 14.9897 21.5L12.7497 20.17C12.3397 19.93 11.6797 19.93 11.2697 20.17L9.02974 21.5C7.41974 22.45 6.44974 21.74 6.86974 19.92L7.39974 17.61C7.49974 17.18 7.31975 16.57 7.00975 16.25L5.14974 14.39C4.04974 13.29 4.40974 12.18 5.93974 11.93L8.32973 11.53C8.72973 11.46 9.20976 11.11 9.38976 10.75L10.7097 8.10998C11.4297 6.67998 12.5997 6.67998 13.3097 8.10998L14.6297 10.75C14.8097 11.11 15.2897 11.47 15.6897 11.53L18.0797 11.93C19.6097 12.19 19.9697 13.29 18.8697 14.39L17.0098 16.25C16.6998 16.56 16.5197 17.17 16.6197 17.61"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M6 9V2"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M18 9V2"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M12 4V2"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

const RankingBulk = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M8.67 14H4C2.9 14 2 14.9 2 16V22H8.67V14Z"
        fill="currentColor"
      />
      <Path
        d="M13.3302 10H10.6602C9.56016 10 8.66016 10.9 8.66016 12V22H15.3302V12C15.3302 10.9 14.4402 10 13.3302 10Z"
        fill="currentColor"
      />
      <Path
        opacity="0.4"
        d="M20.0001 17H15.3301V22H22.0001V19C22.0001 17.9 21.1001 17 20.0001 17Z"
        fill="currentColor"
      />
      <Path
        d="M15.0097 4.84999C15.3197 4.53999 15.4397 4.16999 15.3397 3.84999C15.2397 3.52999 14.9297 3.3 14.4897 3.23L13.5297 3.06999C13.4897 3.05999 13.3997 2.99998 13.3797 2.95998L12.8497 1.89998C12.4497 1.08998 11.5397 1.08998 11.1397 1.89998L10.6097 2.95998C10.5897 2.99998 10.4997 3.05999 10.4597 3.06999L9.49968 3.23C9.05968 3.3 8.75969 3.52999 8.64969 3.84999C8.54969 4.16999 8.66968 4.53999 8.97968 4.84999L9.71969 5.59999C9.74969 5.62999 9.78968 5.75 9.77968 5.79L9.56968 6.70998C9.40968 7.38998 9.66968 7.69997 9.83968 7.82997C10.0097 7.94997 10.3797 8.10999 10.9897 7.74999L11.8897 7.21999C11.9297 7.18999 12.0597 7.18999 12.0997 7.21999L12.9997 7.74999C13.2797 7.91999 13.5097 7.96999 13.6897 7.96999C13.8997 7.96999 14.0497 7.88997 14.1397 7.82997C14.3097 7.70997 14.5697 7.39998 14.4097 6.70998L14.1997 5.79C14.1897 5.74 14.2197 5.62999 14.2597 5.59999L15.0097 4.84999Z"
        fill="currentColor"
      />
    </Svg>
  );
};

const RankingLinear = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M13.3 8.10998L14.62 10.75C14.8 11.11 15.28 11.47 15.68 11.53L18.07 11.93C19.6 12.19 19.96 13.29 18.86 14.39L17 16.25C16.69 16.56 16.51 17.17 16.61 17.61L17.14 19.92C17.56 21.74 16.59 22.45 14.98 21.5L12.74 20.17C12.33 19.93 11.67 19.93 11.26 20.17L9.01996 21.5C7.40996 22.45 6.43995 21.74 6.85995 19.92L7.38998 17.61C7.48998 17.18 7.30997 16.57 6.99997 16.25L5.13998 14.39C4.03998 13.29 4.39996 12.18 5.92996 11.93L8.31997 11.53C8.71997 11.46 9.19997 11.11 9.37997 10.75L10.7 8.10998C11.41 6.67998 12.59 6.67998 13.3 8.10998Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M6 9V2"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M18 9V2"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M12 4V2"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

const RankingOutline = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M16.2406 22.67C15.8106 22.67 15.2706 22.54 14.6006 22.14L12.3606 20.81C12.1906 20.71 11.8106 20.71 11.6406 20.81L9.40061 22.14C7.98061 22.98 7.12061 22.63 6.74061 22.35C6.36061 22.07 5.76063 21.35 6.13063 19.75L6.66062 17.44C6.70062 17.26 6.60062 16.92 6.47062 16.78L4.61061 14.92C3.61061 13.92 3.69061 13.05 3.83061 12.61C3.97061 12.17 4.41061 11.42 5.80061 11.18L8.19062 10.78C8.36062 10.75 8.63063 10.55 8.70063 10.4L10.0206 7.76001C10.6706 6.47001 11.5306 6.27002 11.9906 6.27002C12.4506 6.27002 13.3106 6.46001 13.9606 7.76001L15.2806 10.4C15.3606 10.55 15.6306 10.75 15.7906 10.78L18.1806 11.18C19.5706 11.41 20.0106 12.17 20.1506 12.61C20.2906 13.05 20.3706 13.92 19.3706 14.92L17.5106 16.78C17.3806 16.91 17.2806 17.26 17.3206 17.44L17.8506 19.74C18.2206 21.35 17.6306 22.06 17.2406 22.34C17.0606 22.5 16.7206 22.67 16.2406 22.67ZM12.0006 19.24C12.4006 19.24 12.8006 19.33 13.1206 19.52L15.3606 20.85C15.9506 21.2 16.3006 21.2 16.3706 21.14C16.4506 21.08 16.5506 20.75 16.4006 20.09L15.8706 17.79C15.7106 17.11 15.9706 16.23 16.4606 15.74L18.3206 13.88C18.6906 13.51 18.7706 13.22 18.7306 13.09C18.6906 12.96 18.4606 12.77 17.9406 12.69L15.5506 12.29C14.9106 12.18 14.2306 11.68 13.9406 11.1L12.6206 8.46002C12.3906 8.01002 12.1406 7.80002 11.9906 7.80002C11.8406 7.80002 11.5906 8.00002 11.3606 8.46002L10.0406 11.1C9.75063 11.68 9.07061 12.18 8.43061 12.29L6.04063 12.69C5.52063 12.78 5.29062 12.96 5.25062 13.09C5.21062 13.22 5.29062 13.51 5.66062 13.88L7.52061 15.74C8.01061 16.23 8.27061 17.12 8.11061 17.79L7.58061 20.1C7.43061 20.77 7.53061 21.1 7.61061 21.15C7.69061 21.21 8.04062 21.21 8.62062 20.86L10.8606 19.53C11.2006 19.34 11.6006 19.24 12.0006 19.24Z"
        fill="currentColor"
      />
      <Path
        d="M6 9.75C5.59 9.75 5.25 9.41 5.25 9V2C5.25 1.59 5.59 1.25 6 1.25C6.41 1.25 6.75 1.59 6.75 2V9C6.75 9.41 6.41 9.75 6 9.75Z"
        fill="currentColor"
      />
      <Path
        d="M18 9.75C17.59 9.75 17.25 9.41 17.25 9V2C17.25 1.59 17.59 1.25 18 1.25C18.41 1.25 18.75 1.59 18.75 2V9C18.75 9.41 18.41 9.75 18 9.75Z"
        fill="currentColor"
      />
      <Path
        d="M12 4.75C11.59 4.75 11.25 4.41 11.25 4V2C11.25 1.59 11.59 1.25 12 1.25C12.41 1.25 12.75 1.59 12.75 2V4C12.75 4.41 12.41 4.75 12 4.75Z"
        fill="currentColor"
      />
    </Svg>
  );
};

const RankingTwotone = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M13.3 8.1101L14.62 10.7501C14.8 11.1101 15.28 11.4701 15.68 11.5301L18.07 11.9301C19.6 12.1901 19.96 13.2901 18.86 14.3901L17 16.2501C16.69 16.5601 16.51 17.1701 16.61 17.6101L17.14 19.9201C17.56 21.7401 16.59 22.4501 14.98 21.5001L12.74 20.1701C12.33 19.9301 11.67 19.9301 11.26 20.1701L9.01996 21.5001C7.40996 22.4501 6.43995 21.7401 6.85995 19.9201L7.38998 17.6101C7.48998 17.1801 7.30997 16.5701 6.99997 16.2501L5.13998 14.3901C4.03998 13.2901 4.39996 12.1801 5.92996 11.9301L8.31997 11.5301C8.71997 11.4601 9.19997 11.1101 9.37997 10.7501L10.7 8.1101C11.41 6.6801 12.59 6.6801 13.3 8.1101Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        opacity="0.4"
        d="M6 9V2"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        opacity="0.4"
        d="M18 9V2"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        opacity="0.4"
        d="M12 4V2"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

const variants: IconVariants = {
  bold: RankingBold,
  broken: RankingBroken,
  bulk: RankingBulk,
  linear: RankingLinear,
  outline: RankingOutline,
  twotone: RankingTwotone,
};

export const RankingIcon = ({
  variant = iconDefaultOptions.variant,
  className,
  ...props
}: IconProps) => {
  const textClasses = useContext(TextClassContext);
  const Component = variants[variant];
  return <Component className={cn(textClasses, className)} {...props} />;
};
