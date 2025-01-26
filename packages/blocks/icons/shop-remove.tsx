import { Path, Svg } from "unative/lib/svg";
import { cn } from "unative/lib/utils";

import type { IconProps, IconVariants } from "../types/icons-type";

const ShopRemoveBold = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M7.80023 22.1483C5.15023 22.1483 2.99023 19.9983 2.99023 17.3383V14.4983C2.99023 13.8283 3.65023 13.3783 4.28023 13.5983C4.54023 13.6883 4.80023 13.7483 5.07023 13.7883C5.19023 13.8083 5.31023 13.8283 5.43023 13.8283C5.58023 13.8483 5.74023 13.8583 5.89023 13.8583C7.00023 13.8583 8.10023 13.4483 8.97023 12.7383C9.80023 13.4483 10.8702 13.8583 12.0102 13.8583C13.1502 13.8583 14.2102 13.4683 15.0402 12.7483C15.9002 13.4483 16.9802 13.8583 18.0802 13.8583C18.2502 13.8583 18.4302 13.8483 18.5902 13.8283C18.7102 13.8183 18.8102 13.8083 18.9202 13.7883C19.2202 13.7483 19.4902 13.6683 19.7602 13.5783C20.3802 13.3683 21.0302 13.8283 21.0302 14.4783V17.3383C21.0302 19.9883 18.8802 22.1483 16.2202 22.1483H7.80023Z"
        fill="currentColor"
      />
      <Path
        d="M21.9799 8.59156L21.6999 5.93156C21.2999 3.03156 19.9799 1.85156 17.1699 1.85156H6.81985C3.99985 1.85156 2.68985 3.03156 2.27985 5.96156L2.01985 8.60156C1.91985 9.63156 2.19985 10.6316 2.80985 11.4116C3.53985 12.3616 4.65985 12.9016 5.90985 12.9016C7.11985 12.9016 8.27985 12.2916 9.01985 11.3216C9.66985 12.2916 10.7799 12.9016 12.0199 12.9016C13.2599 12.9016 14.3499 12.3216 15.0099 11.3616C15.7499 12.3116 16.8999 12.9016 18.0899 12.9016C19.3699 12.9016 20.5199 12.3316 21.2399 11.3316C21.8199 10.5616 22.0799 9.59156 21.9799 8.59156ZM13.4999 7.73156H10.4999C10.0899 7.73156 9.74985 7.40156 9.74985 6.98156C9.74985 6.57156 10.0899 6.23156 10.4999 6.23156H13.4999C13.9099 6.23156 14.2499 6.57156 14.2499 6.98156C14.2499 7.40156 13.9099 7.73156 13.4999 7.73156Z"
        fill="currentColor"
      />
    </Svg>
  );
};

const ShopRemoveBroken = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M20.2105 19.6699C19.2905 21.2899 17.5405 21.9999 14.7205 21.9999H9.33051C8.75051 21.9999 8.22047 21.9699 7.73047 21.8999"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M21.0098 11.22V15.71"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M3.03906 15.52V11.22"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M12.0299 12C13.8599 12 15.2099 10.5101 15.0299 8.68005L14.3599 2H9.68989L9.01991 8.68005C8.83991 10.5101 10.1999 12 12.0299 12Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M18.3303 12C20.3503 12 21.8303 10.36 21.6303 8.34998L21.3503 5.59998C20.9903 2.99998 19.9903 2 17.3703 2H14.3203L15.0203 9.01001C15.2003 10.66 16.6803 12 18.3303 12Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M2.63993 5.59998L2.3599 8.34998C2.1599 10.36 3.63989 12 5.65989 12C7.30989 12 8.79994 10.66 8.95994 9.01001L9.17991 6.80005L9.65989 2H6.6099C5.6999 2 4.9799 2.12001 4.4199 2.39001"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M9 19C9 19.75 8.78998 20.4601 8.41998 21.0601C8.22998 21.3801 7.99998 21.67 7.72998 21.9C7.69998 21.94 7.67 21.97 7.63 22C6.93 22.63 6.01 23 5 23C3.78 23 2.68997 22.45 1.96997 21.59C1.94997 21.56 1.92002 21.54 1.90002 21.51C1.78002 21.37 1.67002 21.2201 1.58002 21.0601C1.21002 20.4601 1 19.75 1 19C1 17.74 1.58 16.61 2.5 15.88C2.67 15.74 2.84998 15.62 3.03998 15.52C3.61998 15.19 4.29 15 5 15C6 15 6.89998 15.36 7.59998 15.97C7.71998 16.06 7.82999 16.17 7.92999 16.28C8.58999 17 9 17.95 9 19Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M6.48975 18.98H3.50977"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

