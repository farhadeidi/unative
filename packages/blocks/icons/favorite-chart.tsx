import { useContext } from "react";
import { Path, Svg } from "unative/lib/svg";
import { cn } from "unative/lib/utils";
import { TextClassContext } from "unative/ui/text";

import { iconDefaultOptions } from "../icons-configuration";
import type { IconProps, IconVariants } from "../types/icons-type";

const FavoriteChartBold = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M19.1199 14.9414L19.4399 15.5914C19.5999 15.9114 20.0099 16.2114 20.3499 16.2714L20.7799 16.3414C22.0899 16.5614 22.3899 17.5214 21.4599 18.4614L21.0599 18.8614C20.7899 19.1314 20.6499 19.6514 20.7299 20.0314L20.7799 20.2714C21.1399 21.8514 20.2999 22.4614 18.9299 21.6314L18.6399 21.4514C18.2899 21.2414 17.7099 21.2414 17.3599 21.4514L17.0699 21.6314C15.6899 22.4614 14.8599 21.8514 15.2199 20.2714L15.2699 20.0314C15.3499 19.6614 15.2099 19.1314 14.9399 18.8614L14.5399 18.4614C13.6099 17.5114 13.9099 16.5614 15.2199 16.3414L15.6499 16.2714C15.9999 16.2114 16.3999 15.9114 16.5599 15.5914L16.8799 14.9414C17.4999 13.6914 18.4999 13.6914 19.1199 14.9414Z"
        fill="currentColor"
      />
      <Path
        d="M16.19 2H7.81C4.17 2 2 4.17 2 7.81V16.19C2 19.83 4.17 22 7.81 22H13.09C13.44 22 13.69 21.64 13.65 21.29C13.61 20.91 13.63 20.46 13.75 19.94C13.77 19.87 13.75 19.79 13.69 19.73L13.47 19.51C12.62 18.65 12.31 17.61 12.61 16.66C12.92 15.72 13.78 15.06 14.97 14.86L15.27 14.81L15.54 14.27C16.09 13.15 16.99 12.5 18 12.5C19.01 12.5 19.91 13.15 20.46 14.27L20.61 14.58C20.68 14.73 20.82 14.83 20.98 14.86C21.07 14.88 21.16 14.9 21.25 14.92C21.6 15.01 22 14.73 22 14.36V7.81C22 4.17 19.83 2 16.19 2ZM16.26 8.96L13.95 11.94C13.66 12.31 13.25 12.55 12.78 12.6C12.32 12.66 11.85 12.53 11.49 12.24L9.66 10.82C9.59 10.76 9.51 10.76 9.47 10.77C9.43 10.77 9.36 10.79 9.3 10.87L6.92 13.96C6.77 14.15 6.55 14.25 6.32 14.25C6.16 14.25 6 14.2 5.86 14.09C5.53 13.84 5.47 13.37 5.72 13.04L8.1 9.95C8.39 9.58 8.8 9.34 9.27 9.28C9.74 9.22 10.2 9.35 10.57 9.64L12.4 11.08C12.47 11.14 12.54 11.13 12.59 11.13C12.63 11.13 12.7 11.11 12.76 11.03L15.07 8.05C15.32 7.72 15.79 7.66 16.12 7.92C16.46 8.17 16.51 8.64 16.26 8.96Z"
        fill="currentColor"
      />
    </Svg>
  );
};

