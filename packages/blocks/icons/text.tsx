import { useContext } from "react";
import { Path, Svg } from "unative/lib/svg";
import { cn } from "unative/lib/utils";
import { TextClassContext } from "unative/ui/text";

import type { IconProps, IconVariants } from "../types/icons-type";

const TextBold = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M20.95 4.13C20.66 3.71 20.29 3.34 19.87 3.05C18.92 2.36 17.68 2 16.19 2H7.81C7.61 2 7.41 2.01 7.22 2.03C3.94 2.24 2 4.37 2 7.81V16.19C2 17.68 2.36 18.92 3.05 19.87C3.34 20.29 3.71 20.66 4.13 20.95C4.95 21.55 5.99 21.9 7.22 21.98C7.41 21.99 7.61 22 7.81 22H16.19C19.83 22 22 19.83 22 16.19V7.81C22 6.32 21.64 5.08 20.95 4.13ZM18.75 8.9C18.75 9.31 18.41 9.65 18 9.65C17.59 9.65 17.25 9.31 17.25 8.9V7.72C17.25 7.4 16.99 7.14 16.67 7.14H12.75V16.86H14.53C14.94 16.86 15.28 17.2 15.28 17.61C15.28 18.02 14.94 18.36 14.53 18.36H9.47C9.06 18.36 8.72 18.02 8.72 17.61C8.72 17.2 9.06 16.86 9.47 16.86H11.25V7.14H7.33C7.01 7.14 6.75 7.4 6.75 7.72V8.9C6.75 9.31 6.41 9.65 6 9.65C5.59 9.65 5.25 9.31 5.25 8.9V7.72C5.25 6.57 6.18 5.64 7.33 5.64H16.66C17.81 5.64 18.74 6.57 18.74 7.72V8.9H18.75Z"
        fill="currentColor"
      />
    </Svg>
  );
};

const TextBroken = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M2.66992 7.17003V5.35003C2.66992 4.20003 3.59992 3.28003 4.73992 3.28003H19.2599C20.4099 3.28003 21.3299 4.21003 21.3299 5.35003V7.17003"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M12 13.0001V4.11011"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M12 20.72V16.97"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M8.06055 20.72H15.9405"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

const TextBulk = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M22 7.81V16.19C22 19.83 19.83 22 16.19 22H7.81C7.61 22 7.41 21.99 7.22 21.98C5.99 21.9 4.95 21.55 4.13 20.95C3.71 20.66 3.34 20.29 3.05 19.87C2.36 18.92 2 17.68 2 16.19V7.81C2 4.37 3.94 2.24 7.22 2.03C7.41 2.01 7.61 2 7.81 2H16.19C17.68 2 18.92 2.36 19.87 3.05C20.29 3.34 20.66 3.71 20.95 4.13C21.64 5.08 22 6.32 22 7.81Z"
        fill="currentColor"
      />
      <Path
        d="M16.67 5.64014H7.33C6.18 5.64014 5.25 6.57014 5.25 7.72014V8.90014C5.25 9.31014 5.59 9.65014 6 9.65014C6.41 9.65014 6.75 9.31014 6.75 8.90014V7.72014C6.75 7.40014 7.01 7.14014 7.33 7.14014H11.25V16.8601H9.47C9.06 16.8601 8.72 17.2001 8.72 17.6101C8.72 18.0201 9.06 18.3601 9.47 18.3601H14.54C14.95 18.3601 15.29 18.0201 15.29 17.6101C15.29 17.2001 14.95 16.8601 14.54 16.8601H12.76V7.14014H16.68C17 7.14014 17.26 7.40014 17.26 7.72014V8.90014C17.26 9.31014 17.6 9.65014 18.01 9.65014C18.42 9.65014 18.76 9.31014 18.76 8.90014V7.72014C18.75 6.58014 17.82 5.64014 16.67 5.64014Z"
        fill="currentColor"
      />
    </Svg>
  );
};

const TextLinear = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M2.66992 7.17003V5.35003C2.66992 4.20003 3.59992 3.28003 4.73992 3.28003H19.2599C20.4099 3.28003 21.3299 4.21003 21.3299 5.35003V7.17003"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M12 20.7201V4.11011"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M8.06006 20.72H15.9401"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

const TextOutline = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M21.3299 7.91979C20.9199 7.91979 20.5799 7.57979 20.5799 7.16979V5.34979C20.5799 4.61979 19.9899 4.02979 19.2599 4.02979H4.73992C4.00992 4.02979 3.41992 4.61979 3.41992 5.34979V7.17978C3.41992 7.58978 3.07992 7.92978 2.66992 7.92978C2.25992 7.92978 1.91992 7.58979 1.91992 7.16979V5.34979C1.91992 3.78979 3.18992 2.52979 4.73992 2.52979H19.2599C20.8199 2.52979 22.0799 3.79979 22.0799 5.34979V7.17978C22.0799 7.58978 21.7499 7.91979 21.3299 7.91979Z"
        fill="currentColor"
      />
      <Path
        d="M12 21.4699C11.59 21.4699 11.25 21.1299 11.25 20.7199V4.10986C11.25 3.69986 11.59 3.35986 12 3.35986C12.41 3.35986 12.75 3.69986 12.75 4.10986V20.7199C12.75 21.1399 12.41 21.4699 12 21.4699Z"
        fill="currentColor"
      />
      <Path
        d="M15.9405 21.4702H8.06055C7.65055 21.4702 7.31055 21.1302 7.31055 20.7202C7.31055 20.3102 7.65055 19.9702 8.06055 19.9702H15.9405C16.3505 19.9702 16.6905 20.3102 16.6905 20.7202C16.6905 21.1302 16.3505 21.4702 15.9405 21.4702Z"
        fill="currentColor"
      />
    </Svg>
  );
};

const TextTwotone = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M2.66992 7.16979V5.34979C2.66992 4.19979 3.59992 3.27979 4.73992 3.27979H19.2599C20.4099 3.27979 21.3299 4.20979 21.3299 5.34979V7.16979"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        opacity="0.4"
        d="M12 20.7199V4.10986"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M8.06055 20.7202H15.9405"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

const variants: IconVariants = {
  bold: TextBold,
  broken: TextBroken,
  bulk: TextBulk,
  linear: TextLinear,
  outline: TextOutline,
  twotone: TextTwotone,
};

export const TextIcon = ({
  variant = "linear",
  className,
  ...props
}: IconProps) => {
  const textClasses = useContext(TextClassContext);
  const Component = variants[variant];
  return <Component className={cn(textClasses, className)} {...props} />;
};
