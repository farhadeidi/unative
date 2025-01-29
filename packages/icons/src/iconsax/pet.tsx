import { useContext } from "react";
import { cn } from "unative/lib/utils";
import { Path, Svg } from "unative/ui/svg";
import { TextClassContext } from "unative/ui/text";

import type { IconProps, IconVariants } from "../icon-options";
import { defaultOptions } from "../icon-options";

const PetBold = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M19.0803 15.7203C18.4903 12.1903 15.1003 9.32031 11.5203 9.32031C7.63028 9.32031 4.21028 12.4703 3.88028 16.3503C3.75028 17.8503 4.23028 19.2703 5.22028 20.3403C6.20028 21.4103 7.58028 22.0003 9.08028 22.0003H13.7603C15.4503 22.0003 16.9303 21.3403 17.9403 20.1503C18.9503 18.9603 19.3503 17.3803 19.0803 15.7203Z"
        fill="currentColor"
      />
      <Path
        d="M10.2796 7.86C11.8978 7.86 13.2096 6.54819 13.2096 4.93C13.2096 3.31181 11.8978 2 10.2796 2C8.66141 2 7.34961 3.31181 7.34961 4.93C7.34961 6.54819 8.66141 7.86 10.2796 7.86Z"
        fill="currentColor"
      />
      <Path
        d="M16.94 9.02844C18.2876 9.02844 19.38 7.93601 19.38 6.58844C19.38 5.24086 18.2876 4.14844 16.94 4.14844C15.5924 4.14844 14.5 5.24086 14.5 6.58844C14.5 7.93601 15.5924 9.02844 16.94 9.02844Z"
        fill="currentColor"
      />
      <Path
        d="M20.5496 12.9313C21.6266 12.9313 22.4996 12.0582 22.4996 10.9812C22.4996 9.90429 21.6266 9.03125 20.5496 9.03125C19.4727 9.03125 18.5996 9.90429 18.5996 10.9812C18.5996 12.0582 19.4727 12.9313 20.5496 12.9313Z"
        fill="currentColor"
      />
      <Path
        d="M3.94 10.9816C5.28757 10.9816 6.38 9.88914 6.38 8.54156C6.38 7.19399 5.28757 6.10156 3.94 6.10156C2.59243 6.10156 1.5 7.19399 1.5 8.54156C1.5 9.88914 2.59243 10.9816 3.94 10.9816Z"
        fill="currentColor"
      />
    </Svg>
  );
};

const PetBroken = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M4.41064 16.75C4.17064 19.64 6.35064 22 9.25064 22H14.0406C17.3006 22 19.5406 19.37 19.0006 16.15C18.4306 12.77 15.1706 10 11.7406 10C9.46064 10 7.34064 11.14 5.97064 12.87"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M10.4707 7.5C11.8514 7.5 12.9707 6.38071 12.9707 5C12.9707 3.61929 11.8514 2.5 10.4707 2.5C9.08999 2.5 7.9707 3.61929 7.9707 5C7.9707 6.38071 9.08999 7.5 10.4707 7.5Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M17.3008 8.69995C18.4053 8.69995 19.3008 7.80452 19.3008 6.69995C19.3008 5.59538 18.4053 4.69995 17.3008 4.69995C16.1962 4.69995 15.3008 5.59538 15.3008 6.69995C15.3008 7.80452 16.1962 8.69995 17.3008 8.69995Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M21 12.7C21.8284 12.7 22.5 12.0284 22.5 11.2C22.5 10.3715 21.8284 9.69995 21 9.69995C20.1716 9.69995 19.5 10.3715 19.5 11.2C19.5 12.0284 20.1716 12.7 21 12.7Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M3.9707 10.7C5.07527 10.7 5.9707 9.80452 5.9707 8.69995C5.9707 7.59538 5.07527 6.69995 3.9707 6.69995C2.86613 6.69995 1.9707 7.59538 1.9707 8.69995C1.9707 9.80452 2.86613 10.7 3.9707 10.7Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

