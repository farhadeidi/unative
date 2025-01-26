import { useContext } from "react";
import { Path, Svg } from "unative/lib/svg";
import { cn } from "unative/lib/utils";
import { TextClassContext } from "unative/ui/text";

import { iconDefaultOptions } from "../icons-configuration";
import type { IconProps, IconVariants } from "../types/icons-type";

const RepeateOneBold = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M3.91 17.1814C3.72 17.1814 3.53 17.1114 3.38 16.9614C2.01 15.5814 1.25 13.7614 1.25 11.8314C1.25 7.82139 4.5 4.56139 8.5 4.56139L14.57 4.58139L13.48 3.54139C13.18 3.25139 13.17 2.78139 13.46 2.48139C13.75 2.18139 14.22 2.17139 14.52 2.46139L16.96 4.80139C17.18 5.01139 17.25 5.34139 17.14 5.62139C17.03 5.90139 16.75 6.09139 16.44 6.09139L8.5 6.07139C5.33 6.07139 2.75 8.66139 2.75 11.8414C2.75 13.3714 3.35 14.8214 4.44 15.9114C4.73 16.2014 4.73 16.6814 4.44 16.9714C4.29 17.1114 4.1 17.1814 3.91 17.1814Z"
        fill="currentColor"
      />
      <Path
        d="M9.9999 21.75C9.8099 21.75 9.6299 21.68 9.4799 21.54L7.0399 19.2C6.8199 18.99 6.7499 18.66 6.8599 18.38C6.9799 18.1 7.2599 17.95 7.5599 17.91L15.5099 17.93C18.6799 17.93 21.2599 15.34 21.2599 12.16C21.2599 10.63 20.6599 9.18 19.5699 8.09C19.2799 7.8 19.2799 7.32 19.5699 7.03C19.8599 6.74 20.3399 6.74 20.6299 7.03C21.9999 8.41 22.7599 10.23 22.7599 12.16C22.7599 16.17 19.5099 19.43 15.5099 19.43L9.4399 19.41L10.5299 20.45C10.8299 20.74 10.8399 21.21 10.5499 21.51C10.3899 21.67 10.1999 21.75 9.9999 21.75Z"
        fill="currentColor"
      />
      <Path
        d="M12.2485 15.4191C11.8385 15.4191 11.4985 15.0791 11.4985 14.6691V11.2791L11.3085 11.4891C11.0285 11.7991 10.5585 11.8191 10.2485 11.5491C9.93853 11.2791 9.91853 10.7991 10.1885 10.4891L11.6885 8.81909C11.8985 8.58909 12.2285 8.50909 12.5185 8.61909C12.8085 8.73909 12.9985 9.00909 12.9985 9.32909V14.6791C12.9985 15.0891 12.6585 15.4191 12.2485 15.4191Z"
        fill="currentColor"
      />
    </Svg>
  );
};

const RepeateOneBroken = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M8.5 5.32007C4.93 5.32007 2 8.25009 2 11.8401C2 13.6301 2.73 15.2601 3.91 16.4401"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M13.9997 3L16.4397 5.34003L12.9297 5.33002"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M10.0005 21.0001L7.56055 18.66L15.5106 18.6801C19.0806 18.6801 22.0106 15.75 22.0106 12.16C22.0106 10.37 21.2806 8.74006 20.1006 7.56006"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M12.25 14.67V9.33008L10.75 11.0001"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

const RepeateOneBulk = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M3.91 17.1799C3.72 17.1799 3.53 17.1099 3.38 16.9599C2.01 15.5799 1.25 13.7599 1.25 11.8299C1.25 7.81994 4.5 4.55992 8.5 4.55992L14.57 4.57994L13.48 3.5399C13.18 3.2499 13.17 2.77991 13.46 2.47991C13.75 2.17991 14.22 2.16995 14.52 2.45995L16.96 4.79991C17.18 5.00991 17.25 5.33992 17.14 5.61992C17.03 5.89992 16.75 6.08995 16.44 6.08995L8.48999 6.06993C5.31999 6.06993 2.73999 8.65995 2.73999 11.84C2.73999 13.37 3.33999 14.8199 4.42999 15.9099C4.71999 16.1999 4.71999 16.6799 4.42999 16.9699C4.28999 17.1099 4.1 17.1799 3.91 17.1799Z"
        fill="currentColor"
      />
      <Path
        opacity="0.4"
        d="M9.99991 21.75C9.80991 21.75 9.62992 21.6799 9.47992 21.5399L7.03992 19.2C6.81992 18.99 6.7499 18.66 6.8599 18.38C6.9799 18.1 7.25991 17.9499 7.55991 17.9099L15.5099 17.93C18.6799 17.93 21.2599 15.3399 21.2599 12.1599C21.2599 10.6299 20.6599 9.18 19.5699 8.09C19.2799 7.8 19.2799 7.32 19.5699 7.03C19.8599 6.74 20.3399 6.74 20.6299 7.03C21.9999 8.41 22.7599 10.2299 22.7599 12.1599C22.7599 16.1699 19.5099 19.43 15.5099 19.43L9.43991 19.4099L10.5299 20.45C10.8299 20.74 10.8399 21.21 10.5499 21.51C10.3899 21.67 10.1999 21.75 9.99991 21.75Z"
        fill="currentColor"
      />
      <Path
        d="M12.2505 15.4201C11.8405 15.4201 11.5005 15.0801 11.5005 14.6701V11.2801L11.3105 11.4901C11.0305 11.8001 10.5605 11.8201 10.2505 11.5501C9.94049 11.2801 9.92049 10.8001 10.1905 10.4901L11.6905 8.82008C11.9005 8.59008 12.2305 8.51007 12.5205 8.62007C12.8105 8.73007 13.0005 9.01008 13.0005 9.32008V14.6701C13.0005 15.0901 12.6605 15.4201 12.2505 15.4201Z"
        fill="currentColor"
      />
    </Svg>
  );
};

