import { Path, Svg } from "unative/lib/svg";
import { cn } from "unative/lib/utils";

import type { IconProps, IconVariants } from "../types/icons-type";

const ShapesBold = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M13.4303 15.0014H4.40034C2.58034 15.0014 1.42034 13.0514 2.30034 11.4514L4.63034 7.21141L6.81034 3.24141C7.72034 1.59141 10.1003 1.59141 11.0103 3.24141L13.2003 7.21141L14.2503 9.12141L15.5303 11.4514C16.4103 13.0514 15.2503 15.0014 13.4303 15.0014Z"
        fill="currentColor"
      />
      <Path
        d="M22.6507 15.999C22.6507 19.589 19.7407 22.499 16.1507 22.499C13.1007 22.499 10.5507 20.409 9.84075 17.569C9.77075 17.269 10.0007 16.999 10.3107 16.999H14.0807C15.4707 16.999 16.7307 16.279 17.4407 15.089C18.1407 13.889 18.1707 12.449 17.4907 11.229L16.9907 10.309C16.8007 9.96898 17.0707 9.55898 17.4507 9.62898C20.4107 10.229 22.6507 12.849 22.6507 15.999Z"
        fill="currentColor"
      />
    </Svg>
  );
};

const ShapesBroken = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M6.81034 3.23994C7.72034 1.58994 10.1003 1.58994 11.0103 3.23994L13.2003 7.20994L14.2503 9.11995L15.5303 11.45C16.4103 13.05 15.2503 15 13.4303 15H4.40034C2.58034 15 1.42034 13.05 2.30034 11.45L4.63034 7.20994"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M22 15.5C22 19.09 19.09 22 15.5 22C11.91 22 9 19.09 9 15.5C9 15.33 9.01 15.17 9.02 15H13.43C15.25 15 16.41 13.05 15.53 11.45L14.25 9.12C14.65 9.04 15.07 9 15.5 9C19.09 9 22 11.91 22 15.5Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

const ShapesBulk = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M13.4303 15H4.40034C2.58034 15 1.42034 13.05 2.30034 11.45L4.63034 7.20994L6.81034 3.23994C7.72034 1.58994 10.1003 1.58994 11.0103 3.23994L13.2003 7.20994L14.2503 9.11995L15.5303 11.45C16.4103 13.05 15.2503 15 13.4303 15Z"
        fill="currentColor"
      />
      <Path
        opacity="0.4"
        d="M22 15.5C22 19.09 19.09 22 15.5 22C11.91 22 9 19.09 9 15.5C9 15.33 9.01 15.17 9.02 15H13.43C15.25 15 16.41 13.05 15.53 11.45L14.25 9.12C14.65 9.04 15.07 9 15.5 9C19.09 9 22 11.91 22 15.5Z"
        fill="currentColor"
      />
    </Svg>
  );
};

const ShapesLinear = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M13.43 15H4.4C2.58 15 1.42 13.05 2.3 11.45L4.63 7.20994L6.81 3.23994C7.72 1.58994 10.1 1.58994 11.01 3.23994L13.2 7.20994L14.25 9.11995L15.53 11.45C16.41 13.05 15.25 15 13.43 15Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M22 15.5C22 19.09 19.09 22 15.5 22C11.91 22 9 19.09 9 15.5C9 15.33 9.01 15.17 9.02 15H13.43C15.25 15 16.41 13.05 15.53 11.45L14.25 9.12C14.65 9.04 15.07 9 15.5 9C19.09 9 22 11.91 22 15.5Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

const ShapesOutline = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M13.4297 15.7502H4.39971C3.27971 15.7502 2.25971 15.1703 1.68971 14.2003C1.11971 13.2303 1.09971 12.0702 1.63971 11.0802L6.14971 2.87024C6.70971 1.85024 7.73971 1.24023 8.90971 1.24023C10.0797 1.24023 11.1097 1.85024 11.6697 2.87024L16.1897 11.0802C16.7297 12.0602 16.7097 13.2303 16.1397 14.2003C15.5697 15.1703 14.5497 15.7502 13.4297 15.7502ZM8.90971 2.75024C8.29971 2.75024 7.75971 3.07025 7.46971 3.60025L2.95971 11.8102C2.67971 12.3302 2.68971 12.9302 2.97971 13.4402C3.27971 13.9502 3.80971 14.2502 4.39971 14.2502H13.4297C14.0197 14.2502 14.5497 13.9502 14.8497 13.4402C15.1497 12.9302 15.1597 12.3302 14.8697 11.8102L10.3497 3.60025C10.0597 3.07025 9.51971 2.75024 8.90971 2.75024Z"
        fill="currentColor"
      />
      <Path
        d="M15.5 22.75C11.5 22.75 8.25 19.5 8.25 15.5C8.25 15.32 8.26 15.14 8.27 14.96C8.29 14.56 8.62 14.25 9.02 14.25H13.43C14.02 14.25 14.55 13.95 14.85 13.44C15.15 12.93 15.16 12.33 14.87 11.81L13.59 9.48001C13.47 9.27001 13.47 9.01999 13.57 8.79999C13.67 8.57999 13.87 8.43 14.1 8.38C14.55 8.29 15.02 8.25 15.5 8.25C19.5 8.25 22.75 11.5 22.75 15.5C22.75 19.5 19.5 22.75 15.5 22.75ZM9.76 15.75C9.89 18.81 12.42 21.25 15.5 21.25C18.67 21.25 21.25 18.67 21.25 15.5C21.25 12.33 18.67 9.75 15.5 9.75C15.48 9.75 15.47 9.75 15.45 9.75L16.19 11.09C16.73 12.07 16.71 13.24 16.14 14.21C15.57 15.18 14.56 15.76 13.43 15.76H9.76V15.75Z"
        fill="currentColor"
      />
    </Svg>
  );
};

const ShapesTwotone = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M13.4303 15H4.40034C2.58034 15 1.42034 13.05 2.30034 11.45L4.63034 7.20994L6.81034 3.23994C7.72034 1.58994 10.1003 1.58994 11.0103 3.23994L13.2003 7.20994L14.2503 9.11995L15.5303 11.45C16.4103 13.05 15.2503 15 13.4303 15Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        opacity="0.4"
        d="M22 15.5C22 19.09 19.09 22 15.5 22C11.91 22 9 19.09 9 15.5C9 15.33 9.01 15.17 9.02 15H13.43C15.25 15 16.41 13.05 15.53 11.45L14.25 9.12C14.65 9.04 15.07 9 15.5 9C19.09 9 22 11.91 22 15.5Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

const variants: IconVariants = {
  bold: ShapesBold,
  broken: ShapesBroken,
  bulk: ShapesBulk,
  linear: ShapesLinear,
  outline: ShapesOutline,
  twotone: ShapesTwotone,
};

export const ShapesIcon = ({ variant = "linear", ...props }: IconProps) => {
  const Component = variants[variant];
  return <Component {...props} />;
};
