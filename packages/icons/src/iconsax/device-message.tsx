import { useContext } from "react";
import { cn } from "unative/lib/utils";
import { G, Path, Svg } from "unative/ui/svg";
import { TextClassContext } from "unative/ui/text";

import type { IconProps, IconVariants } from "../icon-options";
import { defaultOptions } from "../icon-options";

const DeviceMessageBold = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M18.75 13.9H16.9038C16.7057 13.9 16.5121 13.9588 16.3476 14.069L14.09 15.58C13.73 15.82 13.31 15.93 12.9 15.93C12.55 15.93 12.2 15.85 11.88 15.67C11.3982 15.4153 11.0443 14.9475 10.8705 14.423C10.7313 14.0029 10.4537 13.6136 10.0537 13.4244C9.59444 13.2073 9.18043 12.9204 8.83 12.57C7.97 11.71 7.5 10.5 7.5 9.15V5.25V5C7.5 4.44772 7.05228 4 6.5 4C3.8 4 2 5.35 2 8.5V13.9C2 17.05 3.8 18.4 6.5 18.4H10.25V21.25H7.4C6.99 21.25 6.65 21.59 6.65 22C6.65 22.41 6.99 22.75 7.4 22.75H14.6C15.01 22.75 15.35 22.41 15.35 22C15.35 21.59 15.01 21.25 14.6 21.25H11.75V18.4H15.5C17.8954 18.4 19.5824 17.3374 19.9326 14.898C20.011 14.3513 19.5523 13.9 19 13.9H18.75Z"
        fill="currentColor"
      />
      <Path
        d="M18.75 2H12.25C10.76 2 9.64 2.76 9.2 4C9.07 4.38 9 4.8 9 5.25V9.15C9 10.12 9.32 10.94 9.89 11.51C10.46 12.08 11.28 12.4 12.25 12.4V13.79C12.25 14.3 12.83 14.61 13.26 14.33L16.15 12.4H18.75C19.2 12.4 19.62 12.33 20 12.2C21.24 11.76 22 10.64 22 9.15V5.25C22 3.3 20.7 2 18.75 2ZM12.62 8C12.2 8 11.87 7.66 11.87 7.25C11.87 6.84 12.2 6.5 12.62 6.5C13.04 6.5 13.37 6.84 13.37 7.25C13.37 7.66 13.04 8 12.62 8ZM15.44 8C15.02 8 14.69 7.66 14.69 7.25C14.69 6.84 15.03 6.5 15.44 6.5C15.85 6.5 16.19 6.84 16.19 7.25C16.19 7.66 15.85 8 15.44 8ZM18.25 8C17.83 8 17.5 7.66 17.5 7.25C17.5 6.84 17.84 6.5 18.25 6.5C18.66 6.5 19 6.84 19 7.25C19 7.66 18.66 8 18.25 8Z"
        fill="currentColor"
      />
      <Path
        d="M22 5.25V9.15C22 10.64 21.24 11.76 20 12.2C19.62 12.33 19.2 12.4 18.75 12.4H16.15L13.26 14.33C12.83 14.61 12.25 14.3 12.25 13.79V12.4C11.28 12.4 10.46 12.08 9.89 11.51C9.32 10.94 9 10.12 9 9.15V5.25C9 4.8 9.07 4.38 9.2 4C9.64 2.76 10.76 2 12.25 2H18.75C20.7 2 22 3.3 22 5.25Z"
        fill="currentColor"
      />
    </Svg>
  );
};

