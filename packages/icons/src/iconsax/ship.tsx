import { useContext } from "react";
import { cn } from "unative/lib/utils";
import { G, Path, Svg } from "unative/ui/svg";
import { TextClassContext } from "unative/ui/text";

import type { IconProps, IconVariants } from "../icon-options";
import { defaultOptions } from "../icon-options";

const ShipBold = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M21.6297 14.6608L21.2197 16.5208C20.5097 19.7208 17.9997 22.0008 14.3797 22.0008H9.61974C5.99974 22.0008 3.48974 19.7208 2.77974 16.5208L2.36974 14.6608C2.16974 13.7508 2.70974 12.7208 3.57974 12.3708L4.99974 11.8008L10.5097 9.59078C10.9897 9.40078 11.4997 9.30078 11.9997 9.30078C12.4997 9.30078 13.0097 9.40078 13.4897 9.59078L18.9997 11.8008L20.4197 12.3708C21.2897 12.7208 21.8297 13.7508 21.6297 14.6608Z"
        fill="currentColor"
      />
      <Path
        d="M19 8V9.44C19 9.79 18.64 10.04 18.31 9.9L14.04 8.19C12.73 7.68 11.27 7.68 9.95 8.2L5.69 9.91C5.36 10.05 5 9.8 5 9.45V8C5 6.35 6.35 5 8 5H16C17.65 5 19 6.35 19 8Z"
        fill="currentColor"
      />
      <Path
        d="M14.5 5H9.5V3C9.5 2.45 9.95 2 10.5 2H13.5C14.05 2 14.5 2.45 14.5 3V5Z"
        fill="currentColor"
      />
    </Svg>
  );
};

const ShipBroken = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M5.10973 20.4599C3.93973 19.4899 3.13974 18.1199 2.77974 16.5199L2.36974 14.6599C2.16974 13.7499 2.70973 12.7199 3.57973 12.3699L4.99974 11.7999L10.5098 9.58993C11.4698 9.20993 12.5297 9.20993 13.4897 9.58993L18.9997 11.7999L20.4198 12.3699C21.2898 12.7199 21.8297 13.7499 21.6297 14.6599L21.2197 16.5199C20.5097 19.7199 17.9997 21.9999 14.3797 21.9999H9.61974"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M12 22V10"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M19 8V11.8L13.49 9.59C12.53 9.21 11.47 9.21 10.51 9.59L5 11.8V8C5 6.35 6.35 5 8 5H16C17.65 5 19 6.35 19 8Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M14.5 5H9.5V3C9.5 2.45 9.95 2 10.5 2H13.5C14.05 2 14.5 2.45 14.5 3V5Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

const ShipBulk = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M21.6297 14.6601L21.2197 16.5201C20.5097 19.72 17.9997 22.0001 14.3797 22.0001H9.61974C5.99974 22.0001 3.48974 19.72 2.77974 16.5201L2.36974 14.6601C2.16974 13.7501 2.70973 12.7201 3.57973 12.3701L4.99974 11.8L10.5098 9.59006C10.9898 9.40006 11.4997 9.30005 11.9997 9.30005C12.4997 9.30005 13.0097 9.40006 13.4897 9.59006L18.9997 11.8L20.4198 12.3701C21.2898 12.7201 21.8298 13.7501 21.6297 14.6601Z"
        fill="currentColor"
      />
      <Path
        opacity="0.4"
        d="M19 8V11.8L13.49 9.59C12.53 9.21 11.47 9.21 10.51 9.59L5 11.8V8C5 6.35 6.35 5 8 5H16C17.65 5 19 6.35 19 8Z"
        fill="currentColor"
      />
      <Path
        d="M14.5 5H9.5V3C9.5 2.45 9.95 2 10.5 2H13.5C14.05 2 14.5 2.45 14.5 3V5Z"
        fill="currentColor"
      />
    </Svg>
  );
};

const ShipLinear = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M20.42 12.3699C21.29 12.7199 21.83 13.7499 21.63 14.6599L21.22 16.5199C20.51 19.7199 18 21.9999 14.38 21.9999H9.61998C5.99998 21.9999 3.48999 19.7199 2.77999 16.5199L2.36998 14.6599C2.16998 13.7499 2.70997 12.7199 3.57997 12.3699L4.99999 11.7999L10.51 9.58993C11.47 9.20993 12.53 9.20993 13.49 9.58993L19 11.7999L20.42 12.3699Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M12 22V10"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M19 8V11.8L13.49 9.59C12.53 9.21 11.47 9.21 10.51 9.59L5 11.8V8C5 6.35 6.35 5 8 5H16C17.65 5 19 6.35 19 8Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M14.5 5H9.5V3C9.5 2.45 9.95 2 10.5 2H13.5C14.05 2 14.5 2.45 14.5 3V5Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

