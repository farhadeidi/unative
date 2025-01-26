import { Path, Svg } from "unative/lib/svg";
import { cn } from "unative/lib/utils";

import type { IconProps, IconVariants } from "../types/icons-type";

const MenuBoardBold = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M20.9009 9.85L21.4909 19.74C21.5109 20.01 21.3809 20.19 21.3109 20.27C21.2309 20.36 21.0609 20.5 20.7809 20.5H18.0509L20.2109 9.85H20.9009ZM22.0009 6L21.9909 6.02C22.0109 6.26 21.9909 6.51 21.9309 6.76L14.5609 20.29C14.3209 21.3 13.4209 22 12.3809 22H20.7809C22.0709 22 23.0909 20.91 22.9909 19.62L22.0009 6Z"
        fill="currentColor"
      />
      <Path
        d="M11.4502 2.24136C11.5502 1.84136 11.3002 1.43136 10.9002 1.33136C10.5002 1.24136 10.0902 1.48136 9.99023 1.88136L9.49023 3.95136H11.0302L11.4502 2.24136Z"
        fill="currentColor"
      />
      <Path
        d="M18.0509 2.20859C18.1409 1.79859 17.8809 1.40859 17.4709 1.31859C17.0709 1.22859 16.6709 1.48859 16.5809 1.89859L16.1309 3.96859H17.6709L18.0509 2.20859Z"
        fill="currentColor"
      />
      <Path
        d="M21.8198 5.33141C21.4898 4.53141 20.7098 3.96141 19.7498 3.96141H17.6698L17.1098 6.55141C17.0298 6.90141 16.7198 7.14141 16.3798 7.14141C16.3298 7.14141 16.2698 7.14141 16.2198 7.12141C15.8198 7.03141 15.5598 6.63141 15.6398 6.23141L16.1298 3.95141H11.0298L10.3998 6.55141C10.3198 6.89141 10.0098 7.12141 9.66975 7.12141C9.60975 7.12141 9.54976 7.11141 9.48975 7.10141C9.08976 7.00141 8.83975 6.60141 8.93975 6.19141L9.47975 3.94141H7.44975C6.46975 3.94141 5.59975 4.58141 5.30975 5.52141L1.09975 19.0714C0.659754 20.5214 1.72975 22.0014 3.23975 22.0014H16.3798C17.4198 22.0014 18.3198 21.3014 18.5598 20.2914L21.9298 6.76141C21.9898 6.51141 22.0098 6.26141 21.9898 6.02141C21.9698 5.78141 21.9198 5.54141 21.8198 5.33141ZM14.6998 16.7514H6.69975C6.28975 16.7514 5.94975 16.4114 5.94975 16.0014C5.94975 15.5914 6.28975 15.2514 6.69975 15.2514H14.6998C15.1098 15.2514 15.4498 15.5914 15.4498 16.0014C15.4498 16.4114 15.1098 16.7514 14.6998 16.7514ZM15.6998 12.7514H7.69975C7.28975 12.7514 6.94975 12.4114 6.94975 12.0014C6.94975 11.5914 7.28975 11.2514 7.69975 11.2514H15.6998C16.1098 11.2514 16.4498 11.5914 16.4498 12.0014C16.4498 12.4114 16.1098 12.7514 15.6998 12.7514Z"
        fill="currentColor"
      />
    </Svg>
  );
};

const MenuBoardBroken = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M1.09976 19.0699C0.659756 20.5299 1.72974 22 3.23974 22H16.3798C17.4198 22 18.3097 21.3 18.5597 20.29L21.9297 6.76001C22.0497 6.26001 22.0098 5.76997 21.8198 5.33997C21.4898 4.53997 20.6998 3.95996 19.7498 3.95996H7.44976C6.46976 3.95996 5.58975 4.60005 5.30975 5.55005L2.67974 14.01"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M16 22H20.78C22.07 22 23.08 20.91 22.99 19.62L22 6"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M9.67969 6.38L10.7197 2.06006"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M16.3809 6.39001L17.3209 2.05005"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M7.69922 12H15.6992"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M14.7 16H14"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M6.69922 16H10.9992"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

