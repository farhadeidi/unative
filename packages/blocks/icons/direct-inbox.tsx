import { useContext } from "react";
import { G, Path, Svg } from "unative/lib/svg";
import { cn } from "unative/lib/utils";
import { TextClassContext } from "unative/ui/text";

import { iconDefaultOptions } from "../icons-configuration";
import type { IconProps, IconVariants } from "../types/icons-type";

const DirectInboxBold = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M21.3 12.2305H17.82C16.84 12.2305 15.97 12.7705 15.53 13.6505L14.69 15.3105C14.49 15.7105 14.09 15.9605 13.65 15.9605H10.37C10.06 15.9605 9.62 15.8905 9.33 15.3105L8.49 13.6605C8.05 12.7905 7.17 12.2405 6.2 12.2405H2.7C2.31 12.2405 2 12.5505 2 12.9405V16.2005C2 19.8305 4.18 22.0005 7.82 22.0005H16.2C19.63 22.0005 21.74 20.1205 22 16.7805V12.9305C22 12.5505 21.69 12.2305 21.3 12.2305Z"
        fill="currentColor"
      />
      <Path
        d="M12.75 2C12.75 1.59 12.41 1.25 12 1.25C11.59 1.25 11.25 1.59 11.25 2V4H12.75V2Z"
        fill="currentColor"
      />
      <Path
        d="M22 9.81V10.85C21.78 10.77 21.54 10.73 21.3 10.73H17.82C16.27 10.73 14.88 11.59 14.19 12.97L13.44 14.45H10.58L9.83 12.98C9.14 11.59 7.75 10.73 6.2 10.73H2.7C2.46 10.73 2.22 10.77 2 10.85V9.81C2 6.17 4.17 4 7.81 4H11.25V7.19L10.53 6.47C10.24 6.18 9.76 6.18 9.47 6.47C9.18 6.76 9.18 7.24 9.47 7.53L11.47 9.53C11.48 9.54 11.49 9.54 11.49 9.55C11.56 9.61 11.63 9.66 11.71 9.69C11.81 9.73 11.9 9.75 12 9.75C12.1 9.75 12.19 9.73 12.28 9.69C12.37 9.66 12.46 9.6 12.53 9.53L14.53 7.53C14.82 7.24 14.82 6.76 14.53 6.47C14.24 6.18 13.76 6.18 13.47 6.47L12.75 7.19V4H16.19C19.83 4 22 6.17 22 9.81Z"
        fill="currentColor"
      />
    </Svg>
  );
};

const DirectInboxBroken = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M12 2V9L14 7"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M12 9L10 7"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M1.98047 13H6.39047C6.77047 13 7.11047 13.21 7.28047 13.55L8.45047 15.89C8.79047 16.57 9.48047 17 10.2405 17H13.7705C14.5305 17 15.2205 16.57 15.5605 15.89L16.7305 13.55C16.9005 13.21 17.2505 13 17.6205 13H21.9805"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M2.68945 18.9999C3.64945 21.0999 5.64945 21.9999 8.99945 21.9999H14.9995C19.9995 21.9999 21.9995 19.9999 21.9995 14.9999V10.9999C21.9995 6.72988 20.5395 4.64988 16.9995 4.12988"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M7 4.12988C3.46 4.64988 2 6.72988 2 10.9999V14.9999"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

const DirectInboxBulk = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M16.19 4H7.81C4.17 4 2 6.17 2 9.81V16.18C2 19.83 4.17 22 7.81 22H16.18C19.82 22 21.99 19.83 21.99 16.19V9.81C22 6.17 19.83 4 16.19 4Z"
        fill="currentColor"
      />
      <Path
        d="M21.3 12.23H17.82C16.84 12.23 15.97 12.77 15.53 13.65L14.69 15.31C14.49 15.71 14.09 15.96 13.65 15.96H10.37C10.06 15.96 9.62 15.89 9.33 15.31L8.49 13.66C8.05 12.79 7.17 12.24 6.2 12.24H2.7C2.31 12.24 2 12.55 2 12.94V16.2C2 19.83 4.18 22 7.82 22H16.2C19.63 22 21.74 20.12 22 16.78V12.93C22 12.55 21.69 12.23 21.3 12.23Z"
        fill="currentColor"
      />
      <Path
        d="M14.5295 6.47C14.2395 6.18 13.7595 6.18 13.4695 6.47L12.7495 7.19V2C12.7495 1.59 12.4095 1.25 11.9995 1.25C11.5895 1.25 11.2495 1.59 11.2495 2V7.19L10.5295 6.47C10.2395 6.18 9.75945 6.18 9.46945 6.47C9.17945 6.76 9.17945 7.24 9.46945 7.53L11.4695 9.53C11.4795 9.54 11.4895 9.54 11.4895 9.55C11.5495 9.61 11.6295 9.66 11.7095 9.7C11.8095 9.73 11.8995 9.75 11.9995 9.75C12.0995 9.75 12.1895 9.73 12.2795 9.69C12.3695 9.65 12.4495 9.6 12.5295 9.53L14.5295 7.53C14.8195 7.24 14.8195 6.76 14.5295 6.47Z"
        fill="currentColor"
      />
    </Svg>
  );
};