const FavoriteChartBroken = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M22 13V9C22 4 20 2 15 2H9C4 2 2 4 2 9V15C2 20 4 22 9 22H13"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M7.33008 14.49L9.71008 11.4C10.0501 10.96 10.6801 10.88 11.1201 11.22L12.9501 12.66C13.3901 13 14.0201 12.92 14.3601 12.49L16.6701 9.51001"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M20.5492 16.9799C20.2492 16.9299 19.8892 16.6599 19.7492 16.3799L19.4692 15.8099C18.9292 14.7199 18.0492 14.7199 17.5192 15.8099L17.2392 16.3799C17.0992 16.6599 16.7492 16.9199 16.4392 16.9799L16.0592 17.0399C14.9192 17.2299 14.6492 18.0699 15.4692 18.8999L15.8192 19.2499C16.0492 19.4899 16.1792 19.9499 16.1092 20.2699L16.0592 20.4799C15.7492 21.8599 16.4792 22.3899 17.6792 21.6699L17.9392 21.5199C18.2492 21.3399 18.7492 21.3399 19.0592 21.5199L19.3192 21.6699C20.5292 22.3999 21.2592 21.8599 20.9392 20.4799L20.8892 20.2699"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

const FavoriteChartBulk = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M22 7.81V15.16C21.71 15.02 21.39 14.92 21.03 14.86L20.72 14.81L20.46 14.27C19.91 13.15 19.01 12.5 18 12.5C16.99 12.5 16.09 13.15 15.54 14.27L15.27 14.81L14.97 14.86C13.78 15.06 12.92 15.72 12.61 16.66C12.31 17.61 12.62 18.65 13.47 19.51L13.78 19.82L13.75 19.94C13.55 20.83 13.63 21.51 13.82 22H7.81C4.17 22 2 19.83 2 16.19V7.81C2 4.17 4.17 2 7.81 2H16.19C19.83 2 22 4.17 22 7.81Z"
        fill="currentColor"
      />
      <Path
        d="M19.1199 14.9399L19.4399 15.5899C19.5999 15.9099 20.0099 16.2099 20.3499 16.2699L20.7799 16.3399C22.0899 16.5599 22.3899 17.5199 21.4599 18.4599L21.0599 18.8599C20.7899 19.1299 20.6499 19.6499 20.7299 20.0299L20.7799 20.2699C21.1399 21.8499 20.2999 22.4599 18.9299 21.6299L18.6399 21.4499C18.2899 21.2399 17.7099 21.2399 17.3599 21.4499L17.0699 21.6299C15.6899 22.4599 14.8599 21.8499 15.2199 20.2699L15.2699 20.0299C15.3499 19.6599 15.2099 19.1299 14.9399 18.8599L14.5399 18.4599C13.6099 17.5099 13.9099 16.5599 15.2199 16.3399L15.6499 16.2699C15.9999 16.2099 16.3999 15.9099 16.5599 15.5899L16.8799 14.9399C17.4999 13.6899 18.4999 13.6899 19.1199 14.9399Z"
        fill="currentColor"
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M16.1296 7.91704C16.457 8.17081 16.5167 8.64192 16.2629 8.9693L13.9485 11.955C13.3536 12.7073 12.2567 12.8445 11.4916 12.2533L11.4863 12.2492L9.65976 10.8119C9.54691 10.7262 9.38952 10.7475 9.30382 10.8581C9.30374 10.8582 9.3039 10.858 9.30382 10.8581L6.9243 13.9475C6.67154 14.2756 6.20062 14.3367 5.87246 14.084C5.5443 13.8312 5.48318 13.3603 5.73593 13.0321L8.11666 9.94122C8.71057 9.17263 9.81178 9.03371 10.5787 9.62634L10.5839 9.63038L12.4105 11.0677C12.5245 11.1543 12.6852 11.132 12.7703 11.0265L15.0774 8.05031C15.3312 7.72293 15.8023 7.66327 16.1296 7.91704Z"
        fill="currentColor"
      />
    </Svg>
  );
};

