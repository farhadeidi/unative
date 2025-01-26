import { useContext } from "react";
import { Path, Svg } from "unative/lib/svg";
import { cn } from "unative/lib/utils";
import { TextClassContext } from "unative/ui/text";

import { iconDefaultOptions } from "../icons-configuration";
import type { IconProps, IconVariants } from "../types/icons-type";

const DocumentSketchBold = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M20.5 10.19H17.61C15.24 10.19 13.31 8.26 13.31 5.89V3C13.31 2.45 12.86 2 12.31 2H8.07C4.99 2 2.5 4 2.5 7.57V16.43C2.5 20 4.99 22 8.07 22H15.93C19.01 22 21.5 20 21.5 16.43V11.19C21.5 10.64 21.05 10.19 20.5 10.19ZM12.4 15.58L10.54 17.44C10.31 17.67 9.99 17.8 9.65 17.8C9.31 17.8 9 17.67 8.76 17.44L6.9 15.58C6.49 15.17 6.42 14.48 6.75 14L7.6 12.72C7.81 12.39 8.25 12.16 8.64 12.16H10.65C11.04 12.16 11.47 12.39 11.69 12.72L12.55 14C12.86 14.48 12.8 15.17 12.4 15.58Z"
        fill="currentColor"
      />
      <Path
        d="M17.4297 8.81048C18.3797 8.82048 19.6997 8.82048 20.8297 8.82048C21.3997 8.82048 21.6997 8.15048 21.2997 7.75048C19.8597 6.30048 17.2797 3.69048 15.7997 2.21048C15.3897 1.80048 14.6797 2.08048 14.6797 2.65048V6.14048C14.6797 7.60048 15.9197 8.81048 17.4297 8.81048Z"
        fill="currentColor"
      />
    </Svg>
  );
};

const DocumentSketchBroken = ({
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
        d="M10.2895 17.7C9.93952 18.05 9.35952 18.05 9.00952 17.7L6.54952 15.24C6.25952 14.95 6.20952 14.44 6.43952 14.1L7.56952 12.4C7.71952 12.18 8.05952 12 8.31952 12H10.9695C11.2395 12 11.5795 12.18 11.7195 12.4L12.8495 14.1C13.0795 14.44 13.0295 14.95 12.7395 15.24"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M2 9C2 4 4 2 9 2H14"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M22 10V15C22 20 20 22 15 22H9C4 22 2 20 2 15V12.98"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M18 10C15 10 14 9 14 6V2L22 10"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

const DocumentSketchBulk = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M20.5 10.19H17.61C15.24 10.19 13.31 8.26 13.31 5.89V3C13.31 2.45 12.86 2 12.31 2H8.07C4.99 2 2.5 4 2.5 7.57V16.43C2.5 20 4.99 22 8.07 22H15.93C19.01 22 21.5 20 21.5 16.43V11.19C21.5 10.64 21.05 10.19 20.5 10.19Z"
        fill="currentColor"
      />
      <Path
        d="M15.7997 2.20999C15.3897 1.79999 14.6797 2.07999 14.6797 2.64999V6.13999C14.6797 7.59999 15.9197 8.80999 17.4297 8.80999C18.3797 8.81999 19.6997 8.81999 20.8297 8.81999C21.3997 8.81999 21.6997 8.14999 21.2997 7.74999C19.8597 6.29999 17.2797 3.68999 15.7997 2.20999Z"
        fill="currentColor"
      />
      <Path
        d="M12.5496 14.0002L11.6996 12.7202C11.4896 12.3902 11.0496 12.1602 10.6596 12.1602H8.63962C8.24962 12.1602 7.81962 12.3902 7.59962 12.7202L6.74962 14.0002C6.41962 14.4802 6.48962 15.1702 6.89962 15.5802L8.75962 17.4402C8.99962 17.6702 9.31962 17.8002 9.64962 17.8002C9.97962 17.8002 10.2996 17.6702 10.5396 17.4402L12.3996 15.5802C12.7996 15.1702 12.8596 14.4802 12.5496 14.0002Z"
        fill="currentColor"
      />
    </Svg>
  );
};

