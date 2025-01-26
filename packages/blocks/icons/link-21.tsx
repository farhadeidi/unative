import { useContext } from "react";
import { Path, Svg } from "unative/lib/svg";
import { cn } from "unative/lib/utils";
import { TextClassContext } from "unative/ui/text";

import { iconDefaultOptions } from "../icons-configuration";
import type { IconProps, IconVariants } from "../types/icons-type";

const Link21Bold = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M19.0712 14.2416C18.7812 14.5316 18.3212 14.5316 18.0413 14.2416C17.7513 13.9516 17.7513 13.4916 18.0413 13.2116C20.0413 11.2116 20.0413 7.96156 18.0413 5.97156C16.0413 3.98156 12.7912 3.97156 10.8012 5.97156C8.81125 7.97156 8.80125 11.2216 10.8012 13.2116C11.0912 13.5016 11.0912 13.9616 10.8012 14.2416C10.5112 14.5316 10.0512 14.5316 9.77125 14.2416C7.20125 11.6716 7.20125 7.49156 9.77125 4.93156C12.3412 2.37156 16.5212 2.36156 19.0812 4.93156C21.6412 7.50156 21.6412 11.6716 19.0712 14.2416Z"
        fill="currentColor"
      />
      <Path
        d="M4.92875 9.76047C5.21875 9.47047 5.67875 9.47047 5.95875 9.76047C6.24875 10.0505 6.24875 10.5105 5.95875 10.7905C3.95875 12.7905 3.95875 16.0405 5.95875 18.0305C7.95875 20.0205 11.2088 20.0305 13.1988 18.0305C15.1888 16.0305 15.1988 12.7805 13.1988 10.7905C12.9088 10.5005 12.9088 10.0405 13.1988 9.76047C13.4888 9.47047 13.9488 9.47047 14.2288 9.76047C16.7988 12.3305 16.7988 16.5105 14.2288 19.0705C11.6588 21.6305 7.47875 21.6405 4.91875 19.0705C2.35875 16.5005 2.35875 12.3305 4.92875 9.76047Z"
        fill="currentColor"
      />
    </Svg>
  );
};

const Link21Broken = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M13.0598 10.9399C15.3098 13.1899 15.3098 16.8299 13.0598 19.0699C10.8098 21.3099 7.16985 21.3199 4.92985 19.0699C2.68985 16.8199 2.67985 13.1799 4.92985 10.9399"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M14.9707 3.16992C16.4607 3.19992 17.9407 3.78992 19.0707 4.92992C21.4107 7.26992 21.4107 11.0699 19.0707 13.4199"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M10.5909 13.4099C8.25094 11.0699 8.25094 7.26992 10.5909 4.91992"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

const Link21Bulk = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M19.0693 14.2401C18.7793 14.5301 18.3193 14.5301 18.0393 14.2401C17.7493 13.9501 17.7493 13.4901 18.0393 13.2101C20.0393 11.2101 20.0393 7.9601 18.0393 5.9701C16.0393 3.9801 12.7893 3.9701 10.7993 5.9701C8.8093 7.9701 8.7993 11.2201 10.7993 13.2101C11.0893 13.5001 11.0893 13.9601 10.7993 14.2401C10.5093 14.5301 10.0493 14.5301 9.7693 14.2401C7.1993 11.6701 7.1993 7.4901 9.7693 4.9301C12.3393 2.3701 16.5193 2.3601 19.0793 4.9301C21.6393 7.5001 21.6393 11.6701 19.0693 14.2401Z"
        fill="currentColor"
      />
      <Path
        opacity="0.4"
        d="M19.0695 4.92994C21.6395 7.49994 21.6395 11.6699 19.0695 14.2399C18.1895 15.1199 17.1095 15.6999 15.9795 15.9799C16.5095 13.8199 15.9295 11.4499 14.2395 9.75994C12.5495 8.06994 10.1795 7.48994 8.01953 8.01994C8.29953 6.88994 8.86953 5.80994 9.75953 4.92994C12.3295 2.35994 16.4995 2.35994 19.0695 4.92994Z"
        fill="currentColor"
      />
      <Path
        d="M4.9307 9.75998C5.2207 9.46998 5.68071 9.46998 5.96071 9.75998C6.25071 10.05 6.25071 10.51 5.96071 10.79C3.96071 12.79 3.96071 16.04 5.96071 18.03C7.9607 20.02 11.2107 20.03 13.2007 18.03C15.1907 16.03 15.2007 12.78 13.2007 10.79C12.9107 10.5 12.9107 10.04 13.2007 9.75998C13.4907 9.46998 13.9507 9.46998 14.2307 9.75998C16.8007 12.33 16.8007 16.51 14.2307 19.07C11.6607 21.63 7.48071 21.64 4.92071 19.07C2.36071 16.5 2.3607 12.33 4.9307 9.75998Z"
        fill="currentColor"
      />
      <Path
        opacity="0.5"
        d="M14.2395 9.75988C15.9295 11.4499 16.5095 13.8199 15.9795 15.9799C15.6995 17.1099 15.1195 18.1899 14.2395 19.0699C11.6695 21.6399 7.49945 21.6399 4.92945 19.0699C2.35945 16.4999 2.35945 12.3299 4.92945 9.75988C5.80945 8.86988 6.88945 8.29988 8.01945 8.01988C10.1795 7.48988 12.5495 8.06988 14.2395 9.75988Z"
        fill="currentColor"
      />
    </Svg>
  );
};