const FavoriteChartLinear = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M22 13V9C22 4 20 2 15 2H9C4 2 2 4 2 9V15C2 20 4 22 9 22H13"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M7.33008 14.49L9.71008 11.4C10.0501 10.96 10.6801 10.88 11.1201 11.22L12.9501 12.66C13.3901 13 14.0201 12.92 14.3601 12.49L16.6701 9.51001"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M19.48 15.8199L19.76 16.3899C19.9 16.6699 20.25 16.9299 20.56 16.9899L20.94 17.0499C22.08 17.2399 22.35 18.0799 21.53 18.9099L21.18 19.2599C20.95 19.4999 20.82 19.9599 20.89 20.2799L20.94 20.4899C21.25 21.8699 20.52 22.3999 19.32 21.6799L19.06 21.5299C18.75 21.3499 18.25 21.3499 17.94 21.5299L17.68 21.6799C16.47 22.4099 15.74 21.8699 16.06 20.4899L16.1099 20.2799C16.1799 19.9599 16.05 19.4999 15.82 19.2599L15.47 18.9099C14.65 18.0799 14.92 17.2399 16.06 17.0499L16.44 16.9899C16.74 16.9399 17.1 16.6699 17.24 16.3899L17.52 15.8199C18.06 14.7299 18.94 14.7299 19.48 15.8199Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

const FavoriteChartOutline = ({
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
        d="M13 22.75H9C3.57 22.75 1.25 20.43 1.25 15V9C1.25 3.57 3.57 1.25 9 1.25H15C20.43 1.25 22.75 3.57 22.75 9V13C22.75 13.41 22.41 13.75 22 13.75C21.59 13.75 21.25 13.41 21.25 13V9C21.25 4.39 19.61 2.75 15 2.75H9C4.39 2.75 2.75 4.39 2.75 9V15C2.75 19.61 4.39 21.25 9 21.25H13C13.41 21.25 13.75 21.59 13.75 22C13.75 22.41 13.41 22.75 13 22.75Z"
        fill="currentColor"
      />
      <Path
        d="M7.33009 15.24C7.17009 15.24 7.0101 15.19 6.8701 15.08C6.5401 14.83 6.48012 14.36 6.73012 14.03L9.11009 10.94C9.40009 10.57 9.81011 10.33 10.2801 10.27C10.7501 10.21 11.2101 10.34 11.5801 10.63L13.4101 12.07C13.4801 12.13 13.5501 12.12 13.6001 12.12C13.6401 12.12 13.7101 12.1 13.7701 12.02L16.0801 9.04C16.3301 8.71 16.8001 8.65001 17.1301 8.91001C17.4601 9.16001 17.5201 9.63001 17.2601 9.96001L14.9501 12.94C14.6601 13.31 14.2501 13.55 13.7801 13.6C13.3201 13.66 12.8501 13.53 12.4901 13.24L10.6601 11.8C10.5901 11.74 10.5101 11.74 10.4701 11.75C10.4301 11.75 10.3601 11.77 10.3001 11.85L7.92012 14.94C7.78012 15.14 7.56009 15.24 7.33009 15.24Z"
        fill="currentColor"
      />
      <Path
        d="M20.2605 22.7502C19.9105 22.7502 19.4604 22.6402 18.9304 22.3202L18.6804 22.1702C18.6104 22.1302 18.4004 22.1302 18.3304 22.1702L18.0804 22.3202C16.9304 23.0102 16.2005 22.7202 15.8805 22.4802C15.5505 22.2402 15.0404 21.6402 15.3404 20.3202L15.3905 20.1102C15.4105 20.0302 15.3504 19.8402 15.3004 19.7802L14.9505 19.4302C14.3605 18.8302 14.1304 18.1302 14.3304 17.5002C14.5304 16.8802 15.1205 16.4402 15.9505 16.3002L16.3304 16.2402C16.4004 16.2202 16.5404 16.1202 16.5804 16.0502L16.8604 15.4802C17.2504 14.6902 17.8505 14.2402 18.5105 14.2402C19.1705 14.2402 19.7705 14.6902 20.1605 15.4802L20.4405 16.0402C20.4805 16.1102 20.6205 16.2102 20.6905 16.2302L21.0705 16.2902C21.9005 16.4302 22.4905 16.8702 22.6905 17.4902C22.8905 18.1102 22.6705 18.8102 22.0705 19.4202L21.7205 19.7702C21.6705 19.8302 21.6105 20.0202 21.6305 20.1002L21.6804 20.3102C21.9804 21.6302 21.4705 22.2302 21.1405 22.4702C20.9605 22.6102 20.6705 22.7502 20.2605 22.7502ZM18.4904 15.7502C18.4804 15.7602 18.3405 15.8602 18.2005 16.1502L17.9205 16.7202C17.6805 17.2102 17.1104 17.6302 16.5804 17.7202L16.2005 17.7802C15.8805 17.8302 15.7705 17.9402 15.7605 17.9602C15.7605 17.9802 15.7904 18.1402 16.0204 18.3702L16.3704 18.7202C16.7804 19.1402 16.9904 19.8602 16.8604 20.4302L16.8104 20.6402C16.7204 21.0302 16.7604 21.2002 16.7804 21.2602C16.8104 21.2402 16.9804 21.2202 17.3104 21.0202L17.5604 20.8702C18.1104 20.5402 18.9005 20.5402 19.4505 20.8702L19.7005 21.0202C20.1105 21.2702 20.2805 21.2402 20.2905 21.2402C20.2505 21.2402 20.3004 21.0402 20.2104 20.6402L20.1605 20.4302C20.0305 19.8502 20.2404 19.1402 20.6504 18.7202L21.0004 18.3702C21.2304 18.1402 21.2605 17.9802 21.2605 17.9502C21.2505 17.9302 21.1405 17.8302 20.8205 17.7702L20.4405 17.7102C19.9005 17.6202 19.3405 17.2002 19.1005 16.7102L18.8205 16.1502C18.6605 15.8502 18.5204 15.7602 18.4904 15.7502Z"
        fill="currentColor"
      />
    </Svg>
  );
};