const DocumentSketchLinear = ({
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
        d="M22 10V15C22 20 20 22 15 22H9C4 22 2 20 2 15V9C2 4 4 2 9 2H14"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M22 10H18C15 10 14 9 14 6V2L22 10Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M8.32 12H10.97C11.24 12 11.58 12.18 11.72 12.4L12.85 14.1C13.08 14.44 13.03 14.95 12.74 15.24L10.28 17.7C9.93 18.05 9.35 18.05 9 17.7L6.54 15.24C6.25 14.95 6.2 14.44 6.43 14.1L7.56 12.4C7.72 12.18 8.06 12 8.32 12Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

const DocumentSketchOutline = ({
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
        d="M15 22.75H9C3.57 22.75 1.25 20.43 1.25 15V9C1.25 3.57 3.57 1.25 9 1.25H14C14.41 1.25 14.75 1.59 14.75 2C14.75 2.41 14.41 2.75 14 2.75H9C4.39 2.75 2.75 4.39 2.75 9V15C2.75 19.61 4.39 21.25 9 21.25H15C19.61 21.25 21.25 19.61 21.25 15V10C21.25 9.59 21.59 9.25 22 9.25C22.41 9.25 22.75 9.59 22.75 10V15C22.75 20.43 20.43 22.75 15 22.75Z"
        fill="currentColor"
      />
      <Path
        d="M22 10.75H18C14.58 10.75 13.25 9.41999 13.25 5.99999V1.99999C13.25 1.69999 13.43 1.41999 13.71 1.30999C13.99 1.18999 14.31 1.25999 14.53 1.46999L22.53 9.46999C22.74 9.67999 22.81 10.01 22.69 10.29C22.58 10.57 22.3 10.75 22 10.75ZM14.75 3.80999V5.99999C14.75 8.57999 15.42 9.24999 18 9.24999H20.19L14.75 3.80999Z"
        fill="currentColor"
      />
      <Path
        d="M9.65064 18.7102C9.21064 18.7102 8.79064 18.5402 8.48064 18.2302L6.02064 15.7702C5.48064 15.2302 5.39064 14.3202 5.81064 13.6802L6.94064 11.9802C7.22064 11.5502 7.80064 11.2402 8.32064 11.2402H10.9706C11.4806 11.2402 12.0606 11.5502 12.3506 11.9802L13.4806 13.6702C13.9006 14.3002 13.8106 15.2202 13.2706 15.7602L10.8106 18.2202C10.5106 18.5402 10.0906 18.7102 9.65064 18.7102ZM8.33064 12.7502C8.29064 12.7602 8.21064 12.8002 8.19064 12.8302L7.07064 14.5202C7.04064 14.5602 7.05064 14.6802 7.09064 14.7202L9.55064 17.1802C9.60064 17.2302 9.72064 17.2302 9.77064 17.1802L12.2306 14.7202C12.2706 14.6802 12.2806 14.5702 12.2506 14.5202L11.1206 12.8302C11.1006 12.8102 11.0206 12.7702 10.9806 12.7602L8.33064 12.7502Z"
        fill="currentColor"
      />
    </Svg>
  );
};

const DocumentSketchTwotone = ({
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
        d="M21 9V14C21 19 19 21 14 21H8C3 21 1 19 1 14V8C1 3 3 1 8 1H13"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M21 9H17C14 9 13 8 13 5V1L21 9Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        opacity="0.4"
        fillRule="evenodd"
        clipRule="evenodd"
        d="M7.31975 11H9.96975C10.2398 11 10.5798 11.18 10.7198 11.4L11.8498 13.1C12.0798 13.44 12.0298 13.95 11.7398 14.24L9.27975 16.7C8.92975 17.05 8.34975 17.05 7.99975 16.7L5.53975 14.24C5.24975 13.95 5.19975 13.44 5.42975 13.1L6.55975 11.4C6.71975 11.18 7.05975 11 7.31975 11Z"
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
  bold: DocumentSketchBold,
  broken: DocumentSketchBroken,
  bulk: DocumentSketchBulk,
  linear: DocumentSketchLinear,
  outline: DocumentSketchOutline,
  twotone: DocumentSketchTwotone,
};

export const DocumentSketchIcon = ({
  variant = iconDefaultOptions.variant,
  className,
  ...props
}: IconProps) => {
  const textClasses = useContext(TextClassContext);
  const Component = variants[variant];
  return <Component className={cn(textClasses, className)} {...props} />;
};
