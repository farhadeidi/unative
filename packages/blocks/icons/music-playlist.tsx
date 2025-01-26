import { G, Path, Svg } from "unative/lib/svg";
import { cn } from "unative/lib/utils";

import type { IconProps, IconVariants } from "../types/icons-type";

const MusicPlaylistBold = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M18 5.25H6C5.59 5.25 5.25 4.91 5.25 4.5C5.25 4.09 5.59 3.75 6 3.75H18C18.41 3.75 18.75 4.09 18.75 4.5C18.75 4.91 18.41 5.25 18 5.25Z"
        fill="currentColor"
      />
      <Path
        d="M15 2.75H9C8.59 2.75 8.25 2.41 8.25 2C8.25 1.59 8.59 1.25 9 1.25H15C15.41 1.25 15.75 1.59 15.75 2C15.75 2.41 15.41 2.75 15 2.75Z"
        fill="currentColor"
      />
      <Path
        d="M13.9091 16.2109C13.5691 16.2109 13.2891 16.4909 13.2891 16.8309C13.2891 17.1709 13.5691 17.4509 13.9091 17.4509C14.2491 17.4509 14.5291 17.1709 14.5291 16.8309C14.5291 16.4909 14.2491 16.2109 13.9091 16.2109Z"
        fill="currentColor"
      />
      <Path
        d="M9.50953 17.7389C9.50953 17.3989 9.22953 17.1289 8.88953 17.1289C8.54953 17.1289 8.26953 17.4089 8.26953 17.7489C8.26953 18.0889 8.54953 18.3689 8.88953 18.3689C9.22953 18.3589 9.50953 18.0789 9.50953 17.7389Z"
        fill="currentColor"
      />
      <Path
        d="M18 7H6C3.8 7 2 8.8 2 11V18C2 20.2 3.8 22 6 22H18C20.2 22 22 20.2 22 18V11C22 8.8 20.2 7 18 7ZM16.03 12.46V16.83C16.03 16.85 16.02 16.86 16.02 16.88C15.99 18.02 15.06 18.95 13.91 18.95C12.74 18.95 11.79 18 11.79 16.83C11.79 15.66 12.74 14.71 13.91 14.71C14.13 14.71 14.33 14.75 14.53 14.81V13.44L11.01 14.4V17.73V17.74C11.01 18.91 10.06 19.86 8.89 19.86C7.72 19.86 6.77 18.91 6.77 17.74C6.77 16.57 7.72 15.62 8.89 15.62C9.11 15.62 9.31 15.66 9.51 15.72V13.82V12.22C9.51 11.33 10.06 10.61 10.91 10.39L13.64 9.64C14.52 9.41 15.06 9.64 15.37 9.88C15.67 10.11 16.03 10.58 16.03 11.47V12.46Z"
        fill="currentColor"
      />
    </Svg>
  );
};

const MusicPlaylistBroken = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M2 12C2 8.5 4 7 7 7H17C20 7 22 8.5 22 12V17C22 20.5 20 22 17 22H7C4 22 2 20.5 2 17V16.17"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M16 4.5H18"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M6 4.5H13.17"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M9 2H15"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M8.88953 19.1099C9.64616 19.1099 10.2595 18.4965 10.2595 17.7399C10.2595 16.9832 9.64616 16.3699 8.88953 16.3699C8.1329 16.3699 7.51953 16.9832 7.51953 17.7399C7.51953 18.4965 8.1329 19.1099 8.88953 19.1099Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M15.2798 16.83V11.4799C15.2798 10.3399 14.5698 10.18 13.8398 10.38L11.0997 11.13C10.5997 11.27 10.2598 11.6599 10.2598 12.2299V13.18V13.82V17.74"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M13.9091 18.2C14.6657 18.2 15.2791 17.5866 15.2791 16.83C15.2791 16.0733 14.6657 15.46 13.9091 15.46C13.1524 15.46 12.5391 16.0733 12.5391 16.83C12.5391 17.5866 13.1524 18.2 13.9091 18.2Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M10.2598 13.83L15.2798 12.46"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