const FavoriteChartTwotone = ({
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
        d="M22 13V9C22 4 20 2 15 2H9C4 2 2 4 2 9V15C2 20 4 22 9 22H13"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        opacity="0.4"
        d="M7.33008 14.4898L9.71008 11.3998C10.0501 10.9598 10.6801 10.8798 11.1201 11.2198L12.9501 12.6598C13.3901 12.9998 14.0201 12.9198 14.3601 12.4898L16.6701 9.50977"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M19.4802 15.8199L19.7602 16.3899C19.9002 16.6699 20.2502 16.9299 20.5602 16.9899L20.9402 17.0499C22.0802 17.2399 22.3502 18.0799 21.5302 18.9099L21.1802 19.2599C20.9502 19.4999 20.8202 19.9599 20.8902 20.2799L20.9402 20.4899C21.2502 21.8699 20.5202 22.3999 19.3202 21.6799L19.0602 21.5299C18.7502 21.3499 18.2502 21.3499 17.9402 21.5299L17.6802 21.6799C16.4702 22.4099 15.7402 21.8699 16.0602 20.4899L16.1102 20.2799C16.1802 19.9599 16.0502 19.4999 15.8202 19.2599L15.4702 18.9099C14.6502 18.0799 14.9202 17.2399 16.0602 17.0499L16.4402 16.9899C16.7402 16.9399 17.1002 16.6699 17.2402 16.3899L17.5202 15.8199C18.0602 14.7299 18.9402 14.7299 19.4802 15.8199Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

const variants: IconVariants = {
  bold: FavoriteChartBold,
  broken: FavoriteChartBroken,
  bulk: FavoriteChartBulk,
  linear: FavoriteChartLinear,
  outline: FavoriteChartOutline,
  twotone: FavoriteChartTwotone,
};

export const FavoriteChartIcon = ({
  variant = iconDefaultOptions.variant,
  className,
  ...props
}: IconProps) => {
  const textClasses = useContext(TextClassContext);
  const Component = variants[variant];
  return <Component className={cn(textClasses, className)} {...props} />;
};
