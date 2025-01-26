import { useContext } from "react";
import { Path, Svg } from "unative/lib/svg";
import { cn } from "unative/lib/utils";
import { TextClassContext } from "unative/ui/text";

import { iconDefaultOptions } from "../icons-configuration";
import type { IconProps, IconVariants } from "../types/icons-type";

const TagUserBold = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M18 2H6C4.34 2 3 3.33 3 4.97V15.88C3 17.52 4.34 18.86 6 18.86H6.76C7.55 18.86 8.32 19.17 8.88 19.73L10.59 21.42C11.37 22.19 12.63 22.19 13.41 21.42L15.12 19.73C15.68 19.17 16.45 18.86 17.24 18.86H18C19.66 18.86 21 17.52 21 15.88V4.97C21 3.33 19.66 2 18 2ZM12 5.55C13.08 5.55 13.95 6.43 13.95 7.5C13.95 8.56 13.11 9.41 12.07 9.45C12.03 9.45 11.97 9.45 11.92 9.45C10.87 9.41 10.04 8.56 10.04 7.5C10.05 6.43 10.92 5.55 12 5.55ZM14.75 14.69C13.24 15.7 10.76 15.7 9.25 14.69C7.92 13.81 7.92 12.35 9.25 11.46C10.77 10.45 13.25 10.45 14.75 11.46C16.08 12.35 16.08 13.8 14.75 14.69Z"
        fill="currentColor"
      />
    </Svg>
  );
};

const TagUserBroken = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M21 8.95V15.88C21 17.52 19.66 18.85 18 18.85H17.24C16.44 18.85 15.68 19.16 15.12 19.72L13.41 21.41C12.63 22.18 11.36 22.18 10.58 21.41L8.87 19.72C8.31 19.16 7.54 18.85 6.75 18.85H6C4.34 18.85 3 17.52 3 15.88V4.97C3 3.33 4.34 2 6 2H18C19.66 2 21 3.33 21 4.97"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M12.0691 8.95005C12.0291 8.95005 11.9691 8.95005 11.9191 8.95005C10.8691 8.91005 10.0391 8.06005 10.0391 7.00005C10.0391 5.92005 10.9091 5.05005 11.9891 5.05005C13.0691 5.05005 13.9391 5.93005 13.9391 7.00005C13.9491 8.06005 13.1191 8.92005 12.0691 8.95005Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M9.25 15.1901C10.76 16.2001 13.24 16.2001 14.75 15.1901C16.08 14.3001 16.08 12.8501 14.75 11.9601C13.24 10.9501 10.76 10.9501 9.25 11.9601"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

const TagUserBulk = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M12.0691 8.95005C12.0291 8.95005 11.9691 8.95005 11.9191 8.95005C10.8691 8.91005 10.0391 8.06005 10.0391 7.00005C10.0391 5.92005 10.9091 5.05005 11.9891 5.05005C13.0691 5.05005 13.9391 5.93005 13.9391 7.00005C13.9491 8.06005 13.1191 8.92005 12.0691 8.95005Z"
        fill="currentColor"
      />
      <Path
        d="M9.24945 11.96C7.91945 12.85 7.91945 14.3 9.24945 15.19C10.7595 16.2 13.2395 16.2 14.7495 15.19C16.0795 14.3 16.0795 12.85 14.7495 11.96C13.2395 10.96 10.7695 10.96 9.24945 11.96Z"
        fill="currentColor"
      />
      <Path
        opacity="0.4"
        d="M18 2H6C4.34 2 3 3.33 3 4.97V15.88C3 17.52 4.34 18.85 6 18.85H6.76C7.56 18.85 8.32 19.16 8.88 19.72L10.59 21.41C11.37 22.18 12.64 22.18 13.42 21.41L15.13 19.72C15.69 19.16 16.46 18.85 17.25 18.85H18C19.66 18.85 21 17.52 21 15.88V4.97C21 3.33 19.66 2 18 2ZM12 5.05C13.08 5.05 13.95 5.93 13.95 7C13.95 8.06 13.11 8.91 12.07 8.95C12.03 8.95 11.97 8.95 11.92 8.95C10.87 8.91 10.04 8.06 10.04 7C10.05 5.93 10.92 5.05 12 5.05ZM14.75 15.19C13.24 16.2 10.76 16.2 9.25 15.19C7.92 14.31 7.92 12.85 9.25 11.96C10.77 10.95 13.25 10.95 14.75 11.96C16.08 12.85 16.08 14.3 14.75 15.19Z"
        fill="currentColor"
      />
    </Svg>
  );
};

const TagUserLinear = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M18 18.86H17.24C16.44 18.86 15.68 19.17 15.12 19.73L13.41 21.42C12.63 22.19 11.36 22.19 10.58 21.42L8.87 19.73C8.31 19.17 7.54 18.86 6.75 18.86H6C4.34 18.86 3 17.53 3 15.89V4.97C3 3.33 4.34 2 6 2H18C19.66 2 21 3.33 21 4.97V15.88C21 17.52 19.66 18.86 18 18.86Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M12.0699 8.95005C12.0299 8.95005 11.9699 8.95005 11.9199 8.95005C10.8699 8.91005 10.0399 8.06005 10.0399 7.00005C10.0399 5.92005 10.9099 5.05005 11.9899 5.05005C13.0699 5.05005 13.9399 5.93005 13.9399 7.00005C13.9499 8.06005 13.1199 8.92005 12.0699 8.95005Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M9.24994 11.9601C7.91994 12.8501 7.91994 14.3001 9.24994 15.1901C10.7599 16.2001 13.2399 16.2001 14.7499 15.1901C16.0799 14.3001 16.0799 12.8501 14.7499 11.9601C13.2399 10.9601 10.7699 10.9601 9.24994 11.9601Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

