import { useContext } from "react";
import { Path, Svg } from "unative/lib/svg";
import { cn } from "unative/lib/utils";
import { TextClassContext } from "unative/ui/text";

import type { IconProps, IconVariants } from "../types/icons-type";

const BatteryDisableBold = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M20.4192 9.00047C20.2792 8.99047 20.0992 8.98047 19.8992 8.98047C19.5092 8.98047 19.1992 9.29047 19.1992 9.68047V14.3305C19.1992 14.7205 19.5092 15.0305 19.8992 15.0305C20.0992 15.0305 20.2692 15.0205 20.4392 15.0105C21.9992 14.8305 21.9992 13.7305 21.9992 12.9305V11.0705C21.9992 10.2705 21.9992 9.17047 20.4192 9.00047Z"
        fill="currentColor"
      />
      <Path
        d="M18.2794 10.1405V13.8605C18.2794 16.8105 15.8794 19.2105 12.9294 19.2105H9.25942C8.46942 19.2105 7.98942 18.3405 8.40942 17.6805L15.6694 6.2005C16.0294 5.6305 16.8394 5.5805 17.2894 6.0905C18.0094 6.9205 18.2794 8.2105 18.2794 10.1405Z"
        fill="currentColor"
      />
      <Path
        d="M16.4 1.87036C16.05 1.65036 15.59 1.75036 15.37 2.10036L13.66 4.81036C13.43 4.80036 13.19 4.79036 12.93 4.79036H7.35C3.25 4.79036 2 6.04036 2 10.1404V13.8604C2 16.9104 2.7 18.3704 4.74 18.9204L3.37 21.1004C3.15 21.4504 3.25 21.9104 3.6 22.1304C3.72 22.2104 3.86 22.2504 4 22.2504C4.25 22.2504 4.49 22.1304 4.63 21.9004L16.63 2.90036C16.86 2.55036 16.75 2.09036 16.4 1.87036Z"
        fill="currentColor"
      />
    </Svg>
  );
};

const BatteryDisableBroken = ({
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
        d="M20.5 9.5C22 9.5 22 10 22 11V13C22 14 22 14.5 20.5 14.5"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M4 21.5L8.09 15.03L16 2.5"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M2 14C2 17.4 2.72 18.63 5.39 18.92"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M7 5C3 5 2 6 2 10"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M13 19.0001C17 19.0001 18 18.0001 18 14.0001V10.0001C18 6.61008 17.28 5.37008 14.63 5.08008"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

const BatteryDisableBulk = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M20.4192 8.99998C20.2792 8.98998 20.0992 8.97998 19.8992 8.97998C19.5092 8.97998 19.1992 9.28998 19.1992 9.67998V14.33C19.1992 14.72 19.5092 15.03 19.8992 15.03C20.0992 15.03 20.2692 15.02 20.4392 15.01C21.9992 14.83 21.9992 13.73 21.9992 12.93V11.07C21.9992 10.27 21.9992 9.16998 20.4192 8.99998Z"
        fill="currentColor"
      />
      <Path
        opacity="0.4"
        d="M14.5 4.87004L5.52 19.09C2.87 18.71 2 17.27 2 13.86V10.14C2 6.04004 3.25 4.79004 7.35 4.79004H12.93C13.51 4.79004 14.03 4.81004 14.5 4.87004Z"
        fill="currentColor"
      />
      <Path
        opacity="0.4"
        d="M18.2792 10.1401V13.8601C18.2792 16.8101 15.8792 19.2101 12.9292 19.2101H7.44922L16.2292 5.31006C17.7492 6.00006 18.2792 7.46006 18.2792 10.1401Z"
        fill="currentColor"
      />
      <Path
        d="M4.00088 22.2501C3.86088 22.2501 3.72088 22.2101 3.60088 22.1301C3.25088 21.9101 3.14088 21.4501 3.37088 21.1001L15.3709 2.10012C15.5909 1.75012 16.0609 1.65012 16.4009 1.87012C16.7509 2.09012 16.8609 2.55012 16.6309 2.90012L4.63088 21.9001C4.49088 22.1301 4.25088 22.2501 4.00088 22.2501Z"
        fill="currentColor"
      />
    </Svg>
  );
};

