import { useContext } from "react";
import { G, Path, Svg } from "unative/lib/svg";
import { cn } from "unative/lib/utils";
import { TextClassContext } from "unative/ui/text";

import type { IconProps, IconVariants } from "../types/icons-type";

const PenToolBold = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M20.5491 9.43906H19.4491C19.2991 9.43906 19.1491 9.46906 19.0091 9.50906L14.0191 4.51906C14.4991 3.89906 14.4591 3.00906 13.8891 2.44906L13.1091 1.66906C12.5191 1.07906 11.4791 1.07906 10.8791 1.66906L10.0991 2.44906C9.53914 3.00906 9.49914 3.89906 9.97914 4.51906L4.98914 9.50906C4.84914 9.46906 4.69914 9.43906 4.54914 9.43906H3.44914C2.57914 9.43906 1.86914 10.1491 1.86914 11.0191V12.1191C1.86914 12.9891 2.57914 13.6991 3.44914 13.6991H4.54914C5.41914 13.6991 6.12914 12.9891 6.12914 12.1191V11.0191C6.12914 10.8691 6.09914 10.7191 6.05914 10.5791L11.0491 5.58906C11.3191 5.79906 11.6591 5.90906 11.9991 5.90906C12.3391 5.90906 12.6791 5.78906 12.9591 5.57906L17.9491 10.5691C17.9091 10.7091 17.8791 10.8591 17.8791 11.0091V12.1091C17.8791 12.9791 18.5891 13.6891 19.4591 13.6891H20.5591C21.4291 13.6891 22.1391 12.9791 22.1391 12.1091V11.0091C22.1191 10.1391 21.4191 9.43906 20.5491 9.43906Z"
        fill="currentColor"
      />
      <Path
        d="M15.7491 16.5492L14.1091 17.9992H9.84907L8.20907 16.5492C7.25907 15.7692 7.25907 15.1692 7.97907 14.2492L10.8691 10.5892C11.0691 10.3392 11.2991 10.1692 11.5591 10.0792C11.8291 9.98922 12.1191 9.98922 12.3991 10.0792C12.6491 10.1692 12.8791 10.3392 13.0891 10.5892L15.9791 14.2492C16.6991 15.1592 16.6691 15.7292 15.7491 16.5492Z"
        fill="currentColor"
      />
      <Path
        d="M13.2909 21.9998H10.7009C9.78087 21.9998 9.09087 21.2498 9.27087 20.4498L9.58087 19.0598C9.64087 18.7798 9.89087 18.5898 10.1709 18.5898H13.8209C14.1009 18.5898 14.3409 18.7798 14.4109 19.0598L14.7209 20.4498C14.9209 21.2998 14.2709 21.9998 13.2909 21.9998Z"
        fill="currentColor"
      />
    </Svg>
  );
};

const PenToolBroken = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M11.1501 5.19015L10.3701 4.41012C9.90008 3.94012 9.90008 3.18017 10.3701 2.71017L11.1501 1.93014C11.6201 1.46014 12.3801 1.46014 12.8501 1.93014L13.6301 2.71017C14.1001 3.18017 14.1001 3.94012 13.6301 4.41012L12.8501 5.19015C12.3801 5.66015 11.6201 5.66015 11.1501 5.19015Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M19.45 9.81006H20.55C21.21 9.81006 21.75 10.3501 21.75 11.0101V12.11C21.75 12.77 21.21 13.3101 20.55 13.3101H19.45C18.79 13.3101 18.25 12.77 18.25 12.11V11.0101C18.25 10.3501 18.79 9.81006 19.45 9.81006Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M4.55 9.81006H3.45C2.79 9.81006 2.25 10.3501 2.25 11.0101V12.11C2.25 12.77 2.79 13.3101 3.45 13.3101H4.55C5.21 13.3101 5.75 12.77 5.75 12.11V11.0101C5.75 10.3501 5.21 9.81006 4.55 9.81006Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M18.5402 10.0998L13.2402 4.7998"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M5.46094 10.1002L8.11094 7.4502"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M10.7513 22.4999H13.2713C14.2313 22.4999 14.8513 21.8199 14.6713 20.9899L14.2613 19.1799H9.76131L9.3513 20.9899C9.1713 21.7699 9.8513 22.4999 10.7513 22.4999Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M14.2208 12.6699L13.1708 11.3399C12.5308 10.5299 11.4808 10.5299 10.8408 11.3399L7.79078 15.2099C7.02078 16.1799 7.02078 16.8099 8.03078 17.6399L9.76078 19.1799"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M14.2617 19.1698L15.9917 17.6298C16.9617 16.7698 17.0017 16.1697 16.2317 15.1997"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M12.0117 11.1201V13.6501"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

