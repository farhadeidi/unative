import { useContext } from "react";
import { cn } from "unative/lib/utils";
import { Path, Svg } from "unative/ui/svg";
import { TextClassContext } from "unative/ui/text";

import type { IconProps, IconVariants } from "../icon-options";
import { defaultOptions } from "../icon-options";

const LampSlashBold = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M15.7007 4.34909L6.4007 13.6491C5.9307 14.1191 5.1107 14.0191 4.8107 13.4191C4.2707 12.3491 3.9707 11.1791 3.9707 10.0491C3.9707 7.59909 5.0607 5.30909 6.9707 3.76909C8.8807 2.22909 11.3807 1.65909 13.8307 2.19909C14.3707 2.31909 14.9007 2.48909 15.4007 2.71909C16.0407 3.00909 16.2007 3.84909 15.7007 4.34909Z"
        fill="currentColor"
      />
      <Path
        d="M15.4494 20.6284C13.1894 19.9884 10.8094 19.9884 8.54941 20.6284C8.17941 20.7384 7.95941 21.1184 8.06941 21.4884C8.17941 21.8584 8.55941 22.0684 8.92941 21.9684C10.9394 21.3984 13.0494 21.3984 15.0594 21.9684C15.1194 21.9884 15.1894 21.9984 15.2494 21.9984C15.5494 21.9984 15.8294 21.7984 15.9194 21.4884C16.0294 21.1184 15.8194 20.7384 15.4494 20.6284Z"
        fill="currentColor"
      />
      <Path
        d="M20.5591 1.95188C20.2691 1.66188 19.7891 1.66188 19.4991 1.95188L3.64914 17.8019C3.35914 18.0919 3.35914 18.5719 3.64914 18.8619C3.79914 19.0119 3.98914 19.0819 4.17914 19.0819C4.36914 19.0819 4.55914 19.0119 4.70914 18.8619L7.16914 16.4019C7.38914 16.5819 7.61914 16.7619 7.85914 16.9219V17.7519C7.84914 18.0319 7.83914 18.4619 8.16914 18.8119C8.51914 19.1619 9.03914 19.2119 9.44914 19.2119H14.5791C15.1191 19.2119 15.5291 19.0619 15.8091 18.7819C16.1991 18.3819 16.1791 17.8819 16.1691 17.6219V16.9219C19.2791 14.8319 21.2291 10.4219 19.2091 6.36188C18.9891 5.93188 18.7191 5.52187 18.4191 5.14187L20.5491 3.01187C20.8491 2.72187 20.8491 2.24187 20.5591 1.95188Z"
        fill="currentColor"
      />
    </Svg>
  );
};

const LampSlashBroken = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M20.0297 2.47998L4.17969 18.33"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M13.5996 2.16992C15.0596 2.48992 16.3596 3.26992 17.3596 4.34992"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M5.25008 12.9998C4.83008 12.0298 4.58008 10.9798 4.58008 9.89977C4.58008 6.51976 6.57008 3.63977 9.38008 2.50977"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M19.0602 7.2998C20.2802 11.1798 18.3102 15.0798 15.5202 16.8698V18.0298C15.5202 18.3198 15.6202 18.9898 14.6202 18.9898H9.42016C8.39016 18.9898 8.52016 18.5598 8.52016 18.0298V16.8698C8.04016 16.5698 7.59016 16.1998 7.16016 15.7698"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M8.5 22C10.79 21.35 13.21 21.35 15.5 22"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

