import { useContext } from "react";
import { Path, Svg } from "unative/lib/svg";
import { cn } from "unative/lib/utils";
import { TextClassContext } from "unative/ui/text";

import type { IconProps, IconVariants } from "../types/icons-type";

const PasswordCheckBold = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M18 4H15.75V2.75C15.75 2.34 15.41 2 15 2C14.59 2 14.25 2.34 14.25 2.75V21.25C14.25 21.66 14.59 22 15 22C15.41 22 15.75 21.66 15.75 21.25V20H18C20.21 20 22 18.21 22 16V8C22 5.79 20.21 4 18 4Z"
        fill="currentColor"
      />
      <Path
        d="M6.5 4C4.29 4 2.5 5.79 2.5 8V16C2.5 18.21 4.29 20 6.5 20H11.5C12.05 20 12.5 19.55 12.5 19V5C12.5 4.45 12.05 4 11.5 4H6.5ZM6.67 12.38C6.62 12.5 6.55 12.61 6.46 12.71C6.36 12.8 6.25 12.87 6.13 12.92C6.01 12.97 5.88 13 5.75 13C5.62 13 5.49 12.97 5.37 12.92C5.25 12.87 5.14 12.8 5.04 12.71C4.95 12.61 4.88 12.5 4.82 12.38C4.77 12.26 4.75 12.13 4.75 12C4.75 11.74 4.86 11.48 5.04 11.29C5.09 11.25 5.14 11.21 5.19 11.17C5.25 11.13 5.31 11.1 5.37 11.08C5.43 11.05 5.49 11.03 5.55 11.02C5.89 10.95 6.23 11.06 6.46 11.29C6.64 11.48 6.75 11.74 6.75 12C6.75 12.13 6.72 12.26 6.67 12.38ZM10.17 12.38C10.12 12.5 10.05 12.61 9.96 12.71C9.86 12.8 9.75 12.87 9.63 12.92C9.51 12.97 9.38 13 9.25 13C9.12 13 8.99 12.97 8.87 12.92C8.75 12.87 8.64 12.8 8.54 12.71C8.35 12.52 8.25 12.27 8.25 12C8.25 11.87 8.28 11.74 8.33 11.62C8.38 11.49 8.45 11.39 8.54 11.29C8.91 10.92 9.58 10.92 9.96 11.29C10.14 11.48 10.25 11.74 10.25 12C10.25 12.13 10.22 12.26 10.17 12.38Z"
        fill="currentColor"
      />
    </Svg>
  );
};

const PasswordCheckBroken = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M11.02 19.5H7.5C6.88 19.5 6.33 19.48 5.84 19.41C3.21 19.12 2.5 17.88 2.5 14.5V9.5C2.5 6.12 3.21 4.88 5.84 4.59C6.33 4.52 6.88 4.5 7.5 4.5H10.96"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M21.4995 13.34V14.5C21.4995 17.88 20.7895 19.12 18.1595 19.41C17.6695 19.48 17.1195 19.5 16.4995 19.5H15.0195"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M15.0195 4.5H16.4995C17.1195 4.5 17.6695 4.52 18.1595 4.59C20.7895 4.88 21.4995 6.12 21.4995 9.5"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M15 2V22"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M11.4945 12H11.5035"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M7.09412 12H7.1031"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