const TagUserOutline = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M12 22.75C11.3 22.75 10.59 22.48 10.06 21.95L8.34998 20.26C7.92998 19.84 7.35001 19.61 6.76001 19.61H6C3.93 19.61 2.25 17.94 2.25 15.89V4.97C2.25 2.92 3.93 1.25 6 1.25H18C20.07 1.25 21.75 2.92 21.75 4.97V15.88C21.75 17.93 20.07 19.6 18 19.6H17.24C16.65 19.6 16.07 19.84 15.65 20.25L13.94 21.94C13.41 22.48 12.7 22.75 12 22.75ZM6 2.75C4.76 2.75 3.75 3.75 3.75 4.97V15.88C3.75 17.11 4.76 18.1 6 18.1H6.76001C7.75001 18.1 8.70997 18.5 9.40997 19.19L11.12 20.88C11.61 21.36 12.4 21.36 12.89 20.88L14.6 19.19C15.3 18.5 16.26 18.1 17.25 18.1H18C19.24 18.1 20.25 17.1 20.25 15.88V4.97C20.25 3.74 19.24 2.75 18 2.75H6Z"
        fill="currentColor"
      />
      <Path
        d="M12.0708 9.70005C12.0508 9.70005 12.0208 9.70005 12.0008 9.70005C11.9708 9.70005 11.9308 9.70005 11.9008 9.70005C10.4408 9.65005 9.30078 8.47005 9.30078 7.00005C9.30078 5.51005 10.5108 4.30005 12.0008 4.30005C13.4908 4.30005 14.7008 5.51005 14.7008 7.00005C14.6908 8.47005 13.5508 9.65005 12.0908 9.70005C12.0908 9.70005 12.0808 9.70005 12.0708 9.70005ZM12.0008 5.80005C11.3408 5.80005 10.8008 6.34005 10.8008 7.00005C10.8008 7.65005 11.3108 8.18005 11.9508 8.20005C11.9508 8.19005 12.0108 8.19005 12.0808 8.20005C12.7108 8.16005 13.2008 7.64005 13.2008 7.00005C13.2008 6.34005 12.6608 5.80005 12.0008 5.80005Z"
        fill="currentColor"
      />
      <Path
        d="M12 16.7001C10.86 16.7001 9.72002 16.4001 8.83002 15.8101C7.99002 15.2501 7.5 14.4401 7.5 13.5801C7.5 12.7201 7.98002 11.9001 8.83002 11.3401C10.61 10.1601 13.39 10.1601 15.16 11.3401C16 11.9001 16.49 12.7201 16.49 13.5701C16.49 14.4301 16.01 15.2401 15.16 15.8101C14.28 16.4101 13.14 16.7001 12 16.7001ZM9.65997 12.5901C9.22997 12.8801 9 13.2301 9 13.5801C9 13.9301 9.23997 14.2801 9.65997 14.5701C10.93 15.4201 13.06 15.4201 14.33 14.5701C14.76 14.2801 15 13.9301 14.99 13.5801C14.99 13.2301 14.75 12.8801 14.33 12.5901C13.07 11.7401 10.93 11.7401 9.65997 12.5901Z"
        fill="currentColor"
      />
    </Svg>
  );
};

const TagUserTwotone = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M18 18.86H17.24C16.44 18.86 15.68 19.17 15.12 19.73L13.41 21.42C12.63 22.19 11.36 22.19 10.58 21.42L8.87 19.73C8.31 19.17 7.54 18.86 6.75 18.86H6C4.34 18.86 3 17.53 3 15.89V4.97C3 3.33 4.34 2 6 2H18C19.66 2 21 3.33 21 4.97V15.88C21 17.52 19.66 18.86 18 18.86Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        opacity="0.4"
        d="M12.0691 8.9498C12.0291 8.9498 11.9691 8.9498 11.9191 8.9498C10.8691 8.9098 10.0391 8.0598 10.0391 6.9998C10.0391 5.9198 10.9091 5.0498 11.9891 5.0498C13.0691 5.0498 13.9391 5.9298 13.9391 6.9998C13.9491 8.0598 13.1191 8.9198 12.0691 8.9498Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        opacity="0.4"
        d="M9.24945 11.96C7.91945 12.85 7.91945 14.3 9.24945 15.19C10.7595 16.2 13.2395 16.2 14.7495 15.19C16.0795 14.3 16.0795 12.85 14.7495 11.96C13.2395 10.96 10.7695 10.96 9.24945 11.96Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

const variants: IconVariants = {
  bold: TagUserBold,
  broken: TagUserBroken,
  bulk: TagUserBulk,
  linear: TagUserLinear,
  outline: TagUserOutline,
  twotone: TagUserTwotone,
};

export const TagUserIcon = ({
  variant = iconDefaultOptions.variant,
  className,
  ...props
}: IconProps) => {
  const textClasses = useContext(TextClassContext);
  const Component = variants[variant];
  return <Component className={cn(textClasses, className)} {...props} />;
};
