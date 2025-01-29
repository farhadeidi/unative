import { useContext } from "react";
import { cn } from "unative/lib/utils";
import { G, Path, Svg } from "unative/ui/svg";
import { TextClassContext } from "unative/ui/text";

import type { IconProps, IconVariants } from "../icon-options";
import { defaultOptions } from "../icon-options";

const MusicDashboardBold = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M7 3.25178V20.7518C7 21.3918 6.39 21.9018 5.77 21.7318C3.37 21.0518 2 19.0918 2 16.1918V7.81178C2 4.91178 3.37 2.95178 5.77 2.27178C6.39 2.10178 7 2.60178 7 3.25178Z"
        fill="currentColor"
      />
      <Path
        d="M12.4691 14.3711C12.0891 14.3711 11.7891 14.6811 11.7891 15.0511C11.7891 15.4211 12.0991 15.7311 12.4691 15.7311C12.8491 15.7311 13.1591 15.4211 13.1591 15.0511C13.1591 14.6811 12.8491 14.3711 12.4691 14.3711Z"
        fill="currentColor"
      />
      <Path
        d="M17.5181 13.4492C17.1381 13.4492 16.8281 13.7592 16.8281 14.1392C16.8281 14.5192 17.1381 14.8192 17.5181 14.8192C17.8981 14.8192 18.2081 14.5092 18.2081 14.1392C18.2081 13.7692 17.8981 13.4492 17.5181 13.4492Z"
        fill="currentColor"
      />
      <Path
        d="M16.19 2H9.5C8.95 2 8.5 2.45 8.5 3V21C8.5 21.55 8.95 22 9.5 22H16.19C19.4 22 22 19.4 22 16.19V7.81C22 4.6 19.4 2 16.19 2ZM19.6 9.74V14.14C19.6 14.15 19.59 14.16 19.59 14.17C19.57 15.3 18.65 16.21 17.52 16.21C16.38 16.21 15.45 15.28 15.45 14.14C15.45 13 16.38 12.07 17.52 12.07C17.76 12.07 17.99 12.12 18.21 12.2V10.65L14.54 11.65V15.07C14.54 15.08 14.53 15.09 14.53 15.1C14.51 16.23 13.59 17.14 12.46 17.14C11.32 17.14 10.39 16.21 10.39 15.07C10.39 13.93 11.32 13 12.46 13C12.7 13 12.93 13.05 13.15 13.13V11.13V9.5C13.15 8.64 13.68 7.94 14.51 7.73L17.26 6.97C18.12 6.74 18.65 6.97 18.95 7.2C19.38 7.53 19.59 8.05 19.59 8.75V9.74H19.6Z"
        fill="currentColor"
      />
    </Svg>
  );
};

