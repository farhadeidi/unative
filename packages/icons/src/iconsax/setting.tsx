import { useContext } from "react";
import { cn } from "unative/lib/utils";
import { Path, Svg } from "unative/ui/svg";
import { TextClassContext } from "unative/ui/text";

import type { IconProps, IconVariants } from "../icon-options";
import { defaultOptions } from "../icon-options";

const SettingBold = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M18.9401 5.42141L13.7701 2.43141C12.7801 1.86141 11.2301 1.86141 10.2401 2.43141L5.02008 5.44141C2.95008 6.84141 2.83008 7.05141 2.83008 9.28141V14.7114C2.83008 16.9414 2.95008 17.1614 5.06008 18.5814L10.2301 21.5714C10.7301 21.8614 11.3701 22.0014 12.0001 22.0014C12.6301 22.0014 13.2701 21.8614 13.7601 21.5714L18.9801 18.5614C21.0501 17.1614 21.1701 16.9514 21.1701 14.7214V9.28141C21.1701 7.05141 21.0501 6.84141 18.9401 5.42141ZM12.0001 15.2514C10.2101 15.2514 8.75008 13.7914 8.75008 12.0014C8.75008 10.2114 10.2101 8.75141 12.0001 8.75141C13.7901 8.75141 15.2501 10.2114 15.2501 12.0014C15.2501 13.7914 13.7901 15.2514 12.0001 15.2514Z"
        fill="currentColor"
      />
    </Svg>
  );
};

const SettingBroken = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M3 13.0801V14.8801C3 17.0001 3 17.0001 5 18.3501L10.5 21.5301C11.33 22.0101 12.68 22.0101 13.5 21.5301L19 18.3501C21 17.0001 21 17.0001 21 14.8901V9.11011C21 7.00011 21 7.00011 19 5.65011L13.5 2.47011C12.68 1.99011 11.33 1.99011 10.5 2.47011L5 5.65011C3 7.00011 3 7.00011 3 9.11011"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M15 12C15 10.34 13.66 9 12 9C10.34 9 9 10.34 9 12C9 13.66 10.34 15 12 15C12.41 15 12.81 14.92 13.17 14.76"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

const SettingBulk = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M18.9401 5.41994L13.7701 2.42994C12.7801 1.85994 11.2301 1.85994 10.2401 2.42994L5.02008 5.43994C2.95008 6.83994 2.83008 7.04994 2.83008 9.27994V14.7099C2.83008 16.9399 2.95008 17.1599 5.06008 18.5799L10.2301 21.5699C10.7301 21.8599 11.3701 21.9999 12.0001 21.9999C12.6301 21.9999 13.2701 21.8599 13.7601 21.5699L18.9801 18.5599C21.0501 17.1599 21.1701 16.9499 21.1701 14.7199V9.27994C21.1701 7.04994 21.0501 6.83994 18.9401 5.41994Z"
        fill="currentColor"
      />
      <Path
        d="M12 15.25C13.7949 15.25 15.25 13.7949 15.25 12C15.25 10.2051 13.7949 8.75 12 8.75C10.2051 8.75 8.75 10.2051 8.75 12C8.75 13.7949 10.2051 15.25 12 15.25Z"
        fill="currentColor"
      />
    </Svg>
  );
};

const SettingLinear = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M3 9.11011V14.8801C3 17.0001 3 17.0001 5 18.3501L10.5 21.5301C11.33 22.0101 12.68 22.0101 13.5 21.5301L19 18.3501C21 17.0001 21 17.0001 21 14.8901V9.11011C21 7.00011 21 7.00011 19 5.65011L13.5 2.47011C12.68 1.99011 11.33 1.99011 10.5 2.47011L5 5.65011C3 7.00011 3 7.00011 3 9.11011Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M12 15C13.6569 15 15 13.6569 15 12C15 10.3431 13.6569 9 12 9C10.3431 9 9 10.3431 9 12C9 13.6569 10.3431 15 12 15Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

const SettingOutline = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M12.0002 22.6298C11.3302 22.6298 10.6502 22.4798 10.1202 22.1698L4.62023 18.9998C2.38023 17.4898 2.24023 17.2598 2.24023 14.8898V9.1098C2.24023 6.7398 2.37023 6.5098 4.57023 5.0198L10.1102 1.8198C11.1602 1.2098 12.8102 1.2098 13.8602 1.8198L19.3802 4.9998C21.6202 6.5098 21.7602 6.7398 21.7602 9.1098V14.8798C21.7602 17.2498 21.6302 17.4798 19.4302 18.9698L13.8902 22.1698C13.3502 22.4798 12.6702 22.6298 12.0002 22.6298ZM12.0002 2.8698C11.5802 2.8698 11.1702 2.9498 10.8802 3.1198L5.38023 6.2998C3.75023 7.3998 3.75023 7.3998 3.75023 9.1098V14.8798C3.75023 16.5898 3.75023 16.5898 5.42023 17.7198L10.8802 20.8698C11.4702 21.2098 12.5402 21.2098 13.1302 20.8698L18.6302 17.6898C20.2502 16.5898 20.2502 16.5898 20.2502 14.8798V9.1098C20.2502 7.3998 20.2502 7.3998 18.5802 6.2698L13.1202 3.1198C12.8302 2.9498 12.4202 2.8698 12.0002 2.8698Z"
        fill="currentColor"
      />
      <Path
        d="M12 15.75C9.93 15.75 8.25 14.07 8.25 12C8.25 9.93 9.93 8.25 12 8.25C14.07 8.25 15.75 9.93 15.75 12C15.75 14.07 14.07 15.75 12 15.75ZM12 9.75C10.76 9.75 9.75 10.76 9.75 12C9.75 13.24 10.76 14.25 12 14.25C13.24 14.25 14.25 13.24 14.25 12C14.25 10.76 13.24 9.75 12 9.75Z"
        fill="currentColor"
      />
    </Svg>
  );
};

const SettingTwotone = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M3 9.10986V14.8799C3 16.9999 3 16.9999 5 18.3499L10.5 21.5299C11.33 22.0099 12.68 22.0099 13.5 21.5299L19 18.3499C21 16.9999 21 16.9999 21 14.8899V9.10986C21 6.99986 21 6.99986 19 5.64986L13.5 2.46986C12.68 1.98986 11.33 1.98986 10.5 2.46986L5 5.64986C3 6.99986 3 6.99986 3 9.10986Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        opacity="0.34"
        d="M12 15C13.6569 15 15 13.6569 15 12C15 10.3431 13.6569 9 12 9C10.3431 9 9 10.3431 9 12C9 13.6569 10.3431 15 12 15Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

const variants: IconVariants = {
  bold: SettingBold,
  broken: SettingBroken,
  bulk: SettingBulk,
  linear: SettingLinear,
  outline: SettingOutline,
  twotone: SettingTwotone,
};

export const SettingIcon = ({
  variant = defaultOptions.variant,
  className,
  ...props
}: IconProps) => {
  const textClasses = useContext(TextClassContext);
  const Component = variants[variant];
  return <Component className={cn(textClasses, className)} {...props} />;
};

export default SettingIcon;
