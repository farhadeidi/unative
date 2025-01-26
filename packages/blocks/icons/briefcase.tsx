import { useContext } from "react";
import { G, Path, Svg } from "unative/lib/svg";
import { cn } from "unative/lib/utils";
import { TextClassContext } from "unative/ui/text";

import { iconDefaultOptions } from "../icons-configuration";
import type { IconProps, IconVariants } from "../types/icons-type";

const BriefcaseBold = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M21.091 6.97953C20.241 6.03953 18.821 5.56953 16.761 5.56953H16.521V5.52953C16.521 3.84953 16.521 1.76953 12.761 1.76953H11.241C7.48101 1.76953 7.48101 3.85953 7.48101 5.52953V5.57953H7.24101C5.17101 5.57953 3.76101 6.04953 2.91101 6.98953C1.92101 8.08953 1.95101 9.56953 2.05101 10.5795L2.06101 10.6495L2.13847 11.4628C2.15273 11.6126 2.2334 11.7479 2.35929 11.8303C2.59909 11.9872 3.00044 12.2459 3.24101 12.3795C3.38101 12.4695 3.53101 12.5495 3.68101 12.6295C5.39101 13.5695 7.27101 14.1995 9.18101 14.5095C9.27101 15.4495 9.68101 16.5495 11.871 16.5495C14.061 16.5495 14.491 15.4595 14.561 14.4895C16.601 14.1595 18.571 13.4495 20.351 12.4095C20.411 12.3795 20.451 12.3495 20.501 12.3195C20.8977 12.0953 21.3093 11.819 21.6845 11.5484C21.7975 11.4668 21.8698 11.3408 21.8852 11.2023L21.901 11.0595L21.951 10.5895C21.961 10.5295 21.961 10.4795 21.971 10.4095C22.051 9.39953 22.031 8.01953 21.091 6.97953ZM13.091 13.8295C13.091 14.8895 13.091 15.0495 11.861 15.0495C10.631 15.0495 10.631 14.8595 10.631 13.8395V12.5795H13.091V13.8295ZM8.91101 5.56953V5.52953C8.91101 3.82953 8.91101 3.19953 11.241 3.19953H12.761C15.091 3.19953 15.091 3.83953 15.091 5.52953V5.57953H8.91101V5.56953Z"
        fill="currentColor"
      />
      <Path
        d="M20.8733 13.7349C21.2269 13.5666 21.6342 13.8469 21.5988 14.2369L21.2398 18.1907C21.0298 20.1907 20.2098 22.2307 15.8098 22.2307H8.18984C3.78984 22.2307 2.96984 20.1907 2.75984 18.2007L2.41913 14.4529C2.38409 14.0674 2.78205 13.7874 3.13468 13.947C4.2741 14.4625 6.37724 15.3771 7.67641 15.7174C7.84072 15.7604 7.97361 15.878 8.04556 16.0319C8.65253 17.33 9.96896 18.0207 11.8698 18.0207C13.752 18.0207 15.085 17.3034 15.694 16.0021C15.766 15.8481 15.8991 15.7305 16.0635 15.6873C17.443 15.3243 19.6816 14.3019 20.8733 13.7349Z"
        fill="currentColor"
      />
    </Svg>
  );
};

const BriefcaseBroken = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M21.3708 14L21.7108 10.43C21.9708 7.99 21.2708 6 17.0008 6H7.0008C2.7308 6 2.0308 7.99 2.3008 10.43L3.0508 18.43C3.2608 20.39 3.9808 22 8.0008 22H16.0008C20.0208 22 20.7408 20.39 20.9508 18.43"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M8 6V5.2C8 3.43 8 2 11.2 2H12.8C16 2 16 3.43 16 5.2V6"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M14 13V14C14 14.01 14 14.01 14 14.02C14 15.11 13.99 16 12 16C10.02 16 10 15.12 10 14.03V13C10 12 10 12 11 12H13C14 12 14 12 14 13Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M21.65 11C19.34 12.68 16.7 13.68 14 14.02"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M2.61914 11.27C4.86914 12.81 7.40914 13.74 9.99914 14.03"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

