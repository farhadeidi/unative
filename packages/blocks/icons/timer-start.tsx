import { useContext } from "react";
import { Path, Svg } from "unative/lib/svg";
import { cn } from "unative/lib/utils";
import { TextClassContext } from "unative/ui/text";

import { iconDefaultOptions } from "../icons-configuration";
import type { IconProps, IconVariants } from "../types/icons-type";

const TimerStartBold = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M14.8906 3.45H9.11062C8.71062 3.45 8.39062 3.13 8.39062 2.73C8.39062 2.33 8.71062 2 9.11062 2H14.8906C15.2906 2 15.6106 2.32 15.6106 2.72C15.6106 3.12 15.2906 3.45 14.8906 3.45Z"
        fill="currentColor"
      />
      <Path
        d="M19.97 15H17.03C15.76 15 15 15.76 15 17.03V19.97C15 21.24 15.76 22 17.03 22H19.97C21.24 22 22 21.24 22 19.97V17.03C22 15.76 21.24 15 19.97 15ZM19.69 19.46L18.51 20.14C18.27 20.28 18.03 20.35 17.81 20.35C17.64 20.35 17.49 20.31 17.35 20.23C17.03 20.04 16.85 19.67 16.85 19.18V17.82C16.85 17.33 17.03 16.96 17.35 16.77C17.67 16.58 18.08 16.62 18.51 16.86L19.69 17.54C20.11 17.79 20.35 18.13 20.35 18.5C20.35 18.87 20.12 19.21 19.69 19.46Z"
        fill="currentColor"
      />
      <Path
        d="M14.0001 19.9684V17.0284C14.0001 15.2184 15.2201 13.9984 17.0301 13.9984H19.9701C20.2001 13.9984 20.4201 14.0184 20.6301 14.0584C20.6501 13.8184 20.6701 13.5784 20.6701 13.3284C20.6701 8.53844 16.7801 4.64844 12.0001 4.64844C7.22008 4.64844 3.33008 8.53844 3.33008 13.3284C3.33008 18.1084 7.22008 21.9984 12.0001 21.9984C12.8501 21.9984 13.6601 21.8584 14.4401 21.6384C14.1601 21.1684 14.0001 20.6084 14.0001 19.9684ZM12.7501 12.9984C12.7501 13.4084 12.4101 13.7484 12.0001 13.7484C11.5901 13.7484 11.2501 13.4084 11.2501 12.9984V7.99844C11.2501 7.58844 11.5901 7.24844 12.0001 7.24844C12.4101 7.24844 12.7501 7.58844 12.7501 7.99844V12.9984Z"
        fill="currentColor"
      />
    </Svg>
  );
};

const TimerStartBroken = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M12 8V13"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M8.00977 5.46C9.20977 4.85 10.5598 4.5 11.9998 4.5C16.8298 4.5 20.7498 8.42 20.7498 13.25"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M12 22C7.17 22 3.25 18.08 3.25 13.25C3.25 11.27 3.91 9.44999 5.01 7.98999"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M9 2H15"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M14.9004 18.5V17.34C14.9004 15.91 15.9204 15.32 17.1604 16.04L18.1604 16.62L19.1604 17.2C20.4004 17.92 20.4004 19.09 19.1604 19.81L18.1604 20.39L17.1604 20.97C15.9204 21.69 14.9004 21.1 14.9004 19.67V18.5Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

const TimerStartBulk = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M12 13.75C11.59 13.75 11.25 13.41 11.25 13V8C11.25 7.59 11.59 7.25 12 7.25C12.41 7.25 12.75 7.59 12.75 8V13C12.75 13.41 12.41 13.75 12 13.75Z"
        fill="currentColor"
      />
      <Path
        d="M14.8906 3.45H9.11062C8.71062 3.45 8.39062 3.13 8.39062 2.73C8.39062 2.33 8.71062 2 9.11062 2H14.8906C15.2906 2 15.6106 2.32 15.6106 2.72C15.6106 3.12 15.2906 3.45 14.8906 3.45Z"
        fill="currentColor"
      />
      <Path
        opacity="0.4"
        d="M15.0001 19.9699V17.0299C15.0001 15.7599 15.7601 14.9999 17.0301 14.9999H19.9701C20.1601 14.9999 20.3301 15.0199 20.5001 15.0599C20.6101 14.4999 20.6701 13.9199 20.6701 13.3299C20.6701 8.54991 16.7801 4.65991 12.0001 4.65991C7.22008 4.65991 3.33008 8.54991 3.33008 13.3299C3.33008 18.1099 7.22008 21.9999 12.0001 21.9999C13.2101 21.9999 14.3601 21.7499 15.4101 21.2999C15.1501 20.9599 15.0001 20.5199 15.0001 19.9699Z"
        fill="currentColor"
      />
      <Path
        d="M19.97 15H17.03C15.76 15 15 15.76 15 17.03V19.97C15 21.24 15.76 22 17.03 22H19.97C21.24 22 22 21.24 22 19.97V17.03C22 15.76 21.24 15 19.97 15ZM19.69 19.46L18.51 20.14C18.27 20.28 18.03 20.35 17.81 20.35C17.64 20.35 17.49 20.31 17.35 20.23C17.03 20.04 16.85 19.67 16.85 19.18V17.82C16.85 17.33 17.03 16.96 17.35 16.77C17.67 16.58 18.08 16.62 18.51 16.86L19.69 17.54C20.11 17.79 20.35 18.13 20.35 18.5C20.35 18.87 20.12 19.21 19.69 19.46Z"
        fill="currentColor"
      />
    </Svg>
  );
};

