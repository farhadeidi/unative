import { Path, Svg } from "unative/lib/svg";
import { cn } from "unative/lib/utils";

import type { IconProps, IconVariants } from "../types/icons-type";

const PaintbucketBold = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M19.11 7.47145L15.59 3.95145C12.43 0.801451 10.77 1.96145 8.77005 3.95145L3.11005 9.61145C1.96005 10.7615 1.33005 11.5015 1.10005 12.3215C1.10005 12.3315 1.09005 12.3315 1.09005 12.3315C1.09005 12.3415 1.09005 12.3415 1.09005 12.3415C1.09005 12.3515 1.09005 12.3515 1.09005 12.3515V12.3815C0.680048 13.8415 1.76005 15.0815 3.11005 16.4315L6.64005 19.9415C7.90005 21.2115 8.92005 22.0015 10.05 22.0015C11.18 22.0015 12.15 21.2415 13.45 19.9415L19.11 14.2915C19.6 13.7915 19.96 13.3815 20.24 12.9915C20.24 12.9815 20.24 12.9815 20.24 12.9815C20.24 12.9815 20.24 12.9815 20.25 12.9815C21.53 11.1915 21.19 9.54145 19.11 7.47145ZM18.08 11.3715H18.07C17.77 11.3015 17.46 11.2415 17.15 11.1815C17.13 11.1815 17.11 11.1715 17.08 11.1715C16.38 11.0415 15.67 10.9315 14.95 10.8415H14.91C14.19 10.7515 13.46 10.6815 12.73 10.6415H12.65C12.01 10.6015 11.36 10.5815 10.72 10.5815C9.94005 10.5815 9.16005 10.6215 8.39005 10.6715C8.26005 10.6815 8.14005 10.6915 8.02005 10.7015C7.44005 10.7415 6.86005 10.8015 6.29005 10.8715C6.13005 10.8915 5.98005 10.9115 5.83005 10.9315C5.25005 11.0215 4.68005 11.1115 4.11005 11.2215C3.98005 11.2515 3.86005 11.2715 3.73005 11.2915C3.68005 11.3015 3.62005 11.3115 3.57005 11.3215C3.75005 11.1215 3.96005 10.9115 4.19005 10.6815L9.84005 5.03145C11.66 3.23145 12.28 2.80145 14.52 5.03145L18.03 8.55145C18.57 9.08145 18.93 9.53145 19.15 9.92145C19.15 9.92145 19.15 9.93145 19.16 9.93145C19.58 10.6615 18.9 11.5315 18.08 11.3715Z"
        fill="currentColor"
      />
      <Path
        d="M20.9499 16.87C20.5699 16.4 20.2399 16 19.4999 16C18.7599 16 18.4299 16.4 18.0599 16.87C17.2599 17.86 16.8999 18.94 17.0299 19.98C17.1799 21.17 18.1999 22 19.4999 22C20.7999 22 21.8199 21.17 21.9699 19.97C22.0999 18.93 21.7499 17.86 20.9499 16.87Z"
        fill="currentColor"
      />
    </Svg>
  );
};

const PaintbucketBroken = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M15.0006 4.32996C12.4106 1.73996 11.2806 2.38996 9.3406 4.32996L3.7706 9.89996C1.3806 12.29 1.1806 12.96 3.7706 15.56L7.2306 19.02C9.6606 21.45 10.4906 21.41 12.8906 19.02L18.4606 13.45C20.4006 11.51 20.8906 10.22 18.4606 7.78996"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M19.1995 16.79L18.5395 17.88C17.6095 19.43 18.3295 20.7 20.1395 20.7C21.9495 20.7 22.6695 19.43 21.7395 17.88L21.0795 16.79C20.5595 15.93 19.7095 15.93 19.1995 16.79Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M2 12.2398C7.56 10.7298 13.42 10.6798 19 12.1098L19.5 12.2398"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

