import { Path, Svg } from "unative/lib/svg";
import { cn } from "unative/lib/utils";

import type { IconProps, IconVariants } from "../types/icons-type";

const ShieldTickBold = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M18.5408 4.11984L13.0408 2.05984C12.4708 1.84984 11.5408 1.84984 10.9708 2.05984L5.47078 4.11984C4.41078 4.51984 3.55078 5.75984 3.55078 6.88984V14.9898C3.55078 15.7998 4.08078 16.8698 4.73078 17.3498L10.2308 21.4598C11.2008 22.1898 12.7908 22.1898 13.7608 21.4598L19.2608 17.3498C19.9108 16.8598 20.4408 15.7998 20.4408 14.9898V6.88984C20.4508 5.75984 19.5908 4.51984 18.5408 4.11984ZM15.4808 9.71984L11.1808 14.0198C11.0308 14.1698 10.8408 14.2398 10.6508 14.2398C10.4608 14.2398 10.2708 14.1698 10.1208 14.0198L8.52078 12.3998C8.23078 12.1098 8.23078 11.6298 8.52078 11.3398C8.81078 11.0498 9.29078 11.0498 9.58078 11.3398L10.6608 12.4198L14.4308 8.64984C14.7208 8.35984 15.2008 8.35984 15.4908 8.64984C15.7808 8.93984 15.7808 9.42984 15.4808 9.71984Z"
        fill="currentColor"
      />
    </Svg>
  );
};

const ShieldTickBroken = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M9.05078 11.8701L10.6608 13.4801L14.9608 9.18005"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M20.5902 7.12006C20.5902 5.89006 19.6502 4.53006 18.5002 4.10006L13.5102 2.23006C12.6802 1.92006 11.3202 1.92006 10.4902 2.23006L5.50016 4.11006C4.35016 4.54006 3.41016 5.90006 3.41016 7.12006V14.5501C3.41016 15.7301 4.19016 17.2801 5.14016 17.9901L9.44016 21.2001C10.8502 22.2601 13.1702 22.2601 14.5802 21.2001L18.8802 17.9901C19.8302 17.2801 20.6102 15.7301 20.6102 14.5501V11.0301"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

const ShieldTickBulk = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M10.9608 2.06008L5.46078 4.12008C4.41078 4.52008 3.55078 5.76008 3.55078 6.89008V14.9901C3.55078 15.8001 4.08078 16.8701 4.73078 17.3501L10.2308 21.4601C11.2008 22.1901 12.7908 22.1901 13.7608 21.4601L19.2608 17.3501C19.9108 16.8601 20.4408 15.8001 20.4408 14.9901V6.89008C20.4408 5.77008 19.5808 4.52008 18.5308 4.13008L13.0308 2.07008C12.4708 1.85008 11.5308 1.85008 10.9608 2.06008Z"
        fill="currentColor"
      />
      <Path
        d="M10.6602 14.2301C10.4702 14.2301 10.2802 14.1601 10.1302 14.0101L8.52023 12.4001C8.23023 12.1101 8.23023 11.6301 8.52023 11.3401C8.81023 11.0501 9.29023 11.0501 9.58023 11.3401L10.6602 12.4201L14.4302 8.65012C14.7202 8.36012 15.2002 8.36012 15.4902 8.65012C15.7802 8.94012 15.7802 9.42012 15.4902 9.71012L11.1902 14.0101C11.0402 14.1601 10.8502 14.2301 10.6602 14.2301Z"
        fill="currentColor"
      />
    </Svg>
  );
};

const ShieldTickLinear = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M10.49 2.23006L5.50003 4.11006C4.35003 4.54006 3.41003 5.90006 3.41003 7.12006V14.5501C3.41003 15.7301 4.19003 17.2801 5.14003 17.9901L9.44003 21.2001C10.85 22.2601 13.17 22.2601 14.58 21.2001L18.88 17.9901C19.83 17.2801 20.61 15.7301 20.61 14.5501V7.12006C20.61 5.89006 19.67 4.53006 18.52 4.10006L13.53 2.23006C12.68 1.92006 11.32 1.92006 10.49 2.23006Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M9.05005 11.8701L10.66 13.4801L14.96 9.18005"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

const ShieldTickOutline = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M12.0004 22.7599C10.9104 22.7599 9.83039 22.4399 8.98039 21.8099L4.68039 18.5999C3.54039 17.7499 2.65039 15.9699 2.65039 14.5599V7.11994C2.65039 5.57994 3.78039 3.93994 5.23039 3.39994L10.2204 1.52994C11.2104 1.15994 12.7704 1.15994 13.7604 1.52994L18.7504 3.39994C20.2004 3.93994 21.3304 5.57994 21.3304 7.11994V14.5499C21.3304 15.9699 20.4404 17.7399 19.3004 18.5899L15.0004 21.7999C14.1704 22.4399 13.0904 22.7599 12.0004 22.7599ZM10.7504 2.93994L5.76039 4.80994C4.91039 5.12994 4.16039 6.20994 4.16039 7.12994V14.5599C4.16039 15.5099 4.83039 16.8399 5.58039 17.3999L9.88039 20.6099C11.0304 21.4699 12.9704 21.4699 14.1304 20.6099L18.4304 17.3999C19.1904 16.8299 19.8504 15.5099 19.8504 14.5599V7.11994C19.8504 6.20994 19.1004 5.12994 18.2504 4.79994L13.2604 2.92994C12.5804 2.68994 11.4204 2.68994 10.7504 2.93994Z"
        fill="currentColor"
      />
      <Path
        d="M10.6602 14.2301C10.4702 14.2301 10.2802 14.1601 10.1302 14.0101L8.52023 12.4001C8.23023 12.1101 8.23023 11.6301 8.52023 11.3401C8.81023 11.0501 9.29023 11.0501 9.58023 11.3401L10.6602 12.4201L14.4302 8.65012C14.7202 8.36012 15.2002 8.36012 15.4902 8.65012C15.7802 8.94012 15.7802 9.42012 15.4902 9.71012L11.1902 14.0101C11.0402 14.1601 10.8502 14.2301 10.6602 14.2301Z"
        fill="currentColor"
      />
    </Svg>
  );
};

const ShieldTickTwotone = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M10.4902 2.23006L5.50016 4.11006C4.35016 4.54006 3.41016 5.90006 3.41016 7.12006V14.5501C3.41016 15.7301 4.19016 17.2801 5.14016 17.9901L9.44016 21.2001C10.8502 22.2601 13.1702 22.2601 14.5802 21.2001L18.8802 17.9901C19.8302 17.2801 20.6102 15.7301 20.6102 14.5501V7.12006C20.6102 5.89006 19.6702 4.53006 18.5202 4.10006L13.5302 2.23006C12.6802 1.92006 11.3202 1.92006 10.4902 2.23006Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        opacity="0.4"
        d="M9.05078 11.8702L10.6608 13.4802L14.9608 9.18018"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

const variants: IconVariants = {
  bold: ShieldTickBold,
  broken: ShieldTickBroken,
  bulk: ShieldTickBulk,
  linear: ShieldTickLinear,
  outline: ShieldTickOutline,
  twotone: ShieldTickTwotone,
};

export const ShieldTickIcon = ({ variant = "linear", ...props }: IconProps) => {
  const Component = variants[variant];
  return <Component {...props} />;
};
