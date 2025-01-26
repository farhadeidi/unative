import { useContext } from "react";
import { G, Path, Svg } from "unative/lib/svg";
import { cn } from "unative/lib/utils";
import { TextClassContext } from "unative/ui/text";

import { iconDefaultOptions } from "../icons-configuration";
import type { IconProps, IconVariants } from "../types/icons-type";

const PenCloseBold = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M16.0003 21.2902L6.64034 22.3902C5.99034 22.4702 5.41034 22.3702 4.92034 22.1302C4.40034 21.8702 3.99034 21.4702 3.73034 20.9402C3.49034 20.4502 3.40034 19.8802 3.47034 19.2402L4.32034 12.0902C4.40034 12.1202 4.48034 12.1502 4.56034 12.1702C5.17034 12.3902 5.82034 12.5002 6.50034 12.5002C7.96034 12.5002 9.37034 11.9702 10.4403 11.0202C10.9003 10.6202 11.3103 10.1402 11.6403 9.59016C11.9203 9.12016 12.1303 8.62016 12.2703 8.13016C12.3403 7.87016 12.4003 7.59016 12.4403 7.31016C12.4503 7.26016 12.4503 7.21016 12.4503 7.16016L12.6203 7.17016L18.7003 13.2602L18.9603 17.6802C19.2103 20.1602 18.3503 21.0202 16.0003 21.2902Z"
        fill="currentColor"
      />
      <Path
        d="M6.5 2C5.44 2 4.46 2.37 3.69 2.99C2.65 3.81 2 5.08 2 6.5C2 7.34 2.24 8.14 2.65 8.82C3.09 9.55 3.73 10.15 4.51 10.53C4.68 10.62 4.87 10.7 5.06 10.76C5.51 10.92 5.99 11 6.5 11C7.64 11 8.67 10.58 9.46 9.88C9.81 9.58 10.11 9.22 10.35 8.82C10.56 8.47 10.72 8.1 10.83 7.7C10.89 7.5 10.93 7.29 10.96 7.07C10.99 6.88 11 6.69 11 6.5C11 4.01 8.99 2 6.5 2ZM8.23 8.21C8.09 8.35 7.89 8.43 7.7 8.43C7.51 8.43 7.32 8.35 7.17 8.21L6.51 7.55L5.83 8.23C5.68 8.38 5.49 8.45 5.3 8.45C5.11 8.45 4.91 8.38 4.77 8.23C4.48 7.94 4.48 7.46 4.77 7.17L5.46 6.48L4.79 5.83C4.5 5.54 4.5 5.06 4.79 4.77C5.08 4.48 5.56 4.48 5.85 4.77L6.51 5.43L7.14 4.8C7.43 4.51 7.91 4.51 8.2 4.8C8.49 5.09 8.49 5.57 8.2 5.86L7.57 6.49L8.23 7.15C8.53 7.44 8.53 7.91 8.23 8.21Z"
        fill="currentColor"
      />
      <Path
        d="M22.0006 10.2819L19.9306 11.5919C19.5406 11.8319 19.0406 11.7819 18.7206 11.4519L14.2906 7.02186C13.9706 6.70186 13.9106 6.20186 14.1506 5.81186L15.4606 3.74186C16.2606 2.48186 17.8606 2.42186 19.0506 3.59186L22.1606 6.70186C23.2506 7.81186 23.1806 9.53186 22.0006 10.2819Z"
        fill="currentColor"
      />
    </Svg>
  );
};

const PenCloseBroken = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M18.0199 4.85991C16.8199 3.65991 15.1698 3.71993 14.3598 5.00993L12.5898 7.80992L18.2598 13.4799L21.0598 11.7099C22.2698 10.9499 22.3398 9.17991 21.1998 8.04991"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M11.2906 21.48L7.0206 21.98C5.1806 22.19 3.8606 20.87 4.0806 19.04L5.06059 10.76"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M18.2502 13.47L18.4902 17.59C18.7202 19.89 17.9202 20.69 15.7402 20.95"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M12.5801 7.80994L10.8301 7.69995"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M5.28125 20.7799L8.46126 17.5898"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M11 6.5C11 6.91 10.94 7.32001 10.83 7.70001C10.72 8.10001 10.56 8.47001 10.35 8.82001C10.11 9.22001 9.81001 9.58 9.46001 9.88C8.67001 10.58 7.64 11 6.5 11C5.99 11 5.51 10.92 5.06 10.76C4.04 10.42 3.18999 9.72001 2.64999 8.82001C2.23999 8.14001 2 7.34 2 6.5C2 5.08 2.65 3.80999 3.69 2.98999C4.46 2.36999 5.44 2 6.5 2C8.99 2 11 4.01 11 6.5Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M7.7003 7.68005L5.32031 5.30005"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M7.68077 5.32007L5.30078 7.70007"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