const DirectInboxLinear = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M12 2V9L14 7"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M12 9L10 7"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M1.97998 13H6.38998C6.76998 13 7.10998 13.21 7.27998 13.55L8.44998 15.89C8.78998 16.57 9.47998 17 10.24 17H13.77C14.53 17 15.22 16.57 15.56 15.89L16.73 13.55C16.9 13.21 17.25 13 17.62 13H21.98"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M7 4.12988C3.46 4.64988 2 6.72988 2 10.9999V14.9999C2 19.9999 4 21.9999 9 21.9999H15C20 21.9999 22 19.9999 22 14.9999V10.9999C22 6.72988 20.54 4.64988 17 4.12988"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

const DirectInboxOutline = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M12 9.75C11.9 9.75 11.81 9.73 11.71 9.69C11.43 9.58 11.25 9.3 11.25 9V2C11.25 1.59 11.59 1.25 12 1.25C12.41 1.25 12.75 1.59 12.75 2V7.19L13.47 6.47C13.76 6.18 14.24 6.18 14.53 6.47C14.82 6.76 14.82 7.24 14.53 7.53L12.53 9.53C12.39 9.67 12.2 9.75 12 9.75Z"
        fill="currentColor"
      />
      <Path
        d="M11.9995 9.74994C11.8095 9.74994 11.6195 9.67994 11.4695 9.52994L9.46945 7.52994C9.17945 7.23994 9.17945 6.75994 9.46945 6.46994C9.75945 6.17994 10.2395 6.17994 10.5295 6.46994L12.5295 8.46994C12.8195 8.75994 12.8195 9.23994 12.5295 9.52994C12.3795 9.67994 12.1895 9.74994 11.9995 9.74994Z"
        fill="currentColor"
      />
      <Path
        d="M13.7605 17.75H10.2305C9.18047 17.75 8.24047 17.17 7.77047 16.23L6.60047 13.89C6.56047 13.8 6.47047 13.75 6.38047 13.75H1.98047C1.57047 13.75 1.23047 13.41 1.23047 13C1.23047 12.59 1.57047 12.25 1.98047 12.25H6.39047C7.06047 12.25 7.66047 12.62 7.96047 13.22L9.13047 15.56C9.34047 15.99 9.77047 16.25 10.2505 16.25H13.7805C14.2605 16.25 14.6905 15.99 14.9005 15.56L16.0705 13.22C16.3705 12.62 16.9705 12.25 17.6405 12.25H22.0005C22.4105 12.25 22.7505 12.59 22.7505 13C22.7505 13.41 22.4105 13.75 22.0005 13.75H17.6405C17.5405 13.75 17.4605 13.8 17.4205 13.89L16.2505 16.23C15.7505 17.17 14.8105 17.75 13.7605 17.75Z"
        fill="currentColor"
      />
      <Path
        d="M15 22.7499H9C3.57 22.7499 1.25 20.4299 1.25 14.9999V10.9999C1.25 6.30993 2.99 3.95993 6.89 3.38993C7.31 3.32993 7.68 3.60993 7.74 4.01993C7.8 4.42993 7.52 4.80993 7.11 4.86993C3.97 5.32993 2.75 7.04993 2.75 10.9999V14.9999C2.75 19.6099 4.39 21.2499 9 21.2499H15C19.61 21.2499 21.25 19.6099 21.25 14.9999V10.9999C21.25 7.04993 20.03 5.32993 16.89 4.86993C16.48 4.80993 16.2 4.42993 16.26 4.01993C16.32 3.60993 16.7 3.32993 17.11 3.38993C21.01 3.95993 22.75 6.30993 22.75 10.9999V14.9999C22.75 20.4299 20.43 22.7499 15 22.7499Z"
        fill="currentColor"
      />
    </Svg>
  );
};

const DirectInboxTwotone = ({ size = 24, className, ...props }: IconProps) => {
  return (
    <Svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      className={cn("text-foreground", className)}
      {...props}
    >
      <G opacity="0.4">
        <Path
          d="M12 2V9L14 7"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <Path
          d="M12 9L10 7"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </G>
      <Path
        opacity="0.4"
        d="M1.98047 13H6.39047C6.77047 13 7.11047 13.21 7.28047 13.55L8.45047 15.89C8.79047 16.57 9.48047 17 10.2405 17H13.7705C14.5305 17 15.2205 16.57 15.5605 15.89L16.7305 13.55C16.9005 13.21 17.2505 13 17.6205 13H21.9805"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M7 4.12988C3.46 4.64988 2 6.72988 2 10.9999V14.9999C2 19.9999 4 21.9999 9 21.9999H15C20 21.9999 22 19.9999 22 14.9999V10.9999C22 6.72988 20.54 4.64988 17 4.12988"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

const variants: IconVariants = {
  bold: DirectInboxBold,
  broken: DirectInboxBroken,
  bulk: DirectInboxBulk,
  linear: DirectInboxLinear,
  outline: DirectInboxOutline,
  twotone: DirectInboxTwotone,
};

export const DirectInboxIcon = ({
  variant = iconDefaultOptions.variant,
  className,
  ...props
}: IconProps) => {
  const textClasses = useContext(TextClassContext);
  const Component = variants[variant];
  return <Component className={cn(textClasses, className)} {...props} />;
};
