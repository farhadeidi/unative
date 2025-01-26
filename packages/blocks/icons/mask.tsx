import { useContext } from "react";
import { G, Path, Svg } from "unative/lib/svg";
import { cn } from "unative/lib/utils";
import { TextClassContext } from "unative/ui/text";

import type { IconProps, IconVariants } from "../types/icons-type";

const MaskBold = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M16.2402 9.51974L20.9502 14.2297C21.2302 14.5097 21.7202 14.3597 21.8002 13.9697C21.9302 13.3297 22.0002 12.6697 22.0002 11.9997C22.0002 9.70974 21.2202 7.59974 19.9302 5.91974C19.7502 5.67974 19.3902 5.66974 19.1802 5.87974L16.2402 8.81974C16.0502 9.00974 16.0502 9.32974 16.2402 9.51974Z"
        fill="currentColor"
      />
      <Path
        d="M14.4805 10.58L12.7105 12.35C12.5105 12.55 12.5105 12.86 12.7105 13.06L18.5305 18.88C18.7305 19.08 19.0505 19.08 19.2405 18.88C19.8605 18.23 20.3905 17.5 20.8205 16.71C20.9205 16.52 20.8805 16.27 20.7305 16.12L15.1905 10.58C14.9905 10.39 14.6705 10.39 14.4805 10.58Z"
        fill="currentColor"
      />
      <Path
        d="M10.9393 14.1203L9.1793 15.8803C8.9793 16.0803 8.9793 16.3903 9.1793 16.5903L14.0993 21.5203C14.2293 21.6503 14.4193 21.7003 14.5893 21.6503C15.5193 21.4003 16.3993 21.0203 17.1993 20.5203C17.4693 20.3503 17.5093 19.9703 17.2793 19.7403L11.6493 14.1103C11.4493 13.9303 11.1293 13.9303 10.9393 14.1203Z"
        fill="currentColor"
      />
      <Path
        d="M18.0797 4.06967C16.0997 2.53967 13.5297 1.73967 10.7697 2.06967C6.25967 2.60967 2.60967 6.26967 2.06967 10.7697C1.73967 13.5297 2.53967 16.0897 4.06967 18.0797C4.24967 18.3197 4.60967 18.3297 4.81967 18.1197L18.1197 4.81967C18.3297 4.60967 18.3197 4.24967 18.0797 4.06967Z"
        fill="currentColor"
      />
      <Path
        d="M7.39974 17.6695L5.87974 19.1895C5.66974 19.3995 5.67974 19.7595 5.91974 19.9395C7.42974 21.1095 9.27974 21.8495 11.3097 21.9895C11.7397 22.0195 11.9497 21.5095 11.6397 21.1995L8.10974 17.6695C7.91974 17.4695 7.59974 17.4695 7.39974 17.6695Z"
        fill="currentColor"
      />
    </Svg>
  );
};

const MaskBroken = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M2 12C2 14.76 3.11999 17.26 4.92999 19.07L19.07 4.93C17.26 3.12 14.76 2 12 2C8.07 2 4.67003 4.27 3.03003 7.57"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M21.9997 11.9999C21.9997 17.5199 17.5197 21.9999 11.9997 21.9999C9.23969 21.9999 6.73969 20.8799 4.92969 19.0699L19.0697 4.92993C20.8797 6.73993 21.9997 9.23993 21.9997 11.9999Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M7.75977 16.24L13.4097 21.9"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M11.2891 12.71L17.8691 19.28"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M14.8301 9.16992L21.1201 15.4699"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

const MaskBulk = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M22 12C22 17.04 18.26 21.21 13.41 21.9C12.95 21.97 12.48 22 12 22C9.24 22 6.73999 20.88 4.92999 19.07C3.11999 17.26 2 14.76 2 12C2 6.48 6.48 2 12 2C14.76 2 17.26 3.12 19.07 4.93C20.88 6.74 22 9.24 22 12Z"
        fill="currentColor"
      />
      <Path
        d="M14.83 10.2299L12.3499 12.7099L18.8799 19.2399C18.5199 19.5899 18.1299 19.9099 17.7199 20.1999L11.2899 13.7699L8.81995 16.2399L13.9399 21.3699C14.0499 21.4799 14.12 21.6199 14.15 21.7599C14.15 21.7599 14.15 21.7599 14.15 21.7699C13.91 21.8199 13.6599 21.8699 13.4099 21.8999C13.0899 21.9499 12.7699 21.9799 12.4399 21.9899L7.75995 17.2999L5.47992 19.5799C5.28992 19.4199 5.10993 19.2499 4.92993 19.0699C4.74993 18.8899 4.57992 18.7099 4.41992 18.5199L18.52 4.41992C18.71 4.57992 18.8899 4.74992 19.0699 4.92992C19.2499 5.10992 19.42 5.28992 19.58 5.47992L15.89 9.16992L21.58 14.8599C21.42 15.3899 21.2199 15.8899 20.9799 16.3799L14.83 10.2299Z"
        fill="currentColor"
      />
    </Svg>
  );
};

