import { useContext } from "react";
import { Path, Svg } from "unative/lib/svg";
import { cn } from "unative/lib/utils";
import { TextClassContext } from "unative/ui/text";

import { iconDefaultOptions } from "../icons-configuration";
import type { IconProps, IconVariants } from "../types/icons-type";

const AirpodsBold = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M7.67 2H5.78C4.74 2 3.8 2.42 3.11 3.11C2.42 3.8 2 4.74 2 5.78C2 7.86 3.7 9.56 5.78 9.56H6.72V17.11C6.72 17.84 7.14 18.47 7.75 18.78C8 18.92 8.3 19 8.61 19C8.83 19 9.05 18.96 9.25 18.88C9.98 18.62 10.5 17.93 10.5 17.11V4.83C10.5 3.28 9.22 2 7.67 2ZM5.78 5.97C6.19 5.97 6.53 6.31 6.53 6.72C6.53 7.13 6.19 7.47 5.78 7.47C4.85 7.47 4.09 6.71 4.09 5.77C4.09 4.83 4.85 4.08 5.78 4.08C6.19 4.08 6.53 4.42 6.53 4.83C6.53 5.24 6.19 5.58 5.78 5.58C5.67 5.58 5.59 5.67 5.59 5.77C5.59 5.87 5.67 5.97 5.78 5.97Z"
        fill="currentColor"
      />
      <Path
        d="M20.89 3.11C20.2 2.42 19.26 2 18.22 2H16.33C14.77 2 13.5 3.28 13.5 4.83V17.11C13.5 17.93 14.02 18.62 14.75 18.88C14.95 18.96 15.17 19 15.39 19C15.7 19 16 18.92 16.25 18.78C16.86 18.47 17.28 17.84 17.28 17.11V9.56H18.22C20.3 9.56 22 7.86 22 5.78C22 4.74 21.58 3.8 20.89 3.11ZM18.22 7.47C17.81 7.47 17.47 7.13 17.47 6.72C17.47 6.31 17.81 5.97 18.22 5.97C18.33 5.97 18.41 5.88 18.41 5.77C18.41 5.66 18.32 5.58 18.22 5.58C17.81 5.58 17.47 5.24 17.47 4.83C17.47 4.42 17.81 4.08 18.22 4.08C19.15 4.08 19.91 4.84 19.91 5.77C19.91 6.7 19.16 7.47 18.22 7.47Z"
        fill="currentColor"
      />
      <Path
        d="M9.25 18.8812V22.0012C9.25 22.4112 8.91 22.7512 8.5 22.7512C8.09 22.7512 7.75 22.4112 7.75 22.0012V18.7812C8 18.9213 8.3 19.0012 8.61 19.0012C8.83 19.0012 9.05 18.9612 9.25 18.8812Z"
        fill="currentColor"
      />
      <Path
        d="M16.25 18.7812V22.0012C16.25 22.4112 15.91 22.7512 15.5 22.7512C15.09 22.7512 14.75 22.4112 14.75 22.0012V18.8812C14.95 18.9612 15.17 19.0012 15.39 19.0012C15.7 19.0012 16 18.9213 16.25 18.7812Z"
        fill="currentColor"
      />
    </Svg>
  );
};

const AirpodsBroken = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M6.72 9.56H5.78C3.7 9.56 2 7.86003 2 5.78003C2 3.70003 3.7 2 5.78 2H7.67001C9.23001 2 10.5 3.28002 10.5 4.83002V7.39001V17.1C10.5 18.14 9.64999 18.99 8.60999 18.99C7.56999 18.99 6.72 18.14 6.72 17.1V9.56Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M5.77985 6.72003C5.25985 6.72003 4.83984 6.30009 4.83984 5.78009C4.83984 5.26009 5.25985 4.84009 5.77985 4.84009"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M17.28 13.52V9.56H18.22C20.3 9.56 22 7.86003 22 5.78003C22 3.70003 20.3 2 18.22 2H16.33C14.77 2 13.5 3.28002 13.5 4.83002V7.39001V17.1C13.5 18.14 14.35 18.99 15.39 18.99C16.43 18.99 17.28 18.14 17.28 17.1"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M18.2207 6.72003C18.7407 6.72003 19.1607 6.30009 19.1607 5.78009C19.1607 5.26009 18.7407 4.84009 18.2207 4.84009"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M8.5 22V19"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M15.5 22V19"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

