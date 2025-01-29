import { useContext } from "react";
import { cn } from "unative/lib/utils";
import { Path, Svg } from "unative/ui/svg";
import { TextClassContext } from "unative/ui/text";

import type { IconProps, IconVariants } from "../icon-options";
import { defaultOptions } from "../icon-options";

const SpeedometerBold = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M19.14 20.25C18.95 20.25 18.76 20.18 18.61 20.04C18.31 19.75 18.31 19.28 18.6 18.98C20.31 17.24 21.25 14.94 21.25 12.5C21.25 7.4 17.1 3.25 12 3.25C6.9 3.25 2.75 7.4 2.75 12.5C2.75 14.93 3.68 17.22 5.38 18.96C5.67 19.26 5.66 19.73 5.37 20.02C5.07 20.31 4.6 20.3 4.31 20.01C2.34 17.99 1.25 15.32 1.25 12.5C1.25 6.57 6.07 1.75 12 1.75C17.93 1.75 22.75 6.57 22.75 12.5C22.75 15.33 21.66 18.01 19.67 20.03C19.53 20.18 19.33 20.25 19.14 20.25Z"
        fill="currentColor"
      />
      <Path
        d="M11.9991 21.9983C14.142 21.9983 15.8791 20.2611 15.8791 18.1183C15.8791 15.9754 14.142 14.2383 11.9991 14.2383C9.85628 14.2383 8.11914 15.9754 8.11914 18.1183C8.11914 20.2611 9.85628 21.9983 11.9991 21.9983Z"
        fill="currentColor"
      />
      <Path
        d="M16 8.5C14.9 8.5 14 9.4 14 10.5V11.25C14 11.94 14.56 12.5 15.25 12.5H16C17.1 12.5 18 11.6 18 10.5C18 9.4 17.1 8.5 16 8.5Z"
        fill="currentColor"
      />
    </Svg>
  );
};

const SpeedometerBroken = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M4.84 19.4801C3.08 17.6801 2 15.2101 2 12.4901C2 8.8001 4 5.5801 6.97 3.8401C7.28 3.6601 7.6 3.4901 7.94 3.3501"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M19.14 19.5C20.91 17.7 22 15.22 22 12.5C22 6.98 17.52 2.5 12 2.5"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M8.61914 18.12C8.61914 19.98 10.1291 21.5 11.9991 21.5C13.8691 21.5 15.3792 19.99 15.3792 18.12C15.3792 16.25 13.8691 14.74 11.9991 14.74C11.0691 14.74 10.2191 15.12 9.60915 15.73C8.99915 16.35 8.61914 17.19 8.61914 18.12Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M15.25 12H16C16.82 12 17.5 11.33 17.5 10.5C17.5 9.68 16.82 9 16 9C15.18 9 14.5 9.67 14.5 10.5V11.25C14.5 11.66 14.84 12 15.25 12Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

const SpeedometerBulk = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M19.0992 20.2999C18.8992 20.2999 18.6992 20.2 18.5992 20.1C18.2992 19.8 18.2992 19.2999 18.5992 19C20.2992 17.3 21.1992 15 21.1992 12.5C21.1992 7.39995 17.0992 3.29995 11.9992 3.29995C6.89922 3.29995 2.79922 7.39995 2.79922 12.5C2.79922 14.9 3.69922 17.2 5.39922 19C5.69922 19.2999 5.69922 19.8 5.39922 20.1C5.09922 20.4 4.59922 20.4 4.29922 20.1C2.29922 18.1 1.19922 15.4 1.19922 12.6C1.19922 6.59995 6.09922 1.69995 11.9992 1.69995C17.8992 1.69995 22.7992 6.49995 22.7992 12.5C22.7992 15.3 21.6992 18 19.6992 20C19.4992 20.2 19.2992 20.2999 19.0992 20.2999Z"
        fill="currentColor"
      />
      <Path
        d="M11.9996 22C14.1535 22 15.8996 20.2539 15.8996 18.1C15.8996 15.946 14.1535 14.2 11.9996 14.2C9.8457 14.2 8.09961 15.946 8.09961 18.1C8.09961 20.2539 9.8457 22 11.9996 22Z"
        fill="currentColor"
      />
      <Path
        d="M16 8.5C14.9 8.5 14 9.4 14 10.5V11.3C14 12 14.6 12.5 15.2 12.5H16C17.1 12.5 18 11.6 18 10.5C18 9.4 17.1 8.5 16 8.5Z"
        fill="currentColor"
      />
    </Svg>
  );
};

