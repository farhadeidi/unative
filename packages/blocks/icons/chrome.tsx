import { useContext } from "react";
import { G, Path, Svg } from "unative/lib/svg";
import { cn } from "unative/lib/utils";
import { TextClassContext } from "unative/ui/text";

import { iconDefaultOptions } from "../icons-configuration";
import type { IconProps, IconVariants } from "../types/icons-type";

const ChromeBold = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M11.8195 6.9C14.6795 6.28 17.5795 6.19 20.4495 6.66C18.6795 3.86 15.5595 2 11.9995 2C8.88953 2 6.10953 3.42 4.26953 5.65C4.70953 6.95 5.26953 8.19 5.93953 9.37C6.31953 10.05 7.28953 10.02 7.67953 9.35C8.52953 7.92 10.0595 6.96 11.8195 6.9Z"
        fill="currentColor"
      />
      <Path
        d="M7.72002 14.7214C5.72002 12.5814 4.16002 10.1414 3.09002 7.44141C1.59002 10.4014 1.60002 14.0314 3.43002 17.0814C5.03002 19.7514 7.67002 21.4114 10.53 21.8414C11.42 20.7914 12.2 19.6714 12.87 18.5014C13.26 17.8214 12.73 17.0114 11.95 17.0114C10.28 17.0214 8.67002 16.2014 7.72002 14.7214Z"
        fill="currentColor"
      />
      <Path
        d="M8.57031 11.9982C8.57031 12.6082 8.72031 13.1782 9.03031 13.7182C9.64031 14.7682 10.7703 15.4282 11.9903 15.4282C13.2103 15.4282 14.3503 14.7682 14.9503 13.7182C15.2603 13.1782 15.4203 12.6082 15.4203 11.9982C15.4203 10.1082 13.8803 8.57817 11.9903 8.57817C10.1103 8.56817 8.57031 10.1082 8.57031 11.9982Z"
        fill="currentColor"
      />
      <Path
        d="M21.3402 8.41931C19.9702 8.12931 18.5802 7.96931 17.2002 7.94931C16.4102 7.93931 15.9602 8.79931 16.3502 9.48931C16.7502 10.1993 16.9802 11.0193 16.9802 11.8893C16.9802 12.7293 16.7602 13.5593 16.3502 14.2993C15.4102 17.1793 14.0102 19.7393 12.1602 21.9993C17.6102 21.9093 22.0002 17.4693 22.0002 11.9993C22.0002 10.7393 21.7702 9.52931 21.3402 8.41931Z"
        fill="currentColor"
      />
    </Svg>
  );
};

const ChromeBroken = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M3.13 16.62C4.8 19.82 8.14 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2C6.48 2 2 6.48 2 12"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M12 16C14.21 16 16 14.21 16 12C16 9.79 14.21 8 12 8C9.79 8 8 9.79 8 12C8 14.21 9.79 16 12 16Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M21.17 7.99988C18.15 7.33988 15.02 7.33988 12 7.99988"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M3.94922 6.06006L3.96922 6.12006C4.97922 9.01006 6.52922 11.6901 8.53922 14.0001"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M10.8809 21.94C12.9409 19.67 14.4909 16.99 15.4309 14.08L15.4609 14"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

const ChromeBulk = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M22 12C22 17.47 17.61 21.91 12.16 22H12C11.39 22 10.79 21.94 10.21 21.84C5.54 20.99 2 16.91 2 12C2 10.29 2.43 8.68 3.19 7.27C3.5 6.7 3.86 6.15 4.27 5.65C6.11 3.42 8.89 2 12 2C15.56 2 18.68 3.86 20.45 6.66C20.8 7.21 21.1 7.8 21.34 8.42C21.77 9.53 22 10.74 22 12Z"
        fill="currentColor"
      />
      <Path
        d="M15.0995 8.0199C17.1795 7.8499 19.2695 7.9799 21.3395 8.4199C21.0995 7.7999 20.7995 7.2099 20.4495 6.6599C17.5795 6.1899 14.6795 6.2799 11.8195 6.8999C9.38945 6.9799 7.40945 8.7799 7.03945 11.1299C5.87945 9.4499 4.93945 7.6199 4.26945 5.6499C3.85945 6.1499 3.49945 6.6999 3.18945 7.2699C4.24945 9.9599 5.73945 12.3599 7.64945 14.4699C7.66945 14.4899 7.69945 14.4999 7.71945 14.5199C8.62945 15.9899 10.2395 16.8999 11.9695 16.8999C12.5795 16.8999 13.1695 16.7799 13.7195 16.5699C12.8095 18.4799 11.6495 20.2499 10.2095 21.8399C10.7895 21.9399 11.3895 21.9999 11.9995 21.9999H12.1595C14.0095 19.7399 15.4095 17.1799 16.3495 14.2999C16.7595 13.5599 16.9795 12.7299 16.9795 11.8899C16.9795 10.3199 16.2395 8.9399 15.0995 8.0199ZM14.9295 13.6099C14.3295 14.6599 13.1895 15.3199 11.9695 15.3199C10.7495 15.3199 9.61945 14.6599 9.00945 13.6099C8.69945 13.0699 8.54945 12.4999 8.54945 11.8899C8.54945 9.9999 10.0795 8.4699 11.9695 8.4699C13.8595 8.4699 15.3995 9.9999 15.3995 11.8899C15.3995 12.4999 15.2395 13.0699 14.9295 13.6099Z"
        fill="currentColor"
      />
    </Svg>
  );
};