const PenToolBulk = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M11.1501 5.19015L10.3701 4.41012C9.90008 3.94012 9.90008 3.18017 10.3701 2.71017L11.1501 1.93014C11.6201 1.46014 12.3801 1.46014 12.8501 1.93014L13.6301 2.71017C14.1001 3.18017 14.1001 3.94012 13.6301 4.41012L12.8501 5.19015C12.3801 5.66015 11.6201 5.66015 11.1501 5.19015Z"
        fill="currentColor"
      />
      <Path
        d="M11.9998 5.91013C11.5998 5.91013 11.1898 5.76016 10.8898 5.45016L10.1098 4.67013C9.49984 4.06013 9.49984 3.06015 10.1098 2.44015L10.8898 1.66013C11.4798 1.06013 12.5198 1.07013 13.1198 1.66013L13.8998 2.44015C14.5098 3.05015 14.5098 4.05013 13.8998 4.67013L13.1198 5.45016C12.8098 5.76016 12.3998 5.91013 11.9998 5.91013ZM11.9998 1.96017C11.7898 1.96017 11.5798 2.04016 11.4198 2.20016L10.6398 2.98013C10.3198 3.30013 10.3198 3.83018 10.6398 4.15018L11.4198 4.93014C11.7398 5.25014 12.2598 5.25014 12.5898 4.93014L13.3698 4.15018C13.6898 3.83018 13.6898 3.31013 13.3698 2.98013L12.5898 2.20016C12.4198 2.04016 12.2098 1.96017 11.9998 1.96017Z"
        fill="currentColor"
      />
      <Path
        d="M19.45 9.81006H20.55C21.21 9.81006 21.75 10.3501 21.75 11.0101V12.11C21.75 12.77 21.21 13.3101 20.55 13.3101H19.45C18.79 13.3101 18.25 12.77 18.25 12.11V11.0101C18.25 10.3501 18.79 9.81006 19.45 9.81006Z"
        fill="currentColor"
      />
      <Path
        d="M20.5491 13.6902H19.4491C18.5791 13.6902 17.8691 12.9802 17.8691 12.1102V11.0102C17.8691 10.1402 18.5791 9.43018 19.4491 9.43018H20.5491C21.4191 9.43018 22.1291 10.1402 22.1291 11.0102V12.1102C22.1191 12.9802 21.4191 13.6902 20.5491 13.6902ZM19.4491 10.1902C18.9891 10.1902 18.6191 10.5602 18.6191 11.0202V12.1202C18.6191 12.5802 18.9891 12.9502 19.4491 12.9502H20.5491C21.0091 12.9502 21.3791 12.5802 21.3791 12.1202V11.0202C21.3791 10.5602 21.0091 10.1902 20.5491 10.1902H19.4491Z"
        fill="currentColor"
      />
      <Path
        d="M4.55 9.81006H3.45C2.79 9.81006 2.25 10.3501 2.25 11.0101V12.11C2.25 12.77 2.79 13.3101 3.45 13.3101H4.55C5.21 13.3101 5.75 12.77 5.75 12.11V11.0101C5.75 10.3501 5.21 9.81006 4.55 9.81006Z"
        fill="currentColor"
      />
      <Path
        d="M4.54914 13.6902H3.44913C2.57913 13.6902 1.86914 12.9802 1.86914 12.1102V11.0102C1.86914 10.1402 2.57913 9.43018 3.44913 9.43018H4.54914C5.41914 9.43018 6.12914 10.1402 6.12914 11.0102V12.1102C6.11913 12.9802 5.41914 13.6902 4.54914 13.6902ZM3.44913 10.1902C2.98913 10.1902 2.61914 10.5602 2.61914 11.0202V12.1202C2.61914 12.5802 2.98913 12.9502 3.44913 12.9502H4.54914C5.00914 12.9502 5.37914 12.5802 5.37914 12.1202V11.0202C5.37914 10.5602 5.00914 10.1902 4.54914 10.1902H3.44913Z"
        fill="currentColor"
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12.7099 4.26948C13.0028 3.97658 13.4777 3.97658 13.7706 4.26947L19.0706 9.56946C19.3635 9.86235 19.3635 10.3372 19.0706 10.6301C18.7777 10.923 18.3028 10.923 18.0099 10.6301L12.7099 5.33014C12.417 5.03724 12.417 4.56237 12.7099 4.26948Z"
        fill="currentColor"
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M11.2913 4.26948C11.5842 4.56237 11.5842 5.03724 11.2913 5.33014L5.99127 10.6301C5.69837 10.923 5.2235 10.923 4.93061 10.6301C4.63771 10.3372 4.63771 9.86235 4.93061 9.56946L10.2306 4.26947C10.5235 3.97658 10.9984 3.97658 11.2913 4.26948Z"
        fill="currentColor"
      />
      <Path
        d="M13.2603 22.0101H10.7003C9.78029 22.0101 9.10029 21.2701 9.27029 20.4701L9.69029 18.6201H14.2803L14.7003 20.4701C14.8903 21.3201 14.2403 22.0101 13.2603 22.0101Z"
        fill="currentColor"
      />
      <Path
        opacity="0.4"
        d="M16.0405 17.0499L14.2705 18.6199H9.68051L7.91051 17.0499C6.88051 16.2099 6.88051 15.5599 7.66051 14.5699L10.7805 10.6299C11.0005 10.3599 11.2505 10.1699 11.5205 10.0799C11.8105 9.97988 12.1305 9.97988 12.4205 10.0799C12.6905 10.1799 12.9405 10.3599 13.1605 10.6299L16.2805 14.5699C17.0705 15.5599 17.0305 16.1799 16.0405 17.0499Z"
        fill="currentColor"
      />
    </Svg>
  );
};

