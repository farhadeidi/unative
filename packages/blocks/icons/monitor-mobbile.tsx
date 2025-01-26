import { Path, Svg } from "unative/lib/svg";
import { cn } from "unative/lib/utils";

import type { IconProps, IconVariants } from "../types/icons-type";

const MonitorMobbileBold = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M20.99 9.71C20.65 9.57 20.2 9.5 19.64 9.5H14.36C12.62 9.5 12 10.12 12 11.88V19.62C12 20.2 12.07 20.65 12.22 21C12.53 21.72 13.19 22 14.36 22H19.64C21.38 22 22 21.37 22 19.62V11.88C22 10.69 21.72 10.02 20.99 9.71ZM18 19.75H16C15.98 19.75 15.95 19.75 15.93 19.74C15.78 19.73 15.65 19.68 15.54 19.58C15.36 19.45 15.25 19.24 15.25 19C15.25 18.59 15.59 18.25 16 18.25H18C18.41 18.25 18.75 18.59 18.75 19C18.75 19.41 18.41 19.75 18 19.75Z"
        fill="currentColor"
      />
      <Path
        d="M20.9898 6.19V7C20.9898 7.55 20.5398 8 19.9898 8H14.3598C11.7998 8 10.4998 9.31 10.4998 11.88V21C10.4998 21.55 10.0498 22 9.49977 22H7.54977C7.14977 22 6.82977 21.68 6.82977 21.29C6.82977 20.89 7.14977 20.58 7.54977 20.58H9.49977V16.75H5.99977C3.77977 16.64 2.00977 14.81 2.00977 12.56V6.19C2.00977 3.88 3.88977 2 6.20977 2H16.7998C19.1098 2 20.9898 3.88 20.9898 6.19Z"
        fill="currentColor"
      />
    </Svg>
  );
};

const MonitorMobbileBroken = ({
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
        d="M2 6.74003C2 3.37003 2.84 2.53003 6.21 2.53003H16.74C20.11 2.53003 20.95 3.37003 20.95 6.74003"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M10 16.9501H6.21C2.84 16.9501 2 16.1101 2 12.7401V10.8501"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M10 21.4699V16.95"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M2 12.95H10"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M6.74023 21.47H10.0002"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M21.9993 12.8001C21.9993 10.4301 21.4093 9.84009 19.0393 9.84009H15.4893C13.1193 9.84009 12.5293 10.4301 12.5293 12.8001V18.5101C12.5293 20.8801 13.1193 21.4701 15.4893 21.4701H19.0393C21.4093 21.4701 21.9993 20.8801 21.9993 18.5101V16.9401"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M17.2445 18.25H17.2535"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

const MonitorMobbileBulk = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M16.7998 2H6.20977C3.88977 2 2.00977 3.88 2.00977 6.19V12.37V12.56C2.00977 14.88 3.88977 16.75 6.19977 16.75H9.79977C10.3498 16.75 10.7998 17.2 10.7998 17.75V18.57C10.7998 19.12 10.3498 19.57 9.79977 19.57H7.54977C7.15977 19.57 6.83977 19.89 6.83977 20.28C6.83977 20.67 7.15977 20.99 7.54977 20.99H15.4798C15.8698 20.99 16.1898 20.67 16.1898 20.28C16.1898 19.89 15.8698 19.57 15.4798 19.57H13.2298C12.6798 19.57 12.2298 19.12 12.2298 18.57V17.75C12.2298 17.2 12.6798 16.75 13.2298 16.75H16.7998C19.1198 16.75 20.9898 14.87 20.9898 12.56V12.37V6.19C20.9898 3.88 19.1098 2 16.7998 2Z"
        fill="currentColor"
      />
      <Path
        d="M19.6402 9.5H14.3502C12.6202 9.5 11.9902 10.13 11.9902 11.88V19.61C11.9902 21.37 12.6102 21.99 14.3502 21.99H19.6402C21.3702 21.99 22.0002 21.36 22.0002 19.61V11.88C22.0002 10.12 21.3802 9.5 19.6402 9.5ZM17.0002 20.32C16.3902 20.32 15.9002 19.83 15.9002 19.22C15.9002 18.61 16.3902 18.12 17.0002 18.12C17.6102 18.12 18.1002 18.61 18.1002 19.22C18.1002 19.83 17.6102 20.32 17.0002 20.32Z"
        fill="currentColor"
      />
      <Path
        opacity="0.4"
        d="M18.1004 19.2201C18.1004 19.8301 17.6104 20.3201 17.0004 20.3201C16.3904 20.3201 15.9004 19.8301 15.9004 19.2201C15.9004 18.6101 16.3904 18.1201 17.0004 18.1201C17.6104 18.1201 18.1004 18.6201 18.1004 19.2201Z"
        fill="currentColor"
      />
    </Svg>
  );
};

