import { useContext } from "react";
import { cn } from "unative/lib/utils";
import { Path, Svg } from "unative/ui/svg";
import { TextClassContext } from "unative/ui/text";

import type { IconProps, IconVariants } from "../icon-options";
import { defaultOptions } from "../icon-options";

const EyeSlashBold = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M21.2714 9.17834C20.9814 8.71834 20.6714 8.28834 20.3514 7.88834C19.9814 7.41834 19.2814 7.37834 18.8614 7.79834L15.8614 10.7983C16.0814 11.4583 16.1214 12.2183 15.9214 13.0083C15.5714 14.4183 14.4314 15.5583 13.0214 15.9083C12.2314 16.1083 11.4714 16.0683 10.8114 15.8483C10.8114 15.8483 9.38141 17.2783 8.35141 18.3083C7.85141 18.8083 8.01141 19.6883 8.68141 19.9483C9.75141 20.3583 10.8614 20.5683 12.0014 20.5683C13.7814 20.5683 15.5114 20.0483 17.0914 19.0783C18.7014 18.0783 20.1514 16.6083 21.3214 14.7383C22.2714 13.2283 22.2214 10.6883 21.2714 9.17834Z"
        fill="currentColor"
      />
      <Path
        d="M14.0206 9.98062L9.98062 14.0206C9.47062 13.5006 9.14062 12.7806 9.14062 12.0006C9.14062 10.4306 10.4206 9.14062 12.0006 9.14062C12.7806 9.14062 13.5006 9.47062 14.0206 9.98062Z"
        fill="currentColor"
      />
      <Path
        d="M18.25 5.74969L14.86 9.13969C14.13 8.39969 13.12 7.95969 12 7.95969C9.76 7.95969 7.96 9.76969 7.96 11.9997C7.96 13.1197 8.41 14.1297 9.14 14.8597L5.76 18.2497H5.75C4.64 17.3497 3.62 16.1997 2.75 14.8397C1.75 13.2697 1.75 10.7197 2.75 9.14969C3.91 7.32969 5.33 5.89969 6.91 4.91969C8.49 3.95969 10.22 3.42969 12 3.42969C14.23 3.42969 16.39 4.24969 18.25 5.74969Z"
        fill="currentColor"
      />
      <Path
        d="M14.8581 11.9981C14.8581 13.5681 13.5781 14.8581 11.9981 14.8581C11.9381 14.8581 11.8881 14.8581 11.8281 14.8381L14.8381 11.8281C14.8581 11.8881 14.8581 11.9381 14.8581 11.9981Z"
        fill="currentColor"
      />
      <Path
        d="M21.7689 2.22891C21.4689 1.92891 20.9789 1.92891 20.6789 2.22891L2.22891 20.6889C1.92891 20.9889 1.92891 21.4789 2.22891 21.7789C2.37891 21.9189 2.56891 21.9989 2.76891 21.9989C2.96891 21.9989 3.15891 21.9189 3.30891 21.7689L21.7689 3.30891C22.0789 3.00891 22.0789 2.52891 21.7689 2.22891Z"
        fill="currentColor"
      />
    </Svg>
  );
};

const EyeSlashBroken = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M14.5299 9.47004L9.46992 14.53C8.81992 13.88 8.41992 12.99 8.41992 12C8.41992 10.02 10.0199 8.42004 11.9999 8.42004C12.9899 8.42004 13.8799 8.82004 14.5299 9.47004Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M5.59984 17.76C4.59984 16.9 3.68984 15.84 2.88984 14.59C1.98984 13.18 1.98984 10.81 2.88984 9.4C4.06984 7.55 5.50984 6.1 7.11984 5.13"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M17.82 5.76998C16.07 4.44998 14.07 3.72998 12 3.72998"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M8.41992 19.5301C9.55992 20.0101 10.7699 20.2701 11.9999 20.2701C15.5299 20.2701 18.8199 18.1901 21.1099 14.5901C22.0099 13.1801 22.0099 10.8101 21.1099 9.40005C20.7799 8.88005 20.4199 8.39005 20.0499 7.93005"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M15.5095 12.7C15.2495 14.11 14.0995 15.26 12.6895 15.52"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M9.47 14.53L2 22"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M21.9993 2L14.5293 9.47"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

