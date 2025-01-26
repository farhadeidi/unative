import { useContext } from "react";
import { Path, Svg } from "unative/lib/svg";
import { cn } from "unative/lib/utils";
import { TextClassContext } from "unative/ui/text";

import type { IconProps, IconVariants } from "../types/icons-type";

const StickerBold = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M21.9595 11.6608C20.7695 10.9108 19.3895 10.5008 17.9695 10.5008C13.8295 10.5008 10.4695 13.8608 10.4695 18.0008C10.4695 19.4208 10.8695 20.7908 11.6195 21.9808C11.1595 21.9708 10.6895 21.9208 10.2095 21.8508C6.0995 21.1508 2.7895 17.8208 2.1095 13.7008C0.979502 6.85075 6.8195 1.01075 13.6695 2.14075C17.7895 2.82075 21.1195 6.13075 21.8195 10.2408C21.8995 10.7208 21.9495 11.2008 21.9595 11.6608Z"
        fill="currentColor"
      />
      <Path
        d="M13.3807 21.86C12.5007 20.82 11.9707 19.47 11.9707 18C11.9707 14.69 14.6607 12 17.9707 12C19.4407 12 20.7907 12.53 21.8307 13.41"
        fill="currentColor"
      />
    </Svg>
  );
};

const StickerBroken = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M21.8195 10.24C21.9695 11.14 22.0095 12.01 21.9295 12.86C21.9095 13.05 21.8795 13.23 21.8295 13.41C20.7895 12.53 19.4395 12 17.9695 12C14.6595 12 11.9695 14.69 11.9695 18C11.9695 19.47 12.4995 20.82 13.3795 21.86C13.1995 21.91 13.0195 21.94 12.8295 21.96C11.9795 22.04 11.1095 22 10.2095 21.85C6.0995 21.15 2.7895 17.82 2.1095 13.7C0.979502 6.85002 6.8195 1.01002 13.6695 2.14002C15.9595 2.52002 18.0095 3.71002 19.4995 5.41002"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M21.8307 13.41C21.6907 13.9 21.4307 14.34 21.0607 14.71L14.6807 21.09C14.3107 21.46 13.8707 21.72 13.3807 21.86C12.5007 20.82 11.9707 19.47 11.9707 18C11.9707 14.69 14.6607 12 17.9707 12C19.4407 12 20.7907 12.53 21.8307 13.41Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

const StickerBulk = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M21.9295 12.86C21.9095 13.05 21.8795 13.23 21.8295 13.41C20.7895 12.53 19.4395 12 17.9695 12C14.6595 12 11.9695 14.69 11.9695 18C11.9695 19.47 12.4995 20.82 13.3795 21.86C13.1995 21.91 13.0195 21.94 12.8295 21.96C11.9795 22.04 11.1095 22 10.2095 21.85C6.0995 21.15 2.7895 17.82 2.1095 13.7C0.979502 6.85002 6.8195 1.01002 13.6695 2.14002C17.7895 2.82002 21.1195 6.13002 21.8195 10.24C21.9695 11.14 22.0095 12.01 21.9295 12.86Z"
        fill="currentColor"
      />
      <Path
        d="M21.8307 13.41C21.6907 13.9 21.4307 14.34 21.0607 14.71L14.6807 21.09C14.3107 21.46 13.8707 21.72 13.3807 21.86C12.5007 20.82 11.9707 19.47 11.9707 18C11.9707 14.69 14.6607 12 17.9707 12C19.4407 12 20.7907 12.53 21.8307 13.41Z"
        fill="currentColor"
      />
    </Svg>
  );
};

const StickerLinear = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M21.93 12.86C21.91 13.05 21.88 13.23 21.83 13.41C20.79 12.53 19.44 12 17.97 12C14.66 12 11.97 14.69 11.97 18C11.97 19.47 12.5 20.82 13.38 21.86C13.2 21.91 13.02 21.94 12.83 21.96C11.98 22.04 11.11 22 10.21 21.85C6.09999 21.15 2.78999 17.82 2.10999 13.7C0.97999 6.85002 6.81999 1.01002 13.67 2.14002C17.79 2.82002 21.12 6.13002 21.82 10.24C21.97 11.14 22.01 12.01 21.93 12.86Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M21.83 13.41C21.69 13.9 21.43 14.34 21.06 14.71L14.68 21.09C14.31 21.46 13.87 21.72 13.38 21.86C12.5 20.82 11.97 19.47 11.97 18C11.97 14.69 14.66 12 17.97 12C19.44 12 20.79 12.53 21.83 13.41Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