const DeviceMessageBroken = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M2 8.5C2 5.35 3.8 4 6.5 4H9.2C9.07 4.38 9 4.8 9 5.25V9.15002C9 10.12 9.32 10.94 9.89 11.51C10.46 12.08 11.28 12.4 12.25 12.4V13.79C12.25 14.3 12.83 14.61 13.26 14.33L16.15 12.4H18.75C19.2 12.4 19.62 12.33 20 12.2V13.9C20 17.05 18.2 18.4 15.5 18.4H6.5C3.8 18.4 2 17.05 2 13.9V12.4"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M22 9.15002C22 10.64 21.24 11.76 20 12.2C19.62 12.33 19.2 12.4 18.75 12.4H16.15L13.26 14.33C12.83 14.61 12.25 14.3 12.25 13.79V12.4C11.28 12.4 10.46 12.08 9.89 11.51C9.32 10.94 9 10.12 9 9.15002V5.25C9 4.8 9.07 4.38 9.2 4C9.64 2.76 10.76 2 12.25 2H18.75C20.7 2 22 3.3 22 5.25"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M7.40039 22H14.6004"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M11 18.3999V21.9999"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M18.4955 7.25H18.5045"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M15.6947 7.25H15.7037"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M12.8959 7.25H12.9049"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

const DeviceMessageBulk = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M20 12.2V13.9C20 17.05 18.2 18.4 15.5 18.4H6.5C3.8 18.4 2 17.05 2 13.9V8.5C2 5.35 3.8 4 6.5 4H9.2C9.07 4.38 9 4.8 9 5.25V9.15002C9 10.12 9.32 10.94 9.89 11.51C10.46 12.08 11.28 12.4 12.25 12.4V13.79C12.25 14.3 12.83 14.61 13.26 14.33L16.15 12.4H18.75C19.2 12.4 19.62 12.33 20 12.2Z"
        fill="currentColor"
      />
      <Path
        opacity="0.4"
        d="M22 5.25V9.15002C22 10.64 21.24 11.76 20 12.2C19.62 12.33 19.2 12.4 18.75 12.4H16.15L13.26 14.33C12.83 14.61 12.25 14.3 12.25 13.79V12.4C11.28 12.4 10.46 12.08 9.89 11.51C9.32 10.94 9 10.12 9 9.15002V5.25C9 4.8 9.07 4.38 9.2 4C9.64 2.76 10.76 2 12.25 2H18.75C20.7 2 22 3.3 22 5.25Z"
        fill="currentColor"
      />
      <Path
        opacity="0.4"
        d="M14.6004 21.2499H11.7504V18.3999C11.7504 17.9899 11.4104 17.6499 11.0004 17.6499C10.5904 17.6499 10.2504 17.9899 10.2504 18.3999V21.2499H7.40039C6.99039 21.2499 6.65039 21.5899 6.65039 21.9999C6.65039 22.4099 6.99039 22.7499 7.40039 22.7499H14.6004C15.0104 22.7499 15.3504 22.4099 15.3504 21.9999C15.3504 21.5899 15.0104 21.2499 14.6004 21.2499Z"
        fill="currentColor"
      />
      <Path
        d="M15.4395 8C15.0195 8 14.6895 7.66 14.6895 7.25C14.6895 6.84 15.0295 6.5 15.4395 6.5C15.8495 6.5 16.1895 6.84 16.1895 7.25C16.1895 7.66 15.8495 8 15.4395 8Z"
        fill="currentColor"
      />
      <Path
        d="M18.25 8C17.83 8 17.5 7.66 17.5 7.25C17.5 6.84 17.84 6.5 18.25 6.5C18.66 6.5 19 6.84 19 7.25C19 7.66 18.66 8 18.25 8Z"
        fill="currentColor"
      />
      <Path
        d="M12.6191 8C12.1991 8 11.8691 7.66 11.8691 7.25C11.8691 6.84 12.2091 6.5 12.6191 6.5C13.0291 6.5 13.3691 6.84 13.3691 7.25C13.3691 7.66 13.0391 8 12.6191 8Z"
        fill="currentColor"
      />
    </Svg>
  );
};

