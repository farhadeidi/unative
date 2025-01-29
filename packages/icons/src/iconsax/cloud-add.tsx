import { useContext } from "react";
import { cn } from "unative/lib/utils";
import { G, Path, Svg } from "unative/ui/svg";
import { TextClassContext } from "unative/ui/text";

import type { IconProps, IconVariants } from "../icon-options";
import { defaultOptions } from "../icon-options";

const CloudAddBold = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M12 11.5312C9.24 11.5312 7 13.7713 7 16.5313C7 17.2713 7.16 17.9713 7.46 18.5913C7.54 18.7713 7.63 18.9413 7.73 19.1013C8.59 20.5513 10.18 21.5313 12 21.5313C13.82 21.5313 15.41 20.5513 16.27 19.1013C16.37 18.9413 16.46 18.7713 16.54 18.5913C16.84 17.9713 17 17.2713 17 16.5313C17 13.7713 14.76 11.5312 12 11.5312ZM14.07 16.1013L11.94 18.0712C11.8 18.2013 11.61 18.2713 11.43 18.2713C11.24 18.2713 11.05 18.2012 10.9 18.0512L9.91 17.0612C9.62 16.7712 9.62 16.2913 9.91 16.0013C10.2 15.7113 10.68 15.7113 10.97 16.0013L11.45 16.4812L13.05 15.0013C13.36 14.7213 13.83 14.7413 14.11 15.0413C14.39 15.3413 14.37 15.8113 14.07 16.1013Z"
        fill="currentColor"
      />
      <Path
        d="M20.1993 17.0715C19.8393 17.3915 19.4493 17.6615 19.0293 17.8815C18.6693 18.0615 18.3093 17.7115 18.3693 17.3115C18.4093 17.0215 18.4293 16.7215 18.4293 16.4115C18.4293 12.8315 15.5093 9.91149 11.9293 9.91149C8.34934 9.91149 5.42934 12.8315 5.42934 16.4115C5.42934 16.8715 5.47934 17.3115 5.56934 17.7415C5.63934 18.0915 5.36934 18.4415 5.01934 18.3515C1.06934 17.3915 1.04934 11.3115 5.46934 11.0015H5.51934C2.30934 2.07149 15.8493 -1.49851 17.3993 7.88149C21.7293 8.43149 23.4793 14.2015 20.1993 17.0715Z"
        fill="currentColor"
      />
    </Svg>
  );
};

const CloudAddBroken = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M5.5393 11.1199C0.859297 11.4499 0.859297 18.2599 5.5393 18.5899H7.45934"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M17.4691 8C21.7991 8.55 23.5491 14.32 20.2691 17.19C19.2691 18.1 17.9791 18.6 16.6291 18.59H16.5391"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M5.58881 11.12C3.05881 4.08998 10.9188 0.379982 15.1288 3.69998"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M17 16.53C17 17.27 16.84 17.97 16.54 18.59C16.46 18.77 16.37 18.94 16.27 19.1C15.41 20.55 13.82 21.53 12 21.53C10.18 21.53 8.58998 20.55 7.72998 19.1C7.62998 18.94 7.54002 18.77 7.46002 18.59C7.16002 17.97 7 17.27 7 16.53C7 13.77 9.24 11.53 12 11.53C14.76 11.53 17 13.77 17 16.53Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M10.4395 16.53L11.4294 17.5201L13.5594 15.55"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

