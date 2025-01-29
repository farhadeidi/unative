import { useContext } from "react";
import { cn } from "unative/lib/utils";
import { G, Path, Svg } from "unative/ui/svg";
import { TextClassContext } from "unative/ui/text";

import type { IconProps, IconVariants } from "../icon-options";
import { defaultOptions } from "../icon-options";

const BoxTickBold = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M17.6005 5.31125L11.9505 2.27125C11.3505 1.95125 10.6405 1.95125 10.0405 2.27125L4.40047 5.31125C3.99047 5.54125 3.73047 5.98125 3.73047 6.46125C3.73047 6.95125 3.98047 7.39125 4.40047 7.61125L10.0505 10.6512C10.3505 10.8112 10.6805 10.8913 11.0005 10.8913C11.3205 10.8913 11.6605 10.8112 11.9505 10.6512L17.6005 7.61125C18.0105 7.39125 18.2705 6.95125 18.2705 6.46125C18.2705 5.98125 18.0105 5.54125 17.6005 5.31125Z"
        fill="currentColor"
      />
      <Path
        d="M9.12 11.7106L3.87 9.09058C3.46 8.88058 3 8.91058 2.61 9.14058C2.23 9.38058 2 9.79058 2 10.2406V15.2006C2 16.0606 2.48 16.8306 3.25 17.2206L8.5 19.8406C8.68 19.9306 8.88 19.9806 9.08 19.9806C9.31 19.9806 9.55 19.9106 9.76 19.7906C10.14 19.5506 10.37 19.1406 10.37 18.6906V13.7306C10.36 12.8706 9.88 12.1006 9.12 11.7106Z"
        fill="currentColor"
      />
      <Path
        d="M20.0006 10.2406V12.7006C19.5206 12.5606 19.0106 12.5006 18.5006 12.5006C17.1406 12.5006 15.8106 12.9706 14.7606 13.8106C13.3206 14.9406 12.5006 16.6506 12.5006 18.5006C12.5006 18.9906 12.5606 19.4806 12.6906 19.9506C12.5406 19.9306 12.3906 19.8706 12.2506 19.7806C11.8706 19.5506 11.6406 19.1406 11.6406 18.6906V13.7306C11.6406 12.8706 12.1206 12.1006 12.8806 11.7106L18.1306 9.09058C18.5406 8.88058 19.0006 8.91058 19.3906 9.14058C19.7706 9.38058 20.0006 9.79058 20.0006 10.2406Z"
        fill="currentColor"
      />
      <Path
        d="M21.98 15.6695C21.16 14.6595 19.91 14.0195 18.5 14.0195C17.44 14.0195 16.46 14.3895 15.69 15.0095C14.65 15.8295 14 17.0995 14 18.5195C14 19.3595 14.24 20.1595 14.65 20.8395C14.92 21.2895 15.26 21.6795 15.66 21.9995H15.67C16.44 22.6395 17.43 23.0195 18.5 23.0195C19.64 23.0195 20.67 22.5995 21.46 21.8995C21.81 21.5995 22.11 21.2395 22.35 20.8395C22.76 20.1595 23 19.3595 23 18.5195C23 17.4395 22.62 16.4395 21.98 15.6695ZM20.76 17.9595L18.36 20.1795C18.22 20.3095 18.03 20.3795 17.85 20.3795C17.66 20.3795 17.47 20.3095 17.32 20.1595L16.21 19.0495C15.92 18.7595 15.92 18.2795 16.21 17.9895C16.5 17.6995 16.98 17.6995 17.27 17.9895L17.87 18.5895L19.74 16.8595C20.04 16.5795 20.52 16.5995 20.8 16.8995C21.09 17.2095 21.07 17.6795 20.76 17.9595Z"
        fill="currentColor"
      />
    </Svg>
  );
};

const BoxTickBroken = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M3.16992 7.43994L11.9999 12.5499L20.7699 7.46991"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M12 21.61V12.54"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M2.39062 14.83V9.17C2.39062 7.79 3.38061 6.11002 4.59061 5.44002L9.9306 2.48C11.0706 1.84 12.9306 1.84 14.0706 2.48L19.4106 5.44002C20.6206 6.11002 21.6106 7.79 21.6106 9.17V14.83C21.6106 14.88 21.6106 14.92 21.6006 14.97C20.9006 14.36 20.0006 14 19.0006 14C18.0606 14 17.1906 14.33 16.5006 14.88C15.5806 15.61 15.0006 16.74 15.0006 18C15.0006 18.75 15.2106 19.46 15.5806 20.06C15.6706 20.22 15.7806 20.37 15.9006 20.51L14.0706 21.52C12.9306 22.16 11.0706 22.16 9.9306 21.52L4.59061 18.56"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M22.9992 17.91C23.0192 18.66 22.8192 19.37 22.4592 19.98C22.2592 20.34 21.9892 20.6701 21.6892 20.9401C20.9992 21.5801 20.0892 21.9701 19.0792 22.0001C17.6192 22.0301 16.3292 21.2801 15.6192 20.1301C15.2392 19.5401 15.0092 18.8301 14.9992 18.0801C14.9692 16.8201 15.5292 15.6801 16.4292 14.9301C17.1092 14.3701 17.9692 14.0201 18.9092 14.0001C21.1192 13.9501 22.9492 15.7 22.9992 17.91Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M17.4395 18.03L18.4495 18.99L20.5395 16.97"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