const TimerStartLinear = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M12 8V13"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M12 22C7.17 22 3.25 18.08 3.25 13.25C3.25 8.42 7.17 4.5 12 4.5C16.83 4.5 20.75 8.42 20.75 13.25"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M9 2H15"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M14.9 18.5V17.34C14.9 15.91 15.92 15.32 17.16 16.04L18.16 16.62L19.16 17.2C20.4 17.92 20.4 19.09 19.16 19.81L18.16 20.39L17.16 20.97C15.92 21.69 14.9 21.1 14.9 19.67V18.5Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

const TimerStartOutline = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M12 13.75C11.59 13.75 11.25 13.41 11.25 13V8C11.25 7.59 11.59 7.25 12 7.25C12.41 7.25 12.75 7.59 12.75 8V13C12.75 13.41 12.41 13.75 12 13.75Z"
        fill="currentColor"
      />
      <Path
        d="M12 22.75C6.76 22.75 2.5 18.49 2.5 13.25C2.5 8.01 6.76 3.75 12 3.75C17.24 3.75 21.5 8.01 21.5 13.25C21.5 13.66 21.16 14 20.75 14C20.34 14 20 13.66 20 13.25C20 8.84 16.41 5.25 12 5.25C7.59 5.25 4 8.84 4 13.25C4 17.66 7.59 21.25 12 21.25C12.41 21.25 12.75 21.59 12.75 22C12.75 22.41 12.41 22.75 12 22.75Z"
        fill="currentColor"
      />
      <Path
        d="M15 2.75H9C8.59 2.75 8.25 2.41 8.25 2C8.25 1.59 8.59 1.25 9 1.25H15C15.41 1.25 15.75 1.59 15.75 2C15.75 2.41 15.41 2.75 15 2.75Z"
        fill="currentColor"
      />
      <Path
        d="M16.1504 22.0201C15.8004 22.0201 15.4804 21.9401 15.1904 21.7701C14.5304 21.3901 14.1504 20.6201 14.1504 19.6601V17.3501C14.1504 16.3901 14.5304 15.6201 15.1904 15.2401C15.8504 14.8601 16.7004 14.9201 17.5304 15.3901L19.5304 16.5501C20.3604 17.0301 20.8404 17.7401 20.8404 18.5001C20.8404 19.2601 20.3604 19.9701 19.5304 20.4501L17.5304 21.6101C17.0704 21.8801 16.6004 22.0201 16.1504 22.0201ZM16.1604 16.4801C16.0804 16.4801 16.0004 16.5001 15.9404 16.5301C15.7604 16.6301 15.6504 16.9401 15.6504 17.3401V19.6501C15.6504 20.0501 15.7604 20.3601 15.9404 20.4601C16.1204 20.5601 16.4404 20.5101 16.7804 20.3101L18.7804 19.1501C19.1304 18.9501 19.3404 18.7001 19.3404 18.5001C19.3404 18.3001 19.1304 18.0501 18.7804 17.8501L16.7804 16.6901C16.5504 16.5501 16.3304 16.4801 16.1604 16.4801Z"
        fill="currentColor"
      />
    </Svg>
  );
};

const TimerStartTwotone = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M12 8V13"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M12 22C7.17 22 3.25 18.08 3.25 13.25C3.25 8.42 7.17 4.5 12 4.5C16.83 4.5 20.75 8.42 20.75 13.25"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        opacity="0.4"
        d="M9 2H15"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        opacity="0.4"
        d="M14.9004 18.4998V17.3398C14.9004 15.9098 15.9204 15.3198 17.1604 16.0398L18.1604 16.6198L19.1604 17.1998C20.4004 17.9198 20.4004 19.0898 19.1604 19.8098L18.1604 20.3898L17.1604 20.9698C15.9204 21.6898 14.9004 21.0998 14.9004 19.6698V18.4998Z"
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
  bold: TimerStartBold,
  broken: TimerStartBroken,
  bulk: TimerStartBulk,
  linear: TimerStartLinear,
  outline: TimerStartOutline,
  twotone: TimerStartTwotone,
};

export const TimerStartIcon = ({
  variant = iconDefaultOptions.variant,
  className,
  ...props
}: IconProps) => {
  const textClasses = useContext(TextClassContext);
  const Component = variants[variant];
  return <Component className={cn(textClasses, className)} {...props} />;
};
