import { Path, Svg } from "unative/lib/svg";
import { cn } from "unative/lib/utils";

import type { IconProps, IconVariants } from "../types/icons-type";

const LikeBold = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M18 2H6C4.34 2 3 3.33 3 4.97V15.88C3 17.52 4.34 18.85 6 18.85H6.76C7.56 18.85 8.32 19.16 8.88 19.72L10.59 21.41C11.37 22.18 12.64 22.18 13.42 21.41L15.13 19.72C15.69 19.16 16.46 18.85 17.25 18.85H18C19.66 18.85 21 17.52 21 15.88V4.97C21 3.33 19.66 2 18 2ZM12.28 14.96C12.13 15.01 11.88 15.01 11.72 14.96C10.42 14.51 7.5 12.66 7.5 9.51C7.51 8.12 8.62 7 10 7C10.82 7 11.54 7.39 12 8C12.46 7.39 13.18 7 14 7C15.38 7 16.5 8.12 16.5 9.51C16.49 12.66 13.58 14.51 12.28 14.96Z"
        fill="currentColor"
      />
    </Svg>
  );
};

const LikeBroken = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M3 4.96997C3 3.32997 4.34 2 6 2H18C19.66 2 21 3.32997 21 4.96997V15.88C21 17.52 19.66 18.85 18 18.85H17.24C16.44 18.85 15.68 19.16 15.12 19.72L13.41 21.41C12.63 22.18 11.36 22.18 10.58 21.41L8.87 19.72C8.31 19.16 7.54 18.85 6.75 18.85H6C4.34 18.85 3 17.52 3 15.88V9.03998"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M12.28 14.96C12.13 15.01 11.88 15.01 11.72 14.96C10.42 14.51 7.5 12.66 7.5 9.51001C7.5 8.12001 8.62 7 10 7C10.82 7 11.54 7.39 12 8C12.46 7.39 13.18 7 14 7C15.38 7 16.5 8.12001 16.5 9.51001C16.5 10.67 16.11 11.65 15.55 12.45"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

const LikeBulk = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M18 18.86H17.24C16.44 18.86 15.68 19.17 15.12 19.73L13.41 21.42C12.63 22.19 11.36 22.19 10.58 21.42L8.87 19.73C8.31 19.17 7.54 18.86 6.75 18.86H6C4.34 18.86 3 17.53 3 15.89V4.98001C3 3.34001 4.34 2.01001 6 2.01001H18C19.66 2.01001 21 3.34001 21 4.98001V15.89C21 17.52 19.66 18.86 18 18.86Z"
        fill="currentColor"
      />
      <Path
        d="M12.28 14.96C12.13 15.01 11.88 15.01 11.72 14.96C10.42 14.51 7.5 12.66 7.5 9.51001C7.5 8.12001 8.62 7 10 7C10.82 7 11.54 7.39 12 8C12.46 7.39 13.18 7 14 7C15.38 7 16.5 8.12001 16.5 9.51001C16.49 12.66 13.58 14.51 12.28 14.96Z"
        fill="currentColor"
      />
    </Svg>
  );
};

const LikeLinear = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M18 18.86H17.24C16.44 18.86 15.68 19.17 15.12 19.73L13.41 21.42C12.63 22.19 11.36 22.19 10.58 21.42L8.87 19.73C8.31 19.17 7.54 18.86 6.75 18.86H6C4.34 18.86 3 17.53 3 15.89V4.97998C3 3.33998 4.34 2.01001 6 2.01001H18C19.66 2.01001 21 3.33998 21 4.97998V15.89C21 17.52 19.66 18.86 18 18.86Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M12.28 14.96C12.13 15.01 11.88 15.01 11.72 14.96C10.42 14.51 7.5 12.66 7.5 9.51001C7.5 8.12001 8.62 7 10 7C10.82 7 11.54 7.39 12 8C12.46 7.39 13.18 7 14 7C15.38 7 16.5 8.12001 16.5 9.51001C16.49 12.66 13.58 14.51 12.28 14.96Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