const PetBulk = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M19.0803 15.7201C18.4903 12.1901 15.1003 9.32007 11.5203 9.32007C7.63028 9.32007 4.21028 12.4701 3.88028 16.3501C3.75028 17.8501 4.23028 19.2701 5.22028 20.3401C6.20028 21.4101 7.58028 22.0001 9.08028 22.0001H13.7603C15.4503 22.0001 16.9303 21.3401 17.9403 20.1501C18.9503 18.9601 19.3503 17.3801 19.0803 15.7201Z"
        fill="currentColor"
      />
      <Path
        d="M10.2796 7.86C11.8978 7.86 13.2096 6.54819 13.2096 4.93C13.2096 3.31181 11.8978 2 10.2796 2C8.66141 2 7.34961 3.31181 7.34961 4.93C7.34961 6.54819 8.66141 7.86 10.2796 7.86Z"
        fill="currentColor"
      />
      <Path
        d="M16.94 9.0299C18.2876 9.0299 19.38 7.93748 19.38 6.5899C19.38 5.24233 18.2876 4.1499 16.94 4.1499C15.5924 4.1499 14.5 5.24233 14.5 6.5899C14.5 7.93748 15.5924 9.0299 16.94 9.0299Z"
        fill="currentColor"
      />
      <Path
        d="M20.5496 12.93C21.6266 12.93 22.4996 12.057 22.4996 10.98C22.4996 9.90307 21.6266 9.03003 20.5496 9.03003C19.4727 9.03003 18.5996 9.90307 18.5996 10.98C18.5996 12.057 19.4727 12.93 20.5496 12.93Z"
        fill="currentColor"
      />
      <Path
        d="M3.94 10.9801C5.28757 10.9801 6.38 9.88767 6.38 8.5401C6.38 7.19252 5.28757 6.1001 3.94 6.1001C2.59243 6.1001 1.5 7.19252 1.5 8.5401C1.5 9.88767 2.59243 10.9801 3.94 10.9801Z"
        fill="currentColor"
      />
    </Svg>
  );
};

const PetLinear = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M4.41003 16.75C4.17003 19.64 6.35003 22 9.25003 22H14.04C17.3 22 19.54 19.37 19 16.15C18.43 12.77 15.17 10 11.74 10C8.02003 10 4.72003 13.04 4.41003 16.75Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M10.47 7.5C11.8507 7.5 12.97 6.38071 12.97 5C12.97 3.61929 11.8507 2.5 10.47 2.5C9.08926 2.5 7.96997 3.61929 7.96997 5C7.96997 6.38071 9.08926 7.5 10.47 7.5Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M17.3 8.69995C18.4046 8.69995 19.3 7.80452 19.3 6.69995C19.3 5.59538 18.4046 4.69995 17.3 4.69995C16.1955 4.69995 15.3 5.59538 15.3 6.69995C15.3 7.80452 16.1955 8.69995 17.3 8.69995Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M21 12.7C21.8284 12.7 22.5 12.0284 22.5 11.2C22.5 10.3715 21.8284 9.69995 21 9.69995C20.1716 9.69995 19.5 10.3715 19.5 11.2C19.5 12.0284 20.1716 12.7 21 12.7Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M3.96997 10.7C5.07454 10.7 5.96997 9.80452 5.96997 8.69995C5.96997 7.59538 5.07454 6.69995 3.96997 6.69995C2.8654 6.69995 1.96997 7.59538 1.96997 8.69995C1.96997 9.80452 2.8654 10.7 3.96997 10.7Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

