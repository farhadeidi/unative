import { Path, Svg } from "unative/lib/svg";
import { cn } from "unative/lib/utils";

import type { IconProps, IconVariants } from "../types/icons-type";

const WalletSearchBold = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M1.22986 21.6817L1.98986 20.9217C1.58986 20.3217 1.35986 19.6017 1.35986 18.8317C1.35986 16.7217 3.06986 15.0117 5.17986 15.0117C7.28986 15.0117 8.99986 16.7117 8.99986 18.8217C8.99986 20.9317 7.28986 22.6417 5.17986 22.6417C4.40986 22.6417 3.68986 22.4117 3.08986 22.0117L2.32986 22.7717C2.16986 22.9217 1.96986 23.0017 1.76986 23.0017C1.56986 23.0017 1.36986 22.9217 1.21986 22.7717C0.919859 22.4717 0.919859 21.9817 1.22986 21.6817Z"
        fill="currentColor"
      />
      <Path
        d="M21.5 12.5H19C17.9 12.5 17 13.4 17 14.5C17 15.6 17.9 16.5 19 16.5H21.5C21.78 16.5 22 16.28 22 16V13C22 12.72 21.78 12.5 21.5 12.5Z"
        fill="currentColor"
      />
      <Path
        d="M16.5292 5.40016C16.8292 5.69016 16.5792 6.14016 16.1592 6.14016L7.87923 6.13016C7.39923 6.13016 7.15923 5.55016 7.49923 5.21016L9.24923 3.45016C10.7292 1.98016 13.1192 1.98016 14.5992 3.45016L16.4892 5.36016C16.4992 5.37016 16.5192 5.39016 16.5292 5.40016Z"
        fill="currentColor"
      />
      <Path
        d="M21.8694 18.66C21.2594 20.72 19.4994 22 17.0994 22H10.5994C10.2094 22 9.95938 21.57 10.1194 21.21C10.4194 20.51 10.6094 19.72 10.6094 19C10.6094 15.97 8.13938 13.5 5.10938 13.5C4.34938 13.5 3.60938 13.66 2.92938 13.96C2.55938 14.12 2.10938 13.87 2.10938 13.47V12C2.10938 9.28 3.74938 7.38 6.29938 7.06C6.54938 7.02 6.81937 7 7.09937 7H17.0994C17.3594 7 17.6094 7.01 17.8494 7.05C19.8694 7.28 21.3294 8.51 21.8694 10.34C21.9694 10.67 21.7294 11 21.3894 11H19.0994C16.9294 11 15.2094 12.98 15.6794 15.23C16.0094 16.87 17.5294 18 19.1994 18H21.3894C21.7394 18 21.9694 18.34 21.8694 18.66Z"
        fill="currentColor"
      />
    </Svg>
  );
};

const WalletSearchBroken = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M12 22H17C20 22 22 20 22 17V12C22 9.3 20.3 7.3 17.8 7C17.6 7 17.3 7 17 7H7C6.7 7 6.5 6.99998 6.2 7.09998C3.6 7.39998 2 9.3 2 12C2 12.3 2 12.7 2 13"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M16.7992 4.79985C17.3992 5.39985 17.6992 6.19986 17.7992 6.99986C17.5992 6.99986 17.2992 6.99986 16.9992 6.99986H6.99922C6.69922 6.99986 6.49922 6.99984 6.19922 7.09984C6.29922 6.79984 6.49922 6.59985 6.79922 6.29985L9.99922 2.99986C10.8192 2.17986 11.9092 1.83984 12.9592 1.97984"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M22 12.5H19C17.9 12.5 17 13.4 17 14.5C17 15.6 17.9 16.5 19 16.5H22"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M5.79961 21.4C7.56961 21.4 8.99961 19.97 8.99961 18.2C8.99961 16.43 7.56961 15 5.79961 15C4.02961 15 2.59961 16.43 2.59961 18.2C2.59961 19.97 4.02961 21.4 5.79961 21.4Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M2 22L3 21"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

