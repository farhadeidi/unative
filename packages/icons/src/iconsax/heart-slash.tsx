import { useContext } from "react";
import { cn } from "unative/lib/utils";
import { Path, Svg } from "unative/ui/svg";
import { TextClassContext } from "unative/ui/text";

import type { IconProps, IconVariants } from "../icon-options";
import { defaultOptions } from "../icon-options";

const HeartSlashBold = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M22.0009 8.69106C22.0009 9.88106 21.8109 10.9811 21.4809 12.0011C19.9009 17.0011 15.0309 19.9911 12.6209 20.8111C12.2809 20.9311 11.7209 20.9311 11.3809 20.8111C10.7409 20.5911 9.93085 20.2211 9.06085 19.7011C8.50085 19.3711 8.41085 18.5911 8.87085 18.1311L20.1509 6.85106C20.6909 6.31106 21.6409 6.54106 21.8309 7.28106C21.9409 7.73106 22.0009 8.20106 22.0009 8.69106Z"
        fill="currentColor"
      />
      <Path
        d="M22.5295 1.47141C22.2395 1.18141 21.7595 1.18141 21.4695 1.47141L19.1295 3.81141C18.3395 3.36141 17.4195 3.10141 16.4395 3.10141C14.6295 3.10141 13.0095 3.98141 11.9995 5.33141C10.9895 3.98141 9.36945 3.10141 7.55945 3.10141C4.48945 3.10141 1.99945 5.60141 1.99945 8.69141C1.99945 9.88141 2.18945 10.9814 2.51945 12.0014C3.16945 14.0714 4.38945 15.8014 5.76945 17.1714L1.46945 21.4714C1.17945 21.7614 1.17945 22.2414 1.46945 22.5314C1.61945 22.6814 1.80945 22.7514 1.99945 22.7514C2.18945 22.7514 2.37945 22.6814 2.52945 22.5314L22.5295 2.53141C22.8195 2.24141 22.8195 1.76141 22.5295 1.47141Z"
        fill="currentColor"
      />
    </Svg>
  );
};

const HeartSlashBroken = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M7.56055 3.09998C9.38055 3.09998 10.9905 3.98003 12.0005 5.34003C13.0105 3.98003 14.6306 3.09998 16.4406 3.09998C17.5906 3.09998 18.6605 3.45 19.5505 4.06"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M6.10999 17.5C3.89999 15.43 2 12.48 2 8.67999C2 7.13999 2.62 5.73998 3.63 4.72998"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M21.7395 7C21.9095 7.53 21.9995 8.1 21.9995 8.69C21.9995 15.69 15.5195 19.82 12.6195 20.82C12.2795 20.94 11.7195 20.94 11.3795 20.82C10.7295 20.6 9.90953 20.22 9.01953 19.69"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M22 2L2 22"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

const HeartSlashBulk = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M22.0009 8.69008C22.0009 9.88008 21.8108 10.9801 21.4808 12.0001C19.9008 17.0001 15.0309 19.9901 12.6209 20.8101C12.2809 20.9301 11.7209 20.9301 11.3809 20.8101C10.7409 20.5901 9.93085 20.2201 9.06085 19.7001C8.50085 19.3701 8.41085 18.5901 8.87085 18.1301L20.1509 6.85008C20.6909 6.31008 21.6409 6.54007 21.8309 7.28007C21.9409 7.73007 22.0009 8.20008 22.0009 8.69008Z"
        fill="currentColor"
      />
      <Path
        d="M22.5295 1.46994C22.2395 1.17994 21.7595 1.17994 21.4695 1.46994L19.1295 3.80994C18.3395 3.35994 17.4195 3.09995 16.4395 3.09995C14.6295 3.09995 13.0095 3.97993 11.9995 5.32993C10.9895 3.97993 9.36948 3.09995 7.55948 3.09995C4.48948 3.09995 1.99948 5.59994 1.99948 8.68994C1.99948 9.87994 2.1895 10.9799 2.5195 11.9999C3.1695 14.0699 4.3895 15.8 5.7695 17.17L1.46945 21.4699C1.17945 21.7599 1.17945 22.2399 1.46945 22.5299C1.61945 22.6799 1.80948 22.7499 1.99948 22.7499C2.18948 22.7499 2.37951 22.6799 2.52951 22.5299L22.5295 2.52994C22.8195 2.23994 22.8195 1.75994 22.5295 1.46994Z"
        fill="currentColor"
      />
    </Svg>
  );
};

