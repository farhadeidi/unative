import { G, Path, Svg } from "unative/lib/svg";
import { cn } from "unative/lib/utils";

import type { IconProps, IconVariants } from "../types/icons-type";

const GridEditBold = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M21.3304 14.67C20.2804 13.62 19.4504 13.96 18.7304 14.67L14.5804 18.82C14.4204 18.98 14.2704 19.29 14.2304 19.51L14.0004 21.1C13.9204 21.67 14.3204 22.08 14.8904 21.99L16.4804 21.76C16.7004 21.73 17.0104 21.57 17.1704 21.41L21.3204 17.26C22.0504 16.55 22.3804 15.72 21.3304 14.67Z"
        fill="currentColor"
      />
      <Path
        d="M6.74683 2.06549C7.29669 1.99425 7.75 2.45112 7.75 3.00557V6.8C7.75 7.35229 7.30228 7.8 6.75 7.8H3C2.44772 7.8 1.9918 7.35027 2.05867 6.80204C2.38633 4.11548 4.07187 2.41205 6.74683 2.06549Z"
        fill="currentColor"
      />
      <Path
        d="M20.93 7.8H17.25C16.6977 7.8 16.25 7.35228 16.25 6.8V3.00625C16.25 2.45153 16.7041 1.99459 17.2542 2.06633C19.8878 2.40978 21.5645 4.0681 21.93 6.68C22.01 7.27 21.53 7.8 20.93 7.8Z"
        fill="currentColor"
      />
      <Path
        d="M6.75 16.3008C7.30228 16.3008 7.75 16.7485 7.75 17.3008V20.9208C7.75 21.5208 7.22 22.0008 6.62 21.9208C4.05088 21.5385 2.43008 19.8918 2.07373 17.3109C1.99752 16.7589 2.4555 16.3008 3.01274 16.3008H6.75Z"
        fill="currentColor"
      />
      <Path
        d="M7.75 10.3008C7.75 9.7485 7.30228 9.30078 6.75 9.30078H3C2.44772 9.30078 2 9.7485 2 10.3008V13.8008C2 14.3531 2.44772 14.8008 3 14.8008H6.75C7.30228 14.8008 7.75 14.3531 7.75 13.8008V10.3008Z"
        fill="currentColor"
      />
      <Path
        d="M14.75 10.3008C14.75 9.7485 14.3023 9.30078 13.75 9.30078H10.25C9.69772 9.30078 9.25 9.7485 9.25 10.3008V13.8008C9.25 14.3531 9.69772 14.8008 10.25 14.8008H13.75C14.3 14.8008 14.75 14.3508 14.75 13.8008V10.3008Z"
        fill="currentColor"
      />
      <Path
        d="M14.75 3C14.75 2.44771 14.3023 2 13.75 2H10.25C9.69772 2 9.25 2.44772 9.25 3V6.8C9.25 7.35229 9.69772 7.8 10.25 7.8H13.75C14.3023 7.8 14.75 7.35228 14.75 6.8V3Z"
        fill="currentColor"
      />
    </Svg>
  );
};

const GridEditBroken = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M22 11V9C22 4 20 2 15 2H9C4 2 2 4 2 9V15C2 20 4 22 9 22H10"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M5.0293 8.5H21.9993"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M2.0293 15.5H11.9993"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M8.50977 21.99V2.01001"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M15.5098 11.99V2.01001"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M18.7304 14.6701L14.5804 18.82C14.4204 18.98 14.2704 19.29 14.2304 19.51L14.0004 21.1C13.9204 21.67 14.3204 22.08 14.8904 21.99L16.4804 21.76C16.7004 21.73 17.0104 21.5701 17.1704 21.4101L21.3204 17.26C22.0304 16.55 22.3704 15.7101 21.3204 14.6601C20.2804 13.6201 19.4504 13.9501 18.7304 14.6701Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M18.1406 15.26C18.4906 16.52 19.4806 17.5 20.7406 17.86"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

