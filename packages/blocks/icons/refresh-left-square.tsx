import { G, Path, Svg } from "unative/lib/svg";
import { cn } from "unative/lib/utils";

import type { IconProps, IconVariants } from "../types/icons-type";

const RefreshLeftSquareBold = ({
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
        d="M16.19 2H7.81C4.17 2 2 4.17 2 7.81V16.18C2 19.83 4.17 22 7.81 22H16.18C19.82 22 21.99 19.83 21.99 16.19V7.81C22 4.17 19.83 2 16.19 2ZM12 18.01C8.83 18.01 6.25 15.43 6.25 12.26C6.25 11.12 6.58 10.01 7.22 9.07C7.45 8.72 7.92 8.63 8.26 8.86C8.6 9.09 8.7 9.56 8.46 9.9C8 10.6 7.75 11.42 7.75 12.26C7.75 14.6 9.66 16.51 12 16.51C14.34 16.51 16.25 14.6 16.25 12.26C16.25 9.92 14.34 8.01 12 8.01C11.81 8.01 11.63 8.03 11.44 8.05L12 8.46C12.33 8.7 12.41 9.17 12.16 9.51C12.01 9.71 11.78 9.82 11.55 9.82C11.4 9.82 11.24 9.77 11.11 9.68L9.17 8.25C9.17 8.25 9.16 8.24 9.15 8.23C9.14 8.22 9.13 8.22 9.12 8.21C9.09 8.19 9.08 8.15 9.05 8.12C9.02 8.08 8.99 8.05 8.96 8C8.94 7.96 8.93 7.91 8.91 7.87C8.9 7.82 8.88 7.78 8.88 7.73C8.88 7.68 8.88 7.64 8.89 7.59C8.89 7.54 8.89 7.5 8.91 7.45C8.91 7.4 8.94 7.36 8.96 7.31C8.98 7.28 8.98 7.24 9.01 7.2C9.02 7.2 9.03 7.19 9.04 7.18C9.05 7.17 9.05 7.16 9.06 7.15L10.73 5.24C11 4.93 11.48 4.89 11.79 5.17C12.1 5.44 12.13 5.92 11.86 6.23L11.58 6.55C11.72 6.54 11.86 6.52 12.01 6.52C15.18 6.52 17.76 9.1 17.76 12.27C17.76 15.44 15.17 18.01 12 18.01Z"
        fill="currentColor"
      />
    </Svg>
  );
};

