import { useContext } from "react";
import { Path, Svg } from "unative/lib/svg";
import { cn } from "unative/lib/utils";
import { TextClassContext } from "unative/ui/text";

import type { IconProps, IconVariants } from "../types/icons-type";

const VolumeHighBold = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M18.0003 16.7503C17.8403 16.7503 17.6903 16.7003 17.5503 16.6003C17.2203 16.3503 17.1503 15.8803 17.4003 15.5503C18.9703 13.4603 18.9703 10.5403 17.4003 8.45027C17.1503 8.12027 17.2203 7.65027 17.5503 7.40027C17.8803 7.15027 18.3503 7.22027 18.6003 7.55027C20.5603 10.1703 20.5603 13.8303 18.6003 16.4503C18.4503 16.6503 18.2303 16.7503 18.0003 16.7503Z"
        fill="currentColor"
      />
      <Path
        d="M19.8284 19.2503C19.6684 19.2503 19.5184 19.2003 19.3784 19.1003C19.0484 18.8503 18.9784 18.3803 19.2284 18.0503C21.8984 14.4903 21.8984 9.51027 19.2284 5.95027C18.9784 5.62027 19.0484 5.15027 19.3784 4.90027C19.7084 4.65027 20.1784 4.72027 20.4284 5.05027C23.4984 9.14027 23.4984 14.8603 20.4284 18.9503C20.2884 19.1503 20.0584 19.2503 19.8284 19.2503Z"
        fill="currentColor"
      />
      <Path
        d="M14.02 3.78168C12.9 3.16168 11.47 3.32168 10.01 4.23168L7.09 6.06168C6.89 6.18168 6.66 6.25168 6.43 6.25168H5.5H5C2.58 6.25168 1.25 7.58168 1.25 10.0017V14.0017C1.25 16.4217 2.58 17.7517 5 17.7517H5.5H6.43C6.66 17.7517 6.89 17.8217 7.09 17.9417L10.01 19.7717C10.89 20.3217 11.75 20.5917 12.55 20.5917C13.07 20.5917 13.57 20.4717 14.02 20.2217C15.13 19.6017 15.75 18.3117 15.75 16.5917V7.41168C15.75 5.69168 15.13 4.40168 14.02 3.78168Z"
        fill="currentColor"
      />
    </Svg>
  );
};

const VolumeHighBroken = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M15 7.40979C15 4.42979 12.93 3.28979 10.41 4.86979L7.49 6.69979C7.17 6.88979 6.8 6.99979 6.43 6.99979H5C3 6.99979 2 7.99979 2 9.99979V13.9998C2 15.9998 3 16.9998 5 16.9998H6.43C6.8 16.9998 7.17 17.1098 7.49 17.2998L10.41 19.1298C12.93 20.7098 15 19.5598 15 16.5898V11.4698"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M18 8C19.78 10.37 19.78 13.63 18 16"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M19.8301 18.5C21.2801 16.57 22.0001 14.29 22.0001 12"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M19.8301 5.5C20.4201 6.28 20.8801 7.12 21.2301 8"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

const VolumeHighBulk = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M18.0003 16.7498C17.8403 16.7498 17.6903 16.6998 17.5503 16.5998C17.2203 16.3498 17.1503 15.8798 17.4003 15.5498C18.9703 13.4598 18.9703 10.5398 17.4003 8.44978C17.1503 8.11978 17.2203 7.64978 17.5503 7.39978C17.8803 7.14978 18.3503 7.21978 18.6003 7.54978C20.5603 10.1698 20.5603 13.8298 18.6003 16.4498C18.4503 16.6498 18.2303 16.7498 18.0003 16.7498Z"
        fill="currentColor"
      />
      <Path
        d="M19.8304 19.2498C19.6704 19.2498 19.5204 19.1998 19.3804 19.0998C19.0504 18.8498 18.9804 18.3798 19.2304 18.0498C21.9004 14.4898 21.9004 9.50978 19.2304 5.94978C18.9804 5.61978 19.0504 5.14978 19.3804 4.89978C19.7104 4.64978 20.1804 4.71978 20.4304 5.04978C23.5004 9.13978 23.5004 14.8598 20.4304 18.9498C20.2904 19.1498 20.0604 19.2498 19.8304 19.2498Z"
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

