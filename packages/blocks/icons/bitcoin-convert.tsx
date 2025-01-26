import { useContext } from "react";
import { Path, Svg } from "unative/lib/svg";
import { cn } from "unative/lib/utils";
import { TextClassContext } from "unative/ui/text";

import { iconDefaultOptions } from "../icons-configuration";
import type { IconProps, IconVariants } from "../types/icons-type";

const BitcoinConvertBold = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M23.0004 15.2188C22.5904 15.2188 22.2504 15.5588 22.2504 15.9688C22.2504 18.9288 20.1904 21.4087 17.4204 22.0587L17.6904 21.6088C17.9004 21.2488 17.7904 20.7887 17.4304 20.5787C17.0804 20.3687 16.6104 20.4787 16.4004 20.8387L15.3504 22.5887C15.2104 22.8187 15.2104 23.1087 15.3404 23.3387C15.4704 23.5787 15.7204 23.7187 15.9904 23.7187C20.2604 23.7187 23.7404 20.2387 23.7404 15.9688C23.7504 15.5588 23.4104 15.2188 23.0004 15.2188Z"
        fill="currentColor"
      />
      <Path
        d="M8 0.21875C3.73 0.21875 0.25 3.69875 0.25 7.96875C0.25 8.37875 0.59 8.71875 1 8.71875C1.41 8.71875 1.75 8.37875 1.75 7.96875C1.75 5.00875 3.81 2.52875 6.58 1.87875L6.31 2.32875C6.1 2.68875 6.21 3.14875 6.57 3.35875C6.92 3.56875 7.39 3.45875 7.6 3.09875L8.65 1.34875C8.78 1.11875 8.79 0.83875 8.65 0.59875C8.52 0.36875 8.27 0.21875 8 0.21875Z"
        fill="currentColor"
      />
      <Path
        d="M21.5002 8.67C21.5002 11.75 19.2602 14.29 16.3302 14.76C16.3302 14.75 16.3302 14.75 16.3302 14.74C16.0402 11.01 13.0202 7.97 9.24023 7.67C9.71023 4.74 12.2502 2.5 15.3302 2.5C18.7402 2.5 21.5002 5.26 21.5002 8.67Z"
        fill="currentColor"
      />
      <Path
        d="M9.80914 14.2003C9.80914 14.0503 9.63914 13.8203 9.42914 13.8203H7.36914V14.5703H9.42914C9.63914 14.5803 9.80914 14.4103 9.80914 14.2003Z"
        fill="currentColor"
      />
      <Path
        d="M9.82914 16.0781H9.42914H7.36914V16.8281H9.83914C10.1591 16.8281 10.3791 16.6281 10.3791 16.4481C10.3791 16.2681 10.1491 16.0781 9.82914 16.0781Z"
        fill="currentColor"
      />
      <Path
        d="M14.83 14.8484C14.6 11.8184 12.18 9.39844 9.15 9.16844C8.99 9.15844 8.84 9.14844 8.67 9.14844C5.26 9.14844 2.5 11.9084 2.5 15.3284C2.5 18.7384 5.26 21.4984 8.67 21.4984C12.08 21.4984 14.85 18.7384 14.85 15.3284C14.85 15.1584 14.84 15.0084 14.83 14.8484ZM9.83 18.3284H9.17V18.7084C9.17 19.1184 8.83 19.4584 8.42 19.4584C8.01 19.4584 7.67 19.1184 7.67 18.7084V18.3284H6.62C6.21 18.3284 5.87 17.9884 5.87 17.5784V15.3284V13.0784C5.87 12.6684 6.21 12.3284 6.62 12.3284H7.67V11.9484C7.67 11.5384 8.01 11.1984 8.42 11.1984C8.83 11.1984 9.17 11.5384 9.17 11.9484V12.3284H9.43C10.43 12.3284 11.31 13.2084 11.31 14.2084C11.31 14.4984 11.24 14.7684 11.12 15.0184C11.58 15.3584 11.87 15.8784 11.87 16.4584C11.87 17.4884 10.96 18.3284 9.83 18.3284Z"
        fill="currentColor"
      />
    </Svg>
  );
};

