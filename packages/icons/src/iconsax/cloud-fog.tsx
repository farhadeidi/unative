import { useContext } from "react";
import { cn } from "unative/lib/utils";
import { Path, Svg } from "unative/ui/svg";
import { TextClassContext } from "unative/ui/text";

import type { IconProps, IconVariants } from "../icon-options";
import { defaultOptions } from "../icon-options";

const CloudFogBold = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M19.801 12.0013H4.20103C3.98103 12.0013 3.78103 11.8513 3.71103 11.6413C0.961026 2.55126 14.841 -0.938745 16.451 8.82125C18.111 9.03125 19.421 9.97125 20.231 11.2313C20.441 11.5613 20.191 12.0013 19.801 12.0013Z"
        fill="currentColor"
      />
      <Path
        d="M20 15.7812H4C3.59 15.7812 3.25 15.4412 3.25 15.0312C3.25 14.6213 3.59 14.2812 4 14.2812H20C20.41 14.2812 20.75 14.6213 20.75 15.0312C20.75 15.4412 20.41 15.7812 20 15.7812Z"
        fill="currentColor"
      />
      <Path
        d="M18 18.7812H6C5.59 18.7812 5.25 18.4412 5.25 18.0312C5.25 17.6213 5.59 17.2812 6 17.2812H18C18.41 17.2812 18.75 17.6213 18.75 18.0312C18.75 18.4412 18.41 18.7812 18 18.7812Z"
        fill="currentColor"
      />
      <Path
        d="M15 21.7812H9C8.59 21.7812 8.25 21.4412 8.25 21.0312C8.25 20.6213 8.59 20.2812 9 20.2812H15C15.41 20.2812 15.75 20.6213 15.75 21.0312C15.75 21.4412 15.41 21.7812 15 21.7812Z"
        fill="currentColor"
      />
    </Svg>
  );
};

const CloudFogBroken = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M4.29063 11.62C1.09063 2.69002 14.6206 -0.869977 16.1706 8.50002C18.1006 8.74002 19.5107 10.02 20.2007 11.62"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M14.541 8.93002C15.061 8.67002 15.6311 8.53002 16.2111 8.52002"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M18 15.03H20"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M4 15.03H15"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M6 18.03H18"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M9 21.03H15"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

const CloudFogBulk = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M19.799 12H4.19907C3.97907 12 3.77908 11.85 3.70908 11.64C0.959081 2.55003 14.8391 -0.939963 16.4391 8.82004C18.0991 9.03004 19.409 9.97003 20.219 11.23C20.439 11.56 20.189 12 19.799 12Z"
        fill="currentColor"
      />
      <Path
        opacity="0.4"
        d="M20 15.78H4C3.59 15.78 3.25 15.44 3.25 15.03C3.25 14.62 3.59 14.28 4 14.28H20C20.41 14.28 20.75 14.62 20.75 15.03C20.75 15.44 20.41 15.78 20 15.78Z"
        fill="currentColor"
      />
      <Path
        opacity="0.4"
        d="M18 18.78H6C5.59 18.78 5.25 18.44 5.25 18.03C5.25 17.62 5.59 17.28 6 17.28H18C18.41 17.28 18.75 17.62 18.75 18.03C18.75 18.44 18.41 18.78 18 18.78Z"
        fill="currentColor"
      />
      <Path
        opacity="0.4"
        d="M15 21.78H9C8.59 21.78 8.25 21.44 8.25 21.03C8.25 20.62 8.59 20.28 9 20.28H15C15.41 20.28 15.75 20.62 15.75 21.03C15.75 21.44 15.41 21.78 15 21.78Z"
        fill="currentColor"
      />
    </Svg>
  );
};

const CloudFogLinear = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M4.28989 11.62C1.08989 2.69002 14.6199 -0.869977 16.1699 8.50002C18.0999 8.74002 19.5099 10.02 20.1999 11.62"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M14.54 8.93002C15.06 8.67002 15.6301 8.53002 16.2101 8.52002"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M4 15.03H20"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M6 18.03H18"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M9 21.03H15"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

