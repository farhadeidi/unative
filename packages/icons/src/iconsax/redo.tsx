import { useContext } from "react";
import { cn } from "unative/lib/utils";
import { Path, Svg } from "unative/ui/svg";
import { TextClassContext } from "unative/ui/text";

import type { IconProps, IconVariants } from "../icon-options";
import { defaultOptions } from "../icon-options";

const RedoBold = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M16.19 2H7.81C4.17 2 2 4.17 2 7.81V16.18C2 19.83 4.17 22 7.81 22H16.18C19.82 22 21.99 19.83 21.99 16.19V7.81C22 4.17 19.83 2 16.19 2ZM17.53 10.22L15.96 11.79C15.81 11.94 15.62 12.01 15.43 12.01C15.24 12.01 15.05 11.94 14.9 11.79C14.61 11.5 14.61 11.02 14.9 10.73L15.16 10.47H10.08C8.8 10.47 7.75 11.51 7.75 12.8C7.75 14.09 8.79 15.13 10.08 15.13H15C15.41 15.13 15.75 15.47 15.75 15.88C15.75 16.29 15.41 16.63 15 16.63H10.08C7.97 16.63 6.25 14.91 6.25 12.8C6.25 10.69 7.97 8.97 10.08 8.97H15.23L14.9 8.65C14.61 8.36 14.61 7.88 14.9 7.59C15.19 7.3 15.67 7.3 15.96 7.59L17.53 9.16C17.82 9.46 17.82 9.93 17.53 10.22Z"
        fill="currentColor"
      />
    </Svg>
  );
};

const RedoBroken = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M13.0195 8.31006H19.8695"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M16.8691 18.3101H8.86914C6.10914 18.3101 3.86914 16.0701 3.86914 13.3101C3.86914 10.5501 6.10914 8.31006 8.86914 8.31006"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M17.5703 10.8099L20.1303 8.24994L17.5703 5.68994"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

const RedoBulk = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M17.53 9.16006L15.96 7.59006C15.67 7.30006 15.19 7.30006 14.9 7.59006C14.61 7.88006 14.61 8.36006 14.9 8.65006L15.23 8.98006H10.08C7.97 8.98006 6.25 10.7001 6.25 12.8101C6.25 14.9201 7.97 16.6401 10.08 16.6401H15C15.41 16.6401 15.75 16.3001 15.75 15.8901C15.75 15.4801 15.41 15.1401 15 15.1401H10.08C8.8 15.1401 7.75 14.1001 7.75 12.8101C7.75 11.5201 8.79 10.4801 10.08 10.4801H15.16L14.9 10.7401C14.61 11.0301 14.61 11.5101 14.9 11.8001C15.05 11.9501 15.24 12.0201 15.43 12.0201C15.62 12.0201 15.81 11.9501 15.96 11.8001L17.53 10.2301C17.82 9.93006 17.82 9.46006 17.53 9.16006Z"
        fill="currentColor"
      />
    </Svg>
  );
};

const RedoLinear = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M16.8701 18.3101H8.87012C6.11012 18.3101 3.87012 16.0701 3.87012 13.3101C3.87012 10.5501 6.11012 8.31006 8.87012 8.31006H19.8701"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M17.5701 10.8099L20.1301 8.24994L17.5701 5.68994"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

const RedoOutline = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M16.8691 19.0601H8.86914C5.69914 19.0601 3.11914 16.4801 3.11914 13.3101C3.11914 10.1401 5.69914 7.56006 8.86914 7.56006H19.8691C20.2791 7.56006 20.6191 7.90006 20.6191 8.31006C20.6191 8.72006 20.2791 9.06006 19.8691 9.06006H8.86914C6.52914 9.06006 4.61914 10.9701 4.61914 13.3101C4.61914 15.6501 6.52914 17.5601 8.86914 17.5601H16.8691C17.2791 17.5601 17.6191 17.9001 17.6191 18.3101C17.6191 18.7201 17.2891 19.0601 16.8691 19.0601Z"
        fill="currentColor"
      />
      <Path
        d="M17.5698 11.5599C17.3798 11.5599 17.1898 11.4899 17.0398 11.3399C16.7498 11.0499 16.7498 10.5699 17.0398 10.2799L19.0698 8.24988L17.0398 6.21988C16.7498 5.92988 16.7498 5.44988 17.0398 5.15988C17.3298 4.86988 17.8098 4.86988 18.0998 5.15988L20.6598 7.71988C20.9498 8.00988 20.9498 8.48988 20.6598 8.77988L18.0998 11.3399C17.9498 11.4899 17.7598 11.5599 17.5698 11.5599Z"
        fill="currentColor"
      />
    </Svg>
  );
};

const RedoTwotone = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M16.8691 18.3101H8.86914C6.10914 18.3101 3.86914 16.0701 3.86914 13.3101C3.86914 10.5501 6.10914 8.31006 8.86914 8.31006H19.8691"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M17.5703 10.8099L20.1303 8.24994L17.5703 5.68994"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

const variants: IconVariants = {
  bold: RedoBold,
  broken: RedoBroken,
  bulk: RedoBulk,
  linear: RedoLinear,
  outline: RedoOutline,
  twotone: RedoTwotone,
};

export const RedoIcon = ({
  variant = defaultOptions.variant,
  className,
  ...props
}: IconProps) => {
  const textClasses = useContext(TextClassContext);
  const Component = variants[variant];
  return <Component className={cn(textClasses, className)} {...props} />;
};

export default RedoIcon;
