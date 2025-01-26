import { useContext } from "react";
import { Path, Svg } from "unative/lib/svg";
import { cn } from "unative/lib/utils";
import { TextClassContext } from "unative/ui/text";

import type { IconProps, IconVariants } from "../types/icons-type";

const UserEditBold = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M12 2C9.24 2 7 4.24 7 7C7 9.76 9.24 12 12 12C14.76 12 17 9.76 17 7C17 4.24 14.76 2 12 2ZM14.17 6.51L11.47 9.21C11.37 9.31 11.16 9.41 11.02 9.44L9.99 9.58C9.61 9.63 9.35 9.37 9.41 9L9.56 7.97C9.58 7.83 9.68 7.62 9.79 7.52L12.49 4.82C12.95 4.36 13.5 4.14 14.18 4.82C14.85 5.51 14.63 6.05 14.17 6.51Z"
        fill="currentColor"
      />
      <Path
        d="M12.0002 14C6.99016 14 2.91016 17.36 2.91016 21.5C2.91016 21.78 3.13016 22 3.41016 22H20.5902C20.8702 22 21.0902 21.78 21.0902 21.5C21.0902 17.36 17.0102 14 12.0002 14Z"
        fill="currentColor"
      />
    </Svg>
  );
};

const UserEditBroken = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M15.02 3.01001C14.18 2.37001 13.14 2 12 2C9.24 2 7 4.24 7 7C7 9.76 9.24 12 12 12C14.76 12 17 9.76 17 7"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M19.2091 15.74L15.669 19.2801C15.529 19.4201 15.3991 19.68 15.3691 19.87L15.1791 21.22C15.1091 21.71 15.4491 22.05 15.9391 21.98L17.289 21.79C17.479 21.76 17.7491 21.63 17.8791 21.49L21.419 17.95C22.029 17.34 22.319 16.63 21.419 15.73C20.529 14.84 19.8191 15.13 19.2091 15.74Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M18.6992 16.25C18.9992 17.33 19.8392 18.17 20.9192 18.47"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M3.41016 22C3.41016 18.13 7.26018 15 12.0002 15C13.0402 15 14.0402 15.15 14.9702 15.43"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

const UserEditBulk = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M12 12C14.7614 12 17 9.76142 17 7C17 4.23858 14.7614 2 12 2C9.23858 2 7 4.23858 7 7C7 9.76142 9.23858 12 12 12Z"
        fill="currentColor"
      />
      <Path
        opacity="0.4"
        d="M12.0002 14.5C6.99018 14.5 2.91016 17.86 2.91016 22C2.91016 22.28 3.13016 22.5 3.41016 22.5H20.5902C20.8702 22.5 21.0902 22.28 21.0902 22C21.0902 17.86 17.0102 14.5 12.0002 14.5Z"
        fill="currentColor"
      />
      <Path
        d="M21.4291 14.7401C20.5291 13.8401 19.8191 14.1301 19.2091 14.7401L15.669 18.2801C15.529 18.4201 15.3991 18.6801 15.3691 18.8701L15.1791 20.2201C15.1091 20.7101 15.4491 21.0501 15.9391 20.9801L17.289 20.7901C17.479 20.7601 17.7491 20.6301 17.8791 20.4901L21.419 16.9501C22.039 16.3501 22.3291 15.6401 21.4291 14.7401Z"
        fill="currentColor"
      />
    </Svg>
  );
};

const UserEditLinear = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M12 12C14.7614 12 17 9.76142 17 7C17 4.23858 14.7614 2 12 2C9.23858 2 7 4.23858 7 7C7 9.76142 9.23858 12 12 12Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M19.2101 15.74L15.67 19.2801C15.53 19.4201 15.4 19.68 15.37 19.87L15.18 21.22C15.11 21.71 15.45 22.05 15.94 21.98L17.29 21.79C17.48 21.76 17.75 21.63 17.88 21.49L21.42 17.95C22.03 17.34 22.32 16.63 21.42 15.73C20.53 14.84 19.8201 15.13 19.2101 15.74Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M18.7001 16.25C19.0001 17.33 19.84 18.17 20.92 18.47"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M3.40991 22C3.40991 18.13 7.25994 15 11.9999 15C13.0399 15 14.0399 15.15 14.9699 15.43"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

