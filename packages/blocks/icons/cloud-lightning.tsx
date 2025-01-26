import { useContext } from "react";
import { Path, Svg } from "unative/lib/svg";
import { cn } from "unative/lib/utils";
import { TextClassContext } from "unative/ui/text";

import type { IconProps, IconVariants } from "../types/icons-type";

const CloudLightningBold = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M13.47 14.3906H10.53C9.26 14.3906 8.5 15.1506 8.5 16.4206V19.3606C8.5 20.6306 9.26 21.3906 10.53 21.3906H13.47C14.74 21.3906 15.5 20.6306 15.5 19.3606V16.4206C15.5 15.1506 14.74 14.3906 13.47 14.3906ZM13.67 18.0506L12 19.9506L11.8 20.1806C11.53 20.4906 11.3 20.4106 11.3 19.9906V18.2106H10.54C10.19 18.2106 10.1 18.0006 10.33 17.7406L12 15.8406L12.2 15.6106C12.47 15.3006 12.7 15.3806 12.7 15.8006V17.5806H13.46C13.81 17.5706 13.9 17.7906 13.67 18.0506Z"
        fill="currentColor"
      />
    </Svg>
  );
};

const CloudLightningBroken = ({
  size = 24,
  className,
  ...props
}: IconProps) => {
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
        d="M9.2291 19.1601H10.2291V21.4901C10.2291 21.8301 10.6591 22.0001 10.8791 21.7401L13.3291 18.9501C13.6291 18.6101 13.4991 18.3301 13.0491 18.3301H12.0491V16.0001C12.0491 15.6601 11.6191 15.4901 11.3991 15.7501L8.9491 18.5401C8.6491 18.8801 8.7791 19.1601 9.2291 19.1601Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
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
    </Svg>
  );
};

const CloudLightningBulk = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M13.47 14.3899H10.53C9.26 14.3899 8.5 15.1499 8.5 16.4199V19.3599C8.5 20.6299 9.26 21.3899 10.53 21.3899H13.47C14.74 21.3899 15.5 20.6299 15.5 19.3599V16.4199C15.5 15.1499 14.74 14.3899 13.47 14.3899ZM13.67 18.0499L12 19.9499L11.8 20.1799C11.53 20.4899 11.3 20.4099 11.3 19.9899V18.2099H10.54C10.19 18.2099 10.1 17.9999 10.33 17.7399L12 15.8399L12.2 15.6099C12.47 15.2999 12.7 15.3799 12.7 15.7999V17.5799H13.46C13.81 17.5699 13.9 17.7899 13.67 18.0499Z"
        fill="currentColor"
      />
    </Svg>
  );
};

