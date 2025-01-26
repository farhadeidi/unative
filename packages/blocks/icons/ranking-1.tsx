import { useContext } from "react";
import { Path, Svg } from "unative/lib/svg";
import { cn } from "unative/lib/utils";
import { TextClassContext } from "unative/ui/text";

import { iconDefaultOptions } from "../icons-configuration";
import type { IconProps, IconVariants } from "../types/icons-type";

const Ranking1Bold = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M6.67 14H4C2.9 14 2 14.9 2 16V21C2 21.55 2.45 22 3 22H6.67C7.22 22 7.67 21.55 7.67 21V15C7.67 14.45 7.22 14 6.67 14Z"
        fill="currentColor"
      />
      <Path
        d="M13.3302 10H10.6602C9.56016 10 8.66016 10.9 8.66016 12V21C8.66016 21.55 9.11016 22 9.66016 22H14.3302C14.8802 22 15.3302 21.55 15.3302 21V12C15.3302 10.9 14.4402 10 13.3302 10Z"
        fill="currentColor"
      />
      <Path
        d="M20.0001 17H17.3301C16.7801 17 16.3301 17.45 16.3301 18V21C16.3301 21.55 16.7801 22 17.3301 22H21.0001C21.5501 22 22.0001 21.55 22.0001 21V19C22.0001 17.9 21.1001 17 20.0001 17Z"
        fill="currentColor"
      />
      <Path
        d="M15.0095 4.85047C15.3195 4.54047 15.4395 4.17047 15.3395 3.85047C15.2395 3.53047 14.9295 3.30047 14.4895 3.23047L13.5295 3.07047C13.4895 3.07047 13.3995 3.00047 13.3795 2.96047L12.8495 1.90047C12.4495 1.09047 11.5395 1.09047 11.1395 1.90047L10.6095 2.96047C10.5995 3.00047 10.5095 3.07047 10.4695 3.07047L9.50945 3.23047C9.06945 3.30047 8.76945 3.53047 8.65945 3.85047C8.55945 4.17047 8.67945 4.54047 8.98945 4.85047L9.72945 5.60047C9.76945 5.63047 9.79945 5.75047 9.78945 5.79047L9.57945 6.71047C9.41945 7.40047 9.67945 7.71047 9.84945 7.83047C10.0195 7.95047 10.3895 8.11047 10.9995 7.75047L11.8995 7.22047C11.9395 7.19047 12.0695 7.19047 12.1095 7.22047L12.9995 7.75047C13.2795 7.92047 13.5095 7.97047 13.6895 7.97047C13.8995 7.97047 14.0495 7.89047 14.1395 7.83047C14.3095 7.71047 14.5695 7.40047 14.4095 6.71047L14.1995 5.79047C14.1895 5.74047 14.2195 5.63047 14.2595 5.60047L15.0095 4.85047Z"
        fill="currentColor"
      />
    </Svg>
  );
};

const Ranking1Broken = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M8.67 14H4C2.9 14 2 14.9 2 16V22H8.67V14Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M15.3302 12C15.3302 10.9 14.4302 10 13.3302 10H10.6602C9.56016 10 8.66016 10.9 8.66016 12V22H15.3302V16"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M20.0001 17H15.3301V22H22.0001V19C22.0001 17.9 21.1001 17 20.0001 17Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M12.5202 2.07007L13.0502 3.13006C13.1202 3.28006 13.3102 3.42006 13.4702 3.44006L14.4302 3.60007C15.0402 3.70007 15.1902 4.15005 14.7502 4.58005L14.0002 5.33005C13.8702 5.46005 13.8002 5.70006 13.8402 5.87006L14.0502 6.79007C14.2202 7.52007 13.8302 7.80007 13.1902 7.42007L12.2902 6.89007C12.1302 6.79007 11.8602 6.79007 11.7002 6.89007L10.8002 7.42007C10.1602 7.80007 9.77023 7.52007 9.94023 6.79007L10.1502 5.87006C10.1902 5.70006 10.1202 5.45005 9.99023 5.33005L9.25023 4.59006C8.81023 4.15006 8.95023 3.71005 9.57023 3.61005L10.5302 3.45007C10.6902 3.42007 10.8802 3.28007 10.9502 3.14007L11.4802 2.08005C11.7702 1.50005 12.2302 1.50007 12.5202 2.07007Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