const GridEditBulk = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M21.3304 14.67C20.2804 13.62 19.4504 13.96 18.7304 14.67L14.5804 18.82C14.4204 18.98 14.2704 19.29 14.2304 19.51L14.0004 21.0999C13.9204 21.6699 14.3204 22.08 14.8904 21.99L16.4804 21.76C16.7004 21.73 17.0104 21.5699 17.1704 21.4099L21.3204 17.26C22.0504 16.55 22.3804 15.72 21.3304 14.67Z"
        fill="currentColor"
      />
      <Path
        d="M8.38971 2.16992V8.61993H1.92969V7.93994C1.92969 4.32994 4.0797 2.17993 7.6897 2.17993H8.38971V2.16992Z"
        fill="currentColor"
      />
      <Path
        d="M21.7698 7.93018C21.7698 8.31018 21.4598 8.61017 21.0898 8.61017H15.3398V2.16016H16.0098C19.1898 2.17016 21.7698 4.75018 21.7698 7.93018Z"
        fill="currentColor"
      />
      <Path
        d="M8.38947 15.5503V21.3103C8.38947 21.6903 8.07947 21.9903 7.70947 21.9903H7.69946C4.51946 21.9903 1.93945 19.4103 1.93945 16.2303V15.5503H8.38947Z"
        fill="currentColor"
      />
      <Path
        opacity="0.4"
        d="M8.39948 8.61035H1.93945V15.5504H8.39948V8.61035Z"
        fill="currentColor"
      />
      <Path
        d="M15.3306 8.61035V14.5504C15.3306 15.1004 14.8806 15.5504 14.3306 15.5504H8.39062V8.61035H15.3306Z"
        fill="currentColor"
      />
      <Path
        opacity="0.4"
        d="M15.3306 2.16992H8.39062V8.61993H15.3306V2.16992Z"
        fill="currentColor"
      />
    </Svg>
  );
};

const GridEditLinear = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M22 11V9C22 4 20 2 15 2H9C4 2 2 4 2 9V15C2 20 4 22 9 22H10"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M2.03003 8.5H22"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M2.03003 15.5H12"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M8.51001 21.99V2.01001"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M15.51 11.99V2.01001"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M18.73 14.6701L14.58 18.82C14.42 18.98 14.27 19.29 14.23 19.51L14 21.1C13.92 21.67 14.32 22.08 14.89 21.99L16.48 21.76C16.7 21.73 17.01 21.5701 17.17 21.4101L21.32 17.26C22.03 16.55 22.37 15.7101 21.32 14.6601C20.28 13.6201 19.45 13.9501 18.73 14.6701Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M18.14 15.26C18.49 16.52 19.48 17.5 20.74 17.86"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

