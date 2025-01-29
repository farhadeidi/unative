import { useContext } from "react";
import { cn } from "unative/lib/utils";
import { Path, Svg } from "unative/ui/svg";
import { TextClassContext } from "unative/ui/text";

import type { IconProps, IconVariants } from "../icon-options";
import { defaultOptions } from "../icon-options";

const HappyemojiBold = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M11.9707 2C6.4507 2 1.9707 6.48 1.9707 12C1.9707 17.52 6.4507 22 11.9707 22C17.4907 22 21.9707 17.52 21.9707 12C21.9707 6.48 17.5007 2 11.9707 2ZM17.4007 16.43C16.1707 18.2 14.1507 19.25 12.0007 19.25C9.8507 19.25 7.8307 18.2 6.6007 16.43C6.3607 16.09 6.4507 15.62 6.7907 15.39C7.1307 15.15 7.6007 15.24 7.8307 15.58C8.7807 16.94 10.3407 17.76 12.0007 17.76C13.6607 17.76 15.2207 16.95 16.1707 15.58C16.4107 15.24 16.8707 15.16 17.2107 15.39C17.5607 15.62 17.6407 16.09 17.4007 16.43Z"
        fill="currentColor"
      />
    </Svg>
  );
};

const HappyemojiBroken = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M7.21094 16C8.26094 17.51 10.0209 18.5 12.0009 18.5C13.9809 18.5 15.7309 17.51 16.7909 16"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M4 6C2.75 7.67 2 9.75 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2C10.57 2 9.2 2.3 7.97 2.85"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

const HappyemojiBulk = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M11.9707 22C17.4936 22 21.9707 17.5228 21.9707 12C21.9707 6.47715 17.4936 2 11.9707 2C6.44786 2 1.9707 6.47715 1.9707 12C1.9707 17.5228 6.44786 22 11.9707 22Z"
        fill="currentColor"
      />
      <Path
        d="M11.9999 19.2499C9.84988 19.2499 7.82988 18.1999 6.59988 16.4299C6.35988 16.0899 6.44988 15.6199 6.78988 15.3899C7.12988 15.1499 7.59988 15.2399 7.82988 15.5799C8.77988 16.9399 10.3399 17.7599 11.9999 17.7599C13.6599 17.7599 15.2199 16.9499 16.1699 15.5799C16.4099 15.2399 16.8699 15.1599 17.2099 15.3899C17.5499 15.6299 17.6299 16.0899 17.3999 16.4299C16.1699 18.1999 14.1499 19.2499 11.9999 19.2499Z"
        fill="currentColor"
      />
    </Svg>
  );
};

const HappyemojiLinear = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M11.97 22C17.4928 22 21.97 17.5228 21.97 12C21.97 6.47715 17.4928 2 11.97 2C6.44712 2 1.96997 6.47715 1.96997 12C1.96997 17.5228 6.44712 22 11.97 22Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M7.20996 16C8.25996 17.51 10.02 18.5 12 18.5C13.98 18.5 15.73 17.51 16.79 16"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

const HappyemojiOutline = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M11.9707 22.75C6.0507 22.75 1.2207 17.93 1.2207 12C1.2207 6.07 6.0507 1.25 11.9707 1.25C17.8907 1.25 22.7207 6.07 22.7207 12C22.7207 17.93 17.9007 22.75 11.9707 22.75ZM11.9707 2.75C6.8707 2.75 2.7207 6.9 2.7207 12C2.7207 17.1 6.8707 21.25 11.9707 21.25C17.0707 21.25 21.2207 17.1 21.2207 12C21.2207 6.9 17.0707 2.75 11.9707 2.75Z"
        fill="currentColor"
      />
      <Path
        d="M11.9999 19.2499C9.84988 19.2499 7.82988 18.1999 6.59988 16.4299C6.35988 16.0899 6.44988 15.6199 6.78988 15.3899C7.12988 15.1499 7.59988 15.2399 7.82988 15.5799C8.77988 16.9399 10.3399 17.7599 11.9999 17.7599C13.6599 17.7599 15.2199 16.9499 16.1699 15.5799C16.4099 15.2399 16.8699 15.1599 17.2099 15.3899C17.5499 15.6299 17.6299 16.0899 17.3999 16.4299C16.1699 18.1999 14.1499 19.2499 11.9999 19.2499Z"
        fill="currentColor"
      />
    </Svg>
  );
};

const HappyemojiTwotone = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M11.9707 22C17.4936 22 21.9707 17.5228 21.9707 12C21.9707 6.47715 17.4936 2 11.9707 2C6.44786 2 1.9707 6.47715 1.9707 12C1.9707 17.5228 6.44786 22 11.9707 22Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        opacity="0.34"
        d="M7.21094 16C8.26094 17.51 10.0209 18.5 12.0009 18.5C13.9809 18.5 15.7309 17.51 16.7909 16"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

const variants: IconVariants = {
  bold: HappyemojiBold,
  broken: HappyemojiBroken,
  bulk: HappyemojiBulk,
  linear: HappyemojiLinear,
  outline: HappyemojiOutline,
  twotone: HappyemojiTwotone,
};

export const HappyemojiIcon = ({
  variant = defaultOptions.variant,
  className,
  ...props
}: IconProps) => {
  const textClasses = useContext(TextClassContext);
  const Component = variants[variant];
  return <Component className={cn(textClasses, className)} {...props} />;
};

export default HappyemojiIcon;
