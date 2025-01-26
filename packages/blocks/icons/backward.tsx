import { useContext } from "react";
import { Path, Svg } from "unative/lib/svg";
import { cn } from "unative/lib/utils";
import { TextClassContext } from "unative/ui/text";

import { iconDefaultOptions } from "../icons-configuration";
import type { IconProps, IconVariants } from "../types/icons-type";

const BackwardBold = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M21.9983 8.34032V15.6603C21.9983 17.1603 20.3683 18.1003 19.0683 17.3503L15.8983 15.5203L12.7283 13.6903L12.2383 13.4103V10.5903L12.7283 10.3103L15.8983 8.48032L19.0683 6.65032C20.3683 5.90032 21.9983 6.84032 21.9983 8.34032Z"
        fill="currentColor"
      />
      <Path
        d="M12.2414 8.34032V15.6603C12.2414 17.1603 10.6114 18.1003 9.32141 17.3503L6.14141 15.5203L2.97141 13.6903C1.68141 12.9403 1.68141 11.0603 2.97141 10.3103L6.14141 8.48032L9.32141 6.65032C10.6114 5.90032 12.2414 6.84032 12.2414 8.34032Z"
        fill="currentColor"
      />
    </Svg>
  );
};

const BackwardBroken = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M22.0002 8.33994V15.6599C22.0002 17.1599 20.3703 18.0999 19.0703 17.3499L15.9002 15.5299L12.7303 13.7C12.5303 13.58 12.3702 13.45 12.2402 13.29V10.73C12.3702 10.57 12.5303 10.44 12.7303 10.32L15.9002 8.48993L19.0703 6.66996C20.3703 5.89996 22.0002 6.83994 22.0002 8.33994Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M9.32086 6.65007C10.6209 5.90007 12.2508 6.84007 12.2508 8.34007V15.6601C12.2508 17.1601 10.6209 18.1001 9.32086 17.3501L6.15084 15.5301L2.98086 13.7001C1.68086 12.9501 1.68086 11.0801 2.98086 10.3201L5.39086 8.93007"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

const BackwardBulk = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M22.0002 8.33983V15.6598C22.0002 17.1598 20.3703 18.0998 19.0703 17.3498L15.9002 15.5198L12.7303 13.6898L12.2402 13.4098V10.5898L12.7303 10.3098L15.9002 8.47984L19.0703 6.64983C20.3703 5.89983 22.0002 6.83983 22.0002 8.33983Z"
        fill="currentColor"
      />
      <Path
        d="M12.2394 8.33983V15.6598C12.2394 17.1598 10.6095 18.0998 9.31946 17.3498L6.13947 15.5198L2.96945 13.6898C1.67945 12.9398 1.67945 11.0598 2.96945 10.3098L6.13947 8.47984L9.31946 6.64983C10.6095 5.89983 12.2394 6.83983 12.2394 8.33983Z"
        fill="currentColor"
      />
    </Svg>
  );
};

const BackwardLinear = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M22 8.33994V15.6599C22 17.1599 20.37 18.0999 19.07 17.3499L15.9 15.5299L12.73 13.7C12.53 13.58 12.37 13.45 12.24 13.29V10.73C12.37 10.57 12.53 10.44 12.73 10.32L15.9 8.48993L19.07 6.66996C20.37 5.89996 22 6.83994 22 8.33994Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M12.24 8.33994V15.6599C12.24 17.1599 10.61 18.0999 9.30999 17.3499L6.14001 15.5299L2.97 13.7C1.67 12.95 1.67 11.08 2.97 10.32L6.14001 8.48993L9.30999 6.66996C10.61 5.89996 12.24 6.83994 12.24 8.33994Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

const BackwardOutline = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M20.05 18.3601C19.59 18.3601 19.12 18.2401 18.7 17.9901L12.36 14.3301C12.07 14.1601 11.84 13.9601 11.67 13.7401C11.56 13.6101 11.5 13.4401 11.5 13.2701V10.7101C11.5 10.5401 11.56 10.3701 11.67 10.2401C11.85 10.0201 12.08 9.82007 12.36 9.66007L18.71 5.99006C19.55 5.50006 20.56 5.50006 21.41 5.99006C22.26 6.48006 22.76 7.35005 22.76 8.33005V15.6501C22.76 16.6301 22.26 17.5001 21.41 17.9901C20.98 18.2401 20.51 18.3601 20.05 18.3601ZM12.99 12.9601C13.03 12.9901 13.07 13.0201 13.11 13.0401L19.44 16.6901C19.82 16.9101 20.27 16.9101 20.64 16.6901C21.02 16.4701 21.24 16.0801 21.24 15.6501V8.33005C21.24 7.90005 21.02 7.51008 20.64 7.29008C20.26 7.07008 19.82 7.07008 19.44 7.29008L13.1 10.9501C13.06 10.9701 13.02 11.0001 12.99 11.0301V12.9601Z"
        fill="currentColor"
      />
      <Path
        d="M10.29 18.3601C9.83001 18.3601 9.36 18.2401 8.94 17.9901L2.60001 14.3301C1.76001 13.8401 1.25 12.9701 1.25 11.9901C1.25 11.0101 1.75001 10.1401 2.60001 9.65006L8.94 5.99006C9.78 5.50006 10.79 5.50006 11.64 5.99006C12.49 6.48006 12.99 7.35005 12.99 8.33005V15.6501C12.99 16.6301 12.49 17.5001 11.64 17.9901C11.22 18.2401 10.75 18.3601 10.29 18.3601ZM10.29 7.14008C10.08 7.14008 9.88 7.19006 9.69 7.30006L3.35001 10.9601C2.97001 11.1801 2.75 11.5701 2.75 12.0001C2.75 12.4301 2.97001 12.8201 3.35001 13.0401L9.69 16.7001C10.07 16.9201 10.52 16.9201 10.89 16.7001C11.27 16.4801 11.49 16.1001 11.49 15.6601V8.34006C11.49 7.91006 11.27 7.52006 10.89 7.30006C10.7 7.19006 10.5 7.14008 10.29 7.14008Z"
        fill="currentColor"
      />
    </Svg>
  );
};

const BackwardTwotone = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M22.0002 8.33994V15.6599C22.0002 17.1599 20.3703 18.0999 19.0703 17.3499L15.9002 15.5299L12.7303 13.7C12.5303 13.58 12.3702 13.45 12.2402 13.29V10.73C12.3702 10.57 12.5303 10.44 12.7303 10.32L15.9002 8.48993L19.0703 6.66996C20.3703 5.89996 22.0002 6.83994 22.0002 8.33994Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M12.2391 8.33994V15.6599C12.2391 17.1599 10.6091 18.0999 9.30914 17.3499L6.13915 15.5299L2.96914 13.7C1.66914 12.95 1.66914 11.08 2.96914 10.32L6.13915 8.48993L9.30914 6.66996C10.6091 5.89996 12.2391 6.83994 12.2391 8.33994Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

const variants: IconVariants = {
  bold: BackwardBold,
  broken: BackwardBroken,
  bulk: BackwardBulk,
  linear: BackwardLinear,
  outline: BackwardOutline,
  twotone: BackwardTwotone,
};

export const BackwardIcon = ({
  variant = iconDefaultOptions.variant,
  className,
  ...props
}: IconProps) => {
  const textClasses = useContext(TextClassContext);
  const Component = variants[variant];
  return <Component className={cn(textClasses, className)} {...props} />;
};