const RepeateOneLinear = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M14 3L16.44 5.34003L8.48999 5.32001C4.91999 5.32001 1.98999 8.25003 1.98999 11.84C1.98999 13.63 2.71999 15.26 3.89999 16.44"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M10.0001 21.0001L7.56006 18.66L15.5101 18.6801C19.0801 18.6801 22.0101 15.75 22.0101 12.16C22.0101 10.37 21.2801 8.74006 20.1001 7.56006"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M12.25 14.67V9.33008L10.75 11.0001"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

const RepeateOneOutline = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M3.91 17.1799C3.72 17.1799 3.53 17.1099 3.38 16.9599C2.01 15.5799 1.25 13.7599 1.25 11.8299C1.25 7.81994 4.5 4.55992 8.5 4.55992L14.57 4.57994L13.48 3.5399C13.18 3.2499 13.17 2.77991 13.46 2.47991C13.75 2.17991 14.22 2.16995 14.52 2.45995L16.96 4.79991C17.18 5.00991 17.25 5.33992 17.14 5.61992C17.03 5.89992 16.75 6.08995 16.44 6.08995L8.48999 6.06993C5.31999 6.06993 2.73999 8.65995 2.73999 11.84C2.73999 13.37 3.33999 14.8199 4.42999 15.9099C4.71999 16.1999 4.71999 16.6799 4.42999 16.9699C4.28999 17.1099 4.1 17.1799 3.91 17.1799Z"
        fill="currentColor"
      />
      <Path
        d="M9.99991 21.75C9.80991 21.75 9.62992 21.6799 9.47992 21.5399L7.03992 19.2C6.81992 18.99 6.7499 18.66 6.8599 18.38C6.9699 18.1 7.24991 17.9099 7.55991 17.9099L15.5099 17.93C18.6799 17.93 21.2599 15.3399 21.2599 12.1599C21.2599 10.6299 20.6599 9.18 19.5699 8.09C19.2799 7.8 19.2799 7.32 19.5699 7.03C19.8599 6.74 20.3399 6.74 20.6299 7.03C21.9999 8.41 22.7599 10.2299 22.7599 12.1599C22.7599 16.1699 19.5099 19.43 15.5099 19.43L9.43991 19.4099L10.5299 20.45C10.8299 20.74 10.8399 21.21 10.5499 21.51C10.3899 21.67 10.1999 21.75 9.99991 21.75Z"
        fill="currentColor"
      />
      <Path
        d="M12.2505 15.4201C11.8405 15.4201 11.5005 15.0801 11.5005 14.6701V11.2801L11.3105 11.4901C11.0305 11.8001 10.5605 11.8201 10.2505 11.5501C9.94049 11.2801 9.92049 10.8001 10.1905 10.4901L11.6905 8.82008C11.9005 8.59008 12.2305 8.51007 12.5205 8.62007C12.8105 8.73007 13.0005 9.01008 13.0005 9.32008V14.6701C13.0005 15.0901 12.6605 15.4201 12.2505 15.4201Z"
        fill="currentColor"
      />
    </Svg>
  );
};

const RepeateOneTwotone = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M14.0002 3L16.4402 5.34003L8.49023 5.32001C4.92023 5.32001 1.99023 8.25003 1.99023 11.84C1.99023 13.63 2.72024 15.26 3.90024 16.44"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M10.0005 21.0001L7.56055 18.66L15.5106 18.6801C19.0806 18.6801 22.0106 15.75 22.0106 12.16C22.0106 10.37 21.2806 8.74006 20.1006 7.56006"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        opacity="0.4"
        d="M12.25 14.67V9.33008L10.75 11.0001"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

const variants: IconVariants = {
  bold: RepeateOneBold,
  broken: RepeateOneBroken,
  bulk: RepeateOneBulk,
  linear: RepeateOneLinear,
  outline: RepeateOneOutline,
  twotone: RepeateOneTwotone,
};

export const RepeateOneIcon = ({
  variant = iconDefaultOptions.variant,
  className,
  ...props
}: IconProps) => {
  const textClasses = useContext(TextClassContext);
  const Component = variants[variant];
  return <Component className={cn(textClasses, className)} {...props} />;
};
