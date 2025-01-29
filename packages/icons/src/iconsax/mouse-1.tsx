import { useContext } from "react";
import { cn } from "unative/lib/utils";
import { Path, Svg } from "unative/ui/svg";
import { TextClassContext } from "unative/ui/text";

import type { IconProps, IconVariants } from "../icon-options";
import { defaultOptions } from "../icon-options";

const Mouse1Bold = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM16.15 12.83L14.42 13.41C13.94 13.57 13.57 13.94 13.41 14.42L12.83 16.15C12.34 17.64 10.24 17.61 9.78 16.12L7.83 9.84C7.45 8.59 8.6 7.44 9.83 7.82L16.12 9.77C17.61 10.24 17.63 12.34 16.15 12.83Z"
        fill="currentColor"
      />
    </Svg>
  );
};

const Mouse1Broken = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M16.1497 12.8299L14.4197 13.4099C13.9397 13.5699 13.5697 13.9399 13.4097 14.4199L12.8297 16.1499C12.3397 17.6399 10.2397 17.6099 9.7797 16.1199L7.8297 9.83988C7.4497 8.58988 8.5997 7.43989 9.8297 7.81989L16.1197 9.76987C17.6097 10.2399 17.6297 12.3399 16.1497 12.8299Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M4 6C2.75 7.67 2 9.75 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2C10.57 2 9.2 2.30001 7.97 2.85001"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

const Mouse1Bulk = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
        fill="currentColor"
      />
      <Path
        d="M16.1497 12.8299L14.4197 13.4099C13.9397 13.5699 13.5697 13.9399 13.4097 14.4199L12.8297 16.1499C12.3397 17.6399 10.2397 17.6099 9.7797 16.1199L7.8297 9.83988C7.4497 8.58988 8.5997 7.43989 9.8297 7.81989L16.1197 9.76987C17.6097 10.2399 17.6297 12.3399 16.1497 12.8299Z"
        fill="currentColor"
      />
    </Svg>
  );
};

const Mouse1Linear = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M16.1499 12.83L14.4199 13.41C13.9399 13.57 13.5699 13.94 13.4099 14.42L12.8299 16.15C12.3399 17.64 10.2399 17.61 9.77994 16.12L7.82994 9.84C7.44994 8.59 8.59994 7.44001 9.82994 7.82001L16.1199 9.76999C17.6099 10.24 17.6299 12.34 16.1499 12.83Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

const Mouse1Outline = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M11.311 18C11.301 18 11.301 18 11.291 18C10.251 17.99 9.37096 17.34 9.06096 16.35L7.11097 10.07C6.85097 9.21997 7.07096 8.30997 7.70096 7.68997C8.32096 7.06997 9.22096 6.84995 10.061 7.10995L16.351 9.05997C17.351 9.36997 18.001 10.25 18.011 11.29C18.021 12.33 17.391 13.21 16.401 13.54L14.681 14.12C14.421 14.21 14.231 14.4 14.141 14.65L13.551 16.38C13.221 17.37 12.341 18 11.311 18ZM9.34096 8.49997C9.04096 8.49997 8.84096 8.65997 8.75096 8.74997C8.52096 8.97997 8.44096 9.30996 8.54096 9.61996L10.491 15.9C10.661 16.45 11.151 16.5 11.301 16.5C11.421 16.49 11.931 16.46 12.111 15.91L12.701 14.18C12.931 13.49 13.491 12.93 14.181 12.7L15.901 12.12C15.901 12.12 15.901 12.12 15.911 12.12C16.461 11.94 16.501 11.45 16.501 11.31C16.501 11.16 16.451 10.67 15.901 10.5L9.61097 8.54996C9.51097 8.50996 9.42096 8.49997 9.34096 8.49997Z"
        fill="currentColor"
      />
      <Path
        d="M12 22.75C6.07 22.75 1.25 17.93 1.25 12C1.25 6.07 6.07 1.25 12 1.25C17.93 1.25 22.75 6.07 22.75 12C22.75 17.93 17.93 22.75 12 22.75ZM12 2.75C6.9 2.75 2.75 6.9 2.75 12C2.75 17.1 6.9 21.25 12 21.25C17.1 21.25 21.25 17.1 21.25 12C21.25 6.9 17.1 2.75 12 2.75Z"
        fill="currentColor"
      />
    </Svg>
  );
};

const Mouse1Twotone = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M16.1497 12.8299L14.4197 13.4099C13.9397 13.5699 13.5697 13.9399 13.4097 14.4199L12.8297 16.1499C12.3397 17.6399 10.2397 17.6099 9.7797 16.1199L7.8297 9.83988C7.4497 8.58988 8.5997 7.43989 9.8297 7.81989L16.1197 9.76987C17.6097 10.2399 17.6297 12.3399 16.1497 12.8299Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

const variants: IconVariants = {
  bold: Mouse1Bold,
  broken: Mouse1Broken,
  bulk: Mouse1Bulk,
  linear: Mouse1Linear,
  outline: Mouse1Outline,
  twotone: Mouse1Twotone,
};

export const Mouse1Icon = ({
  variant = defaultOptions.variant,
  className,
  ...props
}: IconProps) => {
  const textClasses = useContext(TextClassContext);
  const Component = variants[variant];
  return <Component className={cn(textClasses, className)} {...props} />;
};

export default Mouse1Icon;
