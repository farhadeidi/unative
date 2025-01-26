import { useContext } from "react";
import { G, Path, Svg } from "unative/lib/svg";
import { cn } from "unative/lib/utils";
import { TextClassContext } from "unative/ui/text";

import { iconDefaultOptions } from "../icons-configuration";
import type { IconProps, IconVariants } from "../types/icons-type";

const Export1Bold = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM17.25 12.33C17.25 12.74 16.91 13.08 16.5 13.08C16.09 13.08 15.75 12.74 15.75 12.33V9.31L8.03 17.03C7.88 17.18 7.69 17.25 7.5 17.25C7.31 17.25 7.12 17.18 6.97 17.03C6.68 16.74 6.68 16.26 6.97 15.97L14.69 8.25H11.67C11.26 8.25 10.92 7.91 10.92 7.5C10.92 7.09 11.26 6.75 11.67 6.75H16.5C16.91 6.75 17.25 7.09 17.25 7.5V12.33Z"
        fill="currentColor"
      />
    </Svg>
  );
};

const Export1Broken = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M13 11L21.2 2.80005"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M21.9992 6.8V2H17.1992"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M2 12.99V15C2 20 4 22 9 22H15C20 22 22 20 22 15V13"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M11 2H9C4 2 2 4 2 9"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

const Export1Bulk = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M22 10.7599C22 10.2899 21.62 9.8999 21.14 9.8999H2.86C2.38 9.8999 2 10.2799 2 10.7599C2 16.6499 6.11 20.7599 12 20.7599C17.89 20.7599 22 16.6399 22 10.7599Z"
        fill="currentColor"
      />
      <Path
        d="M12.5304 3.45992L15.3804 6.29992C15.6704 6.58992 15.6704 7.06992 15.3804 7.35992C15.0904 7.64992 14.6104 7.64992 14.3204 7.35992L12.7504 5.79992V15.3699C12.7504 15.7799 12.4104 16.1199 12.0004 16.1199C11.5904 16.1199 11.2504 15.7799 11.2504 15.3699V5.79992L9.69039 7.36992C9.40039 7.65992 8.92039 7.65992 8.63039 7.36992C8.48039 7.21992 8.40039 7.02992 8.40039 6.83992C8.40039 6.64992 8.47039 6.45992 8.62039 6.30992L11.4704 3.46992C11.7604 3.16992 12.2404 3.16992 12.5304 3.45992Z"
        fill="currentColor"
      />
    </Svg>
  );
};

const Export1Linear = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M9.31995 6.49994L11.8799 3.93994L14.4399 6.49994"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M11.88 14.18V4.01001"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M4 12C4 16.42 7 20 12 20C17 20 20 16.42 20 12"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

const Export1Outline = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M15.2605 22.25H8.74047C3.83047 22.25 1.73047 20.15 1.73047 15.24V15.11C1.73047 10.67 3.48047 8.53003 7.40047 8.16003C7.80047 8.13003 8.18047 8.43003 8.22047 8.84003C8.26047 9.25003 7.96047 9.62003 7.54047 9.66003C4.40047 9.95003 3.23047 11.43 3.23047 15.12V15.25C3.23047 19.32 4.67047 20.76 8.74047 20.76H15.2605C19.3305 20.76 20.7705 19.32 20.7705 15.25V15.12C20.7705 11.41 19.5805 9.93003 16.3805 9.66003C15.9705 9.62003 15.6605 9.26003 15.7005 8.85003C15.7405 8.44003 16.0905 8.13003 16.5105 8.17003C20.4905 8.51003 22.2705 10.66 22.2705 15.13V15.26C22.2705 20.15 20.1705 22.25 15.2605 22.25Z"
        fill="currentColor"
      />
      <Path
        d="M12 15.7501C11.59 15.7501 11.25 15.4101 11.25 15.0001V3.62012C11.25 3.21012 11.59 2.87012 12 2.87012C12.41 2.87012 12.75 3.21012 12.75 3.62012V15.0001C12.75 15.4101 12.41 15.7501 12 15.7501Z"
        fill="currentColor"
      />
      <Path
        d="M15.3498 6.59994C15.1598 6.59994 14.9698 6.52994 14.8198 6.37994L11.9998 3.55994L9.17984 6.37994C8.88984 6.66994 8.40984 6.66994 8.11984 6.37994C7.82984 6.08994 7.82984 5.60994 8.11984 5.31994L11.4698 1.96994C11.7598 1.67994 12.2398 1.67994 12.5298 1.96994L15.8798 5.31994C16.1698 5.60994 16.1698 6.08994 15.8798 6.37994C15.7398 6.52994 15.5398 6.59994 15.3498 6.59994Z"
        fill="currentColor"
      />
    </Svg>
  );
};

const Export1Twotone = ({ size = 24, className, ...props }: IconProps) => {
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
          d="M9.32031 6.50043L11.8803 3.94043L14.4403 6.50043"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeMiterlimit="10"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <Path
          d="M11.8809 14.1798V4.00977"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeMiterlimit="10"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </G>
      <Path
        d="M4 12C4 16.42 7 20 12 20C17 20 20 16.42 20 12"
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
  bold: Export1Bold,
  broken: Export1Broken,
  bulk: Export1Bulk,
  linear: Export1Linear,
  outline: Export1Outline,
  twotone: Export1Twotone,
};

export const Export1Icon = ({
  variant = iconDefaultOptions.variant,
  className,
  ...props
}: IconProps) => {
  const textClasses = useContext(TextClassContext);
  const Component = variants[variant];
  return <Component className={cn(textClasses, className)} {...props} />;
};