const BoxTickBulk = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M19.3504 5.65995L13.0604 2.27C12.4004 1.91 11.6004 1.91 10.9304 2.27L4.64041 5.65995C4.18041 5.90995 3.90039 6.39998 3.90039 6.93998C3.90039 7.47998 4.18041 7.96995 4.64041 8.21995L10.9304 11.61C11.2604 11.79 11.6304 11.88 11.9904 11.88C12.3504 11.88 12.7204 11.79 13.0504 11.61L19.3404 8.21995C19.8004 7.96995 20.0804 7.47998 20.0804 6.93998C20.1004 6.39998 19.8104 5.90995 19.3504 5.65995Z"
        fill="currentColor"
      />
      <Path
        opacity="0.4"
        d="M9.9007 12.7899L4.05069 9.85989C3.60069 9.62989 3.0807 9.65989 2.6507 9.91989C2.2207 10.1799 1.9707 10.6399 1.9707 11.1399V16.6699C1.9707 17.6299 2.50069 18.4899 3.36069 18.9199L9.21069 21.8399C9.41069 21.9399 9.63071 21.9899 9.85071 21.9899C10.1107 21.9899 10.3707 21.9199 10.6007 21.7699C11.0307 21.5099 11.2807 21.0499 11.2807 20.5499V15.0199C11.2907 14.0799 10.7607 13.2199 9.9007 12.7899Z"
        fill="currentColor"
      />
      <Path
        opacity="0.4"
        d="M22.0309 11.1502V15.7401C22.0209 15.7301 22.0109 15.7101 22.0009 15.7001C22.0009 15.6901 21.991 15.6801 21.981 15.6701C21.941 15.6101 21.8909 15.5501 21.8409 15.5001C21.8309 15.4901 21.8209 15.4702 21.8109 15.4602C21.0009 14.5602 19.8109 14.0001 18.5009 14.0001C17.2409 14.0001 16.0909 14.5201 15.2709 15.3601C14.4809 16.1701 14.0009 17.2801 14.0009 18.5001C14.0009 19.3401 14.2409 20.1401 14.6509 20.8201C14.8209 21.1101 15.031 21.3701 15.261 21.6101L14.791 21.8501C14.591 21.9501 14.3709 22.0001 14.1509 22.0001C13.8909 22.0001 13.631 21.9302 13.391 21.7802C12.971 21.5202 12.7109 21.0601 12.7109 20.5601V15.0401C12.7109 14.0801 13.241 13.2201 14.101 12.7901L19.951 9.87013C20.401 9.64013 20.921 9.66012 21.351 9.93012C21.771 10.1901 22.0309 10.6502 22.0309 11.1502Z"
        fill="currentColor"
      />
      <Path
        d="M21.98 15.67C21.16 14.66 19.91 14.02 18.5 14.02C17.44 14.02 16.46 14.39 15.69 15.01C14.65 15.83 14 17.1 14 18.52C14 19.36 14.24 20.16 14.65 20.84C14.92 21.29 15.26 21.68 15.66 22H15.67C16.44 22.64 17.43 23.02 18.5 23.02C19.64 23.02 20.67 22.6 21.46 21.9C21.81 21.6 22.11 21.24 22.35 20.84C22.76 20.16 23 19.36 23 18.52C23 17.44 22.62 16.44 21.98 15.67ZM20.76 17.96L18.36 20.18C18.22 20.31 18.03 20.38 17.85 20.38C17.66 20.38 17.47 20.31 17.32 20.16L16.21 19.05C15.92 18.76 15.92 18.28 16.21 17.99C16.5 17.7 16.98 17.7 17.27 17.99L17.87 18.59L19.74 16.86C20.04 16.58 20.52 16.6 20.8 16.9C21.09 17.21 21.07 17.68 20.76 17.96Z"
        fill="currentColor"
      />
    </Svg>
  );
};

