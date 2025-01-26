import { Path, Svg } from "unative/lib/svg";
import { cn } from "unative/lib/utils";

import type { IconProps, IconVariants } from "../types/icons-type";

const ReceiptEditBold = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M15.78 2H8.22C4.44 2 3.5 3.01 3.5 7.04V18.3C3.5 20.96 4.96 21.59 6.73 19.69L6.74 19.68C7.56 18.81 8.81 18.88 9.52 19.83L10.53 21.18C11.34 22.25 12.65 22.25 13.46 21.18L14.47 19.83C15.19 18.87 16.44 18.8 17.26 19.68C19.04 21.58 20.49 20.95 20.49 18.29V7.04C20.5 3.01 19.56 2 15.78 2ZM14.84 9.99L14.34 10.5H14.33L11.3 13.53C11.17 13.66 10.9 13.8 10.71 13.82L9.36 14.02C8.87 14.09 8.53 13.74 8.6 13.26L8.79 11.9C8.82 11.71 8.95 11.45 9.08 11.31L12.12 8.28L12.62 7.77C12.95 7.44 13.32 7.2 13.72 7.2C14.06 7.2 14.43 7.36 14.84 7.77C15.74 8.67 15.45 9.38 14.84 9.99Z"
        fill="currentColor"
      />
    </Svg>
  );
};

const ReceiptEditBroken = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M3.5 11V18.3C3.5 20.96 4.96001 21.59 6.73001 19.69L6.73999 19.68C7.55999 18.81 8.80999 18.88 9.51999 19.83L10.53 21.18"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M20.5 11.3V7.04001C20.5 3.01001 19.56 2 15.78 2H8.22C4.44 2 3.5 3.01001 3.5 7.04001"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M8 7H12.5"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M15 7H17"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M9 11H15"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M18.2091 14.77L14.6691 18.31C14.5291 18.45 14.3991 18.71 14.3691 18.9L14.1791 20.25C14.1091 20.74 14.4491 21.0801 14.9391 21.0101L16.2891 20.82C16.4791 20.79 16.7491 20.66 16.8791 20.52L20.4191 16.9801C21.0291 16.3701 21.3191 15.6601 20.4191 14.7601C19.5291 13.8701 18.8191 14.16 18.2091 14.77Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M17.6992 15.28C17.9992 16.36 18.8392 17.2 19.9192 17.5"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

const ReceiptEditBulk = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M6.73026 19.6998C7.55026 18.8198 8.80023 18.8898 9.52023 19.8498L10.5302 21.1998C11.3402 22.2698 12.6502 22.2698 13.4602 21.1998L14.4702 19.8498C15.1902 18.8898 16.4403 18.8198 17.2603 19.6998C19.0403 21.5998 20.4902 20.9698 20.4902 18.3098V7.04974C20.4902 3.01974 19.5502 2.00977 15.7702 2.00977H8.21024C4.43024 2.00977 3.49023 3.01974 3.49023 7.04974V18.3098C3.50023 20.9698 4.96026 21.5898 6.73026 19.6998Z"
        fill="currentColor"
      />
      <Path
        d="M14.8409 9.99017L14.3409 10.5002H14.3309L11.3009 13.5302C11.1709 13.6602 10.9009 13.8002 10.7109 13.8202L9.36091 14.0202C8.87091 14.0902 8.53093 13.7402 8.60093 13.2602L8.79093 11.9002C8.82093 11.7102 8.95091 11.4502 9.08091 11.3102L12.1209 8.28018L12.6209 7.77017C12.9509 7.44017 13.3209 7.2002 13.7209 7.2002C14.0609 7.2002 14.4309 7.36017 14.8409 7.77017C15.7409 8.67017 15.4509 9.38017 14.8409 9.99017Z"
        fill="currentColor"
      />
    </Svg>
  );
};

const ReceiptEditLinear = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M20.5 11.3V7.04001C20.5 3.01001 19.56 2 15.78 2H8.22C4.44 2 3.5 3.01001 3.5 7.04001V18.3C3.5 20.96 4.96001 21.59 6.73001 19.69L6.73999 19.68C7.55999 18.81 8.80999 18.88 9.51999 19.83L10.53 21.18"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M8 7H16"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M9 11H15"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M18.211 14.7703L14.671 18.3103C14.531 18.4503 14.401 18.7103 14.371 18.9003L14.181 20.2503C14.111 20.7403 14.451 21.0803 14.941 21.0103L16.291 20.8203C16.481 20.7903 16.751 20.6603 16.881 20.5203L20.421 16.9803C21.031 16.3703 21.321 15.6603 20.421 14.7603C19.531 13.8703 18.821 14.1603 18.211 14.7703Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M17.6992 15.2803C17.9992 16.3603 18.8392 17.2003 19.9192 17.5003"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