const StickerOutline = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M11.9693 22.7499C11.3593 22.7499 10.7293 22.6999 10.0893 22.5899C5.68932 21.8399 2.09932 18.2399 1.36932 13.8199C0.789319 10.3099 1.87932 6.87991 4.36932 4.38991C6.85932 1.89991 10.2893 0.819909 13.7893 1.38991C18.1993 2.11991 21.8093 5.69991 22.5593 10.0999C22.7193 11.0699 22.7593 12.0199 22.6793 12.9199V12.9299C22.6593 13.1599 22.6193 13.3799 22.5593 13.5999C22.4893 13.8499 22.2993 14.0399 22.0593 14.1199C21.8193 14.1999 21.5493 14.1399 21.3493 13.9799C20.4093 13.1899 19.2093 12.7499 17.9693 12.7499C15.0693 12.7499 12.7193 15.1099 12.7193 17.9999C12.7193 19.2399 13.1593 20.4399 13.9493 21.3799C14.1193 21.5799 14.1693 21.8399 14.0893 22.0899C14.0093 22.3399 13.8193 22.5199 13.5693 22.5899C13.3493 22.6499 13.1293 22.6899 12.8993 22.7099C12.5993 22.7399 12.2893 22.7499 11.9693 22.7499ZM11.9693 2.74991C9.51932 2.74991 7.19932 3.69991 5.43932 5.45991C3.29932 7.59991 2.35932 10.5599 2.85932 13.5799C3.48932 17.3699 6.55932 20.4699 10.3493 21.1099C10.9493 21.2099 11.5193 21.2699 12.0693 21.2499C11.5293 20.2599 11.2393 19.1399 11.2393 17.9999C11.2393 14.2799 14.2693 11.2499 17.9893 11.2499C19.1293 11.2499 20.2493 11.5399 21.2393 12.0799C21.2493 11.5299 21.1993 10.9599 21.0993 10.3599C20.4593 6.57991 17.3593 3.49991 13.5693 2.87991C13.0193 2.78991 12.4893 2.74991 11.9693 2.74991Z"
        fill="currentColor"
      />
      <Path
        d="M13.3807 22.61C13.1607 22.61 12.9507 22.52 12.8107 22.34C11.7907 21.13 11.2207 19.59 11.2207 18C11.2207 14.28 14.2507 11.25 17.9707 11.25C19.5607 11.25 21.1007 11.81 22.3107 12.84C22.5407 13.03 22.6307 13.34 22.5507 13.62C22.3707 14.24 22.0507 14.78 21.5907 15.24L15.2107 21.62C14.7507 22.08 14.2007 22.4 13.5907 22.58C13.5207 22.6 13.4507 22.61 13.3807 22.61ZM17.9707 12.75C15.0707 12.75 12.7207 15.11 12.7207 18C12.7207 19.06 13.0407 20.09 13.6307 20.95C13.8207 20.85 13.9907 20.72 14.1507 20.56L20.5307 14.18C20.6907 14.02 20.8207 13.85 20.9207 13.66C20.0607 13.07 19.0307 12.75 17.9707 12.75Z"
        fill="currentColor"
      />
    </Svg>
  );
};

const StickerTwotone = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M21.9295 12.8598C21.9095 13.0498 21.8795 13.2298 21.8295 13.4098C20.7895 12.5298 19.4395 11.9998 17.9695 11.9998C14.6595 11.9998 11.9695 14.6898 11.9695 17.9998C11.9695 19.4698 12.4995 20.8198 13.3795 21.8598C13.1995 21.9098 13.0195 21.9398 12.8295 21.9598C11.9795 22.0398 11.1095 21.9998 10.2095 21.8498C6.0995 21.1498 2.7895 17.8198 2.1095 13.6998C0.979502 6.84977 6.8195 1.00978 13.6695 2.13978C17.7895 2.81978 21.1195 6.12977 21.8195 10.2398C21.9695 11.1398 22.0095 12.0098 21.9295 12.8598Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M21.8307 13.41C21.6907 13.9 21.4307 14.34 21.0607 14.71L14.6807 21.09C14.3107 21.46 13.8707 21.72 13.3807 21.86C12.5007 20.82 11.9707 19.47 11.9707 18C11.9707 14.69 14.6607 12 17.9707 12C19.4407 12 20.7907 12.53 21.8307 13.41Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

const variants: IconVariants = {
  bold: StickerBold,
  broken: StickerBroken,
  bulk: StickerBulk,
  linear: StickerLinear,
  outline: StickerOutline,
  twotone: StickerTwotone,
};

export const StickerIcon = ({
  variant = "linear",
  className,
  ...props
}: IconProps) => {
  const textClasses = useContext(TextClassContext);
  const Component = variants[variant];
  return <Component className={cn(textClasses, className)} {...props} />;
};