const Ranking1Bulk = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M13.3 8.1101L14.62 10.7501C14.8 11.1101 15.28 11.4701 15.68 11.5301L18.07 11.9301C19.6 12.1901 19.96 13.2901 18.86 14.3901L17 16.2501C16.69 16.5601 16.51 17.1701 16.61 17.6101L17.14 19.9201C17.56 21.7401 16.59 22.4501 14.98 21.5001L12.74 20.1701C12.33 19.9301 11.67 19.9301 11.26 20.1701L9.01996 21.5001C7.40996 22.4501 6.43995 21.7401 6.85995 19.9201L7.38998 17.6101C7.48998 17.1801 7.30997 16.5701 6.99997 16.2501L5.13998 14.3901C4.03998 13.2901 4.39996 12.1801 5.92996 11.9301L8.31997 11.5301C8.71997 11.4601 9.19997 11.1101 9.37997 10.7501L10.7 8.1101C11.41 6.6801 12.59 6.6801 13.3 8.1101Z"
        fill="currentColor"
      />
      <Path
        opacity="0.4"
        d="M6 9.75C5.59 9.75 5.25 9.41 5.25 9V2C5.25 1.59 5.59 1.25 6 1.25C6.41 1.25 6.75 1.59 6.75 2V9C6.75 9.41 6.41 9.75 6 9.75Z"
        fill="currentColor"
      />
      <Path
        opacity="0.4"
        d="M18 9.75C17.59 9.75 17.25 9.41 17.25 9V2C17.25 1.59 17.59 1.25 18 1.25C18.41 1.25 18.75 1.59 18.75 2V9C18.75 9.41 18.41 9.75 18 9.75Z"
        fill="currentColor"
      />
      <Path
        opacity="0.4"
        d="M12 4.75C11.59 4.75 11.25 4.41 11.25 4V2C11.25 1.59 11.59 1.25 12 1.25C12.41 1.25 12.75 1.59 12.75 2V4C12.75 4.41 12.41 4.75 12 4.75Z"
        fill="currentColor"
      />
    </Svg>
  );
};

const Ranking1Linear = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M8.67 14H4C2.9 14 2 14.9 2 16V22H8.67V14Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M13.33 10H10.66C9.56003 10 8.66003 10.9 8.66003 12V22H15.33V12C15.33 10.9 14.44 10 13.33 10Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M20 17H15.33V22H22V19C22 17.9 21.1 17 20 17Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M12.52 2.07007L13.05 3.13006C13.12 3.28006 13.31 3.42006 13.47 3.44006L14.43 3.60007C15.04 3.70007 15.19 4.15005 14.75 4.58005L14 5.33005C13.87 5.46005 13.8 5.70006 13.84 5.87006L14.05 6.79007C14.22 7.52007 13.83 7.80007 13.19 7.42007L12.29 6.89007C12.13 6.79007 11.86 6.79007 11.7 6.89007L10.8 7.42007C10.16 7.80007 9.76998 7.52007 9.93998 6.79007L10.15 5.87006C10.19 5.70006 10.12 5.45005 9.98999 5.33005L9.24999 4.59006C8.80999 4.15006 8.94999 3.71005 9.56999 3.61005L10.53 3.45007C10.69 3.42007 10.88 3.28007 10.95 3.14007L11.48 2.08005C11.77 1.50005 12.23 1.50007 12.52 2.07007Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