const CloudAddBulk = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M20.2693 17.1899C19.2693 18.0999 17.9793 18.5999 16.6293 18.5899H16.5393C16.8393 17.9699 16.9993 17.2699 16.9993 16.5299C16.9993 13.7699 14.7593 11.5299 11.9993 11.5299C9.23932 11.5299 6.99932 13.7699 6.99932 16.5299C6.99932 17.2699 7.15934 17.9699 7.45934 18.5899H5.5393C0.859297 18.2599 0.859297 11.4499 5.5393 11.1199H5.58935C2.37935 2.1899 15.9193 -1.3801 17.4693 7.9999C21.7993 8.5499 23.5493 14.3199 20.2693 17.1899Z"
        fill="currentColor"
      />
      <Path
        d="M12 11.53C9.24 11.53 7 13.77 7 16.53C7 17.27 7.16002 17.97 7.46002 18.59C7.54002 18.77 7.62998 18.94 7.72998 19.1C8.58998 20.55 10.18 21.53 12 21.53C13.82 21.53 15.41 20.55 16.27 19.1C16.37 18.94 16.46 18.77 16.54 18.59C16.84 17.97 17 17.27 17 16.53C17 13.77 14.76 11.53 12 11.53ZM14.07 16.1L11.94 18.07C11.8 18.2 11.61 18.27 11.43 18.27C11.24 18.27 11.05 18.2 10.9 18.05L9.90997 17.06C9.61997 16.77 9.61997 16.29 9.90997 16C10.2 15.71 10.68 15.71 10.97 16L11.45 16.48L13.05 15C13.36 14.72 13.83 14.74 14.11 15.04C14.39 15.34 14.37 15.81 14.07 16.1Z"
        fill="currentColor"
      />
    </Svg>
  );
};

const CloudAddLinear = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M5.54003 11.12C0.860029 11.45 0.860029 18.26 5.54003 18.59H7.46007"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M5.59003 11.12C2.38003 2.19002 15.92 -1.37998 17.47 8.00002C21.8 8.55002 23.55 14.32 20.27 17.19C19.27 18.1 17.98 18.6 16.63 18.59H16.54"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M17 16.53C17 17.27 16.84 17.97 16.54 18.59C16.46 18.77 16.37 18.94 16.27 19.1C15.41 20.55 13.82 21.53 12 21.53C10.18 21.53 8.58998 20.55 7.72998 19.1C7.62998 18.94 7.54002 18.77 7.46002 18.59C7.16002 17.97 7 17.27 7 16.53C7 13.77 9.24 11.53 12 11.53C14.76 11.53 17 13.77 17 16.53Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M10.4399 16.53L11.4299 17.5201L13.5599 15.55"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

