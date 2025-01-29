import { useContext } from "react";
import { cn } from "unative/lib/utils";
import { Path, Svg } from "unative/ui/svg";
import { TextClassContext } from "unative/ui/text";

import type { IconProps, IconVariants } from "../icon-options";
import { defaultOptions } from "../icon-options";

const MonitorRecorderBold = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M20.97 10.37V13.56C20.97 15.88 19.09 17.76 16.77 17.76H13.21C12.66 17.76 12.21 18.2 12.21 18.76V19.58C12.21 20.13 12.66 20.58 13.21 20.58H15.47C15.86 20.58 16.18 20.89 16.18 21.29C16.18 21.68 15.86 22 15.47 22H7.53C7.14 22 6.82 21.68 6.82 21.29C6.82 20.89 7.14 20.58 7.53 20.58H9.79C10.34 20.58 10.79 20.13 10.79 19.58V18.76C10.79 18.2 10.34 17.76 9.79 17.76H6.19C3.88 17.76 2 15.88 2 13.56V7.19C2 4.88 3.88 3 6.19 3H10.5C11.05 3 11.5 3.45 11.5 4V6.15C11.5 8.08 12.79 9.37 14.71 9.37H19.97C20.52 9.37 20.97 9.82 20.97 10.37Z"
        fill="currentColor"
      />
      <Path
        d="M21.99 2.35962L20.86 3.14962V2.72962C20.86 1.77962 20.09 1.01962 19.15 1.01962H14.87C13.84 1.00962 13 1.84962 13 2.87962V6.15962C13 7.01962 13.43 7.86962 14.71 7.86962H19.14C20.09 7.86962 20.85 7.09962 20.85 6.15962V5.72962L21.98 6.51962C22.55 6.90962 23 6.66962 23 5.98962V2.88962C23 2.20962 22.55 1.97962 21.99 2.35962Z"
        fill="currentColor"
      />
    </Svg>
  );
};

const MonitorRecorderBroken = ({
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
        d="M2 6.44C2 2.89 2.89 2 6.44 2H8"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M22 11.89V12.78C22 16.34 21.11 17.22 17.56 17.22H6.44C2.89 17.22 2 16.33 2 12.78V10.79"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M12 17.22V22"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M2 13H22"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M7.5 22H16.5"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M17.8598 9.37001H13.0998C11.7198 9.37001 11.2598 8.45001 11.2598 7.53001V4.01001C11.2598 2.91001 12.1598 2.01001 13.2598 2.01001H17.8598C18.8798 2.01001 19.6998 2.83001 19.6998 3.85001V7.53001C19.6998 8.55001 18.8798 9.37001 17.8598 9.37001Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M20.9092 7.91998L19.6992 7.06998V4.30998L20.9092 3.45998C21.5092 3.04998 21.9992 3.29998 21.9992 4.02998V7.35998C21.9992 8.08998 21.5092 8.33998 20.9092 7.91998Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

const MonitorRecorderBulk = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M20.97 7.19V13.37H2V7.19C2 4.88 3.88 3 6.19 3H16.78C19.09 3 20.97 4.88 20.97 7.19Z"
        fill="currentColor"
      />
      <Path
        d="M2 13.3701V13.5601C2 15.8801 3.88 17.7501 6.19 17.7501H9.79C10.34 17.7501 10.79 18.2001 10.79 18.7501V19.5701C10.79 20.1201 10.34 20.5701 9.79 20.5701H7.53C7.14 20.5701 6.82 20.8901 6.82 21.2801C6.82 21.6701 7.14 21.9901 7.53 21.9901H15.46C15.85 21.9901 16.17 21.6701 16.17 21.2801C16.17 20.8901 15.85 20.5701 15.46 20.5701H13.21C12.66 20.5701 12.21 20.1201 12.21 19.5701V18.7501C12.21 18.2001 12.66 17.7501 13.21 17.7501H16.78C19.1 17.7501 20.97 15.8701 20.97 13.5601V13.3701H2Z"
        fill="currentColor"
      />
      <Path
        d="M21.99 2.36011L20.86 3.15011V2.73011C20.86 1.78011 20.09 1.02011 19.15 1.02011H14.87C13.84 1.01011 13 1.85011 13 2.88011V6.16011C13 7.02011 13.43 7.87011 14.71 7.87011H19.14C20.09 7.87011 20.85 7.10011 20.85 6.16011V5.73011L21.98 6.52011C22.55 6.91011 23 6.67011 23 5.99011V2.89011C23 2.21011 22.55 1.98011 21.99 2.36011Z"
        fill="currentColor"
      />
    </Svg>
  );
};

