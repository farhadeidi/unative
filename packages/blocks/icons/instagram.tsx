import { useContext } from "react";
import { Path, Svg } from "unative/lib/svg";
import { cn } from "unative/lib/utils";
import { TextClassContext } from "unative/ui/text";

import { iconDefaultOptions } from "../icons-configuration";
import type { IconProps, IconVariants } from "../types/icons-type";

const InstagramBold = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M16.19 2H7.81C4.17 2 2 4.17 2 7.81V16.18C2 19.83 4.17 22 7.81 22H16.18C19.82 22 21.99 19.83 21.99 16.19V7.81C22 4.17 19.83 2 16.19 2ZM12 15.88C9.86 15.88 8.12 14.14 8.12 12C8.12 9.86 9.86 8.12 12 8.12C14.14 8.12 15.88 9.86 15.88 12C15.88 14.14 14.14 15.88 12 15.88ZM17.92 6.88C17.87 7 17.8 7.11 17.71 7.21C17.61 7.3 17.5 7.37 17.38 7.42C17.26 7.47 17.13 7.5 17 7.5C16.73 7.5 16.48 7.4 16.29 7.21C16.2 7.11 16.13 7 16.08 6.88C16.03 6.76 16 6.63 16 6.5C16 6.37 16.03 6.24 16.08 6.12C16.13 5.99 16.2 5.89 16.29 5.79C16.52 5.56 16.87 5.45 17.19 5.52C17.26 5.53 17.32 5.55 17.38 5.58C17.44 5.6 17.5 5.63 17.56 5.67C17.61 5.7 17.66 5.75 17.71 5.79C17.8 5.89 17.87 5.99 17.92 6.12C17.97 6.24 18 6.37 18 6.5C18 6.63 17.97 6.76 17.92 6.88Z"
        fill="currentColor"
      />
    </Svg>
  );
};

const InstagramBroken = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M2 13.03V15C2 20 4 22 9 22H15C20 22 22 20 22 15V9C22 4 20 2 15 2H9C4 2 2 4 2 9"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M12 15.5C13.933 15.5 15.5 13.933 15.5 12C15.5 10.067 13.933 8.5 12 8.5C10.067 8.5 8.5 10.067 8.5 12C8.5 13.933 10.067 15.5 12 15.5Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M17.6361 7H17.6477"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

const InstagramBulk = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M11.9991 15.8801C14.142 15.8801 15.8791 14.143 15.8791 12.0001C15.8791 9.85725 14.142 8.12012 11.9991 8.12012C9.85628 8.12012 8.11914 9.85725 8.11914 12.0001C8.11914 14.143 9.85628 15.8801 11.9991 15.8801Z"
        fill="currentColor"
      />
      <Path
        d="M17 7.4999C16.73 7.4999 16.48 7.3999 16.29 7.2099C16.2 7.1099 16.13 6.9999 16.08 6.8799C16.03 6.7599 16 6.6299 16 6.4999C16 6.3699 16.03 6.2399 16.08 6.1199C16.13 5.9899 16.2 5.8899 16.29 5.7899C16.52 5.5599 16.87 5.4499 17.19 5.5199C17.26 5.5299 17.32 5.5499 17.38 5.5799C17.44 5.5999 17.5 5.6299 17.56 5.6699C17.61 5.6999 17.66 5.7499 17.71 5.7899C17.8 5.8899 17.87 5.9899 17.92 6.1199C17.97 6.2399 18 6.3699 18 6.4999C18 6.6299 17.97 6.7599 17.92 6.8799C17.87 6.9999 17.8 7.1099 17.71 7.2099C17.61 7.2999 17.5 7.3699 17.38 7.4199C17.26 7.4699 17.13 7.4999 17 7.4999Z"
        fill="currentColor"
      />
    </Svg>
  );
};

const InstagramLinear = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M12 15.5C13.933 15.5 15.5 13.933 15.5 12C15.5 10.067 13.933 8.5 12 8.5C10.067 8.5 8.5 10.067 8.5 12C8.5 13.933 10.067 15.5 12 15.5Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M17.6361 7H17.6477"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

const InstagramOutline = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M12 16.25C9.66 16.25 7.75 14.34 7.75 12C7.75 9.66 9.66 7.75 12 7.75C14.34 7.75 16.25 9.66 16.25 12C16.25 14.34 14.34 16.25 12 16.25ZM12 9.25C10.48 9.25 9.25 10.48 9.25 12C9.25 13.52 10.48 14.75 12 14.75C13.52 14.75 14.75 13.52 14.75 12C14.75 10.48 13.52 9.25 12 9.25Z"
        fill="currentColor"
      />
      <Path
        d="M17 7.4999C16.87 7.4999 16.74 7.4699 16.62 7.4199C16.5 7.3699 16.39 7.2999 16.29 7.2099C16.2 7.1099 16.12 6.9999 16.07 6.8799C16.02 6.7599 16 6.6299 16 6.4999C16 6.3699 16.02 6.2399 16.07 6.1199C16.13 5.9899 16.2 5.8899 16.29 5.7899C16.34 5.7499 16.39 5.6999 16.44 5.6699C16.5 5.6299 16.56 5.5999 16.62 5.5799C16.68 5.5499 16.74 5.5299 16.81 5.5199C17.13 5.4499 17.47 5.5599 17.71 5.7899C17.8 5.8899 17.87 5.9899 17.92 6.1199C17.97 6.2399 18 6.3699 18 6.4999C18 6.6299 17.97 6.7599 17.92 6.8799C17.87 6.9999 17.8 7.1099 17.71 7.2099C17.61 7.2999 17.5 7.3699 17.38 7.4199C17.26 7.4699 17.13 7.4999 17 7.4999Z"
        fill="currentColor"
      />
    </Svg>
  );
};

const InstagramTwotone = ({ size = 24, className, ...props }: IconProps) => {
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
        opacity="0.34"
        d="M12 15.5C13.933 15.5 15.5 13.933 15.5 12C15.5 10.067 13.933 8.5 12 8.5C10.067 8.5 8.5 10.067 8.5 12C8.5 13.933 10.067 15.5 12 15.5Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        opacity="0.34"
        d="M17.6361 7H17.6477"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

const variants: IconVariants = {
  bold: InstagramBold,
  broken: InstagramBroken,
  bulk: InstagramBulk,
  linear: InstagramLinear,
  outline: InstagramOutline,
  twotone: InstagramTwotone,
};

export const InstagramIcon = ({
  variant = iconDefaultOptions.variant,
  className,
  ...props
}: IconProps) => {
  const textClasses = useContext(TextClassContext);
  const Component = variants[variant];
  return <Component className={cn(textClasses, className)} {...props} />;
};