const VolumeHighLinear = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M2 10V14C2 16 3 17 5 17H6.43C6.8 17 7.17 17.11 7.49 17.3L10.41 19.13C12.93 20.71 15 19.56 15 16.59V7.41003C15 4.43003 12.93 3.29003 10.41 4.87003L7.49 6.70003C7.17 6.89003 6.8 7.00003 6.43 7.00003H5C3 7.00003 2 8.00003 2 10Z"
        stroke="currentColor"
        strokeWidth="1.5"
      />
      <Path
        d="M18 8C19.78 10.37 19.78 13.63 18 16"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M19.83 5.5C22.72 9.35 22.72 14.65 19.83 18.5"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

const VolumeHighOutline = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M12.55 20.5901C11.76 20.5901 10.89 20.3101 10.02 19.7601L7.1 17.9301C6.9 17.8101 6.67 17.7401 6.44 17.7401H5C2.58 17.7401 1.25 16.4101 1.25 13.9901V9.99011C1.25 7.57011 2.58 6.24011 5 6.24011H6.43C6.66 6.24011 6.89 6.17011 7.09 6.05011L10.01 4.22011C11.47 3.31011 12.89 3.14011 14.01 3.76011C15.13 4.38011 15.74 5.67011 15.74 7.40011V16.5701C15.74 18.2901 15.12 19.5901 14.01 20.2101C13.57 20.4701 13.07 20.5901 12.55 20.5901ZM5 7.75011C3.42 7.75011 2.75 8.42011 2.75 10.0001V14.0001C2.75 15.5801 3.42 16.2501 5 16.2501H6.43C6.95 16.2501 7.45 16.3901 7.89 16.6701L10.81 18.5001C11.77 19.1001 12.68 19.2601 13.29 18.9201C13.9 18.5801 14.25 17.7301 14.25 16.6001V7.41011C14.25 6.27011 13.9 5.42011 13.29 5.09011C12.68 4.75011 11.77 4.90011 10.81 5.51011L7.88 7.33011C7.45 7.61011 6.94 7.75011 6.43 7.75011H5Z"
        fill="currentColor"
      />
      <Path
        d="M18.0003 16.7498C17.8403 16.7498 17.6903 16.6998 17.5503 16.5998C17.2203 16.3498 17.1503 15.8798 17.4003 15.5498C18.9703 13.4598 18.9703 10.5398 17.4003 8.44978C17.1503 8.11978 17.2203 7.64978 17.5503 7.39978C17.8803 7.14978 18.3503 7.21978 18.6003 7.54978C20.5603 10.1698 20.5603 13.8298 18.6003 16.4498C18.4503 16.6498 18.2303 16.7498 18.0003 16.7498Z"
        fill="currentColor"
      />
      <Path
        d="M19.8304 19.2498C19.6704 19.2498 19.5204 19.1998 19.3804 19.0998C19.0504 18.8498 18.9804 18.3798 19.2304 18.0498C21.9004 14.4898 21.9004 9.50978 19.2304 5.94978C18.9804 5.61978 19.0504 5.14978 19.3804 4.89978C19.7104 4.64978 20.1804 4.71978 20.4304 5.04978C23.5004 9.13978 23.5004 14.8598 20.4304 18.9498C20.2904 19.1498 20.0604 19.2498 19.8304 19.2498Z"
        fill="currentColor"
      />
    </Svg>
  );
};

const VolumeHighTwotone = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M2 9.99979V13.9998C2 15.9998 3 16.9998 5 16.9998H6.43C6.8 16.9998 7.17 17.1098 7.49 17.2998L10.41 19.1298C12.93 20.7098 15 19.5598 15 16.5898V7.40979C15 4.42979 12.93 3.28979 10.41 4.86979L7.49 6.69979C7.17 6.88979 6.8 6.99979 6.43 6.99979H5C3 6.99979 2 7.99979 2 9.99979Z"
        stroke="currentColor"
        strokeWidth="1.5"
      />
      <Path
        opacity="0.4"
        d="M18 8C19.78 10.37 19.78 13.63 18 16"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        opacity="0.4"
        d="M19.8301 5.5C22.7201 9.35 22.7201 14.65 19.8301 18.5"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

const variants: IconVariants = {
  bold: VolumeHighBold,
  broken: VolumeHighBroken,
  bulk: VolumeHighBulk,
  linear: VolumeHighLinear,
  outline: VolumeHighOutline,
  twotone: VolumeHighTwotone,
};

export const VolumeHighIcon = ({
  variant = "linear",
  className,
  ...props
}: IconProps) => {
  const textClasses = useContext(TextClassContext);
  const Component = variants[variant];
  return <Component className={cn(textClasses, className)} {...props} />;
};
