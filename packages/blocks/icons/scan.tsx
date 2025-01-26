import { useContext } from "react";
import { G, Path, Svg } from "unative/lib/svg";
import { cn } from "unative/lib/utils";
import { TextClassContext } from "unative/ui/text";

import { iconDefaultOptions } from "../icons-configuration";
import type { IconProps, IconVariants } from "../types/icons-type";

const ScanBold = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M2.77 10C2.34 10 2 9.66 2 9.23V6.92C2 4.21 4.21 2 6.92 2H9.23C9.66 2 10 2.34 10 2.77C10 3.2 9.66 3.54 9.23 3.54H6.92C5.05 3.54 3.54 5.06 3.54 6.92V9.23C3.54 9.66 3.19 10 2.77 10Z"
        fill="currentColor"
      />
      <Path
        d="M21.23 10C20.81 10 20.46 9.66 20.46 9.23V6.92C20.46 5.05 18.94 3.54 17.08 3.54H14.77C14.34 3.54 14 3.19 14 2.77C14 2.35 14.34 2 14.77 2H17.08C19.79 2 22 4.21 22 6.92V9.23C22 9.66 21.66 10 21.23 10Z"
        fill="currentColor"
      />
      <Path
        d="M17.0819 21.9997H15.6919C15.2719 21.9997 14.9219 21.6597 14.9219 21.2297C14.9219 20.8097 15.2619 20.4597 15.6919 20.4597H17.0819C18.9519 20.4597 20.4619 18.9397 20.4619 17.0797V15.6997C20.4619 15.2797 20.8019 14.9297 21.2319 14.9297C21.6519 14.9297 22.0019 15.2697 22.0019 15.6997V17.0797C22.0019 19.7897 19.7919 21.9997 17.0819 21.9997Z"
        fill="currentColor"
      />
      <Path
        d="M9.23 22H6.92C4.21 22 2 19.79 2 17.08V14.77C2 14.34 2.34 14 2.77 14C3.2 14 3.54 14.34 3.54 14.77V17.08C3.54 18.95 5.06 20.46 6.92 20.46H9.23C9.65 20.46 10 20.8 10 21.23C10 21.66 9.66 22 9.23 22Z"
        fill="currentColor"
      />
      <Path
        d="M18.4595 11.2305H17.0995H6.89953H5.53953C5.10953 11.2305 4.76953 11.5805 4.76953 12.0005C4.76953 12.4205 5.10953 12.7705 5.53953 12.7705H6.89953H17.0995H18.4595C18.8895 12.7705 19.2295 12.4205 19.2295 12.0005C19.2295 11.5805 18.8895 11.2305 18.4595 11.2305Z"
        fill="currentColor"
      />
      <Path
        d="M6.89844 13.9405V14.2705C6.89844 15.9305 8.23844 17.2705 9.89844 17.2705H14.0984C15.7584 17.2705 17.0984 15.9305 17.0984 14.2705V13.9405C17.0984 13.8205 17.0084 13.7305 16.8884 13.7305H7.10844C6.98844 13.7305 6.89844 13.8205 6.89844 13.9405Z"
        fill="currentColor"
      />
      <Path
        d="M6.89844 10.0605V9.73047C6.89844 8.07047 8.23844 6.73047 9.89844 6.73047H14.0984C15.7584 6.73047 17.0984 8.07047 17.0984 9.73047V10.0605C17.0984 10.1805 17.0084 10.2705 16.8884 10.2705H7.10844C6.98844 10.2705 6.89844 10.1805 6.89844 10.0605Z"
        fill="currentColor"
      />
    </Svg>
  );
};

const ScanBroken = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M2 9V6.5C2 4.01 4.01 2 6.5 2H9"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M15 2H17.5C19.99 2 22 4.01 22 6.5V9"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M22 16V17.5C22 19.99 19.99 22 17.5 22H16"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M9 22H6.5C4.01 22 2 19.99 2 17.5V15"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M17 9.5V14.5C17 16.5 16 17.5 14 17.5H10C8 17.5 7 16.5 7 14.5V9.5C7 7.5 8 6.5 10 6.5H14"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M19 12H5"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