const MusicDashboardBroken = ({
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
        d="M2 9C2 4 4 2 9 2H15C20 2 22 4 22 9V15C22 20 20 22 15 22H9C4 22 2 20 2 15V13.59"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M7 2.5V21.5"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M11.4705 16.8C12.2934 16.8 12.9605 16.133 12.9605 15.3101C12.9605 14.4872 12.2934 13.8201 11.4705 13.8201C10.6476 13.8201 9.98047 14.4872 9.98047 15.3101C9.98047 16.133 10.6476 16.8 11.4705 16.8Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M18.4309 14.31V8.48002C18.4309 7.24002 17.6509 7.07007 16.8609 7.28007L13.8809 8.09006C13.3409 8.24006 12.9609 8.67001 12.9609 9.29001V10.3301V11.0301V15.3"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M16.9314 15.8C17.7543 15.8 18.4214 15.133 18.4214 14.3101C18.4214 13.4872 17.7543 12.8201 16.9314 12.8201C16.1085 12.8201 15.4414 13.4872 15.4414 14.3101C15.4414 15.133 16.1085 15.8 16.9314 15.8Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M12.9609 11.04L18.4309 9.55005"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

const MusicDashboardBulk = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M7 2.0498V21.9498C3.85 21.6598 2 19.5498 2 16.1898V7.80981C2 4.44981 3.85 2.3398 7 2.0498Z"
        fill="currentColor"
      />
      <Path
        opacity="0.4"
        d="M22 7.81V16.19C22 19.83 19.83 22 16.19 22H7.81C7.53 22 7.26 21.99 7 21.95V2.04999C7.26 2.00999 7.53 2 7.81 2H16.19C19.83 2 22 4.17 22 7.81Z"
        fill="currentColor"
      />
      <Path
        d="M18.4902 6.79976C18.1702 6.54976 17.5902 6.30977 16.6702 6.55977L13.6902 7.37977C12.8002 7.60977 12.2202 8.35976 12.2202 9.29976V11.0498V13.2098C11.9902 13.1298 11.7402 13.0698 11.4802 13.0698C10.2402 13.0698 9.24023 14.0798 9.24023 15.3098C9.24023 16.5398 10.2502 17.5498 11.4802 17.5498C12.7002 17.5498 13.7002 16.5597 13.7202 15.3497C13.7202 15.3397 13.7302 15.3298 13.7302 15.3198V11.6198L17.7002 10.5397V12.2197C17.4702 12.1397 17.2202 12.0798 16.9502 12.0798C15.7102 12.0798 14.7102 13.0898 14.7102 14.3198C14.7102 15.5598 15.7202 16.5598 16.9502 16.5598C18.1702 16.5598 19.1702 15.5697 19.1902 14.3497C19.1902 14.3397 19.2002 14.3298 19.2002 14.3098V9.54976V8.47975C19.1802 7.71975 18.9502 7.15976 18.4902 6.79976ZM11.4702 16.0498C11.0602 16.0498 10.7302 15.7198 10.7302 15.3098C10.7302 14.8998 11.0602 14.5698 11.4702 14.5698C11.8802 14.5698 12.2102 14.8998 12.2102 15.3098C12.2102 15.7198 11.8702 16.0498 11.4702 16.0498ZM16.9302 15.0498C16.5202 15.0498 16.1902 14.7198 16.1902 14.3098C16.1902 13.8998 16.5202 13.5698 16.9302 13.5698C17.3402 13.5698 17.6702 13.8998 17.6702 14.3098C17.6702 14.7198 17.3402 15.0498 16.9302 15.0498Z"
        fill="currentColor"
      />
    </Svg>
  );
};

