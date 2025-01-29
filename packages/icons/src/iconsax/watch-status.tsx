import { useContext } from "react";
import { cn } from "unative/lib/utils";
import { Path, Svg } from "unative/ui/svg";
import { TextClassContext } from "unative/ui/text";

import type { IconProps, IconVariants } from "../icon-options";
import { defaultOptions } from "../icon-options";

const WatchStatusBold = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M16 3.75H8C7.59 3.75 7.25 3.41 7.25 3C7.25 2.59 7.59 2.25 8 2.25H16C16.41 2.25 16.75 2.59 16.75 3C16.75 3.41 16.41 3.75 16 3.75Z"
        fill="currentColor"
      />
      <Path
        d="M16 21.75H8C7.59 21.75 7.25 21.41 7.25 21C7.25 20.59 7.59 20.25 8 20.25H16C16.41 20.25 16.75 20.59 16.75 21C16.75 21.41 16.41 21.75 16 21.75Z"
        fill="currentColor"
      />
      <Path
        d="M15.5 5H8.5C6.17 5 5 6.17 5 8.5V15.5C5 17.83 6.17 19 8.5 19H15.5C17.83 19 19 17.83 19 15.5V8.5C19 6.17 17.83 5 15.5 5ZM9.75 14C9.75 14.41 9.41 14.75 9 14.75C8.59 14.75 8.25 14.42 8.25 14V13C8.25 12.59 8.59 12.25 9 12.25C9.41 12.25 9.75 12.59 9.75 13V14ZM12.75 14C12.75 14.41 12.41 14.75 12 14.75C11.59 14.75 11.25 14.41 11.25 14V10C11.25 9.59 11.59 9.25 12 9.25C12.41 9.25 12.75 9.59 12.75 10V14ZM15.75 14C15.75 14.41 15.41 14.75 15 14.75C14.59 14.75 14.25 14.41 14.25 14V12C14.25 11.59 14.59 11.25 15 11.25C15.41 11.25 15.75 11.59 15.75 12V14Z"
        fill="currentColor"
      />
    </Svg>
  );
};

const WatchStatusBroken = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M5 12.22V15.5C5 17.83 6.17 19 8.5 19H15.5C17.83 19 19 17.83 19 15.5V8.5C19 6.17 17.83 5 15.5 5H8.5C6.17 5 5 6.17 5 8.5"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M12 2H8"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M16 2H15"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M16 22H8"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M12 14V10"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M15 14V12"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M9 14V13"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

const WatchStatusBulk = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M8.5 19H15.5C17.83 19 19 17.83 19 15.5V8.5C19 6.17 17.83 5 15.5 5H8.5C6.17 5 5 6.17 5 8.5V15.5C5 17.83 6.17 19 8.5 19Z"
        fill="currentColor"
      />
      <Path
        d="M16 3.75H8C7.59 3.75 7.25 3.41 7.25 3C7.25 2.59 7.59 2.25 8 2.25H16C16.41 2.25 16.75 2.59 16.75 3C16.75 3.41 16.41 3.75 16 3.75Z"
        fill="currentColor"
      />
      <Path
        d="M16 21.75H8C7.59 21.75 7.25 21.41 7.25 21C7.25 20.59 7.59 20.25 8 20.25H16C16.41 20.25 16.75 20.59 16.75 21C16.75 21.41 16.41 21.75 16 21.75Z"
        fill="currentColor"
      />
      <Path
        d="M12 14.75C11.59 14.75 11.25 14.41 11.25 14V10C11.25 9.59 11.59 9.25 12 9.25C12.41 9.25 12.75 9.59 12.75 10V14C12.75 14.42 12.41 14.75 12 14.75Z"
        fill="currentColor"
      />
      <Path
        d="M15 14.75C14.59 14.75 14.25 14.41 14.25 14V12C14.25 11.59 14.59 11.25 15 11.25C15.41 11.25 15.75 11.59 15.75 12V14C15.75 14.42 15.42 14.75 15 14.75Z"
        fill="currentColor"
      />
      <Path
        d="M9 14.75C8.59 14.75 8.25 14.41 8.25 14V13C8.25 12.59 8.59 12.25 9 12.25C9.41 12.25 9.75 12.59 9.75 13V14C9.75 14.42 9.41 14.75 9 14.75Z"
        fill="currentColor"
      />
    </Svg>
  );
};