const MaskLinear = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M19.07 4.93L4.92999 19.07C3.11999 17.26 2 14.76 2 12C2 6.48 6.48 2 12 2C14.76 2 17.26 3.12 19.07 4.93Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M22 11.9999C22 17.5199 17.52 21.9999 12 21.9999C9.24 21.9999 6.73999 20.8799 4.92999 19.0699L19.07 4.92993C20.88 6.73993 22 9.23993 22 11.9999Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M7.76001 16.24L13.41 21.9"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M11.29 12.71L17.87 19.28"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M14.83 9.16992L21.12 15.4699"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

const MaskOutline = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M11.9993 22.7198C6.0893 22.7198 1.2793 17.9098 1.2793 11.9998C1.2793 6.08979 6.0893 1.27979 11.9993 1.27979C14.6493 1.27979 17.1893 2.25979 19.1493 4.02979C21.4193 6.03979 22.7193 8.94979 22.7193 11.9998C22.7193 15.0498 21.4193 17.9598 19.1393 19.9798C17.1893 21.7498 14.6493 22.7198 11.9993 22.7198ZM11.9993 2.77979C6.9093 2.77979 2.7793 6.91979 2.7793 11.9998C2.7793 17.0798 6.9193 21.2198 11.9993 21.2198C14.2793 21.2198 16.4593 20.3798 18.1493 18.8498C20.1093 17.1098 21.2293 14.6198 21.2293 11.9898C21.2293 9.35979 20.1093 6.86979 18.1593 5.13979C16.4593 3.61979 14.2793 2.77979 11.9993 2.77979Z"
        fill="currentColor"
      />
      <Path
        d="M10.4393 18.9099C10.0693 18.9099 9.6793 18.8299 9.2993 18.6799C6.5593 17.5799 4.7793 14.9499 4.7793 11.9999C4.7793 9.04989 6.5493 6.41989 9.2993 5.31989C10.1693 4.96989 11.0493 5.01989 11.7093 5.45989C12.3493 5.88989 12.7093 6.64989 12.7293 7.59989V16.3899V16.3999C12.7193 17.3499 12.3593 18.1199 11.7093 18.5399C11.3393 18.7899 10.8993 18.9099 10.4393 18.9099ZM10.4393 6.58989C10.2593 6.58989 10.0593 6.62989 9.8593 6.70989C7.6793 7.57989 6.2793 9.65989 6.2793 11.9999C6.2793 14.3399 7.6793 16.4199 9.8593 17.2899C10.2593 17.4499 10.6393 17.4499 10.8793 17.2999C11.1593 17.1099 11.2193 16.6999 11.2293 16.3899V7.60989C11.2293 7.30989 11.1593 6.88989 10.8793 6.69989C10.7593 6.62989 10.6093 6.58989 10.4393 6.58989Z"
        fill="currentColor"
      />
    </Svg>
  );
};

const MaskTwotone = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M4.92999 19.07C3.11999 17.26 2 14.76 2 12C2 6.48 6.48 2 12 2C14.76 2 17.26 3.12 19.07 4.93"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M19.0697 4.93018C20.8797 6.74018 21.9997 9.24018 21.9997 12.0002C21.9997 17.5202 17.5197 22.0002 11.9997 22.0002C9.23969 22.0002 6.73969 20.8802 4.92969 19.0702"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <G opacity="0.4">
        <Path
          d="M19.0697 4.93018L4.92969 19.0702"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <Path
          d="M7.75977 16.2402L13.4097 21.9002"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <Path
          d="M11.2891 12.71L17.8691 19.28"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <Path
          d="M14.8301 9.16992L21.1201 15.4699"
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
  bold: MaskBold,
  broken: MaskBroken,
  bulk: MaskBulk,
  linear: MaskLinear,
  outline: MaskOutline,
  twotone: MaskTwotone,
};

export const MaskIcon = ({
  variant = "linear",
  className,
  ...props
}: IconProps) => {
  const textClasses = useContext(TextClassContext);
  const Component = variants[variant];
  return <Component className={cn(textClasses, className)} {...props} />;
};
