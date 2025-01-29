import { useContext } from "react";
import { cn } from "unative/lib/utils";
import { Path, Svg } from "unative/ui/svg";
import { TextClassContext } from "unative/ui/text";

import type { IconProps, IconVariants } from "../icon-options";
import { defaultOptions } from "../icon-options";

const BluetoothBold = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M12.9297 10.6406L15.2597 8.51063L12.9297 6.64062V10.6406Z"
        fill="currentColor"
      />
      <Path
        d="M16.19 2H7.81C4.17 2 2 4.17 2 7.81V16.18C2 19.83 4.17 22 7.81 22H16.18C19.82 22 21.99 19.83 21.99 16.19V7.81C22 4.17 19.83 2 16.19 2ZM16.27 14.39C16.58 14.68 16.76 15.08 16.75 15.49C16.74 15.9 16.55 16.29 16.22 16.57L13.8 18.59C13.38 18.94 13 19.04 12.71 19.04C12.48 19.04 12.3 18.98 12.2 18.93C11.97 18.82 11.43 18.46 11.43 17.48V14.06L8.51 16.74C8.21 17.02 7.73 17 7.45 16.69C7.17 16.38 7.19 15.91 7.5 15.63L11.43 12.03V11.95L7.49 8.38C7.19 8.1 7.17 7.62 7.45 7.32C7.73 7.02 8.21 6.99 8.51 7.27L11.43 9.95V6.53C11.43 5.55 11.97 5.19 12.2 5.08C12.43 4.97 13.05 4.79 13.8 5.42L16.22 7.44C16.55 7.71 16.74 8.11 16.75 8.52C16.76 8.93 16.59 9.33 16.27 9.62L13.67 12L16.27 14.39Z"
        fill="currentColor"
      />
      <Path
        d="M12.9297 17.3608L15.2597 15.4108L12.9297 13.3008V17.3608Z"
        fill="currentColor"
      />
    </Svg>
  );
};

const BluetoothBroken = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M14.9494 3.38999L13.8194 2.43998C12.8194 1.60998 11.9994 1.98998 11.9994 3.28998V20.71C11.9994 22.01 12.8194 22.39 13.8194 21.56L17.6694 18.35C18.2094 17.9 18.2194 17.15 17.7094 16.68L5.35938 5.35996"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M5.35938 18.64L17.7094 7.32004C18.2194 6.85004 18.2094 6.10002 17.6694 5.65002"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

const BluetoothBulk = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M12.7109 19.0299C12.4809 19.0299 12.3009 18.9699 12.2009 18.9199C11.9709 18.8099 11.4309 18.4499 11.4309 17.4699V14.0499L8.51094 16.7299C8.21094 17.0099 7.73094 16.9899 7.45094 16.6799C7.17094 16.3699 7.19093 15.8999 7.50093 15.6199L11.4309 12.0199V11.9399L7.50093 8.3799C7.19093 8.0999 7.17094 7.6299 7.45094 7.3199C7.73094 7.0199 8.21094 6.9899 8.51094 7.2699L11.4309 9.94989V6.52989C11.4309 5.54989 11.9709 5.18989 12.2009 5.07989C12.4309 4.96989 13.0509 4.78989 13.8009 5.41989L16.2209 7.43989C16.5509 7.70989 16.7409 8.1099 16.7509 8.5199C16.7609 8.9299 16.5909 9.32989 16.2709 9.61989L13.6609 12.0099L16.2709 14.3999C16.5809 14.6899 16.7609 15.0899 16.7509 15.4999C16.7409 15.9099 16.5509 16.2999 16.2209 16.5799L13.8009 18.5999C13.3809 18.9399 13.0009 19.0299 12.7109 19.0299ZM12.9309 13.2999V17.3599L15.2609 15.4099L12.9309 13.2999ZM12.9309 6.63989V10.6399L15.2609 8.49989L12.9309 6.63989Z"
        fill="currentColor"
      />
    </Svg>
  );
};

const BluetoothLinear = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M5.64014 18.64L17.9901 7.31998C18.5001 6.84998 18.4901 6.09997 17.9501 5.64997L14.1001 2.43998C13.1001 1.60998 12.2801 1.98998 12.2801 3.28998V20.71C12.2801 22.01 13.1001 22.39 14.1001 21.56L17.9501 18.35C18.4901 17.9 18.5001 17.15 17.9901 16.68L5.64014 5.35996"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

const BluetoothOutline = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M13.1299 22.7501C12.8599 22.7501 12.6498 22.6801 12.4998 22.6101C12.1398 22.4401 11.5298 21.9701 11.5298 20.7101V14.2601L6.13986 19.2001C5.83986 19.4801 5.35983 19.4601 5.07983 19.1501C4.79983 18.8401 4.81985 18.3701 5.12985 18.0901L11.5298 12.2201V11.7701L5.12985 5.90008C4.81985 5.62008 4.79983 5.15008 5.07983 4.84008C5.35983 4.54008 5.83986 4.51009 6.13986 4.79009L11.5298 9.73009V3.28008C11.5298 2.02008 12.1398 1.54009 12.4998 1.38009C12.8598 1.21009 13.6098 1.05007 14.5798 1.86007L18.4298 5.07009C18.8498 5.42009 19.0998 5.9201 19.1098 6.4501C19.1198 6.98009 18.8998 7.49007 18.4898 7.86007L13.9898 11.9901L18.4898 16.1201C18.8898 16.4901 19.1198 17.0101 19.1098 17.5301C19.0998 18.0601 18.8498 18.5601 18.4298 18.9101L14.5798 22.1201C14.0098 22.6101 13.5099 22.7501 13.1299 22.7501ZM13.0298 13.1501V20.7101C13.0298 21.0801 13.1098 21.2401 13.1498 21.2601C13.1598 21.2501 13.3398 21.2101 13.6198 20.9801L17.4698 17.7701C17.5598 17.6901 17.6098 17.6001 17.6098 17.5001C17.6098 17.4001 17.5699 17.3101 17.4799 17.2301L13.0298 13.1501ZM13.1198 2.75008C13.1098 2.76008 13.0298 2.93009 13.0298 3.29009V10.8501L17.4799 6.77007C17.5699 6.69007 17.6098 6.60008 17.6098 6.50008C17.6098 6.40008 17.5598 6.31009 17.4698 6.23009L13.6098 3.02007C13.3498 2.80007 13.1798 2.75008 13.1198 2.75008Z"
        fill="currentColor"
      />
    </Svg>
  );
};

const BluetoothTwotone = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M5.63965 18.64L17.9896 7.31998C18.4996 6.84998 18.4896 6.09997 17.9496 5.64997L14.0996 2.43998C13.0996 1.60998 12.2796 1.98998 12.2796 3.28998V20.71C12.2796 22.01 13.0996 22.39 14.0996 21.56L17.9496 18.35C18.4896 17.9 18.4996 17.15 17.9896 16.68L5.63965 5.35996"
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
  bold: BluetoothBold,
  broken: BluetoothBroken,
  bulk: BluetoothBulk,
  linear: BluetoothLinear,
  outline: BluetoothOutline,
  twotone: BluetoothTwotone,
};

export const BluetoothIcon = ({
  variant = defaultOptions.variant,
  className,
  ...props
}: IconProps) => {
  const textClasses = useContext(TextClassContext);
  const Component = variants[variant];
  return <Component className={cn(textClasses, className)} {...props} />;
};

export default BluetoothIcon;
