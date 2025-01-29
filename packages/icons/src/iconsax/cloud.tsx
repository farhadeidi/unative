import { useContext } from "react";
import { cn } from "unative/lib/utils";
import { Path, Svg } from "unative/ui/svg";
import { TextClassContext } from "unative/ui/text";

import type { IconProps, IconVariants } from "../icon-options";
import { defaultOptions } from "../icon-options";

const CloudBold = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M21.74 12.9089C21.48 12.0489 21.05 11.2989 20.48 10.6889C19.75 9.85888 18.78 9.28888 17.69 9.03888C17.14 6.53888 15.6 4.73888 13.41 4.06888C11.03 3.32888 8.27 4.04888 6.54 5.85888C5.02 7.44888 4.52 9.63888 5.11 11.9689C3.11 12.4589 2.12 14.1289 2.01 15.7189C2 15.8289 2 15.9289 2 16.0289C2 17.9089 3.23 20.0189 5.97 20.2189H16.35C17.77 20.2189 19.13 19.6889 20.17 18.7389C21.8 17.3089 22.4 15.0789 21.74 12.9089Z"
        fill="currentColor"
      />
    </Svg>
  );
};

const CloudBroken = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M15.8496 9.92001C16.3696 9.66001 16.9396 9.52001 17.5196 9.51001"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M11.9903 3.90012C7.98029 3.57012 3.62029 7.03012 5.59029 12.5201"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M7.2593 12.9299C6.7293 12.6599 6.1393 12.5199 5.5393 12.5199C0.859297 12.8499 0.859297 19.6599 5.5393 19.9899H16.6293C17.9793 19.9999 19.2793 19.4999 20.2693 18.5899C23.5593 15.7199 21.7993 9.94993 17.4693 9.39993C17.2293 7.93993 16.6893 6.78993 15.9793 5.92993"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M15.8398 9.83993C16.3598 9.57993 16.9298 9.43993 17.5098 9.42993"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

const CloudBulk = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M20.4798 10.6901L2.00977 15.7201C2.11977 14.1301 3.10977 12.4601 5.10977 11.9701C4.51977 9.6401 5.01977 7.4501 6.53977 5.8601C8.26977 4.0501 11.0298 3.3301 13.4098 4.0701C15.5998 4.7401 17.1398 6.5401 17.6898 9.0401C18.7798 9.2901 19.7498 9.8601 20.4798 10.6901Z"
        fill="currentColor"
      />
      <Path
        opacity="0.4"
        d="M20.17 18.7399C19.13 19.6899 17.77 20.2199 16.35 20.2199H5.97C3.23 20.0199 2 17.9099 2 16.0299C2 15.9299 2 15.8299 2.01 15.7199L20.48 10.6899C21.05 11.2999 21.48 12.0499 21.74 12.9099C22.4 15.0799 21.8 17.3099 20.17 18.7399Z"
        fill="currentColor"
      />
    </Svg>
  );
};

const CloudLinear = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M7.27004 13.01C6.74004 12.74 6.15004 12.6 5.55004 12.6C0.870039 12.93 0.870039 19.74 5.55004 20.07H16.64C17.99 20.08 19.29 19.58 20.28 18.67C23.57 15.8 21.81 10.03 17.48 9.48C15.92 0.110001 2.39004 3.67 5.60004 12.6"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M15.8501 9.92001C16.3701 9.66001 16.9401 9.52001 17.5201 9.51001"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

const CloudOutline = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M16.6791 20.8301C16.6691 20.8301 16.6491 20.8301 16.6391 20.8301H5.54906C2.60906 20.6201 1.28906 18.3601 1.28906 16.3401C1.28906 14.5401 2.33906 12.5401 4.62906 11.9901C3.98906 9.49008 4.52906 7.14008 6.15906 5.44008C8.00906 3.50008 10.9791 2.73008 13.5291 3.52008C15.8691 4.24008 17.5191 6.17008 18.1191 8.85008C20.1691 9.31008 21.7991 10.8601 22.4591 13.0001C23.1691 15.3301 22.5291 17.7201 20.7791 19.2501C19.6591 20.2601 18.1991 20.8301 16.6791 20.8301ZM5.56906 13.3501C5.55906 13.3501 5.55906 13.3501 5.54906 13.3501C3.64906 13.4901 2.77906 14.9501 2.77906 16.3401C2.77906 17.7301 3.64906 19.1901 5.58906 19.3301H16.6291C17.7891 19.3101 18.8991 18.9101 19.7591 18.1301C21.3191 16.7601 21.4291 14.8101 21.0091 13.4401C20.5891 12.0601 19.4191 10.5001 17.3791 10.2401C17.0491 10.2001 16.7891 9.95008 16.7291 9.62008C16.3291 7.22008 15.0291 5.56008 13.0791 4.96008C11.0491 4.34008 8.70906 4.95008 7.23906 6.48008C5.90906 7.87008 5.52906 9.79008 6.14906 11.9001C6.65906 11.9701 7.14906 12.1201 7.59906 12.3501C7.96906 12.5401 8.11906 12.9901 7.92906 13.3601C7.73906 13.7301 7.28906 13.8801 6.91906 13.6901C6.50906 13.4801 6.05906 13.3701 5.60906 13.3701C5.59906 13.3501 5.58906 13.3501 5.56906 13.3501Z"
        fill="currentColor"
      />
      <Path
        d="M15.85 10.67C15.57 10.67 15.31 10.52 15.18 10.25C14.99 9.87998 15.15 9.42998 15.52 9.23998C16.14 8.92998 16.83 8.75998 17.51 8.74998C17.91 8.73998 18.27 9.06998 18.27 9.48998C18.28 9.89998 17.95 10.25 17.53 10.25C17.07 10.26 16.6 10.37 16.18 10.58C16.07 10.64 15.96 10.67 15.85 10.67Z"
        fill="currentColor"
      />
    </Svg>
  );
};

const CloudTwotone = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M7.26906 13.0098C6.73906 12.7398 6.14906 12.5998 5.54906 12.5998C0.869062 12.9298 0.869062 19.7398 5.54906 20.0698H16.6391C17.9891 20.0798 19.2891 19.5798 20.2791 18.6698C23.5691 15.7998 21.8091 10.0298 17.4791 9.47976C15.9191 0.109757 2.38906 3.66976 5.59906 12.5998"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M15.8496 9.91977C16.3696 9.65977 16.9396 9.51977 17.5196 9.50977"
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
  bold: CloudBold,
  broken: CloudBroken,
  bulk: CloudBulk,
  linear: CloudLinear,
  outline: CloudOutline,
  twotone: CloudTwotone,
};

export const CloudIcon = ({
  variant = defaultOptions.variant,
  className,
  ...props
}: IconProps) => {
  const textClasses = useContext(TextClassContext);
  const Component = variants[variant];
  return <Component className={cn(textClasses, className)} {...props} />;
};

export default CloudIcon;
