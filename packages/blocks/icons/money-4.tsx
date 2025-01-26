import { useContext } from "react";
import { Path, Svg } from "unative/lib/svg";
import { cn } from "unative/lib/utils";
import { TextClassContext } from "unative/ui/text";

import type { IconProps, IconVariants } from "../types/icons-type";

const Money4Bold = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M17 3.5H7C4 3.5 2 5 2 8.5V15.5C2 19 4 20.5 7 20.5H17C20 20.5 22 19 22 15.5V8.5C22 5 20 3.5 17 3.5ZM3.75 8.5C3.75 6.71 5.21 5.25 7 5.25H8.5C8.91 5.25 9.25 5.59 9.25 6C9.25 6.41 8.91 6.75 8.5 6.75H7C6.04 6.75 5.25 7.54 5.25 8.5V10C5.25 10.41 4.91 10.75 4.5 10.75C4.09 10.75 3.75 10.41 3.75 10V8.5ZM8.5 18.75H7C5.21 18.75 3.75 17.29 3.75 15.5V14C3.75 13.59 4.09 13.25 4.5 13.25C4.91 13.25 5.25 13.59 5.25 14V15.5C5.25 16.46 6.04 17.25 7 17.25H8.5C8.91 17.25 9.25 17.59 9.25 18C9.25 18.41 8.91 18.75 8.5 18.75ZM12 15C10.34 15 9 13.66 9 12C9 10.34 10.34 9 12 9C13.66 9 15 10.34 15 12C15 13.66 13.66 15 12 15ZM20.25 15.5C20.25 17.29 18.79 18.75 17 18.75H15.5C15.09 18.75 14.75 18.41 14.75 18C14.75 17.59 15.09 17.25 15.5 17.25H17C17.96 17.25 18.75 16.46 18.75 15.5V14C18.75 13.59 19.09 13.25 19.5 13.25C19.91 13.25 20.25 13.59 20.25 14V15.5ZM20.25 10C20.25 10.41 19.91 10.75 19.5 10.75C19.09 10.75 18.75 10.41 18.75 10V8.5C18.75 7.54 17.96 6.75 17 6.75H15.5C15.09 6.75 14.75 6.41 14.75 6C14.75 5.59 15.09 5.25 15.5 5.25H17C18.79 5.25 20.25 6.71 20.25 8.5V10Z"
        fill="currentColor"
      />
    </Svg>
  );
};

const Money4Broken = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M2 8.5C2 5 4 3.5 7 3.5H17C20 3.5 22 5 22 8.5V15.5C22 19 20 20.5 17 20.5H7C4 20.5 2 19 2 15.5V12.53"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M15 12C15 10.34 13.66 9 12 9C10.34 9 9 10.34 9 12C9 13.66 10.34 15 12 15"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M8.5 6H7C5.62 6 4.5 7.12 4.5 8.5V10"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M15.5 6H17C18.38 6 19.5 7.12 19.5 8.5V10"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M8.5 18H7C5.62 18 4.5 16.88 4.5 15.5V14"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M15.5 18H17C18.38 18 19.5 16.88 19.5 15.5V14"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

const Money4Bulk = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M17 20.5H7C4 20.5 2 19 2 15.5V8.5C2 5 4 3.5 7 3.5H17C20 3.5 22 5 22 8.5V15.5C22 19 20 20.5 17 20.5Z"
        fill="currentColor"
      />
      <Path
        d="M12 15C13.6569 15 15 13.6569 15 12C15 10.3431 13.6569 9 12 9C10.3431 9 9 10.3431 9 12C9 13.6569 10.3431 15 12 15Z"
        fill="currentColor"
      />
      <Path
        d="M4.5 10.75C4.09 10.75 3.75 10.41 3.75 10V8.5C3.75 6.71 5.21 5.25 7 5.25H8.5C8.91 5.25 9.25 5.59 9.25 6C9.25 6.41 8.91 6.75 8.5 6.75H7C6.04 6.75 5.25 7.54 5.25 8.5V10C5.25 10.41 4.91 10.75 4.5 10.75Z"
        fill="currentColor"
      />
      <Path
        d="M19.5 10.75C19.09 10.75 18.75 10.41 18.75 10V8.5C18.75 7.54 17.96 6.75 17 6.75H15.5C15.09 6.75 14.75 6.41 14.75 6C14.75 5.59 15.09 5.25 15.5 5.25H17C18.79 5.25 20.25 6.71 20.25 8.5V10C20.25 10.41 19.91 10.75 19.5 10.75Z"
        fill="currentColor"
      />
      <Path
        d="M8.5 18.75H7C5.21 18.75 3.75 17.29 3.75 15.5V14C3.75 13.59 4.09 13.25 4.5 13.25C4.91 13.25 5.25 13.59 5.25 14V15.5C5.25 16.46 6.04 17.25 7 17.25H8.5C8.91 17.25 9.25 17.59 9.25 18C9.25 18.41 8.91 18.75 8.5 18.75Z"
        fill="currentColor"
      />
      <Path
        d="M17 18.75H15.5C15.09 18.75 14.75 18.41 14.75 18C14.75 17.59 15.09 17.25 15.5 17.25H17C17.96 17.25 18.75 16.46 18.75 15.5V14C18.75 13.59 19.09 13.25 19.5 13.25C19.91 13.25 20.25 13.59 20.25 14V15.5C20.25 17.29 18.79 18.75 17 18.75Z"
        fill="currentColor"
      />
    </Svg>
  );
};

