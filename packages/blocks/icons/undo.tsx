import { useContext } from "react";
import { Path, Svg } from "unative/lib/svg";
import { cn } from "unative/lib/utils";
import { TextClassContext } from "unative/ui/text";

import { iconDefaultOptions } from "../icons-configuration";
import type { IconProps, IconVariants } from "../types/icons-type";

const UndoBold = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M16.19 2H7.81C4.17 2 2 4.17 2 7.81V16.18C2 19.83 4.17 22 7.81 22H16.18C19.82 22 21.99 19.83 21.99 16.19V7.81C22 4.17 19.83 2 16.19 2ZM13.92 16.63H9C8.59 16.63 8.25 16.29 8.25 15.88C8.25 15.47 8.59 15.13 9 15.13H13.92C15.2 15.13 16.25 14.09 16.25 12.8C16.25 11.51 15.21 10.47 13.92 10.47H8.85L9.11 10.73C9.4 11.02 9.4 11.5 9.11 11.79C8.96 11.94 8.77 12.01 8.58 12.01C8.39 12.01 8.2 11.94 8.05 11.79L6.48 10.22C6.19 9.93 6.19 9.45 6.48 9.16L8.05 7.59C8.34 7.3 8.82 7.3 9.11 7.59C9.4 7.88 9.4 8.36 9.11 8.65L8.77 8.98H13.92C16.03 8.98 17.75 10.7 17.75 12.81C17.75 14.92 16.03 16.63 13.92 16.63Z"
        fill="currentColor"
      />
    </Svg>
  );
};

const UndoBroken = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M10.9809 8.31006H4.13086"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M7.13086 18.3101H15.1309C17.8909 18.3101 20.1309 16.0701 20.1309 13.3101C20.1309 10.5501 17.8909 8.31006 15.1309 8.31006"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M6.42914 10.8099L3.86914 8.24994L6.42914 5.68994"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

const UndoBulk = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M13.9195 8.98006H8.76945L9.09945 8.65006C9.38945 8.36006 9.38945 7.88006 9.09945 7.59006C8.80945 7.30006 8.32945 7.30006 8.03945 7.59006L6.46945 9.16006C6.17945 9.45006 6.17945 9.93006 6.46945 10.2201L8.03945 11.7901C8.18945 11.9401 8.37945 12.0101 8.56945 12.0101C8.75945 12.0101 8.94945 11.9401 9.09945 11.7901C9.38945 11.5001 9.38945 11.0201 9.09945 10.7301L8.83945 10.4701H13.9195C15.1995 10.4701 16.2495 11.5101 16.2495 12.8001C16.2495 14.0901 15.2095 15.1301 13.9195 15.1301H8.99945C8.58945 15.1301 8.24945 15.4701 8.24945 15.8801C8.24945 16.2901 8.58945 16.6301 8.99945 16.6301H13.9195C16.0295 16.6301 17.7495 14.9101 17.7495 12.8001C17.7495 10.6901 16.0295 8.98006 13.9195 8.98006Z"
        fill="currentColor"
      />
    </Svg>
  );
};

const UndoLinear = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M7.12988 18.3101H15.1299C17.8899 18.3101 20.1299 16.0701 20.1299 13.3101C20.1299 10.5501 17.8899 8.31006 15.1299 8.31006H4.12988"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M6.43012 10.8099L3.87012 8.24994L6.43012 5.68994"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

const UndoOutline = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M15.1309 19.0601H7.13086C6.72086 19.0601 6.38086 18.7201 6.38086 18.3101C6.38086 17.9001 6.72086 17.5601 7.13086 17.5601H15.1309C17.4709 17.5601 19.3809 15.6501 19.3809 13.3101C19.3809 10.9701 17.4709 9.06006 15.1309 9.06006H4.13086C3.72086 9.06006 3.38086 8.72006 3.38086 8.31006C3.38086 7.90006 3.72086 7.56006 4.13086 7.56006H15.1309C18.3009 7.56006 20.8809 10.1401 20.8809 13.3101C20.8809 16.4801 18.3009 19.0601 15.1309 19.0601Z"
        fill="currentColor"
      />
      <Path
        d="M6.43055 11.5599C6.24055 11.5599 6.05055 11.4899 5.90055 11.3399L3.34055 8.77988C3.05055 8.48988 3.05055 8.00988 3.34055 7.71988L5.90055 5.15988C6.19055 4.86988 6.67055 4.86988 6.96055 5.15988C7.25055 5.44988 7.25055 5.92988 6.96055 6.21988L4.93055 8.24988L6.96055 10.2799C7.25055 10.5699 7.25055 11.0499 6.96055 11.3399C6.82055 11.4899 6.62055 11.5599 6.43055 11.5599Z"
        fill="currentColor"
      />
    </Svg>
  );
};

const UndoTwotone = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M7.13086 18.3101H15.1309C17.8909 18.3101 20.1309 16.0701 20.1309 13.3101C20.1309 10.5501 17.8909 8.31006 15.1309 8.31006H4.13086"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M6.42914 10.8099L3.86914 8.24994L6.42914 5.68994"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

const variants: IconVariants = {
  bold: UndoBold,
  broken: UndoBroken,
  bulk: UndoBulk,
  linear: UndoLinear,
  outline: UndoOutline,
  twotone: UndoTwotone,
};

export const UndoIcon = ({
  variant = iconDefaultOptions.variant,
  className,
  ...props
}: IconProps) => {
  const textClasses = useContext(TextClassContext);
  const Component = variants[variant];
  return <Component className={cn(textClasses, className)} {...props} />;
};
