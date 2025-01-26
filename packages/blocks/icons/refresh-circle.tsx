import { useContext } from "react";
import { G, Path, Svg } from "unative/lib/svg";
import { cn } from "unative/lib/utils";
import { TextClassContext } from "unative/ui/text";

import { iconDefaultOptions } from "../icons-configuration";
import type { IconProps, IconVariants } from "../types/icons-type";

const RefreshCircleBold = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM6.6 11.23C6.77 10.04 7.3 8.97 8.13 8.13C10.13 6.14 13.28 6.03 15.42 7.77V6.82C15.42 6.41 15.76 6.07 16.17 6.07C16.58 6.07 16.92 6.41 16.92 6.82V9.49C16.92 9.9 16.58 10.24 16.17 10.24H13.5C13.09 10.24 12.75 9.9 12.75 9.49C12.75 9.08 13.09 8.74 13.5 8.74H14.25C12.7 7.66 10.56 7.81 9.18 9.19C8.58 9.79 8.2 10.57 8.07 11.44C8.02 11.81 7.7 12.08 7.33 12.08C7.29 12.08 7.26 12.08 7.22 12.07C6.83 12.02 6.54 11.64 6.6 11.23ZM15.87 15.87C14.8 16.94 13.4 17.47 12 17.47C10.78 17.47 9.57 17.04 8.57 16.23V17.17C8.57 17.58 8.23 17.92 7.82 17.92C7.41 17.92 7.07 17.58 7.07 17.17V14.5C7.07 14.09 7.41 13.75 7.82 13.75H10.49C10.9 13.75 11.24 14.09 11.24 14.5C11.24 14.91 10.9 15.25 10.49 15.25H9.74C11.29 16.33 13.43 16.18 14.81 14.8C15.41 14.2 15.79 13.42 15.92 12.55C15.98 12.14 16.35 11.85 16.77 11.91C17.18 11.97 17.46 12.35 17.41 12.76C17.23 13.97 16.7 15.04 15.87 15.87Z"
        fill="currentColor"
      />
    </Svg>
  );
};

const RefreshCircleBroken = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M8.00977 14.5099C8.18977 14.8099 8.40976 15.09 8.65976 15.34C10.4998 17.18 13.4898 17.18 15.3398 15.34C16.0898 14.59 16.5198 13.6399 16.6598 12.6699"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M7.33984 11.3301C7.47984 10.3501 7.90985 9.41003 8.65985 8.66003C10.4999 6.82003 13.4898 6.82003 15.3398 8.66003C15.5998 8.92003 15.8098 9.20005 15.9898 9.49005"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M7.82031 17.18V14.51H10.4903"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M16.1797 6.82007V9.49005H13.5098"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M4 6C2.75 7.67 2 9.75 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2C10.57 2 9.2 2.29998 7.97 2.84998"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

const RefreshCircleBulk = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
        fill="currentColor"
      />
      <Path
        d="M16.7586 11.9301C16.3386 11.8601 15.9686 12.1601 15.9086 12.5701C15.7886 13.4401 15.3986 14.2201 14.7986 14.8201C13.4186 16.2001 11.2786 16.3401 9.72861 15.2701H10.4786C10.8886 15.2701 11.2286 14.9301 11.2286 14.5201C11.2286 14.1101 10.8886 13.7701 10.4786 13.7701H7.80859C7.39859 13.7701 7.05859 14.1101 7.05859 14.5201V17.1901C7.05859 17.6001 7.39859 17.9401 7.80859 17.9401C8.21859 17.9401 8.55859 17.6001 8.55859 17.1901V16.2501C9.55859 17.0601 10.7686 17.4901 11.9886 17.4901C13.3886 17.4901 14.7886 16.9601 15.8586 15.8901C16.6886 15.0601 17.2186 13.9901 17.3886 12.7901C17.4586 12.3601 17.1686 11.9801 16.7586 11.9301Z"
        fill="currentColor"
      />
      <Path
        d="M7.33944 12.0801C7.70944 12.0801 8.02943 11.8101 8.07943 11.4401C8.19943 10.5701 8.58944 9.79006 9.18944 9.19006C10.5694 7.81006 12.7095 7.67005 14.2595 8.74005H13.5095C13.0995 8.74005 12.7595 9.08005 12.7595 9.49005C12.7595 9.90005 13.0995 10.2401 13.5095 10.2401H16.1794C16.5894 10.2401 16.9294 9.90005 16.9294 9.49005V6.82007C16.9294 6.41007 16.5894 6.07007 16.1794 6.07007C15.7694 6.07007 15.4294 6.41007 15.4294 6.82007V7.76007C13.2794 6.02007 10.1295 6.13006 8.13946 8.12006C7.30946 8.95006 6.77943 10.02 6.60943 11.22C6.54943 11.63 6.83944 12.0101 7.24944 12.0701C7.26944 12.0801 7.30944 12.0801 7.33944 12.0801Z"
        fill="currentColor"
      />
    </Svg>
  );
};