const EyeSlashBulk = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M21.2496 9.15004C20.7596 8.37004 20.1996 7.67004 19.6196 7.04004L15.8496 10.81C15.9696 11.18 16.0396 11.58 16.0396 12C16.0396 14.24 14.2296 16.04 11.9996 16.04C11.5796 16.04 11.1796 15.97 10.8096 15.85L7.34961 19.31C8.80961 20.13 10.3896 20.56 11.9996 20.56C13.7796 20.56 15.5096 20.04 17.0896 19.07C18.6696 18.09 20.0896 16.66 21.2496 14.84C22.2496 13.28 22.2496 10.72 21.2496 9.15004Z"
        fill="currentColor"
      />
      <Path
        d="M14.0206 9.97989L9.98062 14.0199C9.47062 13.4999 9.14062 12.7799 9.14062 11.9999C9.14062 10.4299 10.4206 9.13989 12.0006 9.13989C12.7806 9.13989 13.5006 9.46989 14.0206 9.97989Z"
        fill="currentColor"
      />
      <Path
        opacity="0.4"
        d="M18.25 5.74993L14.86 9.13993C14.13 8.39993 13.12 7.95993 12 7.95993C9.76 7.95993 7.96 9.76993 7.96 11.9999C7.96 13.1199 8.41 14.1299 9.14 14.8599L5.76 18.2499H5.75C4.64 17.3499 3.62 16.1999 2.75 14.8399C1.75 13.2699 1.75 10.7199 2.75 9.14993C3.91 7.32993 5.33 5.89993 6.91 4.91993C8.49 3.95993 10.22 3.42993 12 3.42993C14.23 3.42993 16.39 4.24993 18.25 5.74993Z"
        fill="currentColor"
      />
      <Path
        d="M14.8601 12.0001C14.8601 13.5701 13.5801 14.8601 12.0001 14.8601C11.9401 14.8601 11.8901 14.8601 11.8301 14.8401L14.8401 11.8301C14.8601 11.8901 14.8601 11.9401 14.8601 12.0001Z"
        fill="currentColor"
      />
      <Path
        d="M21.7709 2.22988C21.4709 1.92988 20.9809 1.92988 20.6809 2.22988L2.23086 20.6899C1.93086 20.9899 1.93086 21.4799 2.23086 21.7799C2.38086 21.9199 2.57086 21.9999 2.77086 21.9999C2.97086 21.9999 3.16086 21.9199 3.31086 21.7699L21.7709 3.30988C22.0809 3.00988 22.0809 2.52988 21.7709 2.22988Z"
        fill="currentColor"
      />
    </Svg>
  );
};

const EyeSlashLinear = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M14.53 9.47004L9.47004 14.53C8.82004 13.88 8.42004 12.99 8.42004 12C8.42004 10.02 10.02 8.42004 12 8.42004C12.99 8.42004 13.88 8.82004 14.53 9.47004Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M17.82 5.76998C16.07 4.44998 14.07 3.72998 12 3.72998C8.46997 3.72998 5.17997 5.80998 2.88997 9.40998C1.98997 10.82 1.98997 13.19 2.88997 14.6C3.67997 15.84 4.59997 16.91 5.59997 17.77"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M8.42004 19.5301C9.56004 20.0101 10.77 20.2701 12 20.2701C15.53 20.2701 18.82 18.1901 21.11 14.5901C22.01 13.1801 22.01 10.8101 21.11 9.40005C20.78 8.88005 20.42 8.39005 20.05 7.93005"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M15.5099 12.7C15.2499 14.11 14.0999 15.26 12.6899 15.52"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M9.47 14.53L2 22"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M22 2L14.53 9.47"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

