import { G, Path, Svg } from "unative/lib/svg";
import { cn } from "unative/lib/utils";

import type { IconProps, IconVariants } from "../types/icons-type";

const CloudRemoveBold = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M12 11.5312C9.24 11.5312 7 13.7713 7 16.5313C7 17.2713 7.16 17.9713 7.46 18.5913C7.54 18.7713 7.63 18.9413 7.73 19.1013C8.59 20.5513 10.18 21.5313 12 21.5313C13.82 21.5313 15.41 20.5513 16.27 19.1013C16.37 18.9413 16.46 18.7713 16.54 18.5913C16.84 17.9713 17 17.2713 17 16.5313C17 13.7713 14.76 11.5312 12 11.5312ZM13.5 18.1412C13.35 18.2912 13.16 18.3613 12.97 18.3613C12.78 18.3613 12.59 18.2912 12.44 18.1412L11.91 17.6113L11.36 18.1613C11.21 18.3113 11.02 18.3812 10.83 18.3812C10.64 18.3812 10.45 18.3113 10.3 18.1613C10.01 17.8713 10.01 17.3913 10.3 17.1013L10.85 16.5512L10.32 16.0213C10.03 15.7313 10.03 15.2513 10.32 14.9613C10.61 14.6713 11.09 14.6713 11.38 14.9613L11.91 15.4913L12.41 14.9913C12.7 14.7013 13.18 14.7013 13.47 14.9913C13.76 15.2812 13.76 15.7612 13.47 16.0512L12.97 16.5512L13.5 17.0813C13.79 17.3813 13.79 17.8512 13.5 18.1412Z"
        fill="currentColor"
      />
      <Path
        d="M20.1993 17.2909C19.8393 17.6109 19.4493 17.8809 19.0293 18.1009C18.6693 18.2809 18.3093 17.9309 18.3693 17.5309C18.4093 17.2409 18.4293 16.9409 18.4293 16.6309C18.4293 13.0509 15.5093 10.1309 11.9293 10.1309C8.34934 10.1309 5.42934 13.0509 5.42934 16.6309C5.42934 17.0909 5.47934 17.5309 5.56934 17.9609C5.63934 18.3109 5.36934 18.6609 5.01934 18.5709C1.06934 17.6109 1.04934 11.5309 5.46934 11.2109H5.51934C2.30934 2.29094 15.8493 -1.27906 17.3993 8.10094C21.7293 8.65094 23.4793 14.4209 20.1993 17.2909Z"
        fill="currentColor"
      />
    </Svg>
  );
};

const CloudRemoveBroken = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M5.5393 11.1199C0.859297 11.4499 0.859297 18.2599 5.5393 18.5899H7.4593"
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
        d="M12.9694 17.61L10.8594 15.5"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M12.9501 15.52L10.8301 17.64"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M17 16.53C17 17.27 16.84 17.97 16.54 18.59C16.46 18.77 16.37 18.94 16.27 19.1C15.41 20.55 13.82 21.53 12 21.53C10.18 21.53 8.59 20.55 7.73 19.1C7.63 18.94 7.54 18.77 7.46 18.59C7.16 17.97 7 17.27 7 16.53C7 13.77 9.24 11.53 12 11.53C14.76 11.53 17 13.77 17 16.53Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

const CloudRemoveBulk = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M20.2693 17.1899C19.2693 18.0999 17.9793 18.5999 16.6293 18.5899H16.5393C16.8393 17.9699 16.9993 17.2699 16.9993 16.5299C16.9993 13.7699 14.7593 11.5299 11.9993 11.5299C9.2393 11.5299 6.9993 13.7699 6.9993 16.5299C6.9993 17.2699 7.1593 17.9699 7.4593 18.5899H5.5393C0.859297 18.2599 0.859297 11.4499 5.5393 11.1199H5.5893C2.3793 2.1899 15.9193 -1.3801 17.4693 7.9999C21.7993 8.5499 23.5493 14.3199 20.2693 17.1899Z"
        fill="currentColor"
      />
      <Path
        d="M12 11.53C9.24 11.53 7 13.77 7 16.53C7 17.27 7.16 17.97 7.46 18.59C7.54 18.77 7.63 18.94 7.73 19.1C8.59 20.55 10.18 21.53 12 21.53C13.82 21.53 15.41 20.55 16.27 19.1C16.37 18.94 16.46 18.77 16.54 18.59C16.84 17.97 17 17.27 17 16.53C17 13.77 14.76 11.53 12 11.53ZM13.5 18.14C13.35 18.29 13.16 18.36 12.97 18.36C12.78 18.36 12.59 18.29 12.44 18.14L11.91 17.61L11.36 18.16C11.21 18.31 11.02 18.38 10.83 18.38C10.64 18.38 10.45 18.31 10.3 18.16C10.01 17.87 10.01 17.39 10.3 17.1L10.85 16.55L10.32 16.02C10.03 15.73 10.03 15.25 10.32 14.96C10.61 14.67 11.09 14.67 11.38 14.96L11.91 15.49L12.41 14.99C12.7 14.7 13.18 14.7 13.47 14.99C13.76 15.28 13.76 15.76 13.47 16.05L12.97 16.55L13.5 17.08C13.79 17.38 13.79 17.85 13.5 18.14Z"
        fill="currentColor"
      />
    </Svg>
  );
};

const CloudRemoveLinear = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M12.97 17.61L10.86 15.5"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M12.95 15.52L10.83 17.64"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M5.54003 11.12C0.860029 11.45 0.860029 18.26 5.54003 18.59H7.46003"
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
        d="M17 16.53C17 17.27 16.84 17.97 16.54 18.59C16.46 18.77 16.37 18.94 16.27 19.1C15.41 20.55 13.82 21.53 12 21.53C10.18 21.53 8.59 20.55 7.73 19.1C7.63 18.94 7.54 18.77 7.46 18.59C7.16 17.97 7 17.27 7 16.53C7 13.77 9.24 11.53 12 11.53C14.76 11.53 17 13.77 17 16.53Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

