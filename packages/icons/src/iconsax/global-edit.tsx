import { useContext } from "react";
import { cn } from "unative/lib/utils";
import { G, Path, Svg } from "unative/ui/svg";
import { TextClassContext } from "unative/ui/text";

import type { IconProps, IconVariants } from "../icon-options";
import { defaultOptions } from "../icon-options";

const GlobalEditBold = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M18.7304 14.6711L14.5804 18.8211C14.4204 18.9811 14.2704 19.2911 14.2304 19.5111L14.0004 21.1011C13.9204 21.6711 14.3204 22.0811 14.8904 21.9911L16.4804 21.7611C16.7004 21.7311 17.0104 21.5711 17.1704 21.4111L21.3204 17.2611C22.0304 16.5511 22.3704 15.7111 21.3204 14.6611C20.2804 13.6211 19.4504 13.9511 18.7304 14.6711Z"
        fill="currentColor"
      />
      <Path
        d="M18.1406 15.2617C18.4906 16.5217 19.4806 17.5017 20.7406 17.8617L18.1406 15.2617Z"
        fill="currentColor"
      />
      <Path
        d="M2.02977 14.6289C2.02977 14.6589 2.00977 14.6989 2.00977 14.7289C2.92977 16.5689 4.42977 18.0789 6.26977 18.9889C6.29977 18.9889 6.33977 18.9689 6.36977 18.9689C6.02977 17.8089 5.76977 16.6189 5.57977 15.4289C4.37977 15.2289 3.18977 14.9689 2.02977 14.6289Z"
        fill="currentColor"
      />
      <Path
        d="M19.0701 6.43141C18.1301 4.46141 16.5401 2.87141 14.5801 1.94141C14.9401 3.13141 15.2401 4.35141 15.4401 5.57141C16.6601 5.77141 17.8801 6.06141 19.0701 6.43141Z"
        fill="currentColor"
      />
      <Path
        d="M1.92969 6.42953C3.12969 6.06953 4.34969 5.76953 5.56969 5.56953C5.76969 4.37953 6.01969 3.19953 6.35969 2.03953C6.32969 2.03953 6.28969 2.01953 6.25969 2.01953C4.37969 2.94953 2.84969 4.51953 1.92969 6.42953Z"
        fill="currentColor"
      />
      <Path
        d="M13.8197 5.36C13.5797 4.06 13.2797 2.76 12.8497 1.5C12.8297 1.43 12.8297 1.37 12.8197 1.29C12.0797 1.11 11.2997 1 10.4997 1C9.68969 1 8.91969 1.11 8.16969 1.3C8.15969 1.37 8.16969 1.43 8.14969 1.51C7.72969 2.77 7.41969 4.06 7.17969 5.36C9.38969 5.12 11.6097 5.12 13.8197 5.36Z"
        fill="currentColor"
      />
      <Path
        d="M5.36 7.17969C4.05 7.41969 2.77 7.72969 1.5 8.14969C1.43 8.16969 1.37 8.16969 1.3 8.17969C1.11 8.91969 1 9.69969 1 10.4997C1 11.3097 1.11 12.0797 1.3 12.8297C1.37 12.8397 1.43 12.8297 1.51 12.8497C2.77 13.2697 4.06 13.5797 5.37 13.8197C5.12 11.6097 5.12 9.38969 5.36 7.17969Z"
        fill="currentColor"
      />
      <Path
        d="M19.7009 8.17969C19.6309 8.17969 19.5709 8.16969 19.4909 8.14969C18.2309 7.72969 16.9309 7.41969 15.6309 7.17969C15.8809 9.38969 15.8809 11.6097 15.6309 13.8097C16.9309 13.5697 18.2309 13.2697 19.4909 12.8397C19.5609 12.8197 19.6209 12.8297 19.7009 12.8197C19.8809 12.0697 20.0009 11.2997 20.0009 10.4897C20.0009 9.69969 19.8909 8.92969 19.7009 8.17969Z"
        fill="currentColor"
      />
      <Path
        d="M7.17969 15.6389C7.41969 16.9489 7.71969 18.2389 8.14969 19.4989C8.16969 19.5689 8.15969 19.6289 8.16969 19.7089C8.91969 19.8889 9.68969 19.9989 10.4997 19.9989C11.2997 19.9989 12.0797 19.8889 12.8197 19.6989C12.8297 19.6289 12.8297 19.5689 12.8497 19.4889C13.2697 18.2289 13.5797 16.9389 13.8197 15.6289C12.7197 15.7489 11.6097 15.8389 10.4997 15.8389C9.38969 15.8389 8.27969 15.7589 7.17969 15.6389Z"
        fill="currentColor"
      />
      <Path
        d="M6.94961 6.95156C6.64961 9.31156 6.64961 11.6916 6.94961 14.0616C9.30961 14.3616 11.6896 14.3616 14.0596 14.0616C14.3596 11.7016 14.3596 9.32156 14.0596 6.95156C11.6896 6.65156 9.30961 6.65156 6.94961 6.95156Z"
        fill="currentColor"
      />
    </Svg>
  );
};