const PenToolLinear = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M10.75 22.5001H13.27C14.23 22.5001 14.85 21.8201 14.67 20.9901L14.26 19.1802H9.76L9.35 20.9901C9.17 21.7701 9.85 22.5001 10.75 22.5001Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M14.26 19.1702L15.99 17.6301C16.96 16.7701 17 16.1701 16.23 15.2001L13.18 11.3302C12.54 10.5202 11.49 10.5202 10.85 11.3302L7.8 15.2001C7.03 16.1701 7.03 16.8001 8.04 17.6301L9.77 19.1702"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M12.01 11.1201V13.6501"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M11.15 5.19015L10.37 4.41012C9.9 3.94012 9.9 3.18017 10.37 2.71017L11.15 1.93014C11.62 1.46014 12.38 1.46014 12.85 1.93014L13.63 2.71017C14.1 3.18017 14.1 3.94012 13.63 4.41012L12.85 5.19015C12.38 5.66015 11.62 5.66015 11.15 5.19015Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M19.45 9.81006H20.55C21.21 9.81006 21.75 10.3501 21.75 11.0101V12.11C21.75 12.77 21.21 13.3101 20.55 13.3101H19.45C18.79 13.3101 18.25 12.77 18.25 12.11V11.0101C18.25 10.3501 18.79 9.81006 19.45 9.81006Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M4.55 9.81006H3.45C2.79 9.81006 2.25 10.3501 2.25 11.0101V12.11C2.25 12.77 2.79 13.3101 3.45 13.3101H4.55C5.21 13.3101 5.75 12.77 5.75 12.11V11.0101C5.75 10.3501 5.21 9.81006 4.55 9.81006Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M18.54 10.1L13.24 4.80005"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M5.46 10.1L10.76 4.80005"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