const ScanBulk = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M2.77 10C2.34 10 2 9.66 2 9.23V6.92C2 4.21 4.21 2 6.92 2H9.23C9.66 2 10 2.34 10 2.77C10 3.2 9.66 3.54 9.23 3.54H6.92C5.05 3.54 3.54 5.06 3.54 6.92V9.23C3.54 9.66 3.19 10 2.77 10Z"
        fill="currentColor"
      />
      <Path
        opacity="0.4"
        d="M21.23 10C20.81 10 20.46 9.66 20.46 9.23V6.92C20.46 5.05 18.94 3.54 17.08 3.54H14.77C14.34 3.54 14 3.19 14 2.77C14 2.35 14.34 2 14.77 2H17.08C19.79 2 22 4.21 22 6.92V9.23C22 9.66 21.66 10 21.23 10Z"
        fill="currentColor"
      />
      <Path
        d="M17.0799 21.9999H15.6899C15.2699 21.9999 14.9199 21.6599 14.9199 21.2299C14.9199 20.8099 15.2599 20.4599 15.6899 20.4599H17.0799C18.9499 20.4599 20.4599 18.9399 20.4599 17.0799V15.6999C20.4599 15.2799 20.7999 14.9299 21.2299 14.9299C21.6499 14.9299 21.9999 15.2699 21.9999 15.6999V17.0799C21.9999 19.7899 19.7899 21.9999 17.0799 21.9999Z"
        fill="currentColor"
      />
      <Path
        d="M9.23 22H6.92C4.21 22 2 19.79 2 17.08V14.77C2 14.34 2.34 14 2.77 14C3.2 14 3.54 14.34 3.54 14.77V17.08C3.54 18.95 5.06 20.46 6.92 20.46H9.23C9.65 20.46 10 20.8 10 21.23C10 21.66 9.66 22 9.23 22Z"
        fill="currentColor"
      />
      <Path
        d="M18.4595 11.23H17.0995H6.89953H5.53953C5.10953 11.23 4.76953 11.58 4.76953 12C4.76953 12.42 5.10953 12.77 5.53953 12.77H6.89953H17.0995H18.4595C18.8895 12.77 19.2295 12.42 19.2295 12C19.2295 11.58 18.8895 11.23 18.4595 11.23Z"
        fill="currentColor"
      />
      <Path
        d="M6.90039 13.94V14.27C6.90039 15.93 8.24039 17.27 9.90039 17.27H14.1004C15.7604 17.27 17.1004 15.93 17.1004 14.27V13.94C17.1004 13.82 17.0104 13.73 16.8904 13.73H7.11039C6.99039 13.73 6.90039 13.82 6.90039 13.94Z"
        fill="currentColor"
      />
      <Path
        opacity="0.4"
        d="M6.90039 10.06V9.72998C6.90039 8.06998 8.24039 6.72998 9.90039 6.72998H14.1004C15.7604 6.72998 17.1004 8.06998 17.1004 9.72998V10.06C17.1004 10.18 17.0104 10.27 16.8904 10.27H7.11039C6.99039 10.27 6.90039 10.18 6.90039 10.06Z"
        fill="currentColor"
      />
    </Svg>
  );
};

const ScanLinear = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M2 9V6.5C2 4.01 4.01 2 6.5 2H9"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M15 2H17.5C19.99 2 22 4.01 22 6.5V9"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M22 16V17.5C22 19.99 19.99 22 17.5 22H16"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M9 22H6.5C4.01 22 2 19.99 2 17.5V15"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M17 9.5V14.5C17 16.5 16 17.5 14 17.5H10C8 17.5 7 16.5 7 14.5V9.5C7 7.5 8 6.5 10 6.5H14C16 6.5 17 7.5 17 9.5Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M19 12H5"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

