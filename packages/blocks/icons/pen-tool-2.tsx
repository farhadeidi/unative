import { useContext } from "react";
import { G, Path, Svg } from "unative/lib/svg";
import { cn } from "unative/lib/utils";
import { TextClassContext } from "unative/ui/text";

import type { IconProps, IconVariants } from "../types/icons-type";

const PenTool2Bold = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M20.9795 10.7C20.7595 6.8 17.8695 3.55 14.0095 2.89C13.9495 2.12 13.3095 1.5 12.5195 1.5H11.5195C10.7295 1.5 10.0995 2.11 10.0295 2.88C6.14953 3.52 3.23953 6.78 3.01953 10.7C2.30953 10.82 1.76953 11.43 1.76953 12.17V13.17C1.76953 14 2.43953 14.67 3.26953 14.67H4.26953C5.09953 14.67 5.76953 14 5.76953 13.17V12.17C5.76953 11.43 5.22953 10.82 4.51953 10.7C4.72953 7.58 7.01953 4.99 10.0795 4.39C10.2495 5.03 10.8295 5.5 11.5195 5.5H12.5195C13.2095 5.5 13.7795 5.03 13.9595 4.4C16.9995 5.01 19.2695 7.6 19.4795 10.7C18.7695 10.82 18.2295 11.43 18.2295 12.17V13.17C18.2295 14 18.8995 14.67 19.7295 14.67H20.7295C21.5595 14.67 22.2295 14 22.2295 13.17V12.17C22.2295 11.43 21.6895 10.81 20.9795 10.7Z"
        fill="currentColor"
      />
      <Path
        d="M15.7703 16.5492L14.1303 17.9992H9.88032L8.24032 16.5492C7.29032 15.7692 7.29032 15.1692 8.01032 14.2492L10.9003 10.5892C11.1003 10.3392 11.3303 10.1692 11.5903 10.0792C11.8603 9.98922 12.1503 9.98922 12.4303 10.0792C12.6803 10.1692 12.9103 10.3392 13.1203 10.5892L16.0003 14.2392C16.7303 15.1592 16.6903 15.7292 15.7703 16.5492Z"
        fill="currentColor"
      />
      <Path
        d="M13.3202 21.9998H10.7302C9.81017 21.9998 9.12017 21.2498 9.30017 20.4498L9.61017 19.0598C9.67017 18.7798 9.92017 18.5898 10.2002 18.5898H13.8502C14.1302 18.5898 14.3702 18.7798 14.4402 19.0598L14.7502 20.4498C14.9402 21.2998 14.3002 21.9998 13.3202 21.9998Z"
        fill="currentColor"
      />
    </Svg>
  );
};

const PenTool2Broken = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M10.7513 22.4999H13.2713C14.2313 22.4999 14.8513 21.8199 14.6713 20.9899L14.2613 19.1799H9.76129L9.3513 20.9899C9.1713 21.7699 9.8513 22.4999 10.7513 22.4999Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M14.2208 12.6699L13.1708 11.3399C12.5308 10.5299 11.4808 10.5299 10.8408 11.3399L7.79077 15.2099C7.02077 16.1799 7.02078 16.8099 8.03078 17.6399L9.76078 19.1799"
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
        d="M12.0117 11.1199V13.6499"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M12.5195 5H11.5195C10.9695 5 10.5195 4.55 10.5195 4V3C10.5195 2.45 10.9695 2 11.5195 2H12.5195C13.0695 2 13.5195 2.45 13.5195 3V4C13.5195 4.55 13.0695 5 12.5195 5Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M3.26953 14.17H4.26953C4.81953 14.17 5.26953 13.72 5.26953 13.17V12.17C5.26953 11.62 4.81953 11.1699 4.26953 11.1699H3.26953C2.71953 11.1699 2.26953 11.62 2.26953 12.17V13.17C2.26953 13.72 2.71953 14.17 3.26953 14.17Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M20.7305 14.17H19.7305C19.1805 14.17 18.7305 13.72 18.7305 13.17V12.17C18.7305 11.62 19.1805 11.1699 19.7305 11.1699H20.7305C21.2805 11.1699 21.7305 11.62 21.7305 12.17V13.17C21.7305 13.72 21.2805 14.17 20.7305 14.17Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M3.75 11.17C3.75 9.20004 4.49001 7.41005 5.71001 6.05005"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M10.5199 3.56006C9.87993 3.64006 9.25992 3.79007 8.66992 4.01007"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M20.2495 11.17C20.2495 7.25004 17.3095 4.03006 13.5195 3.56006"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