const ChromeLinear = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M12 16C14.21 16 16 14.21 16 12C16 9.79 14.21 8 12 8C9.79 8 8 9.79 8 12C8 14.21 9.79 16 12 16Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M21.17 8C18.15 7.34 15.02 7.34 12 8"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M3.95001 6.06006L3.97001 6.12006C4.98001 9.01006 6.53001 11.6901 8.54001 14.0001"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M10.88 21.94C12.94 19.67 14.49 16.99 15.43 14.08L15.46 14"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

const ChromeOutline = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M12 16.75C9.38 16.75 7.25 14.62 7.25 12C7.25 9.38 9.38 7.25 12 7.25C14.62 7.25 16.75 9.38 16.75 12C16.75 14.62 14.62 16.75 12 16.75ZM12 8.75C10.21 8.75 8.75 10.21 8.75 12C8.75 13.79 10.21 15.25 12 15.25C13.79 15.25 15.25 13.79 15.25 12C15.25 10.21 13.79 8.75 12 8.75Z"
        fill="currentColor"
      />
      <Path
        d="M21.1698 8.74994C21.1198 8.74994 21.0598 8.73994 21.0098 8.72994C18.0698 8.08994 15.0998 8.08994 12.1598 8.72994C11.7498 8.81994 11.3598 8.55994 11.2698 8.15994C11.1798 7.74994 11.4398 7.35994 11.8398 7.26994C14.9898 6.57994 18.1798 6.57994 21.3298 7.26994C21.7298 7.35994 21.9898 7.75994 21.8998 8.15994C21.8298 8.50994 21.5198 8.74994 21.1698 8.74994Z"
        fill="currentColor"
      />
      <Path
        d="M8.53977 14.7501C8.32977 14.7501 8.11977 14.6601 7.96977 14.4901C5.88977 12.1001 4.30977 9.37007 3.25977 6.37007L3.94977 6.06007L4.65977 5.82007L4.67977 5.88007C5.65977 8.69007 7.14977 11.2601 9.10977 13.5101C9.37977 13.8201 9.34977 14.3001 9.03977 14.5701C8.88977 14.6901 8.70977 14.7501 8.53977 14.7501Z"
        fill="currentColor"
      />
      <Path
        d="M10.8798 22.69C10.6998 22.69 10.5198 22.63 10.3798 22.5C10.0698 22.22 10.0498 21.75 10.3298 21.44C12.3298 19.24 13.8098 16.69 14.7298 13.86C14.8598 13.47 15.2998 13.21 15.6898 13.34C16.0798 13.47 16.3098 13.85 16.1898 14.24C15.1798 17.36 13.5898 20.1 11.4498 22.46C11.2898 22.61 11.0798 22.69 10.8798 22.69Z"
        fill="currentColor"
      />
    </Svg>
  );
};

const ChromeTwotone = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <G opacity="0.4">
        <Path
          d="M12 16C14.21 16 16 14.21 16 12C16 9.79 14.21 8 12 8C9.79 8 8 9.79 8 12C8 14.21 9.79 16 12 16Z"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <Path
          d="M21.17 7.99988C18.15 7.33988 15.02 7.33988 12 7.99988"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <Path
          d="M3.94922 6.05957L3.96922 6.11957C4.97922 9.00957 6.52922 11.6896 8.53922 13.9996"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <Path
          d="M10.8809 21.94C12.9409 19.67 14.4909 16.99 15.4309 14.08L15.4609 14"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </G>
    </Svg>
  );
};

const variants: IconVariants = {
  bold: ChromeBold,
  broken: ChromeBroken,
  bulk: ChromeBulk,
  linear: ChromeLinear,
  outline: ChromeOutline,
  twotone: ChromeTwotone,
};

export const ChromeIcon = ({
  variant = iconDefaultOptions.variant,
  className,
  ...props
}: IconProps) => {
  const textClasses = useContext(TextClassContext);
  const Component = variants[variant];
  return <Component className={cn(textClasses, className)} {...props} />;
};
