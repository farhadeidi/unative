import { useContext } from "react";
import { G, Path, Svg } from "unative/lib/svg";
import { cn } from "unative/lib/utils";
import { TextClassContext } from "unative/ui/text";

import type { IconProps, IconVariants } from "../types/icons-type";

const GalleryImportBold = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M20.97 8H18.03C16.76 8 16 7.24 16 5.97V3.03C16 1.76 16.76 1 18.03 1H20.97C22.24 1 23 1.76 23 3.03V5.97C23 7.24 22.24 8 20.97 8ZM21.19 4.69C21.07 4.57 20.91 4.51 20.75 4.51C20.59 4.51 20.43 4.57 20.31 4.69L20.13 4.87V2.63C20.13 2.28 19.85 2 19.5 2C19.15 2 18.87 2.28 18.87 2.63V4.87L18.69 4.69C18.45 4.45 18.05 4.45 17.81 4.69C17.57 4.93 17.57 5.33 17.81 5.57L19.06 6.82C19.11 6.87 19.18 6.91 19.25 6.94C19.27 6.95 19.29 6.95 19.31 6.96C19.36 6.98 19.41 6.99 19.47 6.99C19.49 6.99 19.51 6.99 19.53 6.99C19.6 6.99 19.66 6.98 19.73 6.95C19.74 6.95 19.74 6.95 19.75 6.95C19.82 6.92 19.88 6.88 19.93 6.83C19.94 6.82 19.94 6.82 19.95 6.82L21.2 5.57C21.44 5.33 21.44 4.93 21.19 4.69Z"
        fill="currentColor"
      />
      <Path
        d="M9.00109 10.3811C10.3155 10.3811 11.3811 9.31553 11.3811 8.00109C11.3811 6.68666 10.3155 5.62109 9.00109 5.62109C7.68666 5.62109 6.62109 6.68666 6.62109 8.00109C6.62109 9.31553 7.68666 10.3811 9.00109 10.3811Z"
        fill="currentColor"
      />
      <Path
        d="M20.97 8H20.5V12.61L20.37 12.5C19.59 11.83 18.33 11.83 17.55 12.5L13.39 16.07C12.61 16.74 11.35 16.74 10.57 16.07L10.23 15.79C9.52 15.17 8.39 15.11 7.59 15.65L3.85 18.16C3.63 17.6 3.5 16.95 3.5 16.19V7.81C3.5 4.99 4.99 3.5 7.81 3.5H16V3.03C16 2.63 16.07 2.29 16.23 2H7.81C4.17 2 2 4.17 2 7.81V16.19C2 17.28 2.19 18.23 2.56 19.03C3.42 20.93 5.26 22 7.81 22H16.19C19.83 22 22 19.83 22 16.19V7.77C21.71 7.93 21.37 8 20.97 8Z"
        fill="currentColor"
      />
    </Svg>
  );
};

const GalleryImportBroken = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M9 6C7.9 6 7 6.9 7 8C7 9.1 7.9 10 9 10C10.1 10 11 9.1 11 8"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M2 13.04V15C2 20 4 22 9 22H15C20 22 22 20 22 15V10"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M13 2H9C4 2 2 4 2 9"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M18 2V8L20 6"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M18 8L16 6"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M2.66992 18.9501L7.59992 15.6401C8.38992 15.1101 9.52992 15.1701 10.2399 15.7801L10.5699 16.0701C11.3499 16.7401 12.6099 16.7401 13.3899 16.0701L17.5499 12.5001C18.3299 11.8301 19.5899 11.8301 20.3699 12.5001L21.9999 13.9001"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