const GridEditOutline = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M10 22.75H9C3.57 22.75 1.25 20.43 1.25 15V9C1.25 3.57 3.57 1.25 9 1.25H15C20.43 1.25 22.75 3.57 22.75 9V11C22.75 11.41 22.41 11.75 22 11.75C21.59 11.75 21.25 11.41 21.25 11V9C21.25 4.39 19.61 2.75 15 2.75H9C4.39 2.75 2.75 4.39 2.75 9V15C2.75 19.61 4.39 21.25 9 21.25H10C10.41 21.25 10.75 21.59 10.75 22C10.75 22.41 10.41 22.75 10 22.75Z"
        fill="currentColor"
      />
      <Path
        d="M22.0012 9.25H2.03125C1.62125 9.25 1.28125 8.91 1.28125 8.5C1.28125 8.09 1.62125 7.75 2.03125 7.75H22.0012C22.4112 7.75 22.7512 8.09 22.7512 8.5C22.7512 8.91 22.4112 9.25 22.0012 9.25Z"
        fill="currentColor"
      />
      <Path
        d="M12.0012 16.25H2.03125C1.62125 16.25 1.28125 15.91 1.28125 15.5C1.28125 15.09 1.62125 14.75 2.03125 14.75H12.0012C12.4112 14.75 12.7512 15.09 12.7512 15.5C12.7512 15.91 12.4112 16.25 12.0012 16.25Z"
        fill="currentColor"
      />
      <Path
        d="M8.50977 22.74C8.09977 22.74 7.75977 22.4 7.75977 21.99V2.02002C7.75977 1.61002 8.09977 1.27002 8.50977 1.27002C8.91977 1.27002 9.25977 1.61002 9.25977 2.02002V21.99C9.25977 22.4 8.92977 22.74 8.50977 22.74Z"
        fill="currentColor"
      />
      <Path
        d="M15.5098 12.74C15.0998 12.74 14.7598 12.4 14.7598 11.99V2.02002C14.7598 1.61002 15.0998 1.27002 15.5098 1.27002C15.9198 1.27002 16.2598 1.61002 16.2598 2.02002V11.99C16.2598 12.4 15.9298 12.74 15.5098 12.74Z"
        fill="currentColor"
      />
      <Path
        d="M14.7611 22.7502C14.3411 22.7502 13.9611 22.6001 13.6811 22.3201C13.3411 21.9901 13.1911 21.5002 13.2711 20.9902L13.5011 19.4002C13.5511 19.0202 13.7811 18.5602 14.0611 18.2802L18.2111 14.1302C18.7511 13.5902 19.2811 13.3102 19.8411 13.2502C20.5311 13.1802 21.2211 13.4802 21.8711 14.1302C22.5211 14.7802 22.8211 15.4602 22.7511 16.1602C22.7011 16.7202 22.4111 17.2502 21.8711 17.7902L17.721 21.9401C17.451 22.2101 16.991 22.4402 16.601 22.5002L15.0211 22.7302C14.9311 22.7402 14.8411 22.7502 14.7611 22.7502ZM20.0211 14.7502C20.0111 14.7502 19.991 14.7502 19.981 14.7502C19.781 14.7702 19.5411 14.9201 19.2611 15.2001L15.1111 19.3502C15.0611 19.4002 14.991 19.5502 14.981 19.6202L14.7511 21.2101L16.3811 21.0302C16.4511 21.0202 16.6011 20.9402 16.6511 20.9002L20.8011 16.7502C21.0811 16.4702 21.2311 16.2302 21.2511 16.0302C21.2711 15.8002 21.1211 15.5301 20.8011 15.2101C20.5011 14.9001 20.2411 14.7502 20.0211 14.7502Z"
        fill="currentColor"
      />
      <Path
        d="M20.74 18.6101C20.67 18.6101 20.61 18.6001 20.54 18.5801C19.04 18.1601 17.84 16.9601 17.42 15.4601C17.31 15.0601 17.5401 14.6502 17.9401 14.5402C18.3501 14.4302 18.75 14.6602 18.86 15.0602C19.14 16.0602 19.9401 16.8601 20.9401 17.1401C21.3401 17.2501 21.5701 17.6702 21.4601 18.0602C21.3701 18.4002 21.06 18.6101 20.74 18.6101Z"
        fill="currentColor"
      />
    </Svg>
  );
};

const GridEditTwotone = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M22 11V9C22 4 20 2 15 2H9C4 2 2 4 2 9V15C2 20 4 22 9 22H10"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <G opacity="0.4">
        <Path
          d="M2.0293 8.5H21.9993"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <Path
          d="M2.0293 15.5H11.9993"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <Path
          d="M8.50977 21.9897V2.00977"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <Path
          d="M15.5098 11.9897V2.00977"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </G>
      <Path
        d="M18.7304 14.6701L14.5804 18.82C14.4204 18.98 14.2704 19.29 14.2304 19.51L14.0004 21.1C13.9204 21.67 14.3204 22.08 14.8904 21.99L16.4804 21.76C16.7004 21.73 17.0104 21.5701 17.1704 21.4101L21.3204 17.26C22.0304 16.55 22.3704 15.7101 21.3204 14.6601C20.2804 13.6201 19.4504 13.9501 18.7304 14.6701Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M18.1406 15.2598C18.4906 16.5198 19.4806 17.4997 20.7406 17.8597"
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
  bold: GridEditBold,
  broken: GridEditBroken,
  bulk: GridEditBulk,
  linear: GridEditLinear,
  outline: GridEditOutline,
  twotone: GridEditTwotone,
};

export const GridEditIcon = ({ variant = "linear", ...props }: IconProps) => {
  const Component = variants[variant];
  return <Component {...props} />;
};