const MenuBoardBulk = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M21.9897 6.01996C22.0097 6.25996 21.9897 6.50995 21.9297 6.75995L18.5597 20.2899C18.3197 21.2999 17.4198 21.9999 16.3798 21.9999H3.23974C1.72974 21.9999 0.659755 20.5199 1.09976 19.0699L5.30975 5.53992C5.59975 4.59992 6.46976 3.95996 7.44976 3.95996H19.7498C20.7097 3.95996 21.4898 4.52996 21.8198 5.32996C21.9198 5.53996 21.9697 5.77996 21.9897 6.01996Z"
        fill="currentColor"
      />
      <Path
        d="M22.9908 19.62C23.0908 20.91 22.0709 22 20.7809 22H16.3809C17.4209 22 18.3209 21.3 18.5609 20.29L21.9308 6.76001C21.9908 6.51001 22.0108 6.26002 21.9908 6.02002L22.0009 6L22.9908 19.62Z"
        fill="currentColor"
      />
      <Path
        d="M9.67977 7.12989C9.61977 7.12989 9.55977 7.11987 9.49977 7.10987C9.09977 7.00987 8.84979 6.6099 8.94979 6.1999L9.98976 1.87989C10.0898 1.47989 10.4898 1.2399 10.8998 1.3299C11.2998 1.4299 11.5498 1.82987 11.4498 2.23987L10.4098 6.55988C10.3298 6.89988 10.0198 7.12989 9.67977 7.12989Z"
        fill="currentColor"
      />
      <Path
        d="M16.3795 7.1398C16.3295 7.1398 16.2694 7.13978 16.2194 7.11978C15.8194 7.02978 15.5595 6.62977 15.6395 6.22977L16.5794 1.8898C16.6694 1.4798 17.0694 1.22978 17.4694 1.30978C17.8694 1.39978 18.1294 1.7998 18.0494 2.1998L17.1094 6.53976C17.0394 6.89977 16.7295 7.1398 16.3795 7.1398Z"
        fill="currentColor"
      />
      <Path
        d="M15.6992 12.75H7.69922C7.28922 12.75 6.94922 12.41 6.94922 12C6.94922 11.59 7.28922 11.25 7.69922 11.25H15.6992C16.1092 11.25 16.4492 11.59 16.4492 12C16.4492 12.41 16.1092 12.75 15.6992 12.75Z"
        fill="currentColor"
      />
      <Path
        d="M14.6992 16.75H6.69922C6.28922 16.75 5.94922 16.41 5.94922 16C5.94922 15.59 6.28922 15.25 6.69922 15.25H14.6992C15.1092 15.25 15.4492 15.59 15.4492 16C15.4492 16.41 15.1092 16.75 14.6992 16.75Z"
        fill="currentColor"
      />
    </Svg>
  );
};

const MenuBoardLinear = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M21.93 6.76001L18.56 20.29C18.32 21.3 17.42 22 16.38 22H3.24001C1.73001 22 0.650023 20.5199 1.10002 19.0699L5.31001 5.55005C5.60001 4.61005 6.47003 3.95996 7.45003 3.95996H19.75C20.7 3.95996 21.49 4.53997 21.82 5.33997C22.01 5.76997 22.05 6.26001 21.93 6.76001Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeMiterlimit="10"
      />
      <Path
        d="M16 22H20.78C22.07 22 23.08 20.91 22.99 19.62L22 6"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M9.67999 6.38L10.72 2.06006"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M16.38 6.39001L17.32 2.05005"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M7.70001 12H15.7"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M6.70001 16H14.7"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

