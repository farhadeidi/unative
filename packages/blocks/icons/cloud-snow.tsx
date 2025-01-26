import { Path, Svg } from "unative/lib/svg";
import { cn } from "unative/lib/utils";

import type { IconProps, IconVariants } from "../types/icons-type";

const CloudSnowBold = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M20.17 17.5709C19.64 18.0609 19.03 18.4309 18.37 18.6809C17.71 18.9309 17 18.4509 17 17.7409V16.4209C17 14.4709 15.42 12.8909 13.47 12.8909H10.53C8.58 12.8909 7 14.4709 7 16.4209V18.0009C7 18.5509 6.55 19.0009 6 19.0009H5.55C3.1 18.6309 2 16.6409 2 14.8609C2 13.1809 2.98 11.3209 5.11 10.8009C4.52 8.47091 5.02 6.28091 6.54 4.69091C8.27 2.88091 11.03 2.16091 13.41 2.90091C15.6 3.57091 17.14 5.37091 17.69 7.87091C19.6 8.30091 21.13 9.74091 21.74 11.7409C22.4 13.9109 21.8 16.1409 20.17 17.5709Z"
        fill="currentColor"
      />
      <Path
        d="M13.47 14.3906H10.53C9.26 14.3906 8.5 15.1506 8.5 16.4206V19.3606C8.5 20.6306 9.26 21.3906 10.53 21.3906H13.47C14.74 21.3906 15.5 20.6306 15.5 19.3606V16.4206C15.5 15.1506 14.74 14.3906 13.47 14.3906ZM10.5 17.6306C10.08 17.6306 9.75 17.2906 9.75 16.8806C9.75 16.4706 10.08 16.1306 10.5 16.1306C10.92 16.1306 11.25 16.4706 11.25 16.8806C11.25 17.2906 10.91 17.6306 10.5 17.6306ZM12 19.8806C11.59 19.8806 11.25 19.5406 11.25 19.1306C11.25 18.7206 11.59 18.3806 12 18.3806C12.41 18.3806 12.75 18.7206 12.75 19.1306C12.75 19.5406 12.42 19.8806 12 19.8806ZM13.51 17.6306C13.09 17.6306 12.76 17.2906 12.76 16.8806C12.76 16.4706 13.09 16.1306 13.51 16.1306C13.93 16.1306 14.26 16.4706 14.26 16.8806C14.26 17.2906 13.92 17.6306 13.51 17.6306Z"
        fill="currentColor"
      />
    </Svg>
  );
};

const CloudSnowBroken = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M12.0001 3.98007C8.01007 3.64007 3.66007 7.09007 5.62007 12.5601"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M16.6109 20C17.9509 20.01 19.2409 19.51 20.2309 18.61C23.5009 15.75 21.7509 10.01 17.4409 9.47002C17.2009 8.02002 16.6709 6.88002 15.9609 6.02002"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M7.27938 12.9701C6.74938 12.7001 6.15938 12.5601 5.56938 12.5701C0.909376 12.9001 0.919376 19.6801 5.56938 20.0101"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M15.8203 9.88998C16.3403 9.62998 16.9003 9.48998 17.4803 9.47998"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M12.9955 18.5H13.0045"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M8.9955 18.5H9.0045"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M10.9955 21.5H11.0045"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

const CloudSnowBulk = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M21.74 11.7401C21.13 9.74005 19.61 8.30005 17.7 7.87005C17.14 5.37005 15.6 3.58005 13.42 2.90005C11.04 2.17005 8.28 2.88005 6.55 4.69005C5.02 6.28005 4.52 8.47005 5.11 10.8001C2.98 11.3201 2 13.1801 2 14.8601C2 16.7401 3.23 18.8501 5.97 19.0401H8.5V16.4101C8.5 15.1401 9.26 14.3801 10.53 14.3801H13.47C14.74 14.3801 15.5 15.1401 15.5 16.4101V19.0401H16.31C16.32 19.0401 16.34 19.0401 16.35 19.0401C17.77 19.0401 19.13 18.5101 20.17 17.5601C21.8 16.1401 22.4 13.9101 21.74 11.7401Z"
        fill="currentColor"
      />
      <Path
        d="M13.47 14.3899H10.53C9.26 14.3899 8.5 15.1499 8.5 16.4199V19.3599C8.5 20.6299 9.26 21.3899 10.53 21.3899H13.47C14.74 21.3899 15.5 20.6299 15.5 19.3599V16.4199C15.5 15.1499 14.74 14.3899 13.47 14.3899ZM10.5 17.6299C10.08 17.6299 9.75 17.2899 9.75 16.8799C9.75 16.4699 10.08 16.1299 10.5 16.1299C10.92 16.1299 11.25 16.4699 11.25 16.8799C11.25 17.2899 10.91 17.6299 10.5 17.6299ZM12 19.8799C11.59 19.8799 11.25 19.5399 11.25 19.1299C11.25 18.7199 11.59 18.3799 12 18.3799C12.41 18.3799 12.75 18.7199 12.75 19.1299C12.75 19.5399 12.42 19.8799 12 19.8799ZM13.51 17.6299C13.09 17.6299 12.76 17.2899 12.76 16.8799C12.76 16.4699 13.09 16.1299 13.51 16.1299C13.93 16.1299 14.26 16.4699 14.26 16.8799C14.26 17.2899 13.92 17.6299 13.51 17.6299Z"
        fill="currentColor"
      />
    </Svg>
  );
};

