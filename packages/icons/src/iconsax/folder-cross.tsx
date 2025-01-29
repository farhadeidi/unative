import { useContext } from "react";
import { cn } from "unative/lib/utils";
import { G, Path, Svg } from "unative/ui/svg";
import { TextClassContext } from "unative/ui/text";

import type { IconProps, IconVariants } from "../icon-options";
import { defaultOptions } from "../icon-options";

const FolderCrossBold = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M21.0169 7.99175C21.4148 8.55833 20.9405 9.25 20.2482 9.25H3C2.44772 9.25 2 8.80228 2 8.25V6.42C2 3.98 3.98 2 6.42 2H8.74C10.37 2 10.88 2.53 11.53 3.4L12.93 5.26C13.24 5.67 13.28 5.72 13.86 5.72H16.65C18.4546 5.72 20.0516 6.61709 21.0169 7.99175Z"
        fill="currentColor"
      />
      <Path
        d="M21.9834 11.7466C21.9815 11.1957 21.5343 10.75 20.9834 10.75L2.99998 10.7503C2.44771 10.7503 2 11.198 2 11.7503V16.6503C2 19.6003 4.4 22.0003 7.35 22.0003H16.65C19.6 22.0003 22 19.6003 22 16.6503L21.9834 11.7466ZM14.34 18.2803C14.19 18.4203 14 18.5003 13.81 18.5003C13.62 18.5003 13.42 18.4203 13.28 18.2803L12.04 17.0403L10.76 18.3203C10.62 18.4603 10.42 18.5403 10.23 18.5403C10.04 18.5403 9.85 18.4603 9.7 18.3203C9.41 18.0303 9.41 17.5503 9.7 17.2603L10.98 15.9803L9.74 14.7403C9.45 14.4503 9.45 13.9703 9.74 13.6803C10.04 13.3903 10.51 13.3903 10.8 13.6803L12.04 14.9203L13.24 13.7203C13.53 13.4303 14 13.4303 14.3 13.7203C14.59 14.0203 14.59 14.4903 14.3 14.7803L13.1 15.9803L14.34 17.2203C14.63 17.5103 14.63 17.9903 14.34 18.2803Z"
        fill="currentColor"
      />
    </Svg>
  );
};

const FolderCrossBroken = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M13.8095 15.7299L10.2695 12.1899"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M13.7705 12.23L10.2305 15.77"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M2 13.02V7C2 3 3 2 7 2H8.5C10 2 10.33 2.44 10.9 3.2L12.4 5.2C12.78 5.7 13 6 14 6H17C21 6 22 7 22 11"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M22 14.99V17C22 21 21 22 17 22H7C3 22 2 21 2 17"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

const FolderCrossBulk = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M21.8709 9.44H2.13086V6.42C2.13086 3.98 4.11086 2 6.55086 2H8.88086C10.5109 2 11.0209 2.53 11.6709 3.4L13.0709 5.26C13.3809 5.67 13.4209 5.73 14.0009 5.73H16.7909C19.1609 5.72 21.1809 7.28 21.8709 9.44Z"
        fill="currentColor"
      />
      <Path
        d="M21.99 10.8399C21.97 10.3599 21.89 9.88994 21.74 9.43994H2V16.6499C2 19.5999 4.4 21.9999 7.35 21.9999H16.65C19.6 21.9999 22 19.5999 22 16.6499V11.0699C22 10.9999 22 10.9099 21.99 10.8399ZM14.34 17.7799C14.19 17.9199 14 17.9999 13.81 17.9999C13.62 17.9999 13.43 17.9299 13.28 17.7799L12.04 16.5399L10.76 17.8199C10.61 17.9699 10.42 18.0399 10.23 18.0399C10.04 18.0399 9.85 17.9699 9.7 17.8199C9.41 17.5299 9.41 17.0499 9.7 16.7599L10.98 15.4799L9.74 14.2399C9.45 13.9499 9.45 13.4699 9.74 13.1799C10.03 12.8899 10.51 12.8899 10.8 13.1799L12.04 14.4199L13.24 13.2199C13.53 12.9299 14.01 12.9299 14.3 13.2199C14.59 13.5099 14.59 13.9899 14.3 14.2799L13.1 15.4799L14.34 16.7199C14.63 17.0099 14.63 17.4899 14.34 17.7799Z"
        fill="currentColor"
      />
    </Svg>
  );
};