const AirpodsBulk = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M10.5 4.83002V17.11C10.5 17.93 9.98 18.62 9.25 18.88C9.05 18.96 8.82999 19 8.60999 19C8.29999 19 8 18.92 7.75 18.78C7.14 18.47 6.72 17.84 6.72 17.11V9.56H5.78C3.7 9.56 2 7.86003 2 5.78003C2 4.74003 2.41999 3.79999 3.10999 3.10999C3.79999 2.41999 4.74 2 5.78 2H7.67001C9.22001 2 10.5 3.28002 10.5 4.83002Z"
        fill="currentColor"
      />
      <Path
        d="M5.77985 7.47003C4.84985 7.47003 4.08984 6.71008 4.08984 5.77008C4.08984 4.83008 4.84985 4.08008 5.77985 4.08008C6.18985 4.08008 6.52985 4.42008 6.52985 4.83008C6.52985 5.24008 6.18985 5.58008 5.77985 5.58008C5.66985 5.58008 5.58984 5.67008 5.58984 5.77008C5.58984 5.87008 5.67985 5.97003 5.77985 5.97003C6.18985 5.97003 6.52985 6.31003 6.52985 6.72003C6.52985 7.13003 6.18985 7.47003 5.77985 7.47003Z"
        fill="currentColor"
      />
      <Path
        opacity="0.4"
        d="M22 5.78003C22 7.86003 20.3 9.56 18.22 9.56H17.28V17.11C17.28 17.84 16.86 18.47 16.25 18.78C16 18.92 15.7 19 15.39 19C15.17 19 14.95 18.96 14.75 18.88C14.02 18.62 13.5 17.93 13.5 17.11V4.83002C13.5 3.28002 14.77 2 16.33 2H18.22C19.26 2 20.2 2.41999 20.89 3.10999C21.58 3.79999 22 4.74003 22 5.78003Z"
        fill="currentColor"
      />
      <Path
        d="M18.2207 7.47003C17.8107 7.47003 17.4707 7.13003 17.4707 6.72003C17.4707 6.31003 17.8107 5.97003 18.2207 5.97003C18.3307 5.97003 18.4107 5.88008 18.4107 5.77008C18.4107 5.66008 18.3207 5.58008 18.2207 5.58008C17.8107 5.58008 17.4707 5.24008 17.4707 4.83008C17.4707 4.42008 17.8107 4.08008 18.2207 4.08008C19.1507 4.08008 19.9107 4.84008 19.9107 5.77008C19.9107 6.70008 19.1607 7.47003 18.2207 7.47003Z"
        fill="currentColor"
      />
      <Path
        d="M9.25 18.88V22C9.25 22.41 8.91 22.75 8.5 22.75C8.09 22.75 7.75 22.41 7.75 22V18.78C8 18.92 8.29999 19 8.60999 19C8.82999 19 9.05 18.96 9.25 18.88Z"
        fill="currentColor"
      />
      <Path
        d="M16.25 18.78V22C16.25 22.41 15.91 22.75 15.5 22.75C15.09 22.75 14.75 22.41 14.75 22V18.88C14.95 18.96 15.17 19 15.39 19C15.7 19 16 18.92 16.25 18.78Z"
        fill="currentColor"
      />
    </Svg>
  );
};

const AirpodsLinear = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M6.72 9.56H5.78C3.7 9.56 2 7.86003 2 5.78003C2 3.70003 3.7 2 5.78 2H7.67001C9.23001 2 10.5 3.28002 10.5 4.83002V7.39001V17.1C10.5 18.14 9.64999 18.99 8.60999 18.99C7.56999 18.99 6.72 18.14 6.72 17.1V9.56Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M5.78009 6.72003C5.26009 6.72003 4.84009 6.30009 4.84009 5.78009C4.84009 5.26009 5.26009 4.84009 5.78009 4.84009"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M17.28 9.56H18.22C20.3 9.56 22 7.86003 22 5.78003C22 3.70003 20.3 2 18.22 2H16.33C14.77 2 13.5 3.28002 13.5 4.83002V7.39001V17.1C13.5 18.14 14.35 18.99 15.39 18.99C16.43 18.99 17.28 18.14 17.28 17.1V9.56Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M18.22 6.72003C18.74 6.72003 19.16 6.30009 19.16 5.78009C19.16 5.26009 18.74 4.84009 18.22 4.84009"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M8.5 22V19"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M15.5 22V19"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