const PenCloseBulk = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M21.7111 11.3499L18.7011 13.2499L12.6211 7.16993L14.5111 4.15992C15.3911 2.76992 17.1611 2.70995 18.4511 3.99995L21.8611 7.40992C23.0811 8.63992 23.0011 10.5299 21.7111 11.3499Z"
        fill="currentColor"
      />
      <Path
        opacity="0.4"
        d="M16.0003 21.2898L6.64034 22.3898C5.99034 22.4698 5.41034 22.3698 4.92034 22.1298C4.40034 21.8698 3.99034 21.4698 3.73034 20.9398C3.49034 20.4498 3.40034 19.8798 3.47034 19.2398L4.51033 10.5298C4.68033 10.6198 4.87034 10.6998 5.06034 10.7598C5.51034 10.9198 5.99034 10.9998 6.50034 10.9998C7.64034 10.9998 8.67035 10.5798 9.46035 9.87982C9.81035 9.57982 10.1103 9.21982 10.3503 8.81982C10.5603 8.46982 10.7203 8.09983 10.8303 7.69983C10.8903 7.49983 10.9303 7.28982 10.9603 7.06982L12.6203 7.1698L18.7003 13.2598L18.9603 17.6798C19.2103 20.1598 18.3503 21.0198 16.0003 21.2898Z"
        fill="currentColor"
      />
      <Path
        d="M8.78023 18.2798L4.93022 22.1298C4.40022 21.8698 4.00023 21.4698 3.74023 20.9398L7.59023 17.0898C7.93023 16.7598 8.46023 16.7598 8.78023 17.0898C9.11023 17.4198 9.11023 17.9498 8.78023 18.2798Z"
        fill="currentColor"
      />
      <Path
        d="M6.5 2C5.44 2 4.46 2.36999 3.69 2.98999C2.65 3.80999 2 5.08 2 6.5C2 7.34 2.23999 8.14001 2.64999 8.82001C3.08999 9.55001 3.72999 10.15 4.50999 10.53C4.67999 10.62 4.87 10.7 5.06 10.76C5.51 10.92 5.99 11 6.5 11C7.64 11 8.67001 10.58 9.46001 9.88C9.81001 9.58 10.11 9.22001 10.35 8.82001C10.56 8.47001 10.72 8.10001 10.83 7.70001C10.89 7.50001 10.93 7.29001 10.96 7.07001C10.99 6.88001 11 6.69 11 6.5C11 4.01 8.99 2 6.5 2ZM8.23 8.21002C8.08 8.36002 7.89 8.42999 7.7 8.42999C7.51 8.42999 7.32 8.36002 7.17 8.21002L6.50999 7.54999L5.82001 8.23999C5.67001 8.38999 5.47999 8.46002 5.28999 8.46002C5.09999 8.46002 4.90999 8.38999 4.75999 8.23999C4.46999 7.94999 4.46999 7.46999 4.75999 7.17999L5.45 6.48999L4.78999 5.83002C4.49999 5.54002 4.49999 5.06002 4.78999 4.77002C5.07999 4.48002 5.56001 4.48002 5.85001 4.77002L6.50999 5.42999L7.14 4.79999C7.43 4.50999 7.91 4.50999 8.2 4.79999C8.49 5.08999 8.49 5.56999 8.2 5.85999L7.57001 6.48999L8.23 7.15002C8.53 7.44002 8.53 7.91002 8.23 8.21002Z"
        fill="currentColor"
      />
    </Svg>
  );
};

