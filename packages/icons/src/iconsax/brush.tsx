import { useContext } from "react";
import { cn } from "unative/lib/utils";
import { Path, Svg } from "unative/ui/svg";
import { TextClassContext } from "unative/ui/text";

import type { IconProps, IconVariants } from "../icon-options";
import { defaultOptions } from "../icon-options";

const BrushBold = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M6 2H18C19.1 2 20 2.9 20 4V7.32C20 7.87 19.55 8.32 19 8.32H5C4.45 8.32 4 7.87 4 7.32V4C4 2.9 4.9 2 6 2Z"
        fill="currentColor"
      />
      <Path
        d="M4 10.3203V11.8803C4 12.9603 4.58 13.9603 5.53 14.4903L8.49 16.1603C9.12 16.5103 9.51 17.1803 9.51 17.9003V20.0003C9.51 21.1003 10.41 22.0003 11.51 22.0003H12.51C13.61 22.0003 14.51 21.1003 14.51 20.0003V17.9003C14.51 17.1803 14.9 16.5103 15.53 16.1603L18.49 14.4903C19.43 13.9603 20.02 12.9603 20.02 11.8803V10.3203C20.02 9.77031 19.57 9.32031 19.02 9.32031H5C4.45 9.32031 4 9.76031 4 10.3203Z"
        fill="currentColor"
      />
    </Svg>
  );
};

const BrushBroken = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M12.98 8.32001H4V4C4 2.9 4.9 2 6 2H18C19.1 2 20 2.9 20 4V8.32001H16.93"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M4 11.8801C4 12.9601 4.58003 13.9601 5.53003 14.4901L8.48999 16.16C9.11999 16.51 9.51001 17.1801 9.51001 17.9001V20.0001C9.51001 21.1001 10.41 22.0001 11.51 22.0001H12.51C13.61 22.0001 14.51 21.1001 14.51 20.0001V17.9001C14.51 17.1801 14.9 16.51 15.53 16.16L18.49 14.4901C19.43 13.9601 20.02 12.9601 20.02 11.8801V8.32007"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

const BrushBulk = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M14.19 0H5.81C2.17 0 0 2.17 0 5.81V14.18C0 17.83 2.17 20 5.81 20H14.18C17.82 20 19.99 17.83 19.99 14.19V5.81C20 2.17 17.83 0 14.19 0Z"
        fill="currentColor"
      />
      <Path
        d="M19.8303 1.55022C18.7803 4.16022 16.4003 7.57022 14.1203 9.80022C13.7903 7.74022 12.1503 6.13022 10.0703 5.84022C12.3103 3.56022 15.7403 1.14022 18.3603 0.0802204C18.8203 -0.0997796 19.2903 0.0402204 19.5703 0.33022C19.8803 0.63022 20.0203 1.09022 19.8303 1.55022Z"
        fill="currentColor"
      />
      <Path
        opacity="0.4"
        d="M14.1197 9.79008C13.7197 10.1801 13.3197 10.5401 12.9397 10.8401L11.3697 12.1001C11.1697 12.2401 10.9697 12.3601 10.7497 12.4601C10.7497 12.3101 10.7297 12.1601 10.7197 12.0001C10.6297 11.3401 10.3297 10.7101 9.78969 10.1701C9.23969 9.63008 8.57969 9.32008 7.90969 9.23008C7.74969 9.21008 7.57969 9.21008 7.42969 9.21008C7.51969 8.96008 7.64969 8.73008 7.81969 8.54008L9.06969 6.97008C9.36969 6.59008 9.70969 6.21008 10.0797 5.83008C12.1497 6.12008 13.7997 7.74008 14.1197 9.79008Z"
        fill="currentColor"
      />
      <Path
        d="M10.7506 12.47C10.7506 13.35 10.4106 14.19 9.78056 14.82C9.29056 15.31 8.64056 15.65 7.84056 15.75L5.88056 15.97C4.81056 16.09 3.89056 15.17 4.01056 14.09L4.23056 12.13C4.42056 10.38 5.88056 9.26 7.43056 9.23C7.58056 9.22 7.75056 9.23 7.91056 9.25C8.59056 9.34 9.24056 9.65 9.79056 10.19C10.3206 10.72 10.6306 11.36 10.7206 12.02C10.7306 12.17 10.7506 12.32 10.7506 12.47Z"
        fill="currentColor"
      />
    </Svg>
  );
};

const BrushLinear = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M21.81 3.94012C20.27 7.78012 16.41 13.0001 13.18 15.5901L11.21 17.1701C10.96 17.3501 10.71 17.5101 10.43 17.6201C10.43 17.4401 10.42 17.2401 10.39 17.0501C10.28 16.2101 9.9 15.4301 9.23 14.7601C8.55 14.0801 7.72 13.6801 6.87 13.5701C6.67 13.5601 6.47 13.5401 6.27 13.5601C6.38 13.2501 6.55 12.9601 6.76 12.7201L8.32 10.7501C10.9 7.52012 16.14 3.64012 19.97 2.11012C20.56 1.89012 21.13 2.05012 21.49 2.42012C21.87 2.79012 22.05 3.36012 21.81 3.94012Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M10.43 17.6201C10.43 18.7201 10.01 19.77 9.22 20.57C8.61 21.18 7.78 21.6001 6.79 21.7301L4.33 22.0001C2.99 22.1501 1.84 21.01 2 19.65L2.27 17.1901C2.51 15.0001 4.34 13.6001 6.28 13.5601C6.48 13.5501 6.69 13.56 6.88 13.57C7.73 13.68 8.56 14.0701 9.24 14.7601C9.91 15.4301 10.29 16.21 10.4 17.05C10.41 17.24 10.43 17.4301 10.43 17.6201Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M14.24 14.47C14.24 11.86 12.12 9.73999 9.50999 9.73999"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