const CloudRemoveOutline = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M12.9698 18.3599C12.7798 18.3599 12.5898 18.2899 12.4398 18.1399L10.3298 16.0299C10.0398 15.7399 10.0398 15.2599 10.3298 14.9699C10.6198 14.6799 11.0998 14.6799 11.3898 14.9699L13.4998 17.0799C13.7898 17.3699 13.7898 17.8499 13.4998 18.1399C13.3598 18.2899 13.1598 18.3599 12.9698 18.3599Z"
        fill="currentColor"
      />
      <Path
        d="M10.8295 18.39C10.6395 18.39 10.4495 18.32 10.2995 18.17C10.0095 17.88 10.0095 17.4 10.2995 17.11L12.4095 15C12.6995 14.71 13.1795 14.71 13.4695 15C13.7595 15.29 13.7595 15.77 13.4695 16.06L11.3595 18.17C11.2195 18.31 11.0295 18.39 10.8295 18.39Z"
        fill="currentColor"
      />
      <Path
        d="M7.4593 19.3401H5.5393C2.5993 19.1301 1.2793 16.8701 1.2793 14.8501C1.2793 12.8301 2.5993 10.5701 5.4893 10.3701C5.8893 10.3301 6.2593 10.6501 6.2893 11.0701C6.3193 11.4901 6.0093 11.8401 5.5893 11.8701C3.6493 12.0101 2.7793 13.4701 2.7793 14.8601C2.7793 16.2501 3.6493 17.7101 5.5893 17.8501H7.4593C7.8693 17.8501 8.2093 18.1901 8.2093 18.6001C8.2093 19.0101 7.8693 19.3401 7.4593 19.3401Z"
        fill="currentColor"
      />
      <Path
        d="M16.6699 19.34C16.6499 19.34 16.6399 19.34 16.6199 19.34C16.2099 19.34 15.8299 19 15.8299 18.59C15.8299 18.16 16.1599 17.84 16.5699 17.84C17.8099 17.84 18.8999 17.41 19.7599 16.64C21.3199 15.28 21.4199 13.32 20.9999 11.94C20.5799 10.57 19.4099 9 17.3699 8.75C17.0399 8.71 16.7799 8.46001 16.7199 8.13001C16.3199 5.73001 15.0299 4.07 13.0699 3.47C11.0399 2.84 8.68992 3.46 7.21992 5C5.78992 6.49 5.45992 8.58001 6.28992 10.88C6.42992 11.27 6.22992 11.7 5.83992 11.84C5.44992 11.98 5.01992 11.78 4.87992 11.39C3.86992 8.57 4.32992 5.87 6.13992 3.97C7.98992 2.03 10.9599 1.26 13.5099 2.04C15.8499 2.76 17.4999 4.69 18.0999 7.37C20.1499 7.83 21.7799 9.38001 22.4299 11.52C23.1399 13.85 22.4999 16.25 20.7599 17.77C19.6399 18.77 18.1899 19.34 16.6699 19.34Z"
        fill="currentColor"
      />
      <Path
        d="M12 22.28C9.99 22.28 8.11 21.21 7.08 19.48C6.97 19.31 6.86 19.1 6.77 18.89C6.43 18.18 6.25 17.38 6.25 16.53C6.25 13.36 8.83 10.78 12 10.78C15.17 10.78 17.75 13.36 17.75 16.53C17.75 17.38 17.57 18.18 17.22 18.92C17.14 19.11 17.03 19.31 16.91 19.5C15.89 21.21 14.01 22.28 12 22.28ZM12 12.28C9.66 12.28 7.75 14.19 7.75 16.53C7.75 17.15 7.88 17.74 8.13 18.26C8.21 18.43 8.28 18.57 8.36 18.7C9.12 19.99 10.51 20.78 11.99 20.78C13.47 20.78 14.86 19.99 15.61 18.72C15.7 18.57 15.77 18.44 15.84 18.29C16.11 17.74 16.24 17.16 16.24 16.53C16.25 14.19 14.34 12.28 12 12.28Z"
        fill="currentColor"
      />
    </Svg>
  );
};

const CloudRemoveTwotone = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M12.9704 17.61L10.8604 15.5"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M12.9501 15.52L10.8301 17.64"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <G opacity="0.4">
        <Path
          d="M5.5393 11.1201C0.859297 11.4501 0.859297 18.2601 5.5393 18.5901H7.4593"
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
        d="M17 16.5298C17 17.2698 16.84 17.9698 16.54 18.5898C16.46 18.7698 16.37 18.9398 16.27 19.0998C15.41 20.5498 13.82 21.5298 12 21.5298C10.18 21.5298 8.59 20.5498 7.73 19.0998C7.63 18.9398 7.54 18.7698 7.46 18.5898C7.16 17.9698 7 17.2698 7 16.5298C7 13.7698 9.24 11.5298 12 11.5298C14.76 11.5298 17 13.7698 17 16.5298Z"
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
  bold: CloudRemoveBold,
  broken: CloudRemoveBroken,
  bulk: CloudRemoveBulk,
  linear: CloudRemoveLinear,
  outline: CloudRemoveOutline,
  twotone: CloudRemoveTwotone,
};

export const CloudRemoveIcon = ({
  variant = "linear",
  ...props
}: IconProps) => {
  const Component = variants[variant];
  return <Component {...props} />;
};
