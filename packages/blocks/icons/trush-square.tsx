import { useContext } from "react";
import { G, Path, Svg } from "unative/lib/svg";
import { cn } from "unative/lib/utils";
import { TextClassContext } from "unative/ui/text";

import { iconDefaultOptions } from "../icons-configuration";
import type { IconProps, IconVariants } from "../types/icons-type";

const TrushSquareBold = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M16.19 2H7.81C4.17 2 2 4.17 2 7.81V16.18C2 19.83 4.17 22 7.81 22H16.18C19.82 22 21.99 19.83 21.99 16.19V7.81C22 4.17 19.83 2 16.19 2ZM15.76 15.76C15.7 16.61 15.63 17.67 13.71 17.67H10.29C8.38 17.67 8.3 16.61 8.24 15.76L7.93 11.8C7.91 11.54 8 11.29 8.17 11.1C8.34 10.91 8.59 10.81 8.84 10.81H15.16C15.41 10.81 15.66 10.92 15.83 11.1C16 11.29 16.09 11.54 16.07 11.79L15.76 15.76ZM16.8 9.82C16.78 9.82 16.76 9.82 16.74 9.82C15.7 9.72 14.75 9.65 13.84 9.61C12.62 9.55 11.4 9.53 10.17 9.58C9.57 9.61 8.96 9.65 8.36 9.71L7.27 9.82C7.25 9.82 7.22 9.82 7.2 9.82C6.85 9.82 6.55 9.56 6.52 9.2C6.48 8.83 6.76 8.49 7.13 8.46L8.22 8.35C8.65 8.31 9.07 8.28 9.5 8.26L9.58 7.79C9.66 7.29 9.81 6.33 11.31 6.33H12.7C14.21 6.33 14.36 7.32 14.43 7.8L14.51 8.28C15.26 8.32 16.03 8.38 16.87 8.46C17.25 8.5 17.52 8.83 17.49 9.21C17.45 9.56 17.15 9.82 16.8 9.82Z"
        fill="currentColor"
      />
    </Svg>
  );
};

const TrushSquareBroken = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M2 13.05V15C2 20 4 22 9 22H15C20 22 22 20 22 15V9C22 4 20 2 15 2H9C4 2 2 4 2 9"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M17.8996 9.04997C15.7196 8.82997 13.5196 8.71997 11.3296 8.71997C10.0296 8.71997 8.72961 8.78997 7.43961 8.91997L6.09961 9.04997"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M9.70898 8.38994L9.84898 7.52994C9.94898 6.90994 10.029 6.43994 11.139 6.43994H12.859C13.969 6.43994 14.049 6.92994 14.149 7.52994L14.289 8.37994"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M16.49 9.12988L16.06 15.7299C15.99 16.7599 15.93 17.5599 14.1 17.5599H9.89C8.06 17.5599 7.99999 16.7599 7.92999 15.7299L7.5 9.12988"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

const TrushSquareBulk = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M16.1898 2H7.81978C4.17978 2 2.00977 4.17 2.00977 7.81V16.18C2.00977 19.82 4.17978 21.99 7.81978 21.99H16.1898C19.8298 21.99 21.9998 19.82 21.9998 16.18V7.81C21.9998 4.17 19.8298 2 16.1898 2Z"
        fill="currentColor"
      />
      <Path
        d="M16.8598 8.46008C16.0198 8.38008 15.2498 8.33008 14.4998 8.28008L14.4198 7.80008C14.3498 7.32008 14.1998 6.33008 12.6898 6.33008H11.2998C9.80979 6.33008 9.6498 7.28008 9.5698 7.79008L9.4898 8.26007C9.0598 8.29007 8.6398 8.31007 8.2098 8.35007L7.11979 8.46008C6.73979 8.50008 6.46979 8.83008 6.50979 9.21008C6.54979 9.56008 6.83979 9.83008 7.18979 9.83008C7.20979 9.83008 7.23979 9.83008 7.25979 9.83008L8.33979 9.72008C8.93979 9.67008 9.54979 9.62008 10.1498 9.59008C11.3698 9.54008 12.5898 9.56008 13.8198 9.62008C14.7298 9.66008 15.6798 9.73008 16.7198 9.83008C16.7398 9.83008 16.7598 9.83008 16.7798 9.83008C17.1298 9.83008 17.4298 9.56008 17.4598 9.21008C17.5098 8.83008 17.2398 8.49008 16.8598 8.46008Z"
        fill="currentColor"
      />
      <Path
        d="M15.8305 11.1001C15.6605 10.9101 15.4105 10.8101 15.1605 10.8101H8.84049C8.59049 10.8101 8.34049 10.9201 8.17049 11.1001C8.00049 11.2901 7.91048 11.5401 7.93048 11.7901L8.2405 15.7501C8.3005 16.6001 8.37049 17.6601 10.2905 17.6601H13.7105C15.6305 17.6601 15.7005 16.6001 15.7605 15.7501L16.0705 11.7901C16.0905 11.5401 16.0005 11.2901 15.8305 11.1001Z"
        fill="currentColor"
      />
    </Svg>
  );
};

