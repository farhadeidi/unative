import { useContext } from "react";
import { Path, Svg } from "unative/lib/svg";
import { cn } from "unative/lib/utils";
import { TextClassContext } from "unative/ui/text";

import { iconDefaultOptions } from "../icons-configuration";
import type { IconProps, IconVariants } from "../types/icons-type";

const VideoBold = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M21.15 6.17C20.74 5.95 19.88 5.72 18.71 6.54L17.24 7.58C17.13 4.47 15.78 3.25 12.5 3.25H6.5C3.08 3.25 1.75 4.58 1.75 8V16C1.75 18.3 3 20.75 6.5 20.75H12.5C15.78 20.75 17.13 19.53 17.24 16.42L18.71 17.46C19.33 17.9 19.87 18.04 20.3 18.04C20.67 18.04 20.96 17.93 21.15 17.83C21.56 17.62 22.25 17.05 22.25 15.62V8.38C22.25 6.95 21.56 6.38 21.15 6.17ZM11 11.38C9.97 11.38 9.12 10.54 9.12 9.5C9.12 8.46 9.97 7.62 11 7.62C12.03 7.62 12.88 8.46 12.88 9.5C12.88 10.54 12.03 11.38 11 11.38Z"
        fill="currentColor"
      />
    </Svg>
  );
};

const VideoBroken = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M2 7.79008C2 4.63008 3.05 3.58008 6.21 3.58008H12.53C15.69 3.58008 16.74 4.63008 16.74 7.79008V16.2101C16.74 19.3701 15.69 20.4201 12.53 20.4201H6.21C3.05 20.4201 2 18.3201 2 16.2101V12.1201"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M19.5202 17.0999L16.7402 15.1499V8.83989L19.5202 6.88989C20.8802 5.93989 22.0002 6.51989 22.0002 8.18989V15.8099C22.0002 17.4799 20.8802 18.0599 19.5202 17.0999Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M13 9.5C13 8.67 12.33 8 11.5 8C10.67 8 10 8.67 10 9.5C10 10.33 10.67 11 11.5 11"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

const VideoBulk = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M13 3.25H7C3.58 3.25 2.25 4.58 2.25 8V16C2.25 18.3 3.5 20.75 7 20.75H13C16.42 20.75 17.75 19.42 17.75 16V8C17.75 4.58 16.42 3.25 13 3.25Z"
        fill="currentColor"
      />
      <Path
        d="M11.4991 11.3801C12.5374 11.3801 13.3791 10.5384 13.3791 9.50012C13.3791 8.46182 12.5374 7.62012 11.4991 7.62012C10.4608 7.62012 9.61914 8.46182 9.61914 9.50012C9.61914 10.5384 10.4608 11.3801 11.4991 11.3801Z"
        fill="currentColor"
      />
      <Path
        d="M21.6505 6.17011C21.2405 5.96011 20.3805 5.72011 19.2105 6.54011L17.7305 7.58011C17.7405 7.72011 17.7505 7.85011 17.7505 8.00011V16.0001C17.7505 16.1501 17.7305 16.2801 17.7305 16.4201L19.2105 17.4601C19.8305 17.9001 20.3705 18.0401 20.8005 18.0401C21.1705 18.0401 21.4605 17.9401 21.6505 17.8401C22.0605 17.6301 22.7505 17.0601 22.7505 15.6301V8.38011C22.7505 6.95011 22.0605 6.38011 21.6505 6.17011Z"
        fill="currentColor"
      />
    </Svg>
  );
};

const VideoLinear = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M12.53 20.4201H6.21C3.05 20.4201 2 18.3201 2 16.2101V7.79008C2 4.63008 3.05 3.58008 6.21 3.58008H12.53C15.69 3.58008 16.74 4.63008 16.74 7.79008V16.2101C16.74 19.3701 15.68 20.4201 12.53 20.4201Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M19.52 17.0999L16.74 15.1499V8.83989L19.52 6.88989C20.88 5.93989 22 6.51989 22 8.18989V15.8099C22 17.4799 20.88 18.0599 19.52 17.0999Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M11.5 11C12.3284 11 13 10.3284 13 9.5C13 8.67157 12.3284 8 11.5 8C10.6716 8 10 8.67157 10 9.5C10 10.3284 10.6716 11 11.5 11Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