const GalleryImportBulk = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M22.0005 13.9001V16.1901C22.0005 19.8301 19.8305 22.0001 16.1905 22.0001H7.81055C5.26055 22.0001 3.42055 20.9301 2.56055 19.0301L2.67055 18.9501L7.59055 15.6501C8.39055 15.1101 9.52055 15.1701 10.2305 15.7901L10.5705 16.0701C11.3505 16.7401 12.6105 16.7401 13.3905 16.0701L17.5505 12.5001C18.3305 11.8301 19.5905 11.8301 20.3705 12.5001L22.0005 13.9001Z"
        fill="currentColor"
      />
      <Path
        opacity="0.4"
        d="M20.97 8H18.03C16.76 8 16 7.24 16 5.97V3.03C16 2.63 16.08 2.29 16.22 2C16.21 2 16.2 2 16.19 2H7.81C4.17 2 2 4.17 2 7.81V16.19C2 17.28 2.19 18.23 2.56 19.03L2.67 18.95L7.59 15.65C8.39 15.11 9.52 15.17 10.23 15.79L10.57 16.07C11.35 16.74 12.61 16.74 13.39 16.07L17.55 12.5C18.33 11.83 19.59 11.83 20.37 12.5L22 13.9V7.81C22 7.8 22 7.79 22 7.78C21.71 7.92 21.37 8 20.97 8Z"
        fill="currentColor"
      />
      <Path
        d="M8.99914 10.3801C10.3136 10.3801 11.3791 9.31456 11.3791 8.00012C11.3791 6.68568 10.3136 5.62012 8.99914 5.62012C7.6847 5.62012 6.61914 6.68568 6.61914 8.00012C6.61914 9.31456 7.6847 10.3801 8.99914 10.3801Z"
        fill="currentColor"
      />
      <Path
        d="M20.97 8H18.03C16.76 8 16 7.24 16 5.97V3.03C16 1.76 16.76 1 18.03 1H20.97C22.24 1 23 1.76 23 3.03V5.97C23 7.24 22.24 8 20.97 8ZM21.19 4.69C21.07 4.57 20.91 4.51 20.75 4.51C20.59 4.51 20.43 4.57 20.31 4.69L20.13 4.87V2.63C20.13 2.28 19.85 2 19.5 2C19.15 2 18.87 2.28 18.87 2.63V4.87L18.69 4.69C18.45 4.45 18.05 4.45 17.81 4.69C17.57 4.93 17.57 5.33 17.81 5.57L19.06 6.82C19.11 6.87 19.18 6.91 19.25 6.94C19.27 6.95 19.29 6.95 19.31 6.96C19.36 6.98 19.41 6.99 19.47 6.99C19.49 6.99 19.51 6.99 19.53 6.99C19.6 6.99 19.66 6.98 19.73 6.95C19.74 6.95 19.74 6.95 19.75 6.95C19.82 6.92 19.88 6.88 19.93 6.83C19.94 6.82 19.94 6.82 19.95 6.82L21.2 5.57C21.44 5.33 21.44 4.93 21.19 4.69Z"
        fill="currentColor"
      />
    </Svg>
  );
};

const GalleryImportLinear = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M9 10C10.1046 10 11 9.10457 11 8C11 6.89543 10.1046 6 9 6C7.89543 6 7 6.89543 7 8C7 9.10457 7.89543 10 9 10Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M13 2H9C4 2 2 4 2 9V15C2 20 4 22 9 22H15C20 22 22 20 22 15V10"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M18 2V8L20 6"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M18 8L16 6"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M2.67004 18.9501L7.60004 15.6401C8.39004 15.1101 9.53004 15.1701 10.24 15.7801L10.57 16.0701C11.35 16.7401 12.61 16.7401 13.39 16.0701L17.55 12.5001C18.33 11.8301 19.59 11.8301 20.37 12.5001L22 13.9001"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