const PaintbucketBulk = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M19.11 7.46999L15.59 3.94999C12.43 0.799986 10.77 1.95999 8.77005 3.94999L3.11005 9.60999C1.96005 10.76 1.33005 11.5 1.10005 12.32C1.10005 12.33 1.09005 12.33 1.09005 12.33C1.09005 12.34 1.09005 12.34 1.09005 12.34C1.09005 12.35 1.09005 12.35 1.09005 12.35V12.38C0.680048 13.84 1.76005 15.08 3.11005 16.43L6.64005 19.94C7.90005 21.21 8.92005 22 10.05 22C11.18 22 12.15 21.24 13.45 19.94L19.11 14.29C19.6 13.79 19.96 13.38 20.24 12.99C20.24 12.98 20.24 12.98 20.24 12.98C20.24 12.98 20.24 12.98 20.25 12.98C21.53 11.19 21.19 9.53999 19.11 7.46999ZM19.15 9.91999C19.58 10.65 18.9 11.55 18.07 11.37C17.76 11.3 17.46 11.24 17.15 11.18C17.13 11.18 17.11 11.17 17.08 11.17C16.38 11.04 15.67 10.93 14.95 10.84H14.91C14.19 10.75 13.46 10.68 12.73 10.64H12.65C12.01 10.6 11.36 10.58 10.72 10.58C9.94005 10.58 9.16005 10.62 8.39005 10.67C8.26005 10.68 8.14005 10.69 8.02005 10.7C7.44005 10.74 6.86005 10.8 6.29005 10.87C6.13005 10.89 5.98005 10.91 5.83005 10.93C5.25005 11.02 4.68005 11.11 4.11005 11.22C3.98005 11.25 3.86005 11.27 3.73005 11.29C3.68005 11.3 3.62005 11.31 3.57005 11.32C3.75005 11.12 3.96005 10.91 4.19005 10.68L9.84005 5.02999C11.66 3.22999 12.28 2.79999 14.52 5.02999L18.03 8.54999C18.57 9.07999 18.93 9.52999 19.15 9.91999Z"
        fill="currentColor"
      />
      <Path
        d="M19.1503 9.92018C19.5803 10.6502 18.9003 11.5502 18.0703 11.3702C17.7603 11.3002 17.4603 11.2402 17.1503 11.1802C17.1303 11.1802 17.1103 11.1702 17.0803 11.1702C16.3803 11.0402 15.6703 10.9302 14.9503 10.8402H14.9103C14.1903 10.7502 13.4603 10.6802 12.7303 10.6402H12.6503C12.0103 10.6002 11.3603 10.5802 10.7203 10.5802C9.94031 10.5802 9.16031 10.6202 8.39031 10.6702C8.26031 10.6802 8.14031 10.6902 8.02031 10.7002C7.44031 10.7402 6.86031 10.8002 6.29031 10.8702C6.13031 10.8902 5.98031 10.9102 5.83031 10.9302C5.25031 11.0202 4.68031 11.1102 4.11031 11.2202C3.98031 11.2502 3.86031 11.2702 3.73031 11.2902C3.68031 11.3002 3.62031 11.3102 3.57031 11.3202C3.75031 11.1202 3.96031 10.9102 4.19031 10.6802L9.84031 5.03018C11.6603 3.23018 12.2803 2.80018 14.5203 5.03018L18.0303 8.55018C18.5703 9.08018 18.9303 9.53018 19.1503 9.92018Z"
        fill="currentColor"
      />
      <Path
        d="M20.9499 16.87C20.5699 16.4 20.2399 16 19.4999 16C18.7599 16 18.4299 16.4 18.0599 16.87C17.2599 17.86 16.8999 18.94 17.0299 19.98C17.1799 21.17 18.1999 22 19.4999 22C20.7999 22 21.8199 21.17 21.9699 19.97C22.0999 18.93 21.7499 17.86 20.9499 16.87Z"
        fill="currentColor"
      />
    </Svg>
  );
};

const PaintbucketLinear = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M3.77 15.56L7.23 19.02C9.66 21.45 10.49 21.41 12.89 19.02L18.46 13.45C20.4 11.51 20.89 10.22 18.46 7.78996L15 4.32996C12.41 1.73996 11.28 2.38996 9.34 4.32996L3.77 9.89996C1.38 12.3 1.18 12.97 3.77 15.56Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M19.2 16.79L18.54 17.88C17.61 19.43 18.33 20.7 20.14 20.7C21.95 20.7 22.67 19.43 21.74 17.88L21.08 16.79C20.56 15.93 19.71 15.93 19.2 16.79Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M2 12.2401C7.56 10.7301 13.42 10.6801 19 12.1101L19.5 12.2401"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

