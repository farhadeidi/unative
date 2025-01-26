import { useContext } from "react";
import { Path, Svg } from "unative/lib/svg";
import { cn } from "unative/lib/utils";
import { TextClassContext } from "unative/ui/text";

import type { IconProps, IconVariants } from "../types/icons-type";

const Bluetooth2Bold = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M12.3008 17.3208L14.6108 15.3908L12.3008 13.3008V17.3208Z"
        fill="currentColor"
      />
      <Path
        d="M12.3008 6.67969V10.6397L14.6108 8.51969L12.3008 6.67969Z"
        fill="currentColor"
      />
      <Path
        d="M16.19 2H7.81C4.17 2 2 4.17 2 7.81V16.18C2 19.83 4.17 22 7.81 22H16.18C19.82 22 21.99 19.83 21.99 16.19V7.81C22 4.17 19.83 2 16.19 2ZM5.25 12C5.25 11.24 5.87 10.62 6.63 10.62C7.39 10.62 8 11.24 8 12C8 12.76 7.38 13.38 6.62 13.38C5.86 13.38 5.25 12.76 5.25 12ZM15.57 16.54L13.16 18.55C12.75 18.9 12.37 19 12.08 19C11.85 19 11.67 18.94 11.57 18.89C11.34 18.78 10.8 18.43 10.8 17.45V14.06L7.9 16.71C7.6 16.99 7.12 16.97 6.84 16.66C6.56 16.35 6.58 15.88 6.89 15.6L10.8 12.02V11.94L6.89 8.4C6.58 8.12 6.56 7.65 6.84 7.34C7.12 7.04 7.6 7.01 7.9 7.29L10.8 9.94V6.56C10.8 5.58 11.34 5.22 11.57 5.12C11.8 5.01 12.42 4.83 13.17 5.46L15.58 7.47C15.91 7.74 16.1 8.13 16.11 8.54C16.12 8.95 15.95 9.35 15.64 9.64L13.04 12L15.63 14.37C15.94 14.66 16.12 15.06 16.11 15.47C16.09 15.88 15.9 16.27 15.57 16.54ZM17.38 13.38C16.62 13.38 16 12.76 16 12C16 11.24 16.62 10.62 17.38 10.62C18.14 10.62 18.76 11.24 18.76 12C18.76 12.76 18.13 13.38 17.38 13.38Z"
        fill="currentColor"
      />
    </Svg>
  );
};

const Bluetooth2Broken = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M14.2306 3.38999L13.1006 2.43998C12.1006 1.60998 11.2806 1.98998 11.2806 3.28998V20.71C11.2806 22.01 12.1006 22.39 13.1006 21.56L16.9506 18.35C17.4906 17.9 17.5006 17.15 16.9906 16.68L4.64062 5.35996"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M4.64062 18.64L16.9906 7.32004C17.5006 6.85004 17.4906 6.10002 16.9506 5.65002"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M5 13C5.55228 13 6 12.5523 6 12C6 11.4477 5.55228 11 5 11C4.44772 11 4 11.4477 4 12C4 12.5523 4.44772 13 5 13Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M19 13C19.5523 13 20 12.5523 20 12C20 11.4477 19.5523 11 19 11C18.4477 11 18 11.4477 18 12C18 12.5523 18.4477 13 19 13Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

