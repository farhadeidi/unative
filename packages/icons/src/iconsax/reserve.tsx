import { useContext } from "react";
import { cn } from "unative/lib/utils";
import { Path, Svg } from "unative/ui/svg";
import { TextClassContext } from "unative/ui/text";

import type { IconProps, IconVariants } from "../icon-options";
import { defaultOptions } from "../icon-options";

const ReserveBold = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M21.9707 18V19C21.9707 20.65 21.9707 22 18.9707 22H4.9707C1.9707 22 1.9707 20.65 1.9707 19V18C1.9707 17.45 2.4207 17 2.9707 17H20.9707C21.5207 17 21.9707 17.45 21.9707 18Z"
        fill="currentColor"
      />
      <Path
        d="M14.4095 5.17977C14.4595 4.97977 14.4895 4.78977 14.4995 4.57977C14.5295 3.41977 13.8195 2.39977 12.6995 2.09977C11.0195 1.63977 9.49953 2.89977 9.49953 4.49977C9.49953 4.73977 9.52953 4.95977 9.58953 5.17977C5.97953 5.94977 3.26953 9.15977 3.26953 12.9998V14.4998C3.26953 15.0498 3.71953 15.4998 4.26953 15.4998H19.7195C20.2695 15.4998 20.7195 15.0498 20.7195 14.4998V12.9998C20.7195 9.15977 18.0195 5.95977 14.4095 5.17977ZM14.9995 11.7498H8.99953C8.58953 11.7498 8.24953 11.4098 8.24953 10.9998C8.24953 10.5898 8.58953 10.2498 8.99953 10.2498H14.9995C15.4095 10.2498 15.7495 10.5898 15.7495 10.9998C15.7495 11.4098 15.4095 11.7498 14.9995 11.7498Z"
        fill="currentColor"
      />
    </Svg>
  );
};

const ReserveBroken = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M18.9707 22H4.9707C1.9707 22 1.9707 20.65 1.9707 19V18C1.9707 17.45 2.4207 17 2.9707 17H20.9707C21.5207 17 21.9707 17.45 21.9707 18V19C21.9707 20.65 21.9707 22 18.9707 22Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M4.61953 8.56C5.75953 6.86 7.52953 5.62 9.58953 5.18C10.1295 5.06 10.6895 5 11.2695 5H12.7195C13.2995 5 13.8695 5.06 14.4095 5.18C18.0195 5.96 20.7195 9.16 20.7195 13V17H3.26953V13"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M14.5 4.5C14.5 4.74 14.47 4.96 14.41 5.18C13.87 5.06 13.3 5 12.72 5H11.27C10.69 5 10.13 5.06 9.59 5.18C9.53 4.96 9.5 4.74 9.5 4.5C9.5 3.12 10.62 2 12 2C13.38 2 14.5 3.12 14.5 4.5Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M15 11H9"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

const ReserveBulk = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M21.9707 18V19C21.9707 20.65 21.9707 22 18.9707 22H4.9707C1.9707 22 1.9707 20.65 1.9707 19V18C1.9707 17.45 2.4207 17 2.9707 17H20.9707C21.5207 17 21.9707 17.45 21.9707 18Z"
        fill="currentColor"
      />
      <Path
        opacity="0.4"
        d="M20.7195 13V17H3.26953V13C3.26953 9.16 5.97953 5.95 9.58953 5.18C10.1295 5.06 10.6895 5 11.2695 5H12.7195C13.2995 5 13.8695 5.06 14.4095 5.18C18.0195 5.96 20.7195 9.16 20.7195 13Z"
        fill="currentColor"
      />
      <Path
        d="M14.5 4.5C14.5 4.74 14.47 4.96 14.41 5.18C13.87 5.06 13.3 5 12.72 5H11.27C10.69 5 10.13 5.06 9.59 5.18C9.53 4.96 9.5 4.74 9.5 4.5C9.5 3.12 10.62 2 12 2C13.38 2 14.5 3.12 14.5 4.5Z"
        fill="currentColor"
      />
      <Path
        d="M15 11.75H9C8.59 11.75 8.25 11.41 8.25 11C8.25 10.59 8.59 10.25 9 10.25H15C15.41 10.25 15.75 10.59 15.75 11C15.75 11.41 15.41 11.75 15 11.75Z"
        fill="currentColor"
      />
    </Svg>
  );
};

const ReserveLinear = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M18.97 22H4.96997C1.96997 22 1.96997 20.65 1.96997 19V18C1.96997 17.45 2.41997 17 2.96997 17H20.97C21.52 17 21.97 17.45 21.97 18V19C21.97 20.65 21.97 22 18.97 22Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M20.72 13V17H3.27002V13C3.27002 9.16 5.98002 5.95 9.59002 5.18C10.13 5.06 10.69 5 11.27 5H12.72C13.3 5 13.87 5.06 14.41 5.18C18.02 5.96 20.72 9.16 20.72 13Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M14.5 4.5C14.5 4.74 14.47 4.96 14.41 5.18C13.87 5.06 13.3 5 12.72 5H11.27C10.69 5 10.13 5.06 9.59 5.18C9.53 4.96 9.5 4.74 9.5 4.5C9.5 3.12 10.62 2 12 2C13.38 2 14.5 3.12 14.5 4.5Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M15 11H9"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