const WatchStatusLinear = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M8.5 19H15.5C17.83 19 19 17.83 19 15.5V8.5C19 6.17 17.83 5 15.5 5H8.5C6.17 5 5 6.17 5 8.5V15.5C5 17.83 6.17 19 8.5 19Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M16 2H8"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M16 22H8"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M12 14V10"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M15 14V12"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M9 14V13"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

const WatchStatusOutline = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M15.5 19.75H8.5C5.76 19.75 4.25 18.24 4.25 15.5V8.5C4.25 5.76 5.76 4.25 8.5 4.25H15.5C18.24 4.25 19.75 5.76 19.75 8.5V15.5C19.75 18.24 18.24 19.75 15.5 19.75ZM8.5 5.75C6.57 5.75 5.75 6.57 5.75 8.5V15.5C5.75 17.43 6.57 18.25 8.5 18.25H15.5C17.43 18.25 18.25 17.43 18.25 15.5V8.5C18.25 6.57 17.43 5.75 15.5 5.75H8.5Z"
        fill="currentColor"
      />
      <Path
        d="M16 2.75H8C7.59 2.75 7.25 2.41 7.25 2C7.25 1.59 7.59 1.25 8 1.25H16C16.41 1.25 16.75 1.59 16.75 2C16.75 2.41 16.41 2.75 16 2.75Z"
        fill="currentColor"
      />
      <Path
        d="M16 22.75H8C7.59 22.75 7.25 22.41 7.25 22C7.25 21.59 7.59 21.25 8 21.25H16C16.41 21.25 16.75 21.59 16.75 22C16.75 22.41 16.41 22.75 16 22.75Z"
        fill="currentColor"
      />
      <Path
        d="M12 14.75C11.59 14.75 11.25 14.41 11.25 14V10C11.25 9.59 11.59 9.25 12 9.25C12.41 9.25 12.75 9.59 12.75 10V14C12.75 14.42 12.41 14.75 12 14.75Z"
        fill="currentColor"
      />
      <Path
        d="M15 14.75C14.59 14.75 14.25 14.41 14.25 14V12C14.25 11.59 14.59 11.25 15 11.25C15.41 11.25 15.75 11.59 15.75 12V14C15.75 14.42 15.42 14.75 15 14.75Z"
        fill="currentColor"
      />
      <Path
        d="M9 14.75C8.59 14.75 8.25 14.41 8.25 14V13C8.25 12.59 8.59 12.25 9 12.25C9.41 12.25 9.75 12.59 9.75 13V14C9.75 14.42 9.41 14.75 9 14.75Z"
        fill="currentColor"
      />
    </Svg>
  );
};

const WatchStatusTwotone = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M8.5 19H15.5C17.83 19 19 17.83 19 15.5V8.5C19 6.17 17.83 5 15.5 5H8.5C6.17 5 5 6.17 5 8.5V15.5C5 17.83 6.17 19 8.5 19Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        opacity="0.4"
        d="M16 2H8"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        opacity="0.4"
        d="M16 22H8"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        opacity="0.4"
        d="M12 14V10"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        opacity="0.4"
        d="M15 14V12"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        opacity="0.4"
        d="M9 14V13"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

const variants: IconVariants = {
  bold: WatchStatusBold,
  broken: WatchStatusBroken,
  bulk: WatchStatusBulk,
  linear: WatchStatusLinear,
  outline: WatchStatusOutline,
  twotone: WatchStatusTwotone,
};

export const WatchStatusIcon = ({
  variant = defaultOptions.variant,
  className,
  ...props
}: IconProps) => {
  const textClasses = useContext(TextClassContext);
  const Component = variants[variant];
  return <Component className={cn(textClasses, className)} {...props} />;
};

export default WatchStatusIcon;
