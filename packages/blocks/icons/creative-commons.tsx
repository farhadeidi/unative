import { useContext } from "react";
import { Path, Svg } from "unative/lib/svg";
import { cn } from "unative/lib/utils";
import { TextClassContext } from "unative/ui/text";

import { iconDefaultOptions } from "../icons-configuration";
import type { IconProps, IconVariants } from "../types/icons-type";

const CreativeCommonsBold = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM8.99 14.12C9.5 14.12 10 13.93 10.39 13.59C10.7 13.32 11.18 13.35 11.45 13.66C11.72 13.97 11.69 14.45 11.38 14.72C10.72 15.3 9.87 15.62 8.99 15.62C6.99 15.62 5.37 14 5.37 12C5.37 10 6.99 8.38 8.99 8.38C9.87 8.38 10.71 8.7 11.38 9.28C11.69 9.55 11.72 10.03 11.45 10.34C11.18 10.65 10.7 10.68 10.39 10.41C10 10.07 9.5 9.88 8.99 9.88C7.82 9.88 6.87 10.83 6.87 12C6.87 13.17 7.82 14.12 8.99 14.12ZM15.99 14.12C16.5 14.12 17 13.93 17.39 13.59C17.7 13.32 18.18 13.35 18.45 13.66C18.72 13.97 18.69 14.45 18.38 14.72C17.72 15.3 16.87 15.62 15.99 15.62C13.99 15.62 12.37 14 12.37 12C12.37 10 13.99 8.38 15.99 8.38C16.87 8.38 17.71 8.7 18.38 9.28C18.69 9.55 18.72 10.03 18.45 10.34C18.18 10.65 17.7 10.68 17.39 10.41C17 10.07 16.51 9.88 15.99 9.88C14.82 9.88 13.87 10.83 13.87 12C13.87 13.17 14.82 14.12 15.99 14.12Z"
        fill="currentColor"
      />
    </Svg>
  );
};

const CreativeCommonsBroken = ({
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
        d="M10.8792 14.1499C10.3692 14.5899 9.70914 14.8699 8.98914 14.8699C7.40914 14.8699 6.11914 13.5899 6.11914 11.9999C6.11914 10.4099 7.39914 9.12988 8.98914 9.12988C9.71914 9.12988 10.3792 9.39985 10.8792 9.84985"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M17.8792 14.1499C17.3692 14.5899 16.7091 14.8699 15.9891 14.8699C14.4091 14.8699 13.1191 13.5899 13.1191 11.9999C13.1191 10.4099 14.3991 9.12988 15.9891 9.12988C16.7191 9.12988 17.3792 9.39985 17.8792 9.84985"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M4 6C2.75 7.67 2 9.75 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2C10.57 2 9.19997 2.29998 7.96997 2.84998"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

const CreativeCommonsBulk = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M12 22C6.48 22 2 17.52 2 12C2 6.48 6.48 2 12 2C17.52 2 22 6.48 22 12C22 17.52 17.52 22 12 22Z"
        fill="currentColor"
      />
      <Path
        d="M8.98914 15.6199C6.98914 15.6199 5.36914 13.9999 5.36914 11.9999C5.36914 9.99988 6.98914 8.37988 8.98914 8.37988C9.86914 8.37988 10.7092 8.69991 11.3792 9.27991C11.6892 9.54991 11.7192 10.0299 11.4492 10.3399C11.1792 10.6499 10.6992 10.6799 10.3892 10.4099C9.99916 10.0699 9.50914 9.87988 8.98914 9.87988C7.81914 9.87988 6.86914 10.8299 6.86914 11.9999C6.86914 13.1699 7.81914 14.1199 8.98914 14.1199C9.49914 14.1199 9.99916 13.9299 10.3892 13.5899C10.6992 13.3199 11.1792 13.3499 11.4492 13.6599C11.7192 13.9699 11.6892 14.4498 11.3792 14.7198C10.7092 15.2998 9.85914 15.6199 8.98914 15.6199Z"
        fill="currentColor"
      />
      <Path
        d="M15.9891 15.6199C13.9891 15.6199 12.3691 13.9999 12.3691 11.9999C12.3691 9.99988 13.9891 8.37988 15.9891 8.37988C16.8691 8.37988 17.7092 8.69991 18.3792 9.27991C18.6892 9.54991 18.7192 10.0299 18.4492 10.3399C18.1792 10.6499 17.6992 10.6799 17.3892 10.4099C16.9992 10.0699 16.5091 9.87988 15.9891 9.87988C14.8191 9.87988 13.8691 10.8299 13.8691 11.9999C13.8691 13.1699 14.8191 14.1199 15.9891 14.1199C16.4991 14.1199 16.9992 13.9299 17.3892 13.5899C17.6992 13.3199 18.1792 13.3499 18.4492 13.6599C18.7192 13.9699 18.6892 14.4498 18.3792 14.7198C17.7092 15.2998 16.8591 15.6199 15.9891 15.6199Z"
        fill="currentColor"
      />
    </Svg>
  );
};

