import { useContext } from "react";
import { Path, Svg } from "unative/lib/svg";
import { cn } from "unative/lib/utils";
import { TextClassContext } from "unative/ui/text";

import { iconDefaultOptions } from "../icons-configuration";
import type { IconProps, IconVariants } from "../types/icons-type";

const CloudSunnyBold = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M20.6117 10.8305C19.8417 9.91045 18.8517 9.31045 17.7017 9.05045C17.4417 7.89045 16.9917 6.89045 16.3317 6.06045C16.3117 6.03045 16.2917 6.00045 16.2717 5.98045C14.0717 3.32045 10.4717 3.33045 8.04172 4.71045C5.96172 5.90045 4.19172 8.41045 5.12172 11.9904C2.99172 12.5105 2.01172 14.3704 2.01172 16.0504C2.01172 17.9304 3.24172 20.0404 5.98172 20.2404H16.3217C16.3317 20.2404 16.3517 20.2404 16.3617 20.2404C17.7817 20.2404 19.1417 19.7105 20.1917 18.7505C22.7017 16.5304 22.3717 12.9104 20.6117 10.8305Z"
        fill="currentColor"
      />
      <Path
        d="M21.7592 8.74172C21.7592 9.08172 21.7192 9.41172 21.6192 9.73172C20.8892 8.88172 19.9592 8.25172 18.9292 7.86172C18.6092 6.86172 18.1492 5.97172 17.5492 5.19172C17.5192 5.15172 17.4892 5.11172 17.4492 5.06172C17.6392 5.02172 17.8392 5.01172 18.0292 5.01172C20.0892 5.01172 21.7592 6.68172 21.7592 8.74172Z"
        fill="currentColor"
      />
    </Svg>
  );
};

const CloudSunnyBroken = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M7.25945 5.43006C9.73945 3.42006 13.7595 3.32006 15.9995 6.03006V6.04006C16.6995 6.90006 17.2295 8.04006 17.4695 9.49006C18.7995 9.66006 19.8795 10.3101 20.6495 11.2301C22.3995 13.3001 22.5495 16.6801 20.2695 18.6801C19.2795 19.5901 17.9795 20.0901 16.6295 20.0801H5.53945C0.869454 19.7401 0.859454 12.9401 5.53945 12.6001H5.58945C5.10945 11.2601 5.00945 10.0401 5.17945 8.96006"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M7.25984 13.0101C6.73984 12.7501 6.16984 12.6101 5.58984 12.6001"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M15.8496 9.92001C16.3696 9.66001 16.9396 9.52001 17.5196 9.51001"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M21.97 8.5C21.97 9.6 21.46 10.59 20.65 11.23C19.88 10.31 18.8 9.66 17.47 9.49C17.23 8.04 16.7 6.9 16 6.04V6.03C16.63 5.39 17.51 5 18.47 5C20.4 5 21.97 6.57 21.97 8.5Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

const CloudSunnyBulk = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M20.6098 10.83C19.8398 9.90996 18.8498 9.30996 17.6998 9.04996C17.4398 7.88996 16.9898 6.88996 16.3298 6.05996C16.3098 6.02996 16.2898 5.99996 16.2698 5.97996C14.0698 3.31996 10.4698 3.32996 8.03977 4.70996C5.95977 5.89996 4.18977 8.40996 5.11977 11.99C2.98977 12.51 2.00977 14.37 2.00977 16.05C2.00977 17.93 3.23977 20.04 5.97977 20.24H16.3198C16.3298 20.24 16.3498 20.24 16.3598 20.24C17.7798 20.24 19.1398 19.71 20.1898 18.75C22.6998 16.53 22.3698 12.91 20.6098 10.83Z"
        fill="currentColor"
      />
      <Path
        d="M21.7609 8.74001C21.7609 9.64001 21.4409 10.5 20.8609 11.16C20.7909 11.05 20.7009 10.94 20.6109 10.83C19.8509 9.92001 18.8509 9.30001 17.7009 9.05001C17.4509 7.89001 16.9909 6.90001 16.3309 6.07001C16.3209 6.04001 16.2909 6.01001 16.2709 5.99001C16.1709 5.87001 16.0609 5.76001 15.9609 5.65001C16.5709 5.23001 17.2709 5.01001 18.0309 5.01001C20.0909 5.01001 21.7609 6.68001 21.7609 8.74001Z"
        fill="currentColor"
      />
    </Svg>
  );
};

const CloudSunnyLinear = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M20.2699 18.68C19.2799 19.59 17.9799 20.09 16.6299 20.08H5.53994C0.869942 19.74 0.859942 12.94 5.53994 12.6H5.58994C2.88994 5.06002 12.1199 1.34002 15.9999 6.03002V6.04002C16.6999 6.90002 17.2299 8.04002 17.4699 9.49002C18.7999 9.66002 19.8799 10.31 20.6499 11.23C22.3999 13.3 22.5499 16.68 20.2699 18.68Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M7.26009 13.01C6.74009 12.75 6.17009 12.61 5.59009 12.6"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M15.8501 9.92001C16.3701 9.66001 16.9401 9.52001 17.5201 9.51001"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M21.97 8.5C21.97 9.6 21.46 10.59 20.65 11.23C19.88 10.31 18.8 9.66 17.47 9.49C17.23 8.04 16.7 6.9 16 6.04V6.03C16.63 5.39 17.51 5 18.47 5C20.4 5 21.97 6.57 21.97 8.5Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

