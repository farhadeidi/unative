import { Path, Svg } from "unative/lib/svg";
import { cn } from "unative/lib/utils";

import type { IconProps, IconVariants } from "../types/icons-type";

const SafeHomeBold = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M22.9998 15.3714V17.5614C22.9998 20.0014 21.2198 22.3014 18.7998 22.9714C18.6298 23.0114 18.4498 23.0114 18.2898 22.9714C17.1098 22.6514 16.0698 21.9314 15.3398 21.0014C14.5498 20.0214 14.0898 18.8114 14.0898 17.5614V15.3714C14.0898 14.9514 14.3998 14.4914 14.7798 14.3314L17.5598 13.1914C18.1898 12.9414 18.8898 12.9414 19.5198 13.1914L20.5198 13.6014L22.3098 14.3314C22.6898 14.4914 22.9998 14.9514 22.9998 15.3714Z"
        fill="currentColor"
      />
      <Path
        d="M20.9493 11.0113L20.7693 12.0813L20.0693 11.8013C19.0793 11.4013 17.9993 11.4013 16.9893 11.8013L14.1993 12.9513C13.2493 13.3513 12.5893 14.3413 12.5893 15.3713V17.5613C12.5893 18.7513 12.9193 19.9413 13.5293 21.0013H6.1793C4.8093 21.0013 3.5193 19.9113 3.2893 18.5613L2.0293 11.0113C1.8693 10.0813 2.3393 8.83126 3.0793 8.24126L9.6593 2.98126C10.6693 2.17126 12.3093 2.17126 13.3193 2.99126L19.8993 8.24126C20.6293 8.83126 21.1093 10.0813 20.9493 11.0113Z"
        fill="currentColor"
      />
    </Svg>
  );
};

const SafeHomeBroken = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M22.9998 17.5601V15.37C22.9998 14.95 22.6898 14.49 22.3098 14.33L20.5198 13.6L19.5198 13.1899C18.8898 12.9399 18.1898 12.9399 17.5598 13.1899L14.7798 14.33C14.3998 14.49 14.0898 14.95 14.0898 15.37V17.5601C14.0898 18.8101 14.5498 20.02 15.3398 21C16.0698 21.93 17.1099 22.65 18.2899 22.97C18.4499 23.01 18.6298 23.01 18.7998 22.97C19.7898 22.7 20.6698 22.1499 21.3598 21.4399"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M2.0293 11.0101C1.8693 10.0801 2.33929 8.83004 3.07929 8.24004L9.65931 2.98003C10.6693 2.17003 12.3093 2.17004 13.3193 2.99004L19.8993 8.24004C20.6293 8.83004 21.1093 10.0801 20.9493 11.0101L20.5193 13.6L19.5193 13.19C18.8893 12.94 18.1893 12.94 17.5593 13.19L14.7793 14.33C14.3993 14.49 14.0893 14.95 14.0893 15.37V17.5601C14.0893 18.8101 14.5493 20.02 15.3393 21H6.1793C4.8093 21 3.51931 19.9101 3.28931 18.5601L2.7393 15.24"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

const SafeHomeBulk = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M22.9998 15.3699V17.5599C22.9998 19.9999 21.2198 22.2999 18.7998 22.9699C18.6298 23.0099 18.4499 23.0099 18.2899 22.9699C17.1099 22.6499 16.0698 21.9299 15.3398 20.9999C14.5498 20.0199 14.0898 18.8099 14.0898 17.5599V15.3699C14.0898 14.9499 14.3998 14.49 14.7798 14.33L17.5598 13.1899C18.1898 12.9399 18.8898 12.9399 19.5198 13.1899L20.5198 13.5999L22.3098 14.33C22.6898 14.49 22.9998 14.9499 22.9998 15.3699Z"
        fill="currentColor"
      />
      <Path
        opacity="0.4"
        d="M20.9493 11.0101L20.5193 13.6L19.5193 13.1901C18.8893 12.9401 18.1893 12.9401 17.5593 13.1901L14.7793 14.3301C14.3993 14.4901 14.0893 14.95 14.0893 15.37V17.56C14.0893 18.81 14.5493 20.0201 15.3393 21H6.1793C4.8093 21 3.51931 19.91 3.28931 18.56L2.0293 11.0101C1.8693 10.0801 2.33929 8.83004 3.07929 8.24004L9.65931 2.98003C10.6693 2.17003 12.3093 2.17004 13.3193 2.99004L19.8993 8.24004C20.6293 8.83004 21.1093 10.0801 20.9493 11.0101Z"
        fill="currentColor"
      />
    </Svg>
  );
};

const SafeHomeLinear = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M23 15.37V17.5601C23 20.0001 21.22 22.3 18.8 22.97C18.63 23.01 18.45 23.01 18.29 22.97C17.11 22.65 16.07 21.93 15.34 21C14.55 20.02 14.09 18.8101 14.09 17.5601V15.37C14.09 14.95 14.4 14.49 14.78 14.33L17.56 13.1899C18.19 12.9399 18.89 12.9399 19.52 13.1899L20.52 13.6L22.31 14.33C22.69 14.49 23 14.95 23 15.37Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M20.9501 11.0101L20.52 13.6L19.52 13.19C18.89 12.94 18.19 12.94 17.56 13.19L14.78 14.33C14.4 14.49 14.09 14.95 14.09 15.37V17.5601C14.09 18.8101 14.55 20.02 15.34 21H6.18003C4.81003 21 3.52005 19.9101 3.29005 18.5601L2.03004 11.0101C1.87004 10.0801 2.34002 8.83004 3.08002 8.24004L9.66004 2.98003C10.67 2.17003 12.31 2.17004 13.32 2.99004L19.9 8.24004C20.63 8.83004 21.1101 10.0801 20.9501 11.0101Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