const CreativeCommonsLinear = ({
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
        d="M12 22C6.48 22 2 17.52 2 12C2 6.48 6.48 2 12 2C17.52 2 22 6.48 22 12C22 17.52 17.52 22 12 22Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M10.88 14.1499C10.37 14.5899 9.70999 14.8699 8.98999 14.8699C7.40999 14.8699 6.12 13.5899 6.12 11.9999C6.12 10.4099 7.39999 9.12988 8.98999 9.12988C9.71999 9.12988 10.38 9.39985 10.88 9.84985"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M17.88 14.1499C17.37 14.5899 16.71 14.8699 15.99 14.8699C14.41 14.8699 13.12 13.5899 13.12 11.9999C13.12 10.4099 14.4 9.12988 15.99 9.12988C16.72 9.12988 17.38 9.39985 17.88 9.84985"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

const CreativeCommonsOutline = ({
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
        d="M12 22.75C6.07 22.75 1.25 17.93 1.25 12C1.25 6.07 6.07 1.25 12 1.25C17.93 1.25 22.75 6.07 22.75 12C22.75 17.93 17.93 22.75 12 22.75ZM12 2.75C6.9 2.75 2.75 6.9 2.75 12C2.75 17.1 6.9 21.25 12 21.25C17.1 21.25 21.25 17.1 21.25 12C21.25 6.9 17.1 2.75 12 2.75Z"
        fill="currentColor"
      />
      <Path
        d="M8.99109 15.6199C6.99109 15.6199 5.37109 13.9999 5.37109 11.9999C5.37109 9.99988 6.99109 8.37988 8.99109 8.37988C9.87109 8.37988 10.7111 8.69991 11.3811 9.27991C11.6911 9.54991 11.7211 10.0299 11.4511 10.3399C11.1811 10.6499 10.7011 10.6799 10.3911 10.4099C10.0011 10.0699 9.51109 9.87988 8.99109 9.87988C7.82109 9.87988 6.87109 10.8299 6.87109 11.9999C6.87109 13.1699 7.82109 14.1199 8.99109 14.1199C9.50109 14.1199 10.0011 13.9299 10.3911 13.5899C10.7011 13.3199 11.1711 13.3499 11.4511 13.6599C11.7211 13.9699 11.6911 14.4498 11.3811 14.7198C10.7111 15.2998 9.86109 15.6199 8.99109 15.6199Z"
        fill="currentColor"
      />
      <Path
        d="M15.9911 15.6199C13.9911 15.6199 12.3711 13.9999 12.3711 11.9999C12.3711 9.99988 13.9911 8.37988 15.9911 8.37988C16.8711 8.37988 17.7111 8.69991 18.3811 9.27991C18.6911 9.54991 18.7211 10.0299 18.4511 10.3399C18.1811 10.6499 17.7011 10.6799 17.3911 10.4099C17.0011 10.0699 16.5111 9.87988 15.9911 9.87988C14.8211 9.87988 13.8711 10.8299 13.8711 11.9999C13.8711 13.1699 14.8211 14.1199 15.9911 14.1199C16.5011 14.1199 17.0011 13.9299 17.3911 13.5899C17.7011 13.3199 18.1711 13.3499 18.4511 13.6599C18.7211 13.9699 18.6911 14.4498 18.3811 14.7198C17.7111 15.2998 16.8611 15.6199 15.9911 15.6199Z"
        fill="currentColor"
      />
    </Svg>
  );
};

const CreativeCommonsTwotone = ({
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
        d="M12 22C6.48 22 2 17.52 2 12C2 6.48 6.48 2 12 2C17.52 2 22 6.48 22 12C22 17.52 17.52 22 12 22Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        opacity="0.4"
        d="M10.8792 14.1499C10.3692 14.5899 9.70914 14.8699 8.98914 14.8699C7.40914 14.8699 6.11914 13.5899 6.11914 11.9999C6.11914 10.4099 7.39914 9.12988 8.98914 9.12988C9.71914 9.12988 10.3792 9.39985 10.8792 9.84985"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        opacity="0.4"
        d="M17.8792 14.1499C17.3692 14.5899 16.7091 14.8699 15.9891 14.8699C14.4091 14.8699 13.1191 13.5899 13.1191 11.9999C13.1191 10.4099 14.3991 9.12988 15.9891 9.12988C16.7191 9.12988 17.3792 9.39985 17.8792 9.84985"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

const variants: IconVariants = {
  bold: CreativeCommonsBold,
  broken: CreativeCommonsBroken,
  bulk: CreativeCommonsBulk,
  linear: CreativeCommonsLinear,
  outline: CreativeCommonsOutline,
  twotone: CreativeCommonsTwotone,
};

export const CreativeCommonsIcon = ({
  variant = iconDefaultOptions.variant,
  className,
  ...props
}: IconProps) => {
  const textClasses = useContext(TextClassContext);
  const Component = variants[variant];
  return <Component className={cn(textClasses, className)} {...props} />;
};
