import { useContext } from "react";
import { Path, Svg } from "unative/lib/svg";
import { cn } from "unative/lib/utils";
import { TextClassContext } from "unative/ui/text";

import type { IconProps, IconVariants } from "../types/icons-type";

const ArrowSwapBold = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M16.19 2H7.81C4.17 2 2 4.17 2 7.81V16.18C2 19.83 4.17 22 7.81 22H16.18C19.82 22 21.99 19.83 21.99 16.19V7.81C22 4.17 19.83 2 16.19 2ZM10.99 17C10.99 17.1 10.97 17.19 10.93 17.29C10.85 17.47 10.71 17.62 10.52 17.7C10.43 17.74 10.33 17.76 10.23 17.76C10.13 17.76 10.04 17.74 9.94 17.7C9.85 17.66 9.77 17.61 9.7 17.54L6.75 14.59C6.46 14.3 6.46 13.82 6.75 13.53C7.04 13.24 7.52 13.24 7.81 13.53L9.48 15.2V7C9.48 6.59 9.82 6.25 10.23 6.25C10.64 6.25 10.99 6.59 10.99 7V17ZM17.24 10.48C17.09 10.63 16.9 10.7 16.71 10.7C16.52 10.7 16.33 10.63 16.18 10.48L14.51 8.81V17C14.51 17.41 14.17 17.75 13.76 17.75C13.35 17.75 13.01 17.41 13.01 17V7C13.01 6.9 13.03 6.81 13.07 6.71C13.15 6.53 13.29 6.38 13.48 6.3C13.66 6.22 13.87 6.22 14.05 6.3C14.14 6.34 14.22 6.39 14.29 6.46L17.24 9.41C17.53 9.71 17.53 10.19 17.24 10.48Z"
        fill="currentColor"
      />
    </Svg>
  );
};

const ArrowSwapBroken = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M14.9902 3.5L20.0102 8.51"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M14.9902 13.01V6.01V3.5"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M14.9902 20.5V17"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M9.01023 20.5L3.99023 15.49"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M9.00977 10.99V17.99V20.5"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M9.00977 3.5V7"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

const ArrowSwapBulk = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M7.81 2H16.18C19.83 2 22 4.17 22 7.81V16.18C22 19.82 19.83 21.99 16.19 21.99H7.81C4.17 22 2 19.83 2 16.19V7.81C2 4.17 4.17 2 7.81 2Z"
        fill="currentColor"
      />
      <Path
        d="M10.2405 6.25C9.82047 6.25 9.49047 6.59 9.49047 7V15.19L7.82047 13.52C7.53047 13.23 7.05047 13.23 6.76047 13.52C6.47047 13.81 6.47047 14.29 6.76047 14.58L9.71047 17.53C9.78047 17.6 9.86047 17.65 9.95047 17.69C10.0405 17.73 10.1405 17.75 10.2405 17.75C10.3405 17.75 10.4305 17.73 10.5305 17.69C10.7105 17.61 10.8605 17.47 10.9405 17.28C10.9805 17.19 11.0005 17.09 11.0005 16.99V7C10.9905 6.59 10.6505 6.25 10.2405 6.25Z"
        fill="currentColor"
      />
      <Path
        d="M17.2398 9.42L14.2898 6.47C14.2198 6.4 14.1398 6.35 14.0498 6.31C13.8698 6.23 13.6598 6.23 13.4798 6.31C13.2998 6.39 13.1498 6.53 13.0698 6.72C13.0298 6.81 13.0098 6.9 13.0098 7V17C13.0098 17.41 13.3498 17.75 13.7598 17.75C14.1698 17.75 14.5098 17.41 14.5098 17V8.81L16.1798 10.48C16.3298 10.63 16.5198 10.7 16.7098 10.7C16.8998 10.7 17.0898 10.63 17.2398 10.48C17.5298 10.19 17.5298 9.71 17.2398 9.42Z"
        fill="currentColor"
      />
    </Svg>
  );
};

const ArrowSwapLinear = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M9.00945 21.2502C8.81945 21.2502 8.62945 21.1802 8.47945 21.0302L3.46945 16.0202C3.17945 15.7302 3.17945 15.2502 3.46945 14.9602C3.75945 14.6702 4.23945 14.6702 4.52945 14.9602L9.53945 19.9702C9.82945 20.2602 9.82945 20.7402 9.53945 21.0302C9.38945 21.1702 9.19945 21.2502 9.00945 21.2502Z"
        fill="currentColor"
      />
      <Path
        d="M9.00977 21.25C8.59977 21.25 8.25977 20.91 8.25977 20.5V3.5C8.25977 3.09 8.59977 2.75 9.00977 2.75C9.41977 2.75 9.75977 3.09 9.75977 3.5V20.5C9.75977 20.91 9.41977 21.25 9.00977 21.25Z"
        fill="currentColor"
      />
      <Path
        d="M20.0095 9.25994C19.8195 9.25994 19.6295 9.18994 19.4795 9.03994L14.4695 4.02994C14.1795 3.73994 14.1795 3.25994 14.4695 2.96994C14.7595 2.67994 15.2395 2.67994 15.5295 2.96994L20.5395 7.97994C20.8295 8.26994 20.8295 8.74994 20.5395 9.03994C20.3895 9.18994 20.1995 9.25994 20.0095 9.25994Z"
        fill="currentColor"
      />
      <Path
        d="M14.9902 21.25C14.5802 21.25 14.2402 20.91 14.2402 20.5V3.5C14.2402 3.09 14.5802 2.75 14.9902 2.75C15.4002 2.75 15.7402 3.09 15.7402 3.5V20.5C15.7402 20.91 15.4102 21.25 14.9902 21.25Z"
        fill="currentColor"
      />
    </Svg>
  );
};

