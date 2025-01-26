import { useContext } from "react";
import { Path, Svg } from "unative/lib/svg";
import { cn } from "unative/lib/utils";
import { TextClassContext } from "unative/ui/text";

import { iconDefaultOptions } from "../icons-configuration";
import type { IconProps, IconVariants } from "../types/icons-type";

const UserRemoveBold = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M12.0002 14C6.99016 14 2.91016 17.36 2.91016 21.5C2.91016 21.78 3.13016 22 3.41016 22H20.5902C20.8702 22 21.0902 21.78 21.0902 21.5C21.0902 17.36 17.0102 14 12.0002 14Z"
        fill="currentColor"
      />
      <Path
        d="M16.8506 5.79813C16.7306 5.30813 16.5306 4.82813 16.2506 4.38813C16.0606 4.06813 15.8106 3.74813 15.5406 3.46813C14.6406 2.56813 13.4706 2.07813 12.2706 2.01813C10.9106 1.92813 9.52058 2.42813 8.47058 3.46813C7.48058 4.44813 6.98058 5.75813 7.00058 7.07813C7.01058 8.32813 7.51058 9.57813 8.46058 10.5381C9.12058 11.1981 9.93058 11.6381 10.8006 11.8381C11.2706 11.9581 11.7706 12.0181 12.2706 11.9781C13.4606 11.9281 14.6206 11.4581 15.5306 10.5381C16.8206 9.24813 17.2606 7.43813 16.8506 5.79813ZM14.0006 8.99813C13.6406 9.35813 13.0406 9.35813 12.6806 8.99813L11.9906 8.30813L11.3306 8.96813C10.9706 9.32813 10.3706 9.32813 10.0106 8.96813C9.64058 8.59813 9.64058 8.00813 10.0006 7.64813L10.6606 6.98813L10.0206 6.36813C9.66058 5.99813 9.66058 5.40813 10.0206 5.02813C10.3906 4.66813 10.9806 4.66813 11.3606 5.02813L11.9806 5.66813L12.6506 4.99813C13.0106 4.63813 13.6006 4.63813 13.9706 4.99813C14.3306 5.35813 14.3306 5.95813 13.9706 6.31813L13.3106 6.97813L14.0006 7.67813C14.3606 8.03813 14.3606 8.63813 14.0006 8.99813Z"
        fill="currentColor"
      />
    </Svg>
  );
};

const UserRemoveBroken = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M3.41016 22C3.41016 18.13 7.26015 15 12.0002 15C12.9602 15 13.8902 15.13 14.7602 15.37"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M22 18C22 18.32 21.96 18.63 21.88 18.93C21.79 19.33 21.63 19.72 21.42 20.06C20.73 21.22 19.46 22 18 22C16.97 22 16.04 21.61 15.34 20.97C15.04 20.71 14.78 20.4 14.58 20.06C14.21 19.46 14 18.75 14 18C14 16.92 14.43 15.93 15.13 15.21C15.86 14.46 16.88 14 18 14C19.18 14 20.25 14.51 20.97 15.33C21.61 16.04 22 16.98 22 18Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M19.0299 16.9399L16.9199 19.0499"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M16.9395 16.96L19.0594 19.0699"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

const UserRemoveBulk = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M21.0901 21.5C21.0901 21.78 20.8701 22 20.5901 22H3.41016C3.13016 22 2.91016 21.78 2.91016 21.5C2.91016 17.36 6.99015 14 12.0002 14C13.0302 14 14.0302 14.14 14.9502 14.41C14.3602 15.11 14.0002 16.02 14.0002 17C14.0002 17.75 14.2101 18.46 14.5801 19.06C14.7801 19.4 15.0401 19.71 15.3401 19.97C16.0401 20.61 16.9702 21 18.0002 21C19.1202 21 20.1302 20.54 20.8502 19.8C21.0102 20.34 21.0901 20.91 21.0901 21.5Z"
        fill="currentColor"
      />
      <Path
        d="M21.8807 16.04C21.7807 15.65 21.6207 15.26 21.4007 14.91C21.2507 14.65 21.0507 14.4 20.8307 14.17C20.1107 13.45 19.1707 13.06 18.2107 13.01C17.1207 12.94 16.0107 13.34 15.1707 14.17C14.3807 14.96 13.9807 16.01 14.0007 17.06C14.0107 18.06 14.4107 19.06 15.1707 19.83C15.7007 20.36 16.3507 20.71 17.0407 20.87C17.4207 20.97 17.8207 21.01 18.2207 20.98C19.1707 20.94 20.1007 20.56 20.8307 19.83C21.8607 18.8 22.2107 17.35 21.8807 16.04ZM19.6007 18.6C19.3107 18.89 18.8307 18.89 18.5407 18.6L17.9907 18.05L17.4607 18.58C17.1707 18.87 16.6907 18.87 16.4007 18.58C16.1107 18.28 16.1107 17.81 16.4007 17.52L16.9307 16.99L16.4207 16.49C16.1307 16.19 16.1307 15.72 16.4207 15.42C16.7207 15.13 17.1907 15.13 17.4907 15.42L17.9907 15.93L18.5207 15.4C18.8107 15.11 19.2807 15.11 19.5807 15.4C19.8707 15.69 19.8707 16.17 19.5807 16.46L19.0507 16.99L19.6007 17.54C19.8907 17.83 19.8907 18.31 19.6007 18.6Z"
        fill="currentColor"
      />
      <Path
        d="M12 12C14.7614 12 17 9.76142 17 7C17 4.23858 14.7614 2 12 2C9.23858 2 7 4.23858 7 7C7 9.76142 9.23858 12 12 12Z"
        fill="currentColor"
      />
    </Svg>
  );
};

