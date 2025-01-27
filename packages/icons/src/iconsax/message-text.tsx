import { useContext } from "react";
import { Path, Svg } from "unative/lib/svg";
import { cn } from "unative/lib/utils";
import { TextClassContext } from "unative/ui/text";

import type { IconProps, IconVariants } from "../icon-options";
import { defaultOptions } from "../icon-options";

const MessageTextBold = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M16 2H8C4 2 2 4 2 8V21C2 21.55 2.45 22 3 22H16C20 22 22 20 22 16V8C22 4 20 2 16 2ZM14 15.25H7C6.59 15.25 6.25 14.91 6.25 14.5C6.25 14.09 6.59 13.75 7 13.75H14C14.41 13.75 14.75 14.09 14.75 14.5C14.75 14.91 14.41 15.25 14 15.25ZM17 10.25H7C6.59 10.25 6.25 9.91 6.25 9.5C6.25 9.09 6.59 8.75 7 8.75H17C17.41 8.75 17.75 9.09 17.75 9.5C17.75 9.91 17.41 10.25 17 10.25Z"
        fill="currentColor"
      />
    </Svg>
  );
};

const MessageTextBroken = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M22 8C22 4 20 2 16 2H8C4 2 2 4 2 8V21C2 21.55 2.45 22 3 22H16C20 22 22 20 22 16V12"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M15 9.5H17"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M7 9.5H12"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M7 14.5H14"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

const MessageTextBulk = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M16 2H8C4 2 2 4 2 8V21C2 21.55 2.45 22 3 22H16C20 22 22 20 22 16V8C22 4 20 2 16 2Z"
        fill="currentColor"
      />
      <Path
        d="M17 8.75H7C6.59 8.75 6.25 9.09 6.25 9.5C6.25 9.91 6.59 10.25 7 10.25H17C17.41 10.25 17.75 9.91 17.75 9.5C17.75 9.09 17.41 8.75 17 8.75Z"
        fill="currentColor"
      />
      <Path
        d="M14 13.75H7C6.59 13.75 6.25 14.09 6.25 14.5C6.25 14.91 6.59 15.25 7 15.25H14C14.41 15.25 14.75 14.91 14.75 14.5C14.75 14.09 14.41 13.75 14 13.75Z"
        fill="currentColor"
      />
    </Svg>
  );
};

const MessageTextLinear = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M16 2H8C4 2 2 4 2 8V21C2 21.55 2.45 22 3 22H16C20 22 22 20 22 16V8C22 4 20 2 16 2Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M7 9.5H17"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M7 14.5H14"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

const MessageTextOutline = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M12 22.81C11.31 22.81 10.66 22.46 10.2 21.85L8.7 19.85C8.67 19.81 8.55 19.76 8.5 19.75H8C3.83 19.75 1.25 18.62 1.25 13V8C1.25 3.58 3.58 1.25 8 1.25H16C20.42 1.25 22.75 3.58 22.75 8V13C22.75 17.42 20.42 19.75 16 19.75H15.5C15.42 19.75 15.35 19.79 15.3 19.85L13.8 21.85C13.34 22.46 12.69 22.81 12 22.81ZM8 2.75C4.42 2.75 2.75 4.42 2.75 8V13C2.75 17.52 4.3 18.25 8 18.25H8.5C9.01 18.25 9.59 18.54 9.9 18.95L11.4 20.95C11.75 21.41 12.25 21.41 12.6 20.95L14.1 18.95C14.43 18.51 14.95 18.25 15.5 18.25H16C19.58 18.25 21.25 16.58 21.25 13V8C21.25 4.42 19.58 2.75 16 2.75H8Z"
        fill="currentColor"
      />
      <Path
        d="M17 8.75H7C6.59 8.75 6.25 8.41 6.25 8C6.25 7.59 6.59 7.25 7 7.25H17C17.41 7.25 17.75 7.59 17.75 8C17.75 8.41 17.41 8.75 17 8.75Z"
        fill="currentColor"
      />
      <Path
        d="M13 13.75H7C6.59 13.75 6.25 13.41 6.25 13C6.25 12.59 6.59 12.25 7 12.25H13C13.41 12.25 13.75 12.59 13.75 13C13.75 13.41 13.41 13.75 13 13.75Z"
        fill="currentColor"
      />
    </Svg>
  );
};

const MessageTextTwotone = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M16 2H8C4 2 2 4 2 8V21C2 21.55 2.45 22 3 22H16C20 22 22 20 22 16V8C22 4 20 2 16 2Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        opacity="0.4"
        d="M7 9.5H17"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        opacity="0.4"
        d="M7 14.5H14"
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
  bold: MessageTextBold,
  broken: MessageTextBroken,
  bulk: MessageTextBulk,
  linear: MessageTextLinear,
  outline: MessageTextOutline,
  twotone: MessageTextTwotone,
};

export const MessageTextIcon = ({
  variant = defaultOptions.variant,
  className,
  ...props
}: IconProps) => {
  const textClasses = useContext(TextClassContext);
  const Component = variants[variant];
  return <Component className={cn(textClasses, className)} {...props} />;
};