const BoxTickLinear = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M23 17.91C23.02 18.66 22.82 19.37 22.46 19.98C22.26 20.34 21.99 20.6701 21.69 20.9401C21 21.5801 20.09 21.9701 19.08 22.0001C17.62 22.0301 16.33 21.2801 15.62 20.1301C15.24 19.5401 15.01 18.8301 15 18.0801C14.97 16.8201 15.53 15.6801 16.43 14.9301C17.11 14.3701 17.97 14.0201 18.91 14.0001C21.12 13.9501 22.95 15.7 23 17.91Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M17.44 18.03L18.45 18.99L20.54 16.97"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M3.17004 7.43994L12 12.5499L20.77 7.46991"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M12 21.6099V12.5399"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M21.61 9.17V14.83C21.61 14.88 21.61 14.92 21.6 14.97C20.9 14.36 20 14 19 14C18.06 14 17.19 14.33 16.5 14.88C15.58 15.61 15 16.74 15 18C15 18.75 15.21 19.46 15.58 20.06C15.67 20.22 15.78 20.37 15.9 20.51L14.07 21.52C12.93 22.16 11.07 22.16 9.92999 21.52L4.59 18.56C3.38 17.89 2.39001 16.21 2.39001 14.83V9.17C2.39001 7.79 3.38 6.11002 4.59 5.44002L9.92999 2.48C11.07 1.84 12.93 1.84 14.07 2.48L19.41 5.44002C20.62 6.11002 21.61 7.79 21.61 9.17Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

const BoxTickOutline = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M19.001 22.7499C17.381 22.7499 15.851 21.9099 14.991 20.5299C14.531 19.8199 14.271 18.9699 14.251 18.0999C14.221 16.6399 14.8411 15.2799 15.9511 14.3599C16.7811 13.6699 17.8211 13.2799 18.8911 13.2499C20.1911 13.2399 21.361 13.6899 22.281 14.5699C23.201 15.4499 23.721 16.6299 23.741 17.8999C23.761 18.7699 23.541 19.6199 23.101 20.3699C22.861 20.7899 22.551 21.1799 22.181 21.5099C21.361 22.2799 20.261 22.7299 19.091 22.7499C19.071 22.7499 19.041 22.7499 19.001 22.7499ZM19.001 14.7499C18.981 14.7499 18.951 14.7499 18.931 14.7499C18.191 14.7699 17.491 15.0299 16.911 15.5099C16.151 16.1399 15.731 17.0699 15.751 18.0699C15.761 18.6599 15.941 19.2399 16.251 19.7299C16.861 20.7099 17.921 21.3099 19.061 21.2499C19.851 21.2299 20.6011 20.9299 21.1711 20.3999C21.4311 20.1699 21.641 19.9099 21.801 19.6299C22.101 19.1099 22.251 18.5299 22.241 17.9399C22.221 17.0699 21.871 16.2599 21.241 15.6599C20.641 15.0699 19.841 14.7499 19.001 14.7499Z"
        fill="currentColor"
      />
      <Path
        d="M18.4489 19.7499C18.2589 19.7499 18.0789 19.6799 17.9289 19.5399L16.9189 18.5799C16.6189 18.2899 16.6089 17.8199 16.8989 17.5199C17.1889 17.2199 17.6589 17.2099 17.9589 17.4999L18.4489 17.9699L20.0189 16.4499C20.3189 16.1599 20.7889 16.1699 21.0789 16.4699C21.3689 16.7699 21.3589 17.24 21.0589 17.53L18.9689 19.5499C18.8189 19.6799 18.6289 19.7499 18.4489 19.7499Z"
        fill="currentColor"
      />
      <Path
        d="M11.9994 13.2999C11.8694 13.2999 11.7394 13.2699 11.6194 13.1999L2.78936 8.0899C2.42936 7.8799 2.30934 7.41987 2.51934 7.05987C2.72934 6.69987 3.18936 6.57985 3.53936 6.78985L11.9893 11.6799L20.3894 6.81988C20.7494 6.60988 21.2094 6.7399 21.4094 7.0899C21.6194 7.4499 21.4894 7.90987 21.1394 8.11987L12.3694 13.1999C12.2594 13.2599 12.1294 13.2999 11.9994 13.2999Z"
        fill="currentColor"
      />
      <Path
        d="M12 22.3598C11.59 22.3598 11.25 22.0198 11.25 21.6098V12.5398C11.25 12.1298 11.59 11.7898 12 11.7898C12.41 11.7898 12.75 12.1298 12.75 12.5398V21.6098C12.75 22.0198 12.41 22.3598 12 22.3598Z"
        fill="currentColor"
      />
      <Path
        d="M11.9989 22.7499C11.1189 22.7499 10.2389 22.5599 9.5589 22.1699L4.2189 19.2099C2.7689 18.4099 1.62891 16.4799 1.62891 14.8199V9.1599C1.62891 7.4999 2.7689 5.57994 4.2189 4.76994L9.5589 1.80992C10.9189 1.03992 13.0589 1.03992 14.4289 1.80992L19.7689 4.76994C21.2189 5.56994 22.3589 7.4999 22.3589 9.1599V14.8199C22.3589 14.9199 22.3589 14.9999 22.3389 15.0999C22.2889 15.3599 22.0989 15.5799 21.8489 15.6599C21.5989 15.7499 21.3189 15.6899 21.1089 15.5199C19.9589 14.5199 18.1789 14.4799 16.9689 15.4499C16.1989 16.0599 15.7489 16.9899 15.7489 17.9799C15.7489 18.5699 15.9089 19.1499 16.2189 19.6499C16.2989 19.7899 16.3789 19.8999 16.4689 20.0099C16.6189 20.1799 16.6789 20.4099 16.6389 20.6299C16.5989 20.8499 16.4589 21.0399 16.2589 21.1499L14.4289 22.1599C13.7489 22.5599 12.8789 22.7499 11.9989 22.7499ZM11.9989 2.74992C11.3789 2.74992 10.7489 2.87993 10.2989 3.12993L4.95889 6.08995C3.98889 6.61995 3.1489 8.0599 3.1489 9.1599V14.8199C3.1489 15.9199 3.99889 17.3599 4.95889 17.8899L10.2989 20.8499C11.2089 21.3599 12.7989 21.3599 13.7089 20.8499L14.8289 20.2299C14.4589 19.5599 14.2589 18.7799 14.2589 17.9799C14.2589 16.5199 14.9089 15.1699 16.0389 14.2699C17.3989 13.1799 19.3389 12.9499 20.8689 13.5999V9.13994C20.8689 8.03994 20.0189 6.59993 19.0589 6.06993L13.7189 3.10991C13.2489 2.87991 12.6189 2.74992 11.9989 2.74992Z"
        fill="currentColor"
      />
    </Svg>
  );
};