const ArrowSwapOutline = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M9.00945 21.2502C8.81945 21.2502 8.62945 21.1802 8.47945 21.0302L3.46945 16.0202C3.17945 15.7302 3.17945 15.2502 3.46945 14.9602C3.75945 14.6702 4.23945 14.6702 4.52945 14.9602L9.53945 19.9702C9.82945 20.2602 9.82945 20.7402 9.53945 21.0302C9.38945 21.1702 9.19945 21.2502 9.00945 21.2502Z"
        fill="currentColor"
      />
      <Path
        d="M9.00977 21.25C8.59977 21.25 8.25977 20.91 8.25977 20.5V3.5C8.25977 3.09 8.59977 2.75 9.00977 2.75C9.41977 2.75 9.75977 3.09 9.75977 3.5V20.5C9.75977 20.91 9.41977 21.25 9.00977 21.25Z"
        fill="currentColor"
      />
      <Path
        d="M20.0095 9.25994C19.8195 9.25994 19.6295 9.18994 19.4795 9.03994L14.4695 4.02994C14.1795 3.73994 14.1795 3.25994 14.4695 2.96994C14.7595 2.67994 15.2395 2.67994 15.5295 2.96994L20.5395 7.97994C20.8295 8.26994 20.8295 8.74994 20.5395 9.03994C20.3895 9.18994 20.1995 9.25994 20.0095 9.25994Z"
        fill="currentColor"
      />
      <Path
        d="M14.9902 21.25C14.5802 21.25 14.2402 20.91 14.2402 20.5V3.5C14.2402 3.09 14.5802 2.75 14.9902 2.75C15.4002 2.75 15.7402 3.09 15.7402 3.5V20.5C15.7402 20.91 15.4102 21.25 14.9902 21.25Z"
        fill="currentColor"
      />
    </Svg>
  );
};

const ArrowSwapTwotone = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M7.81 2H16.18C19.83 2 22 4.17 22 7.81V16.18C22 19.82 19.83 21.99 16.19 21.99H7.81C4.17 22 2 19.83 2 16.19V7.81C2 4.17 4.17 2 7.81 2Z"
        fill="currentColor"
      />
      <Path
        d="M10.2405 6.25C9.82047 6.25 9.49047 6.59 9.49047 7V15.19L7.82047 13.52C7.53047 13.23 7.05047 13.23 6.76047 13.52C6.47047 13.81 6.47047 14.29 6.76047 14.58L9.71047 17.53C9.78047 17.6 9.86047 17.65 9.95047 17.69C10.0405 17.73 10.1405 17.75 10.2405 17.75C10.3405 17.75 10.4305 17.73 10.5305 17.69C10.7105 17.61 10.8605 17.47 10.9405 17.28C10.9805 17.19 11.0005 17.09 11.0005 16.99V7C10.9905 6.59 10.6505 6.25 10.2405 6.25Z"
        fill="currentColor"
      />
      <Path
        d="M17.2398 9.42L14.2898 6.47C14.2198 6.4 14.1398 6.35 14.0498 6.31C13.8698 6.23 13.6598 6.23 13.4798 6.31C13.2998 6.39 13.1498 6.53 13.0698 6.72C13.0298 6.81 13.0098 6.9 13.0098 7V17C13.0098 17.41 13.3498 17.75 13.7598 17.75C14.1698 17.75 14.5098 17.41 14.5098 17V8.81L16.1798 10.48C16.3298 10.63 16.5198 10.7 16.7098 10.7C16.8998 10.7 17.0898 10.63 17.2398 10.48C17.5298 10.19 17.5298 9.71 17.2398 9.42Z"
        fill="currentColor"
      />
    </Svg>
  );
};

const variants: IconVariants = {
  bold: ArrowSwapBold,
  broken: ArrowSwapBroken,
  bulk: ArrowSwapBulk,
  linear: ArrowSwapLinear,
  outline: ArrowSwapOutline,
  twotone: ArrowSwapTwotone,
};

export const ArrowSwapIcon = ({
  variant = "linear",
  className,
  ...props
}: IconProps) => {
  const textClasses = useContext(TextClassContext);
  const Component = variants[variant];
  return <Component className={cn(textClasses, className)} {...props} />;
};
