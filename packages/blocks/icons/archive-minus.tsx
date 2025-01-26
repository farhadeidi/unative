import { useContext } from "react";
import { Path, Svg } from "unative/lib/svg";
import { cn } from "unative/lib/utils";
import { TextClassContext } from "unative/ui/text";

import { iconDefaultOptions } from "../icons-configuration";
import type { IconProps, IconVariants } from "../types/icons-type";

const ArchiveMinusBold = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M16.8203 2H7.18031C5.05031 2 3.32031 3.74 3.32031 5.86V19.95C3.32031 21.75 4.61031 22.51 6.19031 21.64L11.0703 18.93C11.5903 18.64 12.4303 18.64 12.9403 18.93L17.8203 21.64C19.4003 22.52 20.6903 21.76 20.6903 19.95V5.86C20.6803 3.74 18.9503 2 16.8203 2ZM14.5003 11.4H9.50031C9.09031 11.4 8.75031 11.06 8.75031 10.65C8.75031 10.24 9.09031 9.9 9.50031 9.9H14.5003C14.9103 9.9 15.2503 10.24 15.2503 10.65C15.2503 11.06 14.9103 11.4 14.5003 11.4Z"
        fill="currentColor"
      />
    </Svg>
  );
};

const ArchiveMinusBroken = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M14.5 10.6499H9.5"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M3.32031 10.01V19.94C3.32031 21.74 4.61031 22.5 6.19031 21.63L11.0703 18.92C11.5903 18.63 12.4303 18.63 12.9403 18.92L17.8203 21.63C19.4003 22.51 20.6903 21.75 20.6903 19.94V5.86C20.6903 3.74 18.9503 2 16.8303 2H7.18031C5.05031 2 3.32031 3.74 3.32031 5.86"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

const ArchiveMinusBulk = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M16.8203 2H7.18031C5.05031 2 3.32031 3.74 3.32031 5.86V19.95C3.32031 21.75 4.61031 22.51 6.19031 21.64L11.0703 18.93C11.5903 18.64 12.4303 18.64 12.9403 18.93L17.8203 21.64C19.4003 22.52 20.6903 21.76 20.6903 19.95V5.86C20.6803 3.74 18.9503 2 16.8203 2Z"
        fill="currentColor"
      />
      <Path
        d="M14.5 11.3999H9.5C9.09 11.3999 8.75 11.0599 8.75 10.6499C8.75 10.2399 9.09 9.8999 9.5 9.8999H14.5C14.91 9.8999 15.25 10.2399 15.25 10.6499C15.25 11.0599 14.91 11.3999 14.5 11.3999Z"
        fill="currentColor"
      />
    </Svg>
  );
};

const ArchiveMinusLinear = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M14.5 10.6499H9.5"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M16.8199 2H7.17995C5.04995 2 3.31995 3.74 3.31995 5.86V19.95C3.31995 21.75 4.60995 22.51 6.18995 21.64L11.0699 18.93C11.5899 18.64 12.4299 18.64 12.9399 18.93L17.8199 21.64C19.3999 22.52 20.6899 21.76 20.6899 19.95V5.86C20.6799 3.74 18.9499 2 16.8199 2Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

const ArchiveMinusOutline = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M14.5 11.3999H9.5C9.09 11.3999 8.75 11.0599 8.75 10.6499C8.75 10.2399 9.09 9.8999 9.5 9.8999H14.5C14.91 9.8999 15.25 10.2399 15.25 10.6499C15.25 11.0599 14.91 11.3999 14.5 11.3999Z"
        fill="currentColor"
      />
      <Path
        d="M4.92957 22.75C4.50957 22.75 4.11957 22.65 3.76957 22.45C2.99957 22 2.55957 21.09 2.55957 19.96V5.86C2.55957 3.32 4.62957 1.25 7.16957 1.25H16.8196C19.3596 1.25 21.4296 3.32 21.4296 5.86V19.95C21.4296 21.08 20.9896 21.99 20.2196 22.44C19.4496 22.89 18.4396 22.84 17.4496 22.29L12.5696 19.58C12.2796 19.42 11.7096 19.42 11.4196 19.58L6.53957 22.29C5.99957 22.59 5.44957 22.75 4.92957 22.75ZM7.17957 2.75C5.46957 2.75 4.06957 4.15 4.06957 5.86V19.95C4.06957 20.54 4.23957 20.98 4.53957 21.15C4.83957 21.33 5.30957 21.27 5.81957 20.98L10.6996 18.27C11.4396 17.86 12.5596 17.86 13.2996 18.27L18.1796 20.98C18.6896 21.27 19.1596 21.33 19.4596 21.15C19.7596 20.97 19.9296 20.53 19.9296 19.95V5.86C19.9296 4.15 18.5296 2.75 16.8196 2.75H7.17957Z"
        fill="currentColor"
      />
    </Svg>
  );
};

const ArchiveMinusTwotone = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M14.5 10.6499H9.5"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M16.8203 2H7.18031C5.05031 2 3.32031 3.74 3.32031 5.86V19.95C3.32031 21.75 4.61031 22.51 6.19031 21.64L11.0703 18.93C11.5903 18.64 12.4303 18.64 12.9403 18.93L17.8203 21.64C19.4003 22.52 20.6903 21.76 20.6903 19.95V5.86C20.6803 3.74 18.9503 2 16.8203 2Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

const variants: IconVariants = {
  bold: ArchiveMinusBold,
  broken: ArchiveMinusBroken,
  bulk: ArchiveMinusBulk,
  linear: ArchiveMinusLinear,
  outline: ArchiveMinusOutline,
  twotone: ArchiveMinusTwotone,
};

export const ArchiveMinusIcon = ({
  variant = iconDefaultOptions.variant,
  className,
  ...props
}: IconProps) => {
  const textClasses = useContext(TextClassContext);
  const Component = variants[variant];
  return <Component className={cn(textClasses, className)} {...props} />;
};