const ShopRemoveBulk = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M7.92999 16.28C7.82999 16.17 7.71998 16.06 7.59998 15.97C6.89998 15.36 6 15 5 15C4.29 15 3.61998 15.19 3.03998 15.52C2.84998 15.62 2.67 15.74 2.5 15.88C1.58 16.61 1 17.74 1 19C1 19.75 1.21002 20.46 1.58002 21.06C1.67002 21.22 1.78002 21.37 1.90002 21.51C1.92002 21.54 1.94997 21.56 1.96997 21.59C2.68997 22.45 3.78 23 5 23C6.01 23 6.93001 22.63 7.63 22C7.67 21.97 7.69998 21.94 7.72998 21.9C7.99998 21.67 8.22998 21.38 8.41998 21.06C8.78998 20.46 9 19.75 9 19C9 17.95 8.58999 17 7.92999 16.28ZM6.5 19.73H3.51001C3.10001 19.73 2.76001 19.39 2.76001 18.98C2.76001 18.57 3.10001 18.23 3.51001 18.23H6.5C6.91 18.23 7.25 18.57 7.25 18.98C7.25 19.39 6.91 19.73 6.5 19.73Z"
        fill="currentColor"
      />
      <Path
        opacity="0.4"
        d="M21.0505 11.71V17.7C21.0505 20.46 18.8105 22.7 16.0505 22.7H7.31055C7.08055 22.7 6.85055 22.68 6.63055 22.65C7.00055 22.49 7.33055 22.2699 7.63055 21.9999C7.67055 21.9699 7.70053 21.94 7.73053 21.9C8.00053 21.67 8.23053 21.3799 8.42053 21.0599C8.79053 20.4599 9.00055 19.7499 9.00055 18.9999C9.00055 17.9499 8.59054 17 7.93054 16.28C7.83054 16.17 7.72052 16.0599 7.60052 15.9699C6.90053 15.3599 6.00055 14.9999 5.00055 14.9999C4.29055 14.9999 3.62053 15.19 3.04053 15.52C2.85053 15.62 2.67055 15.7399 2.50055 15.8799C2.43055 15.9299 2.37055 15.9899 2.31055 16.0499V11.78C3.07055 12.6 4.15056 13.0699 5.32056 13.0699C6.58056 13.0699 7.79054 12.4399 8.55054 11.4299C9.23054 12.4399 10.3905 13.0699 11.6805 13.0699C12.9605 13.0699 14.1005 12.4699 14.7905 11.4699C15.5605 12.4599 16.7505 13.0699 17.9905 13.0699C19.2005 13.0699 20.3005 12.58 21.0505 11.71Z"
        fill="currentColor"
      />
      <Path
        d="M14.669 1.57007H8.66904L7.92905 8.93005C7.86905 9.61005 7.96903 10.2501 8.21903 10.8301C8.79903 12.1901 10.1591 13.0701 11.6791 13.0701C13.2191 13.0701 14.5491 12.2101 15.1491 10.8401C15.3291 10.4101 15.4391 9.91009 15.4491 9.40009V9.21008L14.669 1.57007Z"
        fill="currentColor"
      />
      <Path
        opacity="0.6"
        d="M22.0392 8.59009L21.7592 5.81006C21.3392 2.79006 19.9692 1.56006 17.0392 1.56006H13.1992L13.9392 9.06006C13.9492 9.16006 13.9592 9.27008 13.9592 9.46008C14.0192 9.98008 14.1792 10.4601 14.4192 10.8901C15.1392 12.2101 16.5392 13.0601 17.9992 13.0601C19.3292 13.0601 20.5292 12.4701 21.2792 11.4301C21.8692 10.6401 22.1392 9.63009 22.0392 8.59009Z"
        fill="currentColor"
      />
      <Path
        opacity="0.6"
        d="M6.26934 1.57007C3.32934 1.57007 1.9693 2.80004 1.5393 5.85004L1.26934 8.60004C1.16934 9.67004 1.45934 10.7101 2.08934 11.5201C2.84934 12.5101 4.01933 13.0701 5.31932 13.0701C6.77933 13.0701 8.17933 12.22 8.88933 10.92C9.14933 10.47 9.31931 9.95003 9.36931 9.41003L10.1493 1.58008H6.26934V1.57007Z"
        fill="currentColor"
      />
    </Svg>
  );
};

