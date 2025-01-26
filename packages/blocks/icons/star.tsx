import { Path, Svg } from "unative/lib/svg";
import { cn } from "unative/lib/utils";

import type { IconProps, IconVariants } from "../types/icons-type";

const StarBold = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M15.3895 5.21125L16.7995 8.03125C16.9895 8.42125 17.4995 8.79125 17.9295 8.87125L20.4795 9.29125C22.1095 9.56125 22.4895 10.7413 21.3195 11.9213L19.3295 13.9113C18.9995 14.2413 18.8095 14.8913 18.9195 15.3613L19.4895 17.8213C19.9395 19.7613 18.8995 20.5213 17.1895 19.5013L14.7995 18.0813C14.3695 17.8213 13.6495 17.8213 13.2195 18.0813L10.8295 19.5013C9.11945 20.5113 8.07945 19.7613 8.52945 17.8213L9.09945 15.3613C9.18945 14.8813 8.99945 14.2313 8.66945 13.9013L6.67945 11.9113C5.50945 10.7413 5.88945 9.56125 7.51945 9.28125L10.0695 8.86125C10.4995 8.79125 11.0095 8.41125 11.1995 8.02125L12.6095 5.20125C13.3795 3.68125 14.6195 3.68125 15.3895 5.21125Z"
        fill="currentColor"
      />
      <Path
        d="M8 5.75H2C1.59 5.75 1.25 5.41 1.25 5C1.25 4.59 1.59 4.25 2 4.25H8C8.41 4.25 8.75 4.59 8.75 5C8.75 5.41 8.41 5.75 8 5.75Z"
        fill="currentColor"
      />
      <Path
        d="M5 19.75H2C1.59 19.75 1.25 19.41 1.25 19C1.25 18.59 1.59 18.25 2 18.25H5C5.41 18.25 5.75 18.59 5.75 19C5.75 19.41 5.41 19.75 5 19.75Z"
        fill="currentColor"
      />
      <Path
        d="M3 12.75H2C1.59 12.75 1.25 12.41 1.25 12C1.25 11.59 1.59 11.25 2 11.25H3C3.41 11.25 3.75 11.59 3.75 12C3.75 12.41 3.41 12.75 3 12.75Z"
        fill="currentColor"
      />
    </Svg>
  );
};

const StarBroken = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M21.3192 11.91C22.4892 10.74 22.1092 9.55999 20.4792 9.27999L17.9292 8.85999C17.4992 8.78999 16.9892 8.41 16.7992 8.02L15.3892 5.19999C14.6292 3.66999 13.3792 3.66999 12.6192 5.19999L11.2092 8.02C11.0192 8.41 10.5092 8.77999 10.0792 8.85999L7.52922 9.27999C5.89922 9.54999 5.51922 10.73 6.68922 11.91L8.67921 13.9C9.00921 14.23 9.19921 14.88 9.08921 15.35L8.51921 17.81C8.06921 19.75 9.10923 20.51 10.8192 19.49L13.2092 18.07C13.6392 17.81 14.3592 17.81 14.7892 18.07L17.1792 19.49C18.8892 20.5 19.9292 19.75 19.4792 17.81L18.9092 15.35"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M8 5H2"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M5 19H2"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M3 12H2"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

const StarBulk = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M15.3909 5.21L16.8009 8.03C16.9909 8.42 17.5009 8.79 17.9309 8.87L20.4809 9.29C22.1109 9.56 22.4909 10.74 21.3209 11.92L19.3309 13.91C19.0009 14.24 18.8109 14.89 18.9209 15.36L19.4909 17.82C19.9409 19.76 18.9009 20.52 17.1909 19.5L14.8009 18.08C14.3709 17.82 13.6509 17.82 13.2209 18.08L10.8309 19.5C9.12091 20.51 8.08093 19.76 8.53093 17.82L9.10093 15.36C9.21093 14.9 9.02093 14.25 8.69093 13.91L6.70094 11.92C5.53094 10.75 5.91094 9.57 7.54094 9.29L10.0909 8.87C10.5209 8.8 11.0309 8.42 11.2209 8.03L12.6309 5.21C13.3809 3.68 14.6209 3.68 15.3909 5.21Z"
        fill="currentColor"
      />
      <Path
        opacity="0.4"
        d="M8 5.75H2C1.59 5.75 1.25 5.41 1.25 5C1.25 4.59 1.59 4.25 2 4.25H8C8.41 4.25 8.75 4.59 8.75 5C8.75 5.41 8.41 5.75 8 5.75Z"
        fill="currentColor"
      />
      <Path
        opacity="0.4"
        d="M5 19.75H2C1.59 19.75 1.25 19.41 1.25 19C1.25 18.59 1.59 18.25 2 18.25H5C5.41 18.25 5.75 18.59 5.75 19C5.75 19.41 5.41 19.75 5 19.75Z"
        fill="currentColor"
      />
      <Path
        opacity="0.4"
        d="M3 12.75H2C1.59 12.75 1.25 12.41 1.25 12C1.25 11.59 1.59 11.25 2 11.25H3C3.41 11.25 3.75 11.59 3.75 12C3.75 12.41 3.41 12.75 3 12.75Z"
        fill="currentColor"
      />
    </Svg>
  );
};