const MenuBoardOutline = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M16.3809 22.7502H3.2409C2.2909 22.7502 1.41091 22.3103 0.840908 21.5403C0.260908 20.7603 0.0909169 19.7802 0.380917 18.8502L4.59091 5.32019C4.97091 4.06019 6.13092 3.2002 7.45092 3.2002H19.7509C20.9609 3.2002 22.0509 3.92028 22.5109 5.04028C22.7609 5.62028 22.8109 6.2803 22.6609 6.9303L19.2909 20.4602C18.9709 21.8102 17.7709 22.7502 16.3809 22.7502ZM7.4609 4.71021C6.8109 4.71021 6.22091 5.14026 6.03091 5.77026L1.82092 19.3003C1.68092 19.7703 1.76091 20.2603 2.06091 20.6603C2.34091 21.0403 2.78091 21.2603 3.25091 21.2603H16.3909C17.0809 21.2603 17.6809 20.7902 17.8409 20.1202L21.2109 6.5802C21.2909 6.2502 21.2709 5.92025 21.1409 5.63025C20.9009 5.06025 20.3709 4.7002 19.7609 4.7002H7.4609V4.71021Z"
        fill="currentColor"
      />
      <Path
        d="M20.78 22.75H16C15.59 22.75 15.25 22.41 15.25 22C15.25 21.59 15.59 21.25 16 21.25H20.78C21.19 21.25 21.57 21.08 21.85 20.78C22.13 20.48 22.27 20.08 22.24 19.67L21.25 6.05002C21.22 5.64002 21.53 5.27997 21.94 5.24997C22.35 5.22997 22.71 5.52991 22.74 5.93991L23.73 19.56C23.79 20.38 23.5 21.2 22.94 21.8C22.39 22.41 21.6 22.75 20.78 22.75Z"
        fill="currentColor"
      />
      <Path
        d="M9.67977 7.12971C9.61977 7.12971 9.55977 7.11969 9.49977 7.10969C9.09977 7.00969 8.84979 6.60966 8.94979 6.19966L9.98976 1.87971C10.0898 1.47971 10.4898 1.22966 10.8998 1.32966C11.2998 1.42966 11.5498 1.8297 11.4498 2.2397L10.4098 6.55977C10.3298 6.89977 10.0198 7.12971 9.67977 7.12971Z"
        fill="currentColor"
      />
      <Path
        d="M16.3795 7.13974C16.3295 7.13974 16.2694 7.13972 16.2194 7.11972C15.8194 7.02972 15.5595 6.62971 15.6395 6.22971L16.5794 1.88974C16.6694 1.47974 17.0694 1.22979 17.4694 1.30979C17.8694 1.38979 18.1294 1.79968 18.0494 2.19968L17.1094 6.53977C17.0394 6.89977 16.7295 7.13974 16.3795 7.13974Z"
        fill="currentColor"
      />
      <Path
        d="M15.6992 12.75H7.69922C7.28922 12.75 6.94922 12.41 6.94922 12C6.94922 11.59 7.28922 11.25 7.69922 11.25H15.6992C16.1092 11.25 16.4492 11.59 16.4492 12C16.4492 12.41 16.1092 12.75 15.6992 12.75Z"
        fill="currentColor"
      />
      <Path
        d="M14.6992 16.75H6.69922C6.28922 16.75 5.94922 16.41 5.94922 16C5.94922 15.59 6.28922 15.25 6.69922 15.25H14.6992C15.1092 15.25 15.4492 15.59 15.4492 16C15.4492 16.41 15.1092 16.75 14.6992 16.75Z"
        fill="currentColor"
      />
    </Svg>
  );
};

const MenuBoardTwotone = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M21.9292 6.76001L18.5592 20.29C18.3192 21.3 17.4192 22 16.3792 22H3.23915C1.72915 22 0.649169 20.5199 1.09917 19.0699L5.30916 5.55005C5.59916 4.61005 6.46917 3.95996 7.44917 3.95996H19.7492C20.6992 3.95996 21.4892 4.53997 21.8192 5.33997C22.0092 5.76997 22.0492 6.26001 21.9292 6.76001Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeMiterlimit="10"
      />
      <Path
        opacity="0.4"
        d="M16 22H20.78C22.07 22 23.08 20.91 22.99 19.62L22 6"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M9.67969 6.38L10.7197 2.06006"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M16.3809 6.38977L17.3209 2.0498"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        opacity="0.4"
        d="M7.69922 12H15.6992"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        opacity="0.4"
        d="M6.69922 16H14.6992"
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
  bold: MenuBoardBold,
  broken: MenuBoardBroken,
  bulk: MenuBoardBulk,
  linear: MenuBoardLinear,
  outline: MenuBoardOutline,
  twotone: MenuBoardTwotone,
};

export const MenuBoardIcon = ({ variant = "linear", ...props }: IconProps) => {
  const Component = variants[variant];
  return <Component {...props} />;
};
