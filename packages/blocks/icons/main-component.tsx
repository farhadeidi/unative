import { useContext } from "react";
import { G, Path, Svg } from "unative/lib/svg";
import { cn } from "unative/lib/utils";
import { TextClassContext } from "unative/ui/text";

import type { IconProps, IconVariants } from "../types/icons-type";

const MainComponentBold = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M16.5098 5.01L14.5498 3.05C13.1498 1.65 10.8498 1.65 9.44977 3.05L7.48977 5.01C7.09977 5.4 7.09977 6.04 7.48977 6.43L11.2998 10.24C11.6898 10.63 12.3198 10.63 12.7098 10.24L16.5198 6.43C16.8998 6.04 16.8998 5.4 16.5098 5.01Z"
        fill="currentColor"
      />
      <Path
        d="M5.01 7.49172L3.05 9.45172C1.65 10.8517 1.65 13.1517 3.05 14.5517L5.01 16.5117C5.4 16.9017 6.03 16.9017 6.42 16.5117L10.23 12.7017C10.62 12.3117 10.62 11.6817 10.23 11.2917L6.43 7.49172C6.04 7.10172 5.4 7.10172 5.01 7.49172Z"
        fill="currentColor"
      />
      <Path
        d="M20.9491 9.45172L18.9891 7.49172C18.5991 7.10172 17.9691 7.10172 17.5791 7.49172L13.7691 11.3017C13.3791 11.6917 13.3791 12.3217 13.7691 12.7117L17.5791 16.5217C17.9691 16.9117 18.5991 16.9117 18.9891 16.5217L20.9491 14.5617C22.3491 13.1517 22.3491 10.8517 20.9491 9.45172Z"
        fill="currentColor"
      />
      <Path
        d="M7.48907 18.9891L9.44907 20.9491C10.8491 22.3491 13.1491 22.3491 14.5491 20.9491L16.5091 18.9891C16.8991 18.5991 16.8991 17.9691 16.5091 17.5791L12.6991 13.7691C12.3091 13.3791 11.6791 13.3791 11.2891 13.7691L7.47907 17.5791C7.09907 17.9591 7.09907 18.5991 7.48907 18.9891Z"
        fill="currentColor"
      />
    </Svg>
  );
};

const MainComponentBroken = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M6.73976 18.24L3.05977 14.56C1.65977 13.16 1.65977 10.86 3.05977 9.45002L9.44978 3.06001C10.8498 1.66001 13.1498 1.66001 14.5598 3.06001L20.9498 9.45002C22.3498 10.85 22.3498 13.15 20.9498 14.56L14.5598 20.95C13.1598 22.35 10.8598 22.35 9.44978 20.95"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M6.25 6.25L17.75 17.75"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M15.5 8.5L6.25 17.75"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

const MainComponentBulk = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M20.95 14.55L18.28 17.22L17.22 18.28L14.55 20.95C13.15 22.35 10.85 22.35 9.45002 20.95L6.78001 18.28L5.72001 17.22L3.05 14.55C1.65 13.15 1.65 10.85 3.05 9.45002L5.72001 6.78001L6.78001 5.72001L9.45002 3.05C10.85 1.65 13.15 1.65 14.55 3.05L17.22 5.72001L18.28 6.78001L20.95 9.45002C22.35 10.85 22.35 13.15 20.95 14.55Z"
        fill="currentColor"
      />
      <Path
        d="M13.0607 12.0002L18.2807 17.2202L17.2207 18.2802L12.0007 13.0602L6.7807 18.2802L5.7207 17.2202L10.9407 12.0002L5.7207 6.78021L6.7807 5.72021L12.0007 10.9402L17.2207 5.72021L18.2807 6.78021L13.0607 12.0002Z"
        fill="currentColor"
      />
    </Svg>
  );
};