const MonitorRecorderLinear = ({
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
        d="M22 11.89V12.78C22 16.34 21.11 17.22 17.56 17.22H6.44C2.89 17.22 2 16.33 2 12.78V6.44C2 2.89 2.89 2 6.44 2H8"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M12 17.22V22"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M2 13H22"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M7.5 22H16.5"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M17.86 9.37001H13.1C11.72 9.37001 11.26 8.45001 11.26 7.53001V4.01001C11.26 2.91001 12.16 2.01001 13.26 2.01001H17.86C18.88 2.01001 19.7 2.83001 19.7 3.85001V7.53001C19.7 8.55001 18.88 9.37001 17.86 9.37001Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M20.91 7.91998L19.7 7.06998V4.30998L20.91 3.45998C21.51 3.04998 22 3.29998 22 4.02998V7.35998C22 8.08998 21.51 8.33998 20.91 7.91998Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

const MonitorRecorderOutline = ({
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
        d="M17.56 17.97H6.44C2.46 17.97 1.25 16.76 1.25 12.78V6.44C1.25 2.46 2.46 1.25 6.44 1.25H8C8.41 1.25 8.75 1.59 8.75 2C8.75 2.41 8.41 2.75 8 2.75H6.44C3.3 2.75 2.75 3.3 2.75 6.44V12.77C2.75 15.91 3.3 16.46 6.44 16.46H17.55C20.69 16.46 21.24 15.91 21.24 12.77V11.88C21.24 11.47 21.58 11.13 21.99 11.13C22.4 11.13 22.74 11.47 22.74 11.88V12.77C22.75 16.76 21.54 17.97 17.56 17.97Z"
        fill="currentColor"
      />
      <Path
        d="M12 22.75C11.59 22.75 11.25 22.41 11.25 22V17.22C11.25 16.81 11.59 16.47 12 16.47C12.41 16.47 12.75 16.81 12.75 17.22V22C12.75 22.41 12.41 22.75 12 22.75Z"
        fill="currentColor"
      />
      <Path
        d="M22 13.75H2C1.59 13.75 1.25 13.41 1.25 13C1.25 12.59 1.59 12.25 2 12.25H22C22.41 12.25 22.75 12.59 22.75 13C22.75 13.41 22.41 13.75 22 13.75Z"
        fill="currentColor"
      />
      <Path
        d="M16.5 22.75H7.5C7.09 22.75 6.75 22.41 6.75 22C6.75 21.59 7.09 21.25 7.5 21.25H16.5C16.91 21.25 17.25 21.59 17.25 22C17.25 22.41 16.91 22.75 16.5 22.75Z"
        fill="currentColor"
      />
      <Path
        d="M17.8598 10.12H13.0998C11.5298 10.12 10.5098 9.10001 10.5098 7.53001V4.01001C10.5098 2.49001 11.7398 1.26001 13.2598 1.26001H17.8598C19.2898 1.26001 20.4498 2.42001 20.4498 3.85001V7.53001C20.4498 8.96001 19.2898 10.12 17.8598 10.12ZM13.2598 2.76001C12.5698 2.76001 12.0098 3.32001 12.0098 4.01001V7.53001C12.0098 8.51001 12.6298 8.62001 13.0998 8.62001H17.8598C18.4598 8.62001 18.9498 8.13001 18.9498 7.53001V3.85001C18.9498 3.25001 18.4598 2.76001 17.8598 2.76001H13.2598Z"
        fill="currentColor"
      />
      <Path
        d="M21.4502 8.86995C21.1302 8.86995 20.8002 8.75995 20.4802 8.52995L19.2702 7.67995C19.0702 7.53995 18.9502 7.30995 18.9502 7.06995V4.30995C18.9502 4.06995 19.0702 3.83995 19.2702 3.69995L20.4802 2.84995C21.0002 2.47995 21.5602 2.40995 22.0202 2.64995C22.4802 2.88995 22.7402 3.38995 22.7402 4.02995V7.35995C22.7402 7.99995 22.4802 8.49995 22.0202 8.73995C21.8502 8.82995 21.6602 8.86995 21.4502 8.86995ZM20.4502 6.67995L21.2502 7.23995V4.13995L20.4502 4.69995V6.67995Z"
        fill="currentColor"
      />
    </Svg>
  );
};

const MonitorRecorderTwotone = ({
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
        d="M22 11.89V12.78C22 16.34 21.11 17.22 17.56 17.22H6.44C2.89 17.22 2 16.33 2 12.78V6.44C2 2.89 2.89 2 6.44 2H8"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        opacity="0.4"
        d="M12 17.2202V22.0002"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        opacity="0.4"
        d="M2 13H22"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M7.5 22H16.5"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M17.8598 9.36977H13.0998C11.7198 9.36977 11.2598 8.44977 11.2598 7.52977V4.00977C11.2598 2.90977 12.1598 2.00977 13.2598 2.00977H17.8598C18.8798 2.00977 19.6998 2.82977 19.6998 3.84977V7.52977C19.6998 8.54977 18.8798 9.36977 17.8598 9.36977Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M20.9102 7.91998L19.7002 7.06998V4.30998L20.9102 3.45998C21.5102 3.04998 22.0002 3.29998 22.0002 4.02998V7.35998C22.0002 8.08998 21.5102 8.33998 20.9102 7.91998Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

const variants: IconVariants = {
  bold: MonitorRecorderBold,
  broken: MonitorRecorderBroken,
  bulk: MonitorRecorderBulk,
  linear: MonitorRecorderLinear,
  outline: MonitorRecorderOutline,
  twotone: MonitorRecorderTwotone,
};

export const MonitorRecorderIcon = ({
  variant = defaultOptions.variant,
  className,
  ...props
}: IconProps) => {
  const textClasses = useContext(TextClassContext);
  const Component = variants[variant];
  return <Component className={cn(textClasses, className)} {...props} />;
};

export default MonitorRecorderIcon;