const LampSlashBulk = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M15.2592 21.9999C15.1992 21.9999 15.1292 21.9899 15.0692 21.9699C13.0592 21.3999 10.9492 21.3999 8.93918 21.9699C8.56918 22.0699 8.17918 21.8599 8.07918 21.4899C7.96918 21.1199 8.18918 20.7299 8.55918 20.6299C10.8192 19.9899 13.1992 19.9899 15.4592 20.6299C15.8292 20.7399 16.0492 21.1199 15.9392 21.4899C15.8392 21.7999 15.5592 21.9999 15.2592 21.9999Z"
        fill="currentColor"
      />
      <Path
        d="M4.17914 19.0799C3.98914 19.0799 3.79914 19.0099 3.64914 18.8599C3.35914 18.5699 3.35914 18.0899 3.64914 17.7999L19.4991 1.94992C19.7891 1.65992 20.2691 1.65992 20.5591 1.94992C20.8491 2.23992 20.8491 2.71992 20.5591 3.00992L4.70914 18.8599C4.55914 19.0099 4.36914 19.0799 4.17914 19.0799Z"
        fill="currentColor"
      />
      <Path
        opacity="0.4"
        d="M16.6307 3.42007L5.4907 14.5601C4.5307 13.2001 3.9707 11.6001 3.9707 10.0501C3.9707 7.60007 5.0607 5.31007 6.9707 3.77007C8.8807 2.23007 11.3807 1.66007 13.8307 2.20007C14.8407 2.42007 15.7907 2.84007 16.6307 3.42007Z"
        fill="currentColor"
      />
      <Path
        opacity="0.4"
        d="M16.1694 16.9201V17.6201C16.1794 17.8801 16.1994 18.3801 15.8094 18.7801C15.5294 19.0601 15.1194 19.2101 14.5794 19.2101H9.44937C9.03937 19.2101 8.51937 19.1601 8.16937 18.8101C7.83937 18.4601 7.84938 18.0301 7.85938 17.7501V16.9201C7.40938 16.6201 6.98937 16.2801 6.60938 15.9001L17.9494 4.56006C18.4494 5.09006 18.8794 5.70006 19.2094 6.36006C21.2294 10.4201 19.2794 14.8301 16.1694 16.9201Z"
        fill="currentColor"
      />
    </Svg>
  );
};

const LampSlashLinear = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M20.0299 2.47998L4.17993 18.33"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M5.25008 12.9999C4.83008 12.0299 4.58008 10.9799 4.58008 9.89993C4.58008 4.98993 8.80008 1.11993 13.6001 2.16993C15.0601 2.48993 16.3601 3.26993 17.3601 4.34993"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M19.0599 7.30005C20.2799 11.18 18.3099 15.08 15.5199 16.87V18.03C15.5199 18.32 15.6199 18.99 14.6199 18.99H9.41991C8.38991 18.99 8.51991 18.56 8.51991 18.03V16.87C8.03991 16.57 7.58991 16.2 7.15991 15.77"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M8.5 22C10.79 21.35 13.21 21.35 15.5 22"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