const CloudSunnyOutline = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M16.6693 20.8299C16.6493 20.8299 16.6393 20.8299 16.6293 20.8299H5.5393C2.5993 20.6199 1.2793 18.3499 1.2793 16.3399C1.2793 14.5399 2.3293 12.5399 4.6093 11.9899C3.6093 8.14995 5.5093 5.45995 7.7493 4.18995C10.3493 2.70995 14.2193 2.69995 16.5693 5.54995C16.5893 5.57995 16.6093 5.60995 16.6293 5.63995C17.3293 6.52995 17.8193 7.59995 18.0993 8.83995C19.3293 9.10995 20.3893 9.76995 21.2193 10.7499C23.1093 12.9799 23.4693 16.8599 20.7693 19.2399C19.6493 20.2699 18.1993 20.8299 16.6693 20.8299ZM11.4893 4.69995C10.4293 4.69995 9.3793 4.98995 8.4993 5.48995C6.0793 6.86995 5.2593 9.42995 6.2993 12.3499C6.3793 12.5799 6.3493 12.8399 6.2093 13.0299C6.0693 13.2199 5.8393 13.3499 5.5993 13.3499C3.6593 13.4899 2.7893 14.9499 2.7893 16.3399C2.7893 17.7299 3.6593 19.1899 5.5993 19.3399H16.6393C17.7993 19.3499 18.9193 18.9199 19.7693 18.1399L19.7793 18.1299C21.8093 16.3499 21.5093 13.4199 20.0793 11.7299C19.3793 10.8999 18.4493 10.3899 17.3793 10.2499C17.0493 10.2099 16.7893 9.95995 16.7393 9.62995C16.5293 8.38995 16.0893 7.34995 15.4293 6.52995C15.4093 6.50995 15.3993 6.47995 15.3793 6.45995C14.3193 5.21995 12.8993 4.69995 11.4893 4.69995Z"
        fill="currentColor"
      />
      <Path
        d="M7.25984 13.7601C7.14984 13.7601 7.02984 13.7301 6.92984 13.6801C6.50984 13.4701 6.04984 13.3601 5.57984 13.3501C5.16984 13.3401 4.83984 13.0001 4.83984 12.5901C4.84984 12.1801 5.23984 11.8401 5.59984 11.8501C6.28984 11.8601 6.97984 12.0301 7.58984 12.3401C7.95984 12.5201 8.10984 12.9801 7.92984 13.3501C7.79984 13.6101 7.53984 13.7601 7.25984 13.7601Z"
        fill="currentColor"
      />
      <Path
        d="M15.85 10.67C15.57 10.67 15.31 10.52 15.18 10.25C14.99 9.87998 15.15 9.42998 15.52 9.23998C16.14 8.92998 16.83 8.75998 17.51 8.74998C17.91 8.73998 18.27 9.06998 18.27 9.48998C18.28 9.89998 17.95 10.25 17.53 10.25C17.07 10.26 16.6 10.37 16.18 10.58C16.07 10.64 15.96 10.67 15.85 10.67Z"
        fill="currentColor"
      />
      <Path
        d="M20.65 11.98C20.44 11.98 20.22 11.89 20.07 11.71C19.38 10.88 18.44 10.37 17.37 10.23C17.04 10.19 16.78 9.94 16.73 9.61C16.52 8.37 16.08 7.33 15.42 6.51C15.31 6.38 15.25 6.21 15.25 6.04C15.25 5.84 15.33 5.64 15.47 5.5C16.27 4.69 17.33 4.25 18.47 4.25C20.81 4.25 22.72 6.16 22.72 8.5C22.72 9.8 22.14 11.01 21.12 11.82C20.98 11.93 20.82 11.98 20.65 11.98ZM18.11 8.84C19.07 9.05 19.94 9.5 20.66 10.16C21.02 9.69 21.22 9.11 21.22 8.5C21.22 6.98 19.99 5.75 18.47 5.75C17.95 5.75 17.45 5.89 17.02 6.17C17.53 6.94 17.89 7.84 18.11 8.84Z"
        fill="currentColor"
      />
    </Svg>
  );
};

const CloudSunnyTwotone = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M20.2695 18.6801C19.2795 19.5901 17.9795 20.0901 16.6295 20.0801H5.53945C0.869454 19.7401 0.859454 12.9401 5.53945 12.6001H5.58945C2.88945 5.06014 12.1195 1.34014 15.9995 6.03014V6.04014C16.6995 6.90014 17.2295 8.04014 17.4695 9.49014C18.7995 9.66014 19.8795 10.3101 20.6495 11.2301C22.3995 13.3001 22.5495 16.6801 20.2695 18.6801Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M7.25984 13.0101C6.73984 12.7501 6.16984 12.6101 5.58984 12.6001"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M15.8496 9.91977C16.3696 9.65977 16.9396 9.51977 17.5196 9.50977"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        opacity="0.4"
        d="M21.97 8.5C21.97 9.6 21.46 10.59 20.65 11.23C19.88 10.31 18.8 9.66 17.47 9.49C17.23 8.04 16.7 6.9 16 6.04V6.03C16.63 5.39 17.51 5 18.47 5C20.4 5 21.97 6.57 21.97 8.5Z"
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
  bold: CloudSunnyBold,
  broken: CloudSunnyBroken,
  bulk: CloudSunnyBulk,
  linear: CloudSunnyLinear,
  outline: CloudSunnyOutline,
  twotone: CloudSunnyTwotone,
};

export const CloudSunnyIcon = ({
  variant = iconDefaultOptions.variant,
  className,
  ...props
}: IconProps) => {
  const textClasses = useContext(TextClassContext);
  const Component = variants[variant];
  return <Component className={cn(textClasses, className)} {...props} />;
};