const PetOutline = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M14.0392 22.75H9.24923C7.62923 22.75 6.15923 22.12 5.09923 20.96C4.03923 19.81 3.52923 18.29 3.66923 16.68C4.00923 12.58 7.62923 9.25 11.7492 9.25C15.5392 9.25 19.1192 12.29 19.7492 16.02C20.0492 17.8 19.6092 19.48 18.5292 20.76C17.4292 22.04 15.8392 22.75 14.0392 22.75ZM11.7392 10.75C8.38923 10.75 5.43923 13.47 5.15923 16.81C5.05923 18 5.42923 19.11 6.19923 19.95C6.96923 20.79 8.04923 21.25 9.23923 21.25H14.0292C15.3792 21.25 16.5692 20.73 17.3592 19.8C18.1492 18.87 18.4692 17.61 18.2492 16.27C17.7492 13.23 14.8292 10.75 11.7392 10.75Z"
        fill="currentColor"
      />
      <Path
        d="M10.4707 8.25C8.6807 8.25 7.2207 6.79 7.2207 5C7.2207 3.21 8.6807 1.75 10.4707 1.75C12.2607 1.75 13.7207 3.21 13.7207 5C13.7207 6.79 12.2707 8.25 10.4707 8.25ZM10.4707 3.25C9.5107 3.25 8.7207 4.04 8.7207 5C8.7207 5.96 9.5107 6.75 10.4707 6.75C11.4307 6.75 12.2207 5.96 12.2207 5C12.2207 4.04 11.4407 3.25 10.4707 3.25Z"
        fill="currentColor"
      />
      <Path
        d="M17.3008 9.44995C15.7808 9.44995 14.5508 8.21995 14.5508 6.69995C14.5508 5.17995 15.7808 3.94995 17.3008 3.94995C18.8208 3.94995 20.0508 5.17995 20.0508 6.69995C20.0508 8.21995 18.8208 9.44995 17.3008 9.44995ZM17.3008 5.44995C16.6108 5.44995 16.0508 6.00995 16.0508 6.69995C16.0508 7.38995 16.6108 7.94995 17.3008 7.94995C17.9908 7.94995 18.5508 7.38995 18.5508 6.69995C18.5508 6.00995 17.9908 5.44995 17.3008 5.44995Z"
        fill="currentColor"
      />
      <Path
        d="M21 13.45C19.76 13.45 18.75 12.44 18.75 11.2C18.75 9.95995 19.76 8.94995 21 8.94995C22.24 8.94995 23.25 9.95995 23.25 11.2C23.25 12.44 22.24 13.45 21 13.45ZM21 10.45C20.59 10.45 20.25 10.79 20.25 11.2C20.25 11.61 20.59 11.95 21 11.95C21.41 11.95 21.75 11.61 21.75 11.2C21.75 10.79 21.41 10.45 21 10.45Z"
        fill="currentColor"
      />
      <Path
        d="M3.9707 11.45C2.4507 11.45 1.2207 10.22 1.2207 8.69995C1.2207 7.17995 2.4507 5.94995 3.9707 5.94995C5.4907 5.94995 6.7207 7.17995 6.7207 8.69995C6.7207 10.22 5.4907 11.45 3.9707 11.45ZM3.9707 7.44995C3.2807 7.44995 2.7207 8.00995 2.7207 8.69995C2.7207 9.38995 3.2807 9.94995 3.9707 9.94995C4.6607 9.94995 5.2207 9.38995 5.2207 8.69995C5.2207 8.00995 4.6607 7.44995 3.9707 7.44995Z"
        fill="currentColor"
      />
    </Svg>
  );
};

const PetTwotone = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M4.41064 16.75C4.17064 19.64 6.35064 22 9.25064 22H14.0406C17.3006 22 19.5406 19.37 19.0006 16.15C18.4306 12.77 15.1706 10 11.7406 10C8.02064 10 4.72064 13.04 4.41064 16.75Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        opacity="0.34"
        d="M10.4707 7.5C11.8514 7.5 12.9707 6.38071 12.9707 5C12.9707 3.61929 11.8514 2.5 10.4707 2.5C9.08999 2.5 7.9707 3.61929 7.9707 5C7.9707 6.38071 9.08999 7.5 10.4707 7.5Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        opacity="0.34"
        d="M17.3008 8.7002C18.4053 8.7002 19.3008 7.80476 19.3008 6.7002C19.3008 5.59563 18.4053 4.7002 17.3008 4.7002C16.1962 4.7002 15.3008 5.59563 15.3008 6.7002C15.3008 7.80476 16.1962 8.7002 17.3008 8.7002Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        opacity="0.34"
        d="M21 12.7002C21.8284 12.7002 22.5 12.0286 22.5 11.2002C22.5 10.3718 21.8284 9.7002 21 9.7002C20.1716 9.7002 19.5 10.3718 19.5 11.2002C19.5 12.0286 20.1716 12.7002 21 12.7002Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        opacity="0.34"
        d="M3.9707 10.7002C5.07527 10.7002 5.9707 9.80476 5.9707 8.7002C5.9707 7.59563 5.07527 6.7002 3.9707 6.7002C2.86613 6.7002 1.9707 7.59563 1.9707 8.7002C1.9707 9.80476 2.86613 10.7002 3.9707 10.7002Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

const variants: IconVariants = {
  bold: PetBold,
  broken: PetBroken,
  bulk: PetBulk,
  linear: PetLinear,
  outline: PetOutline,
  twotone: PetTwotone,
};

export const PetIcon = ({
  variant = defaultOptions.variant,
  className,
  ...props
}: IconProps) => {
  const textClasses = useContext(TextClassContext);
  const Component = variants[variant];
  return <Component className={cn(textClasses, className)} {...props} />;
};

export default PetIcon;
