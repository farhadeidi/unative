import { useContext } from "react";
import { cn } from "unative/lib/utils";
import { Path, Svg } from "unative/ui/svg";
import { TextClassContext } from "unative/ui/text";

import type { IconProps, IconVariants } from "../icon-options";
import { defaultOptions } from "../icon-options";

const Radar2Bold = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM12 19.75C7.73 19.75 4.25 16.27 4.25 12C4.25 10.64 4.61 9.31 5.28 8.14C5.48 7.78 5.94 7.66 6.3 7.86L12.37 11.35C12.73 11.56 12.85 12.01 12.65 12.37C12.44 12.73 11.99 12.85 11.63 12.65L8.72 10.98C8.62 11.31 8.55 11.65 8.55 12C8.55 13.9 10.1 15.45 12 15.45C13.9 15.45 15.45 13.9 15.45 12C15.45 10.1 13.9 8.55 12 8.55C11.49 8.55 10.99 8.66 10.53 8.88C10.15 9.06 9.71 8.9 9.53 8.52C9.35 8.15 9.51 7.7 9.89 7.52C10.55 7.21 11.26 7.05 12 7.05C14.73 7.05 16.95 9.27 16.95 12C16.95 14.73 14.73 16.95 12 16.95C9.27 16.95 7.05 14.73 7.05 12C7.05 11.39 7.17 10.78 7.39 10.21L6.24 9.56C5.92 10.33 5.75 11.16 5.75 12C5.75 15.45 8.55 18.25 12 18.25C15.45 18.25 18.25 15.45 18.25 12C18.25 8.55 15.45 5.75 12 5.75C10.64 5.75 9.34 6.18 8.25 7C7.92 7.25 7.45 7.18 7.2 6.85C6.95 6.52 7.02 6.05 7.35 5.8C8.7 4.79 10.31 4.25 12 4.25C16.27 4.25 19.75 7.73 19.75 12C19.75 16.27 16.27 19.75 12 19.75Z"
        fill="currentColor"
      />
    </Svg>
  );
};

const Radar2Broken = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M12 12L3.32999 7.01996C2.48999 8.48996 2 10.19 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 9.94997 21.38 8.03996 20.32 6.45996"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M6 4C7.67 2.75 9.75 2 12 2C13.88 2 15.63 2.52001 17.13 3.42001"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M6.82999 8.95999C6.29999 9.84999 6 10.89 6 12C6 15.31 8.69 18 12 18C15.31 18 18 15.31 18 12C18 8.69 15.31 6 12 6C11.09 6 10.22 6.20001 9.45001 6.57001"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

const Radar2Bulk = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M12.0002 4.25C10.3102 4.25 8.70025 4.79 7.35025 5.8C7.02025 6.05 6.95026 6.52001 7.20026 6.85001C7.45026 7.18001 7.92024 7.25 8.25024 7C9.34024 6.18 10.6302 5.75 12.0002 5.75C15.4502 5.75 18.2502 8.55 18.2502 12C18.2502 15.45 15.4502 18.25 12.0002 18.25C8.55024 18.25 5.75024 15.45 5.75024 12C5.75024 11.16 5.92023 10.33 6.24023 9.56L7.38025 10.21C7.16025 10.78 7.04025 11.38 7.04025 12C7.04025 14.73 9.26023 16.95 11.9902 16.95C14.7202 16.95 16.9402 14.73 16.9402 12C16.9402 9.27 14.7202 7.05 11.9902 7.05C11.2502 7.05 10.5402 7.21 9.88025 7.52C9.51025 7.7 9.34023 8.14 9.52023 8.52C9.70023 8.89 10.1402 9.05 10.5202 8.88C10.9802 8.66001 11.4702 8.55 11.9902 8.55C13.8902 8.55 15.4402 10.1 15.4402 12C15.4402 13.9 13.8902 15.45 11.9902 15.45C10.0902 15.45 8.54025 13.9 8.54025 12C8.54025 11.65 8.61024 11.31 8.71024 10.98L11.6202 12.65C11.9802 12.86 12.4403 12.73 12.6403 12.37C12.8503 12.01 12.7202 11.55 12.3602 11.35L6.29025 7.86C5.93025 7.65 5.47023 7.78 5.27023 8.14C4.60023 9.31 4.24023 10.64 4.24023 12C4.24023 16.27 7.72023 19.75 11.9902 19.75C16.2602 19.75 19.7402 16.27 19.7402 12C19.7402 7.73 16.2702 4.25 12.0002 4.25Z"
        fill="currentColor"
      />
    </Svg>
  );
};

const Radar2Linear = ({ size = 24, className, ...props }: IconProps) => {
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
      <Path
        d="M6.82999 8.95999C6.29999 9.84999 6 10.89 6 12C6 15.31 8.69 18 12 18C15.31 18 18 15.31 18 12C18 8.69 15.31 6 12 6C11.09 6 10.22 6.20001 9.45001 6.57001"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

const Radar2Outline = ({ size = 24, className, ...props }: IconProps) => {
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
      <Path
        d="M12 18.75C8.28 18.75 5.25 15.72 5.25 12C5.25 10.8 5.56999 9.60999 6.17999 8.57999C6.38999 8.21999 6.84999 8.1 7.20999 8.31C7.56999 8.52 7.69001 8.98 7.48001 9.34C7.01001 10.14 6.76001 11.06 6.76001 12C6.76001 14.9 9.12001 17.25 12.01 17.25C14.9 17.25 17.26 14.9 17.26 12C17.26 9.1 14.9 6.75 12.01 6.75C11.23 6.75 10.48 6.92 9.76999 7.25C9.38999 7.42 8.94999 7.26001 8.76999 6.89001C8.58999 6.51001 8.75 6.07001 9.13 5.89001C10.03 5.47001 11 5.25 12 5.25C15.72 5.25 18.75 8.28 18.75 12C18.75 15.72 15.72 18.75 12 18.75Z"
        fill="currentColor"
      />
    </Svg>
  );
};

const Radar2Twotone = ({ size = 24, className, ...props }: IconProps) => {
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
      <Path
        opacity="0.4"
        d="M6.82999 8.95999C6.29999 9.84999 6 10.89 6 12C6 15.31 8.69 18 12 18C15.31 18 18 15.31 18 12C18 8.69 15.31 6 12 6C11.09 6 10.22 6.20001 9.45001 6.57001"
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
  bold: Radar2Bold,
  broken: Radar2Broken,
  bulk: Radar2Bulk,
  linear: Radar2Linear,
  outline: Radar2Outline,
  twotone: Radar2Twotone,
};

export const Radar2Icon = ({
  variant = defaultOptions.variant,
  className,
  ...props
}: IconProps) => {
  const textClasses = useContext(TextClassContext);
  const Component = variants[variant];
  return <Component className={cn(textClasses, className)} {...props} />;
};

export default Radar2Icon;