const TrushSquareLinear = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M17.9 9.04997C15.72 8.82997 13.52 8.71997 11.33 8.71997C10.03 8.71997 8.72997 8.78997 7.43997 8.91997L6.09998 9.04997"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M9.70996 8.38994L9.84996 7.52994C9.94996 6.90994 10.03 6.43994 11.14 6.43994H12.86C13.97 6.43994 14.0499 6.92994 14.1499 7.52994L14.2899 8.37994"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M16.49 9.12988L16.06 15.7299C15.99 16.7599 15.93 17.5599 14.1 17.5599H9.89C8.06 17.5599 7.99999 16.7599 7.92999 15.7299L7.5 9.12988"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

const TrushSquareOutline = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M17.899 9.8C17.879 9.8 17.849 9.8 17.829 9.8C14.369 9.46 10.9291 9.31999 7.51905 9.66999L6.17904 9.8C5.75904 9.84 5.39905 9.54 5.35905 9.13C5.31905 8.72 5.61904 8.34999 6.02904 8.30999L7.36904 8.17999C10.879 7.82999 14.419 7.95999 17.979 8.30999C18.389 8.34999 18.689 8.72 18.649 9.13C18.609 9.51 18.279 9.8 17.899 9.8Z"
        fill="currentColor"
      />
      <Path
        d="M14.2895 9.13995C13.9295 9.13995 13.6095 8.87996 13.5495 8.51996L13.4095 7.66995C13.3895 7.52995 13.3495 7.30995 13.3095 7.25995C13.3095 7.25995 13.2095 7.19995 12.8495 7.19995H11.1295C10.7595 7.19995 10.6595 7.25995 10.6595 7.25995C10.6395 7.29995 10.5995 7.51996 10.5795 7.65996L10.4395 8.51996C10.3695 8.92996 9.9795 9.19995 9.5795 9.13995C9.1695 9.06995 8.8995 8.67995 8.9595 8.27995L9.0995 7.41995C9.2095 6.77995 9.3895 5.70996 11.1295 5.70996H12.8495C14.5995 5.70996 14.7795 6.82995 14.8795 7.42995L15.0195 8.27995C15.0895 8.68995 14.8095 9.07995 14.4095 9.13995C14.3795 9.13995 14.3295 9.13995 14.2895 9.13995Z"
        fill="currentColor"
      />
      <Path
        d="M14.1 18.3101H9.89C7.36 18.3101 7.24999 16.7901 7.17999 15.7801L6.75 9.17012C6.72 8.76012 7.03999 8.40011 7.44999 8.37011C7.86999 8.34011 8.22 8.66013 8.25 9.07013L8.67999 15.6701C8.74999 16.6501 8.76 16.8001 9.89 16.8001H14.1C15.23 16.8001 15.24 16.6501 15.31 15.6701L15.74 9.07013C15.77 8.66013 16.11 8.34011 16.54 8.37011C16.95 8.40011 17.27 8.75012 17.24 9.17012L16.81 15.7701C16.74 16.7901 16.64 18.3101 14.1 18.3101Z"
        fill="currentColor"
      />
    </Svg>
  );
};

const TrushSquareTwotone = ({ size = 24, className, ...props }: IconProps) => {
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
      <G opacity="0.4">
        <Path
          d="M17.8996 9.04973C15.7196 8.82973 13.5196 8.71973 11.3296 8.71973C10.0296 8.71973 8.72961 8.78972 7.43961 8.91972L6.09961 9.04973"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <Path
          d="M9.70898 8.38994L9.84898 7.52994C9.94898 6.90994 10.029 6.43994 11.139 6.43994H12.859C13.969 6.43994 14.049 6.92994 14.149 7.52994L14.289 8.37994"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <Path
          d="M16.49 9.12988L16.06 15.7299C15.99 16.7599 15.93 17.5599 14.1 17.5599H9.89C8.06 17.5599 7.99999 16.7599 7.92999 15.7299L7.5 9.12988"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </G>
    </Svg>
  );
};

const variants: IconVariants = {
  bold: TrushSquareBold,
  broken: TrushSquareBroken,
  bulk: TrushSquareBulk,
  linear: TrushSquareLinear,
  outline: TrushSquareOutline,
  twotone: TrushSquareTwotone,
};

export const TrushSquareIcon = ({
  variant = iconDefaultOptions.variant,
  className,
  ...props
}: IconProps) => {
  const textClasses = useContext(TextClassContext);
  const Component = variants[variant];
  return <Component className={cn(textClasses, className)} {...props} />;
};