const StarLinear = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M15.39 5.21L16.7999 8.02999C16.9899 8.41999 17.4999 8.78999 17.9299 8.86999L20.48 9.28999C22.11 9.55999 22.49 10.74 21.32 11.92L19.3299 13.91C18.9999 14.24 18.81 14.89 18.92 15.36L19.4899 17.82C19.9399 19.76 18.9 20.52 17.19 19.5L14.7999 18.08C14.3699 17.82 13.65 17.82 13.22 18.08L10.8299 19.5C9.11994 20.51 8.07995 19.76 8.52995 17.82L9.09996 15.36C9.20996 14.9 9.01995 14.25 8.68995 13.91L6.69996 11.92C5.52996 10.75 5.90996 9.56999 7.53996 9.28999L10.0899 8.86999C10.5199 8.79999 11.03 8.41999 11.22 8.02999L12.63 5.21C13.38 3.68 14.62 3.68 15.39 5.21Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M8 5H2"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M5 19H2"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M3 12H2"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

const StarOutline = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M17.6601 22.6701C17.1301 22.6701 16.4501 22.5001 15.6001 22.0001L12.6101 20.2301C12.3001 20.0501 11.7001 20.0501 11.4001 20.2301L8.40012 22.0001C6.63012 23.0501 5.59012 22.6301 5.12012 22.2901C4.66012 21.9501 3.94012 21.0801 4.41012 19.0801L5.12012 16.0101C5.20012 15.6901 5.04012 15.1401 4.80012 14.9001L2.32012 12.4201C1.08012 11.1801 1.18012 10.1201 1.35012 9.60007C1.52012 9.08007 2.06012 8.16007 3.78012 7.87007L6.97012 7.34007C7.27012 7.29007 7.70012 6.97007 7.83012 6.70007L9.60012 3.17007C10.4001 1.56007 11.4501 1.32007 12.0001 1.32007C12.5501 1.32007 13.6001 1.56007 14.4001 3.17007L16.1601 6.69007C16.3001 6.96007 16.7301 7.28007 17.0301 7.33007L20.2201 7.86007C21.9501 8.15007 22.4901 9.07007 22.6501 9.59007C22.8101 10.1101 22.9101 11.1701 21.6801 12.4101L19.2001 14.9001C18.9601 15.1401 18.8101 15.6801 18.8801 16.0101L19.5901 19.0801C20.0501 21.0801 19.3401 21.9501 18.8801 22.2901C18.6301 22.4701 18.2301 22.6701 17.6601 22.6701ZM12.0001 18.5901C12.4901 18.5901 12.9801 18.7101 13.3701 18.9401L16.3601 20.7101C17.2301 21.2301 17.7801 21.2301 17.9901 21.0801C18.2001 20.9301 18.3501 20.4001 18.1301 19.4201L17.4201 16.3501C17.2301 15.5201 17.5401 14.4501 18.1401 13.8401L20.6201 11.3601C21.1101 10.8701 21.3301 10.3901 21.2301 10.0601C21.1201 9.73007 20.6601 9.46007 19.9801 9.35007L16.7901 8.82007C16.0201 8.69007 15.1801 8.07007 14.8301 7.37007L13.0701 3.85007C12.7501 3.21007 12.3501 2.83007 12.0001 2.83007C11.6501 2.83007 11.2501 3.21007 10.9401 3.85007L9.17012 7.37007C8.82012 8.07007 7.98012 8.69007 7.21012 8.82007L4.03012 9.35007C3.35012 9.46007 2.89012 9.73007 2.78012 10.0601C2.67012 10.3901 2.90012 10.8801 3.39012 11.3601L5.87012 13.8401C6.47012 14.4401 6.78012 15.5201 6.59012 16.3501L5.88012 19.4201C5.65012 20.4101 5.81012 20.9301 6.02012 21.0801C6.23012 21.2301 6.77012 21.2201 7.65012 20.7101L10.6401 18.9401C11.0201 18.7101 11.5101 18.5901 12.0001 18.5901Z"
        fill="currentColor"
      />
    </Svg>
  );
};

const StarTwotone = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M15.3909 5.21L16.8009 8.02999C16.9909 8.41999 17.5009 8.78999 17.9309 8.86999L20.4809 9.28999C22.1109 9.55999 22.4909 10.74 21.3209 11.92L19.3309 13.91C19.0009 14.24 18.8109 14.89 18.9209 15.36L19.4909 17.82C19.9409 19.76 18.9009 20.52 17.1909 19.5L14.8009 18.08C14.3709 17.82 13.6509 17.82 13.2209 18.08L10.8309 19.5C9.12091 20.51 8.08093 19.76 8.53093 17.82L9.10093 15.36C9.21093 14.9 9.02093 14.25 8.69093 13.91L6.70094 11.92C5.53094 10.75 5.91094 9.56999 7.54094 9.28999L10.0909 8.86999C10.5209 8.79999 11.0309 8.41999 11.2209 8.02999L12.6309 5.21C13.3809 3.68 14.6209 3.68 15.3909 5.21Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        opacity="0.4"
        d="M8 5H2"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        opacity="0.4"
        d="M5 19H2"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        opacity="0.4"
        d="M3 12H2"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

const variants: IconVariants = {
  bold: StarBold,
  broken: StarBroken,
  bulk: StarBulk,
  linear: StarLinear,
  outline: StarOutline,
  twotone: StarTwotone,
};

export const StarIcon = ({ variant = "linear", ...props }: IconProps) => {
  const Component = variants[variant];
  return <Component {...props} />;
};