const MainComponentLinear = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M20.95 14.55L14.56 20.94C13.16 22.34 10.86 22.34 9.45002 20.94L3.06001 14.55C1.66001 13.15 1.66001 10.85 3.06001 9.44001L9.45002 3.05C10.85 1.65 13.15 1.65 14.56 3.05L20.95 9.44001C22.35 10.85 22.35 13.15 20.95 14.55Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M6.25 6.25L17.75 17.75"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M17.75 6.25L6.25 17.75"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

const MainComponentOutline = ({
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
        d="M11.9998 22.75C10.8298 22.75 9.73977 22.3 8.91977 21.48L2.52975 15.09C1.70975 14.27 1.25977 13.17 1.25977 12.01C1.25977 10.85 1.70975 9.74999 2.52975 8.92999L8.91977 2.53998C9.73977 1.71998 10.8398 1.27002 11.9998 1.27002C13.1598 1.27002 14.2597 1.71998 15.0797 2.53998L21.4698 8.92999C22.2898 9.74999 22.7397 10.85 22.7397 12.01C22.7397 13.17 22.2898 14.27 21.4698 15.09L15.0797 21.48C14.2597 22.3 13.1698 22.75 11.9998 22.75ZM11.9998 2.75C11.2298 2.75 10.5098 3.05002 9.97977 3.58002L3.58975 9.96997C3.04975 10.51 2.75977 11.23 2.75977 11.99C2.75977 12.75 3.05975 13.48 3.58975 14.01L9.97977 20.4C11.0498 21.47 12.9497 21.47 14.0197 20.4L20.4098 14.01C20.9498 13.47 21.2397 12.76 21.2397 11.99C21.2397 11.22 20.9398 10.5 20.4098 9.96997L14.0197 3.58002C13.4897 3.05002 12.7698 2.75 11.9998 2.75Z"
        fill="currentColor"
      />
      <Path
        d="M17.7495 18.5C17.5595 18.5 17.3695 18.43 17.2195 18.28L5.71945 6.78C5.42945 6.49 5.42945 6.00994 5.71945 5.71994C6.00945 5.42994 6.48945 5.42994 6.77945 5.71994L18.2795 17.2199C18.5695 17.5099 18.5695 17.99 18.2795 18.28C18.1295 18.43 17.9395 18.5 17.7495 18.5Z"
        fill="currentColor"
      />
      <Path
        d="M6.24945 18.5C6.05945 18.5 5.86945 18.43 5.71945 18.28C5.42945 17.99 5.42945 17.5099 5.71945 17.2199L17.2195 5.71994C17.5095 5.42994 17.9895 5.42994 18.2795 5.71994C18.5695 6.00994 18.5695 6.49 18.2795 6.78L6.77945 18.28C6.62945 18.43 6.43945 18.5 6.24945 18.5Z"
        fill="currentColor"
      />
    </Svg>
  );
};

const MainComponentTwotone = ({
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
        d="M20.9498 14.55L14.5598 20.94C13.1598 22.34 10.8598 22.34 9.44978 20.94L3.05977 14.55C1.65977 13.15 1.65977 10.85 3.05977 9.44001L9.44978 3.05C10.8498 1.65 13.1498 1.65 14.5598 3.05L20.9498 9.44001C22.3498 10.85 22.3498 13.15 20.9498 14.55Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <G opacity="0.4">
        <Path
          d="M6.25 6.25L17.75 17.75"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <Path
          d="M17.75 6.25L6.25 17.75"
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
  bold: MainComponentBold,
  broken: MainComponentBroken,
  bulk: MainComponentBulk,
  linear: MainComponentLinear,
  outline: MainComponentOutline,
  twotone: MainComponentTwotone,
};

export const MainComponentIcon = ({
  variant = "linear",
  className,
  ...props
}: IconProps) => {
  const textClasses = useContext(TextClassContext);
  const Component = variants[variant];
  return <Component className={cn(textClasses, className)} {...props} />;
};