const GlobalEditBroken = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M21 9.00006C18.08 8.03006 15.04 7.54004 12 7.54004"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M3 9.00006C4.59 8.47006 6.21001 8.09009 7.85001 7.84009"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M22 12C22 6.48 17.52 2 12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M7.99961 3H8.99961C7.04961 8.84 7.04961 15.16 8.99961 21H7.99961"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M15 3C15.97 5.92 16.46 8.96 16.46 12"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M3 16V15C5.92 15.97 8.96 16.46 12 16.46"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M19.2091 15.74L15.6691 19.2801C15.5291 19.4201 15.3991 19.68 15.3691 19.87L15.1791 21.22C15.1091 21.71 15.4491 22.05 15.9391 21.98L17.2891 21.79C17.4791 21.76 17.7491 21.63 17.8791 21.49L21.4191 17.95C22.0291 17.34 22.3191 16.63 21.4191 15.73C20.5291 14.84 19.8191 15.13 19.2091 15.74Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M18.6992 16.25C18.9992 17.33 19.8392 18.17 20.9192 18.47"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

const GlobalEditBulk = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M18.7304 14.6701L14.5804 18.8201C14.4204 18.9801 14.2704 19.2901 14.2304 19.5101L14.0004 21.1001C13.9204 21.6701 14.3204 22.0801 14.8904 21.9901L16.4804 21.7601C16.7004 21.7301 17.0104 21.5701 17.1704 21.4101L21.3204 17.2601C22.0304 16.5501 22.3704 15.7101 21.3204 14.6601C20.2804 13.6201 19.4504 13.9501 18.7304 14.6701Z"
        fill="currentColor"
      />
      <Path
        d="M18.1406 15.2603C18.4906 16.5203 19.4806 17.5002 20.7406 17.8602L18.1406 15.2603Z"
        fill="currentColor"
      />
      <Path
        opacity="0.4"
        d="M2.02977 14.6299C2.02977 14.6599 2.00977 14.6999 2.00977 14.7299C2.92977 16.5699 4.42978 18.0799 6.26978 18.9899C6.29978 18.9899 6.33977 18.9699 6.36977 18.9699C6.02977 17.8099 5.76977 16.6199 5.57977 15.4299C4.37977 15.2299 3.18977 14.9699 2.02977 14.6299Z"
        fill="currentColor"
      />
      <Path
        opacity="0.4"
        d="M19.0701 6.42993C18.1301 4.45993 16.5401 2.86994 14.5801 1.93994C14.9401 3.12994 15.2401 4.34995 15.4401 5.56995C16.6601 5.76995 17.8801 6.05993 19.0701 6.42993Z"
        fill="currentColor"
      />
      <Path
        opacity="0.4"
        d="M1.92969 6.43002C3.12969 6.07002 4.3497 5.77004 5.5697 5.57004C5.7697 4.38004 6.0197 3.20004 6.3597 2.04004C6.3297 2.04004 6.28969 2.02002 6.25969 2.02002C4.37969 2.95002 2.84969 4.52002 1.92969 6.43002Z"
        fill="currentColor"
      />
      <Path
        opacity="0.4"
        d="M13.8197 5.36023C13.5797 4.06023 13.2797 2.76024 12.8497 1.50024C12.8297 1.43024 12.8297 1.37025 12.8197 1.29025C12.0797 1.11025 11.2997 0.990234 10.4997 0.990234C9.68969 0.990234 8.91969 1.10025 8.16969 1.29025C8.15969 1.36025 8.16969 1.42024 8.14969 1.50024C7.72969 2.76024 7.41969 4.06023 7.17969 5.36023C9.38969 5.12023 11.6097 5.12023 13.8197 5.36023Z"
        fill="currentColor"
      />
      <Path
        opacity="0.4"
        d="M5.36023 7.18018C4.05023 7.42018 2.76023 7.72018 1.50023 8.15018C1.43023 8.17018 1.37022 8.17018 1.29022 8.18018C1.11022 8.92018 0.990234 9.70018 0.990234 10.5002C0.990234 11.3102 1.10022 12.0802 1.29022 12.8302C1.36022 12.8402 1.42023 12.8302 1.50023 12.8502C2.76023 13.2702 4.05023 13.5802 5.36023 13.8202C5.12023 11.6102 5.12023 9.39018 5.36023 7.18018Z"
        fill="currentColor"
      />
      <Path
        opacity="0.4"
        d="M19.7009 8.18018C19.6309 8.18018 19.5709 8.17018 19.4909 8.15018C18.2309 7.73018 16.9309 7.42018 15.6309 7.18018C15.8809 9.39018 15.8809 11.6102 15.6309 13.8102C16.9309 13.5702 18.2309 13.2702 19.4909 12.8402C19.5609 12.8202 19.6209 12.8302 19.7009 12.8202C19.8809 12.0702 20.0009 11.3002 20.0009 10.4902C20.0009 9.70017 19.8909 8.93018 19.7009 8.18018Z"
        fill="currentColor"
      />
      <Path
        opacity="0.4"
        d="M7.17969 15.6401C7.41969 16.9501 7.71969 18.2401 8.14969 19.5001C8.16969 19.5701 8.15969 19.6301 8.16969 19.7101C8.91969 19.8901 9.68969 20.0101 10.4997 20.0101C11.2997 20.0101 12.0797 19.9001 12.8197 19.7101C12.8297 19.6401 12.8297 19.5801 12.8497 19.5001C13.2697 18.2401 13.5797 16.9501 13.8197 15.6401C12.7197 15.7601 11.6097 15.8501 10.4997 15.8501C9.38969 15.8401 8.27969 15.7601 7.17969 15.6401Z"
        fill="currentColor"
      />
      <Path
        opacity="0.4"
        d="M6.94961 6.9501C6.64961 9.3101 6.64961 11.6901 6.94961 14.0601C9.30961 14.3601 11.6896 14.3601 14.0596 14.0601C14.3596 11.7001 14.3596 9.3201 14.0596 6.9501C11.6896 6.6501 9.30961 6.6501 6.94961 6.9501Z"
        fill="currentColor"
      />
    </Svg>
  );
};