const BoxTickTwotone = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M22.9992 17.91C23.0192 18.66 22.8192 19.37 22.4592 19.98C22.2592 20.34 21.9892 20.6701 21.6892 20.9401C20.9992 21.5801 20.0892 21.9701 19.0792 22.0001C17.6192 22.0301 16.3292 21.2801 15.6192 20.1301C15.2392 19.5401 15.0092 18.8301 14.9992 18.0801C14.9692 16.8201 15.5292 15.6801 16.4292 14.9301C17.1092 14.3701 17.9692 14.0201 18.9092 14.0001C21.1192 13.9501 22.9492 15.7 22.9992 17.91Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M17.4395 18.0303L18.4495 18.9902L20.5395 16.9702"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <G opacity="0.4">
        <Path
          d="M3.16992 7.43994L11.9999 12.5499L20.7699 7.46991"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <Path
          d="M12 21.61V12.54"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <Path
          d="M21.6106 9.17V14.83C21.6106 14.88 21.6106 14.92 21.6006 14.97C20.9006 14.36 20.0006 14 19.0006 14C18.0606 14 17.1906 14.33 16.5006 14.88C15.5806 15.61 15.0006 16.74 15.0006 18C15.0006 18.75 15.2106 19.46 15.5806 20.06C15.6706 20.22 15.7806 20.37 15.9006 20.51L14.0706 21.52C12.9306 22.16 11.0706 22.16 9.9306 21.52L4.59061 18.56C3.38061 17.89 2.39062 16.21 2.39062 14.83V9.17C2.39062 7.79 3.38061 6.11002 4.59061 5.44002L9.9306 2.48C11.0706 1.84 12.9306 1.84 14.0706 2.48L19.4106 5.44002C20.6206 6.11002 21.6106 7.79 21.6106 9.17Z"
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
  bold: BoxTickBold,
  broken: BoxTickBroken,
  bulk: BoxTickBulk,
  linear: BoxTickLinear,
  outline: BoxTickOutline,
  twotone: BoxTickTwotone,
};

export const BoxTickIcon = ({
  variant = defaultOptions.variant,
  className,
  ...props
}: IconProps) => {
  const textClasses = useContext(TextClassContext);
  const Component = variants[variant];
  return <Component className={cn(textClasses, className)} {...props} />;
};

export default BoxTickIcon;