const ReceiptEditOutline = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M10.5396 21.94C10.3096 21.94 10.0895 21.84 9.93954 21.64L8.92953 20.29C8.71953 20.01 8.43956 19.85 8.13956 19.83C7.82956 19.81 7.53953 19.95 7.29953 20.2C5.84953 21.75 4.74954 21.62 4.21954 21.42C3.67954 21.21 2.76953 20.52 2.76953 18.3V7.04001C2.76953 2.60001 4.04953 1.25 8.23953 1.25H15.7896C19.9796 1.25 21.2596 2.60001 21.2596 7.04001V11.3C21.2596 11.71 20.9196 12.05 20.5096 12.05C20.0996 12.05 19.7596 11.71 19.7596 11.3V7.04001C19.7596 3.43001 19.1296 2.75 15.7896 2.75H8.23953C4.89953 2.75 4.26953 3.43001 4.26953 7.04001V18.3C4.26953 19.35 4.52953 19.93 4.76953 20.02C4.94953 20.09 5.43955 19.99 6.19955 19.18C6.74955 18.6 7.46954 18.29 8.21954 18.33C8.95954 18.37 9.65955 18.76 10.1295 19.39L11.1495 20.74C11.3995 21.07 11.3295 21.54 10.9995 21.79C10.8495 21.9 10.6896 21.94 10.5396 21.94Z"
        fill="currentColor"
      />
      <Path
        d="M16 7.75H8C7.59 7.75 7.25 7.41 7.25 7C7.25 6.59 7.59 6.25 8 6.25H16C16.41 6.25 16.75 6.59 16.75 7C16.75 7.41 16.41 7.75 16 7.75Z"
        fill="currentColor"
      />
      <Path
        d="M15 11.75H9C8.59 11.75 8.25 11.41 8.25 11C8.25 10.59 8.59 10.25 9 10.25H15C15.41 10.25 15.75 10.59 15.75 11C15.75 11.41 15.41 11.75 15 11.75Z"
        fill="currentColor"
      />
      <Path
        d="M14.8196 21.7801C14.4396 21.7801 14.0796 21.6401 13.8196 21.3801C13.5096 21.0701 13.3696 20.6201 13.4396 20.1501L13.6296 18.8001C13.6796 18.4501 13.8896 18.0301 14.1396 17.7801L17.6796 14.2401C18.1596 13.7601 18.6296 13.5101 19.1396 13.4601C19.7596 13.4001 20.3796 13.6601 20.9596 14.2401C21.5396 14.8201 21.7996 15.4301 21.7396 16.0601C21.6896 16.5601 21.4296 17.0401 20.9596 17.5201L17.4196 21.0601C17.1696 21.3101 16.7496 21.5201 16.3996 21.5701L15.0495 21.7601C14.9695 21.7701 14.8996 21.7801 14.8196 21.7801ZM19.3096 14.9501C19.2996 14.9501 19.2896 14.9501 19.2796 14.9501C19.1396 14.9601 18.9496 15.0901 18.7396 15.3001L15.1996 18.8401C15.1696 18.8701 15.1196 18.9701 15.1196 19.0101L14.9396 20.2601L16.1896 20.0801C16.2296 20.0701 16.3295 20.0201 16.3595 19.9901L19.8996 16.4501C20.1096 16.2301 20.2396 16.0501 20.2496 15.9101C20.2696 15.7101 20.0696 15.4701 19.8996 15.3001C19.7396 15.1401 19.5096 14.9501 19.3096 14.9501Z"
        fill="currentColor"
      />
      <Path
        d="M19.9206 18.2499C19.8506 18.2499 19.7806 18.2399 19.7206 18.2199C18.4006 17.8499 17.3506 16.7999 16.9806 15.4799C16.8706 15.0799 17.1006 14.6699 17.5006 14.5499C17.9006 14.4399 18.3106 14.6699 18.4206 15.0699C18.6506 15.8899 19.3006 16.5399 20.1206 16.7699C20.5206 16.8799 20.7506 17.2999 20.6406 17.6999C20.5506 18.0299 20.2506 18.2499 19.9206 18.2499Z"
        fill="currentColor"
      />
    </Svg>
  );
};

const ReceiptEditTwotone = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M20.5 11.3V7.04001C20.5 3.01001 19.56 2 15.78 2H8.22C4.44 2 3.5 3.01001 3.5 7.04001V18.3C3.5 20.96 4.96001 21.59 6.73001 19.69L6.73999 19.68C7.55999 18.81 8.80999 18.88 9.51999 19.83L10.53 21.18"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        opacity="0.4"
        d="M8 7H16"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        opacity="0.4"
        d="M9 11H15"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M18.2091 14.7698L14.6691 18.3098C14.5291 18.4498 14.3991 18.7098 14.3691 18.8998L14.1791 20.2498C14.1091 20.7398 14.4491 21.0798 14.9391 21.0098L16.2891 20.8198C16.4791 20.7898 16.7491 20.6598 16.8791 20.5198L20.4191 16.9798C21.0291 16.3698 21.3191 15.6598 20.4191 14.7598C19.5291 13.8698 18.8191 14.1598 18.2091 14.7698Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M17.6992 15.2798C17.9992 16.3598 18.8392 17.1998 19.9192 17.4998"
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
  bold: ReceiptEditBold,
  broken: ReceiptEditBroken,
  bulk: ReceiptEditBulk,
  linear: ReceiptEditLinear,
  outline: ReceiptEditOutline,
  twotone: ReceiptEditTwotone,
};

export const ReceiptEditIcon = ({
  variant = "linear",
  ...props
}: IconProps) => {
  const Component = variants[variant];
  return <Component {...props} />;
};