const LampSlashOutline = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M4.18012 19.0799C3.99012 19.0799 3.80012 19.0099 3.65012 18.8599C3.36012 18.5699 3.36012 18.0899 3.65012 17.7999L19.5001 1.94992C19.7901 1.65992 20.2701 1.65992 20.5601 1.94992C20.8501 2.23992 20.8501 2.71992 20.5601 3.00992L4.71012 18.8599C4.56012 19.0099 4.37012 19.0799 4.18012 19.0799Z"
        fill="currentColor"
      />
      <Path
        d="M5.25031 13.75C4.96031 13.75 4.69031 13.58 4.56031 13.3C4.07031 12.18 3.82031 11.04 3.82031 9.90001C3.82031 7.18001 5.00031 4.67001 7.05031 3.01001C8.97031 1.47001 11.3503 0.910008 13.7503 1.44001C15.3303 1.79001 16.7703 2.62001 17.9003 3.84001C18.1803 4.14001 18.1603 4.62001 17.8603 4.90001C17.5603 5.18001 17.0803 5.16001 16.8003 4.86001C15.8703 3.86001 14.7103 3.18001 13.4303 2.90001C11.4803 2.48001 9.55031 2.93001 8.00031 4.18001C6.30031 5.55001 5.33031 7.63001 5.33031 9.90001C5.33031 10.83 5.54031 11.77 5.94031 12.7C6.11031 13.08 5.93031 13.52 5.55031 13.69C5.45031 13.73 5.35031 13.75 5.25031 13.75Z"
        fill="currentColor"
      />
      <Path
        d="M14.6096 19.7502H9.41961C9.02961 19.7502 8.47961 19.7102 8.10961 19.3302C7.74961 18.9602 7.75961 18.4902 7.76961 18.1802V17.2702C7.36961 16.9902 6.98961 16.6702 6.62961 16.3102C6.33961 16.0202 6.33961 15.5402 6.62961 15.2502C6.91961 14.9602 7.39961 14.9602 7.68961 15.2502C8.07961 15.6302 8.48961 15.9702 8.91961 16.2502C9.12961 16.3902 9.26961 16.6302 9.26961 16.8802V18.2202C9.26961 18.2302 9.26961 18.2402 9.26961 18.2502C9.30961 18.2502 9.35961 18.2502 9.42961 18.2502H14.6196C14.6896 18.2502 14.7396 18.2502 14.7796 18.2402C14.7796 18.2002 14.7796 18.1602 14.7796 18.1302V16.8702C14.7796 16.6102 14.9096 16.3802 15.1296 16.2402C17.5996 14.6602 19.4996 11.1602 18.3596 7.5302C18.2396 7.1302 18.4596 6.7102 18.8496 6.5902C19.2396 6.4602 19.6696 6.69019 19.7896 7.08019C21.0996 11.2602 19.0596 15.2902 16.2796 17.2702V18.0402C16.2896 18.3502 16.2996 18.8802 15.8896 19.3002C15.5796 19.6002 15.1596 19.7502 14.6096 19.7502Z"
        fill="currentColor"
      />
      <Path
        d="M15.5003 22.7499C15.4303 22.7499 15.3603 22.7399 15.2903 22.7199C13.1303 22.0999 10.8603 22.0999 8.70025 22.7199C8.30025 22.8299 7.89025 22.5999 7.77025 22.1999C7.65025 21.7999 7.89025 21.3899 8.29025 21.2699C10.7103 20.5799 13.2803 20.5799 15.7003 21.2699C16.1003 21.3799 16.3303 21.7999 16.2203 22.1999C16.1303 22.5399 15.8303 22.7499 15.5003 22.7499Z"
        fill="currentColor"
      />
    </Svg>
  );
};

const LampSlashTwotone = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M20.0297 2.47998L4.17969 18.33"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M5.25008 13.0002C4.83008 12.0302 4.58008 10.9802 4.58008 9.90017C4.58008 4.99017 8.80008 1.12017 13.6001 2.17017C15.0601 2.49017 16.3601 3.27017 17.3601 4.35017"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        opacity="0.4"
        d="M19.0602 7.2998C20.2802 11.1798 18.3102 15.0798 15.5202 16.8698V18.0298C15.5202 18.3198 15.6202 18.9898 14.6202 18.9898H9.42016C8.39016 18.9898 8.52016 18.5598 8.52016 18.0298V16.8698C8.04016 16.5698 7.59016 16.1998 7.16016 15.7698"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        opacity="0.4"
        d="M8.5 22.0002C10.79 21.3502 13.21 21.3502 15.5 22.0002"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

const variants: IconVariants = {
  bold: LampSlashBold,
  broken: LampSlashBroken,
  bulk: LampSlashBulk,
  linear: LampSlashLinear,
  outline: LampSlashOutline,
  twotone: LampSlashTwotone,
};

export const LampSlashIcon = ({
  variant = defaultOptions.variant,
  className,
  ...props
}: IconProps) => {
  const textClasses = useContext(TextClassContext);
  const Component = variants[variant];
  return <Component className={cn(textClasses, className)} {...props} />;
};

export default LampSlashIcon;
