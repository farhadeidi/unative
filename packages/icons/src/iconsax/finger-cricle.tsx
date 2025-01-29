import { useContext } from "react";
import { cn } from "unative/lib/utils";
import { Path, Svg } from "unative/ui/svg";
import { TextClassContext } from "unative/ui/text";

import type { IconProps, IconVariants } from "../icon-options";
import { defaultOptions } from "../icon-options";

const FingerCricleBold = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M12 7.94922C10.21 7.94922 8.75 9.40922 8.75 11.1992V12.7992C8.75 14.5892 10.21 16.0492 12 16.0492C13.79 16.0492 15.25 14.5892 15.25 12.7992V11.1992C15.25 9.40922 13.79 7.94922 12 7.94922ZM12.9 13.2392C12.9 13.7392 12.5 14.1392 12 14.1392C11.5 14.1392 11.1 13.7392 11.1 13.2392V10.7692C11.1 10.2792 11.5 9.86922 12 9.86922C12.5 9.86922 12.9 10.2692 12.9 10.7692V13.2392Z"
        fill="currentColor"
      />
      <Path
        d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM16.75 12.8C16.75 15.42 14.62 17.55 12 17.55C9.38 17.55 7.25 15.42 7.25 12.8V11.2C7.25 8.58 9.38 6.45 12 6.45C14.62 6.45 16.75 8.58 16.75 11.2V12.8Z"
        fill="currentColor"
      />
    </Svg>
  );
};

const FingerCricleBroken = ({ size = 24, className, ...props }: IconProps) => {
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
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M11.9996 9.12C12.9096 9.12 13.6496 9.86002 13.6496 10.77V13.24C13.6496 14.15 12.9096 14.89 11.9996 14.89C11.0896 14.89 10.3496 14.15 10.3496 13.24"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <Path
        d="M16.98 13.4699C16.78 16.0499 14.62 18.0699 12 18.0699C9.24 18.0699 7 15.8299 7 13.0699V10.9299C7 8.16993 9.24 5.92993 12 5.92993C14.59 5.92993 16.72 7.89992 16.97 10.4199"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </Svg>
  );
};

const FingerCricleBulk = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M11.9996 9.87012C11.5096 9.87012 11.0996 10.2701 11.0996 10.7701V13.2401C11.0996 13.7401 11.4996 14.1401 11.9996 14.1401C12.4996 14.1401 12.8996 13.7401 12.8996 13.2401V10.7701C12.8996 10.2701 12.4896 9.87012 11.9996 9.87012Z"
        fill="currentColor"
      />
      <Path
        d="M12 17.5499C9.38 17.5499 7.25 15.4199 7.25 12.7999V11.2C7.25 8.57995 9.38 6.44995 12 6.44995C14.62 6.44995 16.75 8.57995 16.75 11.2V12.7999C16.75 15.4199 14.62 17.5499 12 17.5499ZM12 7.94995C10.21 7.94995 8.75 9.40995 8.75 11.2V12.7999C8.75 14.5899 10.21 16.0499 12 16.0499C13.79 16.0499 15.25 14.5899 15.25 12.7999V11.2C15.25 9.40995 13.79 7.94995 12 7.94995Z"
        fill="currentColor"
      />
    </Svg>
  );
};

const FingerCricleLinear = ({ size = 24, className, ...props }: IconProps) => {
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
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M12 14.88C11.09 14.88 10.35 14.14 10.35 13.23V10.76C10.35 9.85001 11.09 9.10999 12 9.10999C12.91 9.10999 13.65 9.85001 13.65 10.76V13.23C13.65 14.14 12.91 14.88 12 14.88Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <Path
        d="M16.98 13.4699C16.78 16.0499 14.62 18.0699 12 18.0699C9.24 18.0699 7 15.8299 7 13.0699V10.9299C7 8.16993 9.24 5.92993 12 5.92993C14.59 5.92993 16.72 7.89992 16.97 10.4199"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </Svg>
  );
};

const FingerCricleOutline = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M11.9996 15.6299C10.6796 15.6299 9.59961 14.5499 9.59961 13.2299V10.7599C9.59961 9.43989 10.6796 8.35986 11.9996 8.35986C13.3196 8.35986 14.3996 9.43989 14.3996 10.7599V13.2299C14.3996 14.5599 13.3196 15.6299 11.9996 15.6299ZM11.9996 9.86987C11.5096 9.86987 11.0996 10.2699 11.0996 10.7699V13.2399C11.0996 13.7399 11.4996 14.1399 11.9996 14.1399C12.4996 14.1399 12.8996 13.7399 12.8996 13.2399V10.7699C12.8996 10.2699 12.4896 9.86987 11.9996 9.86987Z"
        fill="currentColor"
      />
      <Path
        d="M12 18.8199C8.83 18.8199 6.25 16.2399 6.25 13.0699V10.9299C6.25 7.75993 8.83 5.17993 12 5.17993C14.96 5.17993 17.42 7.39997 17.72 10.34C17.76 10.75 17.46 11.1199 17.05 11.1599C16.64 11.2099 16.27 10.8999 16.23 10.4899C16.01 8.31993 14.19 6.67993 12 6.67993C9.66 6.67993 7.75 8.58993 7.75 10.9299V13.0699C7.75 15.4099 9.66 17.3199 12 17.3199C14.2 17.3199 16.06 15.5999 16.24 13.4099C16.27 12.9999 16.63 12.6899 17.05 12.7199C17.46 12.7499 17.77 13.11 17.74 13.53C17.5 16.5 14.98 18.8199 12 18.8199Z"
        fill="currentColor"
      />
    </Svg>
  );
};

const FingerCricleTwotone = ({ size = 24, className, ...props }: IconProps) => {
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
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        opacity="0.4"
        d="M11.9996 14.8799C11.0896 14.8799 10.3496 14.1399 10.3496 13.2299V10.7599C10.3496 9.84989 11.0896 9.10986 11.9996 9.10986C12.9096 9.10986 13.6496 9.84989 13.6496 10.7599V13.2299C13.6496 14.1399 12.9096 14.8799 11.9996 14.8799Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <Path
        opacity="0.4"
        d="M16.98 13.4702C16.78 16.0502 14.62 18.0702 12 18.0702C9.24 18.0702 7 15.8302 7 13.0702V10.9302C7 8.17018 9.24 5.93018 12 5.93018C14.59 5.93018 16.72 7.90017 16.97 10.4202"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </Svg>
  );
};

const variants: IconVariants = {
  bold: FingerCricleBold,
  broken: FingerCricleBroken,
  bulk: FingerCricleBulk,
  linear: FingerCricleLinear,
  outline: FingerCricleOutline,
  twotone: FingerCricleTwotone,
};

export const FingerCricleIcon = ({
  variant = defaultOptions.variant,
  className,
  ...props
}: IconProps) => {
  const textClasses = useContext(TextClassContext);
  const Component = variants[variant];
  return <Component className={cn(textClasses, className)} {...props} />;
};

export default FingerCricleIcon;