const ShopRemoveLinear = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M21.01 11.22V15.71C21.01 20.2 19.22 22 14.72 22H9.33002C8.75002 22 8.21998 21.97 7.72998 21.9"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M3.03998 15.52V11.22"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M12.03 12C13.86 12 15.21 10.5101 15.03 8.68005L14.36 2H9.69001L9.02003 8.68005C8.84003 10.5101 10.2 12 12.03 12Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M18.33 12C20.35 12 21.83 10.36 21.63 8.34998L21.35 5.59998C20.99 2.99998 19.99 2 17.37 2H14.32L15.02 9.01001C15.2 10.66 16.68 12 18.33 12Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M5.66998 12C7.31998 12 8.80996 10.66 8.96996 9.01001L9.19 6.80005L9.66998 2H6.61999C3.99999 2 3.00001 2.99998 2.64001 5.59998L2.35998 8.34998C2.15998 10.36 3.64998 12 5.66998 12Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M9 19C9 19.75 8.78998 20.4601 8.41998 21.0601C8.22998 21.3801 7.99998 21.67 7.72998 21.9C7.69998 21.94 7.67 21.97 7.63 22C6.93 22.63 6.01 23 5 23C3.78 23 2.68997 22.45 1.96997 21.59C1.94997 21.56 1.92002 21.54 1.90002 21.51C1.78002 21.37 1.67002 21.2201 1.58002 21.0601C1.21002 20.4601 1 19.75 1 19C1 17.74 1.58 16.61 2.5 15.88C2.67 15.74 2.84998 15.62 3.03998 15.52C3.61998 15.19 4.29 15 5 15C6 15 6.89998 15.36 7.59998 15.97C7.71998 16.06 7.82999 16.17 7.92999 16.28C8.58999 17 9 17.95 9 19Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M6.48999 18.98H3.51001"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