const HeartSlashLinear = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M6.10999 17.5C3.89999 15.43 2 12.48 2 8.67999C2 5.58999 4.49 3.09003 7.56 3.09003C9.38 3.09003 10.99 3.97002 12 5.33002C13.01 3.97002 14.63 3.09003 16.44 3.09003C17.59 3.09003 18.66 3.43999 19.55 4.04999"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M21.74 7C21.91 7.53 22 8.1 22 8.69C22 15.69 15.52 19.82 12.62 20.82C12.28 20.94 11.72 20.94 11.38 20.82C10.73 20.6 9.91002 20.22 9.02002 19.69"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M22 2L2 22"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

const HeartSlashOutline = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M6.10999 18.2501C5.92999 18.2501 5.73998 18.1801 5.59998 18.0501C3.61998 16.1901 1.25 13.0601 1.25 8.69012C1.25 5.19012 4.08 2.3501 7.56 2.3501C9.25 2.3501 10.83 3.01012 12 4.19012C13.17 3.01012 14.75 2.3501 16.44 2.3501C17.7 2.3501 18.92 2.73011 19.97 3.43011C20.31 3.66011 20.4 4.13009 20.17 4.47009C19.94 4.81009 19.47 4.9001 19.13 4.6701C18.34 4.13011 17.41 3.84015 16.45 3.84015C14.93 3.84015 13.52 4.55015 12.61 5.78015C12.33 6.16015 11.69 6.16015 11.41 5.78015C10.49 4.55015 9.09001 3.84015 7.57001 3.84015C4.92001 3.84015 2.76001 6.01011 2.76001 8.68011C2.76001 12.5201 4.87001 15.2901 6.64001 16.9501C6.94001 17.2301 6.95999 17.7101 6.67999 18.0101C6.50999 18.1701 6.30999 18.2501 6.10999 18.2501Z"
        fill="currentColor"
      />
      <Path
        d="M11.9994 21.6501C11.6894 21.6501 11.3894 21.6101 11.1394 21.5201C10.3894 21.2601 9.49942 20.8401 8.63942 20.3301C8.27942 20.1201 8.16941 19.66 8.37941 19.3C8.58941 18.95 9.04938 18.83 9.40938 19.04C10.1894 19.5 10.9794 19.88 11.6294 20.1C11.8094 20.16 12.1994 20.16 12.3794 20.1C14.6794 19.31 21.2594 15.52 21.2594 8.68005C21.2594 8.18005 21.1794 7.69002 21.0394 7.22002C20.9194 6.82002 21.1294 6.40008 21.5294 6.28008C21.9294 6.16008 22.3494 6.38007 22.4694 6.77007C22.6594 7.39007 22.7594 8.03005 22.7594 8.68005C22.7594 15.56 16.6894 20.2001 12.8694 21.5101C12.6094 21.6101 12.3094 21.6501 11.9994 21.6501Z"
        fill="currentColor"
      />
      <Path
        d="M1.99948 22.75C1.80948 22.75 1.61945 22.68 1.46945 22.53C1.17945 22.24 1.17945 21.7599 1.46945 21.4699L21.4695 1.46994C21.7595 1.17994 22.2395 1.17994 22.5295 1.46994C22.8195 1.75994 22.8195 2.24 22.5295 2.53L2.52951 22.53C2.37951 22.68 2.18948 22.75 1.99948 22.75Z"
        fill="currentColor"
      />
    </Svg>
  );
};

const HeartSlashTwotone = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M6.10999 17.4998C3.89999 15.4298 2 12.4798 2 8.67981C2 5.58981 4.49 3.08984 7.56 3.08984C9.38 3.08984 10.99 3.96983 12 5.32983C13.01 3.96983 14.63 3.08984 16.44 3.08984C17.59 3.08984 18.66 3.4398 19.55 4.0498"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        opacity="0.4"
        d="M21.7395 7C21.9095 7.53 21.9995 8.1 21.9995 8.69C21.9995 15.69 15.5195 19.82 12.6195 20.82C12.2795 20.94 11.7195 20.94 11.3795 20.82C10.7295 20.6 9.90953 20.22 9.01953 19.69"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M22 2L2 22"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

const variants: IconVariants = {
  bold: HeartSlashBold,
  broken: HeartSlashBroken,
  bulk: HeartSlashBulk,
  linear: HeartSlashLinear,
  outline: HeartSlashOutline,
  twotone: HeartSlashTwotone,
};

export const HeartSlashIcon = ({
  variant = defaultOptions.variant,
  className,
  ...props
}: IconProps) => {
  const textClasses = useContext(TextClassContext);
  const Component = variants[variant];
  return <Component className={cn(textClasses, className)} {...props} />;
};

export default HeartSlashIcon;
