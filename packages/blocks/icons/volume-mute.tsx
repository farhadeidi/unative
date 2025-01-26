import { useContext } from "react";
import { Path, Svg } from "unative/lib/svg";
import { cn } from "unative/lib/utils";
import { TextClassContext } from "unative/ui/text";

import { iconDefaultOptions } from "../icons-configuration";
import type { IconProps, IconVariants } from "../types/icons-type";

const VolumeMuteBold = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M17.52 3.78168C16.4 3.16168 14.97 3.32168 13.51 4.23168L10.59 6.06168C10.39 6.18168 10.16 6.25168 9.93 6.25168H9H8.5C6.08 6.25168 4.75 7.58168 4.75 10.0017V14.0017C4.75 16.4217 6.08 17.7517 8.5 17.7517H9H9.93C10.16 17.7517 10.39 17.8217 10.59 17.9417L13.51 19.7717C14.39 20.3217 15.25 20.5917 16.05 20.5917C16.57 20.5917 17.07 20.4717 17.52 20.2217C18.63 19.6017 19.25 18.3117 19.25 16.5917V7.41168C19.25 5.69168 18.63 4.40168 17.52 3.78168Z"
        fill="currentColor"
      />
    </Svg>
  );
};

const VolumeMuteBroken = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M18.5 7.40979C18.5 4.42979 16.43 3.28979 13.91 4.86979L10.99 6.69979C10.67 6.88979 10.3 6.99979 9.93 6.99979H8.5C6.5 6.99979 5.5 7.99979 5.5 9.99979V13.9998C5.5 15.9998 6.5 16.9998 8.5 16.9998H9.93C10.3 16.9998 10.67 17.1098 10.99 17.2998L13.91 19.1298C16.43 20.7098 18.5 19.5598 18.5 16.5898V11.6898"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

const VolumeMuteBulk = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M19.25 7.41021V16.5902C19.25 18.3102 18.63 19.6002 17.52 20.2202C17.07 20.4702 16.57 20.5902 16.05 20.5902C15.25 20.5902 14.39 20.3202 13.51 19.7702L10.59 17.9402C10.39 17.8202 10.16 17.7502 9.93 17.7502H9V6.25021H9.93C10.16 6.25021 10.39 6.18021 10.59 6.06021L13.51 4.23021C14.97 3.32021 16.4 3.16021 17.52 3.78021C18.63 4.40021 19.25 5.69021 19.25 7.41021Z"
        fill="currentColor"
      />
      <Path
        d="M9 6.25V17.75H8.5C6.08 17.75 4.75 16.42 4.75 14V10C4.75 7.58 6.08 6.25 8.5 6.25H9Z"
        fill="currentColor"
      />
    </Svg>
  );
};

const VolumeMuteLinear = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M5.5 10V14C5.5 16 6.5 17 8.5 17H9.93C10.3 17 10.67 17.11 10.99 17.3L13.91 19.13C16.43 20.71 18.5 19.56 18.5 16.59V7.41003C18.5 4.43003 16.43 3.29003 13.91 4.87003L10.99 6.70003C10.67 6.89003 10.3 7.00003 9.93 7.00003H8.5C6.5 7.00003 5.5 8.00003 5.5 10Z"
        stroke="currentColor"
        strokeWidth="1.5"
      />
    </Svg>
  );
};

const VolumeMuteOutline = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M16.05 20.5901C15.26 20.5901 14.39 20.3101 13.52 19.7601L10.6 17.9301C10.4 17.8101 10.17 17.7401 9.94 17.7401H8.5C6.08 17.7401 4.75 16.4101 4.75 13.9901V9.99011C4.75 7.57011 6.08 6.24011 8.5 6.24011H9.93C10.16 6.24011 10.39 6.17011 10.59 6.05011L13.51 4.22011C14.97 3.31011 16.39 3.14011 17.51 3.76011C18.63 4.38011 19.24 5.67011 19.24 7.40011V16.5701C19.24 18.2901 18.62 19.5901 17.51 20.2101C17.07 20.4701 16.57 20.5901 16.05 20.5901ZM8.5 7.75011C6.92 7.75011 6.25 8.42011 6.25 10.0001V14.0001C6.25 15.5801 6.92 16.2501 8.5 16.2501H9.93C10.45 16.2501 10.95 16.3901 11.39 16.6701L14.31 18.5001C15.28 19.1001 16.18 19.2601 16.79 18.9201C17.4 18.5801 17.75 17.7301 17.75 16.6001V7.41011C17.75 6.27011 17.4 5.42011 16.79 5.09011C16.18 4.75011 15.28 4.90011 14.31 5.51011L11.39 7.34011C10.95 7.61011 10.45 7.76011 9.93 7.76011H8.5V7.75011Z"
        fill="currentColor"
      />
    </Svg>
  );
};

const VolumeMuteTwotone = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M5.5 9.99979V13.9998C5.5 15.9998 6.5 16.9998 8.5 16.9998H9.93C10.3 16.9998 10.67 17.1098 10.99 17.2998L13.91 19.1298C16.43 20.7098 18.5 19.5598 18.5 16.5898V7.40979C18.5 4.42979 16.43 3.28979 13.91 4.86979L10.99 6.69979C10.67 6.88979 10.3 6.99979 9.93 6.99979H8.5C6.5 6.99979 5.5 7.99979 5.5 9.99979Z"
        stroke="currentColor"
        strokeWidth="1.5"
      />
    </Svg>
  );
};

const variants: IconVariants = {
  bold: VolumeMuteBold,
  broken: VolumeMuteBroken,
  bulk: VolumeMuteBulk,
  linear: VolumeMuteLinear,
  outline: VolumeMuteOutline,
  twotone: VolumeMuteTwotone,
};

export const VolumeMuteIcon = ({
  variant = iconDefaultOptions.variant,
  className,
  ...props
}: IconProps) => {
  const textClasses = useContext(TextClassContext);
  const Component = variants[variant];
  return <Component className={cn(textClasses, className)} {...props} />;
};