const GlobalEditLinear = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M22 12C22 6.48 17.52 2 12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M7.99998 3H8.99998C7.04998 8.84 7.04998 15.16 8.99998 21H7.99998"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M15 3C15.97 5.92 16.46 8.96 16.46 12"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M3 16V15C5.92 15.97 8.96 16.46 12 16.46"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M3 9.0001C8.84 7.0501 15.16 7.0501 21 9.0001"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M19.21 15.74L15.67 19.2801C15.53 19.4201 15.4 19.68 15.37 19.87L15.18 21.22C15.11 21.71 15.45 22.05 15.94 21.98L17.29 21.79C17.48 21.76 17.75 21.63 17.88 21.49L21.42 17.95C22.03 17.34 22.32 16.63 21.42 15.73C20.53 14.84 19.82 15.13 19.21 15.74Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M18.7 16.25C19 17.33 19.84 18.17 20.92 18.47"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

const GlobalEditOutline = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M12 22.75C6.07 22.75 1.25 17.93 1.25 12C1.25 6.07 6.07 1.25 12 1.25C17.93 1.25 22.75 6.07 22.75 12C22.75 12.41 22.41 12.75 22 12.75C21.59 12.75 21.25 12.41 21.25 12C21.25 6.9 17.1 2.75 12 2.75C6.9 2.75 2.75 6.9 2.75 12C2.75 17.1 6.9 21.25 12 21.25C12.41 21.25 12.75 21.59 12.75 22C12.75 22.41 12.41 22.75 12 22.75Z"
        fill="currentColor"
      />
      <Path
        d="M9.00024 21.75H8.00024C7.59024 21.75 7.25024 21.41 7.25024 21C7.25024 20.59 7.57023 20.26 7.98023 20.25C6.41023 14.89 6.41023 9.11 7.98023 3.75C7.58023 3.74 7.25024 3.41 7.25024 3C7.25024 2.59 7.59024 2.25 8.00024 2.25H9.00024C9.24024 2.25 9.47024 2.37 9.61024 2.56C9.75024 2.76 9.79025 3.00999 9.71025 3.23999C7.83025 8.88999 7.83025 15.12 9.71025 20.77C9.79025 21 9.75024 21.25 9.61024 21.45C9.47024 21.65 9.24024 21.75 9.00024 21.75Z"
        fill="currentColor"
      />
      <Path
        d="M16.4604 12.75C16.0504 12.75 15.7104 12.41 15.7104 12C15.7104 9.01996 15.2304 6.06995 14.2904 3.23995C14.1604 2.84995 14.3704 2.41994 14.7604 2.28994C15.1504 2.15994 15.5804 2.36997 15.7104 2.75997C16.7004 5.73997 17.2104 8.84996 17.2104 12C17.2104 12.41 16.8704 12.75 16.4604 12.75Z"
        fill="currentColor"
      />
      <Path
        d="M12 17.2098C9.2 17.2098 6.43 16.8098 3.75 16.0198C3.74 16.4198 3.41 16.7498 3 16.7498C2.59 16.7498 2.25 16.4098 2.25 15.9998V14.9998C2.25 14.7598 2.37 14.5298 2.56 14.3898C2.75 14.2498 3.01001 14.2098 3.24001 14.2898C6.07001 15.2298 9.02 15.7098 12 15.7098C12.41 15.7098 12.75 16.0498 12.75 16.4598C12.75 16.8698 12.41 17.2098 12 17.2098Z"
        fill="currentColor"
      />
      <Path
        d="M21.0007 9.74989C20.9207 9.74989 20.8407 9.73991 20.7607 9.70991C15.1107 7.82991 8.88066 7.82991 3.23066 9.70991C2.84066 9.83991 2.41067 9.62988 2.28067 9.23988C2.15067 8.84988 2.36067 8.41986 2.75067 8.28986C8.71067 6.29986 15.2707 6.29986 21.2207 8.28986C21.6107 8.41986 21.8207 8.84988 21.6907 9.23988C21.6107 9.54988 21.3107 9.74989 21.0007 9.74989Z"
        fill="currentColor"
      />
      <Path
        d="M15.8196 22.7498C15.4396 22.7498 15.0796 22.6098 14.8196 22.3498C14.5096 22.0398 14.3696 21.5898 14.4396 21.1198L14.6296 19.7699C14.6796 19.4199 14.8896 18.9998 15.1396 18.7498L18.6796 15.2099C19.1596 14.7299 19.6296 14.4798 20.1396 14.4298C20.7696 14.3698 21.3796 14.6299 21.9596 15.2099C22.5396 15.7899 22.7996 16.3999 22.7396 17.0299C22.6896 17.5299 22.4296 18.0098 21.9596 18.4898L18.4196 22.0299C18.1696 22.2799 17.7596 22.4898 17.4096 22.5398L16.0596 22.7298C15.9696 22.7398 15.8996 22.7498 15.8196 22.7498ZM20.3096 15.9198C20.2996 15.9198 20.2896 15.9198 20.2796 15.9198C20.1396 15.9298 19.9496 16.0499 19.7396 16.2699L16.1996 19.8098C16.1696 19.8398 16.1196 19.9398 16.1196 19.9798L15.9396 21.2298L17.1896 21.0498C17.2296 21.0398 17.3296 20.9899 17.3596 20.9599L20.8996 17.4198C21.1096 17.2098 21.2396 17.0198 21.2496 16.8798C21.2696 16.6798 21.0696 16.4399 20.8996 16.2699C20.7396 16.1099 20.5096 15.9198 20.3096 15.9198Z"
        fill="currentColor"
      />
      <Path
        d="M20.9206 19.2198C20.8506 19.2198 20.7806 19.2099 20.7206 19.1899C19.4006 18.8199 18.3506 17.7699 17.9806 16.4499C17.8706 16.0499 18.1006 15.6399 18.5006 15.5299C18.9006 15.4199 19.3106 15.6499 19.4306 16.0499C19.6606 16.8699 20.3106 17.5199 21.1306 17.7499C21.5306 17.8599 21.7606 18.2799 21.6506 18.6699C21.5506 18.9999 21.2506 19.2198 20.9206 19.2198Z"
        fill="currentColor"
      />
    </Svg>
  );
};

