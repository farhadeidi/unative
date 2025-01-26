import { useContext } from "react";
import { Path, Svg } from "unative/lib/svg";
import { cn } from "unative/lib/utils";
import { TextClassContext } from "unative/ui/text";

import { iconDefaultOptions } from "../icons-configuration";
import type { IconProps, IconVariants } from "../types/icons-type";

const BluetoothCircleBold = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M12.9004 10.5919L14.5704 9.06188L12.9004 7.67188V10.5919Z"
        fill="currentColor"
      />
      <Path
        d="M12.9004 16.3302L14.5704 14.9402L12.9004 13.4102V16.3302Z"
        fill="currentColor"
      />
      <Path
        d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM15.72 13.95C16.01 14.22 16.17 14.59 16.16 14.97C16.15 15.35 15.97 15.72 15.67 15.97L13.6 17.7C13.22 18.02 12.87 18.11 12.6 18.11C12.38 18.11 12.21 18.05 12.11 18.01C11.89 17.91 11.39 17.58 11.39 16.67V14L9.09 16.11C8.79 16.39 8.31 16.37 8.03 16.06C7.75 15.75 7.77 15.28 8.08 15L11.36 12L8.08 8.99C7.78 8.71 7.76 8.24 8.04 7.93C8.32 7.63 8.8 7.6 9.1 7.88L11.4 10V7.33C11.4 6.43 11.9 6.1 12.12 5.99C12.33 5.89 12.91 5.72 13.61 6.29L15.67 8.01C15.97 8.26 16.15 8.63 16.16 9.01C16.17 9.39 16.01 9.77 15.72 10.03L13.58 12L15.72 13.95Z"
        fill="currentColor"
      />
    </Svg>
  );
};

const BluetoothCircleBroken = ({
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
        d="M4 6C2.75 7.67 2 9.75 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2C10.57 2 9.2 2.30001 7.97 2.85001"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

const BluetoothCircleBulk = ({ size = 24, className, ...props }: IconProps) => {
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
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12.1186 6.00216C12.6993 5.72427 13.2667 6.01769 13.61 6.30377L15.668 8.02214C15.6685 8.02256 15.669 8.02298 15.6696 8.02341C16.3049 8.5507 16.3362 9.48518 15.7137 10.0455L13.5767 12.0049L15.7137 13.9644C16.3362 14.5247 16.3049 15.4591 15.6696 15.9864C15.6691 15.9869 15.6685 15.9873 15.668 15.9877L13.6105 17.7056L13.6089 17.707C13.2656 17.992 12.7036 18.276 12.1282 18.0067C11.5513 17.7367 11.4099 17.121 11.4099 16.6699V13.9918L9.09672 16.1127C8.79142 16.3927 8.31699 16.3721 8.03705 16.0668C7.75712 15.7615 7.77768 15.2871 8.08298 15.0071L11.3572 12.0049L8.08298 9.00274C7.77768 8.7228 7.75712 8.24837 8.03705 7.94307C8.31699 7.63777 8.79142 7.61721 9.09672 7.89714L11.4099 10.0181V7.33993C11.4099 6.89698 11.5439 6.27721 12.1186 6.00216ZM12.9099 13.4286L14.5698 14.9506L12.9099 16.3366V13.4286ZM12.9099 10.5813V7.6733L14.5698 9.05926L12.9099 10.5813Z"
        fill="currentColor"
      />
    </Svg>
  );
};

const BluetoothCircleLinear = ({
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
        d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

const BluetoothCircleOutline = ({
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
        d="M12 22.75C6.07 22.75 1.25 17.93 1.25 12C1.25 6.07 6.07 1.25 12 1.25C17.93 1.25 22.75 6.07 22.75 12C22.75 17.93 17.93 22.75 12 22.75ZM12 2.75C6.9 2.75 2.75 6.9 2.75 12C2.75 17.1 6.9 21.25 12 21.25C17.1 21.25 21.25 17.1 21.25 12C21.25 6.9 17.1 2.75 12 2.75Z"
        fill="currentColor"
      />
    </Svg>
  );
};

const BluetoothCircleTwotone = ({
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
        d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
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
  bold: BluetoothCircleBold,
  broken: BluetoothCircleBroken,
  bulk: BluetoothCircleBulk,
  linear: BluetoothCircleLinear,
  outline: BluetoothCircleOutline,
  twotone: BluetoothCircleTwotone,
};

export const BluetoothCircleIcon = ({
  variant = iconDefaultOptions.variant,
  className,
  ...props
}: IconProps) => {
  const textClasses = useContext(TextClassContext);
  const Component = variants[variant];
  return <Component className={cn(textClasses, className)} {...props} />;
};