const BriefcaseBulk = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M21.0891 6.98002C20.2391 6.04002 18.8191 5.57002 16.7591 5.57002H16.5191V5.53002C16.5191 3.85002 16.5191 1.77002 12.7591 1.77002H11.2391C7.47906 1.77002 7.47906 3.86002 7.47906 5.53002V5.58002H7.23906C5.16906 5.58002 3.75906 6.05002 2.90906 6.99002C1.91906 8.09002 1.94906 9.57002 2.04906 10.58L2.05906 10.65L2.15906 11.7C2.16906 11.71 2.18906 11.73 2.20906 11.74C2.53906 11.96 2.87906 12.18 3.23906 12.38C3.37906 12.47 3.52906 12.55 3.67906 12.63C5.38906 13.57 7.26906 14.2 9.17906 14.51C9.26906 15.45 9.67906 16.55 11.8691 16.55C14.0591 16.55 14.4891 15.46 14.5591 14.49C16.5991 14.16 18.5691 13.45 20.3491 12.41C20.4091 12.38 20.4491 12.35 20.4991 12.32C20.9591 12.06 21.3891 11.78 21.8091 11.47C21.8291 11.46 21.8491 11.44 21.8591 11.42L21.8991 11.06L21.9491 10.59C21.9591 10.53 21.9591 10.48 21.9691 10.41C22.0491 9.40002 22.0291 8.02002 21.0891 6.98002ZM13.0891 13.83C13.0891 14.89 13.0891 15.05 11.8591 15.05C10.6291 15.05 10.6291 14.86 10.6291 13.84V12.58H13.0891V13.83ZM8.90906 5.57002V5.53002C8.90906 3.83002 8.90906 3.20002 11.2391 3.20002H12.7591C15.0891 3.20002 15.0891 3.84002 15.0891 5.53002V5.58002H8.90906V5.57002Z"
        fill="currentColor"
      />
      <Path
        opacity="0.4"
        d="M20.5002 12.2999C20.4502 12.3299 20.4002 12.3599 20.3502 12.3899C18.5702 13.4299 16.6002 14.1299 14.5602 14.4699C14.4802 15.4299 14.0602 16.5299 11.8702 16.5299C9.68016 16.5299 9.26016 15.4399 9.18016 14.4899C7.27016 14.1899 5.39016 13.5599 3.68016 12.6099C3.53016 12.5299 3.38016 12.4499 3.24016 12.3599C2.88016 12.1599 2.54016 11.9399 2.21016 11.7199C2.19016 11.7099 2.17016 11.6899 2.16016 11.6799L2.77016 18.1899C2.98016 20.1799 3.80016 22.2299 8.20016 22.2299H15.8202C20.2202 22.2299 21.0402 20.1799 21.2502 18.1799L21.8802 11.3999C21.8702 11.4199 21.8502 11.4399 21.8302 11.4499C21.4002 11.7599 20.9602 12.0499 20.5002 12.2999Z"
        fill="currentColor"
      />
    </Svg>
  );
};

const BriefcaseLinear = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M7.99995 22H15.9999C20.0199 22 20.7399 20.39 20.9499 18.43L21.6999 10.43C21.9699 7.99 21.2699 6 16.9999 6H6.99995C2.72995 6 2.02995 7.99 2.29995 10.43L3.04995 18.43C3.25995 20.39 3.97995 22 7.99995 22Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M8 6V5.2C8 3.43 8 2 11.2 2H12.8C16 2 16 3.43 16 5.2V6"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M14 13V14C14 14.01 14 14.01 14 14.02C14 15.11 13.99 16 12 16C10.02 16 10 15.12 10 14.03V13C10 12 10 12 11 12H13C14 12 14 12 14 13Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M21.65 11C19.34 12.68 16.7 13.68 14 14.02"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M2.62 11.27C4.87 12.81 7.41 13.74 10 14.03"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

