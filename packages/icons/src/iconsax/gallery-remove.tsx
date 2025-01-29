import { useContext } from "react";
import { cn } from "unative/lib/utils";
import { G, Path, Svg } from "unative/ui/svg";
import { TextClassContext } from "unative/ui/text";

import type { IconProps, IconVariants } from "../icon-options";
import { defaultOptions } from "../icon-options";

const GalleryRemoveBold = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M20.97 1H18.03C16.76 1 16 1.76 16 3.03V5.97C16 7.24 16.76 8 18.03 8H20.97C22.24 8 23 7.24 23 5.97V3.03C23 1.76 22.24 1 20.97 1ZM21.47 5.56C21.72 5.81 21.72 6.22 21.47 6.47C21.34 6.59 21.18 6.65 21.01 6.65C20.85 6.65 20.69 6.59 20.56 6.47L19.5 5.41L18.45 6.47C18.32 6.59 18.16 6.65 17.99 6.65C17.83 6.65 17.67 6.59 17.54 6.47C17.29 6.22 17.29 5.81 17.54 5.56L18.6 4.5L17.54 3.45C17.29 3.2 17.29 2.79 17.54 2.54C17.79 2.29 18.2 2.29 18.45 2.54L19.5 3.6L20.56 2.54C20.81 2.29 21.22 2.29 21.47 2.54C21.72 2.79 21.72 3.2 21.47 3.45L20.41 4.5L21.47 5.56Z"
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

const GalleryRemoveBroken = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M2 12.89V15C2 20 4 22 9 22H15C20 22 22 20 22 15V10"
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
        d="M2.66992 18.9501L7.59992 15.6401C8.38992 15.1101 9.52992 15.1701 10.2399 15.7801L10.5699 16.0701C11.3499 16.7401 12.6099 16.7401 13.3899 16.0701L17.5499 12.5001C18.3299 11.8301 19.5899 11.8301 20.3699 12.5001L21.9999 13.9001"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M16.5605 5.93957L20.4405 2.05957"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <Path
        d="M20.4405 5.93957L16.5605 2.05957"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </Svg>
  );
};

const GalleryRemoveBulk = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M20.97 1H18.03C16.76 1 16 1.76 16 3.03V5.97C16 7.24 16.76 8 18.03 8H20.97C22.24 8 23 7.24 23 5.97V3.03C23 1.76 22.24 1 20.97 1ZM21.47 5.56C21.72 5.81 21.72 6.22 21.47 6.47C21.34 6.59 21.18 6.65 21.01 6.65C20.85 6.65 20.69 6.59 20.56 6.47L19.5 5.41L18.45 6.47C18.32 6.59 18.16 6.65 17.99 6.65C17.83 6.65 17.67 6.59 17.54 6.47C17.29 6.22 17.29 5.81 17.54 5.56L18.6 4.5L17.54 3.45C17.29 3.2 17.29 2.79 17.54 2.54C17.79 2.29 18.2 2.29 18.45 2.54L19.5 3.6L20.56 2.54C20.81 2.29 21.22 2.29 21.47 2.54C21.72 2.79 21.72 3.2 21.47 3.45L20.41 4.5L21.47 5.56Z"
        fill="currentColor"
      />
    </Svg>
  );
};

const GalleryRemoveLinear = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M16.5601 6.94006L20.4401 3.06006"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <Path
        d="M20.4401 6.94006L16.5601 3.06006"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
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

const GalleryRemoveOutline = ({
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
        d="M16.56 7.69023C16.37 7.69023 16.18 7.62023 16.03 7.47023C15.74 7.18023 15.74 6.70023 16.03 6.41023L19.92 2.52023C20.21 2.23023 20.69 2.23023 20.98 2.52023C21.27 2.81023 21.27 3.29023 20.98 3.58023L17.09 7.47023C16.94 7.62023 16.75 7.69023 16.56 7.69023Z"
        fill="currentColor"
      />
      <Path
        d="M20.4402 7.69023C20.2502 7.69023 20.0602 7.62023 19.9102 7.47023L16.0202 3.58023C15.7302 3.29023 15.7302 2.81023 16.0202 2.52023C16.3102 2.23023 16.7902 2.23023 17.0802 2.52023L20.9702 6.41023C21.2602 6.70023 21.2602 7.18023 20.9702 7.47023C20.8302 7.62023 20.6402 7.69023 20.4402 7.69023Z"
        fill="currentColor"
      />
      <Path
        d="M2.66932 19.7001C2.42932 19.7001 2.18932 19.5801 2.04932 19.3701C1.81932 19.0301 1.90932 18.5601 2.24932 18.3301L7.17932 15.0201C8.25932 14.3001 9.74932 14.3801 10.7293 15.2101L11.0593 15.5001C11.5593 15.9301 12.4093 15.9301 12.8993 15.5001L17.0593 11.9301C18.1193 11.0201 19.7893 11.0201 20.8593 11.9301L22.4893 13.3301C22.7993 13.6001 22.8393 14.0701 22.5693 14.3901C22.2993 14.7001 21.8293 14.7401 21.5093 14.4701L19.8793 13.0701C19.3793 12.6401 18.5293 12.6401 18.0393 13.0701L13.8793 16.6401C12.8193 17.5501 11.1493 17.5501 10.0793 16.6401L9.74932 16.3501C9.28932 15.9601 8.52932 15.9201 8.01932 16.2701L3.09932 19.5801C2.95932 19.6601 2.80932 19.7001 2.66932 19.7001Z"
        fill="currentColor"
      />
    </Svg>
  );
};

const GalleryRemoveTwotone = ({
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
          d="M16.5605 6.94006L20.4405 3.06006"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
        <Path
          d="M20.4405 6.94006L16.5605 3.06006"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
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
  bold: GalleryRemoveBold,
  broken: GalleryRemoveBroken,
  bulk: GalleryRemoveBulk,
  linear: GalleryRemoveLinear,
  outline: GalleryRemoveOutline,
  twotone: GalleryRemoveTwotone,
};

export const GalleryRemoveIcon = ({
  variant = defaultOptions.variant,
  className,
  ...props
}: IconProps) => {
  const textClasses = useContext(TextClassContext);
  const Component = variants[variant];
  return <Component className={cn(textClasses, className)} {...props} />;
};

export default GalleryRemoveIcon;
