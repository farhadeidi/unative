import { useContext } from "react";
import { Path, Svg } from "unative/lib/svg";
import { cn } from "unative/lib/utils";
import { TextClassContext } from "unative/ui/text";

import type { IconProps, IconVariants } from "../types/icons-type";

const GalleryFavoriteBold = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M9.00109 10.3811C10.3155 10.3811 11.3811 9.31553 11.3811 8.00109C11.3811 6.68666 10.3155 5.62109 9.00109 5.62109C7.68666 5.62109 6.62109 6.68666 6.62109 8.00109C6.62109 9.31553 7.68666 10.3811 9.00109 10.3811Z"
        fill="currentColor"
      />
      <Path
        d="M20.97 8H20.5V12.61L20.37 12.5C19.59 11.83 18.33 11.83 17.55 12.5L13.39 16.07C12.61 16.74 11.35 16.74 10.57 16.07L10.23 15.79C9.52 15.17 8.39 15.11 7.59 15.65L3.85 18.16C3.63 17.6 3.5 16.95 3.5 16.19V7.81C3.5 4.99 4.99 3.5 7.81 3.5H16V3.03C16 2.63 16.07 2.29 16.23 2H7.81C4.17 2 2 4.17 2 7.81V16.19C2 17.28 2.19 18.23 2.56 19.03C3.42 20.93 5.26 22 7.81 22H16.19C19.83 22 22 19.83 22 16.19V7.77C21.71 7.93 21.37 8 20.97 8Z"
        fill="currentColor"
      />
      <Path
        d="M20.97 1H18.03C17.16 1 16.52 1.36 16.23 2C16.07 2.29 16 2.63 16 3.03V3.5V5.97C16 7.24 16.76 8 18.03 8H20.5H20.97C21.37 8 21.71 7.93 22 7.77C22.64 7.48 23 6.84 23 5.97V3.03C23 1.76 22.24 1 20.97 1ZM20.3 6.21C19.98 6.4 19.67 6.5 19.5 6.5C19.05 6.5 17.77 5.88 17.39 4.68C17.33 4.5 17.3 4.3 17.3 4.11C17.3 3.94 17.32 3.77 17.37 3.61C17.5 3.14 17.81 2.73 18.33 2.56C18.53 2.5 18.74 2.48 18.93 2.52C19.13 2.55 19.32 2.63 19.49 2.76C19.81 2.51 20.25 2.43 20.67 2.56C21.58 2.86 21.87 3.89 21.61 4.68C21.57 4.8 21.52 4.92 21.46 5.03C21.19 5.57 20.73 5.97 20.3 6.21Z"
        fill="currentColor"
      />
    </Svg>
  );
};

const GalleryFavoriteBroken = ({
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
        d="M9 6C7.9 6 7 6.9 7 8C7 9.1 7.9 10 9 10C10.1 10 11 9.1 11 8"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M2 12.98V15C2 20 4 22 9 22H15C20 22 22 20 22 15V11"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M12 2H9C4 2 2 4 2 9"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M16.1197 5.1099C15.7897 4.0699 16.1797 2.7799 17.2597 2.4299C17.8297 2.2499 18.5397 2.3999 18.9397 2.9499C19.3197 2.3799 20.0497 2.2399 20.6197 2.4299C21.7097 2.7799 22.0997 4.0699 21.7697 5.1099C21.2497 6.7499 19.4497 7.6099 18.9497 7.6099C18.4397 7.6099 16.6497 6.7699 16.1197 5.1099Z"
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

const GalleryFavoriteBulk = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M20.97 1H18.03C16.76 1 16 1.76 16 3.03V5.97C16 7.24 16.76 8 18.03 8H20.97C22.24 8 23 7.24 23 5.97V3.03C23 1.76 22.24 1 20.97 1ZM21.61 4.68C21.24 5.86 19.95 6.5 19.5 6.5C19.05 6.5 17.77 5.88 17.39 4.68C17.33 4.5 17.3 4.3 17.3 4.11C17.3 3.46 17.63 2.79 18.32 2.57C18.73 2.44 19.17 2.51 19.48 2.77C19.8 2.52 20.24 2.44 20.66 2.57C21.58 2.86 21.87 3.89 21.61 4.68Z"
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
    </Svg>
  );
};