const AirpodsOutline = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M8.61023 19.75C7.15023 19.75 5.97025 18.57 5.97025 17.11V10.3H5.77023C3.27023 10.3 1.24023 8.27002 1.24023 5.77002C1.24023 3.27002 3.27023 1.23999 5.77023 1.23999H7.66025C9.64025 1.23999 11.2402 2.85001 11.2402 4.82001V17.1C11.2502 18.57 10.0702 19.75 8.61023 19.75ZM5.78024 2.75C4.11024 2.75 2.75024 4.11003 2.75024 5.78003C2.75024 7.45003 4.11024 8.81 5.78024 8.81H6.73026C7.14025 8.81 7.48026 9.15 7.48026 9.56V17.12C7.48026 17.75 7.99024 18.26 8.62024 18.26C9.25024 18.26 9.76025 17.75 9.76025 17.12V4.84003C9.76025 3.69003 8.83024 2.76001 7.68024 2.76001H5.78024V2.75Z"
        fill="currentColor"
      />
      <Path
        d="M5.77985 7.47003C4.84985 7.47003 4.08984 6.71008 4.08984 5.77008C4.08984 4.83008 4.84985 4.08008 5.77985 4.08008C6.18985 4.08008 6.52985 4.42008 6.52985 4.83008C6.52985 5.24008 6.18985 5.58008 5.77985 5.58008C5.66985 5.58008 5.58984 5.67008 5.58984 5.77008C5.58984 5.87008 5.67985 5.97003 5.77985 5.97003C6.18985 5.97003 6.52985 6.31003 6.52985 6.72003C6.52985 7.13003 6.18985 7.47003 5.77985 7.47003Z"
        fill="currentColor"
      />
      <Path
        d="M15.39 19.75C13.93 19.75 12.75 18.57 12.75 17.11V4.83002C12.75 2.85002 14.36 1.25 16.33 1.25H18.22C20.72 1.25 22.75 3.28003 22.75 5.78003C22.75 8.28003 20.72 10.31 18.22 10.31H18.02V17.12C18.03 18.57 16.84 19.75 15.39 19.75ZM16.33 2.75C15.18 2.75 14.25 3.68002 14.25 4.83002V17.11C14.25 17.74 14.76 18.25 15.39 18.25C16.02 18.25 16.53 17.74 16.53 17.11V9.54999C16.53 9.13999 16.87 8.79999 17.28 8.79999H18.23C19.9 8.79999 21.26 7.44002 21.26 5.77002C21.26 4.10002 19.9 2.73999 18.23 2.73999H16.33V2.75Z"
        fill="currentColor"
      />
      <Path
        d="M18.2197 7.47003C17.8097 7.47003 17.4697 7.13003 17.4697 6.72003C17.4697 6.31003 17.8097 5.97003 18.2197 5.97003C18.3297 5.97003 18.4097 5.88008 18.4097 5.77008C18.4097 5.66008 18.3197 5.58008 18.2197 5.58008C17.8097 5.58008 17.4697 5.24008 17.4697 4.83008C17.4697 4.42008 17.8097 4.08008 18.2197 4.08008C19.1497 4.08008 19.9097 4.84008 19.9097 5.77008C19.9097 6.70008 19.1597 7.47003 18.2197 7.47003Z"
        fill="currentColor"
      />
      <Path
        d="M8.5 22.75C8.09 22.75 7.75 22.41 7.75 22V19C7.75 18.59 8.09 18.25 8.5 18.25C8.91 18.25 9.25 18.59 9.25 19V22C9.25 22.41 8.91 22.75 8.5 22.75Z"
        fill="currentColor"
      />
      <Path
        d="M15.5 22.75C15.09 22.75 14.75 22.41 14.75 22V19C14.75 18.59 15.09 18.25 15.5 18.25C15.91 18.25 16.25 18.59 16.25 19V22C16.25 22.41 15.91 22.75 15.5 22.75Z"
        fill="currentColor"
      />
    </Svg>
  );
};

const AirpodsTwotone = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M6.72 9.56H5.78C3.7 9.56 2 7.86003 2 5.78003C2 3.70003 3.7 2 5.78 2H7.67001C9.23001 2 10.5 3.28002 10.5 4.83002V7.39001V17.1C10.5 18.14 9.64999 18.99 8.60999 18.99C7.56999 18.99 6.72 18.14 6.72 17.1V9.56Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        opacity="0.4"
        d="M5.77985 6.71979C5.25985 6.71979 4.83984 6.29985 4.83984 5.77985C4.83984 5.25985 5.25985 4.83984 5.77985 4.83984"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M17.28 9.56H18.22C20.3 9.56 22 7.86003 22 5.78003C22 3.70003 20.3 2 18.22 2H16.33C14.77 2 13.5 3.28002 13.5 4.83002V7.39001V17.1C13.5 18.14 14.35 18.99 15.39 18.99C16.43 18.99 17.28 18.14 17.28 17.1V9.56Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        opacity="0.4"
        d="M18.2197 6.71979C18.7397 6.71979 19.1597 6.29985 19.1597 5.77985C19.1597 5.25985 18.7397 4.83984 18.2197 4.83984"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        opacity="0.4"
        d="M8.5 22V19"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        opacity="0.4"
        d="M15.5 22V19"
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
  bold: AirpodsBold,
  broken: AirpodsBroken,
  bulk: AirpodsBulk,
  linear: AirpodsLinear,
  outline: AirpodsOutline,
  twotone: AirpodsTwotone,
};

export const AirpodsIcon = ({
  variant = iconDefaultOptions.variant,
  className,
  ...props
}: IconProps) => {
  const textClasses = useContext(TextClassContext);
  const Component = variants[variant];
  return <Component className={cn(textClasses, className)} {...props} />;
};