const PenCloseLinear = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M21.19 8.0399L18.01 4.85991C16.81 3.65991 15.16 3.71993 14.35 5.00993L12.58 7.80992L18.25 13.4799L21.05 11.7099C22.26 10.9399 22.33 9.1699 21.19 8.0399Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M18.25 13.47L18.49 17.59C18.72 19.89 17.92 20.69 15.74 20.95L7.02 21.98C5.18 22.19 3.86 20.87 4.08 19.04L5.06 10.76"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M12.58 7.80994L10.83 7.69995"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M5.28 20.7799L8.46001 17.5898"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M11 6.5C11 6.91 10.94 7.32001 10.83 7.70001C10.72 8.10001 10.56 8.47001 10.35 8.82001C10.11 9.22001 9.81001 9.58 9.46001 9.88C8.67001 10.58 7.64 11 6.5 11C5.99 11 5.51 10.92 5.06 10.76C4.04 10.42 3.18999 9.72001 2.64999 8.82001C2.23999 8.14001 2 7.34 2 6.5C2 5.08 2.65 3.80999 3.69 2.98999C4.46 2.36999 5.44 2 6.5 2C8.99 2 11 4.01 11 6.5Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M7.7 7.68005L5.32001 5.30005"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M7.67999 5.32007L5.3 7.70007"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

const PenCloseOutline = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M18.2512 14.22C18.0612 14.22 17.8612 14.14 17.7212 14L12.0512 8.33001C11.8012 8.08001 11.7612 7.70001 11.9512 7.40001L13.7212 4.59996C14.2012 3.82996 14.9512 3.36 15.8112 3.26C16.7612 3.15 17.7712 3.54 18.5512 4.32L21.7312 7.49999C22.4812 8.24999 22.8512 9.24999 22.7412 10.25C22.6412 11.12 22.1812 11.8699 21.4612 12.3299L18.6612 14.1C18.5312 14.18 18.3912 14.22 18.2512 14.22ZM13.5412 7.7L18.3612 12.52L20.6512 11.07C20.9912 10.86 21.2012 10.51 21.2412 10.09C21.3012 9.56002 21.0812 8.99 20.6612 8.57L17.4812 5.39C17.0212 4.93 16.4712 4.7 15.9712 4.76C15.5712 4.8 15.2312 5.02996 14.9912 5.40996L13.5412 7.7Z"
        fill="currentColor"
      />
      <Path
        d="M6.6291 22.75C5.6891 22.75 4.8591 22.4201 4.2391 21.8001C3.5191 21.0801 3.1991 20.07 3.3291 18.95L4.3091 10.67C4.3591 10.26 4.7191 9.97003 5.1391 10.01C5.5491 10.06 5.8491 10.43 5.7991 10.84L4.81911 19.12C4.73911 19.77 4.9091 20.34 5.2991 20.73C5.6891 21.12 6.26909 21.3 6.92909 21.22L15.6491 20.19C17.5091 19.97 17.9191 19.47 17.7391 17.65L17.4991 13.5C17.4791 13.09 17.7891 12.73 18.2091 12.71C18.6191 12.69 18.9791 13.0001 18.9991 13.4201L19.2391 17.5401C19.4991 20.1201 18.4791 21.37 15.8291 21.69L7.1091 22.72C6.9491 22.74 6.7891 22.75 6.6291 22.75Z"
        fill="currentColor"
      />
      <Path
        d="M12.5801 8.56018C12.5601 8.56018 12.5501 8.56018 12.5301 8.56018L10.7801 8.45019C10.3701 8.42019 10.0501 8.0702 10.0801 7.6502C10.1101 7.2402 10.4601 6.92019 10.8801 6.95019L12.6301 7.06018C13.0401 7.09018 13.3601 7.44016 13.3301 7.86016C13.3001 8.25016 12.9701 8.56018 12.5801 8.56018Z"
        fill="currentColor"
      />
      <Path
        d="M5.2807 21.5301C5.0907 21.5301 4.9007 21.4602 4.7507 21.3102C4.4607 21.0202 4.4607 20.5401 4.7507 20.2501L7.9307 17.07C8.2207 16.78 8.70071 16.78 8.99071 17.07C9.28071 17.36 9.28071 17.8401 8.99071 18.1301L5.8107 21.3102C5.6607 21.4602 5.4707 21.5301 5.2807 21.5301Z"
        fill="currentColor"
      />
      <Path
        d="M6.5 11.75C5.91 11.75 5.34 11.65 4.81 11.47C3.65 11.08 2.64999 10.28 2.00999 9.21002C1.50999 8.39002 1.25 7.45 1.25 6.5C1.25 4.88 1.97 3.39002 3.23 2.40002C4.15 1.66002 5.31 1.25 6.5 1.25C9.4 1.25 11.75 3.61 11.75 6.5C11.75 6.97 11.68 7.45997 11.55 7.90997C11.42 8.36997 11.24 8.79002 10.99 9.21002C10.7 9.69002 10.35 10.1 9.94 10.45C9 11.29 7.78 11.75 6.5 11.75ZM6.5 2.75C5.65 2.75 4.82 3.04001 4.16 3.57001C3.26 4.28001 2.75 5.34 2.75 6.5C2.75 7.17 2.93999 7.83999 3.28999 8.42999C3.74999 9.18999 4.45999 9.76998 5.28999 10.04C6.49999 10.47 7.95001 10.2 8.96001 9.31C9.25001 9.06 9.50001 8.75999 9.71001 8.42999C9.89001 8.12999 10.02 7.83 10.11 7.5C10.2 7.17 10.25 6.83 10.25 6.5C10.25 4.43 8.57 2.75 6.5 2.75Z"
        fill="currentColor"
      />
      <Path
        d="M7.69977 8.43021C7.50977 8.43021 7.31977 8.36024 7.16977 8.21024L4.78977 5.83023C4.49977 5.54023 4.49977 5.06023 4.78977 4.77023C5.07977 4.48023 5.55978 4.48023 5.84978 4.77023L8.22977 7.15024C8.51977 7.44024 8.51977 7.92024 8.22977 8.21024C8.08977 8.35024 7.88977 8.43021 7.69977 8.43021Z"
        fill="currentColor"
      />
      <Path
        d="M5.30023 8.4498C5.11023 8.4498 4.92023 8.37977 4.77023 8.22977C4.48023 7.93977 4.48023 7.45977 4.77023 7.16977L7.15022 4.78977C7.44022 4.49977 7.92024 4.49977 8.21024 4.78977C8.50024 5.07977 8.50024 5.55976 8.21024 5.84976L5.83023 8.22977C5.68023 8.37977 5.49023 8.4498 5.30023 8.4498Z"
        fill="currentColor"
      />
    </Svg>
  );
};