const CloudLightningLinear = ({
  size = 24,
  className,
  ...props
}: IconProps) => {
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
        d="M9.23008 19.16H10.2301V21.49C10.2301 21.83 10.6601 22 10.8801 21.74L13.3301 18.95C13.6301 18.61 13.5001 18.33 13.0501 18.33H12.0501V16C12.0501 15.66 11.6201 15.49 11.4001 15.75L8.95008 18.54C8.65008 18.88 8.78008 19.16 9.23008 19.16Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

const CloudLightningOutline = ({
  size = 24,
  className,
  ...props
}: IconProps) => {
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
        d="M16.6495 20.75C16.6395 20.75 16.6195 20.75 16.6095 20.75C16.1995 20.75 15.8595 20.41 15.8695 19.99C15.8695 19.58 16.2195 19.21 16.6295 19.25C17.7895 19.25 18.8895 18.83 19.7395 18.05C21.2895 16.69 21.3995 14.75 20.9795 13.38C20.5595 12.01 19.3895 10.46 17.3695 10.2C17.0395 10.16 16.7795 9.91001 16.7195 9.58001C16.3295 7.19001 15.0295 5.54001 13.0895 4.94001C11.0695 4.32001 8.73949 4.93001 7.27949 6.46001C5.85949 7.95002 5.52949 10.02 6.34949 12.31C6.48949 12.7 6.28949 13.13 5.89949 13.27C5.50949 13.41 5.07949 13.21 4.93949 12.82C3.92949 10.01 4.38949 7.32001 6.19949 5.43001C8.04949 3.50001 10.9895 2.73001 13.5395 3.52001C15.8695 4.24001 17.5195 6.16001 18.1095 8.82001C20.1495 9.28001 21.7795 10.82 22.4295 12.95C23.1395 15.27 22.4995 17.65 20.7595 19.17C19.6095 20.19 18.1595 20.75 16.6495 20.75Z"
        fill="currentColor"
      />
      <Path
        d="M5.57008 20.7501C5.55008 20.7501 5.53008 20.7501 5.52008 20.7501C2.64008 20.5501 1.33008 18.2901 1.33008 16.2801C1.33008 14.2701 2.64008 12.0201 5.52008 11.8101C6.28008 11.8201 6.99008 11.9701 7.63008 12.2901C8.00008 12.4801 8.14008 12.9301 7.96008 13.3001C7.77008 13.6701 7.32008 13.8101 6.95008 13.6301C6.53008 13.4101 6.05008 13.3101 5.59008 13.3101C3.70008 13.4501 2.84008 14.9001 2.84008 16.2801C2.84008 17.6601 3.70008 19.1101 5.63008 19.2501C6.04008 19.2801 6.35008 19.6401 6.33008 20.0501C6.29008 20.4501 5.96008 20.7501 5.57008 20.7501Z"
        fill="currentColor"
      />
      <Path
        d="M15.8206 10.64C15.5406 10.64 15.2806 10.49 15.1506 10.22C14.9606 9.84997 15.1106 9.39997 15.4906 9.20997C16.1006 8.89997 16.7906 8.72997 17.4706 8.71997H17.4806C17.8906 8.71997 18.2206 9.04997 18.2306 9.45997C18.2406 9.86997 17.9106 10.22 17.4906 10.22C17.0306 10.23 16.5706 10.34 16.1506 10.55C16.0406 10.62 15.9306 10.64 15.8206 10.64Z"
        fill="currentColor"
      />
      <Path
        d="M10.6107 22.6199C10.4807 22.6199 10.3407 22.5999 10.2107 22.5499C9.77074 22.3799 9.48073 21.9699 9.48073 21.4999V19.9199H9.23073C8.48073 19.9199 8.21074 19.4799 8.12074 19.2999C8.04074 19.0999 7.90074 18.5999 8.39074 18.0499L10.8407 15.2599C11.1507 14.9099 11.6407 14.7799 12.0807 14.9499C12.5207 15.1199 12.8107 15.5299 12.8107 15.9999V17.5799H13.0607C13.8007 17.5799 14.0807 18.0199 14.1707 18.1999C14.2607 18.3799 14.4007 18.8799 13.9107 19.4399L11.4607 22.2299C11.2307 22.4799 10.9207 22.6199 10.6107 22.6199ZM10.0607 18.4099H10.2307C10.6407 18.4099 10.9807 18.7499 10.9807 19.1599V20.4899L12.2207 19.0799H12.0507C11.6407 19.0799 11.3007 18.7399 11.3007 18.3299V16.9999L10.0607 18.4099Z"
        fill="currentColor"
      />
    </Svg>
  );
};

const CloudLightningTwotone = ({
  size = 24,
  className,
  ...props
}: IconProps) => {
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
        d="M9.2291 19.1598H10.2291V21.4898C10.2291 21.8298 10.6591 21.9998 10.8791 21.7398L13.3291 18.9498C13.6291 18.6098 13.4991 18.3298 13.0491 18.3298H12.0491V15.9998C12.0491 15.6598 11.6191 15.4898 11.3991 15.7498L8.9491 18.5398C8.6491 18.8798 8.7791 19.1598 9.2291 19.1598Z"
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
  bold: CloudLightningBold,
  broken: CloudLightningBroken,
  bulk: CloudLightningBulk,
  linear: CloudLightningLinear,
  outline: CloudLightningOutline,
  twotone: CloudLightningTwotone,
};

export const CloudLightningIcon = ({
  variant = "linear",
  className,
  ...props
}: IconProps) => {
  const textClasses = useContext(TextClassContext);
  const Component = variants[variant];
  return <Component className={cn(textClasses, className)} {...props} />;
};