const GlobalEditTwotone = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M22 12C22 6.48 17.52 2 12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <G opacity="0.4">
        <Path
          d="M7.99961 3H8.99961C7.04961 8.84 7.04961 15.16 8.99961 21H7.99961"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <Path
          d="M15 3C15.97 5.92 16.46 8.96 16.46 12"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <Path
          d="M3 16V15C5.92 15.97 8.96 16.46 12 16.46"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <Path
          d="M3 9.0001C8.84 7.0501 15.16 7.0501 21 9.0001"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </G>
      <Path
        d="M19.211 15.74L15.671 19.2801C15.531 19.4201 15.401 19.68 15.371 19.87L15.181 21.22C15.111 21.71 15.451 22.05 15.941 21.98L17.291 21.79C17.481 21.76 17.751 21.63 17.881 21.49L21.421 17.95C22.031 17.34 22.321 16.63 21.421 15.73C20.531 14.84 19.821 15.13 19.211 15.74Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M18.6992 16.25C18.9992 17.33 19.8392 18.17 20.9192 18.47"
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
  bold: GlobalEditBold,
  broken: GlobalEditBroken,
  bulk: GlobalEditBulk,
  linear: GlobalEditLinear,
  outline: GlobalEditOutline,
  twotone: GlobalEditTwotone,
};

export const GlobalEditIcon = ({
  variant = defaultOptions.variant,
  className,
  ...props
}: IconProps) => {
  const textClasses = useContext(TextClassContext);
  const Component = variants[variant];
  return <Component className={cn(textClasses, className)} {...props} />;
};

export default GlobalEditIcon;