const BrushOutline = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M10 16.75C9.59 16.75 9.25 16.41 9.25 16C9.25 14.33 9.25 12.25 13 12.25H17C19.25 12.25 19.25 11.95 19.25 10V8C19.25 6.05 19.25 5.75 17 5.75H16C15.59 5.75 15.25 5.41 15.25 5C15.25 4.59 15.59 4.25 16 4.25H17C20.5 4.25 20.75 5.67 20.75 8V10C20.75 12.33 20.5 13.75 17 13.75H13C10.75 13.75 10.75 14.36 10.75 16C10.75 16.41 10.41 16.75 10 16.75Z"
        fill="currentColor"
      />
      <Path
        d="M12.0009 8.75H8.00094C7.68094 8.75 7.39094 8.54 7.29094 8.24C6.60094 6.15 6.60094 3.85 7.29094 1.77C7.39094 1.46 7.68094 1.25 8.00094 1.25H12.0009C12.3209 1.25 12.6109 1.46 12.7109 1.76C13.4109 3.85 13.4109 6.15 12.7109 8.23C12.6109 8.54 12.3309 8.75 12.0009 8.75ZM8.56094 7.25H11.4509C11.8409 5.78 11.8409 4.22 11.4509 2.75H8.56094C8.17094 4.22 8.17094 5.78 8.56094 7.25Z"
        fill="currentColor"
      />
      <Path
        d="M8 8.75H7C4.58 8.75 3.25 7.42 3.25 5C3.25 2.58 4.58 1.25 7 1.25H8C8.26 1.25 8.5 1.38 8.64 1.61C8.78 1.83 8.79 2.11 8.67 2.34C7.77 4.13 7.77 5.88 8.67 7.67C8.79 7.9 8.77 8.18 8.64 8.4C8.5 8.62 8.26 8.75 8 8.75ZM6.88 2.75C5.39 2.79 4.75 3.46 4.75 5C4.75 6.53 5.39 7.21 6.87 7.25C6.37 5.75 6.37 4.25 6.88 2.75Z"
        fill="currentColor"
      />
      <Path
        d="M12.9992 8.75H11.9992C11.7392 8.75 11.4992 8.62 11.3592 8.39C11.2192 8.17 11.2092 7.89 11.3292 7.66C12.2192 5.87 12.2192 4.12 11.3292 2.33C11.2092 2.1 11.2292 1.82 11.3592 1.6C11.4992 1.38 11.7392 1.25 11.9992 1.25H12.9992C15.4192 1.25 16.7492 2.58 16.7492 5C16.7492 7.42 15.4192 8.75 12.9992 8.75ZM13.1192 2.75C13.6192 4.25 13.6192 5.75 13.1192 7.25C14.6092 7.21 15.2392 6.54 15.2392 5C15.2492 3.46 14.6092 2.79 13.1192 2.75Z"
        fill="currentColor"
      />
      <Path
        d="M10.5 22.75H9.5C8.47 22.75 7.25 22.36 7.25 20.5V17.5C7.25 15.64 8.47 15.25 9.5 15.25H10.5C11.53 15.25 12.75 15.64 12.75 17.5V20.5C12.75 22.36 11.53 22.75 10.5 22.75ZM9.5 16.75C8.75 16.75 8.75 16.97 8.75 17.5V20.5C8.75 21.03 8.75 21.25 9.5 21.25H10.5C11.25 21.25 11.25 21.03 11.25 20.5V17.5C11.25 16.97 11.25 16.75 10.5 16.75H9.5Z"
        fill="currentColor"
      />
    </Svg>
  );
};

const BrushTwotone = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M6 2H18C19.1 2 20 2.9 20 4V8.32001H4V4C4 2.9 4.9 2 6 2Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M4 8.31982V11.8798C4 12.9598 4.58003 13.9598 5.53003 14.4898L8.48999 16.1598C9.11999 16.5098 9.51001 17.1798 9.51001 17.8998V19.9998C9.51001 21.0998 10.41 21.9998 11.51 21.9998H12.51C13.61 21.9998 14.51 21.0998 14.51 19.9998V17.8998C14.51 17.1798 14.9 16.5098 15.53 16.1598L18.49 14.4898C19.43 13.9598 20.02 12.9598 20.02 11.8798V8.31982H4Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

const variants: IconVariants = {
  bold: BrushBold,
  broken: BrushBroken,
  bulk: BrushBulk,
  linear: BrushLinear,
  outline: BrushOutline,
  twotone: BrushTwotone,
};

export const BrushIcon = ({
  variant = defaultOptions.variant,
  className,
  ...props
}: IconProps) => {
  const textClasses = useContext(TextClassContext);
  const Component = variants[variant];
  return <Component className={cn(textClasses, className)} {...props} />;
};

export default BrushIcon;