const WalletSearchBulk = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M17.7495 7.04997C17.5095 7.00997 17.2595 6.99998 16.9995 6.99998H6.99945C6.71945 6.99998 6.44945 7.01998 6.18945 7.05998C6.32945 6.77998 6.52945 6.52001 6.76945 6.28001L10.0194 3.02C11.3894 1.66 13.6095 1.66 14.9795 3.02L16.7295 4.78996C17.3695 5.41996 17.7095 6.21997 17.7495 7.04997Z"
        fill="currentColor"
      />
      <Path
        opacity="0.4"
        d="M2 16.36V12C2 9.28 3.64 7.38 6.19 7.06C6.45 7.02 6.72 7 7 7H17C17.26 7 17.51 7.00999 17.75 7.04999C20.33 7.34999 22 9.26 22 12V17C22 19.76 19.76 22 17 22H7.63H7C4.24 22 2 19.76 2 17V16.36Z"
        fill="currentColor"
      />
      <Path
        d="M22 12.5H19C17.9 12.5 17 13.4 17 14.5C17 15.6 17.9 16.5 19 16.5H22"
        fill="currentColor"
      />
      <Path
        d="M1.23055 21.6797L1.99054 20.9197C1.59054 20.3197 1.36054 19.5998 1.36054 18.8298C1.36054 16.7198 3.07054 15.0098 5.18054 15.0098C7.29054 15.0098 9.00054 16.7198 9.00054 18.8298C9.00054 20.9398 7.29054 22.6498 5.18054 22.6498C4.41054 22.6498 3.69054 22.4198 3.09054 22.0198L2.33055 22.7798C2.18055 22.9298 1.98054 23.0098 1.78054 23.0098C1.58054 23.0098 1.38055 22.9298 1.23055 22.7798C0.920547 22.4698 0.920547 21.9797 1.23055 21.6797Z"
        fill="currentColor"
      />
    </Svg>
  );
};

const WalletSearchLinear = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M12 22H17C20 22 22 20 22 17V12C22 9.3 20.3 7.3 17.8 7C17.6 7 17.3 7 17 7H7C6.7 7 6.5 6.99998 6.2 7.09998C3.6 7.39998 2 9.3 2 12C2 12.3 2 12.7 2 13"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M17.8 6.99995C17.6 6.99995 17.3 6.99995 17 6.99995H6.99995C6.69995 6.99995 6.49995 6.99993 6.19995 7.09993C6.29995 6.79993 6.49996 6.59994 6.79996 6.29994L9.99995 2.99995C11.4 1.59995 13.6 1.59995 15 2.99995L16.8 4.79994C17.4 5.39994 17.7 6.19995 17.8 6.99995Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M22 12.5H19C17.9 12.5 17 13.4 17 14.5C17 15.6 17.9 16.5 19 16.5H22"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M5.80157 21.4C7.57157 21.4 9.00156 19.97 9.00156 18.2C9.00156 16.43 7.57157 15 5.80157 15C4.03157 15 2.60156 16.43 2.60156 18.2C2.60156 19.97 4.03157 21.4 5.80157 21.4Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M2 22L3 21"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