const PenToolOutline = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M13.2698 23.25H10.7498C10.0498 23.25 9.41978 22.9499 8.99978 22.4399C8.62978 21.9799 8.48978 21.39 8.61978 20.83L9.02978 19.02C9.10978 18.68 9.40978 18.4399 9.75978 18.4399H14.2598C14.6098 18.4399 14.9098 18.68 14.9898 19.02L15.3998 20.83C15.5298 21.43 15.4098 22.01 15.0398 22.47C14.6298 22.96 13.9898 23.25 13.2698 23.25ZM10.3598 19.92L10.0798 21.15C10.0498 21.3 10.1098 21.42 10.1698 21.49C10.2998 21.65 10.5098 21.74 10.7498 21.74H13.2698C13.5298 21.74 13.7498 21.66 13.8698 21.51C13.9498 21.41 13.9698 21.29 13.9398 21.14L13.6598 19.91H10.3598V19.92Z"
        fill="currentColor"
      />
      <Path
        d="M14.2595 19.9198C14.0495 19.9198 13.8495 19.8398 13.6995 19.6698C13.4295 19.3598 13.4495 18.8897 13.7595 18.6097L15.4895 17.0697C16.1795 16.4597 16.1495 16.3098 15.6395 15.6698L12.5895 11.7997C12.4195 11.5897 12.2195 11.4697 12.0095 11.4697C11.7995 11.4697 11.5995 11.5897 11.4295 11.7997L8.37953 15.6698C7.83953 16.3598 7.84954 16.5098 8.50954 17.0498L10.2595 18.6097C10.5695 18.8797 10.5995 19.3598 10.3195 19.6698C10.0395 19.9798 9.56954 20.0097 9.25954 19.7297L7.52953 18.1897C6.26953 17.1597 6.15953 16.0597 7.19953 14.7397L10.2495 10.8698C10.6995 10.2998 11.3395 9.96973 12.0095 9.96973C12.6795 9.96973 13.3195 10.2998 13.7695 10.8698L16.8195 14.7397C17.8495 16.0397 17.7495 17.0797 16.4895 18.1897L14.7595 19.7297C14.6095 19.8597 14.4295 19.9198 14.2595 19.9198Z"
        fill="currentColor"
      />
      <Path
        d="M12.0098 14.4001C11.5998 14.4001 11.2598 14.0601 11.2598 13.6501V11.1201C11.2598 10.7101 11.5998 10.3701 12.0098 10.3701C12.4198 10.3701 12.7598 10.7101 12.7598 11.1201V13.6501C12.7598 14.0701 12.4198 14.4001 12.0098 14.4001Z"
        fill="currentColor"
      />
      <Path
        d="M11.9995 6.29003C11.4995 6.29003 10.9995 6.10002 10.6195 5.72002L9.83953 4.94006C9.07953 4.18006 9.07953 2.94005 9.83953 2.18005L10.6195 1.40008C11.3795 0.640078 12.6195 0.640078 13.3795 1.40008L14.1595 2.18005C14.9195 2.94005 14.9195 4.18006 14.1595 4.94006L13.3795 5.72002C12.9995 6.10002 12.4995 6.29003 11.9995 6.29003ZM11.9995 2.33007C11.8795 2.33007 11.7695 2.37008 11.6795 2.46008L10.8995 3.24004C10.8195 3.32004 10.7695 3.44005 10.7695 3.56005C10.7695 3.68005 10.8195 3.79006 10.8995 3.88006L11.6795 4.66003C11.8495 4.83003 12.1495 4.83003 12.3195 4.66003L13.0995 3.88006C13.1795 3.80006 13.2295 3.68005 13.2295 3.56005C13.2295 3.44005 13.1795 3.33004 13.0995 3.24004L12.3195 2.46008C12.2295 2.38008 12.1195 2.33007 11.9995 2.33007Z"
        fill="currentColor"
      />
      <Path
        d="M20.55 14.0601H19.45C18.37 14.0601 17.5 13.18 17.5 12.11V11.0101C17.5 9.93007 18.38 9.06006 19.45 9.06006H20.55C21.63 9.06006 22.5 9.94007 22.5 11.0101V12.11C22.5 13.19 21.62 14.0601 20.55 14.0601ZM19.45 10.5601C19.2 10.5601 19 10.7601 19 11.0101V12.11C19 12.36 19.2 12.5601 19.45 12.5601H20.55C20.8 12.5601 21 12.36 21 12.11V11.0101C21 10.7601 20.8 10.5601 20.55 10.5601H19.45Z"
        fill="currentColor"
      />
      <Path
        d="M4.55 14.0601H3.45C2.37 14.0601 1.5 13.18 1.5 12.11V11.0101C1.5 9.93007 2.38 9.06006 3.45 9.06006H4.55C5.63 9.06006 6.5 9.94007 6.5 11.0101V12.11C6.5 13.19 5.62 14.0601 4.55 14.0601ZM3.45 10.5601C3.2 10.5601 3 10.7601 3 11.0101V12.11C3 12.36 3.2 12.5601 3.45 12.5601H4.55C4.8 12.5601 5 12.36 5 12.11V11.0101C5 10.7601 4.8 10.5601 4.55 10.5601H3.45Z"
        fill="currentColor"
      />
      <Path
        d="M18.5397 10.8502C18.3497 10.8502 18.1597 10.7802 18.0097 10.6302L12.7097 5.33023C12.4197 5.04023 12.4197 4.56023 12.7097 4.27023C12.9997 3.98023 13.4797 3.98023 13.7697 4.27023L19.0697 9.57022C19.3597 9.86022 19.3597 10.3402 19.0697 10.6302C18.9197 10.7802 18.7297 10.8502 18.5397 10.8502Z"
        fill="currentColor"
      />
      <Path
        d="M5.46039 10.8502C5.27039 10.8502 5.08039 10.7802 4.93039 10.6302C4.64039 10.3402 4.64039 9.86022 4.93039 9.57022L10.2304 4.27023C10.5204 3.98023 11.0004 3.98023 11.2904 4.27023C11.5804 4.56023 11.5804 5.04023 11.2904 5.33023L5.99039 10.6302C5.84039 10.7802 5.65039 10.8502 5.46039 10.8502Z"
        fill="currentColor"
      />
    </Svg>
  );
};