const ShipOutline = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M14.3798 22.75H9.61977C5.83977 22.75 2.86977 20.37 2.04977 16.68L1.63979 14.82C1.35979 13.54 2.08977 12.16 3.29977 11.67L10.2298 8.88999C11.3698 8.43999 12.6298 8.43999 13.7698 8.88999L20.6998 11.67C21.9198 12.16 22.6498 13.54 22.3598 14.82L21.9498 16.68C21.1298 20.37 18.1598 22.75 14.3798 22.75ZM11.9998 10.05C11.5898 10.05 11.1798 10.13 10.7798 10.28L3.84978 13.06C3.31978 13.27 2.96977 13.94 3.08977 14.49L3.49978 16.35C4.16978 19.37 6.50976 21.24 9.60976 21.24H14.3698C17.4698 21.24 19.8098 19.37 20.4798 16.35L20.8898 14.49C21.0098 13.94 20.6598 13.27 20.1298 13.06L13.1998 10.28C12.8198 10.13 12.4098 10.05 11.9998 10.05Z"
        fill="currentColor"
      />
      <Path
        d="M12 22.75C11.59 22.75 11.25 22.41 11.25 22V10C11.25 9.59 11.59 9.25 12 9.25C12.41 9.25 12.75 9.59 12.75 10V22C12.75 22.41 12.41 22.75 12 22.75Z"
        fill="currentColor"
      />
      <Path
        d="M19.0002 12.55C18.9102 12.55 18.8102 12.53 18.7202 12.5L13.2102 10.29C12.4302 9.98001 11.5702 9.98001 10.7802 10.29L5.27023 12.5C5.04023 12.59 4.78025 12.56 4.57025 12.42C4.36025 12.28 4.24023 12.05 4.24023 11.8V8C4.24023 5.93 5.92023 4.25 7.99023 4.25H15.9902C18.0602 4.25 19.7402 5.93 19.7402 8V11.8C19.7402 12.05 19.6202 12.28 19.4102 12.42C19.2902 12.51 19.1502 12.55 19.0002 12.55ZM12.0002 8.54999C12.6002 8.54999 13.2002 8.66001 13.7702 8.89001L18.2502 10.69V8C18.2502 6.76 17.2402 5.75 16.0002 5.75H8.00024C6.76024 5.75 5.75024 6.76 5.75024 8V10.69L10.2303 8.89001C10.8003 8.67001 11.4002 8.54999 12.0002 8.54999Z"
        fill="currentColor"
      />
      <Path
        d="M14.5 5.75H9.5C9.09 5.75 8.75 5.41 8.75 5V3C8.75 2.04 9.54 1.25 10.5 1.25H13.5C14.46 1.25 15.25 2.04 15.25 3V5C15.25 5.41 14.91 5.75 14.5 5.75ZM10.25 4.25H13.75V3C13.75 2.86 13.64 2.75 13.5 2.75H10.5C10.36 2.75 10.25 2.86 10.25 3V4.25Z"
        fill="currentColor"
      />
    </Svg>
  );
};

const ShipTwotone = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M20.4198 12.3702C21.2898 12.7202 21.8297 13.7502 21.6297 14.6602L21.2197 16.5202C20.5097 19.7202 17.9997 22.0002 14.3797 22.0002H9.61974C5.99974 22.0002 3.48974 19.7202 2.77974 16.5202L2.36974 14.6602C2.16974 13.7502 2.70973 12.7202 3.57973 12.3702L4.99974 11.8002L10.5098 9.59018C11.4698 9.21018 12.5297 9.21018 13.4897 9.59018L18.9997 11.8002L20.4198 12.3702Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M12 22V10"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <G opacity="0.4">
        <Path
          d="M19 8V11.8L13.49 9.59C12.53 9.21 11.47 9.21 10.51 9.59L5 11.8V8C5 6.35 6.35 5 8 5H16C17.65 5 19 6.35 19 8Z"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <Path
          d="M14.5 5H9.5V3C9.5 2.45 9.95 2 10.5 2H13.5C14.05 2 14.5 2.45 14.5 3V5Z"
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
  bold: ShipBold,
  broken: ShipBroken,
  bulk: ShipBulk,
  linear: ShipLinear,
  outline: ShipOutline,
  twotone: ShipTwotone,
};

export const ShipIcon = ({
  variant = defaultOptions.variant,
  className,
  ...props
}: IconProps) => {
  const textClasses = useContext(TextClassContext);
  const Component = variants[variant];
  return <Component className={cn(textClasses, className)} {...props} />;
};

export default ShipIcon;