const PasswordCheckBulk = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M15 22C14.59 22 14.25 21.66 14.25 21.25V2.75C14.25 2.34 14.59 2 15 2C15.41 2 15.75 2.34 15.75 2.75V21.25C15.75 21.66 15.41 22 15 22Z"
        fill="currentColor"
      />
      <Path
        opacity="0.4"
        d="M6.5 20H12.5V4H6.5C4.29 4 2.5 5.79 2.5 8V16C2.5 18.21 4.29 20 6.5 20Z"
        fill="currentColor"
      />
      <Path
        opacity="0.4"
        d="M18 20H15V4H18C20.21 4 22 5.79 22 8V16C22 18.21 20.21 20 18 20Z"
        fill="currentColor"
      />
      <Path
        d="M5.75 12.9999C5.62 12.9999 5.49 12.9699 5.37 12.9199C5.25 12.8699 5.14 12.7999 5.04 12.7099C4.95 12.6099 4.88 12.4999 4.82 12.3799C4.77 12.2599 4.75 12.1299 4.75 11.9999C4.75 11.7399 4.86 11.4799 5.04 11.2899C5.09 11.2499 5.14 11.2099 5.19 11.1699C5.25 11.1299 5.31 11.0999 5.37 11.0799C5.43 11.0499 5.49 11.0299 5.55 11.0199C5.89 10.9499 6.23 11.0599 6.46 11.2899C6.64 11.4799 6.75 11.7399 6.75 11.9999C6.75 12.1299 6.72 12.2599 6.67 12.3799C6.62 12.4999 6.55 12.6099 6.46 12.7099C6.36 12.7999 6.25 12.8699 6.13 12.9199C6.01 12.9699 5.88 12.9999 5.75 12.9999Z"
        fill="currentColor"
      />
      <Path
        d="M9.25 13C9.12 13 8.99 12.97 8.87 12.92C8.75 12.87 8.64 12.8 8.54 12.71C8.35 12.52 8.25 12.27 8.25 12C8.25 11.87 8.28 11.74 8.33 11.62C8.38 11.49 8.45 11.39 8.54 11.29C8.91 10.92 9.58 10.92 9.96 11.29C10.14 11.48 10.25 11.74 10.25 12C10.25 12.13 10.22 12.26 10.17 12.38C10.12 12.5 10.05 12.61 9.96 12.71C9.86 12.8 9.75 12.87 9.63 12.92C9.51 12.97 9.38 13 9.25 13Z"
        fill="currentColor"
      />
    </Svg>
  );
};

const PasswordCheckLinear = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M11.02 19.5H7.5C6.88 19.5 6.33 19.48 5.84 19.41C3.21 19.12 2.5 17.88 2.5 14.5V9.5C2.5 6.12 3.21 4.88 5.84 4.59C6.33 4.52 6.88 4.5 7.5 4.5H10.96"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M15.02 4.5H16.5C17.12 4.5 17.67 4.52 18.16 4.59C20.79 4.88 21.5 6.12 21.5 9.5V14.5C21.5 17.88 20.79 19.12 18.16 19.41C17.67 19.48 17.12 19.5 16.5 19.5H15.02"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M15 2V22"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M11.0945 12H11.1035"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M7.09448 12H7.10346"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

