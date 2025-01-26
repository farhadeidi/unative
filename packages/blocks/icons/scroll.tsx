import { useContext } from "react";
import { Path, Svg } from "unative/lib/svg";
import { cn } from "unative/lib/utils";
import { TextClassContext } from "unative/ui/text";

import { iconDefaultOptions } from "../icons-configuration";
import type { IconProps, IconVariants } from "../types/icons-type";

const ScrollBold = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M16.19 2H7.81C4.17 2 2 4.17 2 7.81V16.18C2 19.83 4.17 22 7.81 22H16.18C19.82 22 21.99 19.83 21.99 16.19V7.81C22 4.17 19.83 2 16.19 2ZM10.13 14.5C10.42 14.79 10.42 15.27 10.13 15.56C9.98 15.71 9.79 15.78 9.6 15.78C9.41 15.78 9.22 15.71 9.07 15.56L6.58 13.07C5.99 12.48 5.99 11.53 6.58 10.94L9.07 8.45C9.36 8.16 9.84 8.16 10.13 8.45C10.42 8.74 10.42 9.22 10.13 9.51L7.64 12L10.13 14.5ZM17.42 13.06L14.93 15.55C14.78 15.7 14.59 15.77 14.4 15.77C14.21 15.77 14.02 15.7 13.87 15.55C13.58 15.26 13.58 14.78 13.87 14.49L16.36 12L13.87 9.5C13.58 9.21 13.58 8.73 13.87 8.44C14.16 8.15 14.64 8.15 14.93 8.44L17.42 10.93C18.01 11.52 18.01 12.48 17.42 13.06Z"
        fill="currentColor"
      />
    </Svg>
  );
};

const ScrollBroken = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M2 12.97V15C2 20 4 22 9 22H15C20 22 22 20 22 15V9C22 4 20 2 15 2H9C4 2 2 4 2 9"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M9.60008 8.96997L7.11008 11.46C6.82008 11.75 6.82008 12.24 7.11008 12.53L9.60008 15.02"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M14.4004 8.96997L16.8904 11.46C17.1804 11.75 17.1804 12.24 16.8904 12.53L14.4004 15.02"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

const ScrollBulk = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M16.19 2H7.81C4.17 2 2 4.17 2 7.81V16.18C2 19.83 4.17 22 7.81 22H16.18C19.82 22 21.99 19.83 21.99 16.19V7.81C22 4.17 19.83 2 16.19 2Z"
        fill="currentColor"
      />
      <Path
        d="M9.59922 15.7799C9.40922 15.7799 9.21922 15.7099 9.06922 15.5599L6.57922 13.0699C5.98922 12.4799 5.98922 11.5299 6.57922 10.9399L9.06922 8.44992C9.35922 8.15992 9.83922 8.15992 10.1292 8.44992C10.4192 8.73992 10.4192 9.21992 10.1292 9.50992L7.63922 11.9999L10.1292 14.4999C10.4192 14.7899 10.4192 15.2699 10.1292 15.5599C9.97922 15.6999 9.78922 15.7799 9.59922 15.7799Z"
        fill="currentColor"
      />
      <Path
        d="M14.3998 15.7802C14.2098 15.7802 14.0198 15.7102 13.8698 15.5602C13.5798 15.2702 13.5798 14.7902 13.8698 14.5002L16.3598 12.0002L13.8698 9.50016C13.5798 9.21016 13.5798 8.73016 13.8698 8.44016C14.1598 8.15016 14.6398 8.15016 14.9298 8.44016L17.4198 10.9302C18.0098 11.5202 18.0098 12.4702 17.4198 13.0602L14.9298 15.5502C14.7898 15.7002 14.5898 15.7802 14.3998 15.7802Z"
        fill="currentColor"
      />
    </Svg>
  );
};

const ScrollLinear = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M9.60002 8.96997L7.11002 11.46C6.82002 11.75 6.82002 12.24 7.11002 12.53L9.60002 15.02"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M14.4 8.96997L16.89 11.46C17.18 11.75 17.18 12.24 16.89 12.53L14.4 15.02"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

const ScrollOutline = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M9.59922 15.7799C9.40922 15.7799 9.21922 15.7099 9.06922 15.5599L6.57922 13.0699C5.98922 12.4799 5.98922 11.5299 6.57922 10.9399L9.06922 8.44992C9.35922 8.15992 9.83922 8.15992 10.1292 8.44992C10.4192 8.73992 10.4192 9.21992 10.1292 9.50992L7.63922 11.9999L10.1292 14.4999C10.4192 14.7899 10.4192 15.2699 10.1292 15.5599C9.97922 15.6999 9.78922 15.7799 9.59922 15.7799Z"
        fill="currentColor"
      />
      <Path
        d="M14.3998 15.7802C14.2098 15.7802 14.0198 15.7102 13.8698 15.5602C13.5798 15.2702 13.5798 14.7902 13.8698 14.5002L16.3598 12.0002L13.8698 9.50016C13.5798 9.21016 13.5798 8.73016 13.8698 8.44016C14.1598 8.15016 14.6398 8.15016 14.9298 8.44016L17.4198 10.9302C18.0098 11.5202 18.0098 12.4702 17.4198 13.0602L14.9298 15.5502C14.7898 15.7002 14.5898 15.7802 14.3998 15.7802Z"
        fill="currentColor"
      />
    </Svg>
  );
};

const ScrollTwotone = ({ size = 24, className, ...props }: IconProps) => {
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
        opacity="0.4"
        d="M9.60008 8.97021L7.11008 11.4602C6.82008 11.7502 6.82008 12.2402 7.11008 12.5302L9.60008 15.0202"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        opacity="0.4"
        d="M14.4004 8.97021L16.8904 11.4602C17.1804 11.7502 17.1804 12.2402 16.8904 12.5302L14.4004 15.0202"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

const variants: IconVariants = {
  bold: ScrollBold,
  broken: ScrollBroken,
  bulk: ScrollBulk,
  linear: ScrollLinear,
  outline: ScrollOutline,
  twotone: ScrollTwotone,
};

export const ScrollIcon = ({
  variant = iconDefaultOptions.variant,
  className,
  ...props
}: IconProps) => {
  const textClasses = useContext(TextClassContext);
  const Component = variants[variant];
  return <Component className={cn(textClasses, className)} {...props} />;
};