const ReserveOutline = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M18.9707 22.75H4.9707C1.2207 22.75 1.2207 20.67 1.2207 19V18C1.2207 17.04 2.0107 16.25 2.9707 16.25H20.9707C21.9307 16.25 22.7207 17.04 22.7207 18V19C22.7207 20.67 22.7207 22.75 18.9707 22.75ZM2.9707 17.75C2.8307 17.75 2.7207 17.86 2.7207 18V19C2.7207 20.64 2.7207 21.25 4.9707 21.25H18.9707C21.2207 21.25 21.2207 20.64 21.2207 19V18C21.2207 17.86 21.1107 17.75 20.9707 17.75H2.9707Z"
        fill="currentColor"
      />
      <Path
        d="M20.7195 17.75H3.26953C2.85953 17.75 2.51953 17.41 2.51953 17V13C2.51953 8.9 5.42953 5.3 9.42953 4.45C10.0195 4.32 10.6395 4.25 11.2695 4.25H12.7195C13.3595 4.25 13.9795 4.32 14.5695 4.45C18.5695 5.31 21.4695 8.91 21.4695 13V17C21.4695 17.41 21.1395 17.75 20.7195 17.75ZM4.01953 16.25H19.9695V13C19.9695 9.61 17.5695 6.63 14.2495 5.91C13.7595 5.8 13.2495 5.75 12.7195 5.75H11.2695C10.7495 5.75 10.2395 5.8 9.74953 5.91C6.42953 6.62 4.01953 9.6 4.01953 13V16.25Z"
        fill="currentColor"
      />
      <Path
        d="M9.59 5.93C9.26 5.93 8.96 5.71 8.87 5.38C8.79 5.09 8.75 4.8 8.75 4.5C8.75 2.71 10.21 1.25 12 1.25C13.79 1.25 15.25 2.71 15.25 4.5C15.25 4.8 15.21 5.09 15.13 5.38C15.03 5.76 14.65 6 14.25 5.91C13.76 5.8 13.25 5.75 12.72 5.75H11.27C10.75 5.75 10.24 5.8 9.75 5.91C9.7 5.92 9.65 5.93 9.59 5.93ZM11.27 4.25H12.72C13.06 4.25 13.41 4.27 13.74 4.31C13.65 3.43 12.9 2.75 12 2.75C11.1 2.75 10.36 3.43 10.26 4.31C10.6 4.27 10.93 4.25 11.27 4.25Z"
        fill="currentColor"
      />
      <Path
        d="M15 11.75H9C8.59 11.75 8.25 11.41 8.25 11C8.25 10.59 8.59 10.25 9 10.25H15C15.41 10.25 15.75 10.59 15.75 11C15.75 11.41 15.41 11.75 15 11.75Z"
        fill="currentColor"
      />
    </Svg>
  );
};

const ReserveTwotone = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M18.9707 22H4.9707C1.9707 22 1.9707 20.65 1.9707 19V18C1.9707 17.45 2.4207 17 2.9707 17H20.9707C21.5207 17 21.9707 17.45 21.9707 18V19C21.9707 20.65 21.9707 22 18.9707 22Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M20.7195 13V17H3.26953V13C3.26953 9.16 5.97953 5.95 9.58953 5.18C10.1295 5.06 10.6895 5 11.2695 5H12.7195C13.2995 5 13.8695 5.06 14.4095 5.18C18.0195 5.96 20.7195 9.16 20.7195 13Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        opacity="0.34"
        d="M14.5 4.5C14.5 4.74 14.47 4.96 14.41 5.18C13.87 5.06 13.3 5 12.72 5H11.27C10.69 5 10.13 5.06 9.59 5.18C9.53 4.96 9.5 4.74 9.5 4.5C9.5 3.12 10.62 2 12 2C13.38 2 14.5 3.12 14.5 4.5Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        opacity="0.34"
        d="M15 11H9"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

const variants: IconVariants = {
  bold: ReserveBold,
  broken: ReserveBroken,
  bulk: ReserveBulk,
  linear: ReserveLinear,
  outline: ReserveOutline,
  twotone: ReserveTwotone,
};

export const ReserveIcon = ({
  variant = defaultOptions.variant,
  className,
  ...props
}: IconProps) => {
  const textClasses = useContext(TextClassContext);
  const Component = variants[variant];
  return <Component className={cn(textClasses, className)} {...props} />;
};

export default ReserveIcon;