const BriefcaseOutline = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M16.0002 22.75H8.00023C3.38023 22.75 2.52023 20.6 2.30023 18.51L1.55023 10.5C1.44023 9.45001 1.41023 7.90001 2.45023 6.74001C3.35023 5.74001 4.84023 5.26001 7.00023 5.26001H17.0002C19.1702 5.26001 20.6602 5.75001 21.5502 6.74001C22.5902 7.90001 22.5602 9.45001 22.4502 10.51L21.7002 18.5C21.4802 20.6 20.6202 22.75 16.0002 22.75ZM7.00023 6.75001C5.31023 6.75001 4.15023 7.08001 3.56023 7.74001C3.07023 8.28001 2.91023 9.11001 3.04023 10.35L3.79023 18.36C3.96023 19.94 4.39023 21.25 8.00023 21.25H16.0002C19.6002 21.25 20.0402 19.94 20.2102 18.35L20.9602 10.36C21.0902 9.11001 20.9302 8.28001 20.4402 7.74001C19.8502 7.08001 18.6902 6.75001 17.0002 6.75001H7.00023Z"
        fill="currentColor"
      />
      <Path
        d="M16 6.75C15.59 6.75 15.25 6.41 15.25 6V5.2C15.25 3.42 15.25 2.75 12.8 2.75H11.2C8.75 2.75 8.75 3.42 8.75 5.2V6C8.75 6.41 8.41 6.75 8 6.75C7.59 6.75 7.25 6.41 7.25 6V5.2C7.25 3.44 7.25 1.25 11.2 1.25H12.8C16.75 1.25 16.75 3.44 16.75 5.2V6C16.75 6.41 16.41 6.75 16 6.75Z"
        fill="currentColor"
      />
      <Path
        d="M12 16.75C9.25 16.75 9.25 15.05 9.25 14.03V13C9.25 11.59 9.59 11.25 11 11.25H13C14.41 11.25 14.75 11.59 14.75 13V14C14.75 15.04 14.75 16.75 12 16.75ZM10.75 12.75C10.75 12.83 10.75 12.92 10.75 13V14.03C10.75 15.06 10.75 15.25 12 15.25C13.25 15.25 13.25 15.09 13.25 14.02V13C13.25 12.92 13.25 12.83 13.25 12.75C13.17 12.75 13.08 12.75 13 12.75H11C10.92 12.75 10.83 12.75 10.75 12.75Z"
        fill="currentColor"
      />
      <Path
        d="M13.9995 14.77C13.6295 14.77 13.2995 14.49 13.2595 14.11C13.2095 13.7 13.4995 13.32 13.9095 13.27C16.5495 12.94 19.0795 11.94 21.2095 10.39C21.5395 10.14 22.0095 10.22 22.2595 10.56C22.4995 10.89 22.4295 11.36 22.0895 11.61C19.7495 13.31 16.9895 14.4 14.0895 14.77C14.0595 14.77 14.0295 14.77 13.9995 14.77Z"
        fill="currentColor"
      />
      <Path
        d="M10.0007 14.7799C9.97072 14.7799 9.94072 14.7799 9.91072 14.7799C7.17072 14.4699 4.50072 13.4699 2.19072 11.8899C1.85072 11.6599 1.76072 11.1899 1.99072 10.8499C2.22072 10.5099 2.69072 10.4199 3.03072 10.6499C5.14072 12.0899 7.57072 12.9999 10.0707 13.2899C10.4807 13.3399 10.7807 13.7099 10.7307 14.1199C10.7007 14.4999 10.3807 14.7799 10.0007 14.7799Z"
        fill="currentColor"
      />
    </Svg>
  );
};

const BriefcaseTwotone = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M8.0008 22H16.0008C20.0208 22 20.7408 20.39 20.9508 18.43L21.7008 10.43C21.9708 7.99 21.2708 6 17.0008 6H7.0008C2.7308 6 2.0308 7.99 2.3008 10.43L3.0508 18.43C3.2608 20.39 3.9808 22 8.0008 22Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        opacity="0.4"
        d="M8 6V5.2C8 3.43 8 2 11.2 2H12.8C16 2 16 3.43 16 5.2V6"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <G opacity="0.4">
        <Path
          d="M14 13V14C14 14.01 14 14.01 14 14.02C14 15.11 13.99 16 12 16C10.02 16 10 15.12 10 14.03V13C10 12 10 12 11 12H13C14 12 14 12 14 13Z"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeMiterlimit="10"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <Path
          d="M21.65 11C19.34 12.68 16.7 13.68 14 14.02"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeMiterlimit="10"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <Path
          d="M2.61914 11.2695C4.86914 12.8095 7.40914 13.7395 9.99914 14.0295"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeMiterlimit="10"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </G>
    </Svg>
  );
};

const variants: IconVariants = {
  bold: BriefcaseBold,
  broken: BriefcaseBroken,
  bulk: BriefcaseBulk,
  linear: BriefcaseLinear,
  outline: BriefcaseOutline,
  twotone: BriefcaseTwotone,
};

export const BriefcaseIcon = ({
  variant = iconDefaultOptions.variant,
  className,
  ...props
}: IconProps) => {
  const textClasses = useContext(TextClassContext);
  const Component = variants[variant];
  return <Component className={cn(textClasses, className)} {...props} />;
};