const LikeOutline = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M12 22.75C11.3 22.75 10.59 22.48 10.06 21.95L8.35001 20.26C7.93001 19.84 7.35001 19.61 6.76001 19.61H6C3.93 19.61 2.25 17.94 2.25 15.89V4.97998C2.25 2.92998 3.93 1.26001 6 1.26001H18C20.07 1.26001 21.75 2.92998 21.75 4.97998V15.89C21.75 17.94 20.07 19.61 18 19.61H17.24C16.65 19.61 16.07 19.85 15.65 20.26L13.94 21.95C13.41 22.48 12.7 22.75 12 22.75ZM6 2.75C4.76 2.75 3.75 3.74997 3.75 4.96997V15.88C3.75 17.11 4.76 18.1 6 18.1H6.76001C7.75001 18.1 8.71 18.5 9.41 19.19L11.12 20.88C11.61 21.36 12.4 21.36 12.89 20.88L14.6 19.19C15.3 18.5 16.26 18.1 17.25 18.1H18C19.24 18.1 20.25 17.1 20.25 15.88V4.96997C20.25 3.73997 19.24 2.75 18 2.75H6Z"
        fill="currentColor"
      />
      <Path
        d="M11.9998 15.75C11.8198 15.75 11.6398 15.72 11.4798 15.67C10.1598 15.22 6.75977 13.23 6.75977 9.51001C6.75977 7.71001 8.21977 6.25 10.0098 6.25C10.7398 6.25 11.4398 6.5 12.0098 6.94C12.5798 6.5 13.2798 6.25 14.0098 6.25C15.7998 6.25 17.2598 7.71001 17.2598 9.51001C17.2598 13.23 13.8498 15.22 12.5398 15.67C12.3598 15.72 12.1798 15.75 11.9998 15.75ZM9.99976 7.75C9.03976 7.75 8.24976 8.54001 8.24976 9.51001C8.24976 12.34 10.9997 13.92 11.9597 14.25C11.9697 14.25 12.0098 14.25 12.0398 14.25C13.0098 13.91 15.7397 12.33 15.7397 9.52002C15.7397 8.55002 14.9597 7.76001 13.9897 7.76001C13.4397 7.76001 12.9298 8.02002 12.5898 8.46002C12.3098 8.84002 11.6698 8.84002 11.3898 8.46002C11.0698 8.01002 10.5598 7.75 9.99976 7.75Z"
        fill="currentColor"
      />
    </Svg>
  );
};

const LikeTwotone = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M18 18.8597H17.24C16.44 18.8597 15.68 19.1697 15.12 19.7297L13.41 21.4197C12.63 22.1897 11.36 22.1897 10.58 21.4197L8.87 19.7297C8.31 19.1697 7.54 18.8597 6.75 18.8597H6C4.34 18.8597 3 17.5298 3 15.8898V4.97974C3 3.33974 4.34 2.00977 6 2.00977H18C19.66 2.00977 21 3.33974 21 4.97974V15.8898C21 17.5198 19.66 18.8597 18 18.8597Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        opacity="0.4"
        d="M12.28 14.96C12.13 15.01 11.88 15.01 11.72 14.96C10.42 14.51 7.5 12.66 7.5 9.51001C7.5 8.12001 8.62 7 10 7C10.82 7 11.54 7.39 12 8C12.46 7.39 13.18 7 14 7C15.38 7 16.5 8.12001 16.5 9.51001C16.49 12.66 13.58 14.51 12.28 14.96Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

const variants: IconVariants = {
  bold: LikeBold,
  broken: LikeBroken,
  bulk: LikeBulk,
  linear: LikeLinear,
  outline: LikeOutline,
  twotone: LikeTwotone,
};

export const LikeIcon = ({ variant = "linear", ...props }: IconProps) => {
  const Component = variants[variant];
  return <Component {...props} />;
};