const EyeSlashOutline = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M9.46992 15.2799C9.27992 15.2799 9.08992 15.2099 8.93992 15.0599C8.11992 14.2399 7.66992 13.1499 7.66992 11.9999C7.66992 9.60992 9.60992 7.66992 11.9999 7.66992C13.1499 7.66992 14.2399 8.11992 15.0599 8.93992C15.1999 9.07992 15.2799 9.26992 15.2799 9.46992C15.2799 9.66992 15.1999 9.85992 15.0599 9.99992L9.99992 15.0599C9.84992 15.2099 9.65992 15.2799 9.46992 15.2799ZM11.9999 9.16992C10.4399 9.16992 9.16992 10.4399 9.16992 11.9999C9.16992 12.4999 9.29992 12.9799 9.53992 13.3999L13.3999 9.53992C12.9799 9.29992 12.4999 9.16992 11.9999 9.16992Z"
        fill="currentColor"
      />
      <Path
        d="M5.59984 18.51C5.42984 18.51 5.24984 18.45 5.10984 18.33C4.03984 17.42 3.07984 16.3 2.25984 15C1.19984 13.35 1.19984 10.66 2.25984 8.99998C4.69984 5.17998 8.24984 2.97998 11.9998 2.97998C14.1998 2.97998 16.3698 3.73998 18.2698 5.16998C18.5998 5.41998 18.6698 5.88998 18.4198 6.21998C18.1698 6.54998 17.6998 6.61998 17.3698 6.36998C15.7298 5.12998 13.8698 4.47998 11.9998 4.47998C8.76984 4.47998 5.67984 6.41998 3.51984 9.80998C2.76984 10.98 2.76984 13.02 3.51984 14.19C4.26984 15.36 5.12984 16.37 6.07984 17.19C6.38984 17.46 6.42984 17.93 6.15984 18.25C6.01984 18.42 5.80984 18.51 5.59984 18.51Z"
        fill="currentColor"
      />
      <Path
        d="M12.0006 21.02C10.6706 21.02 9.37055 20.75 8.12055 20.22C7.74055 20.06 7.56055 19.62 7.72055 19.24C7.88055 18.86 8.32055 18.68 8.70055 18.84C9.76055 19.29 10.8706 19.52 11.9906 19.52C15.2206 19.52 18.3106 17.58 20.4706 14.19C21.2206 13.02 21.2206 10.98 20.4706 9.81C20.1606 9.32 19.8205 8.85 19.4606 8.41C19.2006 8.09 19.2506 7.62 19.5706 7.35C19.8906 7.09 20.3605 7.13 20.6306 7.46C21.0206 7.94 21.4006 8.46 21.7406 9C22.8006 10.65 22.8006 13.34 21.7406 15C19.3006 18.82 15.7506 21.02 12.0006 21.02Z"
        fill="currentColor"
      />
      <Path
        d="M12.6896 16.2701C12.3396 16.2701 12.0196 16.0201 11.9496 15.6601C11.8696 15.2501 12.1396 14.8601 12.5496 14.7901C13.6496 14.5901 14.5696 13.6701 14.7696 12.5701C14.8496 12.1601 15.2396 11.9001 15.6496 11.9701C16.0596 12.0501 16.3296 12.4401 16.2496 12.8501C15.9296 14.5801 14.5496 15.9501 12.8296 16.2701C12.7796 16.2601 12.7396 16.2701 12.6896 16.2701Z"
        fill="currentColor"
      />
      <Path
        d="M1.99945 22.75C1.80945 22.75 1.61945 22.68 1.46945 22.53C1.17945 22.24 1.17945 21.76 1.46945 21.47L8.93945 14C9.22945 13.71 9.70945 13.71 9.99945 14C10.2895 14.29 10.2895 14.77 9.99945 15.06L2.52945 22.53C2.37945 22.68 2.18945 22.75 1.99945 22.75Z"
        fill="currentColor"
      />
      <Path
        d="M14.5307 10.2199C14.3407 10.2199 14.1507 10.1499 14.0007 9.99994C13.7107 9.70994 13.7107 9.22994 14.0007 8.93994L21.4707 1.46994C21.7607 1.17994 22.2407 1.17994 22.5307 1.46994C22.8207 1.75994 22.8207 2.23994 22.5307 2.52994L15.0607 9.99994C14.9107 10.1499 14.7207 10.2199 14.5307 10.2199Z"
        fill="currentColor"
      />
    </Svg>
  );
};

const EyeSlashTwotone = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M14.5299 9.46992L9.46992 14.5299C8.81992 13.8799 8.41992 12.9899 8.41992 11.9999C8.41992 10.0199 10.0199 8.41992 11.9999 8.41992C12.9899 8.41992 13.8799 8.81992 14.5299 9.46992Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M17.8198 5.76998C16.0698 4.44998 14.0698 3.72998 11.9998 3.72998C8.46984 3.72998 5.17984 5.80998 2.88984 9.40998C1.98984 10.82 1.98984 13.19 2.88984 14.6C3.67984 15.84 4.59984 16.91 5.59984 17.77"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        opacity="0.4"
        d="M8.41992 19.5302C9.55992 20.0102 10.7699 20.2702 11.9999 20.2702C15.5299 20.2702 18.8199 18.1902 21.1099 14.5902C22.0099 13.1802 22.0099 10.8102 21.1099 9.40018C20.7799 8.88018 20.4199 8.39018 20.0499 7.93018"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        opacity="0.4"
        d="M15.5095 12.7002C15.2495 14.1102 14.0995 15.2602 12.6895 15.5202"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M9.47 14.5298L2 21.9998"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M21.9993 2L14.5293 9.47"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

const variants: IconVariants = {
  bold: EyeSlashBold,
  broken: EyeSlashBroken,
  bulk: EyeSlashBulk,
  linear: EyeSlashLinear,
  outline: EyeSlashOutline,
  twotone: EyeSlashTwotone,
};

export const EyeSlashIcon = ({
  variant = defaultOptions.variant,
  className,
  ...props
}: IconProps) => {
  const textClasses = useContext(TextClassContext);
  const Component = variants[variant];
  return <Component className={cn(textClasses, className)} {...props} />;
};

export default EyeSlashIcon;