const PenCloseTwotone = ({ size = 24, className, ...props }: IconProps) => {
  return (
    <Svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      className={cn("text-foreground", className)}
      {...props}
    >
      <G opacity="0.4">
        <Path
          d="M21.1901 8.0399L18.0101 4.85991C16.8101 3.65991 15.1601 3.71993 14.3501 5.00993L12.5801 7.80992L18.2501 13.4799L21.0501 11.7099C22.2601 10.9399 22.3301 9.1699 21.1901 8.0399Z"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <Path
          d="M18.2506 13.4697L18.4906 17.5897C18.7206 19.8897 17.9206 20.6897 15.7406 20.9497L7.0206 21.9797C5.1806 22.1897 3.8606 20.8698 4.0806 19.0398L5.06059 10.7598"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <Path
          d="M12.5801 7.81018L10.8301 7.7002"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <Path
          d="M5.28125 20.7799L8.46126 17.5898"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </G>
      <Path
        d="M11 6.5C11 6.91 10.94 7.32001 10.83 7.70001C10.72 8.10001 10.56 8.47001 10.35 8.82001C10.11 9.22001 9.81001 9.58 9.46001 9.88C8.67001 10.58 7.64 11 6.5 11C5.99 11 5.51 10.92 5.06 10.76C4.04 10.42 3.18999 9.72001 2.64999 8.82001C2.23999 8.14001 2 7.34 2 6.5C2 5.08 2.65 3.80999 3.69 2.98999C4.46 2.36999 5.44 2 6.5 2C8.99 2 11 4.01 11 6.5Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M7.7003 7.67981L5.32031 5.2998"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M7.68077 5.31982L5.30078 7.69983"
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
  bold: PenCloseBold,
  broken: PenCloseBroken,
  bulk: PenCloseBulk,
  linear: PenCloseLinear,
  outline: PenCloseOutline,
  twotone: PenCloseTwotone,
};

export const PenCloseIcon = ({
  variant = iconDefaultOptions.variant,
  className,
  ...props
}: IconProps) => {
  const textClasses = useContext(TextClassContext);
  const Component = variants[variant];
  return <Component className={cn(textClasses, className)} {...props} />;
};