const FolderCrossLinear = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M13.81 15.7299L10.27 12.1899"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M13.77 12.23L10.23 15.77"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M22 11V17C22 21 21 22 17 22H7C3 22 2 21 2 17V7C2 3 3 2 7 2H8.5C10 2 10.33 2.44 10.9 3.2L12.4 5.2C12.78 5.7 13 6 14 6H17C21 6 22 7 22 11Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeMiterlimit="10"
      />
    </Svg>
  );
};

const FolderCrossOutline = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M13.8109 16.4799C13.6209 16.4799 13.4309 16.4099 13.2809 16.2599L9.74094 12.7199C9.45094 12.4299 9.45094 11.9499 9.74094 11.6599C10.0309 11.3699 10.5109 11.3699 10.8009 11.6599L14.3409 15.1999C14.6309 15.4899 14.6309 15.9699 14.3409 16.2599C14.1909 16.3999 14.0009 16.4799 13.8109 16.4799Z"
        fill="currentColor"
      />
      <Path
        d="M10.2299 16.5199C10.0399 16.5199 9.84992 16.4499 9.69992 16.2999C9.40992 16.0099 9.40992 15.5299 9.69992 15.2399L13.2399 11.6999C13.5299 11.4099 14.0099 11.4099 14.2999 11.6999C14.5899 11.9899 14.5899 12.4699 14.2999 12.7599L10.7599 16.2999C10.6199 16.4399 10.4199 16.5199 10.2299 16.5199Z"
        fill="currentColor"
      />
      <Path
        d="M17 22.75H7C2.59 22.75 1.25 21.41 1.25 17V7C1.25 2.59 2.59 1.25 7 1.25H8.5C10.25 1.25 10.8 1.82 11.5 2.75L13 4.75C13.33 5.19 13.38 5.25 14 5.25H17C21.41 5.25 22.75 6.59 22.75 11V17C22.75 21.41 21.41 22.75 17 22.75ZM7 2.75C3.43 2.75 2.75 3.43 2.75 7V17C2.75 20.57 3.43 21.25 7 21.25H17C20.57 21.25 21.25 20.57 21.25 17V11C21.25 7.43 20.57 6.75 17 6.75H14C12.72 6.75 12.3 6.31 11.8 5.65L10.3 3.65C9.78 2.96 9.63 2.75 8.5 2.75H7Z"
        fill="currentColor"
      />
    </Svg>
  );
};

const FolderCrossTwotone = ({ size = 24, className, ...props }: IconProps) => {
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
          d="M13.8095 15.7304L10.2695 12.1904"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeMiterlimit="10"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <Path
          d="M13.7705 12.2305L10.2305 15.7705"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeMiterlimit="10"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </G>
      <Path
        d="M22 11V17C22 21 21 22 17 22H7C3 22 2 21 2 17V7C2 3 3 2 7 2H8.5C10 2 10.33 2.44 10.9 3.2L12.4 5.2C12.78 5.7 13 6 14 6H17C21 6 22 7 22 11Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeMiterlimit="10"
      />
    </Svg>
  );
};

const variants: IconVariants = {
  bold: FolderCrossBold,
  broken: FolderCrossBroken,
  bulk: FolderCrossBulk,
  linear: FolderCrossLinear,
  outline: FolderCrossOutline,
  twotone: FolderCrossTwotone,
};

export const FolderCrossIcon = ({
  variant = defaultOptions.variant,
  className,
  ...props
}: IconProps) => {
  const textClasses = useContext(TextClassContext);
  const Component = variants[variant];
  return <Component className={cn(textClasses, className)} {...props} />;
};

export default FolderCrossIcon;
