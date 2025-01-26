import { useContext } from "react";
import { Path, Svg } from "unative/lib/svg";
import { cn } from "unative/lib/utils";
import { TextClassContext } from "unative/ui/text";

import { iconDefaultOptions } from "../icons-configuration";
import type { IconProps, IconVariants } from "../types/icons-type";

const FolderFavoriteBold = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M21.9834 11.7466C21.9815 11.1957 21.5343 10.75 20.9834 10.75L3 10.75C2.44772 10.75 2 11.1977 2 11.75V16.65C2 19.6 4.4 22 7.35 22H16.65C19.6 22 22 19.6 22 16.65L21.9834 11.7466ZM14.54 16.97L12.39 18.85C12.28 18.95 12.14 19 12 19C11.86 19 11.72 18.95 11.61 18.85L9.46 16.97C8.78 16.37 8.69 15.35 9.26 14.64C9.83 13.92 10.86 13.79 11.6 14.34L12 14.64L12.4 14.34C13.14 13.79 14.17 13.92 14.74 14.64C15.31 15.35 15.22 16.37 14.54 16.97Z"
        fill="currentColor"
      />
    </Svg>
  );
};

const FolderFavoriteBroken = ({
  size = 24,
  className,
  ...props
}: IconProps) => {
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
        d="M9.20046 14.78L11.7805 17.04C11.9005 17.15 12.0905 17.15 12.2105 17.04L14.7905 14.78C15.4605 14.19 15.5505 13.19 14.9905 12.49C14.4305 11.79 13.4105 11.66 12.7005 12.2L12.0005 12.74L11.2905 12.21C10.5705 11.67 9.56046 11.8 9.00046 12.5C8.44046 13.19 8.53046 14.2 9.20046 14.78Z"
        stroke="currentColor"
        strokeWidth="1.5"
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

const FolderFavoriteBulk = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M21.74 9.44H2V6.42C2 3.98 3.98 2 6.42 2H8.75C10.38 2 10.89 2.53 11.54 3.4L12.94 5.26C13.25 5.67 13.29 5.73 13.87 5.73H16.66C19.03 5.72 21.05 7.28 21.74 9.44Z"
        fill="currentColor"
      />
      <Path
        d="M21.99 10.8399C21.97 10.3499 21.89 9.88994 21.74 9.43994H2V16.6499C2 19.5999 4.4 21.9999 7.35 21.9999H16.65C19.6 21.9999 22 19.5999 22 16.6499V11.0699C22 10.9999 22 10.9099 21.99 10.8399ZM14.54 15.9699L12.39 17.8499C12.28 17.9499 12.14 17.9999 12 17.9999C11.86 17.9999 11.72 17.9499 11.61 17.8499L9.46 15.9699C8.78 15.3699 8.69 14.3499 9.25 13.6399C9.83 12.9199 10.85 12.7899 11.59 13.3399L11.99 13.6399L12.39 13.3399C13.13 12.7899 14.15 12.9199 14.73 13.6399C15.31 14.3499 15.22 15.3699 14.54 15.9699Z"
        fill="currentColor"
      />
    </Svg>
  );
};

const FolderFavoriteLinear = ({
  size = 24,
  className,
  ...props
}: IconProps) => {
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
        d="M9.19997 14.78L11.78 17.04C11.9 17.15 12.09 17.15 12.21 17.04L14.79 14.78C15.46 14.19 15.55 13.19 14.99 12.49C14.43 11.79 13.41 11.66 12.7 12.2L12 12.74L11.29 12.21C10.57 11.67 9.55997 11.8 8.99997 12.5C8.43997 13.19 8.52997 14.2 9.19997 14.78Z"
        stroke="currentColor"
        strokeWidth="1.5"
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

const FolderFavoriteOutline = ({
  size = 24,
  className,
  ...props
}: IconProps) => {
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
        d="M12.0004 17.88C11.7504 17.88 11.4904 17.79 11.2904 17.61L8.71044 15.35C7.74044 14.5 7.61044 13.04 8.42044 12.03C9.24044 11.01 10.7004 10.82 11.7504 11.61L12.0004 11.8L12.2604 11.6C13.3104 10.81 14.7704 11 15.5904 12.02C16.4004 13.03 16.2704 14.49 15.3004 15.34L12.7204 17.6C12.5104 17.79 12.2504 17.88 12.0004 17.88ZM9.69044 14.22L12.0004 16.24L14.3104 14.22C14.6804 13.9 14.7304 13.35 14.4204 12.97C14.1104 12.58 13.5604 12.51 13.1604 12.81L12.4504 13.34C12.1804 13.54 11.8204 13.54 11.5504 13.34L10.8404 12.81C10.4504 12.51 9.89044 12.58 9.58044 12.97C9.28044 13.35 9.33044 13.9 9.69044 14.22Z"
        fill="currentColor"
      />
      <Path
        d="M17 22.75H7C2.59 22.75 1.25 21.41 1.25 17V7C1.25 2.59 2.59 1.25 7 1.25H8.5C10.25 1.25 10.8 1.82 11.5 2.75L13 4.75C13.33 5.19 13.38 5.25 14 5.25H17C21.41 5.25 22.75 6.59 22.75 11V17C22.75 21.41 21.41 22.75 17 22.75ZM7 2.75C3.42 2.75 2.75 3.43 2.75 7V17C2.75 20.57 3.42 21.25 7 21.25H17C20.58 21.25 21.25 20.57 21.25 17V11C21.25 7.43 20.58 6.75 17 6.75H14C12.72 6.75 12.3 6.31 11.8 5.65L10.3 3.65C9.78 2.96 9.62 2.75 8.5 2.75H7Z"
        fill="currentColor"
      />
    </Svg>
  );
};

const FolderFavoriteTwotone = ({
  size = 24,
  className,
  ...props
}: IconProps) => {
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
        d="M9.20046 14.78L11.7805 17.04C11.9005 17.15 12.0905 17.15 12.2105 17.04L14.7905 14.78C15.4605 14.19 15.5505 13.19 14.9905 12.49C14.4305 11.79 13.4105 11.66 12.7005 12.2L12.0005 12.74L11.2905 12.21C10.5705 11.67 9.56046 11.8 9.00046 12.5C8.44046 13.19 8.53046 14.2 9.20046 14.78Z"
        stroke="currentColor"
        strokeWidth="1.5"
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

const variants: IconVariants = {
  bold: FolderFavoriteBold,
  broken: FolderFavoriteBroken,
  bulk: FolderFavoriteBulk,
  linear: FolderFavoriteLinear,
  outline: FolderFavoriteOutline,
  twotone: FolderFavoriteTwotone,
};

export const FolderFavoriteIcon = ({
  variant = iconDefaultOptions.variant,
  className,
  ...props
}: IconProps) => {
  const textClasses = useContext(TextClassContext);
  const Component = variants[variant];
  return <Component className={cn(textClasses, className)} {...props} />;
};