const ShopRemoveOutline = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M14.7205 22.75H9.33056C8.69056 22.75 8.13054 22.71 7.62054 22.64C7.21054 22.58 6.92052 22.2 6.98052 21.79C7.04052 21.38 7.41056 21.08 7.83056 21.15C8.27056 21.21 8.76055 21.24 9.32055 21.24H14.7106C18.8006 21.24 20.2505 19.79 20.2505 15.7V11.21C20.2505 10.8 20.5905 10.46 21.0005 10.46C21.4105 10.46 21.7505 10.8 21.7505 11.21V15.7C21.7605 20.64 19.6505 22.75 14.7205 22.75Z"
        fill="currentColor"
      />
      <Path
        d="M3.03906 16.27C2.62906 16.27 2.28906 15.93 2.28906 15.52V11.22C2.28906 10.81 2.62906 10.47 3.03906 10.47C3.44906 10.47 3.78906 10.81 3.78906 11.22V15.52C3.78906 15.93 3.44906 16.27 3.03906 16.27Z"
        fill="currentColor"
      />
      <Path
        d="M12.0303 12.75C10.9303 12.75 9.93027 12.32 9.22027 11.53C8.51027 10.74 8.18028 9.70999 8.29028 8.60999L8.96032 1.93005C9.00032 1.55005 9.32032 1.25 9.71032 1.25H14.3803C14.7703 1.25 15.0903 1.54005 15.1303 1.93005L15.8003 8.60999C15.9103 9.70999 15.5803 10.74 14.8703 11.53C14.1303 12.32 13.1303 12.75 12.0303 12.75ZM10.3703 2.75L9.77032 8.76001C9.70032 9.43001 9.9003 10.06 10.3203 10.52C11.1703 11.46 12.8703 11.46 13.7203 10.52C14.1403 10.05 14.3403 9.42001 14.2703 8.76001L13.6703 2.75H10.3703Z"
        fill="currentColor"
      />
      <Path
        d="M18.3295 12.75C16.2995 12.75 14.4895 11.11 14.2795 9.08997L13.5795 2.07996C13.5595 1.86996 13.6295 1.66 13.7695 1.5C13.9095 1.34 14.1095 1.25 14.3295 1.25H17.3795C20.3195 1.25 21.6895 2.48 22.0995 5.5L22.3795 8.28003C22.4995 9.46003 22.1395 10.5801 21.3695 11.4301C20.5995 12.2801 19.5195 12.75 18.3295 12.75ZM15.1595 2.75L15.7795 8.93994C15.9095 10.1899 17.0795 11.25 18.3295 11.25C19.0895 11.25 19.7695 10.9601 20.2595 10.4301C20.7395 9.90005 20.9595 9.19005 20.8895 8.43005L20.6095 5.68005C20.2995 3.42005 19.5695 2.75 17.3795 2.75H15.1595Z"
        fill="currentColor"
      />
      <Path
        d="M5.67028 12.75C4.48028 12.75 3.4003 12.2801 2.6303 11.4301C1.8603 10.5801 1.50029 9.46003 1.62029 8.28003L1.90032 5.53003C2.32032 2.48003 3.6903 1.25 6.6303 1.25H9.68029C9.89029 1.25 10.0903 1.34 10.2403 1.5C10.3803 1.66 10.4503 1.86996 10.4303 2.07996L9.73028 9.08997C9.51028 11.11 7.69028 12.75 5.67028 12.75ZM6.62029 2.75C4.43029 2.75 3.7003 3.40995 3.3803 5.69995L3.11028 8.42004C3.03028 9.18004 3.26029 9.89004 3.74029 10.42C4.22029 10.95 4.91028 11.24 5.67028 11.24C6.93028 11.24 8.10027 10.1801 8.22027 8.93005L8.84033 2.73999H6.62029V2.75Z"
        fill="currentColor"
      />
      <Path
        d="M5 23.75C3.6 23.75 2.29001 23.1399 1.39001 22.0699C1.38001 22.0599 1.34 22.02 1.31 21.97C1.16 21.79 1.02999 21.61 0.929993 21.42C0.489993 20.71 0.25 19.87 0.25 18.99C0.25 17.53 0.900029 16.18 2.03003 15.28C2.23003 15.12 2.45 14.97 2.69 14.84C3.38 14.45 4.19 14.23 5 14.23C6.16 14.23 7.23003 14.63 8.09003 15.38C8.20003 15.46 8.34998 15.61 8.47998 15.75C9.28998 16.64 9.73999 17.78 9.73999 18.97C9.73999 19.84 9.49999 20.69 9.04999 21.42C8.82999 21.8 8.56001 22.13 8.26001 22.39C8.20001 22.45 8.14001 22.5101 8.07001 22.5601C7.28001 23.3301 6.17 23.75 5 23.75ZM2.47998 21.04C2.50998 21.07 2.55998 21.1199 2.59998 21.1899C3.14998 21.8399 4.05 22.26 5 22.26C5.79 22.26 6.55 21.97 7.13 21.45C7.16001 21.41 7.2 21.37 7.25 21.34C7.45 21.17 7.62003 20.9499 7.78003 20.6899C8.09003 20.1799 8.26001 19.61 8.26001 19.01C8.26001 18.2 7.95001 17.41 7.39001 16.8C7.32001 16.72 7.24997 16.64 7.15997 16.58C6.07997 15.65 4.59998 15.5101 3.41998 16.1801C3.25998 16.2701 3.11999 16.36 2.98999 16.47C2.20999 17.09 1.76001 18.01 1.76001 19.01C1.76001 19.6 1.91998 20.1801 2.22998 20.6801C2.30998 20.8201 2.38998 20.93 2.47998 21.03C2.46998 21.03 2.47998 21.03 2.47998 21.04Z"
        fill="currentColor"
      />
      <Path
        d="M6.49976 19.73H3.50977C3.09977 19.73 2.75977 19.39 2.75977 18.98C2.75977 18.57 3.09977 18.23 3.50977 18.23H6.49976C6.90976 18.23 7.24976 18.57 7.24976 18.98C7.24976 19.39 6.90976 19.73 6.49976 19.73Z"
        fill="currentColor"
      />
    </Svg>
  );
};

