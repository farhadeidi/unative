import { useContext } from "react";
import { Path, Svg } from "unative/lib/svg";
import { cn } from "unative/lib/utils";
import { TextClassContext } from "unative/ui/text";

import type { IconProps, IconVariants } from "../icon-options";
import { defaultOptions } from "../icon-options";

const DocumentCodeBold = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M16 2H8C4.5 2 3 4 3 7V17C3 20 4.5 22 8 22H16C19.5 22 21 20 21 17V7C21 4 19.5 2 16 2ZM10.53 16.47C10.82 16.76 10.82 17.24 10.53 17.53C10.38 17.68 10.19 17.75 10 17.75C9.81 17.75 9.62 17.68 9.47 17.53L7.47 15.53C7.18 15.24 7.18 14.76 7.47 14.47L9.47 12.47C9.76 12.18 10.24 12.18 10.53 12.47C10.82 12.76 10.82 13.24 10.53 13.53L9.06 15L10.53 16.47ZM16.53 15.53L14.53 17.53C14.38 17.68 14.19 17.75 14 17.75C13.81 17.75 13.62 17.68 13.47 17.53C13.18 17.24 13.18 16.76 13.47 16.47L14.94 15L13.47 13.53C13.18 13.24 13.18 12.76 13.47 12.47C13.76 12.18 14.24 12.18 14.53 12.47L16.53 14.47C16.82 14.76 16.82 15.24 16.53 15.53ZM18.5 9.25H16.5C14.98 9.25 13.75 8.02 13.75 6.5V4.5C13.75 4.09 14.09 3.75 14.5 3.75C14.91 3.75 15.25 4.09 15.25 4.5V6.5C15.25 7.19 15.81 7.75 16.5 7.75H18.5C18.91 7.75 19.25 8.09 19.25 8.5C19.25 8.91 18.91 9.25 18.5 9.25Z"
        fill="currentColor"
      />
    </Svg>
  );
};

const DocumentCodeBroken = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M3 7C3 4 4.5 2 8 2H16C19.5 2 21 4 21 7V17C21 20 19.5 22 16 22H8C4.5 22 3 20 3 17V11.02"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M14.5 4.5V6.5C14.5 7.6 15.4 8.5 16.5 8.5H18.5"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M10 13L8 15L10 17"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M14 13L16 15L14 17"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

const DocumentCodeBulk = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M21 7V17C21 20 19.5 22 16 22H8C4.5 22 3 20 3 17V7C3 4 4.5 2 8 2H16C19.5 2 21 4 21 7Z"
        fill="currentColor"
      />
      <Path
        d="M18.5 9.25H16.5C14.98 9.25 13.75 8.02 13.75 6.5V4.5C13.75 4.09 14.09 3.75 14.5 3.75C14.91 3.75 15.25 4.09 15.25 4.5V6.5C15.25 7.19 15.81 7.75 16.5 7.75H18.5C18.91 7.75 19.25 8.09 19.25 8.5C19.25 8.91 18.91 9.25 18.5 9.25Z"
        fill="currentColor"
      />
      <Path
        d="M9.99945 17.75C9.80945 17.75 9.61945 17.68 9.46945 17.53L7.46945 15.53C7.17945 15.24 7.17945 14.7599 7.46945 14.4699L9.46945 12.4699C9.75945 12.1799 10.2395 12.1799 10.5295 12.4699C10.8195 12.7599 10.8195 13.24 10.5295 13.53L9.05945 15L10.5295 16.4699C10.8195 16.7599 10.8195 17.24 10.5295 17.53C10.3795 17.68 10.1895 17.75 9.99945 17.75Z"
        fill="currentColor"
      />
      <Path
        d="M13.9995 17.75C13.8095 17.75 13.6195 17.68 13.4695 17.53C13.1795 17.24 13.1795 16.7599 13.4695 16.4699L14.9395 15L13.4695 13.53C13.1795 13.24 13.1795 12.7599 13.4695 12.4699C13.7595 12.1799 14.2395 12.1799 14.5295 12.4699L16.5295 14.4699C16.8195 14.7599 16.8195 15.24 16.5295 15.53L14.5295 17.53C14.3795 17.68 14.1895 17.75 13.9995 17.75Z"
        fill="currentColor"
      />
    </Svg>
  );
};

