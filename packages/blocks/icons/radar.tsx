import { useContext } from "react";
import { Path, Svg } from "unative/lib/svg";
import { cn } from "unative/lib/utils";
import { TextClassContext } from "unative/ui/text";

import { iconDefaultOptions } from "../icons-configuration";
import type { IconProps, IconVariants } from "../types/icons-type";

const RadarBold = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M12.0011 14.3811C13.3155 14.3811 14.3811 13.3155 14.3811 12.0011C14.3811 10.6867 13.3155 9.62109 12.0011 9.62109C10.6867 9.62109 9.62109 10.6867 9.62109 12.0011C9.62109 13.3155 10.6867 14.3811 12.0011 14.3811Z"
        fill="currentColor"
      />
      <Path
        d="M20.0003 18.7503C19.8403 18.7503 19.6903 18.7003 19.5503 18.6003C19.2203 18.3503 19.1503 17.8803 19.4003 17.5503C20.6103 15.9403 21.2503 14.0203 21.2503 12.0003C21.2503 9.98027 20.6103 8.06027 19.4003 6.45027C19.1503 6.12027 19.2203 5.65027 19.5503 5.40027C19.8803 5.15027 20.3503 5.22027 20.6003 5.55027C22.0103 7.42027 22.7503 9.65027 22.7503 12.0003C22.7503 14.3503 22.0103 16.5803 20.6003 18.4503C20.4503 18.6503 20.2303 18.7503 20.0003 18.7503Z"
        fill="currentColor"
      />
      <Path
        d="M4 18.7503C3.77 18.7503 3.55 18.6503 3.4 18.4503C1.99 16.5803 1.25 14.3503 1.25 12.0003C1.25 9.65027 1.99 7.42027 3.4 5.55027C3.65 5.22027 4.12 5.15027 4.45 5.40027C4.78 5.65027 4.85 6.12027 4.6 6.45027C3.39 8.06027 2.75 9.98027 2.75 12.0003C2.75 14.0203 3.39 15.9403 4.6 17.5503C4.85 17.8803 4.78 18.3503 4.45 18.6003C4.32 18.7003 4.16 18.7503 4 18.7503Z"
        fill="currentColor"
      />
      <Path
        d="M16.8011 16.3487C16.6411 16.3487 16.4911 16.2987 16.3511 16.1987C16.0211 15.9487 15.9511 15.4787 16.2011 15.1487C16.8911 14.2387 17.2511 13.1487 17.2511 11.9987C17.2511 10.8487 16.8911 9.75871 16.2011 8.84871C15.9511 8.51871 16.0211 8.04871 16.3511 7.79871C16.6811 7.54871 17.1511 7.61871 17.4011 7.94871C18.2811 9.12871 18.7511 10.5287 18.7511 11.9987C18.7511 13.4687 18.2811 14.8787 17.4011 16.0487C17.2511 16.2487 17.0311 16.3487 16.8011 16.3487Z"
        fill="currentColor"
      />
      <Path
        d="M7.2 16.3487C6.97 16.3487 6.75 16.2487 6.6 16.0487C5.72 14.8787 5.25 13.4687 5.25 11.9987C5.25 10.5287 5.72 9.11871 6.6 7.94871C6.85 7.61871 7.32 7.54871 7.65 7.79871C7.98 8.04871 8.05 8.51871 7.8 8.84871C7.11 9.75871 6.75 10.8487 6.75 11.9987C6.75 13.1487 7.11 14.2387 7.8 15.1487C8.05 15.4787 7.98 15.9487 7.65 16.1987C7.52 16.2987 7.36 16.3487 7.2 16.3487Z"
        fill="currentColor"
      />
    </Svg>
  );
};

const RadarBroken = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M20.32 6.45996C21.38 8.04996 22 9.94997 22 12C22 17.52 17.52 22 12 22C6.48 22 2 17.52 2 12C2 10.19 2.47999 8.48996 3.32999 7.01996L12 12"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M6 4C7.67 2.75 9.75 2 12 2C13.93 2 15.73 2.53999 17.25 3.48999"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

