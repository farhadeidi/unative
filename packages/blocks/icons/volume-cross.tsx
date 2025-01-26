import { useContext } from "react";
import { G, Path, Svg } from "unative/lib/svg";
import { cn } from "unative/lib/utils";
import { TextClassContext } from "unative/ui/text";

import type { IconProps, IconVariants } from "../types/icons-type";

const VolumeCrossBold = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M22.5314 13.4197L21.0814 11.9697L22.4814 10.5697C22.7714 10.2797 22.7714 9.79969 22.4814 9.50969C22.1914 9.21969 21.7114 9.21969 21.4214 9.50969L20.0214 10.9097L18.5714 9.45969C18.2814 9.16969 17.8014 9.16969 17.5114 9.45969C17.2214 9.74969 17.2214 10.2297 17.5114 10.5197L18.9614 11.9697L17.4714 13.4597C17.1814 13.7497 17.1814 14.2297 17.4714 14.5197C17.6214 14.6697 17.8114 14.7397 18.0014 14.7397C18.1914 14.7397 18.3814 14.6697 18.5314 14.5197L20.0214 13.0297L21.4714 14.4797C21.6214 14.6297 21.8114 14.6997 22.0014 14.6997C22.1914 14.6997 22.3814 14.6297 22.5314 14.4797C22.8214 14.1897 22.8214 13.7197 22.5314 13.4197Z"
        fill="currentColor"
      />
      <Path
        d="M14.02 3.78168C12.9 3.16168 11.47 3.32168 10.01 4.23168L7.09 6.06168C6.89 6.18168 6.66 6.25168 6.43 6.25168H5.5H5C2.58 6.25168 1.25 7.58168 1.25 10.0017V14.0017C1.25 16.4217 2.58 17.7517 5 17.7517H5.5H6.43C6.66 17.7517 6.89 17.8217 7.09 17.9417L10.01 19.7717C10.89 20.3217 11.75 20.5917 12.55 20.5917C13.07 20.5917 13.57 20.4717 14.02 20.2217C15.13 19.6017 15.75 18.3117 15.75 16.5917V7.41168C15.75 5.69168 15.13 4.40168 14.02 3.78168Z"
        fill="currentColor"
      />
    </Svg>
  );
};

const VolumeCrossBroken = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M2 13.9998C2 15.9998 3 16.9998 5 16.9998H6.43C6.8 16.9998 7.17 17.1098 7.49 17.2998L10.41 19.1298C12.93 20.7098 15 19.5598 15 16.5898V7.40979C15 4.42979 12.93 3.28979 10.41 4.86979L7.49 6.69979C7.17 6.88979 6.8 6.99979 6.43 6.99979H5C3 6.99979 2 7.99979 2 9.99979"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M21.9991 13.96L18.0391 10"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M19.89 12.1099L18 13.9999"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M21.9599 10.04L21.4199 10.58"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

const VolumeCrossBulk = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M22.5295 13.4202L21.0795 11.9702L22.4795 10.5702C22.7695 10.2802 22.7695 9.80018 22.4795 9.51018C22.1895 9.22018 21.7095 9.22018 21.4195 9.51018L20.0195 10.9102L18.5695 9.46018C18.2795 9.17018 17.7995 9.17018 17.5095 9.46018C17.2195 9.75018 17.2195 10.2302 17.5095 10.5202L18.9595 11.9702L17.4695 13.4602C17.1795 13.7502 17.1795 14.2302 17.4695 14.5202C17.6195 14.6702 17.8095 14.7402 17.9995 14.7402C18.1895 14.7402 18.3795 14.6702 18.5295 14.5202L20.0195 13.0302L21.4695 14.4802C21.6195 14.6302 21.8095 14.7002 21.9995 14.7002C22.1895 14.7002 22.3795 14.6302 22.5295 14.4802C22.8195 14.1902 22.8195 13.7202 22.5295 13.4202Z"
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