const PasswordCheckOutline = ({
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
        d="M11.02 20.25H7.5C6.75 20.25 6.2 20.22 5.73 20.15C2.4 19.78 1.75 17.8 1.75 14.5V9.5C1.75 6.2 2.41 4.21 5.76 3.84C6.2 3.78 6.75 3.75 7.5 3.75H10.96C11.37 3.75 11.71 4.09 11.71 4.5C11.71 4.91 11.37 5.25 10.96 5.25H7.5C6.82 5.25 6.34 5.28 5.95 5.33C3.92 5.55 3.25 6.19 3.25 9.5V14.5C3.25 17.81 3.92 18.44 5.92 18.67C6.34 18.73 6.82 18.75 7.5 18.75H11.02C11.43 18.75 11.77 19.09 11.77 19.5C11.77 19.91 11.43 20.25 11.02 20.25Z"
        fill="currentColor"
      />
      <Path
        d="M16.4995 20.25H15.0195C14.6095 20.25 14.2695 19.91 14.2695 19.5C14.2695 19.09 14.6095 18.75 15.0195 18.75H16.4995C17.1795 18.75 17.6595 18.72 18.0495 18.67C20.0795 18.45 20.7495 17.81 20.7495 14.5V9.5C20.7495 6.19 20.0795 5.56 18.0795 5.33C17.6595 5.27 17.1795 5.25 16.4995 5.25H15.0195C14.6095 5.25 14.2695 4.91 14.2695 4.5C14.2695 4.09 14.6095 3.75 15.0195 3.75H16.4995C17.2495 3.75 17.7995 3.78 18.2695 3.85C21.5995 4.22 22.2495 6.2 22.2495 9.5V14.5C22.2495 17.8 21.5895 19.79 18.2395 20.16C17.7995 20.22 17.2495 20.25 16.4995 20.25Z"
        fill="currentColor"
      />
      <Path
        d="M15 22.75C14.59 22.75 14.25 22.41 14.25 22V2C14.25 1.59 14.59 1.25 15 1.25C15.41 1.25 15.75 1.59 15.75 2V22C15.75 22.41 15.41 22.75 15 22.75Z"
        fill="currentColor"
      />
      <Path
        d="M6.69922 13C6.56922 13 6.43922 12.97 6.31922 12.92C6.19922 12.87 6.08922 12.8 5.98922 12.71C5.89922 12.61 5.81922 12.5 5.76922 12.38C5.71922 12.26 5.69922 12.13 5.69922 12C5.69922 11.74 5.80922 11.48 5.98922 11.29C6.35922 10.92 7.02922 10.92 7.40922 11.29C7.58922 11.48 7.69922 11.74 7.69922 12C7.69922 12.13 7.66922 12.26 7.61922 12.38C7.56922 12.5 7.49922 12.61 7.40922 12.71C7.30922 12.8 7.19922 12.87 7.07922 12.92C6.95922 12.97 6.82922 13 6.69922 13Z"
        fill="currentColor"
      />
      <Path
        d="M10.6992 13C10.5692 13 10.4392 12.97 10.3192 12.92C10.1992 12.87 10.0892 12.8 9.98922 12.71C9.89922 12.61 9.82922 12.5 9.76922 12.38C9.72922 12.26 9.69922 12.13 9.69922 12C9.69922 11.74 9.80922 11.48 9.98922 11.29C10.3592 10.92 11.0392 10.92 11.4092 11.29C11.5892 11.48 11.6992 11.74 11.6992 12C11.6992 12.13 11.6692 12.26 11.6192 12.38C11.5692 12.5 11.4992 12.61 11.4092 12.71C11.3092 12.8 11.1992 12.87 11.0792 12.92C10.9592 12.97 10.8292 13 10.6992 13Z"
        fill="currentColor"
      />
    </Svg>
  );
};

const PasswordCheckTwotone = ({
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
        d="M11.02 19.5H7.5C6.88 19.5 6.33 19.48 5.84 19.41C3.21 19.12 2.5 17.88 2.5 14.5V9.5C2.5 6.12 3.21 4.88 5.84 4.59C6.33 4.52 6.88 4.5 7.5 4.5H10.96"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M15.0195 4.5H16.4995C17.1195 4.5 17.6695 4.52 18.1595 4.59C20.7895 4.88 21.4995 6.12 21.4995 9.5V14.5C21.4995 17.88 20.7895 19.12 18.1595 19.41C17.6695 19.48 17.1195 19.5 16.4995 19.5H15.0195"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M15 2V22"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        opacity="0.4"
        d="M11.0941 12H11.1031"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        opacity="0.4"
        d="M7.09412 12H7.1031"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

const variants: IconVariants = {
  bold: PasswordCheckBold,
  broken: PasswordCheckBroken,
  bulk: PasswordCheckBulk,
  linear: PasswordCheckLinear,
  outline: PasswordCheckOutline,
  twotone: PasswordCheckTwotone,
};

export const PasswordCheckIcon = ({
  variant = "linear",
  className,
  ...props
}: IconProps) => {
  const textClasses = useContext(TextClassContext);
  const Component = variants[variant];
  return <Component className={cn(textClasses, className)} {...props} />;
};