const CloudSnowLinear = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M16.61 19.9999C17.95 20.0099 19.24 19.5099 20.23 18.6099C23.5 15.7499 21.75 10.0099 17.44 9.46995C15.9 0.129949 2.42998 3.66995 5.61998 12.5599"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M7.28011 12.97C6.75011 12.7 6.16011 12.56 5.57011 12.57C0.910109 12.9 0.920108 19.68 5.57011 20.01"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M15.8201 9.88998C16.3401 9.62998 16.9001 9.48998 17.4801 9.47998"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M12.9955 18.5H13.0045"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M8.9955 18.5H9.0045"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M10.9955 21.5H11.0045"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

const CloudSnowOutline = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M16.6495 20.75C16.6395 20.75 16.6195 20.75 16.6095 20.75C16.1995 20.75 15.8595 20.41 15.8695 19.99C15.8695 19.58 16.2395 19.21 16.6295 19.25C17.7295 19.25 18.8895 18.83 19.7395 18.05C21.2895 16.69 21.3995 14.75 20.9795 13.38C20.5595 12.01 19.3895 10.46 17.3695 10.2C17.0395 10.16 16.7795 9.91001 16.7195 9.58001C16.3295 7.19001 15.0295 5.54001 13.0895 4.94001C11.0695 4.32001 8.73949 4.93001 7.27949 6.46001C5.85949 7.95002 5.52949 10.02 6.34949 12.31C6.48949 12.7 6.28949 13.13 5.89949 13.27C5.50949 13.41 5.07949 13.21 4.93949 12.82C3.92949 10.01 4.38949 7.32001 6.19949 5.43001C8.04949 3.50001 10.9895 2.73001 13.5395 3.52001C15.8695 4.24001 17.5195 6.16001 18.1095 8.82001C20.1495 9.28001 21.7795 10.82 22.4295 12.95C23.1395 15.27 22.4995 17.65 20.7595 19.17C19.6095 20.19 18.1595 20.75 16.6495 20.75Z"
        fill="currentColor"
      />
      <Path
        d="M5.57008 20.7501C5.55008 20.7501 5.53008 20.7501 5.52008 20.7501C2.64008 20.5501 1.33008 18.2901 1.33008 16.2801C1.33008 14.2701 2.64008 12.0201 5.52008 11.8101C6.28008 11.8201 6.99008 11.9701 7.63008 12.2901C8.00008 12.4801 8.14008 12.9301 7.96008 13.3001C7.77008 13.6701 7.32008 13.8101 6.95008 13.6301C6.53008 13.4101 6.06008 13.3101 5.59008 13.3101C3.70008 13.4501 2.84008 14.9001 2.84008 16.2801C2.84008 17.6601 3.70008 19.1101 5.63008 19.2501C6.04008 19.2801 6.35008 19.6401 6.33008 20.0501C6.29008 20.4501 5.96008 20.7501 5.57008 20.7501Z"
        fill="currentColor"
      />
      <Path
        d="M15.8206 10.64C15.5406 10.64 15.2806 10.49 15.1506 10.22C14.9606 9.84997 15.1106 9.39997 15.4906 9.20997C16.1006 8.89997 16.7906 8.72997 17.4706 8.71997H17.4806C17.8906 8.71997 18.2206 9.04997 18.2306 9.45997C18.2406 9.86997 17.9106 10.22 17.4906 10.22C17.0306 10.23 16.5706 10.34 16.1506 10.55C16.0406 10.62 15.9306 10.64 15.8206 10.64Z"
        fill="currentColor"
      />
      <Path
        d="M12.9805 19C12.4205 19 11.9805 18.55 11.9805 18C11.9805 17.45 12.4305 17 12.9805 17C13.5305 17 13.9805 17.45 13.9805 18C13.9805 18.55 13.5305 19 12.9805 19Z"
        fill="currentColor"
      />
      <Path
        d="M8.98047 19C8.42047 19 7.98047 18.55 7.98047 18C7.98047 17.45 8.43047 17 8.98047 17C9.53047 17 9.98047 17.45 9.98047 18C9.98047 18.55 9.53047 19 8.98047 19Z"
        fill="currentColor"
      />
      <Path
        d="M10.9805 22C10.4205 22 9.98047 21.55 9.98047 21C9.98047 20.45 10.4305 20 10.9805 20C11.5305 20 11.9805 20.45 11.9805 21C11.9805 21.55 11.5305 22 10.9805 22Z"
        fill="currentColor"
      />
    </Svg>
  );
};

const CloudSnowTwotone = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M16.6097 19.9999C17.9497 20.0099 19.2397 19.5099 20.2297 18.6099C23.4997 15.7499 21.7497 10.0099 17.4397 9.46995C15.8997 0.129949 2.42973 3.66995 5.61973 12.5599"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M7.27938 12.9698C6.74938 12.6998 6.15938 12.5598 5.56938 12.5698C0.909376 12.8998 0.919376 19.6798 5.56938 20.0098"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M15.8203 9.88998C16.3403 9.62998 16.9003 9.48998 17.4803 9.47998"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        opacity="0.4"
        d="M12.9955 18.5H13.0045"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        opacity="0.4"
        d="M8.9955 18.5H9.0045"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        opacity="0.4"
        d="M10.9955 21.5H11.0045"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

const variants: IconVariants = {
  bold: CloudSnowBold,
  broken: CloudSnowBroken,
  bulk: CloudSnowBulk,
  linear: CloudSnowLinear,
  outline: CloudSnowOutline,
  twotone: CloudSnowTwotone,
};

export const CloudSnowIcon = ({ variant = "linear", ...props }: IconProps) => {
  const Component = variants[variant];
  return <Component {...props} />;
};