const RefreshCircleLinear = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M8.01001 14.5101C8.19001 14.8101 8.41 15.0901 8.66 15.3401C10.5 17.1801 13.49 17.1801 15.34 15.3401C16.09 14.5901 16.52 13.64 16.66 12.67"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M7.33997 11.3301C7.47997 10.3501 7.90997 9.41003 8.65997 8.66003C10.5 6.82003 13.49 6.82003 15.34 8.66003C15.6 8.92003 15.81 9.20005 15.99 9.49005"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M7.81995 17.18V14.51H10.4899"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M16.18 6.82007V9.49005H13.51"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

const RefreshCircleOutline = ({
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
        d="M12 22.75C6.07 22.75 1.25 17.93 1.25 12C1.25 6.07 6.07 1.25 12 1.25C17.93 1.25 22.75 6.07 22.75 12C22.75 17.93 17.93 22.75 12 22.75ZM12 2.75C6.9 2.75 2.75 6.9 2.75 12C2.75 17.1 6.9 21.25 12 21.25C17.1 21.25 21.25 17.1 21.25 12C21.25 6.9 17.1 2.75 12 2.75Z"
        fill="currentColor"
      />
      <Path
        d="M11.9995 17.4701C10.5995 17.4701 9.19946 16.9401 8.12946 15.8701C7.84946 15.5901 7.59945 15.2801 7.36945 14.9101C7.14945 14.5601 7.25944 14.1001 7.60944 13.8801C7.95944 13.6601 8.41947 13.7701 8.63947 14.1201C8.80947 14.4001 8.98945 14.6201 9.18945 14.8201C10.7395 16.3701 13.2594 16.3701 14.8094 14.8201C15.4094 14.2201 15.7895 13.4401 15.9195 12.5701C15.9795 12.1601 16.3594 11.8601 16.7694 11.9301C17.1794 11.9901 17.4595 12.3701 17.4095 12.7801C17.2395 13.9701 16.7095 15.0401 15.8795 15.8801C14.7995 16.9401 13.3995 17.4701 11.9995 17.4701Z"
        fill="currentColor"
      />
      <Path
        d="M7.3399 12.08C7.2999 12.08 7.26991 12.08 7.22991 12.07C6.81991 12.01 6.5299 11.6299 6.5899 11.2199C6.7599 10.0299 7.2899 8.95996 8.1199 8.11996C10.2499 5.98996 13.7199 5.98996 15.8599 8.11996C16.1399 8.39996 16.3899 8.70999 16.6199 9.08999C16.8399 9.43999 16.7299 9.89996 16.3799 10.12C16.0299 10.34 15.5699 10.23 15.3499 9.87997C15.1799 9.60997 14.9999 9.37996 14.7999 9.17996C13.2499 7.62996 10.7299 7.62996 9.17989 9.17996C8.57989 9.77996 8.19991 10.56 8.06991 11.43C8.02991 11.81 7.7099 12.08 7.3399 12.08Z"
        fill="currentColor"
      />
      <Path
        d="M7.82031 17.93C7.41031 17.93 7.07031 17.59 7.07031 17.18V14.51C7.07031 14.1 7.41031 13.76 7.82031 13.76H10.4903C10.9003 13.76 11.2403 14.1 11.2403 14.51C11.2403 14.92 10.9003 15.26 10.4903 15.26H8.57031V17.18C8.57031 17.59 8.24031 17.93 7.82031 17.93Z"
        fill="currentColor"
      />
      <Path
        d="M16.1797 10.2401H13.5098C13.0998 10.2401 12.7598 9.90005 12.7598 9.49005C12.7598 9.08005 13.0998 8.74005 13.5098 8.74005H15.4297V6.82007C15.4297 6.41007 15.7697 6.07007 16.1797 6.07007C16.5897 6.07007 16.9297 6.41007 16.9297 6.82007V9.49005C16.9297 9.91005 16.5897 10.2401 16.1797 10.2401Z"
        fill="currentColor"
      />
    </Svg>
  );
};

const RefreshCircleTwotone = ({
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
        d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <G opacity="0.4">
        <Path
          d="M8.00977 14.5099C8.18977 14.8099 8.40976 15.09 8.65976 15.34C10.4998 17.18 13.4898 17.18 15.3398 15.34C16.0898 14.59 16.5198 13.6399 16.6598 12.6699"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <Path
          d="M7.33984 11.3298C7.47984 10.3498 7.90985 9.40979 8.65985 8.65979C10.4999 6.81979 13.4898 6.81979 15.3398 8.65979C15.5998 8.91979 15.8098 9.1998 15.9898 9.4898"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <Path
          d="M7.82031 17.1797V14.5098H10.4903"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <Path
          d="M16.1797 6.81982V9.48981H13.5098"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </G>
    </Svg>
  );
};

const variants: IconVariants = {
  bold: RefreshCircleBold,
  broken: RefreshCircleBroken,
  bulk: RefreshCircleBulk,
  linear: RefreshCircleLinear,
  outline: RefreshCircleOutline,
  twotone: RefreshCircleTwotone,
};

export const RefreshCircleIcon = ({
  variant = iconDefaultOptions.variant,
  className,
  ...props
}: IconProps) => {
  const textClasses = useContext(TextClassContext);
  const Component = variants[variant];
  return <Component className={cn(textClasses, className)} {...props} />;
};