const VideoOutline = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M12.88 20.8601H6.81C3.26 20.8601 2 18.3701 2 16.0501V7.95014C2 4.49014 3.35 3.14014 6.81 3.14014H12.88C16.34 3.14014 17.69 4.49014 17.69 7.95014V16.0501C17.69 19.5101 16.34 20.8601 12.88 20.8601ZM6.81 4.66014C4.2 4.66014 3.52 5.34014 3.52 7.95014V16.0501C3.52 17.2801 3.95 19.3401 6.81 19.3401H12.88C15.49 19.3401 16.17 18.6601 16.17 16.0501V7.95014C16.17 5.34014 15.49 4.66014 12.88 4.66014H6.81Z"
        fill="currentColor"
      />
      <Path
        d="M20.7797 18.11C20.3497 18.11 19.7997 17.97 19.1697 17.53L16.4997 15.66C16.2997 15.52 16.1797 15.29 16.1797 15.04V8.95999C16.1797 8.70999 16.2997 8.48 16.4997 8.33999L19.1697 6.46999C20.3597 5.63999 21.2297 5.87999 21.6397 6.08999C22.0497 6.30999 22.7497 6.87999 22.7497 8.32999V15.66C22.7497 17.11 22.0497 17.69 21.6397 17.9C21.4497 18.01 21.1497 18.11 20.7797 18.11ZM17.6897 14.64L20.0397 16.28C20.4897 16.59 20.8097 16.62 20.9397 16.55C21.0797 16.48 21.2297 16.2 21.2297 15.66V8.33999C21.2297 7.78999 21.0697 7.51999 20.9397 7.44999C20.8097 7.37999 20.4897 7.40999 20.0397 7.71999L17.6897 9.35999V14.64Z"
        fill="currentColor"
      />
      <Path
        d="M11.5 11.75C10.26 11.75 9.25 10.74 9.25 9.5C9.25 8.26 10.26 7.25 11.5 7.25C12.74 7.25 13.75 8.26 13.75 9.5C13.75 10.74 12.74 11.75 11.5 11.75ZM11.5 8.75C11.09 8.75 10.75 9.09 10.75 9.5C10.75 9.91 11.09 10.25 11.5 10.25C11.91 10.25 12.25 9.91 12.25 9.5C12.25 9.09 11.91 8.75 11.5 8.75Z"
        fill="currentColor"
      />
    </Svg>
  );
};

const VideoTwotone = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M12.53 20.4201H6.21C3.05 20.4201 2 18.3201 2 16.2101V7.79008C2 4.63008 3.05 3.58008 6.21 3.58008H12.53C15.69 3.58008 16.74 4.63008 16.74 7.79008V16.2101C16.74 19.3701 15.68 20.4201 12.53 20.4201Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        opacity="0.4"
        d="M19.5202 17.1001L16.7402 15.1501V8.84013L19.5202 6.89013C20.8802 5.94013 22.0002 6.52013 22.0002 8.19013V15.8101C22.0002 17.4801 20.8802 18.0601 19.5202 17.1001Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        opacity="0.4"
        d="M11.5 11C12.3284 11 13 10.3284 13 9.5C13 8.67157 12.3284 8 11.5 8C10.6716 8 10 8.67157 10 9.5C10 10.3284 10.6716 11 11.5 11Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

const variants: IconVariants = {
  bold: VideoBold,
  broken: VideoBroken,
  bulk: VideoBulk,
  linear: VideoLinear,
  outline: VideoOutline,
  twotone: VideoTwotone,
};

export const VideoIcon = ({
  variant = iconDefaultOptions.variant,
  className,
  ...props
}: IconProps) => {
  const textClasses = useContext(TextClassContext);
  const Component = variants[variant];
  return <Component className={cn(textClasses, className)} {...props} />;
};
