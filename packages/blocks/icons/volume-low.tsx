import { Path, Svg } from "unative/lib/svg";
import { cn } from "unative/lib/utils";

import type { IconProps, IconVariants } from "../types/icons-type";

const VolumeLowBold = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M22 12.75H18C17.59 12.75 17.25 12.41 17.25 12C17.25 11.59 17.59 11.25 18 11.25H22C22.41 11.25 22.75 11.59 22.75 12C22.75 12.41 22.41 12.75 22 12.75Z"
        fill="currentColor"
      />
      <Path
        d="M14.02 3.78168C12.9 3.16168 11.47 3.32168 10.01 4.23168L7.09 6.06168C6.89 6.18168 6.66 6.25168 6.43 6.25168H5.5H5C2.58 6.25168 1.25 7.58168 1.25 10.0017V14.0017C1.25 16.4217 2.58 17.7517 5 17.7517H5.5H6.43C6.66 17.7517 6.89 17.8217 7.09 17.9417L10.01 19.7717C10.89 20.3217 11.75 20.5917 12.55 20.5917C13.07 20.5917 13.57 20.4717 14.02 20.2217C15.13 19.6017 15.75 18.3117 15.75 16.5917V7.41168C15.75 5.69168 15.13 4.40168 14.02 3.78168Z"
        fill="currentColor"
      />
    </Svg>
  );
};

const VolumeLowBroken = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M2 14.0402C2 16.0802 3.02 17.1002 5.06 17.1002H6.52C6.9 17.1002 7.28 17.2102 7.6 17.4102L10.58 19.2702C13.16 20.8802 15.26 19.7102 15.26 16.6702V7.32021C15.26 4.28021 13.15 3.11021 10.58 4.72021L7.6 6.59021C7.27 6.79021 6.9 6.90021 6.52 6.90021H5.06C3.02 6.90021 2 7.92021 2 9.96021"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

const VolumeLowBulk = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M22 12.75H18C17.59 12.75 17.25 12.41 17.25 12C17.25 11.59 17.59 11.25 18 11.25H22C22.41 11.25 22.75 11.59 22.75 12C22.75 12.41 22.41 12.75 22 12.75Z"
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

const VolumeLowLinear = ({ size = 24, className, ...props }: IconProps) => {
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
    </Svg>
  );
};

const VolumeLowOutline = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M13.8801 20.5901C13.0901 20.5901 12.2201 20.3101 11.3501 19.7601L8.43008 17.9301C8.23008 17.8101 8.00008 17.7401 7.77008 17.7401H6.33008C3.91008 17.7401 2.58008 16.4101 2.58008 13.9901V9.99011C2.58008 7.57011 3.91008 6.24011 6.33008 6.24011H7.76008C7.99008 6.24011 8.22008 6.17011 8.42008 6.05011L11.3401 4.22011C12.8001 3.31011 14.2201 3.14011 15.3401 3.76011C16.4601 4.38011 17.0701 5.67011 17.0701 7.40011V16.5701C17.0701 18.2901 16.4501 19.5901 15.3401 20.2101C14.9001 20.4701 14.4101 20.5901 13.8801 20.5901ZM6.33008 7.75011C4.75008 7.75011 4.08008 8.42011 4.08008 10.0001V14.0001C4.08008 15.5801 4.75008 16.2501 6.33008 16.2501H7.76008C8.28008 16.2501 8.78008 16.3901 9.22008 16.6701L12.1401 18.5001C13.1101 19.1001 14.0101 19.2601 14.6201 18.9201C15.2301 18.5801 15.5801 17.7301 15.5801 16.6001V7.41011C15.5801 6.27011 15.2301 5.42011 14.6201 5.09011C14.0101 4.75011 13.1101 4.90011 12.1401 5.51011L9.22008 7.33011C8.78008 7.61011 8.28008 7.75011 7.76008 7.75011H6.33008Z"
        fill="currentColor"
      />
      <Path
        d="M19.3304 16.7498C19.1704 16.7498 19.0204 16.6998 18.8804 16.5998C18.5504 16.3498 18.4804 15.8798 18.7304 15.5498C20.3004 13.4598 20.3004 10.5398 18.7304 8.44978C18.4804 8.11978 18.5504 7.64978 18.8804 7.39978C19.2104 7.14978 19.6804 7.21978 19.9304 7.54978C21.9004 10.1698 21.9004 13.8298 19.9304 16.4498C19.7904 16.6498 19.5604 16.7498 19.3304 16.7498Z"
        fill="currentColor"
      />
    </Svg>
  );
};

const VolumeLowTwotone = ({ size = 24, className, ...props }: IconProps) => {
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
      <Path
        opacity="0.4"
        d="M18 12H22"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

const variants: IconVariants = {
  bold: VolumeLowBold,
  broken: VolumeLowBroken,
  bulk: VolumeLowBulk,
  linear: VolumeLowLinear,
  outline: VolumeLowOutline,
  twotone: VolumeLowTwotone,
};

export const VolumeLowIcon = ({ variant = "linear", ...props }: IconProps) => {
  const Component = variants[variant];
  return <Component {...props} />;
};