const BatteryDisableLinear = ({
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
        d="M20.5 9.5C22 9.5 22 10 22 11V13C22 14 22 14.5 20.5 14.5"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M4 21.5L16 2.5"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M7 5C3 5 2 6 2 10V14C2 17.4 2.72 18.63 5.39 18.92"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M13 19C17 19 18 18 18 14V9.99996C18 6.60996 17.28 5.36996 14.63 5.07996"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

const BatteryDisableOutline = ({
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
        d="M20.5 15.25C20.09 15.25 19.75 14.91 19.75 14.5C19.75 14.09 20.09 13.75 20.5 13.75C21.09 13.75 21.22 13.66 21.23 13.66C21.25 13.6 21.25 13.25 21.25 13V11C21.25 10.75 21.25 10.41 21.21 10.32C21.2 10.33 21.05 10.25 20.5 10.25C20.09 10.25 19.75 9.91 19.75 9.5C19.75 9.09 20.09 8.75 20.5 8.75C22.58 8.75 22.75 9.77 22.75 11V13C22.75 14.23 22.58 15.25 20.5 15.25Z"
        fill="currentColor"
      />
      <Path
        d="M4.00088 22.2501C3.86088 22.2501 3.72088 22.2101 3.60088 22.1301C3.25088 21.9101 3.14088 21.4501 3.37088 21.1001L15.3709 2.10012C15.5909 1.75012 16.0609 1.65012 16.4009 1.87012C16.7509 2.09012 16.8609 2.55012 16.6309 2.90012L4.63088 21.9001C4.49088 22.1301 4.25088 22.2501 4.00088 22.2501Z"
        fill="currentColor"
      />
      <Path
        d="M5.39 19.67C5.36 19.67 5.33 19.67 5.31 19.67C1.91 19.29 1.25 17.31 1.25 14V10C1.25 5.59 2.59 4.25 7 4.25C7.41 4.25 7.75 4.59 7.75 5C7.75 5.41 7.41 5.75 7 5.75C3.43 5.75 2.75 6.43 2.75 10V14C2.75 17.32 3.43 17.95 5.47 18.18C5.88 18.23 6.18 18.6 6.13 19.01C6.09 19.39 5.76 19.67 5.39 19.67Z"
        fill="currentColor"
      />
      <Path
        d="M13 19.75C12.59 19.75 12.25 19.41 12.25 19C12.25 18.59 12.59 18.25 13 18.25C16.57 18.25 17.25 17.57 17.25 14V9.99996C17.25 6.68996 16.57 6.04996 14.54 5.81996C14.13 5.76996 13.83 5.39996 13.88 4.98996C13.93 4.57996 14.29 4.26996 14.71 4.32996C18.09 4.70996 18.75 6.69996 18.75 9.99996V14C18.75 18.41 17.41 19.75 13 19.75Z"
        fill="currentColor"
      />
    </Svg>
  );
};

const BatteryDisableTwotone = ({
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
        opacity="0.34"
        d="M20.5 9.5C22 9.5 22 10 22 11V13C22 14 22 14.5 20.5 14.5"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M4 21.5L16 2.5"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M7 5C3 5 2 6 2 10V14C2 17.4 2.72 18.63 5.39 18.92"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        opacity="0.34"
        d="M13 19.0001C17 19.0001 18 18.0001 18 14.0001V10.0001C18 6.61008 17.28 5.37008 14.63 5.08008"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

const variants: IconVariants = {
  bold: BatteryDisableBold,
  broken: BatteryDisableBroken,
  bulk: BatteryDisableBulk,
  linear: BatteryDisableLinear,
  outline: BatteryDisableOutline,
  twotone: BatteryDisableTwotone,
};

export const BatteryDisableIcon = ({
  variant = "linear",
  className,
  ...props
}: IconProps) => {
  const textClasses = useContext(TextClassContext);
  const Component = variants[variant];
  return <Component className={cn(textClasses, className)} {...props} />;
};