const UserRemoveLinear = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M3.40991 22C3.40991 18.13 7.25991 15 11.9999 15C12.9599 15 13.8899 15.13 14.7599 15.37"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M22 18C22 18.32 21.96 18.63 21.88 18.93C21.79 19.33 21.63 19.72 21.42 20.06C20.73 21.22 19.46 22 18 22C16.97 22 16.04 21.61 15.34 20.97C15.04 20.71 14.78 20.4 14.58 20.06C14.21 19.46 14 18.75 14 18C14 16.92 14.43 15.93 15.13 15.21C15.86 14.46 16.88 14 18 14C19.18 14 20.25 14.51 20.97 15.33C21.61 16.04 22 16.98 22 18Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M19.0299 16.9399L16.9199 19.0499"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M16.9399 16.96L19.0599 19.0699"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

const UserRemoveOutline = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M3.41016 22.75C3.00016 22.75 2.66016 22.41 2.66016 22C2.66016 17.73 6.85015 14.25 12.0002 14.25C13.0102 14.25 14.0001 14.38 14.9601 14.65C15.3601 14.76 15.5902 15.17 15.4802 15.57C15.3702 15.97 14.9601 16.2 14.5602 16.09C13.7402 15.86 12.8802 15.75 12.0002 15.75C7.68015 15.75 4.16016 18.55 4.16016 22C4.16016 22.41 3.82016 22.75 3.41016 22.75Z"
        fill="currentColor"
      />
      <Path
        d="M18 22.75C16.82 22.75 15.7 22.31 14.83 21.52C14.48 21.22 14.17 20.85 13.93 20.44C13.49 19.72 13.25 18.87 13.25 18C13.25 16.75 13.73 15.58 14.59 14.69C15.49 13.76 16.7 13.25 18 13.25C19.36 13.25 20.65 13.83 21.53 14.83C22.31 15.7 22.75 16.82 22.75 18C22.75 18.38 22.7 18.76 22.6 19.12C22.5 19.57 22.31 20.04 22.05 20.45C21.22 21.87 19.66 22.75 18 22.75ZM18 14.75C17.11 14.75 16.29 15.1 15.67 15.73C15.08 16.34 14.75 17.14 14.75 18C14.75 18.59 14.91 19.17 15.22 19.67C15.38 19.95 15.59 20.2 15.83 20.41C16.43 20.96 17.2 21.26 18 21.26C19.13 21.26 20.2 20.66 20.78 19.69C20.95 19.41 21.08 19.09 21.15 18.78C21.22 18.52 21.25 18.27 21.25 18.01C21.25 17.21 20.95 16.44 20.41 15.84C19.81 15.14 18.93 14.75 18 14.75Z"
        fill="currentColor"
      />
      <Path
        d="M16.9194 19.7999C16.7294 19.7999 16.5394 19.7299 16.3894 19.5799C16.0994 19.2899 16.0994 18.8099 16.3894 18.5199L18.4994 16.4099C18.7894 16.1199 19.2694 16.1199 19.5594 16.4099C19.8494 16.6999 19.8494 17.1799 19.5594 17.4699L17.4494 19.5799C17.2994 19.7299 17.1094 19.7999 16.9194 19.7999Z"
        fill="currentColor"
      />
      <Path
        d="M19.0606 19.8199C18.8706 19.8199 18.6806 19.7499 18.5306 19.5999L16.4206 17.4899C16.1306 17.1999 16.1306 16.7199 16.4206 16.4299C16.7106 16.1399 17.1906 16.1399 17.4806 16.4299L19.5906 18.5399C19.8806 18.8299 19.8806 19.3099 19.5906 19.5999C19.4406 19.7499 19.2506 19.8199 19.0606 19.8199Z"
        fill="currentColor"
      />
    </Svg>
  );
};

const UserRemoveTwotone = ({ size = 24, className, ...props }: IconProps) => {
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
        opacity="0.4"
        d="M3.41016 22C3.41016 18.13 7.26015 15 12.0002 15C12.9602 15 13.8902 15.13 14.7602 15.37"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M22 18C22 18.32 21.96 18.63 21.88 18.93C21.79 19.33 21.63 19.72 21.42 20.06C20.73 21.22 19.46 22 18 22C16.97 22 16.04 21.61 15.34 20.97C15.04 20.71 14.78 20.4 14.58 20.06C14.21 19.46 14 18.75 14 18C14 16.92 14.43 15.93 15.13 15.21C15.86 14.46 16.88 14 18 14C19.18 14 20.25 14.51 20.97 15.33C21.61 16.04 22 16.98 22 18Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M19.0299 16.9399L16.9199 19.0499"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M16.9395 16.96L19.0594 19.0699"
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
  bold: UserRemoveBold,
  broken: UserRemoveBroken,
  bulk: UserRemoveBulk,
  linear: UserRemoveLinear,
  outline: UserRemoveOutline,
  twotone: UserRemoveTwotone,
};

export const UserRemoveIcon = ({
  variant = iconDefaultOptions.variant,
  className,
  ...props
}: IconProps) => {
  const textClasses = useContext(TextClassContext);
  const Component = variants[variant];
  return <Component className={cn(textClasses, className)} {...props} />;
};