const MusicPlaylistBulk = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M18 5.25H6C5.59 5.25 5.25 4.91 5.25 4.5C5.25 4.09 5.59 3.75 6 3.75H18C18.41 3.75 18.75 4.09 18.75 4.5C18.75 4.91 18.41 5.25 18 5.25Z"
        fill="currentColor"
      />
      <Path
        d="M15 2.75H9C8.59 2.75 8.25 2.41 8.25 2C8.25 1.59 8.59 1.25 9 1.25H15C15.41 1.25 15.75 1.59 15.75 2C15.75 2.41 15.41 2.75 15 2.75Z"
        fill="currentColor"
      />
      <Path
        opacity="0.4"
        d="M18 7H6C3.8 7 2 8.8 2 11V18C2 20.2 3.8 22 6 22H18C20.2 22 22 20.2 22 18V11C22 8.8 20.2 7 18 7Z"
        fill="currentColor"
      />
      <Path
        d="M15.3695 9.89019C15.0695 9.65019 14.5195 9.4202 13.6395 9.6502L10.9095 10.4002C10.0595 10.6202 9.50952 11.3402 9.50952 12.2302V13.8302V15.7302C9.30952 15.6702 9.10953 15.6302 8.88953 15.6302C7.71953 15.6302 6.76953 16.5802 6.76953 17.7502C6.76953 18.9202 7.71953 19.8702 8.88953 19.8702C10.0595 19.8702 11.0095 18.9202 11.0095 17.7502V17.7402V14.4101L14.5295 13.4502V14.8202C14.3295 14.7602 14.1295 14.7201 13.9095 14.7201C12.7395 14.7201 11.7895 15.6702 11.7895 16.8402C11.7895 18.0102 12.7395 18.9602 13.9095 18.9602C15.0595 18.9602 15.9995 18.0402 16.0195 16.8902C16.0195 16.8702 16.0295 16.8602 16.0295 16.8402V12.4701V11.4902C16.0295 10.5902 15.6695 10.1202 15.3695 9.89019ZM8.88953 18.3602C8.54953 18.3602 8.26953 18.0802 8.26953 17.7402C8.26953 17.4002 8.54953 17.1202 8.88953 17.1202C9.22953 17.1202 9.49952 17.3902 9.50952 17.7302C9.50952 18.0802 9.22953 18.3602 8.88953 18.3602ZM13.9095 17.4502C13.5695 17.4502 13.2895 17.1702 13.2895 16.8302C13.2895 16.4902 13.5695 16.2102 13.9095 16.2102C14.2495 16.2102 14.5295 16.4902 14.5295 16.8302C14.5295 17.1702 14.2495 17.4502 13.9095 17.4502Z"
        fill="currentColor"
      />
    </Svg>
  );
};

const MusicPlaylistLinear = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M17 22H7C4 22 2 20.5 2 17V12C2 8.5 4 7 7 7H17C20 7 22 8.5 22 12V17C22 20.5 20 22 17 22Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M6 4.5H18"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M9 2H15"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M8.89001 19.1099C9.64664 19.1099 10.26 18.4965 10.26 17.7399C10.26 16.9832 9.64664 16.3699 8.89001 16.3699C8.13338 16.3699 7.52002 16.9832 7.52002 17.7399C7.52002 18.4965 8.13338 19.1099 8.89001 19.1099Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M15.28 16.83V11.4799C15.28 10.3399 14.57 10.18 13.84 10.38L11.1 11.13C10.6 11.27 10.26 11.6599 10.26 12.2299V13.18V13.82V17.74"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M13.91 18.2C14.6667 18.2 15.2801 17.5866 15.2801 16.83C15.2801 16.0733 14.6667 15.46 13.91 15.46C13.1534 15.46 12.54 16.0733 12.54 16.83C12.54 17.5866 13.1534 18.2 13.91 18.2Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M10.26 13.83L15.28 12.46"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