const PenTool2Bulk = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M12.5195 1.5H11.5195C10.6895 1.5 10.0195 2.17 10.0195 3V4C10.0195 4.83 10.6895 5.5 11.5195 5.5H12.5195C13.3495 5.5 14.0195 4.83 14.0195 4V3C14.0195 2.17 13.3495 1.5 12.5195 1.5Z"
        fill="currentColor"
      />
      <Path
        d="M4.26953 10.6699H3.26953C2.43953 10.6699 1.76953 11.3399 1.76953 12.1699V13.1699C1.76953 13.9999 2.43953 14.6699 3.26953 14.6699H4.26953C5.09953 14.6699 5.76953 13.9999 5.76953 13.1699V12.1699C5.76953 11.3399 5.08953 10.6699 4.26953 10.6699Z"
        fill="currentColor"
      />
      <Path
        d="M20.7305 10.6699H19.7305C18.9005 10.6699 18.2305 11.3399 18.2305 12.1699V13.1699C18.2305 13.9999 18.9005 14.6699 19.7305 14.6699H20.7305C21.5605 14.6699 22.2305 13.9999 22.2305 13.1699V12.1699C22.2305 11.3399 21.5605 10.6699 20.7305 10.6699Z"
        fill="currentColor"
      />
      <Path
        d="M3.75 11.9198C3.34 11.9198 3 11.5798 3 11.1698C3 6.89982 6.2 3.30984 10.44 2.80984C10.84 2.76984 11.22 3.05981 11.27 3.46981C11.32 3.87981 11.02 4.24983 10.61 4.29983C7.13 4.70983 4.5 7.65982 4.5 11.1698C4.5 11.5798 4.16 11.9198 3.75 11.9198Z"
        fill="currentColor"
      />
      <Path
        d="M20.249 11.9198C19.839 11.9198 19.499 11.5798 19.499 11.1698C19.499 7.67979 16.889 4.72981 13.429 4.30981C13.019 4.25981 12.729 3.88979 12.779 3.47979C12.829 3.06979 13.209 2.77982 13.619 2.82982C17.829 3.33982 21.009 6.9298 21.009 11.1798C20.999 11.5798 20.669 11.9198 20.249 11.9198Z"
        fill="currentColor"
      />
      <Path
        d="M13.2898 22.0101H10.7198C9.79983 22.0101 9.11982 21.2701 9.28982 20.4701L9.70983 18.6201H14.2998L14.7198 20.4701C14.9098 21.3201 14.2698 22.0101 13.2898 22.0101Z"
        fill="currentColor"
      />
      <Path
        opacity="0.4"
        d="M16.0698 17.0499L14.2998 18.6199H9.70981L7.93981 17.0499C6.90981 16.2099 6.90981 15.5599 7.68981 14.5699L10.8098 10.6299C11.0298 10.3599 11.2798 10.1699 11.5498 10.0799C11.8398 9.97988 12.1598 9.97988 12.4498 10.0799C12.7198 10.1799 12.9698 10.3599 13.1898 10.6299L16.3098 14.5699C17.0898 15.5599 17.0598 16.1799 16.0698 17.0499Z"
        fill="currentColor"
      />
    </Svg>
  );
};

const PenTool2Linear = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M10.75 22.5001H13.27C14.23 22.5001 14.85 21.8201 14.67 20.9901L14.26 19.1802H9.75999L9.35 20.9901C9.17 21.7701 9.85 22.5001 10.75 22.5001Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M14.26 19.1702L15.99 17.6301C16.96 16.7701 17 16.1701 16.23 15.2001L13.18 11.3302C12.54 10.5202 11.49 10.5202 10.85 11.3302L7.8 15.2001C7.03 16.1701 7.02999 16.8001 8.03999 17.6301L9.77 19.1702"
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
        d="M12.52 5H11.52C10.97 5 10.52 4.55 10.52 4V3C10.52 2.45 10.97 2 11.52 2H12.52C13.07 2 13.52 2.45 13.52 3V4C13.52 4.55 13.07 5 12.52 5Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M3.27 14.17H4.27C4.82 14.17 5.27 13.72 5.27 13.17V12.17C5.27 11.62 4.82 11.1699 4.27 11.1699H3.27C2.72 11.1699 2.27 11.62 2.27 12.17V13.17C2.27 13.72 2.72 14.17 3.27 14.17Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M20.73 14.17H19.73C19.18 14.17 18.73 13.72 18.73 13.17V12.17C18.73 11.62 19.18 11.1699 19.73 11.1699H20.73C21.28 11.1699 21.73 11.62 21.73 12.17V13.17C21.73 13.72 21.28 14.17 20.73 14.17Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M10.52 3.56006C6.71 4.01006 3.75 7.24004 3.75 11.17"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M20.25 11.17C20.25 7.25004 17.31 4.03006 13.52 3.56006"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

