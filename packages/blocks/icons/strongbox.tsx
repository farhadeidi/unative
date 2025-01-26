import { G, Path, Svg } from "unative/lib/svg";
import { cn } from "unative/lib/utils";

import type { IconProps, IconVariants } from "../types/icons-type";

const StrongboxBold = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M13.25 12.5802V14.5602C13.25 15.2502 12.69 15.8102 12 15.8102C11.31 15.8102 10.75 15.2502 10.75 14.5602V12.5802C10.39 12.3602 10.11 12.0402 9.91 11.6602H3C2.45 11.6602 2 12.1102 2 12.6602V16.1902C2 19.4002 4.6 22.0002 7.81 22.0002H16.18C19.4 22.0002 22 19.4002 22 16.1902V12.6602C22 12.1102 21.55 11.6602 21 11.6602H14.09C13.89 12.0402 13.61 12.3602 13.25 12.5802Z"
        fill="currentColor"
      />
      <Path
        d="M16.19 2H7.81C4.6 2 2 4.6 2 7.81V9.16C2 9.71 2.45 10.16 3 10.16H9.67C9.9 8.84 11.21 7.9 12.64 8.28C13.44 8.49 14.09 9.14 14.3 9.94C14.32 10.01 14.32 10.09 14.33 10.16H21C21.55 10.16 22 9.71 22 9.16V7.81C22 4.6 19.4 2 16.19 2Z"
        fill="currentColor"
      />
    </Svg>
  );
};

const StrongboxBroken = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M2 15C2 20 4 22 9 22H15C20 22 22 20 22 15V9C22 4 20 2 15 2H9C4 2 2 4 2 9V10.91H9.64999"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M14.3492 10.9101C14.2492 11.6201 13.8291 12.2201 13.2491 12.5801V14.5601C13.2491 15.2501 12.6891 15.8101 11.9991 15.8101C11.3091 15.8101 10.7491 15.2501 10.7491 14.5601V12.5801C10.1691 12.2201 9.74914 11.6201 9.64914 10.9101C9.62914 10.8001 9.61914 10.6801 9.61914 10.5601C9.61914 9.04012 11.0592 7.86012 12.6392 8.28012C13.4392 8.49012 14.0891 9.14012 14.2991 9.94012C14.3891 10.2701 14.3992 10.6001 14.3492 10.9101Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeMiterlimit="10"
      />
      <Path
        d="M17.9996 10.9099H14.3496"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

const StrongboxBulk = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M22 10.1599H14.33C14.32 10.0899 14.32 10.0099 14.3 9.93991C14.09 9.13991 13.44 8.48991 12.64 8.27991C11.2 7.89991 9.89001 8.83991 9.67001 10.1599H2V11.6599H9.91C10.11 12.0399 10.39 12.3599 10.75 12.5799V14.5599C10.75 15.2499 11.31 15.8099 12 15.8099C12.69 15.8099 13.25 15.2499 13.25 14.5599V12.5799C13.61 12.3599 13.89 12.0399 14.09 11.6599H22V10.1599Z"
        fill="currentColor"
      />
    </Svg>
  );
};

const StrongboxLinear = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M9 22H15C20 22 22 20 22 15V9C22 4 20 2 15 2H9C4 2 2 4 2 9V15C2 20 4 22 9 22Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M14.3511 10.9101C14.2511 11.6201 13.8311 12.2201 13.2511 12.5801V14.5601C13.2511 15.2501 12.6911 15.8101 12.0011 15.8101C11.3111 15.8101 10.7511 15.2501 10.7511 14.5601V12.5801C10.1711 12.2201 9.75109 11.6201 9.65109 10.9101C9.63109 10.8001 9.62109 10.6801 9.62109 10.5601C9.62109 9.04012 11.0611 7.86012 12.6411 8.28012C13.4411 8.49012 14.0911 9.14012 14.3011 9.94012C14.3911 10.2701 14.4011 10.6001 14.3511 10.9101Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeMiterlimit="10"
      />
      <Path
        d="M22.0016 10.9102H14.3516"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeMiterlimit="10"
      />
      <Path
        d="M9.64999 10.9099H2"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeMiterlimit="10"
      />
    </Svg>
  );
};