const WalletSearchOutline = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M17 22.75H12C11.59 22.75 11.25 22.41 11.25 22C11.25 21.59 11.59 21.25 12 21.25H17C19.58 21.25 21.25 19.58 21.25 17V12C21.25 9.71 19.83 8 17.71 7.75H17H7C6.72 7.75 6.62 7.75 6.44 7.81C6.39 7.83 6.34 7.84003 6.29 7.84003C4.08 8.10003 2.75 9.65 2.75 12V13C2.75 13.41 2.41 13.75 2 13.75C1.59 13.75 1.25 13.41 1.25 13V12C1.25 8.94 3.13 6.72999 6.04 6.35999C6.42 6.24999 6.7 6.25 7 6.25H17.8C20.8 6.6 22.75 8.91 22.75 12V17C22.75 20.44 20.44 22.75 17 22.75Z"
        fill="currentColor"
      />
      <Path
        d="M6.19983 7.84996C5.99983 7.84996 5.80984 7.76999 5.66984 7.62999C5.46984 7.42999 5.39984 7.12997 5.48984 6.85997C5.64984 6.38997 5.93983 6.10001 6.26983 5.77001L9.45984 2.47997C11.1098 0.829969 13.8898 0.829959 15.5298 2.46996L17.3298 4.27001C17.9898 4.93001 18.4098 5.83996 18.5398 6.90996C18.5698 7.11996 18.4998 7.33999 18.3598 7.49999C18.2198 7.65999 18.0098 7.74999 17.7998 7.74999H6.99984C6.71984 7.74999 6.61984 7.74999 6.43984 7.80999C6.35984 7.83999 6.27983 7.84996 6.19983 7.84996ZM7.88984 6.24999H16.8498C16.7298 5.92999 16.5398 5.61001 16.2698 5.33001L14.4698 3.53002C13.3998 2.46002 11.5998 2.46002 10.5298 3.53002L7.88984 6.24999Z"
        fill="currentColor"
      />
      <Path
        d="M22 17.25H19C17.48 17.25 16.25 16.02 16.25 14.5C16.25 12.98 17.48 11.75 19 11.75H22C22.41 11.75 22.75 12.09 22.75 12.5C22.75 12.91 22.41 13.25 22 13.25H19C18.31 13.25 17.75 13.81 17.75 14.5C17.75 15.19 18.31 15.75 19 15.75H22C22.41 15.75 22.75 16.09 22.75 16.5C22.75 16.91 22.41 17.25 22 17.25Z"
        fill="currentColor"
      />
      <Path
        d="M5.79961 22.15C3.61961 22.15 1.84961 20.38 1.84961 18.2C1.84961 16.02 3.61961 14.25 5.79961 14.25C7.97961 14.25 9.74961 16.02 9.74961 18.2C9.74961 20.38 7.97961 22.15 5.79961 22.15ZM5.79961 15.75C4.44961 15.75 3.34961 16.85 3.34961 18.2C3.34961 19.55 4.44961 20.65 5.79961 20.65C7.14961 20.65 8.24961 19.55 8.24961 18.2C8.24961 16.85 7.14961 15.75 5.79961 15.75Z"
        fill="currentColor"
      />
      <Path
        d="M1.99945 22.75C1.80945 22.75 1.61945 22.68 1.46945 22.53C1.17945 22.24 1.17945 21.7599 1.46945 21.4699L2.46945 20.4699C2.75945 20.1799 3.23945 20.1799 3.52945 20.4699C3.81945 20.7599 3.81945 21.24 3.52945 21.53L2.52945 22.53C2.37945 22.68 2.18945 22.75 1.99945 22.75Z"
        fill="currentColor"
      />
    </Svg>
  );
};

const WalletSearchTwotone = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M12 22H17C20 22 22 20 22 17V12C22 9.3 20.3 7.3 17.8 7C17.6 7 17.3 7 17 7H7C6.7 7 6.5 6.99998 6.2 7.09998C3.6 7.39998 2 9.3 2 12C2 12.3 2 12.7 2 13"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        opacity="0.4"
        d="M17.7992 7.0002C17.5992 7.0002 17.2992 7.0002 16.9992 7.0002H6.99922C6.69922 7.0002 6.49922 7.00017 6.19922 7.10017C6.29922 6.80017 6.49922 6.60018 6.79922 6.30018L9.99922 3.0002C11.3992 1.6002 13.5992 1.6002 14.9992 3.0002L16.7992 4.80018C17.3992 5.40018 17.6992 6.2002 17.7992 7.0002Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        opacity="0.4"
        d="M22 12.5H19C17.9 12.5 17 13.4 17 14.5C17 15.6 17.9 16.5 19 16.5H22"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M5.79961 21.4C7.56961 21.4 8.99961 19.97 8.99961 18.2C8.99961 16.43 7.56961 15 5.79961 15C4.02961 15 2.59961 16.43 2.59961 18.2C2.59961 19.97 4.02961 21.4 5.79961 21.4Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M2 22L3 21"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

const variants: IconVariants = {
  bold: WalletSearchBold,
  broken: WalletSearchBroken,
  bulk: WalletSearchBulk,
  linear: WalletSearchLinear,
  outline: WalletSearchOutline,
  twotone: WalletSearchTwotone,
};

export const WalletSearchIcon = ({
  variant = "linear",
  ...props
}: IconProps) => {
  const Component = variants[variant];
  return <Component {...props} />;
};