const PenTool2Outline = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M13.2698 23.25H10.7498C10.0498 23.25 9.41979 22.9499 8.99979 22.4399C8.62979 21.9799 8.48978 21.39 8.61978 20.83L9.02979 19.02C9.10979 18.68 9.40978 18.4399 9.75978 18.4399H14.2598C14.6098 18.4399 14.9098 18.68 14.9898 19.02L15.3998 20.83C15.5298 21.43 15.4098 22.01 15.0398 22.47C14.6298 22.96 13.9898 23.25 13.2698 23.25ZM10.3598 19.92L10.0798 21.15C10.0498 21.3 10.1098 21.42 10.1698 21.49C10.2998 21.65 10.5098 21.74 10.7498 21.74H13.2698C13.5298 21.74 13.7498 21.66 13.8698 21.51C13.9498 21.41 13.9698 21.29 13.9398 21.14L13.6598 19.91H10.3598V19.92Z"
        fill="currentColor"
      />
      <Path
        d="M14.2595 19.9198C14.0495 19.9198 13.8495 19.8398 13.6995 19.6698C13.4295 19.3598 13.4495 18.8897 13.7595 18.6097L15.4895 17.0697C16.1795 16.4597 16.1495 16.3098 15.6395 15.6698L12.5895 11.7997C12.4195 11.5897 12.2195 11.4697 12.0095 11.4697C11.7995 11.4697 11.5995 11.5897 11.4295 11.7997L8.37954 15.6698C7.83954 16.3598 7.84953 16.5098 8.50953 17.0498L10.2595 18.6097C10.5695 18.8797 10.5995 19.3598 10.3195 19.6698C10.0395 19.9798 9.56953 20.0097 9.25953 19.7297L7.52953 18.1897C6.26953 17.1597 6.15953 16.0597 7.19953 14.7397L10.2495 10.8698C10.6995 10.2998 11.3395 9.96973 12.0095 9.96973C12.6795 9.96973 13.3195 10.2998 13.7695 10.8698L16.8195 14.7397C17.8495 16.0397 17.7495 17.0797 16.4895 18.1897L14.7595 19.7297C14.6095 19.8597 14.4295 19.9198 14.2595 19.9198Z"
        fill="currentColor"
      />
      <Path
        d="M12.0098 14.4001C11.5998 14.4001 11.2598 14.0601 11.2598 13.6501V11.1201C11.2598 10.7101 11.5998 10.3701 12.0098 10.3701C12.4198 10.3701 12.7598 10.7101 12.7598 11.1201V13.6501C12.7598 14.0701 12.4198 14.4001 12.0098 14.4001Z"
        fill="currentColor"
      />
      <Path
        d="M12.5195 5.75H11.5195C10.5595 5.75 9.76953 4.96 9.76953 4V3C9.76953 2.04 10.5595 1.25 11.5195 1.25H12.5195C13.4795 1.25 14.2695 2.04 14.2695 3V4C14.2695 4.96 13.4895 5.75 12.5195 5.75ZM11.5195 2.75C11.3795 2.75 11.2695 2.86 11.2695 3V4C11.2695 4.14 11.3795 4.25 11.5195 4.25H12.5195C12.6595 4.25 12.7695 4.14 12.7695 4V3C12.7695 2.86 12.6595 2.75 12.5195 2.75H11.5195Z"
        fill="currentColor"
      />
      <Path
        d="M4.26953 14.92H3.26953C2.30953 14.92 1.51953 14.13 1.51953 13.17V12.17C1.51953 11.21 2.30953 10.4199 3.26953 10.4199H4.26953C5.22953 10.4199 6.01953 11.21 6.01953 12.17V13.17C6.01953 14.13 5.22953 14.92 4.26953 14.92ZM3.26953 11.9199C3.12953 11.9199 3.01953 12.03 3.01953 12.17V13.17C3.01953 13.31 3.12953 13.42 3.26953 13.42H4.26953C4.40953 13.42 4.51953 13.31 4.51953 13.17V12.17C4.51953 12.03 4.40953 11.9199 4.26953 11.9199H3.26953Z"
        fill="currentColor"
      />
      <Path
        d="M20.7305 14.92H19.7305C18.7705 14.92 17.9805 14.13 17.9805 13.17V12.17C17.9805 11.21 18.7705 10.4199 19.7305 10.4199H20.7305C21.6905 10.4199 22.4805 11.21 22.4805 12.17V13.17C22.4805 14.13 21.7005 14.92 20.7305 14.92ZM19.7305 11.9199C19.5905 11.9199 19.4805 12.03 19.4805 12.17V13.17C19.4805 13.31 19.5905 13.42 19.7305 13.42H20.7305C20.8705 13.42 20.9805 13.31 20.9805 13.17V12.17C20.9805 12.03 20.8705 11.9199 20.7305 11.9199H19.7305Z"
        fill="currentColor"
      />
      <Path
        d="M3.75 11.9203C3.34 11.9203 3 11.5803 3 11.1703C3 6.90031 6.2 3.31033 10.44 2.81033C10.85 2.77033 11.22 3.0603 11.27 3.4703C11.32 3.8803 11.02 4.25032 10.61 4.30032C7.13 4.71032 4.5 7.66031 4.5 11.1703C4.5 11.5803 4.16 11.9203 3.75 11.9203Z"
        fill="currentColor"
      />
      <Path
        d="M20.249 11.9199C19.839 11.9199 19.499 11.5799 19.499 11.1699C19.499 7.67988 16.889 4.7299 13.429 4.3099C13.019 4.2599 12.729 3.88988 12.779 3.47988C12.829 3.06988 13.199 2.76992 13.619 2.82992C17.829 3.33992 21.009 6.92989 21.009 11.1799C20.999 11.5799 20.669 11.9199 20.249 11.9199Z"
        fill="currentColor"
      />
    </Svg>
  );
};

