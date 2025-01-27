import { useContext } from "react";
import { G, Path, Svg } from "unative/lib/svg";
import { cn } from "unative/lib/utils";
import { TextClassContext } from "unative/ui/text";

import type { IconProps, IconVariants } from "../icon-options";
import { defaultOptions } from "../icon-options";

const ExportBold = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M16.19 2H7.81C4.17 2 2 4.17 2 7.81V16.18C2 19.83 4.17 22 7.81 22H16.18C19.82 22 21.99 19.83 21.99 16.19V7.81C22 4.17 19.83 2 16.19 2ZM17.25 12.33C17.25 12.74 16.91 13.08 16.5 13.08C16.09 13.08 15.75 12.74 15.75 12.33V9.31L8.03 17.03C7.88 17.18 7.69 17.25 7.5 17.25C7.31 17.25 7.12 17.18 6.97 17.03C6.68 16.74 6.68 16.26 6.97 15.97L14.69 8.25H11.67C11.26 8.25 10.92 7.91 10.92 7.5C10.92 7.09 11.26 6.75 11.67 6.75H16.5C16.91 6.75 17.25 7.09 17.25 7.5V12.33Z"
        fill="currentColor"
      />
    </Svg>
  );
};

const ExportBroken = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M12 15.0001V3.62012"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M15.3504 5.85L12.0004 2.5L8.65039 5.85"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M8.74047 21.4999C4.27047 21.4999 2.48047 19.7099 2.48047 15.2399V15.1099C2.48047 11.0899 3.93047 9.23991 7.47047 8.90991"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M16.4398 8.8999C20.0398 9.2099 21.5098 11.0599 21.5098 15.1099V15.2399C21.5098 19.7099 19.7198 21.4999 15.2498 21.4999H13.0098"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

const ExportBulk = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M16.19 2H7.81C4.17 2 2 4.17 2 7.81V16.18C2 19.83 4.17 22 7.81 22H16.18C19.82 22 21.99 19.83 21.99 16.19V7.81C22 4.17 19.83 2 16.19 2Z"
        fill="currentColor"
      />
      <Path
        d="M16.7475 7H11.9175C11.5075 7 11.1675 7.34 11.1675 7.75C11.1675 8.16 11.5075 8.5 11.9175 8.5H14.9375L7.2175 16.22C6.9275 16.51 6.9275 16.99 7.2175 17.28C7.3675 17.43 7.5575 17.5 7.7475 17.5C7.9375 17.5 8.1275 17.43 8.2775 17.28L15.9975 9.56V12.58C15.9975 12.99 16.3375 13.33 16.7475 13.33C17.1575 13.33 17.4975 12.99 17.4975 12.58V7.75C17.4975 7.34 17.1575 7 16.7475 7Z"
        fill="currentColor"
      />
    </Svg>
  );
};

const ExportLinear = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M16.44 8.8999C20.04 9.2099 21.51 11.0599 21.51 15.1099V15.2399C21.51 19.7099 19.72 21.4999 15.25 21.4999H8.73998C4.26998 21.4999 2.47998 19.7099 2.47998 15.2399V15.1099C2.47998 11.0899 3.92998 9.2399 7.46998 8.9099"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M12 15.0001V3.62012"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M15.35 5.85L12 2.5L8.65002 5.85"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

const ExportOutline = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M14.4398 7.24988C14.2498 7.24988 14.0598 7.17988 13.9098 7.02988L11.8798 4.99988L9.84977 7.02988C9.55977 7.31988 9.07977 7.31988 8.78977 7.02988C8.49977 6.73988 8.49977 6.25988 8.78977 5.96988L11.3498 3.40988C11.6398 3.11988 12.1198 3.11988 12.4098 3.40988L14.9698 5.96988C15.2598 6.25988 15.2598 6.73988 14.9698 7.02988C14.8198 7.17988 14.6298 7.24988 14.4398 7.24988Z"
        fill="currentColor"
      />
      <Path
        d="M11.8809 14.93C11.4709 14.93 11.1309 14.59 11.1309 14.18V4.01001C11.1309 3.60001 11.4709 3.26001 11.8809 3.26001C12.2909 3.26001 12.6309 3.60001 12.6309 4.01001V14.18C12.6309 14.6 12.2909 14.93 11.8809 14.93Z"
        fill="currentColor"
      />
      <Path
        d="M12 20.75C6.85 20.75 3.25 17.15 3.25 12C3.25 11.59 3.59 11.25 4 11.25C4.41 11.25 4.75 11.59 4.75 12C4.75 16.27 7.73 19.25 12 19.25C16.27 19.25 19.25 16.27 19.25 12C19.25 11.59 19.59 11.25 20 11.25C20.41 11.25 20.75 11.59 20.75 12C20.75 17.15 17.15 20.75 12 20.75Z"
        fill="currentColor"
      />
    </Svg>
  );
};

const ExportTwotone = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M16.4405 8.8999C20.0405 9.2099 21.5105 11.0599 21.5105 15.1099V15.2399C21.5105 19.7099 19.7205 21.4999 15.2505 21.4999H8.74047C4.27047 21.4999 2.48047 19.7099 2.48047 15.2399V15.1099C2.48047 11.0899 3.93047 9.2399 7.47047 8.9099"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <G opacity="0.4">
        <Path
          d="M12 15.0001V3.62012"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <Path
          d="M15.3504 5.85L12.0004 2.5L8.65039 5.85"
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
  bold: ExportBold,
  broken: ExportBroken,
  bulk: ExportBulk,
  linear: ExportLinear,
  outline: ExportOutline,
  twotone: ExportTwotone,
};

export const ExportIcon = ({
  variant = defaultOptions.variant,
  className,
  ...props
}: IconProps) => {
  const textClasses = useContext(TextClassContext);
  const Component = variants[variant];
  return <Component className={cn(textClasses, className)} {...props} />;
};