const MusicDashboardLinear = ({
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
        d="M22 15V9C22 4 20 2 15 2H9C4 2 2 4 2 9V15C2 20 4 22 9 22H15C20 22 22 20 22 15Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M7 2.5V21.5"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M11.47 16.8C12.2929 16.8 12.96 16.133 12.96 15.3101C12.96 14.4872 12.2929 13.8201 11.47 13.8201C10.6471 13.8201 9.97998 14.4872 9.97998 15.3101C9.97998 16.133 10.6471 16.8 11.47 16.8Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M18.43 14.31V8.48002C18.43 7.24002 17.65 7.07007 16.86 7.28007L13.88 8.09006C13.34 8.24006 12.96 8.67001 12.96 9.29001V10.3301V11.0301V15.3"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M16.9299 15.8C17.7528 15.8 18.4199 15.133 18.4199 14.3101C18.4199 13.4872 17.7528 12.8201 16.9299 12.8201C16.107 12.8201 15.4399 13.4872 15.4399 14.3101C15.4399 15.133 16.107 15.8 16.9299 15.8Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M12.96 11.04L18.43 9.55005"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

const MusicDashboardOutline = ({
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
        d="M15 22.75H9C3.57 22.75 1.25 20.43 1.25 15V9C1.25 3.57 3.57 1.25 9 1.25H15C20.43 1.25 22.75 3.57 22.75 9V15C22.75 20.43 20.43 22.75 15 22.75ZM9 2.75C4.39 2.75 2.75 4.39 2.75 9V15C2.75 19.61 4.39 21.25 9 21.25H15C19.61 21.25 21.25 19.61 21.25 15V9C21.25 4.39 19.61 2.75 15 2.75H9Z"
        fill="currentColor"
      />
      <Path
        d="M7 22.25C6.59 22.25 6.25 21.91 6.25 21.5V2.5C6.25 2.09 6.59 1.75 7 1.75C7.41 1.75 7.75 2.09 7.75 2.5V21.5C7.75 21.91 7.41 22.25 7 22.25Z"
        fill="currentColor"
      />
      <Path
        d="M11.4705 17.5503C10.2305 17.5503 9.23047 16.5403 9.23047 15.3103C9.23047 14.0803 10.2405 13.0703 11.4705 13.0703C12.7005 13.0703 13.7105 14.0803 13.7105 15.3103C13.7105 16.5403 12.7005 17.5503 11.4705 17.5503ZM11.4705 14.5603C11.0605 14.5603 10.7305 14.8903 10.7305 15.3003C10.7305 15.7103 11.0605 16.0403 11.4705 16.0403C11.8805 16.0403 12.2105 15.7103 12.2105 15.3003C12.2105 14.8903 11.8705 14.5603 11.4705 14.5603Z"
        fill="currentColor"
      />
      <Path
        d="M12.9609 16.06C12.5509 16.06 12.2109 15.72 12.2109 15.31V9.3C12.2109 8.38 12.7909 7.62002 13.6809 7.38002L16.6609 6.57002C17.5809 6.32002 18.1609 6.56001 18.4809 6.81001C18.9409 7.16001 19.1809 7.73001 19.1809 8.50001V14.33C19.1809 14.74 18.8409 15.08 18.4309 15.08C18.0209 15.08 17.6809 14.74 17.6809 14.33V8.50001C17.6809 8.17001 17.6109 8.03002 17.5709 8.01002C17.5209 7.97002 17.3509 7.95004 17.0609 8.03004L14.0809 8.84004C13.8409 8.91004 13.7209 9.06002 13.7209 9.32002V15.33C13.7109 15.72 13.3709 16.06 12.9609 16.06Z"
        fill="currentColor"
      />
      <Path
        d="M16.9295 16.5503C15.6895 16.5503 14.6895 15.5403 14.6895 14.3103C14.6895 13.0703 15.6995 12.0703 16.9295 12.0703C18.1595 12.0703 19.1695 13.0803 19.1695 14.3103C19.1795 15.5503 18.1695 16.5503 16.9295 16.5503ZM16.9295 13.5703C16.5195 13.5703 16.1895 13.9003 16.1895 14.3103C16.1895 14.7203 16.5195 15.0503 16.9295 15.0503C17.3395 15.0503 17.6695 14.7203 17.6695 14.3103C17.6695 13.9003 17.3395 13.5703 16.9295 13.5703Z"
        fill="currentColor"
      />
      <Path
        d="M12.9596 11.7899C12.6296 11.7899 12.3296 11.5699 12.2396 11.2399C12.1296 10.8399 12.3696 10.4299 12.7696 10.3199L18.2396 8.82994C18.6396 8.71994 19.0496 8.95991 19.1596 9.35991C19.2696 9.75991 19.0296 10.17 18.6296 10.28L13.1596 11.7699C13.0896 11.7799 13.0196 11.7899 12.9596 11.7899Z"
        fill="currentColor"
      />
    </Svg>
  );
};

const MusicDashboardTwotone = ({
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
        d="M22 15V9C22 4 20 2 15 2H9C4 2 2 4 2 9V15C2 20 4 22 9 22H15C20 22 22 20 22 15Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        opacity="0.4"
        d="M7 2.5V21.5"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <G opacity="0.4">
        <Path
          d="M11.4705 16.7998C12.2934 16.7998 12.9605 16.1327 12.9605 15.3098C12.9605 14.4869 12.2934 13.8198 11.4705 13.8198C10.6476 13.8198 9.98047 14.4869 9.98047 15.3098C9.98047 16.1327 10.6476 16.7998 11.4705 16.7998Z"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <Path
          d="M18.4309 14.3098V8.47977C18.4309 7.23977 17.6509 7.06982 16.8609 7.27982L13.8809 8.08982C13.3409 8.23982 12.9609 8.66977 12.9609 9.28977V10.3298V11.0298V15.2998"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <Path
          d="M16.9314 15.7998C17.7543 15.7998 18.4214 15.1327 18.4214 14.3098C18.4214 13.4869 17.7543 12.8198 16.9314 12.8198C16.1085 12.8198 15.4414 13.4869 15.4414 14.3098C15.4414 15.1327 16.1085 15.7998 16.9314 15.7998Z"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <Path
          d="M12.9609 11.0398L18.4309 9.5498"
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
  bold: MusicDashboardBold,
  broken: MusicDashboardBroken,
  bulk: MusicDashboardBulk,
  linear: MusicDashboardLinear,
  outline: MusicDashboardOutline,
  twotone: MusicDashboardTwotone,
};

export const MusicDashboardIcon = ({
  variant = defaultOptions.variant,
  className,
  ...props
}: IconProps) => {
  const textClasses = useContext(TextClassContext);
  const Component = variants[variant];
  return <Component className={cn(textClasses, className)} {...props} />;
};

export default MusicDashboardIcon;