const PenTool2Twotone = ({ size = 24, className, ...props }: IconProps) => {
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
          d="M10.7493 22.5001H13.2693C14.2293 22.5001 14.8493 21.8201 14.6693 20.9901L14.2593 19.1802H9.75934L9.34935 20.9901C9.16935 21.7701 9.84934 22.5001 10.7493 22.5001Z"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <Path
          d="M14.2605 19.1702L15.9906 17.6301C16.9606 16.7701 17.0005 16.1701 16.2305 15.2001L13.1805 11.3302C12.5405 10.5202 11.4906 10.5202 10.8506 11.3302L7.80055 15.2001C7.03055 16.1701 7.03054 16.8001 8.04054 17.6301L9.77055 19.1702"
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
        d="M12.5195 5H11.5195C10.9695 5 10.5195 4.55 10.5195 4V3C10.5195 2.45 10.9695 2 11.5195 2H12.5195C13.0695 2 13.5195 2.45 13.5195 3V4C13.5195 4.55 13.0695 5 12.5195 5Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M3.26953 14.17H4.26953C4.81953 14.17 5.26953 13.72 5.26953 13.17V12.17C5.26953 11.62 4.81953 11.1699 4.26953 11.1699H3.26953C2.71953 11.1699 2.26953 11.62 2.26953 12.17V13.17C2.26953 13.72 2.71953 14.17 3.26953 14.17Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M20.7305 14.17H19.7305C19.1805 14.17 18.7305 13.72 18.7305 13.17V12.17C18.7305 11.62 19.1805 11.1699 19.7305 11.1699H20.7305C21.2805 11.1699 21.7305 11.62 21.7305 12.17V13.17C21.7305 13.72 21.2805 14.17 20.7305 14.17Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M10.52 3.56006C6.71 4.01006 3.75 7.24004 3.75 11.17"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M20.2495 11.17C20.2495 7.25004 17.3095 4.03006 13.5195 3.56006"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

const variants: IconVariants = {
  bold: PenTool2Bold,
  broken: PenTool2Broken,
  bulk: PenTool2Bulk,
  linear: PenTool2Linear,
  outline: PenTool2Outline,
  twotone: PenTool2Twotone,
};

export const PenTool2Icon = ({
  variant = "linear",
  className,
  ...props
}: IconProps) => {
  const textClasses = useContext(TextClassContext);
  const Component = variants[variant];
  return <Component className={cn(textClasses, className)} {...props} />;
};
