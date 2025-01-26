import { useContext } from "react";
import { G, Path, Svg } from "unative/lib/svg";
import { cn } from "unative/lib/utils";
import { TextClassContext } from "unative/ui/text";

import type { IconProps, IconVariants } from "../types/icons-type";

const LocationCrossBold = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M20.6188 8.7C19.5788 4.07 15.5388 2 11.9988 2C11.9988 2 11.9988 2 11.9888 2C8.45877 2 4.42877 4.07 3.37877 8.69C2.19877 13.85 5.35877 18.22 8.21877 20.98C9.27877 22 10.6388 22.51 11.9988 22.51C13.3588 22.51 14.7188 22 15.7688 20.98C18.6288 18.22 21.7888 13.86 20.6188 8.7ZM14.5288 13.49C14.3788 13.64 14.1888 13.71 13.9988 13.71C13.8088 13.71 13.6188 13.64 13.4688 13.49L12.0188 12.04L10.5288 13.53C10.3788 13.68 10.1888 13.75 9.99877 13.75C9.80877 13.75 9.61877 13.68 9.46877 13.53C9.17877 13.24 9.17877 12.76 9.46877 12.47L10.9588 10.98L9.50877 9.53C9.21877 9.24 9.21877 8.76 9.50877 8.47C9.79877 8.18 10.2788 8.18 10.5688 8.47L12.0188 9.92L13.4188 8.52C13.7088 8.23 14.1888 8.23 14.4788 8.52C14.7688 8.81 14.7688 9.29 14.4788 9.58L13.0788 10.98L14.5288 12.43C14.8188 12.72 14.8188 13.19 14.5288 13.49Z"
        fill="currentColor"
      />
    </Svg>
  );
};

const LocationCrossBroken = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M13.9991 12.96L10.0391 9"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M13.96 9.04004L10 13"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeMiterlimit="10"
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

const LocationCrossBulk = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M14.5295 12.4202L13.0795 10.9702L14.4795 9.57018C14.7695 9.28018 14.7695 8.80018 14.4795 8.51018C14.1895 8.22018 13.7095 8.22018 13.4195 8.51018L12.0195 9.91018L10.5695 8.46018C10.2795 8.17018 9.79945 8.17018 9.50945 8.46018C9.21945 8.75018 9.21945 9.23018 9.50945 9.52018L10.9595 10.9702L9.46945 12.4602C9.17945 12.7502 9.17945 13.2302 9.46945 13.5202C9.61945 13.6702 9.80945 13.7402 9.99945 13.7402C10.1895 13.7402 10.3795 13.6702 10.5295 13.5202L12.0195 12.0302L13.4695 13.4802C13.6195 13.6302 13.8095 13.7002 13.9995 13.7002C14.1895 13.7002 14.3795 13.6302 14.5295 13.4802C14.8195 13.1902 14.8195 12.7202 14.5295 12.4202Z"
        fill="currentColor"
      />
      <Path
        opacity="0.4"
        d="M20.6207 8.7C19.5807 4.07 15.5407 2 12.0007 2C12.0007 2 12.0007 2 11.9907 2C8.46073 2 4.43073 4.07 3.38073 8.69C2.20073 13.85 5.36073 18.22 8.22073 20.98C9.28073 22 10.6407 22.51 12.0007 22.51C13.3607 22.51 14.7207 22 15.7707 20.98C18.6307 18.22 21.7907 13.86 20.6207 8.7Z"
        fill="currentColor"
      />
    </Svg>
  );
};

const LocationCrossLinear = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M14 12.96L10.04 9"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M13.96 9.04004L10 13"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

const LocationCrossOutline = ({
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
        d="M11.9997 22.76C10.5197 22.76 9.02969 22.2 7.86969 21.09C4.91969 18.25 1.65969 13.72 2.88969 8.33C3.99969 3.44 8.26969 1.25 11.9997 1.25C11.9997 1.25 11.9997 1.25 12.0097 1.25C15.7397 1.25 20.0097 3.44 21.1197 8.34C22.3397 13.73 19.0797 18.25 16.1297 21.09C14.9697 22.2 13.4797 22.76 11.9997 22.76ZM11.9997 2.75C9.08969 2.75 5.34969 4.3 4.35969 8.66C3.27969 13.37 6.23969 17.43 8.91969 20C10.6497 21.67 13.3597 21.67 15.0897 20C17.7597 17.43 20.7197 13.37 19.6597 8.66C18.6597 4.3 14.9097 2.75 11.9997 2.75Z"
        fill="currentColor"
      />
      <Path
        d="M14.0005 13.7099C13.8105 13.7099 13.6205 13.6399 13.4705 13.4899L9.51047 9.52994C9.22047 9.23994 9.22047 8.75994 9.51047 8.46994C9.80047 8.17994 10.2805 8.17994 10.5705 8.46994L14.5305 12.4299C14.8205 12.7199 14.8205 13.1999 14.5305 13.4899C14.3805 13.6299 14.1905 13.7099 14.0005 13.7099Z"
        fill="currentColor"
      />
      <Path
        d="M9.99945 13.75C9.80945 13.75 9.61945 13.68 9.46945 13.53C9.17945 13.24 9.17945 12.76 9.46945 12.47L13.4295 8.50998C13.7195 8.21998 14.1995 8.21998 14.4895 8.50998C14.7795 8.79998 14.7795 9.27998 14.4895 9.56998L10.5295 13.53C10.3795 13.68 10.1895 13.75 9.99945 13.75Z"
        fill="currentColor"
      />
    </Svg>
  );
};

const LocationCrossTwotone = ({
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
        d="M3.61971 8.49C5.58971 -0.169998 18.4197 -0.159997 20.3797 8.5C21.5297 13.58 18.3697 17.88 15.5997 20.54C13.5897 22.48 10.4097 22.48 8.38971 20.54C5.62971 17.88 2.46971 13.57 3.61971 8.49Z"
        stroke="currentColor"
        strokeWidth="1.5"
      />
      <G opacity="0.4">
        <Path
          d="M13.9991 12.96L10.0391 9"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeMiterlimit="10"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <Path
          d="M13.96 9.04004L10 13"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeMiterlimit="10"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </G>
    </Svg>
  );
};

const variants: IconVariants = {
  bold: LocationCrossBold,
  broken: LocationCrossBroken,
  bulk: LocationCrossBulk,
  linear: LocationCrossLinear,
  outline: LocationCrossOutline,
  twotone: LocationCrossTwotone,
};

export const LocationCrossIcon = ({
  variant = "linear",
  className,
  ...props
}: IconProps) => {
  const textClasses = useContext(TextClassContext);
  const Component = variants[variant];
  return <Component className={cn(textClasses, className)} {...props} />;
};
