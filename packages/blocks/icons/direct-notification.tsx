import { Path, Svg } from "unative/lib/svg";
import { cn } from "unative/lib/utils";

import type { IconProps, IconVariants } from "../types/icons-type";

const DirectNotificationBold = ({
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
        d="M19 8C20.6569 8 22 6.65685 22 5C22 3.34315 20.6569 2 19 2C17.3431 2 16 3.34315 16 5C16 6.65685 17.3431 8 19 8Z"
        fill="currentColor"
      />
      <Path
        d="M20.34 12.7209H17.03C16.1 12.7209 15.27 13.2409 14.85 14.0609L14.05 15.6409C13.86 16.0209 13.48 16.2509 13.06 16.2509H9.95C9.66 16.2509 9.23 16.1909 8.96 15.6309L8.17 14.0609C7.75 13.2309 6.92 12.7109 5.99 12.7109H2.66C2.3 12.7209 2 13.0209 2 13.3809V16.4709C2 19.9409 4.07 22.0009 7.53 22.0009H15.49C18.75 22.0009 20.76 20.2109 21 17.0409V13.3809C21 13.0209 20.7 12.7209 20.34 12.7209Z"
        fill="currentColor"
      />
      <Path
        d="M21 10.4V11.33C20.79 11.26 20.57 11.22 20.34 11.22H17.03C15.53 11.22 14.18 12.05 13.52 13.39L12.82 14.76H10.19L9.51 13.4C8.83 12.05 7.49 11.22 5.99 11.22H2.66C2.43 11.22 2.21 11.26 2 11.33V8.52C2 5.47 4.47 3 7.52 3H13.6C14.24 3 14.7 3.58 14.58 4.2C14.42 5 14.49 5.87 14.88 6.79C15.33 7.83 16.17 8.67 17.21 9.12C18.13 9.51 19 9.58 19.8 9.42C20.42 9.3 21 9.76 21 10.4Z"
        fill="currentColor"
      />
    </Svg>
  );
};