const GalleryImportOutline = ({
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
        d="M9 10.75C7.48 10.75 6.25 9.52 6.25 8C6.25 6.48 7.48 5.25 9 5.25C10.52 5.25 11.75 6.48 11.75 8C11.75 9.52 10.52 10.75 9 10.75ZM9 6.75C8.31 6.75 7.75 7.31 7.75 8C7.75 8.69 8.31 9.25 9 9.25C9.69 9.25 10.25 8.69 10.25 8C10.25 7.31 9.69 6.75 9 6.75Z"
        fill="currentColor"
      />
      <Path
        d="M15 22.75H9C3.57 22.75 1.25 20.43 1.25 15V9C1.25 3.57 3.57 1.25 9 1.25H13C13.41 1.25 13.75 1.59 13.75 2C13.75 2.41 13.41 2.75 13 2.75H9C4.39 2.75 2.75 4.39 2.75 9V15C2.75 19.61 4.39 21.25 9 21.25H15C19.61 21.25 21.25 19.61 21.25 15V10C21.25 9.59 21.59 9.25 22 9.25C22.41 9.25 22.75 9.59 22.75 10V15C22.75 20.43 20.43 22.75 15 22.75Z"
        fill="currentColor"
      />
      <Path
        d="M18 8.75C17.9 8.75 17.81 8.73 17.71 8.69C17.43 8.58 17.25 8.3 17.25 8V2C17.25 1.59 17.59 1.25 18 1.25C18.41 1.25 18.75 1.59 18.75 2V6.19L19.47 5.47C19.76 5.18 20.24 5.18 20.53 5.47C20.82 5.76 20.82 6.24 20.53 6.53L18.53 8.53C18.39 8.67 18.2 8.75 18 8.75Z"
        fill="currentColor"
      />
      <Path
        d="M17.9995 8.74994C17.8095 8.74994 17.6195 8.67994 17.4695 8.52994L15.4695 6.52994C15.1795 6.23994 15.1795 5.75994 15.4695 5.46994C15.7595 5.17994 16.2395 5.17994 16.5295 5.46994L18.5295 7.46994C18.8195 7.75994 18.8195 8.23994 18.5295 8.52994C18.3795 8.67994 18.1895 8.74994 17.9995 8.74994Z"
        fill="currentColor"
      />
      <Path
        d="M2.67075 19.7001C2.43075 19.7001 2.19075 19.5801 2.05075 19.3701C1.82075 19.0301 1.91075 18.5601 2.26075 18.3301L7.19075 15.0201C8.27075 14.2901 9.76075 14.3801 10.7407 15.2101L11.0707 15.5001C11.5707 15.9301 12.4207 15.9301 12.9107 15.5001L17.0707 11.9301C18.1307 11.0201 19.8007 11.0201 20.8707 11.9301L22.5007 13.3301C22.8107 13.6001 22.8507 14.0701 22.5807 14.3901C22.3107 14.7001 21.8407 14.7401 21.5207 14.4701L19.8907 13.0701C19.3907 12.6401 18.5407 12.6401 18.0407 13.0701L13.8807 16.6401C12.8207 17.5501 11.1507 17.5501 10.0807 16.6401L9.75075 16.3501C9.29075 15.9601 8.53075 15.9201 8.02075 16.2701L3.09075 19.5801C2.96075 19.6601 2.81075 19.7001 2.67075 19.7001Z"
        fill="currentColor"
      />
    </Svg>
  );
};

const GalleryImportTwotone = ({
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
        opacity="0.4"
        d="M9 10C10.1046 10 11 9.10457 11 8C11 6.89543 10.1046 6 9 6C7.89543 6 7 6.89543 7 8C7 9.10457 7.89543 10 9 10Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M13 2H9C4 2 2 4 2 9V15C2 20 4 22 9 22H15C20 22 22 20 22 15V10"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <G opacity="0.4">
        <Path
          d="M18 2V8L20 6"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <Path
          d="M18 8L16 6"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </G>
      <Path
        opacity="0.4"
        d="M2.66992 18.9501L7.59992 15.6401C8.38992 15.1101 9.52992 15.1701 10.2399 15.7801L10.5699 16.0701C11.3499 16.7401 12.6099 16.7401 13.3899 16.0701L17.5499 12.5001C18.3299 11.8301 19.5899 11.8301 20.3699 12.5001L21.9999 13.9001"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

const variants: IconVariants = {
  bold: GalleryImportBold,
  broken: GalleryImportBroken,
  bulk: GalleryImportBulk,
  linear: GalleryImportLinear,
  outline: GalleryImportOutline,
  twotone: GalleryImportTwotone,
};

export const GalleryImportIcon = ({
  variant = "linear",
  className,
  ...props
}: IconProps) => {
  const textClasses = useContext(TextClassContext);
  const Component = variants[variant];
  return <Component className={cn(textClasses, className)} {...props} />;
};