const StrongboxOutline = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M15 22.75H9C3.57 22.75 1.25 20.43 1.25 15V9C1.25 3.57 3.57 1.25 9 1.25H15C20.43 1.25 22.75 3.57 22.75 9V15C22.75 20.43 20.43 22.75 15 22.75ZM9 2.75C4.39 2.75 2.75 4.39 2.75 9V15C2.75 19.61 4.39 21.25 9 21.25H15C19.61 21.25 21.25 19.61 21.25 15V9C21.25 4.39 19.61 2.75 15 2.75H9Z"
        fill="currentColor"
      />
      <Path
        d="M12.0011 16.5601C10.9011 16.5601 10.0011 15.6601 10.0011 14.5601V12.9601C9.4111 12.4701 9.0111 11.7801 8.9111 11.0101C8.8911 10.8901 8.87109 10.7201 8.87109 10.5601C8.87109 9.5901 9.31109 8.6901 10.0911 8.0901C10.8711 7.4901 11.8711 7.3001 12.8311 7.5501C13.8811 7.8301 14.7511 8.69011 15.0211 9.74011C15.1311 10.1501 15.1611 10.5801 15.0911 11.0101C14.9811 11.7701 14.5911 12.4601 14.0011 12.9501V14.5501C14.0011 15.6601 13.1011 16.5601 12.0011 16.5601ZM11.9911 8.9401C11.6311 8.9401 11.2911 9.0501 11.0011 9.2801C10.6011 9.5901 10.3711 10.0601 10.3711 10.5601C10.3711 10.6301 10.3711 10.7101 10.3911 10.7701C10.4611 11.2701 10.7311 11.6801 11.1511 11.9401L11.5011 12.1601V14.5601C11.5011 14.8401 11.7211 15.0601 12.0011 15.0601C12.2811 15.0601 12.5011 14.8401 12.5011 14.5601V12.1601L12.8511 11.9401C13.2611 11.6801 13.5411 11.2701 13.6011 10.8001V10.7801C13.6411 10.5601 13.6311 10.3401 13.5711 10.1301C13.4311 9.58011 12.9811 9.1401 12.4411 9.0001C12.2911 8.9601 12.1411 8.9401 11.9911 8.9401Z"
        fill="currentColor"
      />
      <Path
        d="M21.9996 10.1602H14.3496V11.6602H21.9996V10.1602Z"
        fill="currentColor"
      />
      <Path
        d="M9.64999 10.1602H2V11.6602H9.64999V10.1602Z"
        fill="currentColor"
      />
    </Svg>
  );
};

const StrongboxTwotone = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M9 22H15C20 22 22 20 22 15V9C22 4 20 2 15 2H9C4 2 2 4 2 9V15C2 20 4 22 9 22Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <G opacity="0.4">
        <Path
          d="M14.3511 10.9101C14.2511 11.6201 13.8311 12.2201 13.2511 12.5801V14.5601C13.2511 15.2501 12.6911 15.8101 12.0011 15.8101C11.3111 15.8101 10.7511 15.2501 10.7511 14.5601V12.5801C10.1711 12.2201 9.75109 11.6201 9.65109 10.9101C9.63109 10.8001 9.62109 10.6801 9.62109 10.5601C9.62109 9.04012 11.0611 7.86012 12.6411 8.28012C13.4411 8.49012 14.0911 9.14012 14.3011 9.94012C14.3911 10.2701 14.4011 10.6001 14.3511 10.9101Z"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeMiterlimit="10"
        />
        <Path
          d="M21.9996 10.9102H14.3496"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeMiterlimit="10"
        />
        <Path
          d="M9.64999 10.9102H2"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeMiterlimit="10"
        />
      </G>
    </Svg>
  );
};

const variants: IconVariants = {
  bold: StrongboxBold,
  broken: StrongboxBroken,
  bulk: StrongboxBulk,
  linear: StrongboxLinear,
  outline: StrongboxOutline,
  twotone: StrongboxTwotone,
};

export const StrongboxIcon = ({ variant = "linear", ...props }: IconProps) => {
  const Component = variants[variant];
  return <Component {...props} />;
};