const DirectNotificationBroken = ({
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
        d="M1.98047 13.0002H5.77047C6.53047 13.0002 7.22047 13.4302 7.56047 14.1102L8.45047 15.9002C9.00047 17.0002 10.0005 17.0002 10.2405 17.0002H13.7705C14.5305 17.0002 15.2205 16.5702 15.5605 15.8902L16.4505 14.1002C16.7905 13.4202 17.4805 12.9902 18.2405 12.9902H21.9805"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M19 2C17.34 2 16 3.34 16 5C16 6.66 17.34 8 19 8C20.66 8 22 6.66 22 5C22 4.66 21.94 4.32 21.84 4.02"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M2.68945 19C3.64945 21.1 5.64945 22 8.99945 22H14.9995C19.9995 22 21.9995 20 21.9995 15V10"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M14 2H9C4 2 2 4 2 9V15"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

const DirectNotificationBulk = ({
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
        d="M19 8C20.6569 8 22 6.65685 22 5C22 3.34315 20.6569 2 19 2C17.3431 2 16 3.34315 16 5C16 6.65685 17.3431 8 19 8Z"
        fill="currentColor"
      />
      <Path
        d="M20.34 12.72H17.03C16.1 12.72 15.27 13.24 14.85 14.06L14.05 15.64C13.86 16.02 13.48 16.25 13.06 16.25H9.95C9.66 16.25 9.23 16.19 8.96 15.63L8.17 14.06C7.75 13.23 6.92 12.71 5.99 12.71H2.66C2.3 12.72 2 13.02 2 13.38V16.47C2 19.94 4.07 22 7.53 22H15.49C18.75 22 20.76 20.21 21 17.04V13.38C21 13.02 20.7 12.72 20.34 12.72Z"
        fill="currentColor"
      />
      <Path
        opacity="0.4"
        d="M19 9.5C16.52 9.5 14.5 7.48 14.5 5C14.5 4.28 14.69 3.61 14.99 3H7.52C4.07 3 2 5.06 2 8.52V16.47C2 19.94 4.07 22 7.52 22H15.47C18.93 22 20.99 19.94 20.99 16.48V9.01C20.39 9.31 19.72 9.5 19 9.5Z"
        fill="currentColor"
      />
    </Svg>
  );
};

const DirectNotificationLinear = ({
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
        d="M1.97998 13H5.76998C6.52998 13 7.21998 13.43 7.55998 14.11L8.44998 15.9C8.99998 17 9.99998 17 10.24 17H13.77C14.53 17 15.22 16.57 15.56 15.89L16.45 14.1C16.79 13.42 17.48 12.99 18.24 12.99H21.98"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M19 8C20.6569 8 22 6.65685 22 5C22 3.34315 20.6569 2 19 2C17.3431 2 16 3.34315 16 5C16 6.65685 17.3431 8 19 8Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M14 2H9C4 2 2 4 2 9V15C2 20 4 22 9 22H15C20 22 22 20 22 15V10"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

const DirectNotificationOutline = ({
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
        d="M13.7605 17.75H10.2305C9.13047 17.75 8.26047 17.21 7.77047 16.23L6.88047 14.44C6.67047 14.01 6.24047 13.75 5.76047 13.75H1.98047C1.57047 13.75 1.23047 13.41 1.23047 13C1.23047 12.59 1.57047 12.25 1.98047 12.25H5.77047C6.82047 12.25 7.76047 12.83 8.23047 13.77L9.12047 15.56C9.35047 16.02 9.72047 16.25 10.2405 16.25H13.7705C14.2505 16.25 14.6805 15.99 14.8905 15.56L15.7805 13.77C16.2505 12.83 17.1905 12.25 18.2405 12.25H21.9805C22.3905 12.25 22.7305 12.59 22.7305 13C22.7305 13.41 22.3905 13.75 21.9805 13.75H18.2405C17.7605 13.75 17.3305 14.01 17.1205 14.44L16.2305 16.23C15.7505 17.17 14.8105 17.75 13.7605 17.75Z"
        fill="currentColor"
      />
      <Path
        d="M19 8.75C16.93 8.75 15.25 7.07 15.25 5C15.25 2.93 16.93 1.25 19 1.25C21.07 1.25 22.75 2.93 22.75 5C22.75 7.07 21.07 8.75 19 8.75ZM19 2.75C17.76 2.75 16.75 3.76 16.75 5C16.75 6.24 17.76 7.25 19 7.25C20.24 7.25 21.25 6.24 21.25 5C21.25 3.76 20.24 2.75 19 2.75Z"
        fill="currentColor"
      />
      <Path
        d="M15 22.75H9C3.57 22.75 1.25 20.43 1.25 15V9C1.25 3.57 3.57 1.25 9 1.25H14C14.41 1.25 14.75 1.59 14.75 2C14.75 2.41 14.41 2.75 14 2.75H9C4.39 2.75 2.75 4.39 2.75 9V15C2.75 19.61 4.39 21.25 9 21.25H15C19.61 21.25 21.25 19.61 21.25 15V10C21.25 9.59 21.59 9.25 22 9.25C22.41 9.25 22.75 9.59 22.75 10V15C22.75 20.43 20.43 22.75 15 22.75Z"
        fill="currentColor"
      />
    </Svg>
  );
};

const DirectNotificationTwotone = ({
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
        opacity="0.4"
        d="M1.98047 13.0002H5.77047C6.53047 13.0002 7.22047 13.4302 7.56047 14.1102L8.45047 15.9002C9.00047 17.0002 10.0005 17.0002 10.2405 17.0002H13.7705C14.5305 17.0002 15.2205 16.5702 15.5605 15.8902L16.4505 14.1002C16.7905 13.4202 17.4805 12.9902 18.2405 12.9902H21.9805"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        opacity="0.4"
        d="M19 8C20.6569 8 22 6.65685 22 5C22 3.34315 20.6569 2 19 2C17.3431 2 16 3.34315 16 5C16 6.65685 17.3431 8 19 8Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M14 2H9C4 2 2 4 2 9V15C2 20 4 22 9 22H15C20 22 22 20 22 15V10"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

const variants: IconVariants = {
  bold: DirectNotificationBold,
  broken: DirectNotificationBroken,
  bulk: DirectNotificationBulk,
  linear: DirectNotificationLinear,
  outline: DirectNotificationOutline,
  twotone: DirectNotificationTwotone,
};

export const DirectNotificationIcon = ({
  variant = "linear",
  ...props
}: IconProps) => {
  const Component = variants[variant];
  return <Component {...props} />;
};