const Bluetooth2Bulk = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M16.1898 2H7.81976C4.17976 2 2.00977 4.17 2.00977 7.81V16.18C2.00977 19.82 4.17976 21.99 7.81976 21.99H16.1898C19.8298 21.99 21.9998 19.82 21.9998 16.18V7.81C21.9998 4.17 19.8298 2 16.1898 2Z"
        fill="currentColor"
      />
      <Path
        d="M12.0796 18.9999C11.8496 18.9999 11.6696 18.9399 11.5696 18.8899C11.3396 18.7799 10.7996 18.4299 10.7996 17.4499V14.0599L7.8996 16.7099C7.5996 16.9899 7.1196 16.9699 6.8396 16.6599C6.5596 16.3499 6.57962 15.8799 6.88962 15.5999L10.7996 12.0199V11.9399L6.88962 8.39992C6.57962 8.11992 6.5596 7.64992 6.8396 7.33992C7.1196 7.02992 7.5896 7.00992 7.8996 7.28992L10.7996 9.93992V6.54993C10.7996 5.56993 11.3396 5.20992 11.5696 5.10992C11.7996 4.99992 12.4196 4.81992 13.1696 5.44992L15.5796 7.45993C15.9096 7.72993 16.0996 8.11992 16.1096 8.52992C16.1196 8.93992 15.9496 9.33993 15.6396 9.62993L13.0496 11.9999L15.6396 14.3699C15.9496 14.6599 16.1296 15.0599 16.1196 15.4699C16.1096 15.8799 15.9196 16.2699 15.5896 16.5399L13.1796 18.5499C12.7496 18.8999 12.3696 18.9999 12.0796 18.9999ZM12.2996 13.2999V17.3199L14.6096 15.3899L12.2996 13.2999ZM12.2996 6.67991V10.6399L14.6096 8.51993L12.2996 6.67991Z"
        fill="currentColor"
      />
      <Path
        d="M6.62024 13.3801C5.86024 13.3801 5.24023 12.7601 5.24023 12.0001C5.24023 11.2401 5.86024 10.6201 6.62024 10.6201C7.38024 10.6201 8.00024 11.2401 8.00024 12.0001C8.00024 12.7601 7.38024 13.3801 6.62024 13.3801ZM6.62024 11.8801C6.55024 11.8801 6.50024 11.9401 6.50024 12.0001C6.50024 12.1401 6.75024 12.1401 6.75024 12.0001C6.75024 11.9301 6.69024 11.8801 6.62024 11.8801Z"
        fill="currentColor"
      />
      <Path
        d="M17.38 13.3801C16.62 13.3801 16 12.7601 16 12.0001C16 11.2401 16.62 10.6201 17.38 10.6201C18.14 10.6201 18.76 11.2401 18.76 12.0001C18.76 12.7601 18.13 13.3801 17.38 13.3801ZM17.38 11.8801C17.31 11.8801 17.26 11.9401 17.26 12.0001C17.26 12.1401 17.51 12.1401 17.51 12.0001C17.5 11.9301 17.44 11.8801 17.38 11.8801Z"
        fill="currentColor"
      />
    </Svg>
  );
};

const Bluetooth2Linear = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M4.64001 18.64L16.99 7.31998C17.5 6.84998 17.49 6.09997 16.95 5.64997L13.1 2.43998C12.1 1.60998 11.28 1.98998 11.28 3.28998V20.71C11.28 22.01 12.1 22.39 13.1 21.56L16.95 18.35C17.49 17.9 17.5 17.15 16.99 16.68L4.64001 5.35996"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M5 13C5.55228 13 6 12.5523 6 12C6 11.4477 5.55228 11 5 11C4.44772 11 4 11.4477 4 12C4 12.5523 4.44772 13 5 13Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M19 13C19.5523 13 20 12.5523 20 12C20 11.4477 19.5523 11 19 11C18.4477 11 18 11.4477 18 12C18 12.5523 18.4477 13 19 13Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