const SafeHomeOutline = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M18.5298 23.75C18.3798 23.75 18.2398 23.73 18.1098 23.7C16.7898 23.34 15.5998 22.55 14.7498 21.47C13.8398 20.34 13.3398 18.96 13.3398 17.57V15.38C13.3398 14.66 13.8198 13.93 14.4898 13.65L17.2798 12.51C18.0998 12.19 18.9898 12.19 19.7998 12.51L22.5999 13.65C23.2699 13.93 23.7599 14.66 23.7599 15.38V17.57C23.7599 20.36 21.7599 22.94 19.0099 23.7C18.8399 23.73 18.6798 23.75 18.5298 23.75ZM18.5399 13.75C18.2999 13.75 18.0598 13.79 17.8298 13.89L15.0598 15.03C14.9598 15.07 14.8398 15.26 14.8398 15.38V17.57C14.8398 18.62 15.2199 19.67 15.9199 20.54C16.5799 21.38 17.4899 21.99 18.4799 22.26C18.5099 22.27 18.5698 22.27 18.6198 22.25C20.6698 21.68 22.2398 19.67 22.2398 17.57V15.38C22.2398 15.26 22.1199 15.08 22.0099 15.03L19.2299 13.89C19.0099 13.8 18.7799 13.75 18.5399 13.75Z"
        fill="currentColor"
      />
      <Path
        d="M15.3405 21.75H6.18045C4.44045 21.75 2.84045 20.3999 2.55045 18.6899L1.29047 11.14C1.08047 9.95 1.67045 8.42002 2.61045 7.66002L9.19046 2.40001C10.4805 1.36001 12.5005 1.37002 13.7905 2.41002L20.3705 7.66002C21.3205 8.42002 21.9005 9.95 21.6905 11.14L21.2605 13.73C21.2205 13.95 21.0805 14.15 20.8805 14.26C20.6805 14.37 20.4405 14.39 20.2305 14.3L19.2305 13.89C18.7905 13.71 18.2904 13.71 17.8304 13.89L15.0605 15.03C14.9605 15.07 14.8405 15.26 14.8405 15.38V17.5699C14.8405 18.6199 15.2205 19.67 15.9205 20.54C16.1005 20.76 16.1405 21.0699 16.0105 21.3299C15.8905 21.5799 15.6305 21.75 15.3405 21.75ZM11.4805 3.11998C10.9905 3.11998 10.4905 3.27005 10.1305 3.56005L3.55045 8.81993C3.03045 9.23993 2.66045 10.22 2.77045 10.88L4.03046 18.43C4.20046 19.41 5.18045 20.24 6.18045 20.24H13.9805C13.5605 19.39 13.3405 18.47 13.3405 17.55V15.36C13.3405 14.64 13.8205 13.91 14.4905 13.63L17.2805 12.49C18.1005 12.17 18.9904 12.17 19.8004 12.49L19.9405 12.55L20.2205 10.89C20.3305 10.23 19.9605 9.24994 19.4405 8.82994L12.8604 3.57994C12.4804 3.26994 11.9805 3.11998 11.4805 3.11998Z"
        fill="currentColor"
      />
    </Svg>
  );
};

const SafeHomeTwotone = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M22.9998 15.37V17.5601C22.9998 20.0001 21.2198 22.3 18.7998 22.97C18.6298 23.01 18.4499 23.01 18.2899 22.97C17.1099 22.65 16.0698 21.93 15.3398 21C14.5498 20.02 14.0898 18.8101 14.0898 17.5601V15.37C14.0898 14.95 14.3998 14.49 14.7798 14.33L17.5598 13.1899C18.1898 12.9399 18.8898 12.9399 19.5198 13.1899L20.5198 13.6L22.3098 14.33C22.6898 14.49 22.9998 14.95 22.9998 15.37Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        opacity="0.4"
        d="M20.9493 11.0103L20.5193 13.6003L19.5193 13.1902C18.8893 12.9402 18.1893 12.9402 17.5593 13.1902L14.7793 14.3302C14.3993 14.4902 14.0893 14.9503 14.0893 15.3703V17.5604C14.0893 18.8104 14.5493 20.0203 15.3393 21.0003H6.1793C4.8093 21.0003 3.51931 19.9104 3.28931 18.5604L2.0293 11.0103C1.8693 10.0803 2.33929 8.83028 3.07929 8.24028L9.65931 2.98027C10.6693 2.17027 12.3093 2.17028 13.3193 2.99028L19.8993 8.24028C20.6293 8.83028 21.1093 10.0803 20.9493 11.0103Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

const variants: IconVariants = {
  bold: SafeHomeBold,
  broken: SafeHomeBroken,
  bulk: SafeHomeBulk,
  linear: SafeHomeLinear,
  outline: SafeHomeOutline,
  twotone: SafeHomeTwotone,
};

export const SafeHomeIcon = ({ variant = "linear", ...props }: IconProps) => {
  const Component = variants[variant];
  return <Component {...props} />;
};
