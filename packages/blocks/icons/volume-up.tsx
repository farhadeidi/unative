import { G, Path, Svg } from "unative/lib/svg";
import { cn } from "unative/lib/utils";

import type { IconProps, IconVariants } from "../types/icons-type";

const VolumeUpBold = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M22 11.25H20.75V10C20.75 9.59 20.41 9.25 20 9.25C19.59 9.25 19.25 9.59 19.25 10V11.25H18C17.59 11.25 17.25 11.59 17.25 12C17.25 12.41 17.59 12.75 18 12.75H19.25V14C19.25 14.41 19.59 14.75 20 14.75C20.41 14.75 20.75 14.41 20.75 14V12.75H22C22.41 12.75 22.75 12.41 22.75 12C22.75 11.59 22.41 11.25 22 11.25Z"
        fill="currentColor"
      />
      <Path
        d="M14.02 3.78168C12.9 3.16168 11.47 3.32168 10.01 4.23168L7.09 6.06168C6.89 6.18168 6.66 6.25168 6.43 6.25168H5.5H5C2.58 6.25168 1.25 7.58168 1.25 10.0017V14.0017C1.25 16.4217 2.58 17.7517 5 17.7517H5.5H6.43C6.66 17.7517 6.89 17.8217 7.09 17.9417L10.01 19.7717C10.89 20.3217 11.75 20.5917 12.55 20.5917C13.07 20.5917 13.57 20.4717 14.02 20.2217C15.13 19.6017 15.75 18.3117 15.75 16.5917V7.41168C15.75 5.69168 15.13 4.40168 14.02 3.78168Z"
        fill="currentColor"
      />
    </Svg>
  );
};

const VolumeUpBroken = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M2 14.0402C2 16.0802 3.02 17.1002 5.06 17.1002H6.52C6.9 17.1002 7.28 17.2102 7.6 17.4102L10.58 19.2702C13.16 20.8802 15.26 19.7102 15.26 16.6702V7.32021C15.26 4.28021 13.15 3.11021 10.58 4.72021L7.6 6.59021C7.27 6.79021 6.9 6.90021 6.52 6.90021H5.06C3.02 6.90021 2 7.92021 2 9.96021"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M21.9994 12H21.8594"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M18 12H19.8"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M20 14V10"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

const VolumeUpBulk = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M22 11.25H20.75V10C20.75 9.59 20.41 9.25 20 9.25C19.59 9.25 19.25 9.59 19.25 10V11.25H18C17.59 11.25 17.25 11.59 17.25 12C17.25 12.41 17.59 12.75 18 12.75H19.25V14C19.25 14.41 19.59 14.75 20 14.75C20.41 14.75 20.75 14.41 20.75 14V12.75H22C22.41 12.75 22.75 12.41 22.75 12C22.75 11.59 22.41 11.25 22 11.25Z"
        fill="currentColor"
      />
      <Path
        opacity="0.4"
        d="M15.75 7.41021V16.5902C15.75 18.3102 15.13 19.6002 14.02 20.2202C13.57 20.4702 13.07 20.5902 12.55 20.5902C11.75 20.5902 10.89 20.3202 10.01 19.7702L7.09 17.9402C6.89 17.8202 6.66 17.7502 6.43 17.7502H5.5V6.25021H6.43C6.66 6.25021 6.89 6.18021 7.09 6.06021L10.01 4.23021C11.47 3.32021 12.9 3.16021 14.02 3.78021C15.13 4.40021 15.75 5.69021 15.75 7.41021Z"
        fill="currentColor"
      />
      <Path
        d="M5.5 6.25V17.75H5C2.58 17.75 1.25 16.42 1.25 14V10C1.25 7.58 2.58 6.25 5 6.25H5.5Z"
        fill="currentColor"
      />
    </Svg>
  );
};

const VolumeUpLinear = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M2 9.95997V14.04C2 16.08 3.02 17.1 5.06 17.1H6.52C6.9 17.1 7.28 17.21 7.6 17.41L10.58 19.27C13.16 20.88 15.26 19.71 15.26 16.67V7.31997C15.26 4.27997 13.15 3.10997 10.58 4.71997L7.6 6.58997C7.27 6.78997 6.9 6.89997 6.52 6.89997H5.06C3.02 6.89997 2 7.91997 2 9.95997Z"
        stroke="currentColor"
        strokeWidth="1.5"
      />
      <Path
        d="M18 12H22"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M20 14V10"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

const VolumeUpOutline = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M12.76 20.75C11.95 20.75 11.08 20.47 10.18 19.91L7.2 18.05C6.99 17.92 6.76 17.85 6.52 17.85H5.06C2.6 17.85 1.25 16.5 1.25 14.04V9.95996C1.25 7.49996 2.6 6.14996 5.06 6.14996H6.52C6.76 6.14996 7 6.07996 7.2 5.94996L10.18 4.08996C11.67 3.15996 13.11 2.98996 14.25 3.62996C15.39 4.25996 16.01 5.56996 16.01 7.32996V16.69C16.01 18.44 15.38 19.76 14.25 20.39C13.8 20.63 13.3 20.75 12.76 20.75ZM5.06 7.64996C3.44 7.64996 2.75 8.33996 2.75 9.95996V14.04C2.75 15.66 3.44 16.35 5.06 16.35H6.52C7.04 16.35 7.55 16.5 8 16.77L10.98 18.63C11.97 19.25 12.9 19.4 13.53 19.06C14.16 18.71 14.52 17.84 14.52 16.68V7.31996C14.52 6.14996 14.16 5.27996 13.53 4.93996C12.9 4.58996 11.97 4.74996 10.98 5.36996L8 7.21996C7.55 7.49996 7.04 7.64996 6.52 7.64996H5.06Z"
        fill="currentColor"
      />
      <Path
        d="M22 12.75H18C17.59 12.75 17.25 12.41 17.25 12C17.25 11.59 17.59 11.25 18 11.25H22C22.41 11.25 22.75 11.59 22.75 12C22.75 12.41 22.41 12.75 22 12.75Z"
        fill="currentColor"
      />
      <Path
        d="M20 14.75C19.59 14.75 19.25 14.41 19.25 14V10C19.25 9.59 19.59 9.25 20 9.25C20.41 9.25 20.75 9.59 20.75 10V14C20.75 14.41 20.41 14.75 20 14.75Z"
        fill="currentColor"
      />
    </Svg>
  );
};

const VolumeUpTwotone = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M2 9.96021V14.0402C2 16.0802 3.02 17.1002 5.06 17.1002H6.52C6.9 17.1002 7.28 17.2102 7.6 17.4102L10.58 19.2702C13.16 20.8802 15.26 19.7102 15.26 16.6702V7.32021C15.26 4.28021 13.15 3.11021 10.58 4.72021L7.6 6.59021C7.27 6.79021 6.9 6.90021 6.52 6.90021H5.06C3.02 6.90021 2 7.92021 2 9.96021Z"
        stroke="currentColor"
        strokeWidth="1.5"
      />
      <G opacity="0.4">
        <Path
          d="M18 12H22"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <Path
          d="M20 14V10"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </G>
    </Svg>
  );
};

const variants: IconVariants = {
  bold: VolumeUpBold,
  broken: VolumeUpBroken,
  bulk: VolumeUpBulk,
  linear: VolumeUpLinear,
  outline: VolumeUpOutline,
  twotone: VolumeUpTwotone,
};

export const VolumeUpIcon = ({ variant = "linear", ...props }: IconProps) => {
  const Component = variants[variant];
  return <Component {...props} />;
};