const CloudFogOutline = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M4.29008 12.3698C3.98008 12.3698 3.69011 12.1798 3.58011 11.8698C2.57011 9.04984 3.03012 6.33986 4.84012 4.44986C6.69012 2.50986 9.65012 1.73984 12.2101 2.52984C14.5501 3.24984 16.2001 5.17983 16.8001 7.85983C18.6001 8.26983 20.1101 9.52983 20.8801 11.3298C21.0401 11.7098 20.8701 12.1499 20.4901 12.3199C20.1101 12.4799 19.6701 12.3098 19.5001 11.9298C18.8501 10.4298 17.6001 9.45985 16.0601 9.25985C15.7301 9.21985 15.4701 8.96986 15.4101 8.63986C15.0101 6.23986 13.7101 4.57985 11.7601 3.97985C9.74011 3.35985 7.39008 3.96984 5.92008 5.49984C4.49008 6.98984 4.16008 9.07985 4.98008 11.3798C5.12008 11.7698 4.92013 12.1998 4.53013 12.3398C4.46013 12.3498 4.37008 12.3698 4.29008 12.3698Z"
        fill="currentColor"
      />
      <Path
        d="M14.5395 9.67999C14.2595 9.67999 13.9995 9.53001 13.8695 9.26001C13.6795 8.89001 13.8395 8.44 14.2095 8.25C14.8395 7.94 15.5095 7.77001 16.1995 7.76001C16.6295 7.78001 16.9595 8.08 16.9595 8.5C16.9695 8.91 16.6394 9.26001 16.2194 9.26001C15.7494 9.27001 15.2995 9.38 14.8695 9.59C14.7595 9.66 14.6495 9.67999 14.5395 9.67999Z"
        fill="currentColor"
      />
      <Path
        d="M20 15.78H4C3.59 15.78 3.25 15.44 3.25 15.03C3.25 14.62 3.59 14.28 4 14.28H20C20.41 14.28 20.75 14.62 20.75 15.03C20.75 15.44 20.41 15.78 20 15.78Z"
        fill="currentColor"
      />
      <Path
        d="M18 18.78H6C5.59 18.78 5.25 18.44 5.25 18.03C5.25 17.62 5.59 17.28 6 17.28H18C18.41 17.28 18.75 17.62 18.75 18.03C18.75 18.44 18.41 18.78 18 18.78Z"
        fill="currentColor"
      />
      <Path
        d="M15 21.78H9C8.59 21.78 8.25 21.44 8.25 21.03C8.25 20.62 8.59 20.28 9 20.28H15C15.41 20.28 15.75 20.62 15.75 21.03C15.75 21.44 15.41 21.78 15 21.78Z"
        fill="currentColor"
      />
    </Svg>
  );
};

const CloudFogTwotone = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M4.29063 11.6198C1.09063 2.68977 14.6206 -0.870222 16.1706 8.49978C18.1006 8.73978 19.5107 10.0198 20.2007 11.6198"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M14.541 8.92953C15.061 8.66953 15.6311 8.52953 16.2111 8.51953"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        opacity="0.4"
        d="M4 15.0298H20"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M6 18.0298H18"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        opacity="0.4"
        d="M9 21.0298H15"
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
  bold: CloudFogBold,
  broken: CloudFogBroken,
  bulk: CloudFogBulk,
  linear: CloudFogLinear,
  outline: CloudFogOutline,
  twotone: CloudFogTwotone,
};

export const CloudFogIcon = ({
  variant = defaultOptions.variant,
  className,
  ...props
}: IconProps) => {
  const textClasses = useContext(TextClassContext);
  const Component = variants[variant];
  return <Component className={cn(textClasses, className)} {...props} />;
};

export default CloudFogIcon;
