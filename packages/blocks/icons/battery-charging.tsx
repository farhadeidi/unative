import { useContext } from "react";
import { Path, Svg } from "unative/lib/svg";
import { cn } from "unative/lib/utils";
import { TextClassContext } from "unative/ui/text";

import { iconDefaultOptions } from "../icons-configuration";
import type { IconProps, IconVariants } from "../types/icons-type";

const BatteryChargingBold = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M12.93 4.78906H7.35C3.25 4.78906 2 6.03906 2 10.1391V13.8591C2 17.9591 3.25 19.2091 7.35 19.2091H12.93C17.03 19.2091 18.28 17.9591 18.28 13.8591V10.1391C18.28 6.03906 17.03 4.78906 12.93 4.78906ZM12.53 13.6791C12.51 13.7191 12.48 13.7591 12.45 13.7891L10.58 15.9791C10.43 16.1491 10.22 16.2391 10.01 16.2391C9.84 16.2391 9.66 16.1791 9.52 16.0591C9.21 15.7891 9.17 15.3191 9.44 14.9991L11.24 12.8891C11.25 12.8591 11.24 12.8291 11.22 12.7991C11.2 12.7591 11.16 12.7391 11.11 12.7391H9.12C8.53 12.7391 8.01 12.4391 7.71 11.9291C7.42 11.4191 7.42 10.8191 7.71 10.3091L9.42 8.04906C9.67 7.71906 10.14 7.64906 10.47 7.89906C10.8 8.14906 10.87 8.61906 10.62 8.94906L8.97 11.1391C9 11.0991 9 11.1391 9.02 11.1891C9.04 11.2291 9.08 11.2491 9.13 11.2491H11.14C11.73 11.2491 12.25 11.5491 12.55 12.0591C12.82 12.5691 12.82 13.1691 12.53 13.6791Z"
        fill="currentColor"
      />
    </Svg>
  );
};

const BatteryChargingBroken = ({
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
        d="M11.27 12C12.04 12 12.52 12.83 12.14 13.5L10 16"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M9.99922 8L8.10922 10.5C7.71922 11.17 8.19922 12 8.96922 12"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M2 10C2 6 3 5 7 5"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M7 19C3 19 2 18 2 14"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M13 5C17 5 18 6 18 10V14C18 18 17 19 13 19"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

const BatteryChargingBulk = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M12.93 4.79004H7.35C3.25 4.79004 2 6.04004 2 10.14V13.86C2 17.96 3.25 19.21 7.35 19.21H12.93C17.03 19.21 18.28 17.96 18.28 13.86V10.14C18.28 6.04004 17.03 4.79004 12.93 4.79004Z"
        fill="currentColor"
      />
      <Path
        d="M20.4192 8.99998C20.2792 8.98998 20.0992 8.97998 19.8992 8.97998C19.5092 8.97998 19.1992 9.28998 19.1992 9.67998V14.33C19.1992 14.72 19.5092 15.03 19.8992 15.03C20.0992 15.03 20.2692 15.02 20.4392 15.01C21.9992 14.83 21.9992 13.73 21.9992 12.93V11.07C21.9992 10.27 21.9992 9.16998 20.4192 8.99998Z"
        fill="currentColor"
      />
      <Path
        d="M10.0097 16.24C9.83969 16.24 9.65969 16.18 9.51969 16.06C9.20969 15.79 9.16969 15.32 9.43969 15L11.2397 12.89C11.2497 12.86 11.2397 12.83 11.2197 12.8C11.1997 12.76 11.1597 12.74 11.1097 12.74H9.11969C8.52969 12.74 8.00969 12.44 7.70969 11.93C7.41969 11.42 7.41969 10.82 7.70969 10.31L9.41969 8.05003C9.66969 7.72003 10.1397 7.65003 10.4697 7.90003C10.7997 8.15003 10.8697 8.62003 10.6197 8.95003L8.96969 11.14C8.99969 11.1 8.99969 11.14 9.01969 11.19C9.03969 11.23 9.07969 11.25 9.12969 11.25H11.1397C11.7297 11.25 12.2497 11.55 12.5497 12.06C12.8397 12.57 12.8397 13.17 12.5497 13.68C12.5297 13.72 12.4997 13.76 12.4697 13.79L10.5997 15.98C10.4397 16.16 10.2297 16.24 10.0097 16.24Z"
        fill="currentColor"
      />
    </Svg>
  );
};