const Ranking1Outline = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M8.67 22.75H2C1.59 22.75 1.25 22.41 1.25 22V16C1.25 14.48 2.48 13.25 4 13.25H8.67C9.08 13.25 9.42 13.59 9.42 14V22C9.42 22.41 9.08 22.75 8.67 22.75ZM2.75 21.25H7.92V14.75H4C3.31 14.75 2.75 15.31 2.75 16V21.25Z"
        fill="currentColor"
      />
      <Path
        d="M15.3302 22.75H8.66016C8.25016 22.75 7.91016 22.41 7.91016 22V12C7.91016 10.48 9.14016 9.25 10.6602 9.25H13.3302C14.8502 9.25 16.0802 10.48 16.0802 12V22C16.0802 22.41 15.7502 22.75 15.3302 22.75ZM9.42015 21.25H14.5902V12C14.5902 11.31 14.0302 10.75 13.3402 10.75H10.6702C9.98015 10.75 9.42015 11.31 9.42015 12V21.25Z"
        fill="currentColor"
      />
      <Path
        d="M22.0001 22.75H15.3301C14.9201 22.75 14.5801 22.41 14.5801 22V17C14.5801 16.59 14.9201 16.25 15.3301 16.25H20.0001C21.5201 16.25 22.7501 17.48 22.7501 19V22C22.7501 22.41 22.4101 22.75 22.0001 22.75ZM16.0801 21.25H21.2501V19C21.2501 18.31 20.6901 17.75 20.0001 17.75H16.0801V21.25Z"
        fill="currentColor"
      />
      <Path
        d="M13.6989 8.34999C13.4589 8.34999 13.1589 8.27997 12.8189 8.07997L11.9989 7.58998L11.1889 8.06999C10.3689 8.55999 9.82892 8.26998 9.62892 8.12998C9.42892 7.98998 8.99891 7.54998 9.20891 6.62998L9.39892 5.79997L8.71892 5.11997C8.29892 4.69997 8.14891 4.19997 8.29891 3.73997C8.44891 3.27997 8.85891 2.95996 9.43891 2.85996L10.3089 2.70997L10.7989 1.72999C11.3389 0.65999 12.6489 0.65999 13.1789 1.72999L13.6689 2.70997L14.5389 2.85996C15.1189 2.95996 15.5389 3.27997 15.6789 3.73997C15.8289 4.19997 15.6689 4.69997 15.2589 5.11997L14.5789 5.79997L14.7689 6.62998C14.9789 7.55998 14.5489 7.98999 14.3489 8.13999C14.2589 8.21999 14.0289 8.34999 13.6989 8.34999ZM11.9989 6.07997C12.2389 6.07997 12.4789 6.13999 12.6789 6.25999L13.2389 6.58998L13.1189 6.04997C13.0189 5.62997 13.1689 5.11998 13.4789 4.80998L13.9889 4.29997L13.3589 4.18998C12.9589 4.11998 12.5689 3.82998 12.3889 3.46998L11.9989 2.71998L11.6189 3.46998C11.4389 3.82998 11.0489 4.11998 10.6489 4.18998L10.0189 4.28999L10.5289 4.79997C10.8389 5.10997 10.9789 5.61999 10.8889 6.03999L10.7689 6.57997L11.3289 6.24998C11.5189 6.12998 11.7589 6.07997 11.9989 6.07997Z"
        fill="currentColor"
      />
    </Svg>
  );
};

const Ranking1Twotone = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M8.67 14H4C2.9 14 2 14.9 2 16V22H8.67V14Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M13.3302 10H10.6602C9.56016 10 8.66016 10.9 8.66016 12V22H15.3302V12C15.3302 10.9 14.4402 10 13.3302 10Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M20.0001 17H15.3301V22H22.0001V19C22.0001 17.9 21.1001 17 20.0001 17Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        opacity="0.4"
        d="M12.5202 2.06982L13.0502 3.12982C13.1202 3.27982 13.3102 3.41982 13.4702 3.43982L14.4302 3.59982C15.0402 3.69982 15.1902 4.1498 14.7502 4.5798L14.0002 5.3298C13.8702 5.4598 13.8002 5.69981 13.8402 5.86981L14.0502 6.78982C14.2202 7.51982 13.8302 7.79983 13.1902 7.41983L12.2902 6.88983C12.1302 6.78983 11.8602 6.78983 11.7002 6.88983L10.8002 7.41983C10.1602 7.79983 9.77023 7.51982 9.94023 6.78982L10.1502 5.86981C10.1902 5.69981 10.1202 5.4498 9.99023 5.3298L9.25023 4.58981C8.81023 4.14981 8.95023 3.7098 9.57023 3.6098L10.5302 3.44983C10.6902 3.41983 10.8802 3.27983 10.9502 3.13983L11.4802 2.0798C11.7702 1.4998 12.2302 1.49982 12.5202 2.06982Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

const variants: IconVariants = {
  bold: Ranking1Bold,
  broken: Ranking1Broken,
  bulk: Ranking1Bulk,
  linear: Ranking1Linear,
  outline: Ranking1Outline,
  twotone: Ranking1Twotone,
};

export const Ranking1Icon = ({
  variant = iconDefaultOptions.variant,
  className,
  ...props
}: IconProps) => {
  const textClasses = useContext(TextClassContext);
  const Component = variants[variant];
  return <Component className={cn(textClasses, className)} {...props} />;
};
