import { useContext } from "react";
import { Path, Svg } from "unative/lib/svg";
import { cn } from "unative/lib/utils";
import { TextClassContext } from "unative/ui/text";

import type { IconProps, IconVariants } from "../types/icons-type";

const DropBold = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M16.5885 7.41L6.30849 17.69C5.82849 18.17 5.00849 18.06 4.71849 17.45C4.19849 16.38 3.89849 15.17 3.89849 13.9C3.87849 8.38 9.47849 3.66 11.3785 2.21C11.7485 1.93 12.2485 1.93 12.6085 2.21C13.4785 2.87 15.1085 4.24 16.6385 6.04C16.9785 6.44 16.9585 7.04 16.5885 7.41Z"
        fill="currentColor"
      />
      <Path
        d="M20.1 13.9103C20.1 18.3703 16.47 22.0003 12 22.0003C10.21 22.0003 8.53996 21.4203 7.18996 20.4203C6.69996 20.0603 6.65996 19.3403 7.08996 18.9103L17.16 8.84026C17.63 8.37026 18.42 8.47026 18.74 9.05026C19.56 10.5603 20.11 12.2003 20.1 13.9103Z"
        fill="currentColor"
      />
    </Svg>
  );
};

const DropBroken = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M3.90039 13.9C3.90039 18.36 7.5304 22 12.0004 22C16.4704 22 20.1004 18.37 20.1004 13.91C20.1304 8.47996 14.5004 3.66996 12.6104 2.20996"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M12.6109 2.21C12.2509 1.93 11.751 1.93 11.391 2.21C10.011 3.26 6.67094 6.04 4.96094 9.6"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

const DropBulk = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M16.5904 7.41L6.31044 17.69C5.83044 18.17 5.01044 18.06 4.72044 17.45C4.20044 16.38 3.90044 15.17 3.90044 13.9C3.88044 8.38 9.48044 3.66 11.3804 2.21C11.7504 1.93 12.2504 1.93 12.6104 2.21C13.4804 2.87 15.1104 4.24 16.6404 6.04C16.9804 6.44 16.9604 7.04 16.5904 7.41Z"
        fill="currentColor"
      />
      <Path
        opacity="0.4"
        d="M20.1 13.91C20.1 18.37 16.47 22 12 22C10.21 22 8.53996 21.42 7.18996 20.42C6.69996 20.06 6.65996 19.34 7.08996 18.91L17.16 8.84002C17.63 8.37002 18.42 8.47002 18.74 9.05002C19.56 10.56 20.11 12.2 20.1 13.91Z"
        fill="currentColor"
      />
    </Svg>
  );
};

const DropLinear = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M12.61 2.21C12.25 1.93 11.75 1.93 11.39 2.21C9.49004 3.66 3.88003 8.39 3.91003 13.9C3.91003 18.36 7.54004 22 12.01 22C16.48 22 20.11 18.37 20.11 13.91C20.12 8.48 14.5 3.67 12.61 2.21Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeMiterlimit="10"
      />
    </Svg>
  );
};

const DropOutline = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M12.61 2.21C12.25 1.93 11.75 1.93 11.39 2.21C9.49004 3.66 3.88003 8.39 3.91003 13.9C3.91003 18.36 7.54004 22 12.01 22C16.48 22 20.11 18.37 20.11 13.91C20.12 8.48 14.5 3.67 12.61 2.21Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeMiterlimit="10"
      />
    </Svg>
  );
};

const DropTwotone = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M12.6103 2.21C12.2503 1.93 11.7503 1.93 11.3903 2.21C9.49029 3.66 3.88028 8.39 3.91028 13.9C3.91028 18.36 7.54028 22 12.0103 22C16.4803 22 20.1103 18.37 20.1103 13.91C20.1203 8.48 14.5003 3.67 12.6103 2.21Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeMiterlimit="10"
      />
    </Svg>
  );
};

const variants: IconVariants = {
  bold: DropBold,
  broken: DropBroken,
  bulk: DropBulk,
  linear: DropLinear,
  outline: DropOutline,
  twotone: DropTwotone,
};

export const DropIcon = ({
  variant = "linear",
  className,
  ...props
}: IconProps) => {
  const textClasses = useContext(TextClassContext);
  const Component = variants[variant];
  return <Component className={cn(textClasses, className)} {...props} />;
};