const VolumeCrossLinear = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M2 10.1595V14.1595C2 16.1595 3 17.1595 5 17.1595H6.43C6.8 17.1595 7.17 17.2695 7.49 17.4595L10.41 19.2895C12.93 20.8695 15 19.7195 15 16.7495V7.56946C15 4.58946 12.93 3.44946 10.41 5.02946L7.49 6.85946C7.17 7.04946 6.8 7.15946 6.43 7.15946H5C3 7.15946 2 8.15946 2 10.1595Z"
        stroke="currentColor"
        strokeWidth="1.5"
      />
      <Path
        d="M22 14.1194L18.04 10.1594"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M21.96 10.1995L18 14.1595"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

const VolumeCrossOutline = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M12.55 20.5901C11.76 20.5901 10.89 20.3101 10.02 19.7601L7.1 17.9301C6.9 17.8101 6.67 17.7401 6.44 17.7401H5C2.58 17.7401 1.25 16.4101 1.25 13.9901V9.99011C1.25 7.57011 2.58 6.24011 5 6.24011H6.43C6.66 6.24011 6.89 6.17011 7.09 6.05011L10.01 4.22011C11.47 3.31011 12.89 3.14011 14.01 3.76011C15.13 4.38011 15.74 5.67011 15.74 7.40011V16.5701C15.74 18.2901 15.12 19.5901 14.01 20.2101C13.57 20.4701 13.07 20.5901 12.55 20.5901ZM5 7.75011C3.42 7.75011 2.75 8.42011 2.75 10.0001V14.0001C2.75 15.5801 3.42 16.2501 5 16.2501H6.43C6.95 16.2501 7.45 16.3901 7.89 16.6701L10.81 18.5001C11.78 19.1001 12.68 19.2601 13.29 18.9201C13.9 18.5801 14.25 17.7301 14.25 16.6001V7.41011C14.25 6.27011 13.9 5.42011 13.29 5.09011C12.68 4.75011 11.77 4.90011 10.81 5.51011L7.88 7.33011C7.45 7.61011 6.94 7.75011 6.43 7.75011H5Z"
        fill="currentColor"
      />
      <Path
        d="M22.0005 14.7099C21.8105 14.7099 21.6205 14.6399 21.4705 14.4899L17.5105 10.5299C17.2205 10.2399 17.2205 9.75994 17.5105 9.46994C17.8005 9.17994 18.2805 9.17994 18.5705 9.46994L22.5305 13.4299C22.8205 13.7199 22.8205 14.1999 22.5305 14.4899C22.3805 14.6299 22.1905 14.7099 22.0005 14.7099Z"
        fill="currentColor"
      />
      <Path
        d="M17.9995 14.75C17.8095 14.75 17.6195 14.68 17.4695 14.53C17.1795 14.24 17.1795 13.76 17.4695 13.47L21.4295 9.50998C21.7195 9.21998 22.1995 9.21998 22.4895 9.50998C22.7795 9.79998 22.7795 10.28 22.4895 10.57L18.5295 14.53C18.3795 14.68 18.1895 14.75 17.9995 14.75Z"
        fill="currentColor"
      />
    </Svg>
  );
};

const VolumeCrossTwotone = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M1 7.00077V11.0008C1 13.0008 2 14.0008 4 14.0008H5.43C5.8 14.0008 6.17 14.1108 6.49 14.3008L9.41 16.1308C11.93 17.7108 14 16.5608 14 13.5908V4.41077C14 1.43077 11.93 0.290766 9.41 1.87077L6.49 3.70077C6.17 3.89077 5.8 4.00077 5.43 4.00077H4C2 4.00077 1 5.00077 1 7.00077Z"
        stroke="currentColor"
        strokeWidth="1.5"
      />
      <G opacity="0.4">
        <Path
          d="M20.9991 10.961L17.0391 7.00098"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeMiterlimit="10"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <Path
          d="M20.96 7.04102L17 11.001"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeMiterlimit="10"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </G>
    </Svg>
  );
};

const variants: IconVariants = {
  bold: VolumeCrossBold,
  broken: VolumeCrossBroken,
  bulk: VolumeCrossBulk,
  linear: VolumeCrossLinear,
  outline: VolumeCrossOutline,
  twotone: VolumeCrossTwotone,
};

export const VolumeCrossIcon = ({
  variant = "linear",
  className,
  ...props
}: IconProps) => {
  const textClasses = useContext(TextClassContext);
  const Component = variants[variant];
  return <Component className={cn(textClasses, className)} {...props} />;
};