const DeviceMessageLinear = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M20 12.2V13.9C20 17.05 18.2 18.4 15.5 18.4H6.5C3.8 18.4 2 17.05 2 13.9V8.5C2 5.35 3.8 4 6.5 4H9.2C9.07 4.38 9 4.8 9 5.25V9.15002C9 10.12 9.32 10.94 9.89 11.51C10.46 12.08 11.28 12.4 12.25 12.4V13.79C12.25 14.3 12.83 14.61 13.26 14.33L16.15 12.4H18.75C19.2 12.4 19.62 12.33 20 12.2Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M22 5.25V9.15002C22 10.64 21.24 11.76 20 12.2C19.62 12.33 19.2 12.4 18.75 12.4H16.15L13.26 14.33C12.83 14.61 12.25 14.3 12.25 13.79V12.4C11.28 12.4 10.46 12.08 9.89 11.51C9.32 10.94 9 10.12 9 9.15002V5.25C9 4.8 9.07 4.38 9.2 4C9.64 2.76 10.76 2 12.25 2H18.75C20.7 2 22 3.3 22 5.25Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M7.40002 22H14.6"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M11 18.3999V21.9999"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M18.4955 7.25H18.5045"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M15.6957 7.25H15.7047"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M12.8954 7.25H12.9044"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

const DeviceMessageOutline = ({
  size = 24,
  className,
  ...props
}: IconProps) => {
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
        d="M15.5 19.15H6.5C3.16 19.15 1.25 17.24 1.25 13.9V8.5C1.25 5.16 3.16 3.25 6.5 3.25H9.2C9.44 3.25 9.67 3.37006 9.81 3.56006C9.95 3.75006 9.99 4.00999 9.91 4.23999C9.8 4.54999 9.75 4.89 9.75 5.25V9.15002C9.75 9.91002 9.98 10.54 10.42 10.98C10.86 11.42 11.49 11.65 12.25 11.65C12.66 11.65 13 11.99 13 12.4V13.6L15.73 11.77C15.85 11.69 16 11.64 16.15 11.64H18.75C19.11 11.64 19.45 11.59 19.76 11.48C19.99 11.4 20.24 11.44 20.44 11.58C20.64 11.72 20.75 11.9499 20.75 12.1899V13.89C20.75 17.24 18.84 19.15 15.5 19.15ZM6.5 4.75C3.98 4.75 2.75 5.98 2.75 8.5V13.9C2.75 16.42 3.98 17.65 6.5 17.65H15.5C18.02 17.65 19.25 16.42 19.25 13.9V13.12C19.09 13.14 18.92 13.15 18.75 13.15H16.38L13.68 14.95C13.24 15.23 12.69 15.26 12.24 15.01C11.79 14.77 11.51 14.3 11.51 13.79V13.09C10.67 12.96 9.93 12.59 9.37 12.04C8.66 11.33 8.26 10.3 8.26 9.15002V5.25C8.26 5.08 8.27 4.91 8.28 4.75H6.5Z"
        fill="currentColor"
      />
      <Path
        d="M12.9 15.1801C12.67 15.1801 12.44 15.12 12.23 15.01C11.78 14.77 11.5 14.3 11.5 13.79V13.09C10.66 12.96 9.92 12.59 9.36 12.04C8.65 11.33 8.25 10.3 8.25 9.15002V5.25C8.25 4.72 8.33 4.22001 8.49 3.76001C9.05 2.19001 10.45 1.25 12.25 1.25H18.75C21.1 1.25 22.75 2.89 22.75 5.25V9.15002C22.75 10.95 21.82 12.35 20.25 12.91C19.77 13.07 19.27 13.15 18.75 13.15H16.38L13.68 14.95C13.44 15.11 13.17 15.1801 12.9 15.1801ZM12.25 2.75C11.1 2.75 10.25 3.3 9.91 4.25C9.81 4.55 9.75 4.89 9.75 5.25V9.15002C9.75 9.91002 9.98 10.54 10.42 10.98C10.86 11.42 11.49 11.65 12.25 11.65C12.66 11.65 13 11.99 13 12.4V13.6L15.73 11.77C15.85 11.69 16 11.64 16.15 11.64H18.75C19.11 11.64 19.45 11.59 19.76 11.48C20.71 11.14 21.25 10.29 21.25 9.14001V5.23999C21.25 3.69999 20.29 2.73999 18.75 2.73999H12.25V2.75Z"
        fill="currentColor"
      />
      <Path
        d="M14.6004 22.75H7.40039C6.99039 22.75 6.65039 22.41 6.65039 22C6.65039 21.59 6.99039 21.25 7.40039 21.25H14.6004C15.0104 21.25 15.3504 21.59 15.3504 22C15.3504 22.41 15.0104 22.75 14.6004 22.75Z"
        fill="currentColor"
      />
      <Path
        d="M11 22.7499C10.59 22.7499 10.25 22.4099 10.25 21.9999V18.3999C10.25 17.9899 10.59 17.6499 11 17.6499C11.41 17.6499 11.75 17.9899 11.75 18.3999V21.9999C11.75 22.4099 11.41 22.7499 11 22.7499Z"
        fill="currentColor"
      />
      <Path
        d="M15.4395 8C15.0195 8 14.6895 7.66 14.6895 7.25C14.6895 6.84 15.0295 6.5 15.4395 6.5C15.8495 6.5 16.1895 6.84 16.1895 7.25C16.1895 7.66 15.8495 8 15.4395 8Z"
        fill="currentColor"
      />
      <Path
        d="M18.25 8C17.83 8 17.5 7.66 17.5 7.25C17.5 6.84 17.84 6.5 18.25 6.5C18.66 6.5 19 6.84 19 7.25C19 7.66 18.66 8 18.25 8Z"
        fill="currentColor"
      />
      <Path
        d="M12.6211 8C12.2011 8 11.8711 7.66 11.8711 7.25C11.8711 6.84 12.2111 6.5 12.6211 6.5C13.0311 6.5 13.3711 6.84 13.3711 7.25C13.3711 7.66 13.0411 8 12.6211 8Z"
        fill="currentColor"
      />
    </Svg>
  );
};

