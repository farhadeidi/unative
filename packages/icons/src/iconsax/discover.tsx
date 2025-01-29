import { useContext } from "react";
import { cn } from "unative/lib/utils";
import { Path, Svg } from "unative/ui/svg";
import { TextClassContext } from "unative/ui/text";

import type { IconProps, IconVariants } from "../icon-options";
import { defaultOptions } from "../icon-options";

const DiscoverBold = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M20.9808 3.02084C20.1108 2.15084 18.8808 1.81084 17.6908 2.11084L7.89084 4.56084C6.24084 4.97084 4.97084 6.25084 4.56084 7.89084L2.11084 17.7008C1.81084 18.8908 2.15084 20.1208 3.02084 20.9908C3.68084 21.6408 4.55084 22.0008 5.45084 22.0008C5.73084 22.0008 6.02084 21.9708 6.30084 21.8908L16.1108 19.4408C17.7508 19.0308 19.0308 17.7608 19.4408 16.1108L21.8908 6.30084C22.1908 5.11084 21.8508 3.88084 20.9808 3.02084ZM12.0008 15.8808C9.86084 15.8808 8.12084 14.1408 8.12084 12.0008C8.12084 9.86084 9.86084 8.12084 12.0008 8.12084C14.1408 8.12084 15.8808 9.86084 15.8808 12.0008C15.8808 14.1408 14.1408 15.8808 12.0008 15.8808Z"
        fill="currentColor"
      />
    </Svg>
  );
};

const DiscoverBroken = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M14.71 14.03C15.51 13.07 16 11.84 16 10.5C16 9.13 14.87 8 13.5 8C10.47 8 8 10.48 8 13.5C8 14.87 9.12 16 10.5 16"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M4 6C2.75 7.67 2 9.75 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2C10.57 2 9.2 2.3 7.97 2.85"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

const DiscoverBulk = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M20.9808 3.0201C20.1108 2.1501 18.8808 1.8101 17.6908 2.1101L7.89084 4.5601C6.24084 4.9701 4.97084 6.2501 4.56084 7.8901L2.11084 17.7001C1.81084 18.8901 2.15084 20.1201 3.02084 20.9901C3.68084 21.6401 4.55084 22.0001 5.45084 22.0001C5.73084 22.0001 6.02084 21.9701 6.30084 21.8901L16.1108 19.4401C17.7508 19.0301 19.0308 17.7601 19.4408 16.1101L21.8908 6.3001C22.1908 5.1101 21.8508 3.8801 20.9808 3.0201Z"
        fill="currentColor"
      />
      <Path
        d="M11.9991 15.8801C14.142 15.8801 15.8791 14.143 15.8791 12.0001C15.8791 9.85725 14.142 8.12012 11.9991 8.12012C9.85628 8.12012 8.11914 9.85725 8.11914 12.0001C8.11914 14.143 9.85628 15.8801 11.9991 15.8801Z"
        fill="currentColor"
      />
    </Svg>
  );
};

const DiscoverLinear = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M12 22C17.5 22 22 17.5 22 12C22 6.5 17.5 2 12 2C6.5 2 2 6.5 2 12C2 17.5 6.5 22 12 22Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeMiterlimit="10"
      />
      <Path
        d="M13.5 8C10.47 8 8 10.48 8 13.5C8 14.87 9.12 16 10.5 16C13.52 16 16 13.52 16 10.5C16 9.13 14.87 8 13.5 8Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

const DiscoverOutline = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M10.5 16.75C8.71 16.75 7.25 15.29 7.25 13.5C7.25 10.05 10.05 7.25 13.5 7.25C15.29 7.25 16.75 8.71 16.75 10.5C16.75 13.95 13.95 16.75 10.5 16.75ZM13.5 8.75C10.88 8.75 8.75 10.88 8.75 13.5C8.75 14.46 9.54 15.25 10.5 15.25C13.12 15.25 15.25 13.12 15.25 10.5C15.25 9.54 14.46 8.75 13.5 8.75Z"
        fill="currentColor"
      />
    </Svg>
  );
};

const DiscoverTwotone = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M12 22C17.5 22 22 17.5 22 12C22 6.5 17.5 2 12 2C6.5 2 2 6.5 2 12C2 17.5 6.5 22 12 22Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeMiterlimit="10"
      />
      <Path
        opacity="0.4"
        d="M13.5 8C10.47 8 8 10.48 8 13.5C8 14.87 9.12 16 10.5 16C13.52 16 16 13.52 16 10.5C16 9.13 14.87 8 13.5 8Z"
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
  bold: DiscoverBold,
  broken: DiscoverBroken,
  bulk: DiscoverBulk,
  linear: DiscoverLinear,
  outline: DiscoverOutline,
  twotone: DiscoverTwotone,
};

export const DiscoverIcon = ({
  variant = defaultOptions.variant,
  className,
  ...props
}: IconProps) => {
  const textClasses = useContext(TextClassContext);
  const Component = variants[variant];
  return <Component className={cn(textClasses, className)} {...props} />;
};

export default DiscoverIcon;
