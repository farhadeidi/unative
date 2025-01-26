import { useContext } from "react";
import { Path, Svg } from "unative/lib/svg";
import { cn } from "unative/lib/utils";
import { TextClassContext } from "unative/ui/text";

import type { IconProps, IconVariants } from "../types/icons-type";

const DocumentFavoriteBold = ({
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
        d="M20.5 10.19H17.61C15.24 10.19 13.31 8.26 13.31 5.89V3C13.31 2.45 12.86 2 12.31 2H8.07C4.99 2 2.5 4 2.5 7.57V16.43C2.5 20 4.99 22 8.07 22H15.93C19.01 22 21.5 20 21.5 16.43V11.19C21.5 10.64 21.05 10.19 20.5 10.19ZM12.48 15.7C11.96 17.37 10.13 18.27 9.5 18.27C8.86 18.27 7.07 17.4 6.52 15.7C6.16 14.59 6.57 13.14 7.84 12.73C8.42 12.54 9.04 12.65 9.49 13C9.94 12.65 10.56 12.54 11.15 12.73C12.43 13.14 12.83 14.59 12.48 15.7Z"
        fill="currentColor"
      />
      <Path
        d="M17.4297 8.81048C18.3797 8.82048 19.6997 8.82048 20.8297 8.82048C21.3997 8.82048 21.6997 8.15048 21.2997 7.75048C19.8597 6.30048 17.2797 3.69048 15.7997 2.21048C15.3897 1.80048 14.6797 2.08048 14.6797 2.65048V6.14048C14.6797 7.60048 15.9197 8.81048 17.4297 8.81048Z"
        fill="currentColor"
      />
    </Svg>
  );
};

