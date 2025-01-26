import { useContext } from "react";
import { Path, Svg } from "unative/lib/svg";
import { cn } from "unative/lib/utils";
import { TextClassContext } from "unative/ui/text";

import type { IconProps, IconVariants } from "../types/icons-type";

const BluetoothRectangleBold = ({
  size = 24,
  className,
  ...props
}: IconProps) => {
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
        d="M12.9004 16.3302L14.5704 14.9402L12.9004 13.4102V16.3302Z"
        fill="currentColor"
      />
      <Path
        d="M12.9004 10.5919L14.5704 9.06188L12.9004 7.67188V10.5919Z"
        fill="currentColor"
      />
      <Path
        d="M15 2H9C6 2 4 4 4 7V17C4 20 6 22 9 22H15C18 22 20 20 20 17V7C20 4 18 2 15 2ZM15.72 13.95C16.01 14.22 16.17 14.59 16.16 14.97C16.15 15.35 15.97 15.72 15.67 15.97L13.6 17.7C13.22 18.02 12.87 18.11 12.6 18.11C12.38 18.11 12.21 18.05 12.11 18.01C11.89 17.91 11.39 17.58 11.39 16.67V14L9.09 16.11C8.79 16.39 8.31 16.37 8.03 16.06C7.75 15.75 7.77 15.28 8.08 15L11.36 12L8.08 8.99C7.78 8.71 7.76 8.24 8.04 7.93C8.32 7.63 8.8 7.6 9.1 7.88L11.4 10V7.33C11.4 6.43 11.9 6.1 12.12 5.99C12.33 5.89 12.91 5.71 13.61 6.29L15.67 8.01C15.97 8.26 16.15 8.63 16.16 9.01C16.17 9.39 16.01 9.77 15.72 10.03L13.58 12L15.72 13.95Z"
        fill="currentColor"
      />
    </Svg>
  );
};

const BluetoothRectangleBroken = ({
  size = 24,
  className,
  ...props
}: IconProps) => {
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
        d="M8.58984 15.56L15.2098 9.49002C15.4898 9.24002 15.4798 8.84004 15.1898 8.60004L13.1299 6.88004C12.5899 6.43004 12.1599 6.64003 12.1599 7.34003V16.67C12.1599 17.37 12.5999 17.57 13.1299 17.13L15.1898 15.41C15.4798 15.17 15.4898 14.77 15.2098 14.52L8.58984 8.45005"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M4 7C4 4 6 2 9 2H15C18 2 20 4 20 7V17C20 20 18 22 15 22H9C6 22 4 20 4 17V11.03"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

const BluetoothRectangleBulk = ({
  size = 24,
  className,
  ...props
}: IconProps) => {
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
        d="M15 22H9C6 22 4 20 4 17V7C4 4 6 2 9 2H15C18 2 20 4 20 7V17C20 20 18 22 15 22Z"
        fill="currentColor"
      />
      <Path
        d="M12.5991 18.1101C12.3791 18.1101 12.2091 18.0501 12.1091 18.0101C11.8891 17.9101 11.3891 17.5801 11.3891 16.6701V14.0001L9.08906 16.1101C8.78906 16.3901 8.30907 16.3701 8.02907 16.0601C7.74907 15.7501 7.76905 15.2801 8.07905 15.0001L11.3591 11.9901L8.07905 8.98012C7.76905 8.70012 7.74907 8.23012 8.02907 7.92012C8.30907 7.62012 8.78906 7.5901 9.08906 7.8701L11.3891 9.98012V7.32011C11.3891 6.42011 11.8891 6.09012 12.1091 5.98012C12.3191 5.88012 12.8991 5.7001 13.5991 6.2801L15.6591 8.00011C15.9591 8.25011 16.1391 8.62011 16.1491 9.00011C16.1591 9.38011 15.9991 9.76009 15.7091 10.0201L13.5791 11.9701L15.7091 13.9201C15.9991 14.1901 16.1591 14.5601 16.1491 14.9401C16.1391 15.3201 15.9591 15.6901 15.6591 15.9401L13.5991 17.6601C13.2191 18.0201 12.8691 18.1101 12.5991 18.1101ZM12.8991 13.4101V16.3301L14.5691 14.9401L12.8991 13.4101ZM12.8991 7.67012V10.5901L14.5691 9.0601L12.8991 7.67012Z"
        fill="currentColor"
      />
    </Svg>
  );
};

