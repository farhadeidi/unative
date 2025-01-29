import { useContext } from "react";
import { cn } from "unative/lib/utils";
import { Path, Svg } from "unative/ui/svg";
import { TextClassContext } from "unative/ui/text";

import type { IconProps, IconVariants } from "../icon-options";
import { defaultOptions } from "../icon-options";

const ForwardBold = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M2 8.34032V15.6603C2 17.1603 3.63 18.1003 4.93 17.3503L8.1 15.5203L11.27 13.6903L11.76 13.4103V10.5903L11.27 10.3103L8.1 8.48032L4.93 6.65032C3.63 5.90032 2 6.84032 2 8.34032Z"
        fill="currentColor"
      />
      <Path
        d="M11.7617 8.34032V15.6603C11.7617 17.1603 13.3917 18.1003 14.6817 17.3503L17.8617 15.5203L21.0317 13.6903C22.3217 12.9403 22.3217 11.0603 21.0317 10.3103L17.8617 8.48032L14.6817 6.65032C13.3917 5.90032 11.7617 6.84032 11.7617 8.34032Z"
        fill="currentColor"
      />
    </Svg>
  );
};

const ForwardBroken = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M2 8.33994V15.6599C2 17.1599 3.62999 18.0999 4.92999 17.3499L8.10001 15.5299L11.27 13.7C11.47 13.58 11.63 13.45 11.76 13.29V10.73C11.63 10.57 11.47 10.44 11.27 10.32L8.10001 8.48993L4.92999 6.66996C3.62999 5.89996 2 6.83994 2 8.33994Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M14.68 6.65007C13.38 5.90007 11.75 6.84007 11.75 8.34007V15.6601C11.75 17.1601 13.38 18.1001 14.68 17.3501L17.85 15.5301L21.02 13.7001C22.32 12.9501 22.32 11.0801 21.02 10.3201L18.84 9.06008"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

const ForwardBulk = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M2 8.33983V15.6598C2 17.1598 3.62999 18.0998 4.92999 17.3498L8.10001 15.5198L11.27 13.6898L11.76 13.4098V10.5898L11.27 10.3098L8.10001 8.47984L4.92999 6.64983C3.62999 5.89983 2 6.83983 2 8.33983Z"
        fill="currentColor"
      />
      <Path
        d="M11.7598 8.33983V15.6598C11.7598 17.1598 13.3897 18.0998 14.6797 17.3498L17.8597 15.5198L21.0298 13.6898C22.3198 12.9398 22.3198 11.0598 21.0298 10.3098L17.8597 8.47984L14.6797 6.64983C13.3897 5.89983 11.7598 6.83983 11.7598 8.33983Z"
        fill="currentColor"
      />
    </Svg>
  );
};

const ForwardLinear = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M2 8.33994V15.6599C2 17.1599 3.62999 18.0999 4.92999 17.3499L8.10001 15.5299L11.27 13.7C11.47 13.58 11.63 13.45 11.76 13.29V10.73C11.63 10.57 11.47 10.44 11.27 10.32L8.10001 8.48993L4.92999 6.66996C3.62999 5.89996 2 6.83994 2 8.33994Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M11.76 8.33994V15.6599C11.76 17.1599 13.39 18.0999 14.69 17.3499L17.86 15.5299L21.03 13.7C22.33 12.95 22.33 11.08 21.03 10.32L17.86 8.48993L14.69 6.66996C13.39 5.89996 11.76 6.83994 11.76 8.33994Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

const ForwardOutline = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M3.95001 18.3601C3.49001 18.3601 3.02001 18.2401 2.60001 17.9901C1.75001 17.5001 1.25 16.6301 1.25 15.6501V8.33005C1.25 7.35005 1.75001 6.48006 2.60001 5.99006C3.45001 5.50006 4.45999 5.50006 5.29999 5.99006L11.64 9.65006C11.93 9.82006 12.16 10.0201 12.34 10.2401C12.45 10.3701 12.51 10.5401 12.51 10.7101V13.2701C12.51 13.4401 12.45 13.6101 12.34 13.7401C12.16 13.9601 11.93 14.1601 11.66 14.3201L5.29999 18.0001C4.87999 18.2401 4.42001 18.3601 3.95001 18.3601ZM3.95001 7.14008C3.74001 7.14008 3.54001 7.19006 3.35001 7.30006C2.97001 7.52006 2.75 7.91006 2.75 8.34006V15.6601C2.75 16.0901 2.97001 16.4801 3.35001 16.7001C3.73001 16.9201 4.16999 16.9201 4.54999 16.7001L10.89 13.0401C10.93 13.0201 10.97 12.9901 11 12.9601V11.0301C10.96 11.0001 10.92 10.9701 10.88 10.9501L4.54999 7.30006C4.35999 7.19006 4.16001 7.14008 3.95001 7.14008Z"
        fill="currentColor"
      />
      <Path
        d="M13.7097 18.3601C13.2497 18.3601 12.7797 18.2401 12.3597 17.9901C11.5097 17.5001 11.0098 16.6301 11.0098 15.6501V8.33005C11.0098 7.35005 11.5097 6.48006 12.3597 5.99006C13.2097 5.50006 14.2198 5.50006 15.0598 5.99006L21.3997 9.65006C22.2397 10.1401 22.7498 11.0101 22.7498 11.9901C22.7498 12.9701 22.2498 13.8401 21.3997 14.3301L15.0598 17.9901C14.6398 18.2401 14.1697 18.3601 13.7097 18.3601ZM13.7097 7.14008C13.4997 7.14008 13.2997 7.19006 13.1097 7.30006C12.7297 7.52006 12.5098 7.90006 12.5098 8.34006V15.6601C12.5098 16.0901 12.7297 16.4801 13.1097 16.7001C13.4897 16.9201 13.9398 16.9201 14.3098 16.7001L20.6497 13.0401C21.0297 12.8201 21.2498 12.4301 21.2498 12.0001C21.2498 11.5701 21.0297 11.1801 20.6497 10.9601L14.3098 7.30006C14.1198 7.19006 13.9197 7.14008 13.7097 7.14008Z"
        fill="currentColor"
      />
    </Svg>
  );
};

const ForwardTwotone = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M2 8.33994V15.6599C2 17.1599 3.62999 18.0999 4.92999 17.3499L8.10001 15.5299L11.27 13.7C11.47 13.58 11.63 13.45 11.76 13.29V10.73C11.63 10.57 11.47 10.44 11.27 10.32L8.10001 8.48993L4.92999 6.66996C3.62999 5.89996 2 6.83994 2 8.33994Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M11.7598 8.33994V15.6599C11.7598 17.1599 13.3898 18.0999 14.6898 17.3499L17.8597 15.5299L21.0298 13.7C22.3298 12.95 22.3298 11.08 21.0298 10.32L17.8597 8.48993L14.6898 6.66996C13.3898 5.89996 11.7598 6.83994 11.7598 8.33994Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

const variants: IconVariants = {
  bold: ForwardBold,
  broken: ForwardBroken,
  bulk: ForwardBulk,
  linear: ForwardLinear,
  outline: ForwardOutline,
  twotone: ForwardTwotone,
};

export const ForwardIcon = ({
  variant = defaultOptions.variant,
  className,
  ...props
}: IconProps) => {
  const textClasses = useContext(TextClassContext);
  const Component = variants[variant];
  return <Component className={cn(textClasses, className)} {...props} />;
};

export default ForwardIcon;