const ShopRemoveTwotone = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M21.0105 11.2197V15.7097C21.0105 20.1997 19.2205 21.9998 14.7205 21.9998H9.33051C8.75051 21.9998 8.22047 21.9698 7.73047 21.8998"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        opacity="0.4"
        d="M3.03906 15.5198V11.2197"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M12.0299 12C13.8599 12 15.2099 10.5101 15.0299 8.68005L14.3599 2H9.68989L9.01991 8.68005C8.83991 10.5101 10.1999 12 12.0299 12Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M18.3303 12C20.3503 12 21.8303 10.36 21.6303 8.34998L21.3503 5.59998C20.9903 2.99998 19.9903 2 17.3703 2H14.3203L15.0203 9.01001C15.2003 10.66 16.6803 12 18.3303 12Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M5.66979 12C7.31979 12 8.80978 10.66 8.96978 9.01001L9.18981 6.80005L9.66979 2H6.61981C3.99981 2 2.99983 2.99998 2.63983 5.59998L2.3598 8.34998C2.1598 10.36 3.64979 12 5.66979 12Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M9 19C9 19.75 8.78998 20.4601 8.41998 21.0601C8.22998 21.3801 7.99998 21.67 7.72998 21.9C7.69998 21.94 7.67 21.97 7.63 22C6.93 22.63 6.01 23 5 23C3.78 23 2.68997 22.45 1.96997 21.59C1.94997 21.56 1.92002 21.54 1.90002 21.51C1.78002 21.37 1.67002 21.2201 1.58002 21.0601C1.21002 20.4601 1 19.75 1 19C1 17.74 1.58 16.61 2.5 15.88C2.67 15.74 2.84998 15.62 3.03998 15.52C3.61998 15.19 4.29 15 5 15C6 15 6.89998 15.36 7.59998 15.97C7.71998 16.06 7.82999 16.17 7.92999 16.28C8.58999 17 9 17.95 9 19Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        opacity="0.4"
        d="M6.48975 18.98H3.50977"
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
  bold: ShopRemoveBold,
  broken: ShopRemoveBroken,
  bulk: ShopRemoveBulk,
  linear: ShopRemoveLinear,
  outline: ShopRemoveOutline,
  twotone: ShopRemoveTwotone,
};

export const ShopRemoveIcon = ({ variant = "linear", ...props }: IconProps) => {
  const Component = variants[variant];
  return <Component {...props} />;
};