const BluetoothRectangleLinear = ({
  size = 24,
  className,
  ...props
}: IconProps) => {
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
        d="M8.58997 15.56L15.21 9.49002C15.49 9.24002 15.48 8.84004 15.19 8.60004L13.13 6.88004C12.59 6.43004 12.16 6.64003 12.16 7.34003V16.67C12.16 17.37 12.6 17.57 13.13 17.13L15.19 15.41C15.48 15.17 15.49 14.77 15.21 14.52L8.58997 8.45005"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M15 22H9C6 22 4 20 4 17V7C4 4 6 2 9 2H15C18 2 20 4 20 7V17C20 20 18 22 15 22Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

const BluetoothRectangleOutline = ({
  size = 24,
  className,
  ...props
}: IconProps) => {
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
        d="M12.6 18.1099C12.38 18.1099 12.21 18.0499 12.11 18.0099C11.89 17.9099 11.3901 17.5799 11.3901 16.6699V13.9999L9.09004 16.1099C8.79004 16.3899 8.31004 16.3699 8.03004 16.0599C7.75004 15.7499 7.77003 15.2799 8.08003 14.9999L11.36 11.9899L8.08003 8.97994C7.77003 8.69994 7.75004 8.22994 8.03004 7.91994C8.31004 7.61994 8.79004 7.58993 9.09004 7.86993L11.3901 9.97994V7.31994C11.3901 6.41994 11.89 6.08994 12.11 5.97994C12.32 5.87994 12.9 5.70993 13.6 6.27993L15.66 7.99993C15.96 8.24993 16.14 8.61993 16.15 8.99993C16.16 9.37993 16 9.75992 15.71 10.0199L13.58 11.9699L15.71 13.9199C16 14.1899 16.16 14.5599 16.15 14.9399C16.14 15.3199 15.96 15.6899 15.66 15.9399L13.6 17.6599C13.22 18.0199 12.87 18.1099 12.6 18.1099ZM12.9 13.4099V16.3299L14.5701 14.9399L12.9 13.4099ZM12.9 7.66994V10.5899L14.5701 9.05993L12.9 7.66994Z"
        fill="currentColor"
      />
      <Path
        d="M15 22.75H9C5.56 22.75 3.25 20.44 3.25 17V7C3.25 3.56 5.56 1.25 9 1.25H15C18.44 1.25 20.75 3.56 20.75 7V17C20.75 20.44 18.44 22.75 15 22.75ZM9 2.75C6.42 2.75 4.75 4.42 4.75 7V17C4.75 19.58 6.42 21.25 9 21.25H15C17.58 21.25 19.25 19.58 19.25 17V7C19.25 4.42 17.58 2.75 15 2.75H9Z"
        fill="currentColor"
      />
    </Svg>
  );
};

const BluetoothRectangleTwotone = ({
  size = 24,
  className,
  ...props
}: IconProps) => {
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
        d="M8.58984 15.5599L15.2098 9.4899C15.4898 9.2399 15.4798 8.83992 15.1898 8.59992L13.1299 6.87992C12.5899 6.42992 12.1599 6.63991 12.1599 7.33991V16.6699C12.1599 17.3699 12.5999 17.5699 13.1299 17.1299L15.1898 15.4099C15.4798 15.1699 15.4898 14.7699 15.2098 14.5199L8.58984 8.44992"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M15 22H9C6 22 4 20 4 17V7C4 4 6 2 9 2H15C18 2 20 4 20 7V17C20 20 18 22 15 22Z"
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
  bold: BluetoothRectangleBold,
  broken: BluetoothRectangleBroken,
  bulk: BluetoothRectangleBulk,
  linear: BluetoothRectangleLinear,
  outline: BluetoothRectangleOutline,
  twotone: BluetoothRectangleTwotone,
};

export const BluetoothRectangleIcon = ({
  variant = "linear",
  className,
  ...props
}: IconProps) => {
  const textClasses = useContext(TextClassContext);
  const Component = variants[variant];
  return <Component className={cn(textClasses, className)} {...props} />;
};
