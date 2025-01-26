import { Path, Svg } from "unative/lib/svg";
import { cn } from "unative/lib/utils";

import type { IconProps, IconVariants } from "../types/icons-type";

const DocumentLikeBold = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M16 2H8C4.5 2 3 4 3 7V17C3 20 4.5 22 8 22H16C19.5 22 21 20 21 17V7C21 4 19.5 2 16 2ZM13.07 15.49C12.56 17.12 10.77 17.97 10.27 17.97C9.78 17.96 8.01 17.13 7.48 15.49C7.15 14.46 7.54 13.19 8.61 12.84C9.18 12.66 9.88 12.81 10.27 13.36C10.64 12.79 11.37 12.66 11.93 12.84C13.01 13.19 13.39 14.46 13.07 15.49ZM18.5 9.25H16.5C14.98 9.25 13.75 8.02 13.75 6.5V4.5C13.75 4.09 14.09 3.75 14.5 3.75C14.91 3.75 15.25 4.09 15.25 4.5V6.5C15.25 7.19 15.81 7.75 16.5 7.75H18.5C18.91 7.75 19.25 8.09 19.25 8.5C19.25 8.91 18.91 9.25 18.5 9.25Z"
        fill="currentColor"
      />
    </Svg>
  );
};

const DocumentLikeBroken = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M3 7C3 4 4.5 2 8 2H16C19.5 2 21 4 21 7V17C21 20 19.5 22 16 22H8C4.5 22 3 20 3 17V11.02"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M14.5 4.5V6.5C14.5 7.6 15.4 8.5 16.5 8.5H18.5"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M7.47916 15.4901C7.14916 14.4601 7.53914 13.1901 8.60914 12.8401C9.17914 12.6601 9.87914 12.8101 10.2691 13.3601C10.6391 12.7901 11.3691 12.6601 11.9291 12.8401C13.0091 13.1901 13.3892 14.4601 13.0692 15.4901C12.5592 17.1201 10.7691 17.9701 10.2691 17.9701C9.77914 17.9601 8.00916 17.1301 7.47916 15.4901Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

const DocumentLikeBulk = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M21 7V17C21 20 19.5 22 16 22H8C4.5 22 3 20 3 17V7C3 4 4.5 2 8 2H16C19.5 2 21 4 21 7Z"
        fill="currentColor"
      />
      <Path
        d="M18.5 9.25H16.5C14.98 9.25 13.75 8.02 13.75 6.5V4.5C13.75 4.09 14.09 3.75 14.5 3.75C14.91 3.75 15.25 4.09 15.25 4.5V6.5C15.25 7.19 15.81 7.75 16.5 7.75H18.5C18.91 7.75 19.25 8.09 19.25 8.5C19.25 8.91 18.91 9.25 18.5 9.25Z"
        fill="currentColor"
      />
      <Path
        d="M7.47916 15.4901C7.14916 14.4601 7.53914 13.1901 8.60914 12.8401C9.17914 12.6601 9.87914 12.8101 10.2691 13.3601C10.6391 12.7901 11.3691 12.6601 11.9291 12.8401C13.0091 13.1901 13.3892 14.4601 13.0692 15.4901C12.5592 17.1201 10.7691 17.9701 10.2691 17.9701C9.77914 17.9601 8.00916 17.1301 7.47916 15.4901Z"
        fill="currentColor"
      />
    </Svg>
  );
};

const DocumentLikeLinear = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M21 7V17C21 20 19.5 22 16 22H8C4.5 22 3 20 3 17V7C3 4 4.5 2 8 2H16C19.5 2 21 4 21 7Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M14.5 4.5V6.5C14.5 7.6 15.4 8.5 16.5 8.5H18.5"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M7.48002 15.4901C7.15002 14.4601 7.53999 13.1901 8.60999 12.8401C9.17999 12.6601 9.87999 12.8101 10.27 13.3601C10.64 12.7901 11.37 12.6601 11.93 12.8401C13.01 13.1901 13.39 14.4601 13.07 15.4901C12.56 17.1201 10.77 17.9701 10.27 17.9701C9.77999 17.9601 8.01002 17.1301 7.48002 15.4901Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

const DocumentLikeOutline = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M16 22.75H8C4.35 22.75 2.25 20.65 2.25 17V7C2.25 3.35 4.35 1.25 8 1.25H16C19.65 1.25 21.75 3.35 21.75 7V17C21.75 20.65 19.65 22.75 16 22.75ZM8 2.75C5.14 2.75 3.75 4.14 3.75 7V17C3.75 19.86 5.14 21.25 8 21.25H16C18.86 21.25 20.25 19.86 20.25 17V7C20.25 4.14 18.86 2.75 16 2.75H8Z"
        fill="currentColor"
      />
      <Path
        d="M18.5 9.25H16.5C14.98 9.25 13.75 8.02 13.75 6.5V4.5C13.75 4.09 14.09 3.75 14.5 3.75C14.91 3.75 15.25 4.09 15.25 4.5V6.5C15.25 7.19 15.81 7.75 16.5 7.75H18.5C18.91 7.75 19.25 8.09 19.25 8.5C19.25 8.91 18.91 9.25 18.5 9.25Z"
        fill="currentColor"
      />
      <Path
        d="M10.2689 18.72C9.38887 18.7 7.37887 17.63 6.76887 15.72C6.33887 14.39 6.83889 12.6301 8.37889 12.1301C9.03889 11.9201 9.71889 12.0101 10.2589 12.3501C10.7989 12.0101 11.4889 11.9201 12.1589 12.1301C13.6989 12.6301 14.1989 14.38 13.7889 15.72C13.1689 17.7 11.0389 18.72 10.2689 18.72ZM8.1989 15.2601C8.6189 16.5501 10.0489 17.19 10.3089 17.22C10.5789 17.19 11.9789 16.5001 12.3589 15.2601C12.5589 14.6001 12.3489 13.7601 11.6989 13.5501C11.4389 13.4701 11.0689 13.5101 10.8989 13.7701C10.7689 13.9801 10.5289 14.1101 10.2889 14.1101C9.99889 14.1101 9.80889 14.0001 9.65889 13.7901C9.45889 13.5101 9.09888 13.4701 8.83888 13.5501C8.19888 13.7601 7.9889 14.6101 8.1989 15.2601Z"
        fill="currentColor"
      />
    </Svg>
  );
};

const DocumentLikeTwotone = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M21 7V17C21 20 19.5 22 16 22H8C4.5 22 3 20 3 17V7C3 4 4.5 2 8 2H16C19.5 2 21 4 21 7Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        opacity="0.4"
        d="M14.5 4.5V6.5C14.5 7.6 15.4 8.5 16.5 8.5H18.5"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        opacity="0.4"
        d="M7.47916 15.4901C7.14916 14.4601 7.53914 13.1901 8.60914 12.8401C9.17914 12.6601 9.87914 12.8101 10.2691 13.3601C10.6391 12.7901 11.3691 12.6601 11.9291 12.8401C13.0091 13.1901 13.3892 14.4601 13.0692 15.4901C12.5592 17.1201 10.7691 17.9701 10.2691 17.9701C9.77914 17.9601 8.00916 17.1301 7.47916 15.4901Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

const variants: IconVariants = {
  bold: DocumentLikeBold,
  broken: DocumentLikeBroken,
  bulk: DocumentLikeBulk,
  linear: DocumentLikeLinear,
  outline: DocumentLikeOutline,
  twotone: DocumentLikeTwotone,
};

export const DocumentLikeIcon = ({
  variant = "linear",
  ...props
}: IconProps) => {
  const Component = variants[variant];
  return <Component {...props} />;
};