const UserEditOutline = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M12 12.75C8.83 12.75 6.25 10.17 6.25 7C6.25 3.83 8.83 1.25 12 1.25C15.17 1.25 17.75 3.83 17.75 7C17.75 10.17 15.17 12.75 12 12.75ZM12 2.75C9.66 2.75 7.75 4.66 7.75 7C7.75 9.34 9.66 11.25 12 11.25C14.34 11.25 16.25 9.34 16.25 7C16.25 4.66 14.34 2.75 12 2.75Z"
        fill="currentColor"
      />
      <Path
        d="M15.8196 22.7499C15.4396 22.7499 15.0796 22.6099 14.8196 22.3499C14.5096 22.0399 14.3696 21.5899 14.4396 21.1199L14.6296 19.7699C14.6796 19.4199 14.8896 19.0099 15.1396 18.7499L18.6796 15.2099C20.0996 13.7899 21.3496 14.5999 21.9596 15.2099C22.4796 15.7299 22.7496 16.2899 22.7496 16.8499C22.7496 17.4199 22.4896 17.9499 21.9596 18.4799L18.4195 22.0199C18.1695 22.2699 17.7496 22.4799 17.3996 22.5299L16.0495 22.7198C15.9695 22.7398 15.8996 22.7499 15.8196 22.7499ZM20.3096 15.9199C20.1296 15.9199 19.9696 16.0399 19.7396 16.2699L16.1996 19.8099C16.1696 19.8399 16.1196 19.9399 16.1196 19.9799L15.9396 21.2299L17.1896 21.0499C17.2296 21.0399 17.3295 20.9899 17.3595 20.9599L20.8996 17.4199C21.0596 17.2599 21.2496 17.0299 21.2496 16.8499C21.2496 16.6999 21.1296 16.4899 20.8996 16.2699C20.6596 16.0299 20.4796 15.9199 20.3096 15.9199Z"
        fill="currentColor"
      />
      <Path
        d="M20.9206 19.2198C20.8506 19.2198 20.7806 19.2099 20.7206 19.1899C19.4006 18.8199 18.3506 17.7699 17.9806 16.4499C17.8706 16.0499 18.1006 15.6399 18.5006 15.5299C18.9006 15.4199 19.3106 15.6499 19.4206 16.0499C19.6506 16.8699 20.3006 17.5199 21.1206 17.7499C21.5206 17.8599 21.7506 18.2799 21.6406 18.6699C21.5506 18.9999 21.2506 19.2198 20.9206 19.2198Z"
        fill="currentColor"
      />
      <Path
        d="M3.41016 22.75C3.00016 22.75 2.66016 22.41 2.66016 22C2.66016 17.73 6.85018 14.25 12.0002 14.25C13.0902 14.25 14.1702 14.41 15.1802 14.71C15.5802 14.83 15.8002 15.25 15.6802 15.64C15.5602 16.04 15.1402 16.26 14.7502 16.14C13.8702 15.88 12.9502 15.74 12.0002 15.74C7.68018 15.74 4.16016 18.54 4.16016 21.99C4.16016 22.41 3.82016 22.75 3.41016 22.75Z"
        fill="currentColor"
      />
    </Svg>
  );
};

const UserEditTwotone = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M12 12C14.7614 12 17 9.76142 17 7C17 4.23858 14.7614 2 12 2C9.23858 2 7 4.23858 7 7C7 9.76142 9.23858 12 12 12Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M19.211 15.74L15.671 19.2801C15.531 19.4201 15.401 19.68 15.371 19.87L15.181 21.22C15.111 21.71 15.451 22.05 15.941 21.98L17.291 21.79C17.481 21.76 17.751 21.63 17.881 21.49L21.421 17.95C22.031 17.34 22.321 16.63 21.421 15.73C20.531 14.84 19.821 15.13 19.211 15.74Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M18.6992 16.25C18.9992 17.33 19.8392 18.17 20.9192 18.47"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        opacity="0.4"
        d="M3.41016 22C3.41016 18.13 7.26018 15 12.0002 15C13.0402 15 14.0402 15.15 14.9702 15.43"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

const variants: IconVariants = {
  bold: UserEditBold,
  broken: UserEditBroken,
  bulk: UserEditBulk,
  linear: UserEditLinear,
  outline: UserEditOutline,
  twotone: UserEditTwotone,
};

export const UserEditIcon = ({
  variant = "linear",
  className,
  ...props
}: IconProps) => {
  const textClasses = useContext(TextClassContext);
  const Component = variants[variant];
  return <Component className={cn(textClasses, className)} {...props} />;
};