const PenToolTwotone = ({ size = 24, className, ...props }: IconProps) => {
  return (
    <Svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      className={cn("text-foreground", className)}
      {...props}
    >
      <G opacity="0.4">
        <Path
          d="M10.7493 22.5001H13.2693C14.2293 22.5001 14.8493 21.8201 14.6693 20.9901L14.2594 19.1802H9.75935L9.34935 20.9901C9.16935 21.7701 9.84935 22.5001 10.7493 22.5001Z"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <Path
          d="M14.2605 19.1702L15.9905 17.6301C16.9605 16.7701 17.0005 16.1701 16.2305 15.2001L13.1805 11.3302C12.5405 10.5202 11.4905 10.5202 10.8505 11.3302L7.80054 15.2001C7.03054 16.1701 7.03054 16.8001 8.04054 17.6301L9.77054 19.1702"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <Path
          d="M12.0098 11.1201V13.6501"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </G>
      <Path
        d="M11.1501 5.19015L10.3701 4.41012C9.90008 3.94012 9.90008 3.18017 10.3701 2.71017L11.1501 1.93014C11.6201 1.46014 12.3801 1.46014 12.8501 1.93014L13.6301 2.71017C14.1001 3.18017 14.1001 3.94012 13.6301 4.41012L12.8501 5.19015C12.3801 5.66015 11.6201 5.66015 11.1501 5.19015Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M19.45 9.81006H20.55C21.21 9.81006 21.75 10.3501 21.75 11.0101V12.11C21.75 12.77 21.21 13.3101 20.55 13.3101H19.45C18.79 13.3101 18.25 12.77 18.25 12.11V11.0101C18.25 10.3501 18.79 9.81006 19.45 9.81006Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M4.55 9.81006H3.45C2.79 9.81006 2.25 10.3501 2.25 11.0101V12.11C2.25 12.77 2.79 13.3101 3.45 13.3101H4.55C5.21 13.3101 5.75 12.77 5.75 12.11V11.0101C5.75 10.3501 5.21 9.81006 4.55 9.81006Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M18.5402 10.0998L13.2402 4.7998"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M5.46094 10.0998L10.7609 4.7998"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

const variants: IconVariants = {
  bold: PenToolBold,
  broken: PenToolBroken,
  bulk: PenToolBulk,
  linear: PenToolLinear,
  outline: PenToolOutline,
  twotone: PenToolTwotone,
};

export const PenToolIcon = ({
  variant = "linear",
  className,
  ...props
}: IconProps) => {
  const textClasses = useContext(TextClassContext);
  const Component = variants[variant];
  return <Component className={cn(textClasses, className)} {...props} />;
};