const MonitorMobbileLinear = ({
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
        d="M10 16.95H6.21C2.84 16.95 2 16.11 2 12.74V6.74003C2 3.37003 2.84 2.53003 6.21 2.53003H16.74C20.11 2.53003 20.95 3.37003 20.95 6.74003"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M10 21.4699V16.95"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M2 12.95H10"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M6.73999 21.47H9.99999"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M22 12.8V18.51C22 20.88 21.41 21.47 19.04 21.47H15.49C13.12 21.47 12.53 20.88 12.53 18.51V12.8C12.53 10.43 13.12 9.83997 15.49 9.83997H19.04C21.41 9.83997 22 10.43 22 12.8Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M17.2445 18.25H17.2535"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

const MonitorMobbileOutline = ({
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
        d="M10 17.7H6.21C2.41 17.7 1.25 16.54 1.25 12.74V6.74003C1.25 2.94003 2.41 1.78003 6.21 1.78003H16.74C20.54 1.78003 21.7 2.94003 21.7 6.74003C21.7 7.15003 21.36 7.49003 20.95 7.49003C20.54 7.49003 20.2 7.15003 20.2 6.74003C20.2 3.80003 19.68 3.28003 16.74 3.28003H6.21C3.27 3.28003 2.75 3.80003 2.75 6.74003V12.74C2.75 15.68 3.27 16.2 6.21 16.2H10C10.41 16.2 10.75 16.54 10.75 16.95C10.75 17.36 10.41 17.7 10 17.7Z"
        fill="currentColor"
      />
      <Path
        d="M10 22.2199C9.59 22.2199 9.25 21.8799 9.25 21.4699V16.9399C9.25 16.5299 9.59 16.1899 10 16.1899C10.41 16.1899 10.75 16.5299 10.75 16.9399V21.4699C10.75 21.8899 10.41 22.2199 10 22.2199Z"
        fill="currentColor"
      />
      <Path
        d="M10 13.7H2C1.59 13.7 1.25 13.36 1.25 12.95C1.25 12.54 1.59 12.2 2 12.2H10C10.41 12.2 10.75 12.54 10.75 12.95C10.75 13.36 10.41 13.7 10 13.7Z"
        fill="currentColor"
      />
      <Path
        d="M10.0002 22.22H6.74023C6.33023 22.22 5.99023 21.88 5.99023 21.47C5.99023 21.06 6.33023 20.72 6.74023 20.72H10.0002C10.4102 20.72 10.7502 21.06 10.7502 21.47C10.7502 21.88 10.4102 22.22 10.0002 22.22Z"
        fill="currentColor"
      />
      <Path
        d="M19.0403 22.2201H15.4903C12.7203 22.2201 11.7803 21.2801 11.7803 18.5101V12.8001C11.7803 10.0301 12.7203 9.09009 15.4903 9.09009H19.0403C21.8103 9.09009 22.7503 10.0301 22.7503 12.8001V18.5101C22.7503 21.2901 21.8103 22.2201 19.0403 22.2201ZM15.4903 10.5901C13.5303 10.5901 13.2803 10.8401 13.2803 12.8001V18.5101C13.2803 20.4701 13.5303 20.7201 15.4903 20.7201H19.0403C21.0003 20.7201 21.2503 20.4701 21.2503 18.5101V12.8001C21.2503 10.8401 21.0003 10.5901 19.0403 10.5901H15.4903Z"
        fill="currentColor"
      />
      <Path
        d="M17.2998 18.97C17.0398 18.97 16.7798 18.87 16.5898 18.68C16.4998 18.59 16.4298 18.48 16.3798 18.36C16.3298 18.23 16.2998 18.1 16.2998 17.97C16.2998 17.71 16.4098 17.45 16.5898 17.27C16.8198 17.04 17.1698 16.93 17.4998 16.99C17.5598 17.01 17.6198 17.03 17.6798 17.05C17.7398 17.08 17.7998 17.11 17.8498 17.14C17.9098 17.18 17.9598 17.22 18.0098 17.27C18.1898 17.45 18.2998 17.71 18.2998 17.97C18.2998 18.1 18.2698 18.23 18.2198 18.36C18.1698 18.48 18.0998 18.59 18.0098 18.68C17.9598 18.73 17.9098 18.77 17.8498 18.8C17.7998 18.84 17.7398 18.87 17.6798 18.9C17.6198 18.92 17.5598 18.94 17.4998 18.95C17.4298 18.97 17.3698 18.97 17.2998 18.97Z"
        fill="currentColor"
      />
    </Svg>
  );
};

const MonitorMobbileTwotone = ({
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
        d="M10 16.9498H6.21C2.84 16.9498 2 16.1098 2 12.7398V6.73979C2 3.36979 2.84 2.52979 6.21 2.52979H16.74C20.11 2.52979 20.95 3.36979 20.95 6.73979"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M10 21.4702V16.9502"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        opacity="0.4"
        d="M2 12.9502H10"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M6.74023 21.4702H10.0002"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M22.0003 12.7998V18.5098C22.0003 20.8798 21.4103 21.4698 19.0403 21.4698H15.4903C13.1203 21.4698 12.5303 20.8798 12.5303 18.5098V12.7998C12.5303 10.4298 13.1203 9.83984 15.4903 9.83984H19.0403C21.4103 9.83984 22.0003 10.4298 22.0003 12.7998Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        opacity="0.4"
        d="M17.2445 18.25H17.2535"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

const variants: IconVariants = {
  bold: MonitorMobbileBold,
  broken: MonitorMobbileBroken,
  bulk: MonitorMobbileBulk,
  linear: MonitorMobbileLinear,
  outline: MonitorMobbileOutline,
  twotone: MonitorMobbileTwotone,
};

export const MonitorMobbileIcon = ({
  variant = "linear",
  ...props
}: IconProps) => {
  const Component = variants[variant];
  return <Component {...props} />;
};