const DocumentCodeLinear = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M21 7V17C21 20 19.5 22 16 22H8C4.5 22 3 20 3 17V7C3 4 4.5 2 8 2H16C19.5 2 21 4 21 7Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M14.5 4.5V6.5C14.5 7.6 15.4 8.5 16.5 8.5H18.5"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M10 13L8 15L10 17"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M14 13L16 15L14 17"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

const DocumentCodeOutline = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M16 22.75H8C4.35 22.75 2.25 20.65 2.25 17V7C2.25 3.35 4.35 1.25 8 1.25H16C19.65 1.25 21.75 3.35 21.75 7V17C21.75 20.65 19.65 22.75 16 22.75ZM8 2.75C5.14 2.75 3.75 4.14 3.75 7V17C3.75 19.86 5.14 21.25 8 21.25H16C18.86 21.25 20.25 19.86 20.25 17V7C20.25 4.14 18.86 2.75 16 2.75H8Z"
        fill="currentColor"
      />
      <Path
        d="M18.5 9.25H16.5C14.98 9.25 13.75 8.02 13.75 6.5V4.5C13.75 4.09 14.09 3.75 14.5 3.75C14.91 3.75 15.25 4.09 15.25 4.5V6.5C15.25 7.19 15.81 7.75 16.5 7.75H18.5C18.91 7.75 19.25 8.09 19.25 8.5C19.25 8.91 18.91 9.25 18.5 9.25Z"
        fill="currentColor"
      />
      <Path
        d="M9.99945 17.75C9.80945 17.75 9.61945 17.68 9.46945 17.53L7.46945 15.53C7.17945 15.24 7.17945 14.7599 7.46945 14.4699L9.46945 12.4699C9.75945 12.1799 10.2395 12.1799 10.5295 12.4699C10.8195 12.7599 10.8195 13.24 10.5295 13.53L9.05945 15L10.5295 16.4699C10.8195 16.7599 10.8195 17.24 10.5295 17.53C10.3795 17.68 10.1895 17.75 9.99945 17.75Z"
        fill="currentColor"
      />
      <Path
        d="M13.9995 17.75C13.8095 17.75 13.6195 17.68 13.4695 17.53C13.1795 17.24 13.1795 16.7599 13.4695 16.4699L14.9395 15L13.4695 13.53C13.1795 13.24 13.1795 12.7599 13.4695 12.4699C13.7595 12.1799 14.2395 12.1799 14.5295 12.4699L16.5295 14.4699C16.8195 14.7599 16.8195 15.24 16.5295 15.53L14.5295 17.53C14.3795 17.68 14.1895 17.75 13.9995 17.75Z"
        fill="currentColor"
      />
    </Svg>
  );
};

const DocumentCodeTwotone = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M21 7V17C21 20 19.5 22 16 22H8C4.5 22 3 20 3 17V7C3 4 4.5 2 8 2H16C19.5 2 21 4 21 7Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        opacity="0.4"
        d="M14.5 4.5V6.5C14.5 7.6 15.4 8.5 16.5 8.5H18.5"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        opacity="0.4"
        d="M10 13L8 15L10 17"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        opacity="0.4"
        d="M14 13L16 15L14 17"
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
  bold: DocumentCodeBold,
  broken: DocumentCodeBroken,
  bulk: DocumentCodeBulk,
  linear: DocumentCodeLinear,
  outline: DocumentCodeOutline,
  twotone: DocumentCodeTwotone,
};

export const DocumentCodeIcon = ({
  variant = defaultOptions.variant,
  className,
  ...props
}: IconProps) => {
  const textClasses = useContext(TextClassContext);
  const Component = variants[variant];
  return <Component className={cn(textClasses, className)} {...props} />;
};
