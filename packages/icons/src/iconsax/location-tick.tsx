import { useContext } from "react";
import { cn } from "unative/lib/utils";
import { Path, Svg } from "unative/ui/svg";
import { TextClassContext } from "unative/ui/text";

import type { IconProps, IconVariants } from "../icon-options";
import { defaultOptions } from "../icon-options";

const LocationTickBold = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M20.6188 8.7C19.5788 4.07 15.5388 2 11.9988 2C11.9988 2 11.9988 2 11.9888 2C8.45877 2 4.42877 4.07 3.37877 8.69C2.19877 13.85 5.35877 18.22 8.21877 20.98C9.27877 22 10.6388 22.51 11.9988 22.51C13.3588 22.51 14.7188 22 15.7688 20.98C18.6288 18.22 21.7888 13.86 20.6188 8.7ZM15.2788 9.53L11.2788 13.53C11.1288 13.68 10.9388 13.75 10.7488 13.75C10.5588 13.75 10.3688 13.68 10.2188 13.53L8.71877 12.03C8.42877 11.74 8.42877 11.26 8.71877 10.97C9.00877 10.68 9.48877 10.68 9.77877 10.97L10.7488 11.94L14.2188 8.47C14.5088 8.18 14.9888 8.18 15.2788 8.47C15.5688 8.76 15.5688 9.24 15.2788 9.53Z"
        fill="currentColor"
      />
    </Svg>
  );
};

const LocationTickBroken = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M9.25 11.5L10.75 13L14.75 9"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M5.98094 4.30006C10.3509 0.190061 18.8209 1.60006 20.3809 8.51006C21.5309 13.5901 18.3709 17.8901 15.6009 20.5501C13.5909 22.4901 10.4109 22.4901 8.39094 20.5501C5.63094 17.8801 2.46094 13.5801 3.62094 8.50006"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

const LocationTickBulk = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M20.6207 8.7C19.5807 4.07 15.5407 2 12.0007 2C12.0007 2 12.0007 2 11.9907 2C8.46073 2 4.43073 4.07 3.38073 8.69C2.20073 13.85 5.36073 18.22 8.22073 20.98C9.28073 22 10.6407 22.51 12.0007 22.51C13.3607 22.51 14.7207 22 15.7707 20.98C18.6307 18.22 21.7907 13.86 20.6207 8.7Z"
        fill="currentColor"
      />
      <Path
        d="M10.7495 13.7499C10.5595 13.7499 10.3695 13.6799 10.2195 13.5299L8.71945 12.0299C8.42945 11.7399 8.42945 11.2599 8.71945 10.9699C9.00945 10.6799 9.48945 10.6799 9.77945 10.9699L10.7495 11.9399L14.2195 8.46994C14.5095 8.17994 14.9895 8.17994 15.2795 8.46994C15.5695 8.75994 15.5695 9.23994 15.2795 9.52994L11.2795 13.5299C11.1295 13.6799 10.9395 13.7499 10.7495 13.7499Z"
        fill="currentColor"
      />
    </Svg>
  );
};

const LocationTickLinear = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M3.61995 8.49C5.58995 -0.169998 18.42 -0.159997 20.38 8.5C21.53 13.58 18.37 17.88 15.6 20.54C13.59 22.48 10.41 22.48 8.38995 20.54C5.62995 17.88 2.46995 13.57 3.61995 8.49Z"
        stroke="currentColor"
        strokeWidth="1.5"
      />
      <Path
        d="M9.25 11.5L10.75 13L14.75 9"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

const LocationTickOutline = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M11.9997 22.76C10.5197 22.76 9.02969 22.2 7.86969 21.09C4.91969 18.25 1.65969 13.72 2.88969 8.33C3.99969 3.44 8.26969 1.25 11.9997 1.25C11.9997 1.25 11.9997 1.25 12.0097 1.25C15.7397 1.25 20.0097 3.44 21.1197 8.34C22.3397 13.73 19.0797 18.25 16.1297 21.09C14.9697 22.2 13.4797 22.76 11.9997 22.76ZM11.9997 2.75C9.08969 2.75 5.34969 4.3 4.35969 8.66C3.27969 13.37 6.23969 17.43 8.91969 20C10.6497 21.67 13.3597 21.67 15.0897 20C17.7597 17.43 20.7197 13.37 19.6597 8.66C18.6597 4.3 14.9097 2.75 11.9997 2.75Z"
        fill="currentColor"
      />
      <Path
        d="M10.7495 13.7499C10.5595 13.7499 10.3695 13.6799 10.2195 13.5299L8.71945 12.0299C8.42945 11.7399 8.42945 11.2599 8.71945 10.9699C9.00945 10.6799 9.48945 10.6799 9.77945 10.9699L10.7495 11.9399L14.2195 8.46994C14.5095 8.17994 14.9895 8.17994 15.2795 8.46994C15.5695 8.75994 15.5695 9.23994 15.2795 9.52994L11.2795 13.5299C11.1295 13.6799 10.9395 13.7499 10.7495 13.7499Z"
        fill="currentColor"
      />
    </Svg>
  );
};

const LocationTickTwotone = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M3.61971 8.49C5.58971 -0.169998 18.4197 -0.159997 20.3797 8.5C21.5297 13.58 18.3697 17.88 15.5997 20.54C13.5897 22.48 10.4097 22.48 8.38971 20.54C5.62971 17.88 2.46971 13.57 3.61971 8.49Z"
        stroke="currentColor"
        strokeWidth="1.5"
      />
      <Path
        opacity="0.4"
        d="M9.25 11.5L10.75 13L14.75 9"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

const variants: IconVariants = {
  bold: LocationTickBold,
  broken: LocationTickBroken,
  bulk: LocationTickBulk,
  linear: LocationTickLinear,
  outline: LocationTickOutline,
  twotone: LocationTickTwotone,
};

export const LocationTickIcon = ({
  variant = defaultOptions.variant,
  className,
  ...props
}: IconProps) => {
  const textClasses = useContext(TextClassContext);
  const Component = variants[variant];
  return <Component className={cn(textClasses, className)} {...props} />;
};

export default LocationTickIcon;