const PaintbucketOutline = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M10.0605 21.5802C9.06049 21.5802 8.05049 20.9002 6.70049 19.5602L3.24049 16.1002C0.300494 13.1602 0.600494 12.0302 3.24049 9.3802L8.81049 3.8002C10.7805 1.8302 12.4105 0.680196 15.5305 3.8002L18.9905 7.2602C21.8005 10.0702 21.1205 11.8502 18.9905 13.9802L13.4205 19.5502C12.0705 20.9002 11.0705 21.5802 10.0605 21.5802ZM4.30049 15.0302L7.76049 18.4902C9.8805 20.6102 10.2305 20.6202 12.3605 18.4902L17.9305 12.9202C19.6005 11.2502 20.0305 10.4202 17.9305 8.3202L14.4705 4.8602C12.2805 2.6702 11.6205 3.1202 9.87049 4.8602L4.30049 10.4302C2.18049 12.5602 2.00049 12.7302 4.30049 15.0302Z"
        fill="currentColor"
      />
      <Path
        d="M20.1409 21.4599C19.0009 21.4599 18.1009 21.0199 17.6609 20.2499C17.2209 19.4799 17.3109 18.4799 17.9009 17.4999L18.5609 16.4099C18.9509 15.7699 19.5209 15.3999 20.1409 15.3999C20.7609 15.3999 21.3409 15.7699 21.7209 16.4099L22.3809 17.4999C22.9709 18.4799 23.0509 19.4799 22.6209 20.2499C22.1909 21.0199 21.2709 21.4599 20.1409 21.4599ZM20.1409 16.8999C20.0909 16.8999 19.9709 16.9799 19.8409 17.1799L19.1809 18.2699C18.8809 18.7699 18.8009 19.2199 18.9609 19.5099C19.1209 19.7999 19.5509 19.9599 20.1309 19.9599C20.7109 19.9599 21.1409 19.7999 21.3009 19.5099C21.4609 19.2199 21.3809 18.7799 21.0809 18.2699L20.4209 17.1799C20.3109 16.9699 20.1909 16.8999 20.1409 16.8999Z"
        fill="currentColor"
      />
      <Path
        d="M2.00062 12.9901C1.67062 12.9901 1.37062 12.7701 1.28062 12.4401C1.17062 12.0401 1.41062 11.6301 1.81062 11.5201C7.48062 9.98011 13.4906 9.93011 19.1906 11.3901L19.6906 11.5201C20.0906 11.6201 20.3306 12.0301 20.2306 12.4301C20.1306 12.8301 19.7206 13.0701 19.3206 12.9701L18.8206 12.8401C13.3706 11.4401 7.63062 11.4901 2.21062 12.9701C2.13062 12.9901 2.06062 12.9901 2.00062 12.9901Z"
        fill="currentColor"
      />
    </Svg>
  );
};

const PaintbucketTwotone = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M3.7706 15.56L7.2306 19.02C9.6606 21.45 10.4906 21.41 12.8906 19.02L18.4606 13.45C20.4006 11.51 20.8906 10.22 18.4606 7.78996L15.0006 4.32996C12.4106 1.73996 11.2806 2.38996 9.3406 4.32996L3.7706 9.89996C1.3806 12.3 1.1806 12.97 3.7706 15.56Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        opacity="0.4"
        d="M19.1995 16.79L18.5395 17.88C17.6095 19.43 18.3295 20.7 20.1395 20.7C21.9495 20.7 22.6695 19.43 21.7395 17.88L21.0795 16.79C20.5595 15.93 19.7095 15.93 19.1995 16.79Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        opacity="0.4"
        d="M2 12.2398C7.56 10.7298 13.42 10.6798 19 12.1098L19.5 12.2398"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

const variants: IconVariants = {
  bold: PaintbucketBold,
  broken: PaintbucketBroken,
  bulk: PaintbucketBulk,
  linear: PaintbucketLinear,
  outline: PaintbucketOutline,
  twotone: PaintbucketTwotone,
};

export const PaintbucketIcon = ({
  variant = "linear",
  ...props
}: IconProps) => {
  const Component = variants[variant];
  return <Component {...props} />;
};