const Money4Linear = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M17 20.5H7C4 20.5 2 19 2 15.5V8.5C2 5 4 3.5 7 3.5H17C20 3.5 22 5 22 8.5V15.5C22 19 20 20.5 17 20.5Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M12 15C13.6569 15 15 13.6569 15 12C15 10.3431 13.6569 9 12 9C10.3431 9 9 10.3431 9 12C9 13.6569 10.3431 15 12 15Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M8.5 6H7C5.62 6 4.5 7.12 4.5 8.5V10"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M15.5 6H17C18.38 6 19.5 7.12 19.5 8.5V10"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M8.5 18H7C5.62 18 4.5 16.88 4.5 15.5V14"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M15.5 18H17C18.38 18 19.5 16.88 19.5 15.5V14"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

const Money4Outline = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M17 21.25H7C3.35 21.25 1.25 19.15 1.25 15.5V8.5C1.25 4.85 3.35 2.75 7 2.75H17C20.65 2.75 22.75 4.85 22.75 8.5V15.5C22.75 19.15 20.65 21.25 17 21.25ZM7 4.25C4.14 4.25 2.75 5.64 2.75 8.5V15.5C2.75 18.36 4.14 19.75 7 19.75H17C19.86 19.75 21.25 18.36 21.25 15.5V8.5C21.25 5.64 19.86 4.25 17 4.25H7Z"
        fill="currentColor"
      />
      <Path
        d="M12 15.75C9.93 15.75 8.25 14.07 8.25 12C8.25 9.93 9.93 8.25 12 8.25C14.07 8.25 15.75 9.93 15.75 12C15.75 14.07 14.07 15.75 12 15.75ZM12 9.75C10.76 9.75 9.75 10.76 9.75 12C9.75 13.24 10.76 14.25 12 14.25C13.24 14.25 14.25 13.24 14.25 12C14.25 10.76 13.24 9.75 12 9.75Z"
        fill="currentColor"
      />
      <Path
        d="M4.5 10.75C4.09 10.75 3.75 10.41 3.75 10V8.5C3.75 6.71 5.21 5.25 7 5.25H8.5C8.91 5.25 9.25 5.59 9.25 6C9.25 6.41 8.91 6.75 8.5 6.75H7C6.04 6.75 5.25 7.54 5.25 8.5V10C5.25 10.41 4.91 10.75 4.5 10.75Z"
        fill="currentColor"
      />
      <Path
        d="M19.5 10.75C19.09 10.75 18.75 10.41 18.75 10V8.5C18.75 7.54 17.96 6.75 17 6.75H15.5C15.09 6.75 14.75 6.41 14.75 6C14.75 5.59 15.09 5.25 15.5 5.25H17C18.79 5.25 20.25 6.71 20.25 8.5V10C20.25 10.41 19.91 10.75 19.5 10.75Z"
        fill="currentColor"
      />
      <Path
        d="M8.5 18.75H7C5.21 18.75 3.75 17.29 3.75 15.5V14C3.75 13.59 4.09 13.25 4.5 13.25C4.91 13.25 5.25 13.59 5.25 14V15.5C5.25 16.46 6.04 17.25 7 17.25H8.5C8.91 17.25 9.25 17.59 9.25 18C9.25 18.41 8.91 18.75 8.5 18.75Z"
        fill="currentColor"
      />
      <Path
        d="M17 18.75H15.5C15.09 18.75 14.75 18.41 14.75 18C14.75 17.59 15.09 17.25 15.5 17.25H17C17.96 17.25 18.75 16.46 18.75 15.5V14C18.75 13.59 19.09 13.25 19.5 13.25C19.91 13.25 20.25 13.59 20.25 14V15.5C20.25 17.29 18.79 18.75 17 18.75Z"
        fill="currentColor"
      />
    </Svg>
  );
};

const Money4Twotone = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M17 20.5H7C4 20.5 2 19 2 15.5V8.5C2 5 4 3.5 7 3.5H17C20 3.5 22 5 22 8.5V15.5C22 19 20 20.5 17 20.5Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M12 15C13.6569 15 15 13.6569 15 12C15 10.3431 13.6569 9 12 9C10.3431 9 9 10.3431 9 12C9 13.6569 10.3431 15 12 15Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        opacity="0.4"
        d="M8.5 6H7C5.62 6 4.5 7.12 4.5 8.5V10"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        opacity="0.4"
        d="M15.5 6H17C18.38 6 19.5 7.12 19.5 8.5V10"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        opacity="0.4"
        d="M8.5 18H7C5.62 18 4.5 16.88 4.5 15.5V14"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        opacity="0.4"
        d="M15.5 18H17C18.38 18 19.5 16.88 19.5 15.5V14"
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
  bold: Money4Bold,
  broken: Money4Broken,
  bulk: Money4Bulk,
  linear: Money4Linear,
  outline: Money4Outline,
  twotone: Money4Twotone,
};

export const Money4Icon = ({
  variant = "linear",
  className,
  ...props
}: IconProps) => {
  const textClasses = useContext(TextClassContext);
  const Component = variants[variant];
  return <Component className={cn(textClasses, className)} {...props} />;
};