const CloudAddOutline = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M7.46027 19.3401H5.54022C2.60022 19.1301 1.28027 16.8701 1.28027 14.8601C1.28027 12.8501 2.60023 10.5801 5.49023 10.3801C5.90023 10.3401 6.26022 10.6601 6.29022 11.0801C6.32022 11.4901 6.01027 11.8501 5.59027 11.8801C3.65027 12.0201 2.78027 13.4801 2.78027 14.8701C2.78027 16.2601 3.65027 17.7201 5.59027 17.8601H7.46027C7.87027 17.8601 8.21027 18.2001 8.21027 18.6101C8.21027 19.0201 7.87027 19.3401 7.46027 19.3401Z"
        fill="currentColor"
      />
      <Path
        d="M16.6699 19.34C16.6499 19.34 16.6399 19.34 16.6199 19.34C16.2099 19.34 15.8299 19 15.8299 18.59C15.8299 18.16 16.1499 17.84 16.5699 17.84C17.7999 17.84 18.8999 17.41 19.7599 16.64C21.3199 15.28 21.4199 13.32 20.9999 11.94C20.5799 10.57 19.4099 9 17.3699 8.75C17.0399 8.71 16.7799 8.46001 16.7199 8.13001C16.3199 5.73001 15.0299 4.07 13.0699 3.47C11.0499 2.84 8.68989 3.46 7.21988 5C5.78988 6.49 5.45989 8.58001 6.28989 10.88C6.42989 11.27 6.22994 11.7 5.83994 11.84C5.44994 11.98 5.01992 11.78 4.87992 11.39C3.86992 8.57 4.32993 5.87 6.13993 3.97C7.98993 2.03 10.9599 1.26 13.5099 2.04C15.8499 2.76 17.4999 4.69 18.0999 7.37C20.1399 7.83 21.7799 9.38001 22.4299 11.52C23.1399 13.85 22.4999 16.25 20.7499 17.77C19.6399 18.77 18.1899 19.34 16.6699 19.34Z"
        fill="currentColor"
      />
      <Path
        d="M12 22.28C9.99 22.28 8.11002 21.21 7.08002 19.48C6.97002 19.31 6.86002 19.11 6.77002 18.89C6.43002 18.18 6.25 17.37 6.25 16.53C6.25 13.36 8.83 10.78 12 10.78C15.17 10.78 17.75 13.36 17.75 16.53C17.75 17.38 17.57 18.18 17.21 18.92C17.13 19.11 17.02 19.31 16.9 19.5C15.89 21.21 14.01 22.28 12 22.28ZM12 12.28C9.66 12.28 7.75 14.19 7.75 16.53C7.75 17.15 7.88 17.73 8.13 18.26C8.21 18.43 8.27999 18.57 8.35999 18.7C9.11999 19.99 10.51 20.78 11.99 20.78C13.47 20.78 14.86 19.99 15.61 18.72C15.7 18.57 15.78 18.43 15.84 18.29C16.11 17.74 16.24 17.16 16.24 16.54C16.25 14.19 14.34 12.28 12 12.28Z"
        fill="currentColor"
      />
      <Path
        d="M11.4299 18.2698C11.2399 18.2698 11.0499 18.1998 10.8999 18.0498L9.90988 17.0598C9.61988 16.7698 9.61988 16.2898 9.90988 15.9998C10.1999 15.7098 10.6799 15.7098 10.9699 15.9998L11.4499 16.4798L13.0499 14.9998C13.3599 14.7198 13.8299 14.7398 14.1099 15.0398C14.3899 15.3398 14.3699 15.8198 14.0699 16.0998L11.9399 18.0698C11.7899 18.1998 11.6099 18.2698 11.4299 18.2698Z"
        fill="currentColor"
      />
    </Svg>
  );
};

const CloudAddTwotone = ({ size = 24, className, ...props }: IconProps) => {
  return (
    <Svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      className={cn("text-foreground", className)}
      {...props}
    >
      <G opacity="0.4">
        <Path
          d="M5.5393 11.1201C0.859297 11.4501 0.859297 18.2601 5.5393 18.5901H7.45934"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeMiterlimit="10"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <Path
          d="M5.59003 11.1201C2.38003 2.19014 15.92 -1.37985 17.47 8.00015C21.8 8.55015 23.55 14.3201 20.27 17.1901C19.27 18.1001 17.98 18.6001 16.63 18.5901H16.54"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeMiterlimit="10"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </G>
      <Path
        d="M17 16.5298C17 17.2698 16.84 17.9698 16.54 18.5898C16.46 18.7698 16.37 18.9398 16.27 19.0998C15.41 20.5498 13.82 21.5298 12 21.5298C10.18 21.5298 8.58998 20.5498 7.72998 19.0998C7.62998 18.9398 7.54002 18.7698 7.46002 18.5898C7.16002 17.9698 7 17.2698 7 16.5298C7 13.7698 9.24 11.5298 12 11.5298C14.76 11.5298 17 13.7698 17 16.5298Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M10.4404 16.5298L11.4304 17.5198L13.5604 15.5498"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

const variants: IconVariants = {
  bold: CloudAddBold,
  broken: CloudAddBroken,
  bulk: CloudAddBulk,
  linear: CloudAddLinear,
  outline: CloudAddOutline,
  twotone: CloudAddTwotone,
};

export const CloudAddIcon = ({
  variant = defaultOptions.variant,
  className,
  ...props
}: IconProps) => {
  const textClasses = useContext(TextClassContext);
  const Component = variants[variant];
  return <Component className={cn(textClasses, className)} {...props} />;
};

export default CloudAddIcon;