const Link21Linear = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M13.0601 10.9399C15.3101 13.1899 15.3101 16.8299 13.0601 19.0699C10.8101 21.3099 7.17009 21.3199 4.93009 19.0699C2.69009 16.8199 2.68009 13.1799 4.93009 10.9399"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M10.59 13.4099C8.24996 11.0699 8.24996 7.26988 10.59 4.91988C12.93 2.56988 16.73 2.57988 19.08 4.91988C21.43 7.25988 21.42 11.0599 19.08 13.4099"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

const Link21Outline = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M16.5002 18.25H14.9902C14.5802 18.25 14.2402 17.91 14.2402 17.5C14.2402 17.09 14.5802 16.75 14.9902 16.75H16.5002C19.1202 16.75 21.2502 14.62 21.2502 12C21.2502 9.38 19.1202 7.25 16.5002 7.25H15.0002C14.5902 7.25 14.2502 6.91 14.2502 6.5C14.2502 6.09 14.5802 5.75 15.0002 5.75H16.5002C19.9502 5.75 22.7502 8.55 22.7502 12C22.7502 15.45 19.9502 18.25 16.5002 18.25Z"
        fill="currentColor"
      />
      <Path
        d="M9 18.25H7.5C4.05 18.25 1.25 15.45 1.25 12C1.25 8.55 4.05 5.75 7.5 5.75H9C9.41 5.75 9.75 6.09 9.75 6.5C9.75 6.91 9.41 7.25 9 7.25H7.5C4.88 7.25 2.75 9.38 2.75 12C2.75 14.62 4.88 16.75 7.5 16.75H9C9.41 16.75 9.75 17.09 9.75 17.5C9.75 17.91 9.41 18.25 9 18.25Z"
        fill="currentColor"
      />
      <Path
        d="M16 12.75H8C7.59 12.75 7.25 12.41 7.25 12C7.25 11.59 7.59 11.25 8 11.25H16C16.41 11.25 16.75 11.59 16.75 12C16.75 12.41 16.41 12.75 16 12.75Z"
        fill="currentColor"
      />
    </Svg>
  );
};

const Link21Twotone = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M13.0598 10.9399C15.3098 13.1899 15.3098 16.8299 13.0598 19.0699C10.8098 21.3099 7.16985 21.3199 4.92985 19.0699C2.68985 16.8199 2.67985 13.1799 4.92985 10.9399"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        opacity="0.4"
        d="M10.5909 13.4099C8.25094 11.0699 8.25094 7.26988 10.5909 4.91988C12.9309 2.56988 16.7309 2.57988 19.0809 4.91988C21.4309 7.25988 21.4209 11.0599 19.0809 13.4099"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

const variants: IconVariants = {
  bold: Link21Bold,
  broken: Link21Broken,
  bulk: Link21Bulk,
  linear: Link21Linear,
  outline: Link21Outline,
  twotone: Link21Twotone,
};

export const Link21Icon = ({
  variant = iconDefaultOptions.variant,
  className,
  ...props
}: IconProps) => {
  const textClasses = useContext(TextClassContext);
  const Component = variants[variant];
  return <Component className={cn(textClasses, className)} {...props} />;
};