const DeviceMessageTwotone = ({
  size = 24,
  className,
  ...props
}: IconProps) => {
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
        d="M22 5.25V9.15002C22 10.64 21.24 11.76 20 12.2C19.62 12.33 19.2 12.4 18.75 12.4H16.15L13.26 14.33C12.83 14.61 12.25 14.3 12.25 13.79V12.4C11.28 12.4 10.46 12.08 9.89 11.51C9.32 10.94 9 10.12 9 9.15002V5.25C9 4.8 9.07 4.38 9.2 4C9.64 2.76 10.76 2 12.25 2H18.75C20.7 2 22 3.3 22 5.25Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <G opacity="0.4">
        <Path
          d="M20 12.2V13.9C20 17.05 18.2 18.4 15.5 18.4H6.5C3.8 18.4 2 17.05 2 13.9V8.5C2 5.35 3.8 4 6.5 4H9.2C9.07 4.38 9 4.8 9 5.25V9.15002C9 10.12 9.32 10.94 9.89 11.51C10.46 12.08 11.28 12.4 12.25 12.4V13.79C12.25 14.3 12.83 14.61 13.26 14.33L16.15 12.4H18.75C19.2 12.4 19.62 12.33 20 12.2Z"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeMiterlimit="10"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <Path
          d="M7.40039 22H14.6004"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeMiterlimit="10"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <Path
          d="M11 18.3999V21.9999"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeMiterlimit="10"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </G>
      <Path
        d="M18.4955 7.25H18.5045"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M15.6947 7.25H15.7037"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M12.8959 7.25H12.9049"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

const variants: IconVariants = {
  bold: DeviceMessageBold,
  broken: DeviceMessageBroken,
  bulk: DeviceMessageBulk,
  linear: DeviceMessageLinear,
  outline: DeviceMessageOutline,
  twotone: DeviceMessageTwotone,
};

export const DeviceMessageIcon = ({
  variant = defaultOptions.variant,
  className,
  ...props
}: IconProps) => {
  const textClasses = useContext(TextClassContext);
  const Component = variants[variant];
  return <Component className={cn(textClasses, className)} {...props} />;
};

export default DeviceMessageIcon;