const GalleryFavoriteLinear = ({
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
        d="M9 10C10.1046 10 11 9.10457 11 8C11 6.89543 10.1046 6 9 6C7.89543 6 7 6.89543 7 8C7 9.10457 7.89543 10 9 10Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M12 2H9C4 2 2 4 2 9V15C2 20 4 22 9 22H15C20 22 22 20 22 15V11"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M16.12 5.1099C15.79 4.0699 16.18 2.7799 17.26 2.4299C17.83 2.2499 18.54 2.3999 18.94 2.9499C19.32 2.3799 20.05 2.2399 20.62 2.4299C21.71 2.7799 22.1 4.0699 21.77 5.1099C21.25 6.7499 19.45 7.6099 18.95 7.6099C18.44 7.6099 16.65 6.7699 16.12 5.1099Z"
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

const GalleryFavoriteOutline = ({
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
        d="M15 22.75H9C3.57 22.75 1.25 20.43 1.25 15V9C1.25 3.57 3.57 1.25 9 1.25H12C12.41 1.25 12.75 1.59 12.75 2C12.75 2.41 12.41 2.75 12 2.75H9C4.39 2.75 2.75 4.39 2.75 9V15C2.75 19.61 4.39 21.25 9 21.25H15C19.61 21.25 21.25 19.61 21.25 15V11C21.25 10.59 21.59 10.25 22 10.25C22.41 10.25 22.75 10.59 22.75 11V15C22.75 20.43 20.43 22.75 15 22.75Z"
        fill="currentColor"
      />
      <Path
        d="M18.9395 8.35994C18.0695 8.35994 16.0295 7.28994 15.3995 5.33994C14.9695 3.98994 15.4695 2.21994 17.0295 1.71994C17.6895 1.50994 18.3795 1.59994 18.9295 1.93994C19.4695 1.59994 20.1795 1.49994 20.8495 1.71994C22.4095 2.21994 22.9095 3.98994 22.4795 5.33994C21.8495 7.32994 19.7095 8.35994 18.9395 8.35994ZM16.8295 4.87994C17.2595 6.20994 18.6995 6.82994 18.9595 6.85994C19.2495 6.82994 20.6595 6.12994 21.0495 4.87994C21.2595 4.20994 21.0495 3.35994 20.3895 3.13994C20.1095 3.04994 19.7395 3.09994 19.5695 3.35994C19.4295 3.56994 19.1995 3.69994 18.9595 3.69994C18.7295 3.69994 18.4795 3.58994 18.3395 3.38994C18.1295 3.09994 17.7595 3.05994 17.4995 3.13994C16.8295 3.35994 16.6195 4.20994 16.8295 4.87994Z"
        fill="currentColor"
      />
      <Path
        d="M2.67075 19.7001C2.43075 19.7001 2.19075 19.5801 2.05075 19.3701C1.82075 19.0301 1.91075 18.5601 2.26075 18.3301L7.19075 15.0201C8.27075 14.2901 9.76075 14.3801 10.7407 15.2101L11.0707 15.5001C11.5707 15.9301 12.4207 15.9301 12.9107 15.5001L17.0707 11.9301C18.1307 11.0201 19.8007 11.0201 20.8707 11.9301L22.5007 13.3301C22.8107 13.6001 22.8507 14.0701 22.5807 14.3901C22.3107 14.7001 21.8407 14.7401 21.5207 14.4701L19.8907 13.0701C19.3907 12.6401 18.5407 12.6401 18.0407 13.0701L13.8807 16.6401C12.8207 17.5501 11.1507 17.5501 10.0807 16.6401L9.75075 16.3501C9.29075 15.9601 8.53075 15.9201 8.02075 16.2701L3.09075 19.5801C2.96075 19.6601 2.81075 19.7001 2.67075 19.7001Z"
        fill="currentColor"
      />
    </Svg>
  );
};

const GalleryFavoriteTwotone = ({
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
        d="M12 2H9C4 2 2 4 2 9V15C2 20 4 22 9 22H15C20 22 22 20 22 15V11"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        opacity="0.4"
        d="M16.1197 5.1099C15.7897 4.0699 16.1797 2.7799 17.2597 2.4299C17.8297 2.2499 18.5397 2.3999 18.9397 2.9499C19.3197 2.3799 20.0497 2.2399 20.6197 2.4299C21.7097 2.7799 22.0997 4.0699 21.7697 5.1099C21.2497 6.7499 19.4497 7.6099 18.9497 7.6099C18.4397 7.6099 16.6497 6.7699 16.1197 5.1099Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
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
  bold: GalleryFavoriteBold,
  broken: GalleryFavoriteBroken,
  bulk: GalleryFavoriteBulk,
  linear: GalleryFavoriteLinear,
  outline: GalleryFavoriteOutline,
  twotone: GalleryFavoriteTwotone,
};

export const GalleryFavoriteIcon = ({
  variant = "linear",
  className,
  ...props
}: IconProps) => {
  const textClasses = useContext(TextClassContext);
  const Component = variants[variant];
  return <Component className={cn(textClasses, className)} {...props} />;
};