const MusicPlaylistOutline = ({
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
        d="M17 22.75H7C3.35 22.75 1.25 20.65 1.25 17V12C1.25 8.35 3.35 6.25 7 6.25H17C20.65 6.25 22.75 8.35 22.75 12V17C22.75 20.65 20.65 22.75 17 22.75ZM7 7.75C4.14 7.75 2.75 9.14 2.75 12V17C2.75 19.86 4.14 21.25 7 21.25H17C19.86 21.25 21.25 19.86 21.25 17V12C21.25 9.14 19.86 7.75 17 7.75H7Z"
        fill="currentColor"
      />
      <Path
        d="M18 5.25H6C5.59 5.25 5.25 4.91 5.25 4.5C5.25 4.09 5.59 3.75 6 3.75H18C18.41 3.75 18.75 4.09 18.75 4.5C18.75 4.91 18.41 5.25 18 5.25Z"
        fill="currentColor"
      />
      <Path
        d="M15 2.75H9C8.59 2.75 8.25 2.41 8.25 2C8.25 1.59 8.59 1.25 9 1.25H15C15.41 1.25 15.75 1.59 15.75 2C15.75 2.41 15.41 2.75 15 2.75Z"
        fill="currentColor"
      />
      <Path
        d="M8.88953 19.8601C7.71953 19.8601 6.76953 18.9101 6.76953 17.7401C6.76953 16.5701 7.71953 15.6201 8.88953 15.6201C10.0595 15.6201 11.0095 16.5701 11.0095 17.7401C11.0095 18.9101 10.0595 19.8601 8.88953 19.8601ZM8.88953 17.1201C8.54953 17.1201 8.26953 17.4001 8.26953 17.7401C8.26953 18.0801 8.54953 18.3601 8.88953 18.3601C9.22953 18.3601 9.50952 18.0801 9.50952 17.7401C9.50952 17.4001 9.22953 17.1201 8.88953 17.1201Z"
        fill="currentColor"
      />
      <Path
        d="M10.2598 18.4901C9.84977 18.4901 9.50977 18.1501 9.50977 17.7401V12.2301C9.50977 11.3501 10.0598 10.6401 10.8998 10.4101L13.6398 9.66011C14.5098 9.42011 15.0597 9.65015 15.3597 9.89015C15.6597 10.1201 16.0198 10.5901 16.0198 11.4801V16.8301C16.0198 17.2401 15.6798 17.5801 15.2698 17.5801C14.8598 17.5801 14.5198 17.2401 14.5198 16.8301V11.4801C14.5198 11.2001 14.4598 11.0901 14.4398 11.0801C14.4198 11.0701 14.2998 11.0301 14.0198 11.1101L11.2897 11.8601C11.0397 11.9301 10.9998 12.1001 10.9998 12.2401V17.7501C11.0098 18.1501 10.6698 18.4901 10.2598 18.4901Z"
        fill="currentColor"
      />
      <Path
        d="M13.9091 18.95C12.7391 18.95 11.7891 18 11.7891 16.83C11.7891 15.66 12.7391 14.71 13.9091 14.71C15.0791 14.71 16.0291 15.66 16.0291 16.83C16.0291 18 15.0791 18.95 13.9091 18.95ZM13.9091 16.21C13.5691 16.21 13.2891 16.49 13.2891 16.83C13.2891 17.17 13.5691 17.45 13.9091 17.45C14.2491 17.45 14.5291 17.17 14.5291 16.83C14.5291 16.49 14.2491 16.21 13.9091 16.21Z"
        fill="currentColor"
      />
      <Path
        d="M10.2604 14.5801C9.93042 14.5801 9.63039 14.3601 9.54039 14.0301C9.43039 13.6301 9.67042 13.2201 10.0704 13.1101L15.0804 11.7401C15.4904 11.6301 15.8904 11.8701 16.0004 12.2701C16.1104 12.6701 15.8704 13.0801 15.4704 13.1901L10.4604 14.5601C10.3904 14.5701 10.3304 14.5801 10.2604 14.5801Z"
        fill="currentColor"
      />
    </Svg>
  );
};

const MusicPlaylistTwotone = ({
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
        d="M17 22H7C4 22 2 20.5 2 17V12C2 8.5 4 7 7 7H17C20 7 22 8.5 22 12V17C22 20.5 20 22 17 22Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M6 4.5H18"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M9 2H15"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <G opacity="0.4">
        <Path
          d="M8.88953 19.1101C9.64616 19.1101 10.2595 18.4967 10.2595 17.7401C10.2595 16.9835 9.64616 16.3701 8.88953 16.3701C8.1329 16.3701 7.51953 16.9835 7.51953 17.7401C7.51953 18.4967 8.1329 19.1101 8.88953 19.1101Z"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <Path
          d="M15.2798 16.83V11.4799C15.2798 10.3399 14.5698 10.18 13.8398 10.38L11.0997 11.13C10.5997 11.27 10.2598 11.6599 10.2598 12.2299V13.18V13.82V17.74"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <Path
          d="M13.9091 18.2C14.6657 18.2 15.2791 17.5866 15.2791 16.83C15.2791 16.0733 14.6657 15.46 13.9091 15.46C13.1524 15.46 12.5391 16.0733 12.5391 16.83C12.5391 17.5866 13.1524 18.2 13.9091 18.2Z"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <Path
          d="M10.2598 13.83L15.2798 12.46"
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
  bold: MusicPlaylistBold,
  broken: MusicPlaylistBroken,
  bulk: MusicPlaylistBulk,
  linear: MusicPlaylistLinear,
  outline: MusicPlaylistOutline,
  twotone: MusicPlaylistTwotone,
};

export const MusicPlaylistIcon = ({
  variant = "linear",
  ...props
}: IconProps) => {
  const Component = variants[variant];
  return <Component {...props} />;
};