const BitcoinConvertBroken = ({
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
        d="M23 15.97C23 19.84 19.87 22.97 16 22.97L17.05 21.22"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M1 7.96997C1 4.09997 4.13 0.969971 8 0.969971L6.95 2.71997"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M6.61914 13.0698H9.42914C10.0491 13.0698 10.5591 13.6298 10.5591 14.1998C10.5591 14.8198 10.0591 15.3298 9.42914 15.3298H6.61914V13.0698Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M6.61914 15.3301H9.83914C10.5491 15.3301 11.1291 15.8301 11.1291 16.4601C11.1291 17.0801 10.5491 17.5901 9.83914 17.5901H6.61914V15.3301Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M8.41992 17.5801V18.7001"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M8.41992 11.95V13.0699"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M2.5 15.33C2.5 11.92 5.26 9.15991 8.67 9.15991C8.83 9.15991 8.98 9.16993 9.15 9.17993C12.18 9.40993 14.6 11.8299 14.83 14.8599C14.84 15.0199 14.85 15.17 14.85 15.34C14.85 18.75 12.09 21.5099 8.68 21.5099C6.55 21.5099 4.67 20.4299 3.56 18.7899"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M21.5002 8.66998C21.5002 12.08 18.7402 14.84 15.3302 14.84H14.8402C14.6102 11.81 12.1902 9.38997 9.16016 9.15997V8.66998C9.16016 5.25998 11.9202 2.5 15.3302 2.5C17.1302 2.5 18.7502 3.27 19.8802 4.5"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

const BitcoinConvertBulk = ({ size = 24, className, ...props }: IconProps) => {
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
        fillRule="evenodd"
        clipRule="evenodd"
        d="M23 15.22C23.4142 15.22 23.75 15.5558 23.75 15.97C23.75 20.2542 20.2842 23.72 16 23.72C15.7298 23.72 15.4805 23.5746 15.3474 23.3395C15.2142 23.1044 15.2179 22.8158 15.3569 22.5841L16.4069 20.8341C16.62 20.4789 17.0807 20.3637 17.4359 20.5769C17.7911 20.79 17.9062 21.2507 17.6931 21.6058L17.4218 22.058C20.1909 21.4156 22.25 18.9365 22.25 15.97C22.25 15.5558 22.5858 15.22 23 15.22Z"
        fill="currentColor"
      />
      <Path
        opacity="0.4"
        fillRule="evenodd"
        clipRule="evenodd"
        d="M6.5782 1.88191C3.8091 2.52434 1.75 5.00339 1.75 7.96997C1.75 8.38418 1.41421 8.71997 1 8.71997C0.585786 8.71997 0.25 8.38418 0.25 7.96997C0.25 3.68576 3.71579 0.219971 8 0.219971C8.2702 0.219971 8.51952 0.365315 8.65265 0.600446C8.78578 0.835578 8.78214 1.12414 8.64312 1.35584L7.59312 3.10584C7.38001 3.46103 6.91931 3.5762 6.56413 3.36309C6.20894 3.14998 6.09377 2.68928 6.30688 2.3341L6.5782 1.88191Z"
        fill="currentColor"
      />
      <Path
        opacity="0.4"
        d="M14.8498 15.33C14.8498 18.74 12.0898 21.4999 8.67977 21.4999C5.26977 21.4999 2.50977 18.74 2.50977 15.33C2.50977 11.92 5.26977 9.15991 8.67977 9.15991C8.83977 9.15991 8.98977 9.16993 9.15977 9.17993C12.1898 9.40993 14.6098 11.8299 14.8398 14.8599C14.8398 15.0099 14.8498 15.16 14.8498 15.33Z"
        fill="currentColor"
      />
      <Path
        d="M21.5002 8.66998C21.5002 12.08 18.7402 14.84 15.3302 14.84H14.8402C14.6102 11.81 12.1902 9.38997 9.16016 9.15997V8.66998C9.16016 5.25998 11.9202 2.5 15.3302 2.5C18.7402 2.5 21.5002 5.25998 21.5002 8.66998Z"
        fill="currentColor"
      />
      <Path
        d="M11.1191 15.0099C11.2391 14.7599 11.3091 14.49 11.3091 14.2C11.3091 13.2 10.4291 12.3199 9.42914 12.3199H9.16914V11.9399C9.16914 11.5299 8.82914 11.1899 8.41914 11.1899C8.00914 11.1899 7.66914 11.5299 7.66914 11.9399V12.3199H6.61914C6.20914 12.3199 5.86914 12.6599 5.86914 13.0699V15.3199V17.5699C5.86914 17.9799 6.20914 18.3199 6.61914 18.3199H7.66914V18.7C7.66914 19.11 8.00914 19.45 8.41914 19.45C8.82914 19.45 9.16914 19.11 9.16914 18.7V18.3199H9.82914C10.9491 18.3199 11.8691 17.4799 11.8691 16.4399C11.8691 15.8699 11.5691 15.3499 11.1191 15.0099ZM7.36914 13.8199H9.42914C9.63914 13.8199 9.80914 14.05 9.80914 14.2C9.80914 14.41 9.63914 14.58 9.42914 14.58H7.36914V13.8199ZM9.82914 16.83H7.35914V16.08H9.41914H9.81914C10.1391 16.08 10.3591 16.28 10.3591 16.46C10.3591 16.64 10.1491 16.83 9.82914 16.83Z"
        fill="currentColor"
      />
    </Svg>
  );
};

const BitcoinConvertLinear = ({
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
        d="M23 15.97C23 19.84 19.87 22.97 16 22.97L17.05 21.22"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M1 7.96997C1 4.09997 4.13 0.969971 8 0.969971L6.95 2.71997"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M6.62 13.0699H9.43C10.05 13.0699 10.56 13.63 10.56 14.2C10.56 14.82 10.06 15.33 9.43 15.33H6.62V13.0699Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M6.62 15.33H9.84C10.55 15.33 11.13 15.83 11.13 16.46C11.13 17.08 10.55 17.59 9.84 17.59H6.62V15.33Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M8.42 17.58V18.7"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M8.42 11.95V13.0699"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M14.85 15.33C14.85 18.74 12.09 21.4999 8.68 21.4999C5.27 21.4999 2.51 18.74 2.51 15.33C2.51 11.92 5.27 9.15991 8.68 9.15991C8.84 9.15991 8.99 9.16993 9.16 9.17993C12.19 9.40993 14.61 11.8299 14.84 14.8599C14.84 15.0099 14.85 15.16 14.85 15.33Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M21.5 8.66998C21.5 12.08 18.74 14.84 15.33 14.84H14.84C14.61 11.81 12.19 9.38997 9.16 9.15997V8.66998C9.16 5.25998 11.92 2.5 15.33 2.5C18.74 2.5 21.5 5.25998 21.5 8.66998Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

const BitcoinConvertOutline = ({
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
        d="M16.0002 23.72C15.7302 23.72 15.4802 23.57 15.3502 23.34C15.2202 23.11 15.2202 22.82 15.3602 22.59L16.4102 20.84C16.6202 20.48 17.0802 20.37 17.4402 20.58C17.8002 20.79 17.9102 21.25 17.7002 21.61L17.4302 22.06C20.1902 21.41 22.2602 18.93 22.2602 15.97C22.2602 15.56 22.6002 15.22 23.0102 15.22C23.4202 15.22 23.7602 15.56 23.7602 15.97C23.7502 20.24 20.2702 23.72 16.0002 23.72Z"
        fill="currentColor"
      />
      <Path
        d="M1 8.71997C0.59 8.71997 0.25 8.37997 0.25 7.96997C0.25 3.69997 3.73 0.219971 8 0.219971C8.27 0.219971 8.52 0.369976 8.65 0.599976C8.78 0.829976 8.78 1.11998 8.64 1.34998L7.59 3.09998C7.38 3.45998 6.92 3.56999 6.56 3.35999C6.2 3.14999 6.09 2.69002 6.3 2.33002L6.57 1.88C3.81 2.53 1.74 5.00997 1.74 7.96997C1.75 8.37997 1.41 8.71997 1 8.71997Z"
        fill="currentColor"
      />
      <Path
        d="M9.4311 16.0801H6.62109C6.21109 16.0801 5.87109 15.7401 5.87109 15.3301V13.0801C5.87109 12.6701 6.21109 12.3301 6.62109 12.3301H9.4311C10.4311 12.3301 11.3111 13.2101 11.3111 14.2101C11.3111 15.2301 10.4611 16.0801 9.4311 16.0801ZM7.37109 14.5801H9.4311C9.6411 14.5801 9.8111 14.4101 9.8111 14.2001C9.8111 14.0501 9.6411 13.8201 9.4311 13.8201H7.37109V14.5801Z"
        fill="currentColor"
      />
      <Path
        d="M9.82938 18.3301H6.60938C6.19938 18.3301 5.85938 17.9901 5.85938 17.5801V15.3301C5.85938 14.9201 6.19938 14.5801 6.60938 14.5801H9.82938C10.9494 14.5801 11.8694 15.4201 11.8694 16.4601C11.8694 17.5001 10.9594 18.3301 9.82938 18.3301ZM7.36937 16.8301H9.83937C10.1594 16.8301 10.3794 16.6301 10.3794 16.4501C10.3794 16.2701 10.1594 16.0701 9.83937 16.0701H7.36937V16.8301Z"
        fill="currentColor"
      />
      <Path
        d="M8.41992 19.4498C8.00992 19.4498 7.66992 19.1098 7.66992 18.6998V17.5698C7.66992 17.1598 8.00992 16.8198 8.41992 16.8198C8.82992 16.8198 9.16992 17.1598 9.16992 17.5698V18.6998C9.16992 19.1198 8.82992 19.4498 8.41992 19.4498Z"
        fill="currentColor"
      />
      <Path
        d="M8.41992 13.8199C8.00992 13.8199 7.66992 13.4799 7.66992 13.0699V11.9399C7.66992 11.5299 8.00992 11.1899 8.41992 11.1899C8.82992 11.1899 9.16992 11.5299 9.16992 11.9399V13.0699C9.16992 13.4899 8.82992 13.8199 8.41992 13.8199Z"
        fill="currentColor"
      />
      <Path
        d="M8.67 22.2499C4.85 22.2499 1.75 19.14 1.75 15.33C1.75 11.52 4.86 8.40991 8.67 8.40991C8.85 8.40991 9.01 8.41993 9.19 8.42993C12.58 8.68993 15.32 11.4299 15.57 14.7999C15.58 15.0199 15.59 15.17 15.59 15.33C15.6 19.14 12.49 22.2499 8.67 22.2499ZM8.67 9.89996C5.68 9.89996 3.25 12.3299 3.25 15.3199C3.25 18.3099 5.68 20.7399 8.67 20.7399C11.66 20.7399 14.1 18.3099 14.1 15.3199C14.1 15.1899 14.09 15.0599 14.08 14.9299C13.88 12.2499 11.73 10.1099 9.09 9.90991C8.96 9.90991 8.82 9.89996 8.67 9.89996Z"
        fill="currentColor"
      />
      <Path
        d="M15.3302 15.6H14.8402C14.4502 15.6 14.1202 15.3 14.0902 14.91C13.8902 12.26 11.7502 10.12 9.10015 9.91998C8.71015 9.88998 8.41016 9.55998 8.41016 9.16998V8.67999C8.41016 4.85999 11.5202 1.76001 15.3402 1.76001C19.1602 1.76001 22.2602 4.86999 22.2602 8.67999C22.2602 12.49 19.1402 15.6 15.3302 15.6ZM9.90016 8.51001C12.7202 9.02001 14.9802 11.27 15.4902 14.1C18.4102 14.01 20.7502 11.61 20.7502 8.67999C20.7502 5.68999 18.3202 3.26001 15.3302 3.26001C12.3902 3.25001 9.99016 5.59001 9.90016 8.51001Z"
        fill="currentColor"
      />
    </Svg>
  );
};

const BitcoinConvertTwotone = ({
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
        d="M23 15.9697C23 19.8397 19.87 22.9697 16 22.9697L17.05 21.2197"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        opacity="0.4"
        d="M1 7.96973C1 4.09973 4.13 0.969727 8 0.969727L6.95 2.71973"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M6.61914 13.0703H9.42914C10.0491 13.0703 10.5591 13.6303 10.5591 14.2003C10.5591 14.8203 10.0591 15.3303 9.42914 15.3303H6.61914V13.0703Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M6.61914 15.3301H9.83914C10.5491 15.3301 11.1291 15.8301 11.1291 16.4601C11.1291 17.0801 10.5491 17.5901 9.83914 17.5901H6.61914V15.3301Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M8.41992 17.5801V18.7001"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M8.41992 11.9502V13.0702"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M14.8498 15.3302C14.8498 18.7402 12.0898 21.5002 8.67977 21.5002C5.26977 21.5002 2.50977 18.7402 2.50977 15.3302C2.50977 11.9202 5.26977 9.16016 8.67977 9.16016C8.83977 9.16016 8.98977 9.17018 9.15977 9.18018C12.1898 9.41018 14.6098 11.8302 14.8398 14.8602C14.8398 15.0102 14.8498 15.1602 14.8498 15.3302Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M21.5002 8.66998C21.5002 12.08 18.7402 14.84 15.3302 14.84H14.8402C14.6102 11.81 12.1902 9.38997 9.16016 9.15997V8.66998C9.16016 5.25998 11.9202 2.5 15.3302 2.5C18.7402 2.5 21.5002 5.25998 21.5002 8.66998Z"
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
  bold: BitcoinConvertBold,
  broken: BitcoinConvertBroken,
  bulk: BitcoinConvertBulk,
  linear: BitcoinConvertLinear,
  outline: BitcoinConvertOutline,
  twotone: BitcoinConvertTwotone,
};

export const BitcoinConvertIcon = ({
  variant = iconDefaultOptions.variant,
  className,
  ...props
}: IconProps) => {
  const textClasses = useContext(TextClassContext);
  const Component = variants[variant];
  return <Component className={cn(textClasses, className)} {...props} />;
};