const RefreshLeftSquareBroken = ({
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
        d="M10.33 7.51001C10.83 7.36001 11.38 7.26001 12 7.26001C14.76 7.26001 17 9.50001 17 12.26C17 15.02 14.76 17.26 12 17.26C9.24 17.26 7 15.02 7 12.26C7 11.23 7.31 10.28 7.84 9.48001"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M9.61914 7.64999L11.2791 5.73999"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M9.61914 7.6499L11.5591 9.0699"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M2 14V15C2 20 4 22 9 22H15C20 22 22 20 22 15V9C22 4 20 2 15 2H9C4 2 2 4 2 9"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

const RefreshLeftSquareBulk = ({
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
        opacity="0.4"
        d="M16.19 2H7.82001C4.17001 2 2 4.17 2 7.81V16.18C2 19.82 4.17 21.99 7.81 21.99H16.18C19.82 21.99 21.99 19.82 21.99 16.18V7.81C22 4.17 19.83 2 16.19 2Z"
        fill="currentColor"
      />
      <Path
        d="M12.0002 6.50995C11.8602 6.50995 11.7102 6.52994 11.5702 6.53994L11.8502 6.21994C12.1202 5.90994 12.0902 5.42994 11.7802 5.15994C11.4702 4.88994 10.9902 4.91994 10.7202 5.22994L9.05023 7.13994C9.04023 7.14994 9.04023 7.15995 9.03023 7.16995C9.02023 7.17994 9.01022 7.17994 9.01022 7.18994C8.99022 7.21994 8.98024 7.25995 8.96024 7.29995C8.94024 7.34995 8.91022 7.38995 8.90022 7.43994C8.89022 7.48994 8.89023 7.52994 8.88023 7.57994C8.88023 7.62994 8.87022 7.66994 8.87022 7.71994C8.87022 7.76994 8.89023 7.80995 8.91023 7.85995C8.92023 7.90995 8.94024 7.94994 8.96024 7.98994C8.98024 8.02994 9.02023 8.06994 9.05023 8.10994C9.08023 8.13994 9.09022 8.17994 9.12022 8.19994C9.13022 8.20994 9.14022 8.20995 9.15022 8.21995C9.16022 8.22995 9.16023 8.23994 9.17023 8.23994L11.1102 9.65995C11.2402 9.75994 11.4002 9.79995 11.5502 9.79995C11.7802 9.79995 12.0102 9.68994 12.1602 9.48994C12.4002 9.15995 12.3302 8.68994 12.0002 8.43994L11.4402 8.02994C11.6202 8.00994 11.8102 7.98994 12.0002 7.98994C14.3402 7.98994 16.2502 9.89995 16.2502 12.2399C16.2502 14.5799 14.3402 16.4899 12.0002 16.4899C9.66023 16.4899 7.75023 14.5799 7.75023 12.2399C7.75023 11.3899 8.00024 10.5799 8.46024 9.87995C8.69024 9.53995 8.60023 9.06994 8.25023 8.83995C7.91023 8.60995 7.44024 8.69995 7.21024 9.04995C6.58024 9.99995 6.24023 11.0999 6.24023 12.2399C6.24023 15.4099 8.82023 17.9899 11.9902 17.9899C15.1602 17.9899 17.7402 15.4099 17.7402 12.2399C17.7402 9.06994 15.1702 6.50995 12.0002 6.50995Z"
        fill="currentColor"
      />
    </Svg>
  );
};

const RefreshLeftSquareLinear = ({
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
        d="M10.33 7.51001C10.83 7.36001 11.38 7.26001 12 7.26001C14.76 7.26001 17 9.50001 17 12.26C17 15.02 14.76 17.26 12 17.26C9.24 17.26 7 15.02 7 12.26C7 11.23 7.31 10.28 7.84 9.48001"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M9.62 7.64999L11.28 5.73999"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M9.62 7.6499L11.56 9.0699"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M9 22H15C20 22 22 20 22 15V9C22 4 20 2 15 2H9C4 2 2 4 2 9V15C2 20 4 22 9 22Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

const RefreshLeftSquareOutline = ({
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
        d="M12 18.01C8.83 18.01 6.25 15.43 6.25 12.26C6.25 11.12 6.58 10.01 7.22 9.07C7.45 8.73 7.91999 8.63 8.25999 8.86C8.59999 9.09 8.7 9.56 8.47 9.9C8 10.6 7.75999 11.42 7.75999 12.26C7.75999 14.6 9.66999 16.51 12.01 16.51C14.35 16.51 16.26 14.6 16.26 12.26C16.26 9.92 14.35 8.01 12.01 8.01C11.51 8.01 11.03 8.08 10.56 8.22C10.17 8.34 9.75 8.12 9.62 7.72C9.5 7.32 9.72 6.9 10.12 6.78C10.73 6.59 11.36 6.5 12.01 6.5C15.18 6.5 17.76 9.08 17.76 12.25C17.76 15.42 15.17 18.01 12 18.01Z"
        fill="currentColor"
      />
      <Path
        d="M9.61911 8.39987C9.44911 8.39987 9.26912 8.33987 9.12912 8.21987C8.81912 7.94987 8.78911 7.46987 9.05911 7.15987L10.7291 5.24987C10.9991 4.93987 11.4791 4.89987 11.7891 5.17987C12.0991 5.44987 12.1291 5.92986 11.8591 6.23986L10.1891 8.14987C10.0291 8.30987 9.82911 8.39987 9.61911 8.39987Z"
        fill="currentColor"
      />
      <Path
        d="M11.5598 9.82004C11.4098 9.82004 11.2498 9.77004 11.1198 9.68004L9.17976 8.26004C8.84976 8.02004 8.76977 7.55004 9.01977 7.21004C9.25977 6.88004 9.72978 6.80005 10.0698 7.05005L12.0098 8.47004C12.3398 8.71004 12.4198 9.18004 12.1698 9.52004C12.0198 9.71004 11.7898 9.82004 11.5598 9.82004Z"
        fill="currentColor"
      />
      <Path
        d="M15 22.75H9C3.57 22.75 1.25 20.43 1.25 15V9C1.25 3.57 3.57 1.25 9 1.25H15C20.43 1.25 22.75 3.57 22.75 9V15C22.75 20.43 20.43 22.75 15 22.75ZM9 2.75C4.39 2.75 2.75 4.39 2.75 9V15C2.75 19.61 4.39 21.25 9 21.25H15C19.61 21.25 21.25 19.61 21.25 15V9C21.25 4.39 19.61 2.75 15 2.75H9Z"
        fill="currentColor"
      />
    </Svg>
  );
};

const RefreshLeftSquareTwotone = ({
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
      <G opacity="0.4">
        <Path
          d="M10.33 7.51025C10.83 7.36025 11.38 7.26025 12 7.26025C14.76 7.26025 17 9.50025 17 12.2603C17 15.0203 14.76 17.2603 12 17.2603C9.24 17.2603 7 15.0203 7 12.2603C7 11.2303 7.31 10.2803 7.84 9.48026"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <Path
          d="M9.62109 7.65024L11.2811 5.74023"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <Path
          d="M9.62109 7.65039L11.5611 9.07039"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </G>
      <Path
        d="M9 22H15C20 22 22 20 22 15V9C22 4 20 2 15 2H9C4 2 2 4 2 9V15C2 20 4 22 9 22Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

const variants: IconVariants = {
  bold: RefreshLeftSquareBold,
  broken: RefreshLeftSquareBroken,
  bulk: RefreshLeftSquareBulk,
  linear: RefreshLeftSquareLinear,
  outline: RefreshLeftSquareOutline,
  twotone: RefreshLeftSquareTwotone,
};

export const RefreshLeftSquareIcon = ({
  variant = "linear",
  ...props
}: IconProps) => {
  const Component = variants[variant];
  return <Component {...props} />;
};