const SpeedometerLinear = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M19.14 19.5C20.91 17.7 22 15.22 22 12.5C22 6.98 17.52 2.5 12 2.5C6.48 2.5 2 6.98 2 12.5C2 15.22 3.08 17.68 4.84 19.49"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M12 21.5C13.8667 21.5 15.38 19.9867 15.38 18.12C15.38 16.2533 13.8667 14.74 12 14.74C10.1333 14.74 8.62 16.2533 8.62 18.12C8.62 19.9867 10.1333 21.5 12 21.5Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M15.25 12H16C16.82 12 17.5 11.33 17.5 10.5C17.5 9.68 16.82 9 16 9C15.18 9 14.5 9.67 14.5 10.5V11.25C14.5 11.66 14.84 12 15.25 12Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

const SpeedometerOutline = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M19.14 20.25C18.95 20.25 18.76 20.18 18.61 20.04C18.31 19.75 18.31 19.28 18.6 18.98C20.31 17.24 21.25 14.94 21.25 12.5C21.25 7.4 17.1 3.25 12 3.25C6.9 3.25 2.75 7.4 2.75 12.5C2.75 14.93 3.68 17.22 5.38 18.96C5.67 19.26 5.66 19.73 5.37 20.02C5.07 20.31 4.6 20.3 4.31 20.01C2.34 17.99 1.25 15.32 1.25 12.5C1.25 6.57 6.07 1.75 12 1.75C17.93 1.75 22.75 6.57 22.75 12.5C22.75 15.33 21.66 18.01 19.67 20.03C19.53 20.18 19.33 20.25 19.14 20.25Z"
        fill="currentColor"
      />
      <Path
        d="M11.9989 22.25C9.7289 22.25 7.87891 20.4 7.87891 18.13C7.87891 15.86 9.7289 14 11.9989 14C14.2689 14 16.1189 15.85 16.1189 18.12C16.1189 20.39 14.2689 22.25 11.9989 22.25ZM11.9989 15.5C10.5489 15.5 9.37891 16.68 9.37891 18.12C9.37891 19.56 10.5589 20.74 11.9989 20.74C13.4389 20.74 14.6189 19.56 14.6189 18.12C14.6189 16.68 13.4489 15.5 11.9989 15.5Z"
        fill="currentColor"
      />
      <Path
        d="M16 12.75H15.25C14.42 12.75 13.75 12.08 13.75 11.25V10.5C13.75 9.26 14.76 8.25 16 8.25C17.24 8.25 18.25 9.26 18.25 10.5C18.25 11.74 17.24 12.75 16 12.75ZM16 9.75C15.59 9.75 15.25 10.09 15.25 10.5V11.25H16C16.41 11.25 16.75 10.91 16.75 10.5C16.75 10.09 16.41 9.75 16 9.75Z"
        fill="currentColor"
      />
    </Svg>
  );
};

const SpeedometerTwotone = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M19.14 19.5C20.91 17.7 22 15.22 22 12.5C22 6.98 17.52 2.5 12 2.5C6.48 2.5 2 6.98 2 12.5C2 15.22 3.08 17.68 4.84 19.49"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M11.9991 21.5002C13.8659 21.5002 15.3792 19.987 15.3792 18.1202C15.3792 16.2535 13.8659 14.7402 11.9991 14.7402C10.1324 14.7402 8.61914 16.2535 8.61914 18.1202C8.61914 19.987 10.1324 21.5002 11.9991 21.5002Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M15.25 12H16C16.82 12 17.5 11.33 17.5 10.5C17.5 9.68 16.82 9 16 9C15.18 9 14.5 9.67 14.5 10.5V11.25C14.5 11.66 14.84 12 15.25 12Z"
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
  bold: SpeedometerBold,
  broken: SpeedometerBroken,
  bulk: SpeedometerBulk,
  linear: SpeedometerLinear,
  outline: SpeedometerOutline,
  twotone: SpeedometerTwotone,
};

export const SpeedometerIcon = ({
  variant = defaultOptions.variant,
  className,
  ...props
}: IconProps) => {
  const textClasses = useContext(TextClassContext);
  const Component = variants[variant];
  return <Component className={cn(textClasses, className)} {...props} />;
};

export default SpeedometerIcon;