const BatteryChargingLinear = ({
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
        d="M9.99995 8L8.10995 10.5C7.71995 11.17 8.19995 12 8.96995 12H11.27C12.04 12 12.52 12.83 12.14 13.5L9.99995 16"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M7 19C3 19 2 18 2 14V10C2 6 3 5 7 5"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M13 5C17 5 18 6 18 10V14C18 18 17 19 13 19"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

const BatteryChargingOutline = ({
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
        d="M10.0009 16.75C9.83094 16.75 9.65094 16.69 9.51094 16.57C9.20094 16.3 9.16094 15.83 9.43094 15.51L11.5109 13.08C11.5409 12.99 11.5109 12.91 11.4909 12.87C11.4609 12.82 11.4009 12.75 11.2709 12.75H8.97094C8.34094 12.75 7.77094 12.42 7.45094 11.88C7.13094 11.34 7.13094 10.68 7.45094 10.13L9.40094 7.55003C9.65094 7.22003 10.1209 7.15003 10.4509 7.40003C10.7809 7.65003 10.8509 8.12003 10.6009 8.45003L8.71094 10.95C8.70094 10.98 8.74094 11.07 8.76094 11.12C8.79094 11.17 8.85094 11.24 8.98094 11.24H11.2809C11.9109 11.24 12.4809 11.57 12.8009 12.11C13.1209 12.65 13.1209 13.31 12.8009 13.86C12.7809 13.9 12.7509 13.94 12.7209 13.97L10.5809 16.47C10.4209 16.66 10.2109 16.75 10.0009 16.75Z"
        fill="currentColor"
      />
      <Path
        d="M7 19.75C2.59 19.75 1.25 18.41 1.25 14V10C1.25 5.59 2.59 4.25 7 4.25C7.41 4.25 7.75 4.59 7.75 5C7.75 5.41 7.41 5.75 7 5.75C3.43 5.75 2.75 6.43 2.75 10V14C2.75 17.57 3.43 18.25 7 18.25C7.41 18.25 7.75 18.59 7.75 19C7.75 19.41 7.41 19.75 7 19.75Z"
        fill="currentColor"
      />
      <Path
        d="M13 19.75C12.59 19.75 12.25 19.41 12.25 19C12.25 18.59 12.59 18.25 13 18.25C16.57 18.25 17.25 17.57 17.25 14V10C17.25 6.43 16.57 5.75 13 5.75C12.59 5.75 12.25 5.41 12.25 5C12.25 4.59 12.59 4.25 13 4.25C17.41 4.25 18.75 5.59 18.75 10V14C18.75 18.41 17.41 19.75 13 19.75Z"
        fill="currentColor"
      />
    </Svg>
  );
};

const BatteryChargingTwotone = ({
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
        opacity="0.34"
        d="M9.99922 8L8.10922 10.5C7.71922 11.17 8.19922 12 8.96922 12H11.2692C12.0392 12 12.5192 12.83 12.1392 13.5L9.99922 16"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M7 19C3 19 2 18 2 14V10C2 6 3 5 7 5"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M13 5C17 5 18 6 18 10V14C18 18 17 19 13 19"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

const variants: IconVariants = {
  bold: BatteryChargingBold,
  broken: BatteryChargingBroken,
  bulk: BatteryChargingBulk,
  linear: BatteryChargingLinear,
  outline: BatteryChargingOutline,
  twotone: BatteryChargingTwotone,
};

export const BatteryChargingIcon = ({
  variant = iconDefaultOptions.variant,
  className,
  ...props
}: IconProps) => {
  const textClasses = useContext(TextClassContext);
  const Component = variants[variant];
  return <Component className={cn(textClasses, className)} {...props} />;
};