const ScanOutline = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M2 9.75C1.59 9.75 1.25 9.41 1.25 9V6.5C1.25 3.6 3.61 1.25 6.5 1.25H9C9.41 1.25 9.75 1.59 9.75 2C9.75 2.41 9.41 2.75 9 2.75H6.5C4.43 2.75 2.75 4.43 2.75 6.5V9C2.75 9.41 2.41 9.75 2 9.75Z"
        fill="currentColor"
      />
      <Path
        d="M22 9.75C21.59 9.75 21.25 9.41 21.25 9V6.5C21.25 4.43 19.57 2.75 17.5 2.75H15C14.59 2.75 14.25 2.41 14.25 2C14.25 1.59 14.59 1.25 15 1.25H17.5C20.39 1.25 22.75 3.6 22.75 6.5V9C22.75 9.41 22.41 9.75 22 9.75Z"
        fill="currentColor"
      />
      <Path
        d="M17.5 22.75H16C15.59 22.75 15.25 22.41 15.25 22C15.25 21.59 15.59 21.25 16 21.25H17.5C19.57 21.25 21.25 19.57 21.25 17.5V16C21.25 15.59 21.59 15.25 22 15.25C22.41 15.25 22.75 15.59 22.75 16V17.5C22.75 20.4 20.39 22.75 17.5 22.75Z"
        fill="currentColor"
      />
      <Path
        d="M9 22.75H6.5C3.61 22.75 1.25 20.4 1.25 17.5V15C1.25 14.59 1.59 14.25 2 14.25C2.41 14.25 2.75 14.59 2.75 15V17.5C2.75 19.57 4.43 21.25 6.5 21.25H9C9.41 21.25 9.75 21.59 9.75 22C9.75 22.41 9.41 22.75 9 22.75Z"
        fill="currentColor"
      />
      <Path
        d="M14 18.25H10C7.58 18.25 6.25 16.92 6.25 14.5V9.5C6.25 7.08 7.58 5.75 10 5.75H14C16.42 5.75 17.75 7.08 17.75 9.5V14.5C17.75 16.92 16.42 18.25 14 18.25ZM10 7.25C8.42 7.25 7.75 7.92 7.75 9.5V14.5C7.75 16.08 8.42 16.75 10 16.75H14C15.58 16.75 16.25 16.08 16.25 14.5V9.5C16.25 7.92 15.58 7.25 14 7.25H10Z"
        fill="currentColor"
      />
      <Path
        d="M19 12.75H5C4.59 12.75 4.25 12.41 4.25 12C4.25 11.59 4.59 11.25 5 11.25H19C19.41 11.25 19.75 11.59 19.75 12C19.75 12.41 19.41 12.75 19 12.75Z"
        fill="currentColor"
      />
    </Svg>
  );
};

const ScanTwotone = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M2 9V6.5C2 4.01 4.01 2 6.5 2H9"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M15 2H17.5C19.99 2 22 4.01 22 6.5V9"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M22 16V17.5C22 19.99 19.99 22 17.5 22H16"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M9 22H6.5C4.01 22 2 19.99 2 17.5V15"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <G opacity="0.4">
        <Path
          d="M17 9.5V14.5C17 16.5 16 17.5 14 17.5H10C8 17.5 7 16.5 7 14.5V9.5C7 7.5 8 6.5 10 6.5H14C16 6.5 17 7.5 17 9.5Z"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <Path
          d="M19 12H5"
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
  bold: ScanBold,
  broken: ScanBroken,
  bulk: ScanBulk,
  linear: ScanLinear,
  outline: ScanOutline,
  twotone: ScanTwotone,
};

export const ScanIcon = ({
  variant = iconDefaultOptions.variant,
  className,
  ...props
}: IconProps) => {
  const textClasses = useContext(TextClassContext);
  const Component = variants[variant];
  return <Component className={cn(textClasses, className)} {...props} />;
};