const Bluetooth2Outline = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M12.1299 22.7501C11.8599 22.7501 11.6498 22.6801 11.4998 22.6101C11.1398 22.4401 10.5298 21.9701 10.5298 20.7101V14.2601L5.13986 19.2001C4.83986 19.4801 4.35983 19.4601 4.07983 19.1501C3.79983 18.8401 3.81985 18.3701 4.12985 18.0901L10.5298 12.2201V11.7701L4.12985 5.90008C3.81985 5.62008 3.79983 5.15008 4.07983 4.84008C4.35983 4.54008 4.83986 4.51009 5.13986 4.79009L10.5298 9.73009V3.28008C10.5298 2.02008 11.1398 1.54009 11.4998 1.38009C11.8598 1.21009 12.6098 1.05007 13.5798 1.86007L17.4298 5.07009C17.8498 5.42009 18.0998 5.9201 18.1098 6.4501C18.1198 6.98009 17.8998 7.49007 17.4898 7.86007L12.9898 11.9901L17.4898 16.1201C17.8898 16.4901 18.1198 17.0101 18.1098 17.5301C18.0998 18.0601 17.8498 18.5601 17.4298 18.9101L13.5798 22.1201C13.0098 22.6101 12.5099 22.7501 12.1299 22.7501ZM12.0298 13.1501V20.7101C12.0298 21.0801 12.1098 21.2401 12.1498 21.2601C12.1598 21.2501 12.3398 21.2101 12.6198 20.9801L16.4698 17.7701C16.5598 17.6901 16.6098 17.6001 16.6098 17.5001C16.6098 17.4001 16.5699 17.3101 16.4799 17.2301L12.0298 13.1501ZM12.1198 2.75008C12.1098 2.76008 12.0298 2.93009 12.0298 3.29009V10.8501L16.4799 6.77007C16.5699 6.69007 16.6098 6.60008 16.6098 6.50008C16.6098 6.40008 16.5598 6.31009 16.4698 6.23009L12.6098 3.02007C12.3498 2.80007 12.1798 2.75008 12.1198 2.75008Z"
        fill="currentColor"
      />
      <Path
        d="M5 13.75C4.04 13.75 3.25 12.96 3.25 12C3.25 11.04 4.04 10.25 5 10.25C5.96 10.25 6.75 11.04 6.75 12C6.75 12.96 5.96 13.75 5 13.75ZM5 11.75C4.86 11.75 4.75 11.86 4.75 12C4.75 12.28 5.25 12.28 5.25 12C5.25 11.86 5.14 11.75 5 11.75Z"
        fill="currentColor"
      />
      <Path
        d="M19 13.75C18.04 13.75 17.25 12.96 17.25 12C17.25 11.04 18.04 10.25 19 10.25C19.96 10.25 20.75 11.04 20.75 12C20.75 12.96 19.96 13.75 19 13.75ZM19 11.75C18.86 11.75 18.75 11.86 18.75 12C18.75 12.28 19.25 12.28 19.25 12C19.25 11.86 19.14 11.75 19 11.75Z"
        fill="currentColor"
      />
    </Svg>
  );
};

const Bluetooth2Twotone = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M4.63965 18.64L16.9896 7.31998C17.4996 6.84998 17.4896 6.09997 16.9496 5.64997L13.0996 2.43998C12.0996 1.60998 11.2796 1.98998 11.2796 3.28998V20.71C11.2796 22.01 12.0996 22.39 13.0996 21.56L16.9496 18.35C17.4896 17.9 17.4996 17.15 16.9896 16.68L4.63965 5.35996"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        opacity="0.4"
        d="M5 13C5.55228 13 6 12.5523 6 12C6 11.4477 5.55228 11 5 11C4.44772 11 4 11.4477 4 12C4 12.5523 4.44772 13 5 13Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        opacity="0.4"
        d="M19 13C19.5523 13 20 12.5523 20 12C20 11.4477 19.5523 11 19 11C18.4477 11 18 11.4477 18 12C18 12.5523 18.4477 13 19 13Z"
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
  bold: Bluetooth2Bold,
  broken: Bluetooth2Broken,
  bulk: Bluetooth2Bulk,
  linear: Bluetooth2Linear,
  outline: Bluetooth2Outline,
  twotone: Bluetooth2Twotone,
};

export const Bluetooth2Icon = ({
  variant = "linear",
  className,
  ...props
}: IconProps) => {
  const textClasses = useContext(TextClassContext);
  const Component = variants[variant];
  return <Component className={cn(textClasses, className)} {...props} />;
};