const RadarBulk = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M11.9991 14.3801C13.3136 14.3801 14.3792 13.3146 14.3792 12.0001C14.3792 10.6857 13.3136 9.62012 11.9991 9.62012C10.6847 9.62012 9.61914 10.6857 9.61914 12.0001C9.61914 13.3146 10.6847 14.3801 11.9991 14.3801Z"
        fill="currentColor"
      />
      <Path
        opacity="0.4"
        d="M20.0003 18.75C19.8403 18.75 19.6903 18.7 19.5503 18.6C19.2203 18.35 19.1503 17.88 19.4003 17.55C20.6103 15.94 21.2503 14.02 21.2503 12C21.2503 9.98004 20.6103 8.06005 19.4003 6.45005C19.1503 6.12005 19.2203 5.65003 19.5503 5.40003C19.8803 5.15003 20.3503 5.22002 20.6003 5.55002C22.0103 7.42002 22.7503 9.65004 22.7503 12C22.7503 14.35 22.0103 16.58 20.6003 18.45C20.4503 18.65 20.2303 18.75 20.0003 18.75Z"
        fill="currentColor"
      />
      <Path
        opacity="0.4"
        d="M4 18.75C3.77 18.75 3.54999 18.65 3.39999 18.45C1.98999 16.58 1.25 14.35 1.25 12C1.25 9.65004 1.98999 7.42002 3.39999 5.55002C3.64999 5.22002 4.12001 5.15003 4.45001 5.40003C4.78001 5.65003 4.85001 6.12005 4.60001 6.45005C3.39001 8.06005 2.75 9.98004 2.75 12C2.75 14.02 3.39001 15.94 4.60001 17.55C4.85001 17.88 4.78001 18.35 4.45001 18.6C4.32001 18.7 4.16 18.75 4 18.75Z"
        fill="currentColor"
      />
      <Path
        opacity="0.4"
        d="M16.7991 16.3499C16.6391 16.3499 16.4891 16.2999 16.3491 16.1999C16.0191 15.9499 15.9491 15.4799 16.1991 15.1499C16.8891 14.2399 17.2491 13.1499 17.2491 11.9999C17.2491 10.8499 16.8891 9.75994 16.1991 8.84994C15.9491 8.51994 16.0191 8.04992 16.3491 7.79992C16.6791 7.54992 17.1491 7.61995 17.3991 7.94995C18.2791 9.12995 18.7491 10.5299 18.7491 11.9999C18.7491 13.4699 18.2791 14.8799 17.3991 16.0499C17.2491 16.2499 17.0291 16.3499 16.7991 16.3499Z"
        fill="currentColor"
      />
      <Path
        opacity="0.4"
        d="M7.20001 16.3499C6.97001 16.3499 6.75001 16.2499 6.60001 16.0499C5.72001 14.8699 5.25 13.4699 5.25 11.9999C5.25 10.5299 5.72001 9.11995 6.60001 7.94995C6.85001 7.61995 7.31999 7.54992 7.64999 7.79992C7.97999 8.04992 8.04999 8.51994 7.79999 8.84994C7.10999 9.75994 6.75 10.8499 6.75 11.9999C6.75 13.1499 7.10999 14.2399 7.79999 15.1499C8.04999 15.4799 7.97999 15.9499 7.64999 16.1999C7.51999 16.2999 7.36001 16.3499 7.20001 16.3499Z"
        fill="currentColor"
      />
    </Svg>
  );
};

const RadarLinear = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M6 4C7.67 2.75 9.75 2 12 2C17.52 2 22 6.48 22 12C22 17.52 17.52 22 12 22C6.48 22 2 17.52 2 12C2 10.19 2.47999 8.48999 3.32999 7.01999L12 12"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

const RadarOutline = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M12 22.7502C6.07 22.7502 1.25 17.9302 1.25 12.0002C1.25 10.1202 1.73999 8.27026 2.67999 6.64026C2.88999 6.28026 3.34001 6.16023 3.70001 6.36023L12.37 11.3402C12.73 11.5502 12.85 12.0002 12.65 12.3602C12.44 12.7202 11.99 12.8403 11.63 12.6403L3.63 8.05023C3.05 9.28023 2.75 10.6202 2.75 11.9902C2.75 17.0902 6.9 21.2402 12 21.2402C17.1 21.2402 21.25 17.0902 21.25 11.9902C21.25 6.89023 17.1 2.74023 12 2.74023C9.98 2.74023 8.06001 3.38024 6.45001 4.59024C6.12001 4.84024 5.64999 4.77025 5.39999 4.44025C5.14999 4.11025 5.21999 3.64026 5.54999 3.39026C7.41999 1.99026 9.65 1.24023 12 1.24023C17.93 1.24023 22.75 6.06023 22.75 11.9902C22.75 17.9202 17.93 22.7502 12 22.7502Z"
        fill="currentColor"
      />
    </Svg>
  );
};

const RadarTwotone = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M6 4C7.67 2.75 9.75 2 12 2C17.52 2 22 6.48 22 12C22 17.52 17.52 22 12 22C6.48 22 2 17.52 2 12C2 10.19 2.47999 8.48999 3.32999 7.01999L12 12"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

const variants: IconVariants = {
  bold: RadarBold,
  broken: RadarBroken,
  bulk: RadarBulk,
  linear: RadarLinear,
  outline: RadarOutline,
  twotone: RadarTwotone,
};

export const RadarIcon = ({
  variant = iconDefaultOptions.variant,
  className,
  ...props
}: IconProps) => {
  const textClasses = useContext(TextClassContext);
  const Component = variants[variant];
  return <Component className={cn(textClasses, className)} {...props} />;
};