const DocumentFavoriteBroken = ({
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
        d="M9.41978 18.2001C8.91978 18.2001 7.14978 17.3701 6.61978 15.7201C6.28978 14.6901 6.67978 13.4201 7.74978 13.0701C8.31978 12.8901 9.01978 13.0401 9.40978 13.5901C9.77978 13.0201 10.5098 12.8901 11.0698 13.0701C12.1498 13.4201 12.5298 14.6901 12.2098 15.7201"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M2 9C2 4 4 2 9 2H14"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M22 10V15C22 20 20 22 15 22H9C4 22 2 20 2 15V12.98"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M18 10C15 10 14 9 14 6V2L22 10"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

const DocumentFavoriteBulk = ({
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
        d="M20.5 10.19H17.61C15.24 10.19 13.31 8.26 13.31 5.89V3C13.31 2.45 12.86 2 12.31 2H8.07C4.99 2 2.5 4 2.5 7.57V16.43C2.5 20 4.99 22 8.07 22H15.93C19.01 22 21.5 20 21.5 16.43V11.19C21.5 10.64 21.05 10.19 20.5 10.19Z"
        fill="currentColor"
      />
      <Path
        d="M15.7997 2.20999C15.3897 1.79999 14.6797 2.07999 14.6797 2.64999V6.13999C14.6797 7.59999 15.9197 8.80999 17.4297 8.80999C18.3797 8.81999 19.6997 8.81999 20.8297 8.81999C21.3997 8.81999 21.6997 8.14999 21.2997 7.74999C19.8597 6.29999 17.2797 3.68999 15.7997 2.20999Z"
        fill="currentColor"
      />
      <Path
        d="M11.1592 12.7299C10.5692 12.5399 9.93922 12.6499 9.49922 12.9999C9.03922 12.6499 8.42922 12.5399 7.84922 12.7299C6.57922 13.1399 6.17922 14.5899 6.52922 15.6999C7.06922 17.3999 8.85922 18.2699 9.50922 18.2699C10.1392 18.2699 11.9592 17.3699 12.4892 15.6999C12.8292 14.5899 12.4292 13.1399 11.1592 12.7299Z"
        fill="currentColor"
      />
    </Svg>
  );
};

const DocumentFavoriteLinear = ({
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
        d="M22 10V15C22 20 20 22 15 22H9C4 22 2 20 2 15V9C2 4 4 2 9 2H14"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M22 10H18C15 10 14 9 14 6V2L22 10Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M6.62003 15.7301C6.29003 14.7001 6.68003 13.4301 7.75003 13.0801C8.32003 12.9001 9.02003 13.0501 9.41003 13.6001C9.78003 13.0301 10.51 12.9001 11.07 13.0801C12.15 13.4301 12.53 14.7001 12.21 15.7301C11.7 17.3601 9.91003 18.2101 9.41003 18.2101C8.92003 18.2001 7.15003 17.3701 6.62003 15.7301Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

const DocumentFavoriteOutline = ({
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
        d="M15 22.75H9C3.57 22.75 1.25 20.43 1.25 15V9C1.25 3.57 3.57 1.25 9 1.25H14C14.41 1.25 14.75 1.59 14.75 2C14.75 2.41 14.41 2.75 14 2.75H9C4.39 2.75 2.75 4.39 2.75 9V15C2.75 19.61 4.39 21.25 9 21.25H15C19.61 21.25 21.25 19.61 21.25 15V10C21.25 9.59 21.59 9.25 22 9.25C22.41 9.25 22.75 9.59 22.75 10V15C22.75 20.43 20.43 22.75 15 22.75Z"
        fill="currentColor"
      />
      <Path
        d="M22 10.75H18C14.58 10.75 13.25 9.41999 13.25 5.99999V1.99999C13.25 1.69999 13.43 1.41999 13.71 1.30999C13.99 1.18999 14.31 1.25999 14.53 1.46999L22.53 9.46999C22.74 9.67999 22.81 10.01 22.69 10.29C22.57 10.57 22.3 10.75 22 10.75ZM14.75 3.80999V5.99999C14.75 8.57999 15.42 9.24999 18 9.24999H20.19L14.75 3.80999Z"
        fill="currentColor"
      />
      <Path
        d="M9.41938 18.9501C8.54938 18.9501 6.52938 17.8901 5.90938 15.9501C5.47938 14.6101 5.97938 12.8601 7.52938 12.3601C8.17938 12.1501 8.86938 12.2401 9.41938 12.5801C9.95938 12.2401 10.6594 12.1501 11.3194 12.3601C12.8694 12.8601 13.3694 14.6101 12.9394 15.9501C12.3094 17.9301 10.1894 18.9501 9.41938 18.9501ZM7.32938 15.5001C7.74938 16.8101 9.16938 17.4301 9.42938 17.4501C9.70938 17.4201 11.1094 16.7301 11.4994 15.5001C11.7094 14.8401 11.4994 14.0001 10.8494 13.7901C10.5794 13.7001 10.2094 13.7501 10.0394 14.0101C9.89938 14.2201 9.67938 14.3401 9.42938 14.3501C9.15938 14.3501 8.94938 14.2401 8.80938 14.0401C8.59938 13.7501 8.23938 13.7101 7.97938 13.8001C7.33938 14.0001 7.11938 14.8401 7.32938 15.5001Z"
        fill="currentColor"
      />
    </Svg>
  );
};

const DocumentFavoriteTwotone = ({
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
        d="M22 10V15C22 20 20 22 15 22H9C4 22 2 20 2 15V9C2 4 4 2 9 2H14"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M22 10H18C15 10 14 9 14 6V2L22 10Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        opacity="0.4"
        d="M6.61978 15.7299C6.28978 14.6999 6.67978 13.4299 7.74978 13.0799C8.31978 12.8999 9.01978 13.0499 9.40978 13.5999C9.77978 13.0299 10.5098 12.8999 11.0698 13.0799C12.1498 13.4299 12.5298 14.6999 12.2098 15.7299C11.6998 17.3599 9.90978 18.2099 9.40978 18.2099C8.91978 18.1999 7.14978 17.3699 6.61978 15.7299Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

const variants: IconVariants = {
  bold: DocumentFavoriteBold,
  broken: DocumentFavoriteBroken,
  bulk: DocumentFavoriteBulk,
  linear: DocumentFavoriteLinear,
  outline: DocumentFavoriteOutline,
  twotone: DocumentFavoriteTwotone,
};

export const DocumentFavoriteIcon = ({
  variant = "linear",
  className,
  ...props
}: IconProps) => {
  const textClasses = useContext(TextClassContext);
  const Component = variants[variant];
  return <Component className={cn(textClasses, className)} {...props} />;
};
